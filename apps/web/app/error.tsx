"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Friendly fallback if a page crashes in the browser (instead of a blank screen). */
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[techzup] page error", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="tz-kicker text-[#4cc3ff]">TechZup</p>
      <h1 className="tz-display text-2xl">Something went wrong</h1>
      <p className="max-w-sm text-sm text-muted-foreground">This page hit an error. Try again, or go back to the home page.</p>
      <div className="flex gap-2">
        <Button onClick={reset}>
          <RefreshCw className="size-4" /> Try again
        </Button>
        <Button variant="outline" asChild>
          <a href="/">Home</a>
        </Button>
      </div>
      {error.digest && <p className="font-mono text-xs text-muted-foreground">ref {error.digest}</p>}
    </main>
  );
}
