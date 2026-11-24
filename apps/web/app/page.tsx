import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BellRing, BrainCircuit, Newspaper, Radar, Sparkles, Swords, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HomeAuthCard } from "@/components/home-auth-card";
import { INTERESTS } from "@/lib/interests";

const PERKS = [
  { Icon: Newspaper, title: "Your desks, your feed", text: "Follow the topics you care about and your front page follows them." },
  { Icon: BellRing, title: "Weekly signal digest", text: "One email with the week's biggest AI and tech moves. Opt in or out anytime." },
  { Icon: Sparkles, title: "Interactive features", text: "Tests and tools like the AI-Psychosis Test, with results saved to your account." },
  { Icon: Users, title: "Member profile", text: "One sign-in with Google, Facebook or X across everything on TechZup." },
];

const BATTLE_ROUNDS = ["Reasoning", "Coding", "Multimodal", "Agents", "Speed", "Cost"];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="tz-laser tz-laser-blue left-0 top-24 -rotate-[12deg]" />
          <div aria-hidden className="tz-laser tz-laser-red right-0 top-32 rotate-[12deg]" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:pt-24">
            <div>
              <p className="tz-kicker flex items-center gap-2 text-[#4cc3ff]">
                <Radar className="size-3.5" /> AI · ML · Tech — global newsroom
              </p>
              <h1 className="tz-display mt-5 text-[2.5rem] leading-[1.04] text-white sm:text-[3.4rem] xl:text-[4rem]">
                The frontier of <span className="tz-glow-blue">AI</span>,
                <br /> decoded.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                TechZup tracks artificial intelligence, machine learning and the technology shaping the world — clear
                reporting, model battles and interactive features for people who want the signal, not the noise.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="tz-chamfer h-12 rounded-none px-7 text-[15px]">
                  <Link href="/login?next=/register">
                    Join TechZup free <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="tz-chamfer h-12 rounded-none border-[#1e9bff]/40 bg-transparent px-7 text-[15px]">
                  <a href="#llm-wars">
                    <Swords className="size-4" /> LLM Wars 2026
                  </a>
                </Button>
              </div>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-[#1e9bff]/20 pt-6">
                {[
                  ["8", "news desks"],
                  ["22", "languages in tests"],
                  ["Free", "membership"],
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
          <div className="tz-gold-frame overflow-hidden rounded-xl bg-black">
            <div className="relative">
              <Image
                src="/brand/llm-wars.webp"
                alt="TechZup LLM Wars — AI Model Battle 2026"
                width={1220}
                height={612}
                priority
                className="h-auto w-full"
              />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
            </div>
            <div className="grid gap-8 border-t border-[#f7c548]/30 bg-gradient-to-b from-[#0b0906] to-black p-6 sm:p-10 md:grid-cols-[1.3fr_1fr] md:items-center">
              <div>
                <p className="tz-kicker text-[#f7c548]">Featured series · Season 2026</p>
                <h2 className="tz-display tz-gold-text mt-3 text-4xl sm:text-5xl">LLM Wars</h2>
                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  Frontier AI models go head-to-head on the same tasks, scored the same way. Each round puts the big
                  labs&apos; models through real work and publishes what we find — methods included.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {BATTLE_ROUNDS.map((r) => (
                    <span key={r} className="tz-chamfer border border-[#f7c548]/40 bg-[#f7c548]/10 px-3 py-1 text-xs font-medium text-[#ffe08a]">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <p className="text-sm text-muted-foreground md:text-right">
                  First rounds land here soon. Members get each result the day it publishes.
                </p>
                <Button asChild size="lg" className="tz-chamfer h-12 rounded-none bg-[#f7c548] px-7 text-[15px] text-black shadow-[0_0_28px_-4px_rgba(247,197,72,0.8)] hover:bg-[#ffd76a]">
                  <Link href="/login?next=/register">
                    Get round alerts <BellRing className="size-4" />
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
                <p className="tz-kicker text-[#ff7a6b]">Interactive · Members only</p>
                <h2 className="tz-display mt-3 text-3xl text-white sm:text-4xl">The AI-Psychosis Test</h2>
                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  Do you trust AI chatbots more than you should — or fear AI beyond reason? 20 questions in 20 minutes,
                  an instant result with a collectible grade card, and practical advice. Available in 22 languages,
                  saved to your TechZup account.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-medium text-[#4cc3ff]">
                  <BrainCircuit className="size-4" /> Start the test
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
                <p className="mt-4 text-xs text-muted-foreground">For education and research — not a medical diagnosis.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                {[
                  ["AI", "over-belief", "text-[#ff6b5b]"],
                  ["ANTI", "AI fear", "text-[#4cc3ff]"],
                  ["D → S", "clarity grades", "text-white"],
                  ["SSS", "rarest result", "text-[#f7c548]"],
                ].map(([v, l, c]) => (
                  <div key={l} className="tz-chamfer border border-white/10 bg-black/40 p-4">
                    <div className={`tz-display text-2xl ${c}`}>{v}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </a>
        </section>

        {/* ================= DESKS ================= */}
        <section id="desks" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="tz-kicker text-[#4cc3ff]">Coverage</p>
              <h2 className="tz-display mt-3 text-3xl text-white sm:text-4xl">Eight desks. One global view.</h2>
              <p className="mt-3 text-muted-foreground">Pick the desks you want in your feed when you join.</p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INTERESTS.map(({ id, label, Icon, blurb }, i) => (
              <div key={id} className="tz-panel tz-card-hover tz-chamfer p-5">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center border border-[#1e9bff]/40 bg-[#1e9bff]/10 text-[#4cc3ff]">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-[#1e9bff]/60">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 font-semibold text-white">{label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{blurb}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= MEMBERSHIP ================= */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="tz-panel tz-panel-glow tz-chamfer grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="tz-kicker text-[#4cc3ff]">Membership</p>
              <h2 className="tz-display mt-3 text-3xl text-white sm:text-4xl">
                Join <span className="tz-wordmark"><span className="tz-tech">Tech</span><span className="tz-zup">Zup</span></span>
              </h2>
              <p className="mt-3 text-muted-foreground">Free, takes a minute — sign in with Google, Facebook or X.</p>
              <Button asChild size="lg" className="tz-chamfer mt-6 h-12 rounded-none px-7">
                <Link href="/login?next=/register">Create free account <ArrowRight className="size-4" /></Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {PERKS.map(({ Icon, title, text }) => (
                <div key={title} className="border-l border-[#1e9bff]/30 pl-4">
                  <Icon className="size-5 text-[#4cc3ff]" />
                  <h3 className="mt-2 font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
