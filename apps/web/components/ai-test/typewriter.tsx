"use client";

import { useEffect, useMemo, useState } from "react";

/** แยกเป็นกราฟีม เพื่อไม่ตัดสระ/วรรณยุกต์ไทย ลาว เขมร พม่า ฮินดี ออกจากพยัญชนะ */
function graphemes(text: string, lang: string): string[] {
  const Seg = (Intl as unknown as { Segmenter?: typeof Intl.Segmenter }).Segmenter;
  if (Seg) return Array.from(new Seg(lang, { granularity: "grapheme" }).segment(text), (s) => s.segment);
  return Array.from(text);
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

/**
 * พิมพ์ข้อความทีละตัว — คลิกเพื่อแสดงทั้งหมดทันที
 * โปรแกรมอ่านหน้าจอได้ข้อความเต็มทันที (sr-only) ส่วนที่กำลังพิมพ์ซ่อนจาก AT
 */
export function Typewriter({
  text,
  lang,
  className,
  /** เวลารวมสูงสุด (ms) — ข้อความยาวจะพิมพ์เร็วขึ้นเพื่อไม่ให้รอนาน */
  maxDuration = 1600,
  charDelay = 32,
}: {
  text: string;
  lang: string;
  className?: string;
  maxDuration?: number;
  charDelay?: number;
}) {
  const parts = useMemo(() => graphemes(text, lang), [text, lang]);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setShown(parts.length);
      return;
    }
    setShown(0);
    const step = Math.max(8, Math.min(charDelay, maxDuration / Math.max(1, parts.length)));
    const startedAt = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const n = Math.min(parts.length, Math.floor((now - startedAt) / step) + 1);
      setShown(n);
      if (n < parts.length) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [parts, charDelay, maxDuration]);

  const done = shown >= parts.length;
  return (
    <span className={className} onClick={() => setShown(parts.length)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {parts.slice(0, shown).join("")}
        <span
          className={`ms-0.5 inline-block h-[1em] w-[0.08em] min-w-[2px] translate-y-[0.15em] bg-[#00f5d4] align-baseline ${
            done ? "animate-pulse opacity-60" : ""
          }`}
        />
        {/* จองพื้นที่ข้อความที่เหลือ เพื่อไม่ให้การ์ดยืดหดระหว่างพิมพ์ */}
        <span className="invisible">{parts.slice(shown).join("")}</span>
      </span>
    </span>
  );
}
