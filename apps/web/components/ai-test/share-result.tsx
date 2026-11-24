"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, Copy, Download, Share2 } from "lucide-react";
import { FacebookGlyph as Facebook, InstagramGlyph as Instagram } from "@/components/brand-icons";
import { getLang, useI18n } from "@/lib/ai-test/i18n";
import { getShareText } from "@/lib/ai-test/i18n/share";
import { getFormText } from "@/lib/ai-test/i18n/form";
import { getGradeText } from "@/lib/ai-test/i18n/grade";
import type { Grade } from "@/lib/ai-test/grade";
import { renderShareCard } from "@/lib/ai-test/share-image";
import type { LevelKey, VerdictKey } from "@/lib/ai-test/quiz";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function openPopup(url: string) {
  window.open(url, "_blank", "noopener,noreferrer,width=640,height=720");
}

function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

/** เว็บไซต์ที่พิมพ์ไว้ท้ายรูปแชร์ */
export const SHARE_SITE = "techzup.space/ai-psychosis-test";

export function ShareResult({
  grade,
  clarity,
  name,
  date,
  attempt,
  aiPct,
  antiPct,
  aiLevel,
  antiLevel,
  verdictKey,
}: {
  grade: Grade;
  clarity: number;
  name: string;
  date: string;
  attempt: string;
  aiPct: number;
  antiPct: number;
  aiLevel: LevelKey;
  antiLevel: LevelKey;
  verdictKey: VerdictKey;
}) {
  const { t, lang } = useI18n();
  const s = getShareText(lang);
  const fl = getFormText(lang).card;
  const gt = getGradeText(lang);
  const verdict = t.results.verdicts[verdictKey];
  const [preview, setPreview] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [hint, setHint] = useState<string | null>(null);
  const blobRef = useRef<Blob | null>(null);

  const shareUrl = useCallback(() => {
    const q = new URLSearchParams({ ai: String(aiPct), anti: String(antiPct), lang });
    return `${window.location.origin}/ai-psychosis-test/share?${q.toString()}`;
  }, [aiPct, antiPct, lang]);

  const caption = useMemo(
    () =>
      `[${grade} · ${gt.tiers[grade].rarity}] ${verdict.title} — AI-PSYCHOSIS ${aiPct}% · ANTI-AI PSYCHOSIS ${antiPct}%. ${s.cta}`,
    [verdict.title, aiPct, antiPct, s.cta, grade, gt]
  );

  const makeCard = useCallback(
    () =>
      renderShareCard({
        aiPct,
        antiPct,
        verdictKey,
        heading: t.results.heading,
        verdictSubtitle: verdict.subtitle,
        verdictTitle: verdict.title,
        verdictDescription: verdict.description,
        aiLevel: `${t.results.levelPrefix}${t.results.levels[aiLevel].label}`,
        antiLevel: `${t.results.levelPrefix}${t.results.levels[antiLevel].label}`,
        mapHeading: t.results.mapHeading,
        youAreHere: t.results.youAreHere,
        footer: SHARE_SITE,
        grade,
        clarity,
        gradeTitle: gt.title,
        rarity: gt.tiers[grade].rarity,
        name,
        date,
        attempt,
        labels: fl,
        dir: getLang(lang).dir,
        lang,
      }),
    [aiPct, antiPct, verdictKey, aiLevel, antiLevel, t, verdict, lang, name, date, attempt, fl, grade, clarity, gt]
  );

  // สร้างภาพพรีวิวใหม่เมื่อคะแนน/ภาษาเปลี่ยน
  useEffect(() => {
    let cancelled = false;
    let url: string | null = null;
    makeCard()
      .then((blob) => {
        if (cancelled) return;
        blobRef.current = blob;
        url = URL.createObjectURL(blob);
        setPreview(url);
      })
      .catch(() => setPreview(null));
    return () => {
      cancelled = true;
      if (url) URL.revokeObjectURL(url);
    };
  }, [makeCard]);

  const getBlob = async () => blobRef.current ?? (blobRef.current = await makeCard());
  const fileName = `ai-psychosis-${date.split("/").join("")}-${attempt.split("/").join("-")}.png`;

  const onX = () =>
    openPopup(
      `https://x.com/intent/post?text=${encodeURIComponent(caption)}&url=${encodeURIComponent(shareUrl())}`
    );

  const onFacebook = () =>
    openPopup(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl())}`);

  /* Instagram ไม่มีลิงก์แชร์บนเว็บ: มือถือใช้ share sheet ของระบบพร้อมไฟล์รูป,
     เดสก์ท็อปบันทึกรูป + คัดลอกแคปชันให้ไปโพสต์เอง */
  const onInstagram = async () => {
    const text = `${caption} ${shareUrl()}`;
    const blob = await getBlob();
    await copyText(text);
    const file = new File([blob], fileName, { type: "image/png" });
    const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
    if (nav.share && nav.canShare?.({ files: [file] })) {
      try {
        await nav.share({ files: [file], text });
        return;
      } catch (e) {
        if ((e as Error).name === "AbortError") return;
      }
    }
    downloadBlob(blob, fileName);
    setHint(s.igHint);
  };

  const onDownload = async () => downloadBlob(await getBlob(), fileName);

  const onCopy = async () => {
    if (await copyText(`${caption} ${shareUrl()}`)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  const btn =
    "clip-corner-xs inline-flex h-11 cursor-pointer items-center justify-center gap-2 px-4 text-sm font-semibold transition-[box-shadow,filter] duration-200 hover:brightness-110 active:brightness-90";

  return (
    <div className="glass clip-corner mt-6 rounded-sm p-5 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        {preview && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={preview}
            alt={`${verdict.title} — AI-PSYCHOSIS ${aiPct}% · ANTI-AI PSYCHOSIS ${antiPct}%`}
            className="mx-auto w-40 shrink-0 rounded-md border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:mx-0 sm:w-36"
          />
        )}
        <div className="min-w-0 flex-1">
          <h3 className="flex items-center gap-2 text-sm font-bold text-white sm:text-base">
            <Share2 className="h-4 w-4 text-[#00f5d4]" aria-hidden />
            {s.heading}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-white/65">{caption}</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={onX}
              aria-label="X"
              className={`${btn} border border-white/25 bg-black text-white`}
              style={{ backgroundColor: "#000", color: "#fff" }}
            >
              <XIcon className="h-4 w-4" />X
            </button>
            <button
              type="button"
              onClick={onFacebook}
              className={btn}
              style={{ backgroundColor: "#1877f2", color: "#fff" }}
            >
              <Facebook className="h-4 w-4" aria-hidden />
              Facebook
            </button>
            <button
              type="button"
              onClick={onInstagram}
              className={btn}
              style={{
                background: "linear-gradient(45deg,#f9ce34,#ee2a7b 50%,#6228d7)",
                color: "#fff",
              }}
            >
              <Instagram className="h-4 w-4" aria-hidden />
              Instagram
            </button>
            <button
              type="button"
              onClick={onDownload}
              className={`${btn} glass text-white/85`}
            >
              <Download className="h-4 w-4 text-[#00f5d4]" aria-hidden />
              {s.download}
            </button>
            <button type="button" onClick={onCopy} className={`${btn} glass text-white/85`}>
              {copied ? (
                <Check className="h-4 w-4 text-[#b6ff2e]" aria-hidden />
              ) : (
                <Copy className="h-4 w-4 text-[#00f5d4]" aria-hidden />
              )}
              {copied ? s.copied : s.copy}
            </button>
          </div>
          <p role="status" aria-live="polite" className="mt-3 min-h-[1.25rem] text-[12px] text-[#7ff5e4]">
            {hint}
          </p>
        </div>
      </div>
    </div>
  );
}
