import { Elysia, t, status } from "elysia";
import { adminEmails, authPlugin, isDevAuth, type AuthUser } from "./auth";
import { firebaseAdminReady, firebaseConfigured, firebaseProjectId, privilegedAuth } from "./firebase";
import { StorageUnavailable, users, type Role, type TestResult, type UserProfile, type UserStatus } from "./users";

export type { UserProfile, Role, UserStatus, TestResult, TestGrade, TestVerdict } from "./users";

const Interest = t.Union([
  t.Literal("ai"),
  t.Literal("ml"),
  t.Literal("startups"),
  t.Literal("gadgets"),
  t.Literal("dev"),
  t.Literal("security"),
  t.Literal("science"),
  t.Literal("policy"),
]);

const Profile = {
  nickname: t.String({ minLength: 2, maxLength: 32 }),
  displayName: t.String({ minLength: 1, maxLength: 80 }),
  country: t.Optional(t.Nullable(t.String({ maxLength: 56 }))),
  interests: t.Array(Interest, { maxItems: 8 }),
  newsletter: t.Boolean(),
};

const RoleT = t.Union([t.Literal("reader"), t.Literal("editor"), t.Literal("admin")]);
const StatusT = t.Union([t.Literal("active"), t.Literal("suspended")]);

/** ADMIN_EMAILS only counts for a verified email — otherwise anyone could sign up with that address. */
const isAdminEmail = (a: AuthUser) => a.emailVerified && !!a.email && adminEmails().includes(a.email.toLowerCase());

const isAdmin = async (a: AuthUser) => {
  if (isAdminEmail(a)) return true;
  return (await users().get(a.uid))?.role === "admin";
};

/** Seed role: emails listed in ADMIN_EMAILS become admin on registration. */
const initialRole = (a: AuthUser): Role => (isAdminEmail(a) ? "admin" : "reader");

async function syncAuthUser(uid: string, role: Role, statusV: UserStatus) {
  const auth = privilegedAuth();
  if (!auth) return;
  await auth.setCustomUserClaims(uid, { role });
  await auth.updateUser(uid, { disabled: statusV === "suspended" });
}

