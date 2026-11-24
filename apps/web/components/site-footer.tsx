"use client";

import Link from "next/link";
import { Logo } from "@/components/site-header";
import { useSiteI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useSiteI18n();
  return (
    <footer className="tz-footer relative mt-auto border-t border-[#1e9bff]/20 backdrop-blur">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#1e9bff]/70 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
            <p className="tz-kicker col-span-2 mb-1 text-[#4cc3ff]">{t.footer.explore}</p>
            <Link href="/#desks" className="text-muted-foreground hover:text-foreground">{t.footer.newsDesks}</Link>
            <Link href="/#llm-wars" className="text-muted-foreground hover:text-foreground">{t.nav.llmWars}</Link>
            <a href="/ai-psychosis-test" className="text-muted-foreground hover:text-foreground">{t.nav.aiTest}</a>
            <Link href="/login" className="text-muted-foreground hover:text-foreground">{t.nav.signIn}</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground">{t.footer.terms}</Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link href="/data-deletion" className="text-muted-foreground hover:text-foreground">Data deletion</Link>
          </div>
        </div>
        <p className="border-t border-[#1e9bff]/15 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} techzup.space. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
