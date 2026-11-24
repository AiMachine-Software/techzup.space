import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Russo_One } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PLATFORM_BOOT_SCRIPT } from "@/lib/theme-boot";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const display = Russo_One({ variable: "--font-display", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://techzup.space"),
  title: {
    default: "TechZup — AI, ML & tech news from around the world",
    template: "%s | techzup.space",
  },
  description:
    "techzup.space is an online magazine tracking technology, AI and machine learning around the world — plus interactive features like the AI-Psychosis Test.",
  openGraph: {
    siteName: "TechZup",
    type: "website",
    images: [{ url: "/brand/llm-wars.webp", width: 1220, height: 612, alt: "TechZup — LLM Wars: AI Model Battle 2026" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#03050b" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme="cyberpunk"
      className={`dark ${sans.variable} ${mono.variable} ${display.variable} h-full antialiased`}
    >
      <head>
        {/* theme + language before first paint (shared with the AI-Psychosis Test) */}
        <script dangerouslySetInnerHTML={{ __html: PLATFORM_BOOT_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col">
        {/* deep-space backdrop shared by every TechZup page */}
        <div aria-hidden className="tz-space">
          <div className="tz-stars" />
          <div className="tz-horizon" />
        </div>
        <TooltipProvider>
          <AuthProvider>{children}</AuthProvider>
          <Toaster richColors position="top-center" />
        </TooltipProvider>
      </body>
    </html>
  );
}
