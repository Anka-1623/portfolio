"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

export default function SpotlightCard({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(360px circle at ${x}px ${y}px, rgba(244, 243, 240, 0.06), transparent 70%)`;

  function onPointerMove(e: PointerEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  const classes = `group relative block h-full overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-accent/50 ${className}`;

  const spotlightLayer = (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ background: spotlight }}
    />
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onPointerMove={onPointerMove}
        className={classes}
      >
        {spotlightLayer}
        {children}
      </a>
    );
  }

  return (
    <div onPointerMove={onPointerMove} className={classes}>
      {spotlightLayer}
      {children}
    </div>
  );
}
