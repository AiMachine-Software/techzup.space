import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getAuth, type Auth } from "firebase-admin/auth";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

/**
 * Firebase Admin, initialised lazily from env.
 *
 *   FIREBASE_SERVICE_ACCOUNT  full service-account JSON (raw or base64)  → Auth + Firestore
 *   — or — FIREBASE_PROJECT_ID + FIREBASE_CLIENT_EMAIL + FIREBASE_PRIVATE_KEY
 *   — or — FIREBASE_PROJECT_ID (or NEXT_PUBLIC_FIREBASE_PROJECT_ID) alone
 *            → ID-token verification only (Google's public keys); no Firestore, no user admin.
 */
let app: App | null | undefined;
let hasCredential = false;

function readServiceAccount() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT?.trim();
  if (raw) {
    const json = raw.startsWith("{") ? raw : Buffer.from(raw, "base64").toString("utf8");
    const sa = JSON.parse(json);
    return { projectId: sa.project_id, clientEmail: sa.client_email, privateKey: sa.private_key };
  }
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (projectId && clientEmail && privateKey) return { projectId, clientEmail, privateKey };
  return null;
}

const projectIdOnly = () => process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || null;

export function firebaseApp(): App | null {
  if (app !== undefined) return app;
  const sa = readServiceAccount();
  if (sa) {
    hasCredential = true;
    app = getApps()[0] ?? initializeApp({ credential: cert(sa), projectId: sa.projectId });
    return app;
  }
  const pid = projectIdOnly();
  app = pid ? (getApps()[0] ?? initializeApp({ projectId: pid })) : null;
  return app;
}

/** Can verify Firebase ID tokens. */
export const firebaseConfigured = () => firebaseApp() !== null;
/** Has a service account: Firestore + user administration available. */
export const firebaseAdminReady = () => firebaseApp() !== null && hasCredential;

export function adminAuth(): Auth | null {
  const a = firebaseApp();
  return a ? getAuth(a) : null;
}

/** Auth calls that need a credential (custom claims, disable, delete). */
export function privilegedAuth(): Auth | null {
  return firebaseAdminReady() ? getAuth(firebaseApp()!) : null;
}

export function db(): Firestore | null {
  return firebaseAdminReady() ? getFirestore(firebaseApp()!) : null;
}

export const firebaseProjectId = () => (firebaseApp()?.options.projectId as string | undefined) ?? null;
