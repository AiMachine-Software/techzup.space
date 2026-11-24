import { Bot, BrainCircuit, Cpu, FlaskConical, Landmark, Rocket, ShieldCheck, Smartphone } from "lucide-react";

/** Topic desks. Labels and blurbs come from the site dictionary (t.interests[id]). */
export const INTERESTS = [
  { id: "ai", Icon: Bot },
  { id: "ml", Icon: BrainCircuit },
  { id: "startups", Icon: Rocket },
  { id: "gadgets", Icon: Smartphone },
  { id: "dev", Icon: Cpu },
  { id: "security", Icon: ShieldCheck },
  { id: "science", Icon: FlaskConical },
  { id: "policy", Icon: Landmark },
] as const;

export type InterestId = (typeof INTERESTS)[number]["id"];
