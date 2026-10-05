"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

function Word({
  children,
  progress,
  range,
  emphasis,
  still,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  emphasis: boolean;
  still: boolean;
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <span className="mr-[0.24em] inline-block">
      <motion.span
        style={still ? undefined : { opacity }}
        className={emphasis ? "italic text-accent" : undefined}
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * A statement that is read in as you scroll: each word fades up in sequence
 * with scroll progress, so the pace of reading is the pace of scrolling.
 */
export default function WordReveal({
  text,
  emphasis = [],
  className = "",
}: {
  text: string;
  emphasis?: string[];
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.5"],
  });

  const words = text.split(" ");
  const strip = (w: string) => w.replace(/[^\p{L}\p{N}]/gu, "");

  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = Math.min(1, start + 1.5 / words.length);
          return (
            <Word
              key={`${word}-${i}`}
              progress={scrollYProgress}
              range={[start, end]}
              emphasis={emphasis.includes(strip(word))}
              still={reduce}
            >
              {word}
            </Word>
          );
        })}
      </span>
    </p>
  );
}
