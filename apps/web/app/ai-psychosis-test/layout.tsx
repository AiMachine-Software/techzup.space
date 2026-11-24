import type { Metadata } from "next";
import "./ai-test.css";
import { I18nProvider } from "@/lib/ai-test/i18n";

/* Theme / lang / dir before first paint (defaults: cyberpunk + th). */
const BOOT_SCRIPT = `(function(){try{var d=document.documentElement;d.dataset.theme="cyberpunk";var t=localStorage.getItem("ai-psy-theme");if(t==="dark"||t==="light"||t==="cyberpunk"){d.dataset.theme=t}var l=localStorage.getItem("ai-psy-lang")||"th";if(/^[a-z]{2}$/.test(l)){d.lang=l;d.dir=l==="ar"?"rtl":"ltr"}d.classList.remove("dark")}catch(e){}})();`;

export const metadata: Metadata = {
  title: { absolute: "AI-PSYCHOSIS Test — 20 questions on AI over-belief vs. AI fear | techzup.space" },
  description:
    "A 20-question self-reflection test: how far you lean toward AI-PSYCHOSIS (over-trusting AI) or ANTI-AI PSYCHOSIS (irrational fear of AI), with instant results and guidance. Not a medical diagnosis.",
  keywords: ["AI psychosis", "anti-AI", "chatbot", "sycophancy", "moral panic", "mental health", "techzup"],
  openGraph: {
    title: "AI-PSYCHOSIS Test — techzup.space",
    description: "Do you over-trust AI or fear it beyond reason? Take the 20-question test.",
    siteName: "techzup.space",
    type: "website",
  },
};

export default function AiTestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      <div className="ai-test-root antialiased bg-background text-foreground">
        <I18nProvider>{children}</I18nProvider>
      </div>
    </>
  );
}
