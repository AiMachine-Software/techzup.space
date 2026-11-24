"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldAlert, Quote, Terminal } from "lucide-react";
import { useI18n } from "@/lib/ai-test/i18n";

export function Phenomena() {
  const { t } = useI18n();

  return (
    <section id="phenomena" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-11 text-center">
          <p className="hud-label text-[10px] text-[#00f5d4]/80">
            [ INTEL :: KNOW BOTH POLES ]
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white text-glow-white sm:text-3xl">
            {t.phenomena.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
            {t.phenomena.intro}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {t.phenomena.items.map((p, idx) => {
            const isAi = p.key === "ai";
            const accent = isAi ? "#ff2a6d" : "#00f5d4";
            return (
              <motion.article
                key={p.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 220px 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="glass clip-corner group relative overflow-hidden rounded-sm p-6 transition-shadow hover:shadow-[0_0_50px_rgba(255,42,109,0.14)]"
              >
                {/* แถบเรืองแสงบนการ์ด */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1"
                  style={{
                    background: isAi
                      ? "linear-gradient(90deg, #ff2a6d, #ffc300)"
                      : "linear-gradient(90deg, #00f5d4, #a06bff)",
                    boxShadow: `0 0 16px ${accent}66`,
                  }}
                />
                {/* เส้นเรืองแสงข้างเมื่อ hover */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-px opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(180deg, transparent, ${accent}88, transparent)`,
                  }}
                />

                <div className="flex items-center gap-3.5">
                  <div
                    className="clip-corner-xs flex h-12 w-12 items-center justify-center border"
                    style={{
                      borderColor: `${accent}55`,
                      background: `${accent}14`,
                      boxShadow: `0 0 18px ${accent}44`,
                    }}
                  >
                    {isAi ? (
                      <Sparkles
                        className="h-5 w-5"
                        style={{ color: accent, filter: `drop-shadow(0 0 8px ${accent})` }}
                        aria-hidden
                      />
                    ) : (
                      <ShieldAlert
                        className="h-5 w-5"
                        style={{ color: accent, filter: `drop-shadow(0 0 8px ${accent})` }}
                        aria-hidden
                      />
                    )}
                  </div>
                  <div>
                    <h3
                      className="font-display text-lg font-bold tracking-wide"
                      style={{
                        color: isAi ? "#ffb3cc" : "#7ff5e4",
                        textShadow: `0 0 16px ${accent}aa`,
                      }}
                    >
                      {p.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-white/50">{p.nameLocal}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  {p.definition}
                </p>

                <div className="mt-5">
                  <h4 className="hud-label text-[9px] font-bold text-white/45">
                    {t.phenomena.mechanismsLabel}
                  </h4>
                  <ul className="mt-2.5 space-y-2">
                    {p.mechanisms.map((m) => (
                      <li
                        key={m}
                        className="flex gap-2.5 text-[13px] leading-relaxed text-white/70"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{
                            background: accent,
                            boxShadow: `0 0 8px ${accent}`,
                          }}
                        />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4.5">
                  <h4 className="hud-label text-[9px] font-bold text-white/45">
                    {t.phenomena.patternsLabel}
                  </h4>
                  <ul className="mt-2.5 space-y-2">
                    {p.patterns.map((m) => (
                      <li
                        key={m}
                        className="flex gap-2.5 text-[13px] leading-relaxed text-white/70"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45"
                          style={{
                            background: isAi ? "#ffc300" : "#a06bff",
                            boxShadow: `0 0 8px ${isAi ? "#ffc300" : "#a06bff"}`,
                          }}
                        />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="clip-corner-xs mt-5 flex gap-2.5 border p-3.5"
                  style={{
                    borderColor: `${accent}3d`,
                    background: `${accent}12`,
                  }}
                >
                  <Quote
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: accent, filter: `drop-shadow(0 0 6px ${accent})` }}
                    aria-hidden
                  />
                  <div>
                    <p className="text-[13px] font-medium leading-relaxed text-white/85">
                      {p.stat}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* แถบสถิติ HUD */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.phenomena.stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass clip-corner-xs relative rounded-sm p-4 transition-shadow hover:shadow-[0_0_30px_rgba(0,245,212,0.16)]"
            >
              <Terminal
                className="absolute right-3 top-3 h-3.5 w-3.5 text-[#00f5d4]/50"
                aria-hidden
              />
              <p className="font-display text-2xl font-black text-white text-glow-white">
                {s.value}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/65">{s.label}</p>
              <p className="hud-label mt-2.5 text-[8px] text-white/35">
                {t.phenomena.sourcePrefix} {s.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
