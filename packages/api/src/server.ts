/**
 * Standalone Bun server for the API (local dev or self-hosting).
 * On Vercel the same `app` is served by apps/web/app/api/[[...slug]]/route.ts.
 */
import { Elysia } from "elysia";
import { app } from "./index";

const origins = (process.env.CORS_ORIGINS ?? "http://localhost:3000")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const server = new Elysia()
  .onRequest(({ request, set }) => {
    const origin = request.headers.get("origin");
    if (origin && origins.includes(origin)) {
      set.headers["access-control-allow-origin"] = origin;
      set.headers["access-control-allow-credentials"] = "true";
      set.headers["access-control-allow-headers"] = "authorization, content-type";
      set.headers["access-control-allow-methods"] = "GET, POST, PATCH, DELETE, OPTIONS";
      set.headers["vary"] = "origin";
    }
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: set.headers as HeadersInit });
  })
  .use(app)
  .listen(Number(process.env.PORT ?? 4000));

console.log(`techzup api on http://localhost:${server.server?.port}/api/health`);
