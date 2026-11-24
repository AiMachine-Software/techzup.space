"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, Shield, UserRound } from "lucide-react";
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
import { useAuth } from "@/lib/auth-context";

/** TechZup wordmark: white "Tech", glowing electric-blue "Zup". */
export function Logo({ size = "md", tld = true, className = "" }: { size?: "sm" | "md" | "lg"; tld?: boolean; className?: string }) {
  const text = size === "lg" ? "text-4xl sm:text-5xl" : size === "sm" ? "text-lg" : "text-[22px]";
  return (
    <Link href="/" aria-label="TechZup home" className={`tz-wordmark inline-flex items-baseline gap-1 ${text} ${className}`}>
      <span>
        <span className="tz-tech">Tech</span>
        <span className="tz-zup">Zup</span>
      </span>
      {tld && <span className="tz-tld">.space</span>}
    </Link>
  );
}

const NAV = [
  { href: "/#desks", label: "Desks" },
  { href: "/#llm-wars", label: "LLM Wars" },
  { href: "/ai-psychosis-test", label: "AI-Psychosis Test", hard: true },
];

export function SiteHeader() {
  const { status, identity, profile, isAdmin, signOut } = useAuth();
  const router = useRouter();
  const name = profile?.nickname ?? identity?.name ?? identity?.email ?? "";
  const signedIn = status === "ready" || status === "needs-registration";

  return (
    <header className="sticky top-0 z-40 border-b border-[#1e9bff]/20 bg-[#03050b]/75 backdrop-blur-xl">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#1e9bff]/70 to-transparent" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) =>
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
        <div className="flex items-center gap-2">
          {status === "loading" ? (
            <div className="size-9 animate-pulse rounded-full bg-muted" />
          ) : signedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" aria-label="Account menu">
                  <Avatar className="size-9 border border-border">
                    <AvatarImage src={profile?.photoURL ?? identity?.photoURL ?? undefined} alt="" />
                    <AvatarFallback>{name.slice(0, 1).toUpperCase() || "?"}</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="truncate">{name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {status === "needs-registration" ? (
                  <DropdownMenuItem onSelect={() => router.push("/register")}>
                    <UserRound /> Finish registration
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem onSelect={() => router.push("/account")}>
                    <UserRound /> My account
                  </DropdownMenuItem>
                )}
                {isAdmin && (
                  <DropdownMenuItem onSelect={() => router.push("/admin/users")}>
                    <Shield /> User management
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={async () => {
                    await signOut();
                    router.push("/");
                  }}
                >
                  <LogOut /> Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
                <Link href="/login">Sign in</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/login?next=/register">Join free</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
