/** Only same-site paths are allowed as ?next= targets. */
export function safeNext(v: string | null | undefined, fallback = "/account") {
  return v && v.startsWith("/") && !v.startsWith("//") && !v.startsWith("/\\") ? v : fallback;
}

/**
 * The AI-Psychosis Test has its own stylesheet and theme script, so it is loaded with a full
 * page navigation instead of a client-side route change.
 */
export function goTo(path: string, replace: (p: string) => void) {
  if (path.startsWith("/ai-psychosis-test")) window.location.assign(path);
  else replace(path);
}
