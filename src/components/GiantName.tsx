"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { EASE } from "@/lib/ui";

const WORD_CLASS =
  "block font-semibold leading-[0.8] tracking-[-0.05em] whitespace-nowrap";

// Sized so the word always fits the page container (about 3.4em wide).
const WORD_SIZE = "clamp(4rem, min(calc(27vw - 1rem), 19.5rem), 19.5rem)";

const CLOSED = "inset(100% 0% 0% 0%)";
const OPEN = "inset(0% 0% 0% 0%)";

// A dim word that fills with light from the bottom once it comes into view.
// (Driven by visibility rather than scroll progress, so it also opens when
// the page is jumped straight to the end.)
export default function GiantName() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} aria-hidden className="relative select-none pb-[0.08em]">
      <span
        style={{ fontSize: WORD_SIZE }}
        className={`${WORD_CLASS} text-fg/[0.08]`}
      >
        SOLMAZ
      </span>
      <motion.span
        initial={{ clipPath: CLOSED }}
        animate={{ clipPath: inView || reduce ? OPEN : CLOSED }}
        transition={{ duration: reduce ? 0 : 1.4, ease: EASE }}
        style={{ fontSize: WORD_SIZE }}
        className={`${WORD_CLASS} absolute inset-x-0 top-0`}
      >
        SOLMAZ
      </motion.span>
    </div>
  );
}
