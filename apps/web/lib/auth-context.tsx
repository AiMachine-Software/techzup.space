"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { onIdTokenChanged, signInWithPopup, signOut as fbSignOut, type User } from "firebase/auth";
import { devAuthEnabled, firebaseAuth, providerFor, startAnalytics, type ProviderId } from "@/lib/firebase";
import type { UserProfile } from "@techzup/api";

export type AuthStatus = "loading" | "signed-out" | "needs-registration" | "ready" | "suspended" | "error";

interface Identity {
  uid: string;
  email: string | null;
  name: string | null;
  photoURL: string | null;
}

interface AuthState {
  status: AuthStatus;
  identity: Identity | null;
  profile: UserProfile | null;
  isAdmin: boolean;
  signIn: (p: ProviderId) => Promise<void>;
  devSignIn: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
  api: <T = unknown>(path: string, init?: RequestInit) => Promise<{ ok: boolean; status: number; data: T }>;
}

const Ctx = createContext<AuthState | null>(null);
const DEV_KEY = "techzup-dev-email";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [fbUser, setFbUser] = useState<User | null>(null);
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
      setAuthReady(true);
    });
  }, []);

  const identity = useMemo<Identity | null>(() => {
    if (fbUser) return { uid: fbUser.uid, email: fbUser.email, name: fbUser.displayName, photoURL: fbUser.photoURL };
    if (devEmail) return { uid: `dev:${devEmail}`, email: devEmail, name: devEmail.split("@")[0], photoURL: null };
    return null;
  }, [fbUser, devEmail]);

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
    const r = await api<{ user: UserProfile; isAdmin: boolean }>("/users/me");
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
    () => ({ status, identity, profile, isAdmin, signIn, devSignIn, signOut, refresh, api }),
    [status, identity, profile, isAdmin, signIn, devSignIn, signOut, refresh, api]
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAuth must be used inside <AuthProvider>");
  return v;
}
