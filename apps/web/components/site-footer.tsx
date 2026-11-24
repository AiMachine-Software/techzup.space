import Link from "next/link";
import { Logo } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">
              An online magazine following technology, AI and machine learning around the world.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link href="/#topics" className="hover:text-foreground">Topics</Link>
            <a href="/ai-psychosis-test" className="hover:text-foreground">AI-Psychosis Test</a>
            <Link href="/login" className="hover:text-foreground">Sign in</Link>
            <Link href="/terms" className="hover:text-foreground">Terms &amp; privacy</Link>
          </nav>
        </div>
        <p className="border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} techzup.space. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
