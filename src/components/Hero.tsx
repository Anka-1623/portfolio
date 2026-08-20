"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="pointer-events-none absolute inset-0 -z-0 opacity-80">
        <HeroScene />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, transparent 0%, var(--background) 72%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[11px] tracking-[0.15em] text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            AVAILABLE FOR NEW PROJECTS
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-mono text-xs tracking-[0.25em] text-accent"
        >
          FULL-STACK DEVELOPER — ENTREPRENEUR
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-foreground sm:text-7xl lg:text-8xl"
        >
          I build the whole
          <br />
          product, not just
          <br />
          <span className="text-glow bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            the interface.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg"
        >
          From database schema to production deploy — React and Next.js on
          the front, FastAPI and Flask underneath, Supabase holding it
          together. Currently building{" "}
          <span className="text-foreground">EduTask</span> and the ventures
          after it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background shadow-[0_0_30px_-8px_var(--accent)] transition-transform hover:scale-[1.03]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted-2">
          SCROLL
        </span>
        <span className="h-8 w-px animate-pulse bg-gradient-to-b from-muted-2 to-transparent" />
      </motion.div>
    </section>
  );
}
