"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RotateCcw, Lightbulb, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ai-test/ui/accordion";
import { computeScores, QUESTIONS_META, type DimensionScore } from "@/lib/ai-test/quiz";
import { useI18n, tpl } from "@/lib/ai-test/i18n";
import { ShareResult } from "@/components/ai-test/share-result";
import { GradeCard } from "@/components/ai-test/grade-card";
import { gradeOf } from "@/lib/ai-test/grade";

/* ---------- hook นับเลขวิ่ง ---------- */
function useCountUp(target: number, duration = 1100): number {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);
  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, duration]);
  return value;
}

/* ---------- เกจแนวนอนเรืองแสง ---------- */
function Gauge({
  label,
  sub,
  score,
  gradient,
  glow,
  delay,
  levelText,
  levelNote,
  scale,
}: {
  label: string;
  sub: string;
  score: DimensionScore;
  gradient: string;
  glow: string;
  delay: number;
  levelText: string;
  levelNote: string;
  scale: { safe: string; enter: string; high: string };
}) {
  const pct = useCountUp(score.pct);
  const levelColor =
    score.level === "low"
      ? "text-[#d3ff85] border-[#b6ff2e]/40 bg-[#b6ff2e]/10"
      : score.level === "watch"
        ? "text-[#ffe38a] border-[#ffc300]/40 bg-[#ffc300]/10"
        : score.level === "high"
          ? "text-[#ff8fb3] border-[#ff2a6d]/45 bg-[#ff2a6d]/12"
          : "text-[#ff5c96] border-[#ff2a6d]/70 bg-[#ff2a6d]/18";

  return (
    <div className="glass clip-corner group relative rounded-sm p-5 transition-shadow hover:shadow-[0_0_44px_rgba(0,245,212,0.12)]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="font-display text-sm font-bold tracking-wide text-white sm:text-base">
            {label}
          </h3>
          <p className="mt-0.5 text-[11px] text-white/45">{sub}</p>
        </div>
        <span
          className={`clip-corner-xs border px-3 py-1 text-xs font-semibold ${levelColor}`}
        >
          {levelText}
        </span>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <span
          className={`font-display text-5xl font-black tracking-tight ${
            score.level === "low"
              ? "text-[#d3ff85] text-glow-lime"
              : score.level === "watch"
                ? "text-[#ffe38a] text-glow-amber"
                : "text-white text-glow-white"
          }`}
        >
          {pct}
          <span className="text-lg text-white/45">%</span>
        </span>
        <span className="max-w-[55%] text-[11px] leading-tight text-white/40 sm:text-right">
          {levelNote}
        </span>
      </div>
      <div className="relative mt-4">
        <div className="h-3.5 w-full overflow-hidden rounded-full border border-white/12 bg-black/50">
          <motion.div
            className={`h-full rounded-full ${gradient}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${score.pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay, ease: "easeOut" }}
            style={{ boxShadow: glow }}
          />
        </div>
        {score.pct > 0 && <div className="shimmer absolute inset-0" />}
        {/* เกณฑ์บนแถบ */}
        {[30, 60, 80].map((t) => (
          <div
            key={t}
            aria-hidden
            className="absolute top-0 h-3.5 w-px bg-black/60"
            style={{ left: `${t}%` }}
          />
        ))}
      </div>
      <div className="hud-label mt-1.5 flex justify-between text-[9px] text-white/35">
        <span>0</span>
        <span>30 {scale.safe}</span>
        <span>60 {scale.enter}</span>
        <span>80 {scale.high}</span>
        <span>100</span>
      </div>
    </div>
  );
}

/* ---------- แผนที่สองมิติแบบ 3D plane ---------- */
function PositionMap({
  aiPct,
  antiPct,
  verdictKey,
  mapHeading,
  youAreHere,
  mapBalanced,
  mapAria,
  axis,
}: {
  aiPct: number;
  antiPct: number;
  verdictKey: string;
  mapHeading: string;
  youAreHere: string;
  mapBalanced: string;
  mapAria: string;
  axis: { downLeft: string; right: string; left: string; upRight: string };
}) {
  const plotX = 24 + (antiPct / 100) * 272;
  const plotY = 296 - (aiPct / 100) * 272;
  const dotColor =
    verdictKey === "ai"
      ? "#ff2a6d"
      : verdictKey === "anti"
        ? "#00f5d4"
        : verdictKey === "doomloop"
          ? "#ffc300"
          : "#b6ff2e";

  return (
    <div className="glass clip-corner relative rounded-sm p-5">
      <h3 className="flex items-center gap-2 text-sm font-bold text-white sm:text-base">
        <MapPin
          className="h-4 w-4 text-[#00f5d4] drop-shadow-[0_0_8px_rgba(0,245,212,0.8)]"
          aria-hidden
        />
        {mapHeading}
      </h3>
      {/* ระนาบ 3D เอียงตามมุมมอง */}
      <div className="mt-5" style={{ perspective: 1100 }}>
        <div
          style={{
            transform: "rotateX(14deg) rotateY(-6deg)",
            transformStyle: "preserve-3d",
            transition: "transform 0.4s ease",
          }}
        >
          <svg
            viewBox="0 0 320 320"
            className="mx-auto w-full max-w-[360px] drop-shadow-[0_18px_30px_rgba(0,0,0,0.5)]"
            role="img"
            aria-label={mapAria}
          >
            {/* เขตสี่ช่องเรืองแสง */}
            <rect x="24" y="24" width="136" height="136" fill="#ff2a6d" opacity="0.11" />
            <rect x="160" y="24" width="136" height="136" fill="#ffc300" opacity="0.12" />
            <rect x="24" y="160" width="136" height="136" fill="#b6ff2e" opacity="0.10" />
            <rect x="160" y="160" width="136" height="136" fill="#00f5d4" opacity="0.11" />
            {/* ตารางย่อยภายใน */}
            {[88, 152, 216, 280].map((v) => (
              <g key={v} opacity="0.35">
                <line x1={v} y1="24" x2={v} y2="296" stroke="#fff" strokeOpacity="0.10" />
                <line x1="24" y1={v} x2="296" y2={v} stroke="#fff" strokeOpacity="0.10" />
              </g>
            ))}
            {/* เส้นเกณฑ์ 60% */}
            <line
              x1="187.2"
              y1="24"
              x2="187.2"
              y2="296"
              stroke="#fff"
              strokeOpacity="0.4"
              strokeDasharray="5 5"
              strokeWidth="1"
            />
            <line
              x1="24"
              y1="132.8"
              x2="296"
              y2="132.8"
              stroke="#fff"
              strokeOpacity="0.4"
              strokeDasharray="5 5"
              strokeWidth="1"
            />
            {/* กรอบและเส้นแกน */}
            <rect
              x="24"
              y="24"
              width="272"
              height="272"
              fill="none"
              stroke="#fff"
              strokeOpacity="0.3"
              rx="4"
            />
            {/* เส้นเล็ง crosshair ที่ตำแหน่งผู้ใช้ */}
            <line x1="24" x2="296" y1={plotY} y2={plotY} stroke="#fff" strokeOpacity="0.16" strokeDasharray="2 5" />
            <line x1={plotX} x2={plotX} y1="24" y2="296" stroke="#fff" strokeOpacity="0.16" strokeDasharray="2 5" />
            {/* ชื่อช่อง */}
            <text x="36" y="44" fill="#ff8fb3" fontSize="10" fontWeight="700" letterSpacing="1">
              AI-PSYCHOSIS
            </text>
            <text x="284" y="44" fill="#ffe38a" fontSize="10" fontWeight="700" letterSpacing="1" textAnchor="end">
              DOOMLOOP
            </text>
            <text x="36" y="288" fill="#d3ff85" fontSize="10" fontWeight="700" letterSpacing="1">
              {mapBalanced}
            </text>
            <text x="284" y="288" fill="#7ff5e4" fontSize="10" fontWeight="700" letterSpacing="1" textAnchor="end">
              ANTI-AI
            </text>
            {/* จุดผู้ใช้พร้อมวงแหวนพัลส์ */}
            <circle cx={plotX} cy={plotY} r="14" fill={dotColor} opacity="0.22">
              <animate attributeName="r" values="10;19;10" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.28;0.05;0.28" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle
              cx={plotX}
              cy={plotY}
              r="7.5"
              fill={dotColor}
              stroke="#fff"
              strokeWidth="2"
              style={{ filter: `drop-shadow(0 0 9px ${dotColor}) drop-shadow(0 0 26px ${dotColor})` }}
            />
            {/* ป้ายค่า */}
            <text
              x={plotX}
              y={plotY - 17}
              fill="#fff"
              fontSize="11"
              fontWeight="700"
              textAnchor="middle"
              letterSpacing="1"
            >
              {youAreHere}
            </text>
          </svg>
        </div>
      </div>
      <div className="hud-label mt-3 flex justify-between text-[9px] text-white/50">
        <span className="font-semibold text-[#d3ff85]">{axis.downLeft}</span>
        <span className="text-white/40">{axis.right}</span>
      </div>
      <div className="hud-label mt-1.5 flex justify-between text-[9px] text-white/50">
        <span className="text-white/40">{axis.left}</span>
        <span className="font-semibold text-[#ff8fb3]">{axis.upRight}</span>
      </div>
    </div>
  );
}

/* ---------- ส่วนผลลัพธ์หลัก ---------- */
export interface ResultMeta {
  name: string;
  /** 21/12/26 */
  date: string;
  /** 01/26 */
  attempt: string;
  timedOutNote: string | null;
}

export function Results({
  answers,
  onRetake,
  meta,
}: {
  answers: Record<number, number>;
  onRetake: () => void;
  meta: ResultMeta;
}) {
  const { t } = useI18n();
  const { ai, anti, verdictKey, flaggedIds } = computeScores(answers);
  const verdict = t.results.verdicts[verdictKey];
  const { grade, clarity } = gradeOf(ai.pct, anti.pct, verdictKey);
  const questions = t.quiz.questions;
  const aiPct = useCountUp(ai.pct);
  const antiPct = useCountUp(anti.pct);

  const accentClass =
    verdictKey === "ai"
      ? "border-[#ff2a6d]/35 bg-[#ff2a6d]/8"
      : verdictKey === "anti"
        ? "border-[#00f5d4]/30 bg-[#00f5d4]/8"
        : verdictKey === "doomloop"
          ? "border-[#ffc300]/35 bg-[#ffc300]/8"
          : "border-[#b6ff2e]/30 bg-[#b6ff2e]/8";

  const accentText =
    verdictKey === "ai"
      ? "text-glow-magenta"
      : verdictKey === "anti"
        ? "text-glow-cyan"
        : verdictKey === "doomloop"
          ? "text-glow-amber"
          : "text-glow-lime";

  return (
    <section id="results" className="relative scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-9 text-center">
            <p className="hud-label text-[10px] text-[#00f5d4]/80">
              [ OUTPUT :: ANALYSIS COMPLETE ]
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white text-glow-white sm:text-3xl">
              {t.results.heading}
            </h2>
          </div>

          {/* บัตรคำตัดสินโฮโลแกรม */}
          <div
            className={`holo-frame clip-corner relative overflow-hidden rounded-sm border p-6 sm:p-8 ${accentClass}`}
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff2a6d] via-[#ffc300] to-[#00f5d4] opacity-80"
            />
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="hud-label clip-corner-xs border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-bold text-white/75">
                {verdict.subtitle}
              </span>
              <span className="clip-corner-xs border border-white/15 bg-black/30 px-3 py-1.5 text-[11px] font-semibold text-white/70">
                {t.results.riskAiPrefix}{" "}
                <span className="font-display text-[#ff8fb3]">{aiPct}%</span>
                {" · "}{t.results.riskAntiPrefix}{" "}
                <span className="font-display text-[#7ff5e4]">{antiPct}%</span>
              </span>
            </div>
            <h3
              className={`mt-5 text-2xl font-extrabold text-white sm:text-3xl ${accentText}`}
            >
              {verdict.title}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-[15px]">
              {verdict.description}
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("guidance")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="clip-corner-xs group relative inline-flex h-11 cursor-pointer items-center justify-center gap-2 overflow-hidden bg-white px-6 text-sm font-bold text-[#050510] shadow-[0_0_24px_rgba(255,255,255,0.25)] transition-[box-shadow,filter] duration-200 hover:shadow-[0_0_34px_rgba(255,255,255,0.45)] hover:brightness-105 active:brightness-95"
              >
                <Lightbulb className="h-4 w-4" aria-hidden />
                {t.results.toGuidance}
                <span aria-hidden className="shimmer absolute inset-0 opacity-40" />
              </button>
              <button
                type="button"
                onClick={onRetake}
                className="glass clip-corner-xs inline-flex h-11 cursor-pointer items-center justify-center gap-2 px-6 text-sm font-semibold text-white/85 transition-[box-shadow,filter,color] duration-200 hover:text-white hover:shadow-[0_0_28px_rgba(0,245,212,0.25)] hover:brightness-110 active:brightness-90"
              >
                <RotateCcw
                  className="h-4 w-4 text-[#00f5d4]"
                  aria-hidden
                />
                {t.results.retake}
              </button>
            </div>
          </div>

          {/* เกรดแบบการ์ดสะสม D → S */}
          <GradeCard grade={grade} clarity={clarity} />

          {meta.timedOutNote && (
            <div className="clip-corner-xs mt-4 flex items-start gap-2.5 border border-[#ffc300]/35 bg-[#ffc300]/8 p-3.5 text-[13px] text-[#ffe38a]">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#ffc300]" aria-hidden />
              {meta.timedOutNote}
            </div>
          )}

          {/* แชร์ผลลัพธ์ไปโซเชียล */}
          <ShareResult
            grade={grade}
            clarity={clarity}
            name={meta.name}
            date={meta.date}
            attempt={meta.attempt}
            aiPct={ai.pct}
            antiPct={anti.pct}
            aiLevel={ai.level}
            antiLevel={anti.level}
            verdictKey={verdictKey}
          />

          {/* เกจสองขั้ว */}
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Gauge
              label="AI-PSYCHOSIS"
              sub={t.results.gaugeAiSub}
              score={ai}
              gradient="bg-gradient-to-r from-[#ff2a6d] to-[#ffc300]"
              glow="0 0 18px rgba(255,42,109,0.65)"
              delay={0.1}
              levelText={`${t.results.levelPrefix}${t.results.levels[ai.level].label}`}
              levelNote={t.results.levels[ai.level].note}
              scale={t.results.scale}
            />
            <Gauge
              label="ANTI-AI PSYCHOSIS"
              sub={t.results.gaugeAntiSub}
              score={anti}
              gradient="bg-gradient-to-r from-[#00f5d4] to-[#a06bff]"
              glow="0 0 18px rgba(0,245,212,0.65)"
              delay={0.25}
              levelText={`${t.results.levelPrefix}${t.results.levels[anti.level].label}`}
              levelNote={t.results.levels[anti.level].note}
              scale={t.results.scale}
            />
          </div>

          {/* แผนที่ + สรุประดับ */}
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <PositionMap
              aiPct={ai.pct}
              antiPct={anti.pct}
              verdictKey={verdictKey}
              mapHeading={t.results.mapHeading}
              youAreHere={t.results.youAreHere}
              mapBalanced={t.results.mapBalanced}
              mapAria={tpl(t.results.mapAriaTemplate, { ai: ai.pct, anti: anti.pct })}
              axis={{
                downLeft: t.results.axisDownLeft,
                right: t.results.axisRight,
                left: t.results.axisLeft,
                upRight: t.results.axisUpRight,
              }}
            />
            <div className="glass clip-corner rounded-sm p-5">
              <h3 className="text-sm font-bold text-white sm:text-base">
                {t.results.readHeading}
              </h3>
              <ul className="mt-3.5 space-y-3.5 text-[13px] leading-relaxed text-white/70">
                {t.results.readItems.map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span
                      aria-hidden
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        [
                          "bg-[#ff2a6d] shadow-[0_0_8px_rgba(255,42,109,0.9)]",
                          "bg-[#ffc300] shadow-[0_0_8px_rgba(255,195,0,0.9)]",
                          "bg-[#00f5d4] shadow-[0_0_8px_rgba(0,245,212,0.9)]",
                          "bg-[#b6ff2e] shadow-[0_0_8px_rgba(182,255,46,0.9)]",
                        ][i % 4]
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ความหมายรายข้อ */}
          <div className="mt-9">
            <h3 className="text-lg font-bold text-white">
              {t.results.flaggedHeading}
            </h3>
            <p className="mt-1.5 text-sm text-white/55">
              {t.results.flaggedIntro}
            </p>
            {flaggedIds.length === 0 ? (
              <div className="clip-corner-xs mt-4 border border-[#b6ff2e]/30 bg-[#b6ff2e]/10 p-5 text-sm leading-relaxed text-[#d3ff85]">
                {t.results.noFlaggedNote}
              </div>
            ) : (
              <Accordion type="single" collapsible className="mt-4 space-y-2.5">
                {flaggedIds.map((id) => {
                  const q = questions.find((x) => x.id === id);
                  if (!q) return null;
                  const dimension = QUESTIONS_META.find((m) => m.id === id)?.dimension ?? "ai";
                  return (
                    <AccordionItem
                      key={id}
                      value={`q-${id}`}
                      className="glass clip-corner-sm rounded-sm px-4"
                    >
                      <AccordionTrigger className="text-left text-[13px] font-semibold text-white/85 hover:no-underline sm:text-sm">
                        <span className="flex gap-2.5">
                          <span
                            className={`clip-corner-xs shrink-0 px-2.5 py-1 text-[10px] font-bold ${
                              dimension === "ai"
                                ? "bg-[#ff2a6d]/18 text-[#ff8fb3]"
                                : "bg-[#00f5d4]/15 text-[#7ff5e4]"
                            }`}
                          >
                            {t.results.questionPrefix} {id}
                          </span>
                          <span className="text-white/85">{q.text}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2.5 pt-1">
                        <div className="clip-corner-xs border border-[#ffc300]/25 bg-[#ffc300]/10 p-3.5">
                          <p className="hud-label text-[9px] font-bold text-[#ffe38a]">
                            {t.results.insightLabel}
                          </p>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-white/75">
                            {q.insight}
                          </p>
                        </div>
                        <div className="clip-corner-xs border border-[#b6ff2e]/25 bg-[#b6ff2e]/10 p-3.5">
                          <p className="hud-label text-[9px] font-bold text-[#d3ff85]">
                            {t.results.tipLabel}
                          </p>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-white/75">
                            {q.tip}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            )}
          </div>

          {/* คำเตือนถ้าระดับสูง */}
          {(ai.level === "critical" ||
            anti.level === "critical" ||
            verdictKey === "doomloop") && (
            <div className="clip-corner relative mt-7 flex gap-3.5 border border-[#ff2a6d]/40 bg-[#ff2a6d]/10 p-5 shadow-[0_0_40px_rgba(255,42,109,0.15)]">
              <AlertTriangle
                className="mt-0.5 h-5 w-5 shrink-0 text-[#ff5c96] drop-shadow-[0_0_10px_rgba(255,42,109,0.9)]"
                aria-hidden
              />
              <div>
                <p className="text-sm font-bold text-[#ffb3cc]">
                  {t.results.criticalTitle}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-rose-100/80">
                  {t.results.criticalBody}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
