/**
 * Real end-to-end test: Firebase Authentication + Cloud Firestore (incl. live listeners)
 * against the production Firebase project, through the TechZup Elysia API.
 *
 * Run with `bun run test:e2e` (see test/run-e2e.ts). Test users are created with the Admin SDK and
 * signed in through Google's real Identity Toolkit API (custom-token sign-in, the same ID tokens
 * the browser gets after Google / Facebook / X sign-in). Everything is prefixed "e2e-<run>" and
 * removed in afterAll.
 */
import { afterAll, beforeAll, describe, expect, test } from "bun:test";

const RUN = `e2e-${Date.now().toString(36)}`;
const WEB_API_KEY = process.env.E2E_WEB_API_KEY!;
const LIVE_URL = process.env.E2E_LIVE_URL ?? "https://techzup.space";
const ADMIN_EMAIL = `admin.${RUN}@e2e.techzup.test`;
const SPOOF_ADMIN_EMAIL = `owner.${RUN}@e2e.techzup.test`;
process.env.ADMIN_EMAILS = `${ADMIN_EMAIL},${SPOOF_ADMIN_EMAIL}`;

if (!process.env.FIREBASE_SERVICE_ACCOUNT || !WEB_API_KEY) throw new Error("Run via `bun run test:e2e`");

const { app } = await import("../src/index");
const { adminAuth, db, firebaseProjectId } = await import("../src/firebase");
const PROJECT = firebaseProjectId()!;

interface Session {
  uid: string;
  email: string;
  idToken: string;
}
const created = new Set<string>();

/** Create (or reuse) a Firebase user and sign in for a real ID token via Identity Toolkit. */
async function signIn(name: string, email = `${name}.${RUN}@e2e.techzup.test`): Promise<Session> {
  const uid = `${RUN}-${name}`;
  const auth = adminAuth()!;
  try {
    await auth.getUser(uid);
  } catch {
    await auth.createUser({ uid, email, emailVerified: true, displayName: name });
  }
  created.add(uid);
  return { uid, email, idToken: await tokenFor(uid) };
}

async function tokenFor(uid: string): Promise<string> {
  const custom = await adminAuth()!.createCustomToken(uid);
  const r = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${WEB_API_KEY}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ token: custom, returnSecureToken: true }),
  });
  const j = (await r.json()) as { idToken?: string; error?: { message: string } };
  if (!r.ok || !j.idToken) throw new Error(`signInWithCustomToken: ${j.error?.message ?? r.status}`);
  return j.idToken;
}

/** Random throwaway password (never logged). */
const randomPassword = () => `Tz!${crypto.randomUUID()}`;

async function identity(path: string, body: Record<string, unknown>) {
  const r = await fetch(`https://identitytoolkit.googleapis.com/v1/${path}?key=${WEB_API_KEY}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const j = (await r.json()) as { localId?: string; idToken?: string; email?: string; error?: { message: string } };
  return { ok: r.ok, ...j };
}

async function call<T = Record<string, unknown>>(method: string, path: string, token?: string, body?: unknown) {
  const res = await app.handle(
    new Request(`http://local/api${path}`, {
      method,
      headers: {
        ...(token ? { authorization: `Bearer ${token}` } : {}),
        ...(body ? { "content-type": "application/json" } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    })
  );
  const text = await res.text();
  let data: T;
  try {
    data = JSON.parse(text) as T;
  } catch {
    data = text as unknown as T;
  }
  return { status: res.status, data };
}

const users = () => db()!.collection("users");
const profile = (nickname: string, displayName: string) => ({
  nickname,
  displayName,
  country: "Thailand",
  interests: ["ai", "ml"],
  newsletter: true,
  acceptTerms: true,
});
const result = (finishedAt: number, over: Record<string, unknown> = {}) => ({
  ai: 72, anti: 65, verdict: "doomloop", grade: "SSS", clarity: 29, timedOut: false, lang: "th", finishedAt, ...over,
});

let reader: Session;
let second: Session;
let third: Session;
let admin: Session;

