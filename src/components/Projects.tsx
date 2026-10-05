import { PiArrowUpRight } from "react-icons/pi";
import { projects } from "@/lib/data";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <RevealOnScroll>
          <SectionHeading title="Projects" />
        </RevealOnScroll>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {projects.map((project, i) => {
            const featured = i === 0;
            const Visual = project.visual;

            return (
              <RevealOnScroll
                key={project.name}
                delay={i * 0.08}
                className={featured ? "lg:col-span-7" : "lg:col-span-5"}
              >
                <SpotlightCard
                  href={project.href}
                  className={
                    featured
                      ? "border-accent/30 bg-gradient-to-br from-accent/15 via-surface to-surface"
                      : ""
                  }
                >
                  <Visual
                    aria-hidden
                    className="pointer-events-none absolute -bottom-14 -right-10 h-72 w-72 text-foreground/[0.045] transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="relative flex h-full min-h-[24rem] flex-col p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-sm text-muted">
                        {project.status}
                      </span>
                      {project.href && (
                        <span className="flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-accent">
                          GitHub
                          <PiArrowUpRight
                            aria-hidden
                            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                      )}
                    </div>

                    <div className="mt-16">
                      <h3
                        className={`font-semibold tracking-tight text-foreground ${
                          featured ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
                        }`}
                      >
                        {project.name}
                      </h3>
                      <p className="mt-2 text-base text-foreground/80">
                        {project.tagline}
                      </p>
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                        {project.description}
                      </p>
                    </div>

                    <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-10">
                      {project.stack.map(({ name, Icon }) => (
                        <li
                          key={name}
                          className="flex items-center gap-2 text-sm text-muted"
                        >
                          <Icon aria-hidden className="h-4 w-4 shrink-0" />
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
