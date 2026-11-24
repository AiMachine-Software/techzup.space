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

export type TestGrade = "SSS" | "S" | "A" | "B" | "C" | "D";
export type TestVerdict = "balanced" | "watch" | "ai" | "anti" | "doomloop";

/** One AI-Psychosis Test result, stored at users/{uid}/testResults/{finishedAt}. */
export interface TestResult {
  id: string;
  ai: number;
  anti: number;
  verdict: TestVerdict;
  grade: TestGrade;
  clarity: number;
  timedOut: boolean;
  lang: string;
  finishedAt: number;
  savedAt: number;
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
  saveResult(uid: string, r: TestResult): Promise<void>;
  results(uid: string, limit: number): Promise<TestResult[]>;
}

/** Thrown when production has no Firestore credentials; mapped to HTTP 503. */
export class StorageUnavailable extends Error {
  constructor() {
    super("storage_not_configured");
  }
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
    // Delete the profile and its test results.
    await db()!.recursiveDelete(this.col().doc(uid));
  }
  async all() {
    const snap = await this.col().orderBy("createdAt", "desc").limit(SCAN_LIMIT).get();
    return snap.docs.map((d) => d.data() as UserProfile);
  }
  async list(q: ListQuery) {
    const rows = (await this.all()).filter((u) => matches(u, q));
    return { users: rows.slice(q.offset, q.offset + q.limit), total: rows.length };
  }
  async saveResult(uid: string, r: TestResult) {
    await this.col().doc(uid).collection("testResults").doc(r.id).set(r);
  }
  async results(uid: string, limit: number) {
    const snap = await this.col().doc(uid).collection("testResults").orderBy("finishedAt", "desc").limit(limit).get();
    return snap.docs.map((d) => d.data() as TestResult);
  }
}

/** In-memory store for local development without Firebase credentials. */
class MemoryStore implements UserStore {
  private m = new Map<string, UserProfile>();
  private r = new Map<string, Map<string, TestResult>>();
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
    this.r.delete(uid);
  }
  async all() {
    return [...this.m.values()].sort((a, b) => b.createdAt - a.createdAt);
  }
  async list(q: ListQuery) {
    const rows = (await this.all()).filter((u) => matches(u, q));
    return { users: rows.slice(q.offset, q.offset + q.limit), total: rows.length };
  }
  async saveResult(uid: string, r: TestResult) {
    if (!this.r.has(uid)) this.r.set(uid, new Map());
    this.r.get(uid)!.set(r.id, r);
  }
  async results(uid: string, limit: number) {
    return [...(this.r.get(uid)?.values() ?? [])].sort((a, b) => b.finishedAt - a.finishedAt).slice(0, limit);
  }
}

let store: UserStore | undefined;
export function users(): UserStore {
  if (store) return store;
  if (db()) return (store = new FirestoreStore());
  // Memory store only outside production — a serverless deploy would silently lose data.
  if (process.env.NODE_ENV !== "production") return (store = new MemoryStore());
  throw new StorageUnavailable();
}
