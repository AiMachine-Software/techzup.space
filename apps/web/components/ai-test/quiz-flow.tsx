"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  TimerReset,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ai-test/ui/button";
import { LIKERT_VALUES } from "@/lib/ai-test/quiz";
import { useI18n, tpl } from "@/lib/ai-test/i18n";
import { getFormText } from "@/lib/ai-test/i18n/form";
import { Typewriter } from "@/components/ai-test/typewriter";
import { Countdown } from "@/components/ai-test/countdown";

interface QuizFlowProps {
  answers: Record<number, number>;
  onAnswer: (id: number, value: number) => void;
  onSubmit: () => void;
  onTimeout: () => void;
  startedAt: number;
  profileName: string;
}

export function QuizFlow({
  answers,
  onAnswer,
  onSubmit,
  onTimeout,
  startedAt,
  profileName,
}: QuizFlowProps) {
  const { t, lang } = useI18n();
  const f = getFormText(lang);
  const questions = t.quiz.questions;
  const total = questions.length;
  const answeredCount = questions.filter((q) => answers[q.id] != null).length;
  const allAnswered = answeredCount === total;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const q = questions[index];
  const current = answers[q.id];

  /* ---- 3D depth ตามเมาส์: ใช้กับเฉพาะเปลือกกระจกตกแต่ง (pointer-events-none)
         เนื้อหา/ปุ่มทั้งหมดอยู่ในเลเยอร์แบน ทำให้ตำแหน่งคลิกตรงกับภาพเป๊ะ ---- */
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [3, -3]), {
    stiffness: 160,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-3, 3]), {
    stiffness: 160,
    damping: 24,
  });
  // ตำแหน่งสเปกูลาร์ไฮไลต์วิ่งตามเมาส์ (หน่วย % ของการ์ด)
  const glowLeft = useSpring(useTransform(mx, [-0.5, 0.5], ["0%", "100%"]), {
    stiffness: 120,
    damping: 26,
  });
  const glowTop = useSpring(useTransform(my, [-0.5, 0.5], ["0%", "100%"]), {
    stiffness: 120,
    damping: 26,
  });

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mx, my]);

  const handlePointerLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      setDirection(next > index ? 1 : -1);
      setIndex(clamped);
    },
    [index, total]
  );

  // กันเปลี่ยนข้อซ้ำ: คลิกเร็วๆ 2 ครั้งใน 220ms ต้องขยับข้อแค่ครั้งเดียว
  const advancingRef = useRef(false);
  const pick = useCallback(
    (value: number) => {
      onAnswer(q.id, value);
      if (index < total - 1 && !advancingRef.current) {
        advancingRef.current = true;
        setTimeout(() => {
          advancingRef.current = false;
          setDirection(1);
          setIndex((i) => Math.min(total - 1, i + 1));
        }, 220);
      }
    },
    [index, onAnswer, q.id, total]
  );

  // คีย์บอร์ด: 1-5 เลือกคำตอบ, ลูกศรซ้ายขวาเลื่อนข้อ
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "SELECT" || el.tagName === "TEXTAREA")) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key >= "1" && e.key <= "5") pick(Number(e.key));
      else if (e.key === "ArrowRight") go(index + 1);
      else if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [pick, go, index]);

  return (
    <div className="w-full">
        {/* การ์ดกระจกฝ้า: เปลือก 3D ตกแต่งอยู่หลัง ส่วนเนื้อหาเป็นเลเยอร์แบนเพื่อ hit test แม่นยำ */}
        <div className="relative" style={{ perspective: 1400 }}>
          {/* เปลือกกระจก 3D เอียงตามเมาส์ — ตกแต่งเท่านั้น ไม่มีจุดคลิก */}
          <motion.div
            aria-hidden
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="glass test-panel cyber-frame scan-sweep clip-corner absolute inset-0 rounded-sm" />
            {/* ออร์บพารัลแลกซ์ตามความลึก */}
            <div
              className="absolute left-[7%] top-[16%] h-40 w-40 rounded-full bg-[#ff2a6d]/12 blur-[60px]"
              style={{ transform: "translateZ(60px)" }}
            />
            <div
              className="absolute bottom-[10%] right-[5%] h-44 w-44 rounded-full bg-[#00f5d4]/12 blur-[60px]"
              style={{ transform: "translateZ(90px)" }}
            />
          </motion.div>

          {/* สเปกูลาร์ไฮไลต์วิ่งตามเมาส์ (เลเยอร์แบน pointer-events-none) */}
          <motion.div
            aria-hidden
            style={{ left: glowLeft, top: glowTop }}
            className="pointer-events-none absolute h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00f5d4]/10 blur-[80px]"
          />

          {/* เนื้อหาการ์ด — เลเยอร์แบน ไม่มีการหมุน/ขยับ ตำแหน่งคลิกตรงเป๊ะ */}
          <div
            ref={cardRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="clip-corner relative rounded-sm p-4 sm:p-6"
          >
            {/* มุม HUD */}
            <span
              aria-hidden
              className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-[#ff2a6d]/70"
            />
            <span
              aria-hidden
              className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-[#00f5d4]/70"
            />

            {/* ความคืบหน้า */}
            <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-xs font-medium text-white/55">
              <span className="flex min-w-0 flex-col gap-1">
                <span className="hud-label text-[10px] text-white/60">
                  Q {String(index + 1).padStart(2, "0")} / {total}
                </span>
                <span className="truncate text-[11px] text-white/45" title={profileName}>
                  {f.testTaker}: <span className="text-white/80">{profileName}</span>
                </span>
              </span>
              <Countdown startedAt={startedAt} label={f.timeLeft} onTimeout={onTimeout} />
              <span className="flex items-center justify-end gap-1.5">
                <TimerReset className="h-3.5 w-3.5 text-[#ffc300]" aria-hidden />
                {t.quiz.answeredPrefix}{" "}
                <span className="font-display text-[#00f5d4]">
                  {answeredCount}
                </span>
                /{total}
              </span>
            </div>
            <div className="relative mt-3 h-2 w-full overflow-hidden rounded-full border border-white/10 bg-black/45"
              role="progressbar"
              aria-valuenow={Math.round((answeredCount / total) * 100)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={t.quiz.progressAria}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#ff2a6d] via-[#b6ff2e] to-[#00f5d4] shadow-[0_0_12px_rgba(0,245,212,0.55)] transition-all duration-300"
                style={{ width: `${(answeredCount / total) * 100}%` }}
              />
              {answeredCount > 0 && (
                <div className="shimmer absolute inset-0" />
              )}
            </div>

            {/* จุดนำทาง — กล่องแตะ 16px พร้อมจุดเรืองแสงเล็กด้านใน */}
            <div className="relative mt-3 flex flex-wrap justify-center gap-0.5">
              {questions.map((qq, i) => (
                <button
                  key={qq.id}
                  type="button"
                  aria-label={tpl(t.quiz.gotoTemplate, { n: i + 1 })}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => go(i)}
                  className="group grid h-4 w-4 cursor-pointer place-items-center"
                >
                  <span
                    className={`h-2 rounded-full transition-all ${
                      i === index
                        ? "w-5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        : answers[qq.id] != null
                          ? "w-2 bg-[#00f5d4]/90 shadow-[0_0_6px_rgba(0,245,212,0.6)]"
                          : "w-2 bg-white/20 group-hover:bg-white/50"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* คำถาม */}
            <div className="relative mt-4 min-h-[150px] sm:mt-5 sm:min-h-[170px]" aria-live="polite">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={q.id}
                  custom={direction}
                  initial={{ opacity: 0, x: 40 * direction }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 * direction }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="hud-label text-[10px] text-[#ff8fb3]">
                    QUERY {String(q.id).padStart(2, "0")} :: {total}
                  </p>
                  <p className="mt-2.5 text-[17px] font-semibold leading-relaxed text-white sm:text-xl">
                    <Typewriter key={`${lang}-${q.id}`} text={`“${q.text}”`} lang={lang} />
                  </p>
                  <p className="mt-2 text-xs text-white/45">
                    {t.quiz.scoreHint}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ตัวเลือก */}
            <div
              className="mt-3 grid grid-cols-5 gap-1.5 sm:mt-4 sm:gap-2"
              role="radiogroup"
              aria-label={tpl(t.quiz.answerAriaTemplate, { n: q.id })}
            >
              {LIKERT_VALUES.map((value) => {
                const opt = t.quiz.likert[value - 1];
                const selected = current === value;
                return (
                  <button
                    key={value}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => pick(value)}
                    className={`clip-corner-xs group relative flex min-h-[64px] cursor-pointer flex-col items-center justify-center gap-1 border px-1 py-2 text-center transition-[border-color,background-color,box-shadow,filter] hover:brightness-110 active:brightness-95 sm:min-h-[80px] sm:px-3 sm:py-2.5 ${
                      selected
                        ? "border-[#00f5d4]/70 bg-gradient-to-br from-[#ff2a6d]/25 via-[#a06bff]/20 to-[#00f5d4]/25 text-white shadow-[0_0_22px_rgba(0,245,212,0.35)]"
                        : current != null
                          ? "border-white/12 bg-white/[0.04] text-white/75 hover:border-[#00f5d4]/50 hover:bg-white/[0.08] hover:shadow-[0_0_16px_rgba(0,245,212,0.18)]"
                          : "border-white/12 bg-white/[0.03] text-white/75 hover:border-[#ff2a6d]/50 hover:bg-white/[0.08] hover:shadow-[0_0_16px_rgba(255,42,109,0.18)]"
                    }`}
                  >
                    <span
                      className={`font-display text-base font-bold ${
                        selected
                          ? "text-[#00f5d4] text-glow-cyan"
                          : "text-white/85 group-hover:text-white"
                      }`}
                    >
                      {value}
                    </span>
                    <span className="text-[10px] leading-tight sm:hidden">
                      {opt.short}
                    </span>
                    <span className="hidden text-xs leading-tight sm:inline">
                      {opt.label}
                    </span>
                    {selected && (
                      <span
                        aria-hidden
                        className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-[#00f5d4]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* ปุ่มนำทาง */}
            <div className="mt-4 flex items-center justify-between gap-3 sm:mt-5">
              <Button
                variant="outline"
                onClick={() => go(index - 1)}
                disabled={index === 0}
                className="clip-corner-xs rounded-none border-white/15 bg-white/5 font-mono text-[13px] text-white/80 hover:border-[#ff2a6d]/50 hover:bg-white/10 hover:text-white hover:shadow-[0_0_18px_rgba(255,42,109,0.2)]"
              >
                <ChevronLeft className="me-1 h-4 w-4 rtl:rotate-180" aria-hidden /> {t.quiz.prev}
              </Button>

              {allAnswered ? (
                <button
                  type="button"
                  onClick={onSubmit}
                  className="clip-corner group relative h-12 cursor-pointer overflow-hidden bg-gradient-to-r from-[#00f5d4] via-[#00b3ff] to-[#a06bff] px-5 sm:px-7 text-base font-extrabold text-[#050510] shadow-[0_0_30px_rgba(0,245,212,0.45)] transition-[box-shadow,filter] duration-200 hover:shadow-[0_0_50px_rgba(0,245,212,0.7)] hover:brightness-110 active:brightness-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FlaskConical className="h-5 w-5" aria-hidden />
                    {t.quiz.process}
                  </span>
                  <span aria-hidden className="shimmer absolute inset-0 opacity-60" />
                </button>
              ) : (
                <Button
                  onClick={() => go(index + 1)}
                  disabled={index === total - 1}
                  className="clip-corner-xs rounded-none border border-[#00f5d4]/35 bg-[#00f5d4]/10 font-mono text-[13px] text-[#7ff5e4] hover:bg-[#00f5d4]/20 hover:text-white hover:shadow-[0_0_18px_rgba(0,245,212,0.3)]"
                >
                  {t.quiz.next} <ChevronRight className="ms-1 h-4 w-4 rtl:rotate-180" aria-hidden />
                </Button>
              )}
            </div>

            {allAnswered ? (
              <div className="clip-corner-xs relative mt-3 flex items-center gap-2.5 border border-[#b6ff2e]/30 bg-[#b6ff2e]/8 p-3 text-[12.5px] text-[#d3ff85]">
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-[#b6ff2e] drop-shadow-[0_0_8px_rgba(182,255,46,0.8)]"
                  aria-hidden
                />
                {t.quiz.allAnsweredNote}
              </div>
            ) : null}
          </div>
        </div>
    </div>
  );
}
