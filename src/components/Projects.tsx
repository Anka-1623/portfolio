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

const VARIANTS = [
  {
    panel: "bg-bg-2 text-fg",
    muted: "text-fg/60",
    rule: "border-fg/15",
    watermark: "text-fg/[0.05]",
  },
  {
    panel: "bg-accent text-ink",
    muted: "text-ink/70",
    rule: "border-ink/25",
    watermark: "text-ink/[0.1]",
  },
];

function ProjectPanel({
  project,
  index,
  selfRef,
  nextRef,
}: {
  project: Project;
  index: number;
  selfRef: RefObject<HTMLDivElement | null>;
  nextRef?: RefObject<HTMLDivElement | null>;
}) {
  const reduce = useReducedMotion();
  const variant = VARIANTS[index % VARIANTS.length];
  const Visual = project.visual;

  // The panel recedes while the next one slides over it.
  const { scrollYProgress } = useScroll({
    target: nextRef ?? selfRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const recedes = Boolean(nextRef) && !reduce;

  const nameSize = Math.min(14, 82 / (project.name.length * 0.62));

  return (
    <div
      ref={selfRef}
      className="sticky top-0 h-[100dvh] px-3 py-14 sm:px-6 sm:py-20 xl:px-16"
    >
      <motion.article
        style={recedes ? { scale, opacity } : undefined}
        className={`relative flex h-full origin-top flex-col justify-between overflow-hidden rounded-[28px] p-6 sm:p-12 ${variant.panel}`}
      >
        <Visual
          aria-hidden
          className={`pointer-events-none absolute -bottom-16 -right-10 size-[22rem] sm:size-[30rem] ${variant.watermark}`}
        />

        <div className="relative flex items-start justify-between gap-6">
          <span className={`font-mono text-sm ${variant.muted}`}>
            {project.status}
          </span>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm after:absolute after:inset-0 after:content-['']"
            >
              <RollText>GitHub</RollText>
              <PiArrowUpRight aria-hidden className="size-4" />
            </a>
          )}
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
          <p className={`mt-4 max-w-md text-base leading-relaxed ${variant.muted}`}>
            {project.description}
          </p>
        </div>

        <ul
          className={`relative flex flex-wrap gap-x-6 gap-y-2 border-t pt-5 ${variant.rule}`}
        >
          {project.stack.map(({ name, Icon }) => (
            <li key={name} className="flex items-center gap-2 text-sm">
              <Icon aria-hidden className="size-4 shrink-0" />
              {name}
            </li>
          ))}
        </ul>
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
            index={i}
            selfRef={refs[i]}
            nextRef={refs[i + 1]}
          />
        ))}
      </div>
    </>
  );
}
