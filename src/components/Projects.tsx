"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import RevealOnScroll from "./RevealOnScroll";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-16">
          <RevealOnScroll>
            <span className="font-mono text-xs tracking-[0.25em] text-accent">
              04 — PROJECTS
            </span>
          </RevealOnScroll>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <RevealOnScroll key={project.name} delay={i * 0.1}>
                <motion.article
                  whileHover={{
                    borderColor: "var(--accent)",
                    boxShadow: "0 0 60px -20px var(--accent)",
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors sm:p-10"
                >
                  <span className="pointer-events-none absolute -right-4 -top-6 font-mono text-[7rem] font-semibold leading-none text-surface-2 transition-colors group-hover:text-surface-2/80 sm:text-[9rem]">
                    {project.index}
                  </span>

                  <div className="relative flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
                        {project.name}
                      </h3>
                      <p className="mt-1.5 text-sm text-accent">
                        {project.tagline}
                      </p>
                    </div>
                    <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                      {project.status}
                    </span>
                  </div>

                  <p className="relative mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    {project.description}
                  </p>

                  <ul className="relative mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-surface-2 px-3 py-1 font-mono text-xs text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative mt-6 inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-accent"
                    >
                      View project
                      <span aria-hidden>→</span>
                    </a>
                  )}
                </motion.article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
