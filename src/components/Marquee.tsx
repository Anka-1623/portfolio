import {
  SiFastapi,
  SiFlask,
  SiGooglegemini,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import type { IconType } from "react-icons";

const ITEMS: { label: string; Icon: IconType }[] = [
  { label: "React", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "FastAPI", Icon: SiFastapi },
  { label: "Flask", Icon: SiFlask },
  { label: "Supabase", Icon: SiSupabase },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "Tailwind CSS", Icon: SiTailwindcss },
  { label: "Gemini API", Icon: SiGooglegemini },
  { label: "Vercel", Icon: SiVercel },
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/40 py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-14">
        {track.map(({ label, Icon }, i) => (
          <span
            key={`${label}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap text-muted-2 transition-colors hover:text-foreground"
          >
            <Icon aria-hidden className="h-7 w-7 shrink-0" />
            <span className="font-mono text-base font-medium tracking-[0.1em]">
              {label.toUpperCase()}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
