"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, Shield, UserRound, Zap } from "lucide-react";
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

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
      <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.35)]">
        <Zap className="size-4.5" strokeWidth={2.6} />
      </span>
      <span>
        techzup<span className="text-cyan-300">.space</span>
      </span>
    </Link>
  );
}

const NAV = [
  { href: "/#topics", label: "Topics" },
  { href: "/#features", label: "Features" },
  { href: "/ai-psychosis-test", label: "AI-Psychosis Test", hard: true },
];

export function SiteHeader() {
  const { status, identity, profile, isAdmin, signOut } = useAuth();
  const router = useRouter();
  const name = profile?.nickname ?? identity?.name ?? identity?.email ?? "";
  const signedIn = status === "ready" || status === "needs-registration";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) =>
            n.hard ? (
              <a key={n.href} href={n.href} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
                {n.label}
              </a>
            ) : (
              <Link key={n.href} href={n.href} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
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
