"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BellRing, BrainCircuit, Newspaper, Radar, Sparkles, Swords, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeAuthCard } from "@/components/home-auth-card";
import { INTERESTS } from "@/lib/interests";
import { useSiteI18n } from "@/lib/i18n";

const PERK_ICONS = [Newspaper, BellRing, Sparkles, Users];

export function HomeContent() {
  const { t } = useSiteI18n();
  const h = t.home;

  return (
    <main className="flex-1">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="tz-laser tz-laser-blue left-0 top-24 -rotate-[12deg]" />
        <div aria-hidden className="tz-laser tz-laser-red right-0 top-32 rotate-[12deg]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:pt-24">
          <div>
            <p className="tz-kicker flex items-center gap-2 text-[#4cc3ff]">
              <Radar className="size-3.5" /> {h.kicker}
            </p>
            <h1 className="tz-display tz-headline mt-5 text-[2.5rem] leading-[1.08] text-white sm:text-[3.4rem] xl:text-[4rem]">
              {h.titleA}
              {/['’]$/.test(h.titleA) ? "" : " "}
              <span className="tz-glow-blue">{h.titleAI}</span>
              {/^[,.;:!?—–،]/.test(h.titleB) ? "" : " "}
              {h.titleB}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{h.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="tz-chamfer h-12 rounded-none px-7 text-[15px]">
                <Link href="/login?next=/register">
                  {t.nav.joinTechzupFree} <ArrowRight className="size-4 rtl:rotate-180" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="tz-chamfer h-12 rounded-none border-[#1e9bff]/40 bg-transparent px-7 text-[15px]">
                <a href="#llm-wars">
                  <Swords className="size-4" /> {h.ctaLlmWars}
                </a>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-[#1e9bff]/20 pt-6">
              {[
                ["8", h.statDesks],
                ["22", h.statLanguages],
                [h.statFree, h.statMembership],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="tz-display text-2xl text-white">{v}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <HomeAuthCard />
        </div>
      </section>

      {/* ================= LLM WARS ================= */}
      <section id="llm-wars" className="mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
        <div className="tz-gold-frame tz-keep-dark overflow-hidden rounded-xl bg-black">
          <div className="relative">
            <Image src="/brand/llm-wars.webp" alt={h.llm.alt} width={1220} height={612} priority className="h-auto w-full" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
          </div>
          <div className="grid gap-8 border-t border-[#f7c548]/30 bg-gradient-to-b from-[#0b0906] to-black p-6 sm:p-10 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <p className="tz-kicker text-[#f7c548]">{h.llm.kicker}</p>
              <h2 className="tz-display tz-gold-text mt-3 text-4xl sm:text-5xl" dir="ltr">{h.llm.title}</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-white/70">{h.llm.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {h.llm.rounds.map((r) => (
                  <span key={r} className="tz-chamfer border border-[#f7c548]/40 bg-[#f7c548]/10 px-3 py-1 text-xs font-medium text-[#ffe08a]">
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <p className="text-sm text-white/60 md:text-end">{h.llm.soon}</p>
              <Button asChild size="lg" className="tz-chamfer h-12 rounded-none bg-[#f7c548] px-7 text-[15px] text-black shadow-[0_0_28px_-4px_rgba(247,197,72,0.8)] hover:bg-[#ffd76a]">
                <Link href="/login?next=/register">
                  {h.llm.cta} <BellRing className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AI-PSYCHOSIS TEST ================= */}
      <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-20 sm:px-6">
        <a href="/ai-psychosis-test" className="tz-panel tz-card-hover tz-chamfer group block overflow-hidden p-6 sm:p-10">
          <div aria-hidden className="absolute -left-20 top-1/2 size-72 -translate-y-1/2 rounded-full bg-[#ff4b3a]/20 blur-3xl" />
          <div aria-hidden className="absolute -right-20 top-1/2 size-72 -translate-y-1/2 rounded-full bg-[#1e9bff]/25 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="tz-kicker text-[#ff7a6b]">{h.test.kicker}</p>
              <h2 className="tz-display mt-3 text-3xl text-white sm:text-4xl">{h.test.title}</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{h.test.body}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-medium text-[#4cc3ff]">
                <BrainCircuit className="size-4" /> {h.test.start}
                <ArrowRight className="size-4 transition group-hover:translate-x-1 rtl:rotate-180" />
              </span>
              <p className="mt-4 text-xs text-muted-foreground">{h.test.disclaimer}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-center">
              {[
                ["AI", h.test.statAi, "text-[#ff6b5b]"],
                ["ANTI", h.test.statAnti, "text-[#4cc3ff]"],
                ["D → S", h.test.statGrades, "text-white"],
                ["SSS", h.test.statRare, "text-[#f7c548]"],
              ].map(([v, l, c]) => (
                <div key={v} className="tz-chamfer tz-stat border border-white/10 bg-black/40 p-4">
                  <div className={`tz-display text-2xl ${c}`} dir="ltr">{v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </a>
      </section>

      {/* ================= DESKS ================= */}
      <section id="desks" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="tz-kicker text-[#4cc3ff]">{h.desks.kicker}</p>
          <h2 className="tz-display mt-3 text-3xl text-white sm:text-4xl">{h.desks.title}</h2>
          <p className="mt-3 text-muted-foreground">{h.desks.body}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INTERESTS.map(({ id, Icon }, i) => (
            <div key={id} className="tz-panel tz-card-hover tz-chamfer p-5">
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center border border-[#1e9bff]/40 bg-[#1e9bff]/10 text-[#4cc3ff]">
                  <Icon className="size-5" />
                </span>
                <span className="font-mono text-xs text-[#1e9bff]/60">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 font-semibold text-white">{t.interests[id].label}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.interests[id].blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MEMBERSHIP ================= */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="tz-panel tz-panel-glow tz-chamfer grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="tz-kicker text-[#4cc3ff]">{h.member.kicker}</p>
            <h2 className="tz-display mt-3 text-3xl text-white sm:text-4xl">
              {h.member.title}{" "}
              <span className="tz-wordmark" dir="ltr"><span className="tz-tech">Tech</span><span className="tz-zup">Zup</span></span>
            </h2>
            <p className="mt-3 text-muted-foreground">{h.member.body}</p>
            <Button asChild size="lg" className="tz-chamfer mt-6 h-12 rounded-none px-7">
              <Link href="/login?next=/register">{h.member.cta} <ArrowRight className="size-4 rtl:rotate-180" /></Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {h.member.perks.map(({ title, text }, i) => {
              const Icon = PERK_ICONS[i] ?? Sparkles;
              return (
                <div key={title} className="border-s border-[#1e9bff]/30 ps-4">
                  <Icon className="size-5 text-[#4cc3ff]" />
                  <h3 className="mt-2 font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
