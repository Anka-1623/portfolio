import RevealOnScroll from "./RevealOnScroll";

const STATS = [
  { value: "2", label: "Products shipped" },
  { value: "18+", label: "Technologies in the stack" },
  { value: "100%", label: "Full-stack, DB to deploy" },
  { value: "Always", label: "Building something new" },
];

export default function Stats() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border border-x border-border sm:grid-cols-4 sm:divide-y-0">
        {STATS.map((stat, i) => (
          <RevealOnScroll key={stat.label} delay={i * 0.06} y={12}>
            <div className="px-6 py-10 sm:px-8">
              <p className="font-mono text-3xl font-semibold text-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs tracking-wide text-muted">
                {stat.label}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