beforeAll(async () => {
  reader = await signIn("reader");
  second = await signIn("second");
  third = await signIn("third");
  admin = await signIn("admin", ADMIN_EMAIL);
});

afterAll(async () => {
  for (const uid of created) {
    await db()!.recursiveDelete(users().doc(uid)).catch(() => {});
    await adminAuth()!.deleteUser(uid).catch(() => {});
  }
});

describe("setup", () => {
  test("API sees real Firebase Auth + Firestore for this project", async () => {
    const r = await call<{ firebase: boolean; firestore: boolean; projectId: string }>("GET", "/health");
    expect(r.data.firebase).toBe(true);
    expect(r.data.firestore).toBe(true);
    expect(r.data.projectId).toBe(PROJECT);
  });

  test("techzup.space is in Firebase Auth authorized domains (needed for Google/Facebook/X popups)", () => {
    const domains = (process.env.E2E_AUTHORIZED_DOMAINS ?? "").split(",");
    expect(domains).toContain("techzup.space");
  });
});

describe("Firebase Authentication", () => {
  test("missing or forged tokens → 401", async () => {
    expect((await call("GET", "/users/me")).status).toBe(401);
    expect((await call("GET", "/users/me", "forged.token.value")).status).toBe(401);
    const tampered = reader.idToken.slice(0, -6) + "AAAAAA";
    expect((await call("GET", "/users/me", tampered)).status).toBe(401);
  });

  test("a real ID token is verified; unregistered user → 404 not_registered", async () => {
    const r = await call<{ error: string; auth: { uid: string; email: string } }>("GET", "/users/me", reader.idToken);
    expect(r.status).toBe(404);
    expect(r.data.error).toBe("not_registered");
    expect(r.data.auth.uid).toBe(reader.uid);
    expect(r.data.auth.email).toBe(reader.email);
  });

  test("revoked sessions are rejected", async () => {
    const t = await tokenFor(third.uid);
    await adminAuth()!.revokeRefreshTokens(third.uid);
    await Bun.sleep(1500); // revocation time has 1-second resolution
    expect((await call("GET", "/users/me", t)).status).toBe(401);
    third.idToken = await tokenFor(third.uid);
    expect((await call("GET", "/users/me", third.idToken)).status).toBe(404);
  });
});

describe("registration → Firestore", () => {
  test("validation: terms required, nickname length, known topics", async () => {
    expect((await call("POST", "/users/register", reader.idToken, { ...profile("reader", "R"), acceptTerms: false })).status).toBe(422);
    expect((await call("POST", "/users/register", reader.idToken, profile("r", "R"))).status).toBe(422);
    expect((await call("POST", "/users/register", reader.idToken, { ...profile("reader", "R"), interests: ["nope"] })).status).toBe(422);
    expect((await users().doc(reader.uid).get()).exists).toBe(false);
  });

  test("register writes the profile document and sets the role claim", async () => {
    const r = await call<{ user: { role: string } }>("POST", "/users/register", reader.idToken, profile(`${RUN}-rd`, "Reader E2E"));
    expect(r.status).toBe(200);
    expect(r.data.user.role).toBe("reader");
    const d = (await users().doc(reader.uid).get()).data()!;
    expect(d.email).toBe(reader.email);
    expect(d.nickname).toBe(`${RUN}-rd`);
    expect(d.interests).toEqual(["ai", "ml"]);
    expect(d.status).toBe("active");
    expect(typeof d.termsAcceptedAt).toBe("number");
    expect((await adminAuth()!.getUser(reader.uid)).customClaims?.role).toBe("reader");
  });

  test("/users/me reads it back and bumps lastLoginAt", async () => {
    const before = (await users().doc(reader.uid).get()).data()!.lastLoginAt as number;
    await Bun.sleep(10);
    const r = await call<{ user: { nickname: string }; isAdmin: boolean }>("GET", "/users/me", reader.idToken);
    expect(r.status).toBe(200);
    expect(r.data.user.nickname).toBe(`${RUN}-rd`);
    expect(r.data.isAdmin).toBe(false);
    expect((await users().doc(reader.uid).get()).data()!.lastLoginAt).toBeGreaterThan(before);
  });

  test("PATCH /users/me persists; createdAt unchanged", async () => {
    const created0 = (await users().doc(reader.uid).get()).data()!.createdAt;
    expect((await call("PATCH", "/users/me", reader.idToken, { country: "Japan", newsletter: false, interests: ["security"] })).status).toBe(200);
    const d = (await users().doc(reader.uid).get()).data()!;
    expect([d.country, d.newsletter, d.interests, d.createdAt]).toEqual(["Japan", false, ["security"], created0]);
  });

  test("other members register too", async () => {
    expect((await call("POST", "/users/register", second.idToken, profile(`${RUN}-sc`, "Second E2E"))).status).toBe(200);
    expect((await call("POST", "/users/register", third.idToken, profile(`${RUN}-th`, "Third E2E"))).status).toBe(200);
  });
});

