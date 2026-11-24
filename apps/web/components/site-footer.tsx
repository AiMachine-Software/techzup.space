import Link from "next/link";
import { Logo } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="relative mt-auto border-t border-[#1e9bff]/20 bg-[#03050b]/80 backdrop-blur">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#1e9bff]/70 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The frontier of AI, ML and technology — decoded for curious people around the world.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
            <p className="tz-kicker col-span-2 mb-1 text-[#4cc3ff]">Explore</p>
            <Link href="/#desks" className="text-muted-foreground hover:text-foreground">News desks</Link>
            <Link href="/#llm-wars" className="text-muted-foreground hover:text-foreground">LLM Wars</Link>
            <a href="/ai-psychosis-test" className="text-muted-foreground hover:text-foreground">AI-Psychosis Test</a>
            <Link href="/login" className="text-muted-foreground hover:text-foreground">Sign in</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms &amp; privacy</Link>
          </div>
        </div>
        <p className="border-t border-[#1e9bff]/15 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} techzup.space. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
