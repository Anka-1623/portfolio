"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { PiArrowRight } from "react-icons/pi";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  const enter = (delay: number) => ({
    initial: reduce ? (false as const) : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pb-16 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 lg:left-[56%] lg:opacity-100">
        <HeroScene />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-10">
        <motion.p {...enter(0)} className="font-mono text-sm text-muted">
          Emirhan Solmaz
        </motion.p>

        <motion.h1
          {...enter(0.08)}
          className="mt-5 max-w-[52rem] text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]"
        >
          I build the whole product,
          <span className="block text-muted">not just the interface.</span>
        </motion.h1>

        <motion.p
          {...enter(0.18)}
          className="mt-6 max-w-md text-base leading-7 text-muted sm:text-lg"
        >
          Web apps from schema to deploy, and Solidity contracts on Avalanche.
          Stellar Ambassador.
        </motion.p>

        <motion.div
          {...enter(0.28)}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-px active:scale-[0.98]"
          >
            View projects
            <PiArrowRight aria-hidden className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent active:scale-[0.98]"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
