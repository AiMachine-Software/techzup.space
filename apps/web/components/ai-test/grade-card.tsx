"use client";

import { motion } from "framer-motion";
import { Star, Stethoscope } from "lucide-react";
import { useI18n } from "@/lib/ai-test/i18n";
import { getGradeText } from "@/lib/ai-test/i18n/grade";
import { GRADES, GRADE_MIN, GRADE_STYLE, type Grade } from "@/lib/ai-test/grade";

/** การ์ดสะสมแนวตั้ง: ตัวอักษรเกรดใหญ่ + ดาว + ชื่อความหายาก (S/A มีฟอยล์โฮโลแกรม) */
function TradingCard({ grade, rarity }: { grade: Grade; rarity: string }) {
  const st = GRADE_STYLE[grade];
  return (
    <motion.div
      initial={{ rotateY: -90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.15 }}
      style={{ perspective: 800 }}
      className="shrink-0"
    >
      <div
        className="relative flex aspect-[5/7] w-[132px] flex-col items-center justify-between overflow-hidden rounded-xl p-2.5 sm:w-[150px]"
        style={{
          background: `linear-gradient(155deg, ${st.from}, ${st.to})`,
          boxShadow: `0 0 0 2px ${st.color}, 0 0 28px ${st.color}66, 0 18px 40px rgba(0,0,0,0.45)`,
        }}
        role="img"
        aria-label={`${grade} · ${rarity}`}
      >
        {/* พื้นการ์ดด้านใน */}
        <div className="absolute inset-[6px] rounded-lg bg-[#0b0d1a]/85" aria-hidden />
        {st.foil && <div className="grade-foil absolute inset-0" aria-hidden />}
        <div className="relative flex gap-0.5 pt-1" aria-hidden>
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className="h-3 w-3"
              style={{ color: st.color, opacity: i < st.stars ? 1 : 0.18 }}
              fill={i < st.stars ? st.color : "transparent"}
            />
          ))}
        </div>
        <span
          className={`font-display relative font-black leading-none ${
            grade === "SSS" ? "text-[40px] tracking-tight sm:text-[46px]" : "text-[64px] sm:text-[76px]"
          }`}
          style={{ color: st.color, textShadow: `0 0 18px ${st.color}aa` }}
          aria-hidden
        >
          {grade}
        </span>
        <span
          className="relative mb-1 w-full truncate rounded-sm px-1 py-0.5 text-center text-[11px] font-bold uppercase tracking-wider"
          style={{ backgroundColor: `${st.color}26`, color: st.color }}
          aria-hidden
        >
          {rarity}
        </span>
      </div>
    </motion.div>
  );
}

export function GradeCard({ grade, clarity }: { grade: Grade; clarity: number }) {
  const { lang } = useI18n();
  const g = getGradeText(lang);
  const st = GRADE_STYLE[grade];
  const ladder = [...GRADES].reverse(); // D C B A S

  return (
    <div className="glass clip-corner mt-6 rounded-sm p-5 sm:p-6">
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-stretch">
        <TradingCard grade={grade} rarity={g.tiers[grade].rarity} />
        <div className="flex min-w-0 flex-1 flex-col">
          <p className="hud-label text-[10px] text-white/50">[ RANK :: D → S ]</p>
          <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
            {g.title}:{" "}
            <span style={{ color: st.color }}>
              {grade} · {g.tiers[grade].rarity}
            </span>
          </h3>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/75">{g.tiers[grade].desc}</p>

          {/* SSS: คำแนะนำให้พบแพทย์โดยเร็ว */}
          {grade === "SSS" && (
            <div
              role="alert"
              className="mt-3 flex items-start gap-2.5 rounded-sm border p-3 text-[13px] font-semibold leading-relaxed"
              style={{ borderColor: `${st.color}99`, backgroundColor: `${st.color}1f`, color: "#ffb3bc" }}
            >
              <Stethoscope className="mt-0.5 h-4 w-4 shrink-0" style={{ color: st.color }} aria-hidden />
              {g.alert}
            </div>
          )}

          {/* บันไดเกรด D → S พร้อมตำแหน่งคะแนน */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-[12px] text-white/55">
              <span>{g.score}</span>
              <span className="font-display text-base font-bold" style={{ color: st.color }}>
                {clarity}
                <span className="text-[11px] text-white/45">/100</span>
              </span>
            </div>
            <div className="relative mt-2 grid grid-cols-6 gap-1" dir="ltr">
              {ladder.map((tier) => {
                const active = tier === grade;
                const ts = GRADE_STYLE[tier];
                return (
                  <div key={tier} className="flex flex-col items-center gap-1">
                    <div
                      className="h-2 w-full rounded-full transition-all"
                      style={{
                        backgroundColor: active ? ts.color : `${ts.color}40`,
                        boxShadow: active ? `0 0 12px ${ts.color}` : undefined,
                      }}
                    />
                    <span
                      className="font-display text-[11px] font-bold"
                      style={{ color: active ? ts.color : "rgba(255,255,255,0.4)" }}
                    >
                      {tier}
                      <span className="ms-0.5 font-sans text-[9px] font-normal text-white/35">
                        {GRADE_MIN[tier]}+
                      </span>
                    </span>
                  </div>
                );
              })}
              {/* SSS อยู่นอกบันไดปกติ: หายากที่สุด และน่ากังวลที่สุด */}
              <div className="flex flex-col items-center gap-1 border-s border-white/10 ps-1">
                <div
                  className="h-2 w-full rounded-full"
                  style={{
                    backgroundColor: grade === "SSS" ? GRADE_STYLE.SSS.color : `${GRADE_STYLE.SSS.color}40`,
                    boxShadow: grade === "SSS" ? `0 0 12px ${GRADE_STYLE.SSS.color}` : undefined,
                  }}
                />
                <span
                  className="font-display text-[11px] font-bold"
                  style={{ color: grade === "SSS" ? GRADE_STYLE.SSS.color : "rgba(255,255,255,0.4)" }}
                >
                  SSS
                </span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-[11.5px] leading-relaxed text-white/45">{g.how}</p>
        </div>
      </div>
    </div>
  );
}
