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
    label: "Data & Infra",
    items: ["Supabase", "PostgreSQL", "Vercel", "Railway"],
  },
  {
    label: "AI & Tooling",
    items: ["Gemini API", "Prompt Engineering", "Git", "ESLint"],
  },
] as const;

export type Project = {
  index: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: string;
  href?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "EduTask",
    tagline: "AI-powered student task management",
    description:
      "A platform that helps students plan, prioritize, and track academic work, with AI assistance for scheduling and study insights layered on top of a fast React frontend and a read-only FastAPI service.",
    stack: ["React", "Vite", "FastAPI", "Supabase"],
    status: "In development",
  },
];
