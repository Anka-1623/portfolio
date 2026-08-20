const ITEMS = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "FASTAPI",
  "FLASK",
  "SUPABASE",
  "POSTGRESQL",
  "TAILWIND CSS",
  "GEMINI API",
  "VERCEL",
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-border py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-sm tracking-[0.15em] text-muted-2"
          >
            {item}
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
