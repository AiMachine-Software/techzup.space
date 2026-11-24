import { Elysia } from "elysia";
import { adminAuth, firebaseAdminReady, firebaseConfigured } from "./firebase";

export interface AuthUser {
  uid: string;
  email: string | null;
  name: string | null;
  picture: string | null;
  provider: string;
}

/**
 * Local development only: with no Firebase credentials and AUTH_DEV_MODE=1,
 * a bearer token of "dev:<email>" signs in as that email. Never active in production.
 */
const devMode = () =>
  !firebaseConfigured() && process.env.AUTH_DEV_MODE === "1" && process.env.NODE_ENV !== "production";

export const isDevAuth = devMode;

async function verify(token: string): Promise<AuthUser | null> {
  if (devMode() && token.startsWith("dev:")) {
    const email = token.slice(4).trim().toLowerCase();
    if (!email) return null;
    return {
      uid: "dev-" + Buffer.from(email).toString("hex").slice(0, 24),
      email,
      name: email.split("@")[0],
      picture: null,
      provider: "dev",
    };
  }
  const auth = adminAuth();
  if (!auth) return null;
  try {
    // Revocation checks need a service account; without one, signature + expiry are still verified.
    const d = await auth.verifyIdToken(token, firebaseAdminReady());
    return {
      uid: d.uid,
      email: d.email ?? null,
      name: (d.name as string | undefined) ?? null,
      picture: d.picture ?? null,
      provider: d.firebase?.sign_in_provider ?? "unknown",
    };
  } catch {
    return null;
  }
}

export const adminEmails = () =>
  (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

/** Adds `auth` (verified Firebase user or null) to every request context. */
export const authPlugin = new Elysia({ name: "techzup-auth" }).derive("global", async ({ headers }) => {
  const h = headers.authorization ?? "";
  const token = h.startsWith("Bearer ") ? h.slice(7).trim() : "";
  return { auth: token ? await verify(token) : null };
});
