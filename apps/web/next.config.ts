import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Elysia API lives in the workspace package @techzup/api (TypeScript source).
  transpilePackages: ["@techzup/api"],
  serverExternalPackages: ["firebase-admin"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
