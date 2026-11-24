"use client";

import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  type Auth,
  type AuthProvider,
} from "firebase/auth";

/**
 * Firebase web config. These values are public identifiers (they ship in the browser bundle);
 * access is controlled by Firebase Auth settings and Firestore rules, not by hiding them.
 */
const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const firebaseEnabled = Boolean(config.apiKey && config.authDomain && config.projectId);

/** Local-only fallback: sign in with any email when Firebase isn't configured. */
export const devAuthEnabled = !firebaseEnabled && process.env.NEXT_PUBLIC_AUTH_DEV_MODE === "1";

let app: FirebaseApp | null = null;
function firebase(): FirebaseApp | null {
  if (!firebaseEnabled) return null;
  app ??= getApps().length ? getApp() : initializeApp(config);
  return app;
}

export function firebaseAuth(): Auth | null {
  const a = firebase();
  return a ? getAuth(a) : null;
}

let analyticsStarted = false;
/** Google Analytics for Firebase — production only, and only where the browser supports it. */
export async function startAnalytics() {
  if (analyticsStarted || !config.measurementId || process.env.NODE_ENV !== "production") return;
  const a = firebase();
  if (!a) return;
  analyticsStarted = true;
  const { getAnalytics, isSupported } = await import("firebase/analytics");
  if (await isSupported()) getAnalytics(a);
}

export type ProviderId = "google" | "facebook" | "x";

export function providerFor(id: ProviderId): AuthProvider {
  switch (id) {
    case "google": {
      const p = new GoogleAuthProvider();
      p.setCustomParameters({ prompt: "select_account" });
      return p;
    }
    case "facebook": {
      const p = new FacebookAuthProvider();
      p.addScope("email");
      return p;
    }
    case "x":
      return new TwitterAuthProvider();
  }
}
