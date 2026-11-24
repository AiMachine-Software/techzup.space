import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Terms & privacy" };

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold">Terms &amp; privacy notice</h1>
        <p className="mt-2 text-sm text-muted-foreground">Draft — to be reviewed by the techzup.space team before launch.</p>
        <div className="mt-8 grid gap-6 text-[15px] leading-relaxed text-muted-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground">
          <section>
            <h2>What we store</h2>
            <p>
              When you sign in with Google, Facebook or X, we receive your account ID, name, email (if shared) and profile
              photo from that provider. When you register we also store the name, nickname, country, topics and digest
              preference you enter, plus timestamps for when you joined and last signed in.
            </p>
          </section>
          <section>
            <h2>How we use it</h2>
            <p>
              To run your account, personalise topics, and — only if you opt in — send the weekly digest. We don&apos;t sell
              your data. Staff with an admin role can view and manage member accounts.
            </p>
          </section>
          <section>
            <h2>Your choices</h2>
            <p>
              You can edit your profile or turn off the digest at any time from <strong>My account</strong>, and delete your
              account there permanently.
            </p>
          </section>
          <section>
            <h2>AI-Psychosis Test</h2>
            <p>
              The test runs in your browser and keeps its answers on your device. It is for education and research and is
              not a medical diagnosis.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
