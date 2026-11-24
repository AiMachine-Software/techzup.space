import type { Metadata } from "next";
import { headers } from "next/headers";
import { ShareLanding } from "@/components/ai-test/share-landing";

type SP = Promise<Record<string, string | string[] | undefined>>;

function pct(v: string | string[] | undefined): number {
  const n = Math.round(Number(Array.isArray(v) ? v[0] : v));
  return Number.isFinite(n) ? Math.min(100, Math.max(0, n)) : 0;
}

async function baseUrl(): Promise<string> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const local = /^(localhost|127\.0\.0\.1|\[::1\])(:|$)/.test(host);
  const proto = h.get("x-forwarded-proto") ?? (local ? "http" : "https");
  return `${proto}://${host}`;
}

export async function generateMetadata({ searchParams }: { searchParams: SP }): Promise<Metadata> {
  const sp = await searchParams;
  const ai = pct(sp.ai);
  const anti = pct(sp.anti);
  const base = await baseUrl();
  const title = `AI-PSYCHOSIS ${ai}% · ANTI-AI PSYCHOSIS ${anti}%`;
  const description =
    "My result on the AI-PSYCHOSIS Checklist — a 20-question self-reflection test measuring over-belief in AI vs. irrational fear of AI. Not a medical diagnosis.";
  const image = `${base}/ai-psychosis-test/og?ai=${ai}&anti=${anti}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${base}/ai-psychosis-test/share?ai=${ai}&anti=${anti}`,
      siteName: "AI-PSYCHOSIS Checklist",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function SharePage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  return <ShareLanding ai={pct(sp.ai)} anti={pct(sp.anti)} />;
}
