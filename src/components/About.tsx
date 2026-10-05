import { CONTAINER } from "@/lib/ui";
import RevealOnScroll from "./RevealOnScroll";
import WordReveal from "./WordReveal";

const STATEMENT =
  "I build complete products on my own, from the database to the deploy. Now I'm taking that into Web3 as a Team1 Turkiye collaborator, writing Solidity on Avalanche and serving as a Stellar Ambassador.";

const FACTS = [
  { label: "Building", value: "EduTask" },
  { label: "Team", value: "Stratos UAV team" },
  {
    label: "Recognition",
    value: "TEKNOFEST 2026 finalist, Fight Against Addiction",
  },
];

export default function About() {
  return (
    <div className={CONTAINER}>
      <h2 className="sr-only">About</h2>
      <WordReveal
        text={STATEMENT}
        emphasis={[
          "Web3",
          "Team1",
          "Turkiye",
          "Solidity",
          "Avalanche",
          "Stellar",
          "Ambassador",
        ]}
        className="max-w-5xl font-serif text-[clamp(2rem,4.6vw,4.4rem)] leading-[1.08] tracking-tight"
      />

      <RevealOnScroll delay={0.1}>
        <dl className="mt-20 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-sm text-muted">{fact.label}</dt>
              <dd className="mt-3 font-serif text-xl">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </RevealOnScroll>
    </div>
  );
}
