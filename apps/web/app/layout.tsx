import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://techzup.space"),
  title: {
    default: "techzup.space — Tech, AI & ML news from around the world",
    template: "%s | techzup.space",
  },
  description:
    "techzup.space is an online magazine tracking technology, AI and machine learning around the world — plus interactive features like the AI-Psychosis Test.",
  openGraph: { siteName: "techzup.space", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${sans.variable} ${mono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <TooltipProvider>
          <AuthProvider>{children}</AuthProvider>
          <Toaster richColors position="top-center" />
        </TooltipProvider>
      </body>
    </html>
  );
}
