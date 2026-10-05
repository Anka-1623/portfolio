import { skillGroups } from "@/lib/data";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <RevealOnScroll>
          <SectionHeading title="Skills" />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <dl className="mt-12 divide-y divide-border border-t border-border">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="grid gap-3 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <dt className="text-sm text-muted">{group.label}</dt>
                <dd className="flex flex-wrap gap-x-7 gap-y-2 text-base text-foreground">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </RevealOnScroll>
      </div>
    </section>
  );
}
