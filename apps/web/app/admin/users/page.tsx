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
import type { Role, UserProfile, UserStatus } from "@techzup/api";

interface Stats {
  total: number;
  newThisWeek: number;
  newsletter: number;
  byRole: Record<string, number>;
  byStatus: Record<string, number>;
  byProvider: Record<string, number>;
}

const PAGE = 20;
const fmt = (ms: number) => new Date(ms).toLocaleDateString(undefined, { year: "2-digit", month: "short", day: "numeric" });
const providerName = (p: string) => ({ "google.com": "Google", "facebook.com": "Facebook", "twitter.com": "X" })[p] ?? p;

export default function AdminUsersPage() {
  const { status, isAdmin, profile, api } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [rows, setRows] = useState<UserProfile[]>([]);
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
    const t = setTimeout(() => {
      setQuery(q.trim());
      setOffset(0);
    }, 300);
    return () => clearTimeout(t);
  }, [q]);

  const load = useCallback(async () => {
    setLoading(true);
    const p = new URLSearchParams({ limit: String(PAGE), offset: String(offset) });
    if (query) p.set("q", query);
    if (role !== "all") p.set("role", role);
    if (state !== "all") p.set("status", state);
    const [list, st] = await Promise.all([
      api<{ users: UserProfile[]; total: number }>(`/admin/users?${p}`),
      api<Stats>("/admin/stats"),
    ]);
    if (list.ok) {
      setRows(list.data.users);
      setTotal(list.data.total);
    } else toast.error("Couldn't load users.");
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
    if (!r.ok) return toast.error(r.data?.error === "cannot_demote_self" ? "You can't demote or suspend yourself." : "Update failed.");
    toast.success(`${u.nickname} updated`);
    void load();
  };

  const remove = async () => {
    if (!toDelete) return;
    const r = await api(`/admin/users/${encodeURIComponent(toDelete.uid)}`, { method: "DELETE" });
    setToDelete(null);
    if (!r.ok) return toast.error("Delete failed.");
    toast.success("User deleted");
    void load();
  };

  if (status !== "ready" || !isAdmin)
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex flex-1 items-center justify-center"><Loader2 className="size-6 animate-spin text-muted-foreground" /></div>
      </div>
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
              <ShieldCheck className="size-3.5" /> Admin
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold">User management</h1>
          </div>
          <Button variant="outline" onClick={() => void load()} disabled={loading}>
            <RefreshCw className={loading ? "size-4 animate-spin" : "size-4"} /> Refresh
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            ["Members", stats?.total],
            ["New this week", stats?.newThisWeek],
            ["Digest subscribers", stats?.newsletter],
            ["Suspended", stats?.byStatus?.suspended ?? 0],
          ].map(([label, v]) => (
            <Card key={label as string} className="tz-panel">
              <CardHeader className="pb-2">
                <CardDescription>{label}</CardDescription>
                <CardTitle className="font-[family-name:var(--font-display)] text-3xl">{v ?? "—"}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        {stats && (
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {Object.entries(stats.byProvider).map(([p, n]) => (
              <Badge key={p} variant="outline">{providerName(p)}: {n}</Badge>
            ))}
            {Object.entries(stats.byRole).map(([r, n]) => (
              <Badge key={r} variant="secondary" className="capitalize">{r}: {n}</Badge>
            ))}
          </div>
        )}

        {/* Filters + table */}
        <Card className="tz-panel">
          <CardContent className="grid gap-4 pt-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="pl-9" placeholder="Search name, nickname, email or UID" value={q} onChange={(e) => setQ(e.target.value)} />
              </div>
              <Select value={role} onValueChange={(v) => { setRole(v as Role | "all"); setOffset(0); }}>
                <SelectTrigger className="sm:w-40" aria-label="Filter by role"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All roles</SelectItem>
                  <SelectItem value="reader">Reader</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
              <Select value={state} onValueChange={(v) => { setState(v as UserStatus | "all"); setOffset(0); }}>
                <SelectTrigger className="sm:w-40" aria-label="Filter by status"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="overflow-x-auto rounded-lg border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Member</TableHead>
                    <TableHead className="hidden md:table-cell">Sign-in</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden lg:table-cell">Joined</TableHead>
                    <TableHead className="hidden lg:table-cell">Last seen</TableHead>
                    <TableHead className="w-10"><span className="sr-only">Actions</span></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading && rows.length === 0 ? (
                    <TableRow><TableCell colSpan={7} className="py-10 text-center"><Loader2 className="mx-auto size-5 animate-spin text-muted-foreground" /></TableCell></TableRow>
                  ) : rows.length === 0 ? (
                    <TableRow><TableCell colSpan={7} className="py-10 text-center text-muted-foreground">No members match these filters.</TableCell></TableRow>
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
                              <div className="min-w-0">
                                <div className="truncate font-medium">{u.displayName} {self && <span className="text-xs text-[#4cc3ff]">(you)</span>}</div>
                                <div className="truncate text-xs text-muted-foreground">@{u.nickname} · {u.email ?? "—"}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">{providerName(u.provider)}</TableCell>
                          <TableCell><Badge variant={u.role === "admin" ? "default" : "secondary"} className="capitalize">{u.role}</Badge></TableCell>
                          <TableCell>
                            <Badge variant={u.status === "active" ? "outline" : "destructive"} className="capitalize">{u.status}</Badge>
                          </TableCell>
                          <TableCell className="hidden lg:table-cell text-muted-foreground">{fmt(u.createdAt)}</TableCell>
                          <TableCell className="hidden lg:table-cell text-muted-foreground">{fmt(u.lastLoginAt)}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" aria-label={`Actions for ${u.nickname}`}><MoreHorizontal className="size-4" /></Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-52">
                                <DropdownMenuLabel>Role</DropdownMenuLabel>
                                <DropdownMenuRadioGroup value={u.role} onValueChange={(v) => v !== u.role && update(u, { role: v as Role })}>
                                  <DropdownMenuRadioItem value="reader" disabled={self}>Reader</DropdownMenuRadioItem>
                                  <DropdownMenuRadioItem value="editor" disabled={self}>Editor</DropdownMenuRadioItem>
                                  <DropdownMenuRadioItem value="admin">Admin</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                                <DropdownMenuSeparator />
                                {u.status === "active" ? (
                                  <DropdownMenuItem disabled={self} onSelect={() => update(u, { status: "suspended" })}>
                                    <UserX /> Suspend
                                  </DropdownMenuItem>
                                ) : (
                                  <DropdownMenuItem onSelect={() => update(u, { status: "active" })}>
                                    <UserCheck /> Reactivate
                                  </DropdownMenuItem>
                                )}
                                <DropdownMenuItem variant="destructive" disabled={self} onSelect={() => setToDelete(u)}>
                                  <Trash2 /> Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{total} member{total === 1 ? "" : "s"} · page {page} of {pages}</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled={offset === 0} onClick={() => setOffset(Math.max(0, offset - PAGE))}>
                  <ChevronLeft className="size-4" /> Prev
                </Button>
                <Button variant="outline" size="sm" disabled={page >= pages} onClick={() => setOffset(offset + PAGE)}>
                  Next <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <AlertDialog open={!!toDelete} onOpenChange={(o) => !o && setToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {toDelete?.displayName}?</AlertDialogTitle>
            <AlertDialogDescription>
              Removes their profile and Firebase sign-in permanently. This can&apos;t be undone — suspend instead if you may want to restore them.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={remove}>Delete permanently</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
