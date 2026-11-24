import { HomeContent } from "@/components/home-content";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <HomeContent />
      <SiteFooter />
    </div>
  );
}
