"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Loader2, MoreHorizontal, RefreshCw, Search, ShieldCheck, Trash2, UserCheck, UserX } from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SiteHeader } from "@/components/site-header";
import { useAuth } from "@/lib/auth-context";
import { fill, useSiteI18n } from "@/lib/i18n";
import type { Role, UserProfile, UserStatus } from "@techzup/api";

interface Stats {
  total: number;
  newThisWeek: number;
  newsletter: number;
  byRole: Record<string, number>;
  byStatus: Record<string, number>;
  byProvider: Record<string, number>;
  orphans?: number;
}

type Row = UserProfile & { authMissing?: boolean };

/** Admin-only maintenance text (internal tool; English). */
const ORPHAN = {
  badge: "No login",
  badgeTitle: "This profile's Firebase account was deleted (e.g. in the Firebase console). It can't sign in.",
  note: (n: number) => `${n} profile${n === 1 ? "" : "s"} have no Firebase login (deleted in the Firebase console). Their data still counts in stats.`,
  cleanup: "Remove orphaned profiles",
  done: (n: number) => `Removed ${n} orphaned profile${n === 1 ? "" : "s"}`,
  failed: "Cleanup failed.",
};

const PAGE = 20;
const providerName = (p: string) => ({ "google.com": "Google", "facebook.com": "Facebook", "twitter.com": "X" })[p] ?? p;