describe("AI-Psychosis results + Firestore live updates", () => {
  test("results need a registered account", async () => {
    const stranger = await signIn("stranger");
    expect((await call("POST", "/results", stranger.idToken, result(Date.now()))).status).toBe(404);
  });

  test("a saved result reaches a live onSnapshot listener; re-sends don't duplicate", async () => {
    const col = users().doc(reader.uid).collection("testResults");
    const at = Date.now() - 60_000;
    const live = new Promise<{ id: string; grade: string; ms: number }>((resolve, reject) => {
      const started = Date.now();
      const timer = setTimeout(() => reject(new Error("no live update within 15s")), 15_000);
      const unsub = col.onSnapshot(
        (snap) => {
          const ch = snap.docChanges().find((c) => c.type === "added" && c.doc.id === String(at));
          if (ch) {
            clearTimeout(timer);
            unsub();
            resolve({ id: ch.doc.id, grade: ch.doc.data().grade, ms: Date.now() - started });
          }
        },
        (err) => reject(err)
      );
    });
    await Bun.sleep(300); // let the listener attach
    expect((await call("POST", "/results", reader.idToken, result(at))).status).toBe(200);
    const got = await live;
    expect(got.grade).toBe("SSS");
    console.log(`   live update arrived in ${got.ms} ms`);

    expect((await call("POST", "/results", reader.idToken, result(at))).status).toBe(200);
    expect((await col.get()).size).toBe(1);
  });

  test("result validation", async () => {
    expect((await call("POST", "/results", reader.idToken, result(Date.now(), { ai: 101 }))).status).toBe(422);
    expect((await call("POST", "/results", reader.idToken, result(Date.now(), { grade: "Z" }))).status).toBe(422);
    expect((await call("POST", "/results", reader.idToken, result(Date.now() + 600_000))).status).toBe(400);
  });

  test("GET /results lists newest first", async () => {
    await call("POST", "/results", reader.idToken, result(Date.now() - 1000, { grade: "B", verdict: "balanced", ai: 20, anti: 25, clarity: 63 }));
    const r = await call<{ results: { grade: string; finishedAt: number }[] }>("GET", "/results", reader.idToken);
    expect(r.data.results.map((x) => x.grade)).toEqual(["B", "SSS"]);
  });

  test("live listener on the profile sees admin changes in real time", async () => {
    const ref = users().doc(second.uid);
    const live = new Promise<string>((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("no live update")), 15_000);
      const unsub = ref.onSnapshot((s) => {
        const role = s.data()?.role;
        if (role === "editor") {
          clearTimeout(timer);
          unsub();
          resolve(role);
        }
      }, reject);
    });
    await Bun.sleep(300);
    expect((await call("POST", "/users/register", admin.idToken, profile(`${RUN}-ad`, "Admin E2E"))).status).toBe(200);
    expect((await call("PATCH", `/admin/users/${second.uid}`, admin.idToken, { role: "editor" })).status).toBe(200);
    expect(await live).toBe("editor");
  });
});

