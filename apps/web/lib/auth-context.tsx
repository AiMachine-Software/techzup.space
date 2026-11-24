"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onIdTokenChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as fbSignOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { devAuthEnabled, firebaseAuth, providerFor, startAnalytics, type ProviderId } from "@/lib/firebase";
import type { UserProfile } from "@techzup/api";

export type AuthStatus =
  | "loading"
  | "signed-out"
  | "needs-verification"
  | "needs-registration"
  | "ready"
  | "suspended"
  | "error";

interface Identity {
  uid: string;
  email: string | null;
  name: string | null;
  photoURL: string | null;
  /** "password", "google.com", "facebook.com", "twitter.com" … */
  provider: string;
  emailVerified: boolean;
}

interface AuthState {
  status: AuthStatus;
  identity: Identity | null;
  profile: UserProfile | null;
  isAdmin: boolean;
  signIn: (p: ProviderId) => Promise<void>;
  emailSignIn: (email: string, password: string) => Promise<void>;
  emailSignUp: (email: string, password: string, name: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  resendVerification: () => Promise<void>;
  /** Re-checks email verification with Firebase; resolves true once verified. */
  checkVerified: () => Promise<boolean>;
  devSignIn: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
  api: <T = unknown>(path: string, init?: RequestInit) => Promise<{ ok: boolean; status: number; data: T }>;
}

const Ctx = createContext<AuthState | null>(null);
const DEV_KEY = "techzup-dev-email";

/** Where the verification / reset email links send people back to. */
const continueUrl = (path: string) =>
  typeof window === "undefined" ? undefined : { url: `${window.location.origin}${path}` };

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [fbUser, setFbUser] = useState<User | null>(null);
  const [userVersion, setUserVersion] = useState(0); // bumps after user.reload()
  const [devEmail, setDevEmail] = useState<string | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Firebase (or dev) identity
  useEffect(() => {
    void startAnalytics();
    if (devAuthEnabled) {
      try {
        setDevEmail(localStorage.getItem(DEV_KEY));
      } catch {}
      setAuthReady(true);
      return;
    }
    const auth = firebaseAuth();
    if (!auth) {
      setAuthReady(true);
      return;
    }
    return onIdTokenChanged(auth, (u) => {
      setFbUser(u);
      setUserVersion((v) => v + 1);
      setAuthReady(true);
    });
  }, []);

  const identity = useMemo<Identity | null>(() => {
    if (fbUser)
      return {
        uid: fbUser.uid,
        email: fbUser.email,
        name: fbUser.displayName,
        photoURL: fbUser.photoURL,
        provider: fbUser.providerData[0]?.providerId ?? "unknown",
        emailVerified: fbUser.emailVerified,
      };
    if (devEmail)
      return { uid: `dev:${devEmail}`, email: devEmail, name: devEmail.split("@")[0], photoURL: null, provider: "dev", emailVerified: true };
    return null;
    // userVersion: fbUser is mutated in place by reload()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fbUser, devEmail, userVersion]);

  const token = useCallback(async () => {
    if (fbUser) return fbUser.getIdToken();
    if (devEmail) return `dev:${devEmail}`;
    return null;
  }, [fbUser, devEmail]);

  const api = useCallback<AuthState["api"]>(
    async (path, init) => {
      const t = await token();
      const res = await fetch(`/api${path}`, {
        ...init,
        headers: {
          ...(init?.body ? { "content-type": "application/json" } : {}),
          ...(t ? { authorization: `Bearer ${t}` } : {}),
          ...init?.headers,
        },
      });
      const data = await res.json().catch(() => ({}));
      return { ok: res.ok, status: res.status, data };
    },
    [token]
  );

  const refresh = useCallback(async () => {
    if (!identity) {
      setProfile(null);
      setIsAdmin(false);
      setStatus("signed-out");
      return;
    }
    // Email/password accounts must verify their address before joining.
    if (identity.provider === "password" && !identity.emailVerified) {
      setProfile(null);
      setIsAdmin(false);
      setStatus("needs-verification");
      return;
    }
    const r = await api<{ user: UserProfile; isAdmin: boolean; error?: string }>("/users/me");
    if (r.ok) {
      setProfile(r.data.user);
      setIsAdmin(r.data.isAdmin);
      setStatus("ready");
    } else {
      setProfile(null);
      setIsAdmin(false);
      setStatus(r.status === 404 ? "needs-registration" : r.status === 403 ? "suspended" : "error");
    }
  }, [identity, api]);

  useEffect(() => {
    if (authReady) void refresh();
  }, [authReady, refresh]);

  const signIn = useCallback(async (p: ProviderId) => {
    const auth = firebaseAuth();
    if (!auth) throw new Error("Firebase is not configured");
    await signInWithPopup(auth, providerFor(p));
  }, []);

  const emailSignIn = useCallback(async (email: string, password: string) => {
    const auth = firebaseAuth();
    if (!auth) throw new Error("Firebase is not configured");
    await signInWithEmailAndPassword(auth, email.trim(), password);
  }, []);

  const emailSignUp = useCallback(async (email: string, password: string, name: string) => {
    const auth = firebaseAuth();
    if (!auth) throw new Error("Firebase is not configured");
    const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
    if (name.trim()) await updateProfile(cred.user, { displayName: name.trim() });
    await sendEmailVerification(cred.user, continueUrl("/login?verified=1"));
    setUserVersion((v) => v + 1);
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    const auth = firebaseAuth();
    if (!auth) throw new Error("Firebase is not configured");
    await sendPasswordResetEmail(auth, email.trim(), continueUrl("/login"));
  }, []);

  const resendVerification = useCallback(async () => {
    if (fbUser) await sendEmailVerification(fbUser, continueUrl("/login?verified=1"));
  }, [fbUser]);

  const checkVerified = useCallback(async () => {
    if (!fbUser) return false;
    await fbUser.reload();
    if (fbUser.emailVerified) await fbUser.getIdToken(true); // new token carries email_verified=true
    setUserVersion((v) => v + 1);
    return fbUser.emailVerified;
  }, [fbUser]);

  const devSignIn = useCallback(async (email: string) => {
    const e = email.trim().toLowerCase();
    try {
      localStorage.setItem(DEV_KEY, e);
    } catch {}
    setDevEmail(e);
  }, []);

  const signOut = useCallback(async () => {
    const auth = firebaseAuth();
    if (auth) await fbSignOut(auth);
    try {
      localStorage.removeItem(DEV_KEY);
    } catch {}
    setDevEmail(null);
  }, []);

  const value = useMemo(
    () => ({
      status,
      identity,
      profile,
      isAdmin,
      signIn,
      emailSignIn,
      emailSignUp,
      resetPassword,
      resendVerification,
      checkVerified,
      devSignIn,
      signOut,
      refresh,
      api,
    }),
    [status, identity, profile, isAdmin, signIn, emailSignIn, emailSignUp, resetPassword, resendVerification, checkVerified, devSignIn, signOut, refresh, api]
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAuth must be used inside <AuthProvider>");
  return v;
}