export default function AdminUsersPage() {
  const { status, isAdmin, profile, api } = useAuth();
  const { t, date } = useSiteI18n();
  const A = t.admin;
  const roleName = t.account.roles;
  const statusName = (v: UserStatus) => (v === "active" ? A.active : A.suspended);
  const fmt = (ms: number) => date(ms, { year: "2-digit", month: "short", day: "numeric" });
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [rows, setRows] = useState<Row[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [query, setQuery] = useState("");
  const [role, setRole] = useState<Role | "all">("all");
  const [state, setState] = useState<UserStatus | "all">("all");
  const [offset, setOffset] = useState(0);
  const [toDelete, setToDelete] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (status === "signed-out") router.replace("/login?next=/admin/users");
    else if (status === "needs-registration") router.replace("/register");
    else if (status === "ready" && !isAdmin) router.replace("/account");
  }, [status, isAdmin, router]);

  // debounce search box
  useEffect(() => {
    const id = setTimeout(() => {
      setQuery(q.trim());
      setOffset(0);
    }, 300);
    return () => clearTimeout(id);
  }, [q]);

  const load = useCallback(async () => {
    setLoading(true);
    const p = new URLSearchParams({ limit: String(PAGE), offset: String(offset) });
    if (query) p.set("q", query);
    if (role !== "all") p.set("role", role);
    if (state !== "all") p.set("status", state);
    const [list, st] = await Promise.all([
      api<{ users: Row[]; total: number }>(`/admin/users?${p}`),
      api<Stats>("/admin/stats"),
    ]);
    if (list.ok) {
      setRows(list.data.users);
      setTotal(list.data.total);
    } else toast.error(A.errLoad);
    if (st.ok) setStats(st.data);
    setLoading(false);
  }, [api, offset, query, role, state]);

  useEffect(() => {
    if (status === "ready" && isAdmin) void load();
  }, [status, isAdmin, load]);

  const update = async (u: UserProfile, patch: { role?: Role; status?: UserStatus }) => {
    const r = await api<{ user: UserProfile; error?: string }>(`/admin/users/${encodeURIComponent(u.uid)}`, {
      method: "PATCH",
      body: JSON.stringify(patch),
    });
    if (!r.ok) return toast.error(r.data?.error === "cannot_demote_self" ? A.errSelf : A.errUpdate);
    toast.success(fill(A.updated, { name: u.nickname }));
    void load();
  };

  const remove = async () => {
    if (!toDelete) return;
    const r = await api(`/admin/users/${encodeURIComponent(toDelete.uid)}`, { method: "DELETE" });
    setToDelete(null);
    if (!r.ok) return toast.error(A.errDelete);
    toast.success(A.deletedOk);
    void load();
  };

  if (status !== "ready" || !isAdmin)
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex flex-1 items-center justify-center"><Loader2 className="size-6 animate-spin text-muted-foreground" /></div>
      </div>
    );

  const actions = (u: Row, self: boolean) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={`${A.actions}: ${u.nickname}`}><MoreHorizontal className="size-4" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel>{A.role}</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={u.role} onValueChange={(v) => v !== u.role && update(u, { role: v as Role })}>
          <DropdownMenuRadioItem value="reader" disabled={self}>{roleName.reader}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="editor" disabled={self}>{roleName.editor}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="admin">{roleName.admin}</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        {u.status === "active" ? (
          <DropdownMenuItem disabled={self} onSelect={() => update(u, { status: "suspended" })}>
            <UserX /> {A.suspend}
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onSelect={() => update(u, { status: "active" })}>
            <UserCheck /> {A.reactivate}
          </DropdownMenuItem>
        )}
        <DropdownMenuItem variant="destructive" disabled={self} onSelect={() => setToDelete(u)}>
          <Trash2 /> {A.delete}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const pages = Math.max(1, Math.ceil(total / PAGE));
  const page = Math.floor(offset / PAGE) + 1;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto grid w-full max-w-6xl flex-1 content-start gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-[#4cc3ff]">
              <ShieldCheck className="size-3.5" /> {A.kicker}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold">{A.title}</h1>
          </div>
          <Button variant="outline" onClick={() => void load()} disabled={loading}>
            <RefreshCw className={loading ? "size-4 animate-spin" : "size-4"} /> {A.refresh}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            [A.statMembers, stats?.total],
            [A.statNew, stats?.newThisWeek],
            [A.statDigest, stats?.newsletter],
            [A.statSuspended, stats?.byStatus?.suspended ?? 0],
          ].map(([label, v]) => (
            <Card key={label as string} className="tz-panel">
              <CardHeader className="pb-2">
                <CardDescription>{label}</CardDescription>
                <CardTitle className="font-[family-name:var(--font-display)] text-3xl">{v ?? "—"}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        {!!stats?.orphans && (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-sm">
            <span>{ORPHAN.note(stats.orphans)}</span>
            <Button
              size="sm"
              variant="outline"
              onClick={async () => {
                const r = await api<{ removed: number }>("/admin/cleanup-orphans", { method: "POST" });
                if (r.ok) toast.success(ORPHAN.done(r.data.removed));
                else toast.error(ORPHAN.failed);
                void load();
              }}
            >
              <Trash2 className="size-4" /> {ORPHAN.cleanup}
            </Button>
          </div>
        )}
        {stats && (
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {Object.entries(stats.byProvider).map(([p, n]) => (
              <Badge key={p} variant="outline">{providerName(p)}: {n}</Badge>
            ))}
            {Object.entries(stats.byRole).map(([r, n]) => (
              <Badge key={r} variant="secondary">{roleName[r as Role] ?? r}: {n}</Badge>
            ))}
          </div>
        )}

        {/* Filters + table */}
        <Card className="tz-panel">
          <CardContent className="grid gap-4 pt-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="ps-9" placeholder={A.search} value={q} onChange={(e) => setQ(e.target.value)} />
              </div>
              <Select value={role} onValueChange={(v) => { setRole(v as Role | "all"); setOffset(0); }}>
                <SelectTrigger className="sm:w-40" aria-label={A.colRole}><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{A.allRoles}</SelectItem>
                  <SelectItem value="reader">{roleName.reader}</SelectItem>
                  <SelectItem value="editor">{roleName.editor}</SelectItem>
                  <SelectItem value="admin">{roleName.admin}</SelectItem>
                </SelectContent>
              </Select>
              <Select value={state} onValueChange={(v) => { setState(v as UserStatus | "all"); setOffset(0); }}>
                <SelectTrigger className="sm:w-40" aria-label={A.colStatus}><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{A.allStatuses}</SelectItem>
                  <SelectItem value="active">{A.active}</SelectItem>
                  <SelectItem value="suspended">{A.suspended}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* phones: card list */}
            <ul className="grid gap-2 md:hidden">
              {loading && rows.length === 0 ? (
                <li className="flex justify-center py-8"><Loader2 className="size-5 animate-spin text-muted-foreground" /></li>
              ) : rows.length === 0 ? (
                <li className="py-8 text-center text-sm text-muted-foreground">{A.none}</li>
              ) : (
                rows.map((u) => {
                  const self = u.uid === profile?.uid;
                  return (
                    <li key={u.uid} className="rounded-lg border border-border bg-background/40 p-3">
                      <div className="flex items-start gap-3">
                        <Avatar className="size-9">
                          <AvatarImage src={u.photoURL ?? undefined} alt="" />
                          <AvatarFallback>{u.nickname.slice(0, 1).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                          <div className="truncate font-medium">{u.displayName} {self && <span className="text-xs text-[#4cc3ff]">{A.you}</span>}
                            {u.authMissing && (
                              <Badge variant="outline" className="ms-1 border-amber-500/60 text-amber-500" title={ORPHAN.badgeTitle}>
                                {ORPHAN.badge}
                              </Badge>
                            )}</div>
                          <div className="truncate text-xs text-muted-foreground">@{u.nickname}</div>
                          <div className="truncate text-xs text-muted-foreground">{u.email ?? "—"}</div>
                        </div>
                        {actions(u, self)}
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                        <Badge variant={u.role === "admin" ? "default" : "secondary"} >{roleName[u.role]}</Badge>
                        <Badge variant={u.status === "active" ? "outline" : "destructive"} >{statusName(u.status)}</Badge>
                        <span>· {providerName(u.provider)} · {fill(A.joined, { date: fmt(u.createdAt) })}</span>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>

            {/* tablet & desktop: table */}
            <div className="hidden overflow-x-auto rounded-lg border border-border md:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{A.colMember}</TableHead>
                    <TableHead className="hidden md:table-cell">{A.colSignIn}</TableHead>
                    <TableHead>{A.colRole}</TableHead>
                    <TableHead>{A.colStatus}</TableHead>
                    <TableHead className="hidden lg:table-cell">{A.colJoined}</TableHead>
                    <TableHead className="hidden lg:table-cell">{A.colLastSeen}</TableHead>
                    <TableHead className="w-10"><span className="sr-only">{A.actions}</span></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading && rows.length === 0 ? (
                    <TableRow><TableCell colSpan={7} className="py-10 text-center"><Loader2 className="mx-auto size-5 animate-spin text-muted-foreground" /></TableCell></TableRow>
                  ) : rows.length === 0 ? (
                    <TableRow><TableCell colSpan={7} className="py-10 text-center text-muted-foreground">{A.none}</TableCell></TableRow>
                  ) : (
                    rows.map((u) => {
                      const self = u.uid === profile?.uid;
                      return (
                        <TableRow key={u.uid}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="size-8">
                                <AvatarImage src={u.photoURL ?? undefined} alt="" />
                                <AvatarFallback>{u.nickname.slice(0, 1).toUpperCase()}</AvatarFallback>
                              </Avatar>
                              <div className="min-w-0 max-w-[220px] lg:max-w-[280px]">
                                <div className="truncate font-medium">{u.displayName} {self && <span className="text-xs text-[#4cc3ff]">{A.you}</span>}
                            {u.authMissing && (
                              <Badge variant="outline" className="ms-1 border-amber-500/60 text-amber-500" title={ORPHAN.badgeTitle}>
                                {ORPHAN.badge}
                              </Badge>
                            )}</div>
                                <div className="truncate text-xs text-muted-foreground">@{u.nickname} · {u.email ?? "—"}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">{providerName(u.provider)}</TableCell>
                          <TableCell><Badge variant={u.role === "admin" ? "default" : "secondary"} >{roleName[u.role]}</Badge></TableCell>
                          <TableCell>
                            <Badge variant={u.status === "active" ? "outline" : "destructive"} >{statusName(u.status)}</Badge>
                          </TableCell>
                          <TableCell className="hidden lg:table-cell text-muted-foreground">{fmt(u.createdAt)}</TableCell>
                          <TableCell className="hidden lg:table-cell text-muted-foreground">{fmt(u.lastLoginAt)}</TableCell>
                          <TableCell>
                            {actions(u, self)}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
              <span>{fill(A.count, { n: total, page, pages })}</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled={offset === 0} onClick={() => setOffset(Math.max(0, offset - PAGE))}>
                  <ChevronLeft className="size-4 rtl:rotate-180" /> {A.prev}
                </Button>
                <Button variant="outline" size="sm" disabled={page >= pages} onClick={() => setOffset(offset + PAGE)}>
                  {A.next} <ChevronRight className="size-4 rtl:rotate-180" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <AlertDialog open={!!toDelete} onOpenChange={(o) => !o && setToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{fill(A.deleteTitle, { name: toDelete?.displayName ?? "" })}</AlertDialogTitle>
            <AlertDialogDescription>
              {A.deleteDesc}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t.account.cancel}</AlertDialogCancel>
            <AlertDialogAction onClick={remove}>{t.account.deleteForever}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
