import { skillGroups } from "@/lib/data";
import RevealOnScroll from "./RevealOnScroll";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-border py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 top-16 select-none font-mono text-[10rem] font-semibold leading-none text-surface-2 sm:text-[14rem]"
      >
        03
      </span>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-16">
          <RevealOnScroll>
            <span className="font-mono text-xs tracking-[0.25em] text-accent">
              03 — SKILLS
            </span>
          </RevealOnScroll>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <RevealOnScroll key={group.label} delay={i * 0.08}>
                <h3 className="text-sm font-medium text-foreground">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
