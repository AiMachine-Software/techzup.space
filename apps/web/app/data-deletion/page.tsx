import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Delete your data",
  description: "How to delete your TechZup account and all data linked to it.",
};

/** User Data Deletion instructions URL (required by Meta for Facebook Login). */
export default function DataDeletionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="tz-display text-3xl">Delete your TechZup data</h1>
        <div className="mt-8 grid gap-6 text-[15px] leading-relaxed text-muted-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground">
          <section>
            <h2>Delete it yourself (instant)</h2>
            <ol className="mt-2 list-decimal space-y-1 ps-5">
              <li>Sign in at <a className="underline" href="/login">techzup.space/login</a> with the same Google, Facebook, X or email account.</li>
              <li>Open <a className="underline" href="/account">My account</a>.</li>
              <li>Choose <strong>Delete my account</strong> and confirm.</li>
            </ol>
            <p className="mt-2">
              This permanently removes your profile, preferences, AI-Psychosis Test results and your TechZup sign-in. It
              can&apos;t be undone.
            </p>
          </section>
          <section>
            <h2>Can&apos;t sign in?</h2>
            <p>
              Email <a className="underline" href="mailto:info@techzup.space">info@techzup.space</a> from the address on
              your account (or tell us which Facebook / X account you used) and ask us to delete your data. We delete it
              within 30 days and confirm by email.
            </p>
          </section>
          <section>
            <h2>Removing TechZup from Facebook or X</h2>
            <p>
              You can also remove TechZup from your Facebook settings (Apps and websites) or your X settings (Connected
              apps). That stops TechZup receiving new data; delete your account as above to remove what we already store.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
