import RevealOnScroll from "./RevealOnScroll";

const FACTS = [
  { label: "Focus", value: "Full-stack product development" },
  { label: "Currently", value: "Building EduTask" },
  { label: "Approach", value: "Ship end-to-end, iterate on real usage" },
  { label: "Open to", value: "New ventures & collaborations" },
  { label: "Team", value: "Stratos İHA — UAV team" },
  { label: "Recognition", value: "TEKNOFEST 2026 finalist, Fight Against Addiction" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-border py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-6 top-16 select-none font-mono text-[10rem] font-semibold leading-none text-surface-2 sm:text-[14rem]"
      >
        01
      </span>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-16">
          <RevealOnScroll>
            <span className="font-mono text-xs tracking-[0.25em] text-accent">
              01 — ABOUT
            </span>
          </RevealOnScroll>

          <div className="space-y-10">
            <RevealOnScroll>
              <p className="max-w-2xl text-xl leading-relaxed text-foreground sm:text-2xl">
                Emirhan is a full-stack developer and entrepreneur who builds
                complete products, not isolated features. He works across the
                stack — React and Next.js on the front, FastAPI and Flask
                underneath, Supabase and PostgreSQL holding the data — and
                cares more about shipping something real than polishing
                something theoretical.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <p className="max-w-2xl text-base leading-relaxed text-muted">
                That mindset comes from building his own ventures, not just
                writing code for someone else&apos;s spec. Right now that
                means EduTask, an AI-powered task management platform for
                students — with more products in motion behind it.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.18}>
              <dl className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-3">
                {FACTS.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-[11px] tracking-[0.2em] text-muted-2">
                      {fact.label.toUpperCase()}
                    </dt>
                    <dd className="mt-2 text-sm text-foreground">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
