"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

export type Tone = "ink" | "paper";

const SIDE_INSET = 3.5; // percent
const CORNER = 44; // px

/**
 * A page section with a tone. Paper sections behave like a card lifted off the
 * ink canvas: they grow in (inset and corner radius ease to zero) as they
 * arrive, and shrink back out as they leave. Content itself never scales.
 */
export default function Section({
  id,
  tone,
  className = "",
  children,
}: {
  id: string;
  tone: Tone;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress: entering } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const { scrollYProgress: leaving } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const inIn = useTransform(entering, [0, 1], [SIDE_INSET, 0]);
  const inOut = useTransform(leaving, [0, 1], [0, SIDE_INSET]);
  const side = useTransform([inIn, inOut], ([a, b]: number[]) => Math.max(a, b));
  const radiusTop = useTransform(entering, [0, 1], [CORNER, 0]);
  const radiusBottom = useTransform(leaving, [0, 1], [0, CORNER]);

  const clipPath = useMotionTemplate`inset(0% ${side}% 0% ${side}% round ${radiusTop}px ${radiusTop}px ${radiusBottom}px ${radiusBottom}px)`;

  return (
    <section
      ref={ref}
      id={id}
      data-section={id}
      data-tone={tone}
      className={`tone-${tone} relative isolate text-fg ${className}`}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 bg-bg"
        style={tone === "paper" ? { clipPath } : undefined}
      />
      {children}
    </section>
  );
}