export const app = new Elysia({ prefix: "/api" })
  .onError("global", ({ error }) => {
    if (error instanceof StorageUnavailable)
      return status(503, { error: "storage_not_configured", detail: "Firestore needs FIREBASE_SERVICE_ACCOUNT on the server." });
  })
  .use(authPlugin)
  .get("/health", () => ({
    ok: true,
    service: "techzup-api",
    firebase: firebaseConfigured(),
    firestore: firebaseAdminReady(),
    projectId: firebaseProjectId(),
    devAuth: isDevAuth(),
    runtime: typeof Bun !== "undefined" ? `bun ${Bun.version}` : `node ${process.version}`,
  }))

  /* ---------------- current user ---------------- */
  .get("/users/me", async ({ auth }) => {
    if (!auth) return status(401, { error: "unauthorized" });
    const me = await users().get(auth.uid);
    if (!me) return status(404, { error: "not_registered", auth });
    if (me.status === "suspended") return status(403, { error: "suspended" });
    const touched = { ...me, lastLoginAt: Date.now() };
    await users().patch(auth.uid, { lastLoginAt: touched.lastLoginAt });
    return { user: touched, isAdmin: await isAdmin(auth) };
  })

  .post(
    "/users/register",
    { body: t.Object({ ...Profile, acceptTerms: t.Literal(true) }) },
    async ({ auth, body }) => {
      if (!auth) return status(401, { error: "unauthorized" });
      if (auth.provider === "password" && !auth.emailVerified) return status(403, { error: "email_not_verified" });
      const existing = await users().get(auth.uid);
      if (existing?.status === "suspended") return status(403, { error: "suspended" });
      const now = Date.now();
      const role = existing?.role ?? initialRole(auth);
      const user: UserProfile = {
        uid: auth.uid,
        email: auth.email,
        emailLower: auth.email?.toLowerCase() ?? null,
        photoURL: auth.picture,
        provider: auth.provider,
        displayName: body.displayName.trim(),
        nickname: body.nickname.trim(),
        country: body.country?.trim() || null,
        interests: body.interests,
        newsletter: body.newsletter,
        role,
        status: "active",
        termsAcceptedAt: existing?.termsAcceptedAt ?? now,
        createdAt: existing?.createdAt ?? now,
        updatedAt: now,
        lastLoginAt: now,
      };
      await users().put(user);
      if (!existing) await syncAuthUser(auth.uid, role, "active").catch(() => {});
      return { user };
    }
  )

  .patch("/users/me", { body: t.Partial(t.Object(Profile)) }, async ({ auth, body }) => {
    if (!auth) return status(401, { error: "unauthorized" });
    const patch: Partial<UserProfile> = { ...body, updatedAt: Date.now() };
    if (typeof body.nickname === "string") patch.nickname = body.nickname.trim();
    if (typeof body.displayName === "string") patch.displayName = body.displayName.trim();
    const user = await users().patch(auth.uid, patch);
    return user ? { user } : status(404, { error: "not_registered" });
  })

  .delete("/users/me", async ({ auth }) => {
    if (!auth) return status(401, { error: "unauthorized" });
    await users().remove(auth.uid);
    await privilegedAuth()?.deleteUser(auth.uid).catch(() => {});
    return { ok: true };
  })

  /* ---------------- AI-Psychosis Test results ---------------- */
  .get("/results", async ({ auth }) => {
    if (!auth) return status(401, { error: "unauthorized" });
    if (!(await users().get(auth.uid))) return status(404, { error: "not_registered" });
    return { results: await users().results(auth.uid, 20) };
  })
  .post(
    "/results",
    {
      body: t.Object({
        ai: t.Integer({ minimum: 0, maximum: 100 }),
        anti: t.Integer({ minimum: 0, maximum: 100 }),
        verdict: t.Union([t.Literal("balanced"), t.Literal("watch"), t.Literal("ai"), t.Literal("anti"), t.Literal("doomloop")]),
        grade: t.Union([t.Literal("SSS"), t.Literal("S"), t.Literal("A"), t.Literal("B"), t.Literal("C"), t.Literal("D")]),
        clarity: t.Integer({ minimum: 0, maximum: 100 }),
        timedOut: t.Boolean(),
        lang: t.String({ minLength: 2, maxLength: 5 }),
        finishedAt: t.Integer({ minimum: 1_600_000_000_000 }),
      }),
    },
    async ({ auth, body }) => {
      if (!auth) return status(401, { error: "unauthorized" });
      const me = await users().get(auth.uid);
      if (!me) return status(404, { error: "not_registered" });
      if (me.status === "suspended") return status(403, { error: "suspended" });
      if (body.finishedAt > Date.now() + 60_000) return status(400, { error: "bad_timestamp" });
      // Doc id = finishedAt, so re-sending the same result never duplicates it.
      const result: TestResult = { ...body, id: String(body.finishedAt), savedAt: Date.now() };
      await users().saveResult(auth.uid, result);
      return { result };
    }
  )

  /* ---------------- admin: user management ---------------- */
  .guard(
    {
      beforeHandle: async ({ auth }: { auth: AuthUser | null }) => {
        if (!auth) return status(401, { error: "unauthorized" });
        if (!(await isAdmin(auth))) return status(403, { error: "forbidden" });
      },
    },
    (admin) =>
      admin
        .get("/admin/stats", async () => {
          const all = await users().all();
          const count = <K extends keyof UserProfile>(k: K) =>
            all.reduce<Record<string, number>>((m, u) => ((m[String(u[k])] = (m[String(u[k])] ?? 0) + 1), m), {});
          const weekAgo = Date.now() - 7 * 864e5;
          return {
            total: all.length,
            newThisWeek: all.filter((u) => u.createdAt >= weekAgo).length,
            newsletter: all.filter((u) => u.newsletter).length,
            byRole: count("role"),
            byStatus: count("status"),
            byProvider: count("provider"),
          };
        })
        .get(
          "/admin/users",
          {
            query: t.Object({
              q: t.Optional(t.String({ maxLength: 120 })),
              role: t.Optional(RoleT),
              status: t.Optional(StatusT),
              limit: t.Optional(t.Numeric({ minimum: 1, maximum: 100 })),
              offset: t.Optional(t.Numeric({ minimum: 0 })),
            }),
          },
          async ({ query }) =>
            users().list({
              q: query.q,
              role: query.role,
              status: query.status,
              limit: query.limit ?? 20,
              offset: query.offset ?? 0,
            })
        )
        .patch(
          "/admin/users/:uid",
          { body: t.Object({ role: t.Optional(RoleT), status: t.Optional(StatusT) }) },
          async ({ params, body, auth }) => {
            if (params.uid === auth!.uid && (body.role && body.role !== "admin" || body.status === "suspended"))
              return status(400, { error: "cannot_demote_self" });
            const user = await users().patch(params.uid, { ...body, updatedAt: Date.now() });
            if (!user) return status(404, { error: "not_found" });
            await syncAuthUser(user.uid, user.role, user.status).catch(() => {});
            return { user };
          }
        )
        .delete("/admin/users/:uid", async ({ params, auth }) => {
          if (params.uid === auth!.uid) return status(400, { error: "cannot_delete_self" });
          await users().remove(params.uid);
          await privilegedAuth()?.deleteUser(params.uid).catch(() => {});
          return { ok: true };
        })
  );

export type App = typeof app;
