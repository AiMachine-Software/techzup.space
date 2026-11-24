"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BrainCircuit, LayoutGrid, LogOut, Menu, Shield, Swords, UserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LanguageMenu, ThemeToggle } from "@/components/site-controls";
import { useAuth } from "@/lib/auth-context";
import { useSiteI18n, type SiteDict } from "@/lib/i18n";

/** TechZup wordmark: white "Tech", glowing electric-blue "Zup". */
export function Logo({
  size = "md",
  tld = true,
  compact = false,
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  tld?: boolean;
  /** hide ".space" on very small screens */
  compact?: boolean;
  className?: string;
}) {
  const text = size === "lg" ? "text-4xl sm:text-5xl" : size === "sm" ? "text-lg" : "text-[22px]";
  return (
    <Link href="/" aria-label="TechZup home" dir="ltr" className={`tz-wordmark inline-flex items-baseline gap-1 ${text} ${className}`}>
      <span>
        <span className="tz-tech">Tech</span>
        <span className="tz-zup">Zup</span>
      </span>
      {tld && <span className={compact ? "tz-tld hidden min-[400px]:inline" : "tz-tld"}>.space</span>}
    </Link>
  );
}

const nav = (t: SiteDict) => [
  { href: "/#desks", label: t.nav.desks, Icon: LayoutGrid, hard: false },
  { href: "/#llm-wars", label: t.nav.llmWars, Icon: Swords, hard: false },
  { href: "/ai-psychosis-test", label: t.nav.aiTest, hard: true, Icon: BrainCircuit },
];

/** Phone & tablet navigation (below lg). */
function MobileNav({ signedIn }: { signedIn: boolean }) {
  const { t } = useSiteI18n();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={t.nav.openMenu}>
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="tz-sheet w-[min(85vw,320px)] border-l border-[#1e9bff]/30 backdrop-blur-xl">
        <SheetHeader className="border-b border-[#1e9bff]/20 pb-4">
          <SheetTitle className="sr-only">{t.nav.menu}</SheetTitle>
          <SheetDescription className="sr-only">TechZup</SheetDescription>
          <Logo />
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {nav(t).map(({ href, label, hard, Icon }) => (
            <SheetClose asChild key={href}>
              {hard ? (
                <a href={href} className="flex items-center gap-3 rounded-md px-3 py-3 text-[15px] text-foreground/90 hover:bg-[#1e9bff]/10 hover:text-[#4cc3ff]">
                  <Icon className="size-4 text-[#4cc3ff]" /> {label}
                </a>
              ) : (
                <Link href={href} className="flex items-center gap-3 rounded-md px-3 py-3 text-[15px] text-foreground/90 hover:bg-[#1e9bff]/10 hover:text-[#4cc3ff]">
                  <Icon className="size-4 text-[#4cc3ff]" /> {label}
                </Link>
              )}
            </SheetClose>
          ))}
        </nav>
        <div className="flex items-center justify-between gap-3 border-t border-[#1e9bff]/20 px-4 pt-4">
          <span className="text-sm text-muted-foreground">{t.nav.theme}</span>
          <ThemeToggle />
        </div>
        {!signedIn && (
          <div className="mt-auto flex flex-col gap-2 border-t border-[#1e9bff]/20 p-4">
            <SheetClose asChild>
              <Button asChild size="lg"><Link href="/login?next=/register">{t.nav.joinTechzupFree}</Link></Button>
            </SheetClose>
            <SheetClose asChild>
              <Button asChild size="lg" variant="outline"><Link href="/login">{t.nav.signIn}</Link></Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader() {
  const { status, identity, profile, isAdmin, signOut } = useAuth();
  const { t } = useSiteI18n();
  const router = useRouter();
  const name = profile?.nickname ?? identity?.name ?? identity?.email ?? "";
  const signedIn = status === "ready" || status === "needs-registration" || status === "needs-verification";

  return (
    <header className="tz-header sticky top-0 z-40 border-b border-[#1e9bff]/20 backdrop-blur-xl">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#1e9bff]/70 to-transparent" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Logo compact className="shrink-0" />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav(t).map((n) =>
            n.hard ? (
              <a key={n.href} href={n.href} className="tz-kicker rounded-md px-3 py-2 !text-[11px] text-muted-foreground transition-colors hover:text-[#4cc3ff]">
                {n.label}
              </a>
            ) : (
              <Link key={n.href} href={n.href} className="tz-kicker rounded-md px-3 py-2 !text-[11px] text-muted-foreground transition-colors hover:text-[#4cc3ff]">
                {n.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle className="hidden lg:flex" />
          <LanguageMenu />
          {status === "loading" ? (
            <div className="size-9 animate-pulse rounded-full bg-muted" />
          ) : signedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" aria-label={t.nav.accountMenu}>
                  <Avatar className="size-9 border border-border">
                    <AvatarImage src={profile?.photoURL ?? identity?.photoURL ?? undefined} alt="" />
                    <AvatarFallback>{name.slice(0, 1).toUpperCase() || "?"}</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="truncate">{name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {status === "needs-verification" ? (
                  <DropdownMenuItem onSelect={() => router.push("/login")}>
                    <UserRound /> {t.email.verifyTitle}
                  </DropdownMenuItem>
                ) : status === "needs-registration" ? (
                  <DropdownMenuItem onSelect={() => router.push("/register")}>
                    <UserRound /> {t.nav.finishRegistration}
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem onSelect={() => router.push("/account")}>
                    <UserRound /> {t.nav.myAccount}
                  </DropdownMenuItem>
                )}
                {isAdmin && (
                  <DropdownMenuItem onSelect={() => router.push("/admin/users")}>
                    <Shield /> {t.nav.userManagement}
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={async () => {
                    await signOut();
                    router.push("/");
                  }}
                >
                  <LogOut /> {t.nav.signOut}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
                <Link href="/login">{t.nav.signIn}</Link>
              </Button>
              <Button asChild size="sm" className="hidden min-[420px]:inline-flex">
                <Link href="/login?next=/register">{t.nav.joinFree}</Link>
              </Button>
            </>
          )}
          <MobileNav signedIn={signedIn} />
        </div>
      </div>
    </header>
  );
}
