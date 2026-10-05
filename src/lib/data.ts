import type { IconType } from "react-icons";
import { PiGraduationCap } from "react-icons/pi";
import {
  SiArduino,
  SiCplusplus,
  SiEspressif,
  SiFastapi,
  SiReact,
  SiSupabase,
  SiVite,
} from "react-icons/si";

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

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: { name: string; Icon: IconType }[];
  status: string;
  visual: IconType;
  href?: string;
};

export const projects: Project[] = [
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
    href: "https://github.com/Anka-1623/esp32-fustool",
  },
];