describe("Firestore security rules (browser access)", () => {
  test("signed-in browsers can't read or write Firestore directly", async () => {
    const base = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;
    const read = await fetch(`${base}/users/${reader.uid}`, { headers: { authorization: `Bearer ${reader.idToken}` } });
    expect(read.status).toBe(403);
    const write = await fetch(`${base}/users/${reader.uid}?updateMask.fieldPaths=role`, {
      method: "PATCH",
      headers: { authorization: `Bearer ${reader.idToken}`, "content-type": "application/json" },
      body: JSON.stringify({ fields: { role: { stringValue: "admin" } } }),
    });
    expect(write.status).toBe(403);
    expect((await users().doc(reader.uid).get()).data()!.role).toBe("reader");
  });
});

describe("admin user management", () => {
  test("non-admins get 403", async () => {
    expect((await call("GET", "/admin/users", reader.idToken)).status).toBe(403);
    expect((await call("GET", "/admin/stats", third.idToken)).status).toBe(403);
  });

  test("ADMIN_EMAILS member is admin, with admin claim", async () => {
    expect((await adminAuth()!.getUser(admin.uid)).customClaims?.role).toBe("admin");
    expect((await call<{ isAdmin: boolean }>("GET", "/users/me", admin.idToken)).data.isAdmin).toBe(true);
  });

  test("search, filters, paging and stats", async () => {
    const all = await call<{ users: { uid: string }[]; total: number }>("GET", `/admin/users?q=${RUN}&limit=100`, admin.idToken);
    expect(all.status).toBe(200);
    expect(all.data.total).toBe(4);
    const one = await call<{ users: { uid: string }[]; total: number }>("GET", `/admin/users?q=${RUN}-th`, admin.idToken);
    expect(one.data.users.map((u) => u.uid)).toEqual([third.uid]);
    const editors = await call<{ users: { uid: string }[] }>("GET", `/admin/users?q=${RUN}&role=editor`, admin.idToken);
    expect(editors.data.users.map((u) => u.uid)).toEqual([second.uid]);
    const paged = await call<{ users: unknown[]; total: number }>("GET", `/admin/users?q=${RUN}&limit=2&offset=2`, admin.idToken);
    expect(paged.data.users.length).toBe(2);
    const st = await call<{ total: number; byRole: Record<string, number> }>("GET", "/admin/stats", admin.idToken);
    expect(st.data.total).toBeGreaterThanOrEqual(4);
    expect(st.data.byRole.admin).toBeGreaterThanOrEqual(1);
  });

  test("role change updates Firestore and the custom claim", async () => {
    expect((await adminAuth()!.getUser(second.uid)).customClaims?.role).toBe("editor");
  });

  test("suspend disables Firebase sign-in and blocks the API; reactivate restores", async () => {
    expect((await call("PATCH", `/admin/users/${third.uid}`, admin.idToken, { status: "suspended" })).status).toBe(200);
    expect((await adminAuth()!.getUser(third.uid)).disabled).toBe(true);
    expect([401, 403]).toContain((await call("GET", "/users/me", third.idToken)).status);
    await expect(tokenFor(third.uid)).rejects.toThrow(/USER_DISABLED/);

    expect((await call("PATCH", `/admin/users/${third.uid}`, admin.idToken, { status: "active" })).status).toBe(200);
    expect((await adminAuth()!.getUser(third.uid)).disabled).toBe(false);
    third.idToken = await tokenFor(third.uid);
    expect((await call("GET", "/users/me", third.idToken)).status).toBe(200);
  });

  test("admins can't demote, suspend or delete themselves", async () => {
    expect((await call("PATCH", `/admin/users/${admin.uid}`, admin.idToken, { role: "reader" })).status).toBe(400);
    expect((await call("PATCH", `/admin/users/${admin.uid}`, admin.idToken, { status: "suspended" })).status).toBe(400);
    expect((await call("DELETE", `/admin/users/${admin.uid}`, admin.idToken)).status).toBe(400);
  });

  test("admin delete removes profile, results and the Firebase user", async () => {
    expect((await call("POST", "/results", second.idToken, result(Date.now() - 5000))).status).toBe(200);
    expect((await call("DELETE", `/admin/users/${second.uid}`, admin.idToken)).status).toBe(200);
    expect((await users().doc(second.uid).get()).exists).toBe(false);
    expect((await users().doc(second.uid).collection("testResults").get()).size).toBe(0);
    await expect(adminAuth()!.getUser(second.uid)).rejects.toThrow();
  });
});

