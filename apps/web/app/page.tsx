import Link from "next/link";
import { ArrowRight, BellRing, BrainCircuit, Globe2, Newspaper, Sparkles, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HomeAuthCard } from "@/components/home-auth-card";
import { INTERESTS } from "@/lib/interests";

const PERKS = [
  { Icon: Newspaper, title: "A feed that fits you", text: "Pick the topics you care about and your front page follows them." },
  { Icon: BellRing, title: "Weekly digest", text: "One email with the week's biggest tech and AI stories. Opt in or out anytime." },
  { Icon: Sparkles, title: "Interactive features", text: "Tests, explainers and tools like the AI-Psychosis Test." },
  { Icon: Users, title: "Join the conversation", text: "Member profiles today; comments and community features as they launch." },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] overflow-hidden">
        <div className="brand-grid absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-pink-500/15 blur-3xl" />
      </div>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:pt-20">
          <div>
            <Badge variant="outline" className="gap-1.5 border-cyan-400/40 bg-cyan-400/10 text-cyan-200">
              <Globe2 className="size-3.5" /> Tech · AI · ML — from around the world
            </Badge>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Stay ahead of <span className="brand-gradient-text">tech &amp; AI</span>, without the noise.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              techzup.space is an online magazine tracking technology, artificial intelligence and machine learning
              worldwide — clear reporting, explainers and interactive features for curious people.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-11 px-6">
                <Link href="/login?next=/register">
                  Create free account <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 px-6">
                <a href="/ai-psychosis-test">
                  <BrainCircuit className="size-4" /> Take the AI-Psychosis Test
                </a>
              </Button>
            </div>
          </div>
          <HomeAuthCard />
        </section>

        {/* Featured: AI-Psychosis Test */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
          <a
            href="/ai-psychosis-test"
            className="group relative block overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[#12081f] via-[#0b0d1f] to-[#051a1f] p-6 transition hover:border-cyan-400/50 sm:p-10"
          >
            <div aria-hidden className="absolute -right-24 -top-24 size-72 rounded-full bg-red-500/20 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 right-40 size-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <Badge className="bg-pink-500/15 text-pink-200 hover:bg-pink-500/15">Featured interactive</Badge>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
                  The AI-Psychosis Test
                </h2>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  Do you trust AI chatbots more than you should — or fear AI beyond reason? 20 questions, 20 minutes,
                  an instant result with a collectible grade card, and practical advice. Available in 22 languages.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-medium text-cyan-300">
                  Start the test <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
                <p className="mt-4 text-xs text-muted-foreground">
                  Free for techzup.space members — your results are saved to your account. For education and
                  research, not a medical diagnosis.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                {[
                  ["20", "questions"],
                  ["22", "languages"],
                  ["D → S", "grades"],
                  ["SSS", "rarest result"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="font-[family-name:var(--font-display)] text-2xl font-bold">{v}</div>
                    <div className="text-xs text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </a>
        </section>

        {/* Topics */}
        <section id="topics" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">What we cover</h2>
            <p className="mt-3 text-muted-foreground">
              Eight desks, one global view. Choose the ones you want in your feed when you register.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INTERESTS.map(({ id, label, Icon, blurb }) => (
              <Card key={id} className="bg-card/60 transition hover:border-cyan-400/40">
                <CardHeader>
                  <span className="mb-2 flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-200">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="text-base">{label}</CardTitle>
                  <CardDescription>{blurb}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Member perks */}
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <Card className="overflow-hidden bg-card/60">
            <CardContent className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">
                  Why create an account?
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Free, takes a minute, and you can sign in with Google, Facebook or X.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/login?next=/register">Join techzup.space</Link>
                </Button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {PERKS.map(({ Icon, title, text }) => (
                  <div key={title}>
                    <Icon className="size-5 text-cyan-300" />
                    <h3 className="mt-2 font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
