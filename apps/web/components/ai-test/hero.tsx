"use client";

import { motion } from "framer-motion";
import { BrainCircuit, ArrowDown, Scale, Zap } from "lucide-react";
import { useI18n } from "@/lib/ai-test/i18n";

function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-3.5 w-3.5 border-[#00f5d4]/70 ${className}`}
    />
  );
}

export function Hero({ onStart }: { onStart: () => void }) {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* แสงประดับสองขั้ว */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#ff2a6d]/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#00f5d4]/20 blur-[130px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* ป้าย HUD */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass clip-corner-xs relative mx-auto inline-flex items-center gap-2.5 px-5 py-2"
        >
          <Corner className="left-0 top-0 border-l-2 border-t-2" />
          <Corner className="right-0 bottom-0 border-b-2 border-r-2" />
          <BrainCircuit
            className="h-3.5 w-3.5 text-[#00f5d4] drop-shadow-[0_0_8px_rgba(0,245,212,0.9)]"
            aria-hidden
          />
          <span className="hud-label text-[10px] text-white/70">{t.hero.badge}</span>
          <Zap
            className="h-3 w-3 text-[#ffc300] drop-shadow-[0_0_8px_rgba(255,195,0,0.9)]"
            aria-hidden
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-7 text-3xl font-extrabold leading-[1.35] tracking-tight text-white sm:text-5xl sm:leading-[1.3]"
        >
          {t.hero.title1}{" "}
          <span className="glitch" data-text="AI-PSYCHOSIS">
            <span className="neon-flicker bg-gradient-to-r from-[#ff2a6d] to-[#ffc300] bg-clip-text text-transparent text-glow-magenta">
              AI-PSYCHOSIS
            </span>
          </span>{" "}
          {t.hero.title2}{" "}
          <span className="glitch" data-text="ANTI-AI PSYCHOSIS">
            <span className="neon-flicker bg-gradient-to-r from-[#00f5d4] to-[#a06bff] bg-clip-text text-transparent text-glow-cyan">
              ANTI-AI PSYCHOSIS
            </span>
          </span>{" "}
          {t.hero.title3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base"
        >
          {t.hero.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* ปุ่มหลักเรืองแสง — ไม่ใช้ scale บน hover เพื่อไม่ให้ตำแหน่งคลิกเพี้ยน */}
          <button
            type="button"
            onClick={onStart}
            className="clip-corner group relative h-12 min-w-[240px] cursor-pointer overflow-hidden bg-gradient-to-r from-[#ff2a6d] via-[#ff5e3a] to-[#ffc300] px-7 text-base font-extrabold text-[#050510] shadow-[0_0_28px_rgba(255,42,109,0.45)] transition-[box-shadow,filter] duration-200 hover:shadow-[0_0_44px_rgba(255,42,109,0.65)] hover:brightness-110 active:brightness-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {t.hero.start}
              <ArrowDown
                className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                aria-hidden
              />
            </span>
            <span
              aria-hidden
              className="shimmer absolute inset-0 opacity-60"
            />
          </button>

          {/* ปุ่มรองกระจกฝ้า */}
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("guidance")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="glass clip-corner group relative flex h-12 min-w-[240px] cursor-pointer items-center justify-center gap-2 px-7 text-base font-semibold text-white/85 transition-[box-shadow,filter,color] duration-200 hover:text-white hover:shadow-[0_0_36px_rgba(0,245,212,0.25)] hover:brightness-110 active:brightness-90"
          >
            <Scale
              className="h-4 w-4 text-[#00f5d4] drop-shadow-[0_0_8px_rgba(0,245,212,0.8)]"
              aria-hidden
            />
            {t.hero.viewGuidance}
          </button>
        </motion.div>

        {/* แถบสเปกตรัมสองขั้วแบบเรืองแสง */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-thin clip-corner relative mx-auto mt-14 max-w-2xl px-5 py-4"
        >
          <span
            aria-hidden
            className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#ff2a6d]/70 to-transparent"
          />
          <span
            aria-hidden
            className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#00f5d4]/70 to-transparent"
          />
          <div className="flex items-end justify-between text-[10px] font-semibold uppercase tracking-wider sm:text-xs">
            <span className="text-[#ff8fb3] text-glow-magenta">
              {t.hero.poleLeft}
            </span>
            <span className="text-[#d3ff85] text-glow-lime">{t.hero.poleCenter}</span>
            <span className="text-[#7ff5e4] text-glow-cyan">
              {t.hero.poleRight}
            </span>
          </div>
          <div
            aria-hidden
            className="relative mt-2.5 h-2.5 w-full overflow-hidden rounded-full border border-white/15 bg-black/40"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff2a6d] via-[#b6ff2e] to-[#00f5d4] opacity-95" />
            <div className="shimmer absolute inset-0" />
          </div>
          <div className="hud-label mt-2.5 flex justify-between text-[9px] text-white/40">
            <span>AI-PSYCHOSIS</span>
            <span>BALANCED</span>
            <span>ANTI-AI PSYCHOSIS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
