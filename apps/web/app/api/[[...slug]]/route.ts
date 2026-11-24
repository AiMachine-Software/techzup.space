import { app } from "@techzup/api";

/** All /api/* requests are served by the Elysia app in packages/api. */
const handle = ({ request }: { request: Request }) => app.handle(request);

export const GET = (req: Request) => handle({ request: req });
export const POST = (req: Request) => handle({ request: req });
export const PATCH = (req: Request) => handle({ request: req });
export const PUT = (req: Request) => handle({ request: req });
export const DELETE = (req: Request) => handle({ request: req });
export const OPTIONS = (req: Request) => handle({ request: req });

export const dynamic = "force-dynamic";
