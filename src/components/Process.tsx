import RevealOnScroll from "./RevealOnScroll";

const STEPS = [
  {
    n: "01",
    title: "Scope",
    body: "Start with the smallest version that proves the idea works, not the biggest version that impresses.",
  },
  {
    n: "02",
    title: "Build",
    body: "Full ownership of the stack — schema, API, UI — so nothing gets lost in a handoff.",
  },
  {
    n: "03",
    title: "Ship",
    body: "Deploy early and often. A feature isn't done until it's in production, being used.",
  },
  {
    n: "04",
    title: "Iterate",
    body: "Watch real usage, not assumptions, and let that decide what gets built next.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-6 top-16 select-none font-mono text-[10rem] font-semibold leading-none text-surface-2 sm:text-[14rem]"
      >
        02
      </span>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-16">
          <RevealOnScroll>
            <span className="font-mono text-xs tracking-[0.25em] text-accent">
              02 — HOW I WORK
            </span>
          </RevealOnScroll>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {STEPS.map((step, i) => (
              <RevealOnScroll key={step.n} delay={i * 0.08}>
                <div className="border-t border-border pt-6">
                  <span className="font-mono text-xs text-accent">
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-lg font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
