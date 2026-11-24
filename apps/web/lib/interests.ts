import { Bot, BrainCircuit, Cpu, FlaskConical, Landmark, Rocket, ShieldCheck, Smartphone } from "lucide-react";

export const INTERESTS = [
  { id: "ai", label: "Artificial Intelligence", short: "AI", Icon: Bot, blurb: "Models, agents and the companies building them." },
  { id: "ml", label: "Machine Learning", short: "ML", Icon: BrainCircuit, blurb: "Research, papers and tooling explained." },
  { id: "startups", label: "Startups & Funding", short: "Startups", Icon: Rocket, blurb: "Launches, rounds and the people behind them." },
  { id: "gadgets", label: "Gadgets & Devices", short: "Gadgets", Icon: Smartphone, blurb: "Phones, wearables and the hardware you use." },
  { id: "dev", label: "Developers", short: "Dev", Icon: Cpu, blurb: "Frameworks, languages and engineering culture." },
  { id: "security", label: "Security & Privacy", short: "Security", Icon: ShieldCheck, blurb: "Breaches, threats and how to stay safe." },
  { id: "science", label: "Science & Space", short: "Science", Icon: FlaskConical, blurb: "Where deep tech meets discovery." },
  { id: "policy", label: "Policy & Society", short: "Policy", Icon: Landmark, blurb: "Regulation, ethics and tech's impact on people." },
] as const;

export type InterestId = (typeof INTERESTS)[number]["id"];
