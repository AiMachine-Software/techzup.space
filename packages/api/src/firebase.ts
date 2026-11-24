import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getAuth, type Auth } from "firebase-admin/auth";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

/**
 * Firebase Admin, initialised lazily from env:
 *   FIREBASE_SERVICE_ACCOUNT  full service-account JSON (raw or base64)
 *   — or —
 *   FIREBASE_PROJECT_ID + FIREBASE_CLIENT_EMAIL + FIREBASE_PRIVATE_KEY
 */
let app: App | null | undefined;

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

export function firebaseApp(): App | null {
  if (app !== undefined) return app;
  const sa = readServiceAccount();
  if (!sa) return (app = null);
  app = getApps()[0] ?? initializeApp({ credential: cert(sa), projectId: sa.projectId });
  return app;
}

export const firebaseConfigured = () => firebaseApp() !== null;

export function adminAuth(): Auth | null {
  const a = firebaseApp();
  return a ? getAuth(a) : null;
}

export function db(): Firestore | null {
  const a = firebaseApp();
  return a ? getFirestore(a) : null;
}
