import { db } from "./firebase";

export type Role = "reader" | "editor" | "admin";
export type UserStatus = "active" | "suspended";

export interface UserProfile {
  uid: string;
  email: string | null;
  emailLower: string | null;
  displayName: string;
  nickname: string;
  photoURL: string | null;
  provider: string;
  country: string | null;
  interests: string[];
  newsletter: boolean;
  role: Role;
  status: UserStatus;
  termsAcceptedAt: number;
  createdAt: number;
  updatedAt: number;
  lastLoginAt: number;
}

export interface ListQuery {
  q?: string;
  role?: Role;
  status?: UserStatus;
  limit: number;
  offset: number;
}

export interface UserStore {
  get(uid: string): Promise<UserProfile | null>;
  put(user: UserProfile): Promise<void>;
  patch(uid: string, patch: Partial<UserProfile>): Promise<UserProfile | null>;
  remove(uid: string): Promise<void>;
  list(q: ListQuery): Promise<{ users: UserProfile[]; total: number }>;
  all(): Promise<UserProfile[]>;
}

/** Most recent users scanned for search/stats. Fine for a magazine-sized audience. */
const SCAN_LIMIT = 2000;

function matches(u: UserProfile, q: ListQuery) {
  if (q.role && u.role !== q.role) return false;
  if (q.status && u.status !== q.status) return false;
  if (q.q) {
    const s = q.q.toLowerCase();
    const hay = `${u.emailLower ?? ""} ${u.displayName} ${u.nickname} ${u.uid}`.toLowerCase();
    if (!hay.includes(s)) return false;
  }
  return true;
}

class FirestoreStore implements UserStore {
  private col() {
    return db()!.collection("users");
  }
  async get(uid: string) {
    const snap = await this.col().doc(uid).get();
    return snap.exists ? (snap.data() as UserProfile) : null;
  }
  async put(user: UserProfile) {
    await this.col().doc(user.uid).set(user);
  }
  async patch(uid: string, patch: Partial<UserProfile>) {
    const ref = this.col().doc(uid);
    const snap = await ref.get();
    if (!snap.exists) return null;
    await ref.update(patch);
    return { ...(snap.data() as UserProfile), ...patch };
  }
  async remove(uid: string) {
    await this.col().doc(uid).delete();
  }
  async all() {
    const snap = await this.col().orderBy("createdAt", "desc").limit(SCAN_LIMIT).get();
    return snap.docs.map((d) => d.data() as UserProfile);
  }
  async list(q: ListQuery) {
    const rows = (await this.all()).filter((u) => matches(u, q));
    return { users: rows.slice(q.offset, q.offset + q.limit), total: rows.length };
  }
}

/** In-memory store for local development without Firebase credentials. */
class MemoryStore implements UserStore {
  private m = new Map<string, UserProfile>();
  async get(uid: string) {
    return this.m.get(uid) ?? null;
  }
  async put(user: UserProfile) {
    this.m.set(user.uid, user);
  }
  async patch(uid: string, patch: Partial<UserProfile>) {
    const u = this.m.get(uid);
    if (!u) return null;
    const next = { ...u, ...patch };
    this.m.set(uid, next);
    return next;
  }
  async remove(uid: string) {
    this.m.delete(uid);
  }
  async all() {
    return [...this.m.values()].sort((a, b) => b.createdAt - a.createdAt);
  }
  async list(q: ListQuery) {
    const rows = (await this.all()).filter((u) => matches(u, q));
    return { users: rows.slice(q.offset, q.offset + q.limit), total: rows.length };
  }
}

let store: UserStore | undefined;
export function users(): UserStore {
  if (!store) store = db() ? new FirestoreStore() : new MemoryStore();
  return store;
}
