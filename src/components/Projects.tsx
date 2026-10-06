"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { createRef, useMemo, type RefObject } from "react";
import { PiArrowUpRight } from "react-icons/pi";
import { projects, type Project } from "@/lib/data";
import { CONTAINER } from "@/lib/ui";
import MaskText from "./MaskText";
import RollText from "./RollText";

const TONES = {
  dark: {
    panel: "bg-bg-2 text-fg",
    muted: "text-fg/60",
    rule: "border-fg/15",
    watermark: "text-fg/[0.05]",
    chip: "border-fg/15 bg-fg/[0.04]",
  },
  accent: {
    panel: "bg-accent text-ink",
    muted: "text-ink/70",
    rule: "border-ink/25",
    watermark: "text-ink/[0.1]",
    chip: "border-ink/25 bg-ink/[0.06]",
  },
  paper: {
    panel: "bg-paper text-ink",
    muted: "text-ink/60",
    rule: "border-ink/15",
    watermark: "text-ink/[0.06]",
    chip: "border-ink/15 bg-ink/[0.04]",
  },
} as const;

function ProjectPanel({
  project,
  selfRef,
  nextRef,
}: {
  project: Project;
  selfRef: RefObject<HTMLDivElement | null>;
  nextRef?: RefObject<HTMLDivElement | null>;
}) {
  const reduce = useReducedMotion();
  const tone = TONES[project.tone];
  const Visual = project.visual;
  const [primary] = project.links;
  const singleLink = project.links.length === 1;

  // The panel recedes while the next one slides over it.
  const { scrollYProgress } = useScroll({
    target: nextRef ?? selfRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  // Dim with an overlay, not opacity: a see-through panel would show the one
  // stacked beneath it.
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.6]);
  const recedes = Boolean(nextRef) && !reduce;

  const nameSize = Math.min(14, 82 / (project.name.length * 0.62));

  return (
    <div
      ref={selfRef}
      className="sticky top-0 h-[100dvh] px-3 py-14 sm:px-6 sm:py-20 xl:px-16"
    >
      <motion.article
        style={recedes ? { scale } : undefined}
        className={`relative flex h-full origin-top flex-col justify-between overflow-hidden rounded-[28px] p-6 sm:p-12 ${tone.panel}`}
      >
        <Visual
          aria-hidden
          className={`pointer-events-none absolute -bottom-16 -right-10 size-[22rem] sm:size-[30rem] ${tone.watermark}`}
        />

        {singleLink && (
          // Makes the whole panel a link when there is a single destination.
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-hidden
            tabIndex={-1}
            className="absolute inset-0 z-10"
          />
        )}

        <div className="relative z-20 flex items-start justify-between gap-6">
          <span className={`font-mono text-sm ${tone.muted}`}>
            {project.status}
          </span>
          <div className="flex flex-wrap justify-end gap-x-5 gap-y-1 text-sm">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1"
              >
                <RollText>{link.label}</RollText>
                <PiArrowUpRight aria-hidden className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <h3
            style={{ fontSize: `clamp(2.4rem, ${nameSize}vw, 12rem)` }}
            className="font-semibold leading-[0.88] tracking-[-0.045em]"
          >
            {project.name}
          </h3>
          <p className="mt-5 font-serif text-2xl italic sm:text-3xl">
            {project.tagline}
          </p>
          <p className={`mt-4 max-w-md text-base leading-relaxed ${tone.muted}`}>
            {project.description}
          </p>
          {project.command && (
            <code
              className={`relative z-20 mt-5 inline-block max-w-full overflow-x-auto whitespace-nowrap rounded-lg border px-3 py-2 font-mono text-xs sm:text-sm ${tone.chip}`}
            >
              {project.command}
            </code>
          )}
        </div>

        <ul
          className={`relative flex flex-wrap gap-x-6 gap-y-2 border-t pt-5 ${tone.rule}`}
        >
          {project.stack.map(({ name, Icon }) => (
            <li key={name} className="flex items-center gap-2 text-sm">
              <Icon aria-hidden className="size-4 shrink-0" />
              {name}
            </li>
          ))}
        </ul>

        {recedes && (
          <motion.div
            aria-hidden
            style={{ opacity: dim }}
            className="pointer-events-none absolute inset-0 z-30 bg-ink"
          />
        )}
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const refs = useMemo(
    () => projects.map(() => createRef<HTMLDivElement>()),
    []
  );

  return (
    <>
      <div className={`${CONTAINER} pb-16`}>
        <MaskText
          text="Projects"
          className="text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.9] tracking-[-0.04em]"
        />
      </div>

      <div>
        {projects.map((project, i) => (
          <ProjectPanel
            key={project.name}
            project={project}
            selfRef={refs[i]}
            nextRef={refs[i + 1]}
          />
        ))}
      </div>
    </>
  );
}
