"use client";

import { motion } from "framer-motion";
import { Compass, Flame, ShieldAlert, Anchor, RefreshCw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ai-test/ui/tabs";
import { type GuidanceKey, type VerdictKey } from "@/lib/ai-test/quiz";
import { useI18n } from "@/lib/ai-test/i18n";

export function Guidance({ verdictKey }: { verdictKey: VerdictKey | null }) {
  const { t } = useI18n();

  const TABS = [
    {
      value: "ai" as const,
      label: t.guidance.tabs.ai,
      icon: Flame,
      header: t.guidance.headers.ai,
      desc: t.guidance.descs.ai,
      active: "data-[state=active]:bg-[#ff2a6d]/25 data-[state=active]:text-[#ffb3cc] data-[state=active]:shadow-[0_0_18px_rgba(255,42,109,0.35)]",
      iconColor: "text-[#ff2a6d]",
    },
    {
      value: "anti" as const,
      label: t.guidance.tabs.anti,
      icon: ShieldAlert,
      header: t.guidance.headers.anti,
      desc: t.guidance.descs.anti,
      active: "data-[state=active]:bg-[#00f5d4]/20 data-[state=active]:text-[#7ff5e4] data-[state=active]:shadow-[0_0_18px_rgba(0,245,212,0.3)]",
      iconColor: "text-[#00f5d4]",
    },
    {
      value: "balanced" as const,
      label: t.guidance.tabs.balanced,
      icon: Anchor,
      header: t.guidance.headers.balanced,
      desc: t.guidance.descs.balanced,
      active: "data-[state=active]:bg-[#b6ff2e]/18 data-[state=active]:text-[#d3ff85] data-[state=active]:shadow-[0_0_18px_rgba(182,255,46,0.3)]",
      iconColor: "text-[#b6ff2e]",
    },
    {
      value: "doomloop" as const,
      label: t.guidance.tabs.doomloop,
      icon: RefreshCw,
      header: t.guidance.headers.doomloop,
      desc: t.guidance.descs.doomloop,
      active: "data-[state=active]:bg-[#ffc300]/20 data-[state=active]:text-[#ffe38a] data-[state=active]:shadow-[0_0_18px_rgba(255,195,0,0.3)]",
      iconColor: "text-[#ffc300]",
    },
  ];

  // เลือกแท็บเริ่มต้นตามผลลัพธ์ล่าสุด (ถ้ามี)
  const defaultTab: GuidanceKey =
    verdictKey === "ai"
      ? "ai"
      : verdictKey === "anti"
        ? "anti"
        : verdictKey === "doomloop"
          ? "doomloop"
          : "balanced";

  return (
    <section id="guidance" className="relative scroll-mt-20 py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#b6ff2e]/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-9 text-center">
          <p className="hud-label text-[10px] text-[#00f5d4]/80">
            [ PROTOCOL :: RECALIBRATION ]
          </p>
          <h2 className="mt-3 flex items-center justify-center gap-2.5 text-2xl font-bold text-white text-glow-white sm:text-3xl">
            <Compass
              className="h-6 w-6 text-[#b6ff2e] drop-shadow-[0_0_10px_rgba(182,255,46,0.8)]"
              aria-hidden
            />
            {t.guidance.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
            {t.guidance.intro}
          </p>
        </div>

        {/* คีย์ตามแท็บที่ควรแสดง เพื่อให้สลับแท็บอัตโนมัติเมื่อได้ผลลัพธ์ใหม่ */}
        <Tabs key={defaultTab} defaultValue={defaultTab} className="w-full">
          <TabsList className="glass clip-corner-sm grid h-auto w-full grid-cols-1 gap-1 rounded-sm p-1.5 sm:grid-cols-4">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={`clip-corner-xs h-11 gap-2 rounded-sm text-[13px] font-semibold text-white/60 data-[state=active]:text-white ${tab.active}`}
                >
                  <Icon className={`h-4 w-4 ${tab.iconColor}`} aria-hidden />
                  {tab.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {TABS.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-5">
              <div className="glass clip-corner-sm rounded-sm p-5">
                <h3 className="text-base font-bold text-white">{tab.header}</h3>
                <p className="mt-1.5 text-[13px] text-white/55">{tab.desc}</p>
              </div>
              <div className="mt-4 space-y-3.5">
                {t.guidance.items[tab.value].map((g, i) => (
                  <motion.div
                    key={g.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px 220px 0px" }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                    className="glass clip-corner-xs group relative flex gap-4 rounded-sm p-4 transition-all hover:shadow-[0_0_34px_rgba(0,245,212,0.14)]"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#00f5d4]/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center border border-[#00f5d4]/35 bg-[#00f5d4]/8 text-sm font-bold text-[#7ff5e4] text-glow-cyan clip-corner-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">{g.title}</h4>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-white/65">
                        {g.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
