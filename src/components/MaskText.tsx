"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { EASE } from "@/lib/ui";

// Words rise out of a mask when the heading scrolls into view.
export default function MaskText({
  text,
  as = "h2",
  className = "",
  delay = 0,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const Tag = as as ElementType<{
    className?: string;
    "aria-label"?: string;
    children?: ReactNode;
  }>;

  return (
    <Tag className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="-mb-[0.14em] mr-[0.22em] inline-block overflow-hidden pb-[0.14em] align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: delay + i * 0.06, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
