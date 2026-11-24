import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TermsContent } from "./terms-content";

export const metadata: Metadata = { title: "Terms & privacy" };

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <TermsContent />
      <SiteFooter />
    </div>
  );
}