describe("member self-delete", () => {
  test("DELETE /users/me removes everything for that member", async () => {
    expect((await call("DELETE", "/users/me", reader.idToken)).status).toBe(200);
    expect((await users().doc(reader.uid).get()).exists).toBe(false);
    expect((await users().doc(reader.uid).collection("testResults").get()).size).toBe(0);
    await expect(adminAuth()!.getUser(reader.uid)).rejects.toThrow();
  });
});

describe("live deployment", () => {
  test(`${LIVE_URL} verifies the same real Firebase ID tokens`, async () => {
    const health = (await fetch(`${LIVE_URL}/api/health`).then((r) => r.json())) as { projectId: string; firestore: boolean };
    expect(health.projectId).toBe(PROJECT);
    const r = await fetch(`${LIVE_URL}/api/users/me`, { headers: { authorization: `Bearer ${admin.idToken}` } });
    // 200 when the deployment has the service account (Firestore on), 503 when it doesn't yet.
    expect(r.status).not.toBe(401);
    expect(health.firestore ? 200 : 503).toBe(r.status);
    if (!health.firestore) console.log("   note: live site has no FIREBASE_SERVICE_ACCOUNT yet (Firestore off on Vercel)");
  });
});

describe("orphaned profiles (login deleted outside the app)", () => {
  test("a profile whose Firebase user was deleted is flagged, counted and removed by cleanup", async () => {
    const ghost = await signIn("ghost");
    expect((await call("POST", "/users/register", ghost.idToken, profile(`${RUN}-gh`, "Ghost"))).status).toBe(200);
    await call("POST", "/results", ghost.idToken, result(Date.now() - 2000));
    // what deleting the user in the Firebase console does: Auth gone, Firestore untouched
    await adminAuth()!.deleteUser(ghost.uid);

    const list = await call<{ users: { uid: string; authMissing: boolean }[] }>("GET", `/admin/users?q=${RUN}-gh`, admin.idToken);
    expect(list.data.users).toEqual([expect.objectContaining({ uid: ghost.uid, authMissing: true })]);
    const st = await call<{ orphans: number }>("GET", "/admin/stats", admin.idToken);
    expect(st.data.orphans).toBeGreaterThanOrEqual(1);

    // Scoped to this test's own profile: real orphans in the project are never touched by tests.
    const scope = { uids: [ghost.uid, admin.uid] };
    expect((await call("POST", "/admin/cleanup-orphans", third.idToken, scope)).status).toBe(403);
    const clean = await call<{ removed: number }>("POST", "/admin/cleanup-orphans", admin.idToken, scope);
    expect(clean.status).toBe(200);
    expect(clean.data.removed).toBe(1);
    expect((await users().doc(ghost.uid).get()).exists).toBe(false);
    expect((await users().doc(ghost.uid).collection("testResults").get()).size).toBe(0);
    // live members are untouched
    expect((await users().doc(admin.uid).get()).exists).toBe(true);
  });
});

