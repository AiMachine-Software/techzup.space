import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TermsContent } from "../terms/terms-content";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How TechZup collects, uses and deletes your data.",
};

/** Privacy policy URL for Meta / X app review (same content as Terms & privacy). */
export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <TermsContent />
      <SiteFooter />
    </div>
  );
}
