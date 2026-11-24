"use client";

import { useSiteI18n } from "@/lib/i18n";

export function TermsContent() {
  const { t } = useSiteI18n();
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
      <h1 className="tz-display text-3xl">{t.terms.title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{t.terms.draft}</p>
      <div className="mt-8 grid gap-6 text-[15px] leading-relaxed text-muted-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground">
        {t.terms.sections.map((sec) => (
          <section key={sec.h}>
            <h2>{sec.h}</h2>
            <p>{sec.p}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
