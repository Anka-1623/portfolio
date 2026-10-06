import type { IconType } from "react-icons";
import {
  PiCake,
  PiGameController,
  PiGraduationCap,
  PiMountains,
  PiRocketLaunch,
} from "react-icons/pi";
import {
  SiArduino,
  SiClaude,
  SiCplusplus,
  SiEspressif,
  SiFastapi,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSolidity,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from "react-icons/si";
import AvalancheIcon from "@/components/AvalancheIcon";

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Flask", "Node.js", "REST APIs"],
  },
  {
    label: "Web3",
    items: ["Solidity", "Avalanche", "Stellar"],
  },
  {
    label: "Data & Infra",
    items: ["Supabase", "PostgreSQL", "Vercel", "Railway"],
  },
  {
    label: "AI & Tooling",
    items: ["Gemini API", "Prompt Engineering", "Git", "ESLint"],
  },
] as const;

export type ProjectLink = { label: string; href: string };

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: { name: string; Icon: IconType }[];
  status: string;
  /** Large faded glyph behind the panel. */
  visual: IconType;
  /** Panel color. Neighbors differ so stacked panels stay distinguishable. */
  tone: "dark" | "accent" | "paper";
  links: ProjectLink[];
  /** Optional shell command shown on the panel. */
  command?: string;
};

// Order is priority: the Team1 and Avalanche work leads.
export const projects: Project[] = [
  {
    name: "learn-avalanche",
    tagline: "AI teacher for Solidity and Avalanche",
    description:
      "A skill for your coding agent that takes you from zero Solidity to your own Avalanche L1. It explains and asks questions, you write the code.",
    stack: [
      { name: "Python", Icon: SiPython },
      { name: "Solidity", Icon: SiSolidity },
      { name: "Avalanche", Icon: AvalancheIcon },
      { name: "Claude Code", Icon: SiClaude },
    ],
    status: "Open source, beta",
    visual: PiMountains,
    tone: "dark",
    links: [
      { label: "GitHub", href: "https://github.com/Anka-1623/learn-avalanche" },
    ],
    command: "npx skills add Anka-1623/learn-avalanche",
  },
  {
    name: "Team1 Calendar",
    tagline: "Birthday calendar for Team1 Turkiye",
    description:
      "Members sign in with a magic link and add their birthday. Everyone sees the panel, and members who opt in get email reminders.",
    stack: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Supabase", Icon: SiSupabase },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Vercel", Icon: SiVercel },
    ],
    status: "Live",
    visual: PiCake,
    tone: "accent",
    links: [
      { label: "Live site", href: "https://team1-turkiye-takvim.vercel.app" },
      {
        label: "GitHub",
        href: "https://github.com/Anka-1623/team1-turkiye-takvim",
      },
    ],
  },
  {
    name: "EduTask",
    tagline: "AI-powered student task management",
    description:
      "Plan, prioritize and track academic work, with AI scheduling and study insights.",
    stack: [
      { name: "React", Icon: SiReact },
      { name: "Vite", Icon: SiVite },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "Supabase", Icon: SiSupabase },
    ],
    status: "In development",
    visual: PiGraduationCap,
    tone: "paper",
    links: [],
  },
  {
    name: "esp32-fustool",
    tagline: "WiFi and Bluetooth security tool",
    description:
      "ESP32Marauder fork for screenless ESP32-S3 boards. Scan, capture and manage pcap files from a WebUI served by the device.",
    stack: [
      { name: "C++", Icon: SiCplusplus },
      { name: "ESP32-S3", Icon: SiEspressif },
      { name: "Arduino", Icon: SiArduino },
    ],
    status: "Open source",
    visual: SiEspressif,
    tone: "dark",
    links: [
      { label: "GitHub", href: "https://github.com/Anka-1623/esp32-fustool" },
    ],
  },
  {
    name: "Astrocode",
    tagline: "Moon mission story game",
    description:
      "An interactive story and simulation game built around the Turkish Space Agency's lunar program. Pick a role and complete missions in the browser.",
    stack: [
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Phaser", Icon: PiGameController },
      { name: "HTML5", Icon: SiHtml5 },
    ],
    status: "Open source",
    visual: PiRocketLaunch,
    tone: "accent",
    links: [
      { label: "GitHub", href: "https://github.com/Anka-1623/astrocode" },
    ],
  },
];
