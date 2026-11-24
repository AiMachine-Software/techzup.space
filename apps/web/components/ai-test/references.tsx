"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Info, Database } from "lucide-react";
import { useI18n } from "@/lib/ai-test/i18n";

export function References() {
  const { t } = useI18n();

  return (
    <section id="references" className="relative scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-9 text-center">
          <p className="hud-label text-[10px] text-[#00f5d4]/80">
            [ ARCHIVE :: RAW SOURCES ]
          </p>
          <h2 className="mt-3 flex items-center justify-center gap-2.5 text-2xl font-bold text-white text-glow-white sm:text-3xl">
            <BookOpen
              className="h-6 w-6 text-white/70 drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
              aria-hidden
            />
            {t.references.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
            {t.references.intro}
          </p>
        </div>

        {/* คำชี้แจง */}
        <div className="clip-corner relative mb-9 flex gap-3.5 border border-[#ffc300]/30 bg-[#ffc300]/8 p-5 shadow-[0_0_36px_rgba(255,195,0,0.1)]">
          <Info
            className="mt-0.5 h-5 w-5 shrink-0 text-[#ffe38a] drop-shadow-[0_0_10px_rgba(255,195,0,0.8)]"
            aria-hidden
          />
          <div>
            <p className="text-sm font-bold text-[#ffe38a]">{t.references.disclaimerTitle}</p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-amber-100/75">
              {t.references.disclaimer}
            </p>
          </div>
        </div>

        <div className="space-y-9">
          {t.references.groups.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 220px 0px" }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
            >
              <h3 className="hud-label flex items-center gap-2.5 text-[10px] font-bold text-white/50">
                <Database
                  className="h-3.5 w-3.5 text-[#00f5d4]/70"
                  aria-hidden
                />
                {group.group}
                <span
                  aria-hidden
                  className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent"
                />
              </h3>
              <ul className="mt-3.5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.url}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass clip-corner-xs group flex gap-3.5 rounded-sm p-4 transition-all hover:shadow-[0_0_30px_rgba(0,245,212,0.15)]"
                    >
                      <ExternalLink
                        className="mt-0.5 h-4 w-4 shrink-0 text-white/35 transition-colors group-hover:text-[#00f5d4] group-hover:drop-shadow-[0_0_8px_rgba(0,245,212,0.8)]"
                        aria-hidden
                      />
                      <span>
                        <span className="block text-[13px] font-semibold text-white/85 transition-colors group-hover:text-white sm:text-sm">
                          {item.title}
                        </span>
                        {item.note ? (
                          <span className="mt-1 block text-[12px] leading-relaxed text-white/45">
                            {item.note}
                          </span>
                        ) : null}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
