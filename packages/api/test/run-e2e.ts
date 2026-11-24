/**
 * Real end-to-end test against the live Firebase project (Auth + Cloud Firestore).
 *
 *   bun run test:e2e
 *
 * Needs the Firebase Admin key saved (git-ignored) at:  .secrets/firebase-admin.json
 * (or FIREBASE_SERVICE_ACCOUNT_FILE=/path/to/key.json). The key is passed to the test process
 * through env and is never printed. Every user/document the test creates is prefixed "e2e-" and
 * deleted afterwards.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dir, "../../..");
const keyFile = process.env.FIREBASE_SERVICE_ACCOUNT_FILE ?? resolve(root, ".secrets/firebase-admin.json");
const WEB_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "AIzaSyCqSADxf2OfL1o8DDwkl29arOowlrf6_Wc";
const EXPECTED_PROJECT = process.env.E2E_PROJECT_ID ?? "techzup-space-web";

function fail(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(2);
}

if (!existsSync(keyFile)) fail(`Admin key not found at ${keyFile}. Save it there (Project settings → Service accounts → Generate new private key).`);
let sa: { project_id?: string; client_email?: string; private_key?: string };
try {
  sa = JSON.parse(readFileSync(keyFile, "utf8"));
} catch {
  fail(`${keyFile} isn't valid JSON.`);
}
if (!sa.private_key || !sa.client_email) fail("That file isn't a service-account key (no private_key / client_email).");
if (sa.project_id !== EXPECTED_PROJECT) fail(`Key is for project "${sa.project_id}", expected "${EXPECTED_PROJECT}".`);

// Preflight: is Firebase Authentication switched on for this project?
const cfg = await fetch(
  `https://www.googleapis.com/identitytoolkit/v3/relyingparty/getProjectConfig?key=${WEB_API_KEY}`
).then((r) => r.json() as Promise<{ error?: { message: string }; authorizedDomains?: string[] }>);
if (cfg.error) fail(`Firebase Authentication isn't ready (${cfg.error.message}). Open Authentication in the Firebase console and click "Get started".`);

console.log(`Firebase project: ${sa.project_id} — running real E2E (Auth + Firestore)\n`);
const proc = Bun.spawn(["bun", "test", "test/e2e.test.ts", "--timeout", "60000"], {
  cwd: resolve(import.meta.dir, ".."),
  stdout: "inherit",
  stderr: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "test",
    FIREBASE_SERVICE_ACCOUNT: readFileSync(keyFile, "utf8"),
    E2E_WEB_API_KEY: WEB_API_KEY,
    E2E_AUTHORIZED_DOMAINS: (cfg.authorizedDomains ?? []).join(","),
    AUTH_DEV_MODE: "",
    FIRESTORE_EMULATOR_HOST: "",
    FIREBASE_AUTH_EMULATOR_HOST: "",
  },
});
process.exit(await proc.exited);
