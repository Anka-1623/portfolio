import RevealOnScroll from "./RevealOnScroll";

const FACTS = [
  { label: "Building", value: "EduTask" },
  { label: "Team", value: "Stratos İHA, UAV team" },
  {
    label: "Recognition",
    value: "TEKNOFEST 2026 finalist, Fight Against Addiction",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <RevealOnScroll>
          <h2 className="sr-only">About</h2>
          <p className="max-w-3xl text-2xl leading-snug tracking-tight text-foreground sm:text-4xl">
            I build complete products end to end, from database to deploy.
            Lately I write Solidity on Avalanche, and I&apos;m a Stellar
            Ambassador.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <dl className="mt-14 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="mt-2 text-base text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </RevealOnScroll>
      </div>
    </section>
  );
}
