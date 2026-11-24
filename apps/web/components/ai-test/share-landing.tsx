"use client";

import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/ai-test/i18n";

/** หน้าปลายทางของลิงก์ที่แชร์: โชว์ภาพผลลัพธ์ + ปุ่มไปทำแบบทดสอบ */
export function ShareLanding({ ai, anti }: { ai: number; anti: number }) {
  const { t } = useI18n();
  return (
    <main className="page-bg flex min-h-screen flex-col items-center justify-center gap-7 px-4 py-12 text-white">
      <h1 className="text-center text-xl font-extrabold sm:text-2xl">
        AI-PSYCHOSIS <span className="font-display text-[#ff8fb3]">{ai}%</span>
        {" · "}ANTI-AI PSYCHOSIS <span className="font-display text-[#7ff5e4]">{anti}%</span>
      </h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/ai-psychosis-test/og?ai=${ai}&anti=${anti}`}
        alt={`AI-PSYCHOSIS ${ai}% · ANTI-AI PSYCHOSIS ${anti}%`}
        width={1200}
        height={630}
        className="h-auto w-full max-w-3xl rounded-lg border border-white/15 shadow-[0_24px_70px_rgba(0,0,0,0.5)]"
      />
      <a
        href="/ai-psychosis-test"
        className="clip-corner inline-flex h-12 items-center gap-2 bg-gradient-to-r from-[#ff2a6d] via-[#ff5e3a] to-[#ffc300] px-7 text-base font-extrabold"
        style={{ color: "#050510" }}
      >
        {t.hero.start}
        <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
      </a>
      <p className="max-w-xl text-center text-[12px] text-white/50">{t.footer.note}</p>
    </main>
  );
}
