# techzup.space

Online magazine for tech, AI and ML news from around the world — landing page, member accounts and the
**AI-Psychosis Test** at [`/ai-psychosis-test`](https://techzup.space/ai-psychosis-test).

## Stack

| Layer | Tech |
| --- | --- |
| Runtime / package manager | **Bun** 1.4 (workspaces) |
| Frontend | **Next.js 16** (App Router, Turbopack), **Tailwind CSS 4**, **shadcn/ui** (Radix) |
| Backend API | **Elysia 2.0** (RC) in `packages/api`, served at `/api/*` |
| Auth | **Firebase Auth** — Google, Facebook, X; ID tokens verified by the API with Firebase Admin |
| Data | **Cloud Firestore** (`users` collection) via Firebase Admin |

```
apps/web            Next.js site
  app/              landing, /login, /register, /account, /admin/users, /terms
  app/ai-psychosis-test   the test (22 languages, themes, grades, share card, OG image)
  app/api/[[...slug]]     mounts the Elysia app
packages/api        Elysia app (routes, Firebase Admin, user store)
```

## API

All routes are under `/api` and take `Authorization: Bearer <Firebase ID token>`.

| Method | Path | Who | What |
| --- | --- | --- | --- |
| GET | `/health` | anyone | status, runtime, whether Firebase is configured |
| GET | `/users/me` | signed in | profile (`404 not_registered` until registration) |
| POST | `/users/register` | signed in | create/complete profile (requires `acceptTerms: true`) |
| PATCH | `/users/me` | member | update profile & preferences |
| DELETE | `/users/me` | member | delete own account (profile, test results, Firebase user) |
| GET | `/results` | member | own AI-Psychosis Test results (latest 20) |
| POST | `/results` | member | save a finished test (id = finishedAt, so re-sends don't duplicate) |
| GET | `/admin/stats` | admin | totals by role, status, provider |
| GET | `/admin/users?q=&role=&status=&limit=&offset=` | admin | search & page members |
| PATCH | `/admin/users/:uid` | admin | change `role` (reader/editor/admin) or `status` (active/suspended) |
| DELETE | `/admin/users/:uid` | admin | delete a member |

Admins: anyone whose email is in `ADMIN_EMAILS`, or whose stored role is `admin`. Suspending a member also
disables their Firebase sign-in; roles are mirrored to Firebase custom claims.

## Local development

```bash
bun install
cp apps/web/.env.example apps/web/.env.local   # fill in Firebase values
bun run dev                                     # http://localhost:3000
bun run dev:api                                 # optional: API alone on http://localhost:4000
```

No Firebase project yet? Set `AUTH_DEV_MODE=1` and `NEXT_PUBLIC_AUTH_DEV_MODE=1` in `.env.local` to sign in with
any email and keep users in memory. This is ignored in production.

## Members-only test

`/ai-psychosis-test` is open to read, but the test itself unlocks only for registered, active members. Visitors
see a sign-in / registration gate that returns them to the test afterwards; finished results are saved to
`users/{uid}/testResults` in Firestore and listed on **My account**. The gate is enforced in the browser; saving
results is enforced by the API.

## Firebase setup

Project: **techzup-space-web**. The web config is public and is set as `NEXT_PUBLIC_FIREBASE_*` env vars.


1. Create a Firebase project and a **Web app**; copy its config into the `NEXT_PUBLIC_FIREBASE_*` variables.
2. **Authentication → Sign-in method**: enable **Google**, **Facebook** (Meta app ID/secret) and **Twitter/X**
   (X API key/secret). Add each provider's OAuth redirect URI shown by Firebase to the Meta / X developer consoles.
3. **Authentication → Settings → Authorized domains**: add `techzup.space` (and your Vercel preview domain).
4. **Firestore**: create a database in production mode, then publish `firestore.rules` (Rules tab, or
   `firebase deploy --only firestore:rules`). The rules deny all browser access; the API uses the Admin SDK.
5. **Project settings → Service accounts**: generate a key and add the whole JSON to Vercel as
   `FIREBASE_SERVICE_ACCOUNT` (Sensitive). Without it the API can verify sign-ins but returns
   `503 storage_not_configured` for anything that needs Firestore.

Instagram sign-in isn't offered: Firebase Auth has no Instagram provider.

## Deploy (Vercel)

- Project **Root Directory**: `apps/web` (Bun install runs at the repo root via `vercel.json`).
- Functions run on the **Bun runtime** (`"bunVersion": "1.x"`).
- Add the environment variables from `.env.example`.
- Domain: add `techzup.space`; the test lives at `techzup.space/ai-psychosis-test`.