describe("email / password accounts (Firebase Auth password provider)", () => {
  const pwEmail = `pw.${RUN}@e2e.techzup.test`;
  const pwPassword = randomPassword();
  let pw: Session;

  test("sign-up creates a real password account; token has provider=password, unverified", async () => {
    const r = await identity("accounts:signUp", { email: pwEmail, password: pwPassword, returnSecureToken: true });
    expect(r.ok).toBe(true);
    created.add(r.localId!);
    pw = { uid: r.localId!, email: pwEmail, idToken: r.idToken! };
    const me = await call<{ error: string; auth: { provider: string; emailVerified: boolean } }>("GET", "/users/me", pw.idToken);
    expect(me.status).toBe(404);
    expect(me.data.auth.provider).toBe("password");
    expect(me.data.auth.emailVerified).toBe(false);
  });

  test("duplicate sign-up and weak passwords are refused by Firebase", async () => {
    expect((await identity("accounts:signUp", { email: pwEmail, password: randomPassword() })).error?.message).toBe("EMAIL_EXISTS");
    expect((await identity("accounts:signUp", { email: `weak.${RUN}@e2e.techzup.test`, password: "123" })).error?.message).toMatch(/WEAK_PASSWORD/);
  });

  test("wrong password is refused; right password signs in", async () => {
    expect((await identity("accounts:signInWithPassword", { email: pwEmail, password: "wrong-" + randomPassword() })).ok).toBe(false);
    const ok = await identity("accounts:signInWithPassword", { email: pwEmail, password: pwPassword, returnSecureToken: true });
    expect(ok.ok).toBe(true);
    expect(ok.localId).toBe(pw.uid);
  });

  test("verification and password-reset emails can be requested", async () => {
    expect((await identity("accounts:sendOobCode", { requestType: "VERIFY_EMAIL", idToken: pw.idToken })).ok).toBe(true);
    expect((await identity("accounts:sendOobCode", { requestType: "PASSWORD_RESET", email: pwEmail })).ok).toBe(true);
  });

  test("an unverified email can't register", async () => {
    const r = await call<{ error: string }>("POST", "/users/register", pw.idToken, profile(`${RUN}-pw`, "Password User"));
    expect(r.status).toBe(403);
    expect(r.data.error).toBe("email_not_verified");
    expect((await users().doc(pw.uid).get()).exists).toBe(false);
  });

  test("after verification the account registers and is saved to Firestore", async () => {
    await adminAuth()!.updateUser(pw.uid, { emailVerified: true }); // what clicking the email link does
    const fresh = await identity("accounts:signInWithPassword", { email: pwEmail, password: pwPassword, returnSecureToken: true });
    pw.idToken = fresh.idToken!;
    const r = await call<{ user: { provider: string; role: string } }>("POST", "/users/register", pw.idToken, profile(`${RUN}-pw`, "Password User"));
    expect(r.status).toBe(200);
    expect(r.data.user.provider).toBe("password");
    expect(r.data.user.role).toBe("reader");
    expect((await users().doc(pw.uid).get()).data()!.provider).toBe("password");
  });

  test("an unverified sign-up using an ADMIN_EMAILS address does NOT get admin", async () => {
    const pass = randomPassword();
    const r = await identity("accounts:signUp", { email: SPOOF_ADMIN_EMAIL, password: pass, returnSecureToken: true });
    created.add(r.localId!);
    expect((await call("GET", "/users/me", r.idToken)).status).toBe(404);
    expect((await call("GET", "/admin/users", r.idToken)).status).toBe(403);
    expect((await call("POST", "/users/register", r.idToken, profile(`${RUN}-sp`, "Spoof"))).status).toBe(403);

    // once the inbox owner verifies, the same address does become admin
    await adminAuth()!.updateUser(r.localId!, { emailVerified: true });
    const fresh = await identity("accounts:signInWithPassword", { email: SPOOF_ADMIN_EMAIL, password: pass, returnSecureToken: true });
    const reg = await call<{ user: { role: string } }>("POST", "/users/register", fresh.idToken, profile(`${RUN}-ow`, "Owner"));
    expect(reg.data.user.role).toBe("admin");
  });

  test("a suspended password account can't sign in", async () => {
    await adminAuth()!.updateUser(pw.uid, { disabled: true });
    expect((await identity("accounts:signInWithPassword", { email: pwEmail, password: pwPassword })).error?.message).toBe("USER_DISABLED");
    await adminAuth()!.updateUser(pw.uid, { disabled: false });
  });
});
