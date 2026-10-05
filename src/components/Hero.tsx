"use client";

import dynamic from "next/dynamic";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { PiArrowRight } from "react-icons/pi";
import { CONTAINER, EASE } from "@/lib/ui";
import Magnetic from "./Magnetic";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const LINES = ["EMIRHAN", "SOLMAZ"];
const REST_POSITION = 0.78;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The name is one variable font. The pointer sets its weight, and scrolling
  // away narrows it, so the type reacts to the reader instead of sitting still.
  const pointer = useMotionValue(REST_POSITION);
  const spring = useSpring(pointer, { stiffness: 110, damping: 20 });
  const weight = useTransform(spring, [0, 1], [320, 820]);
  const width = useTransform(scrollYProgress, [0, 1], [100, 76]);
  const settings = useMotionTemplate`"wght" ${weight}, "wdth" ${width}, "opsz" 96`;
  const nameY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const nameOpacity = useTransform(scrollYProgress, [0.15, 0.6], [1, 0]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 140]);

  const fadeUp = (delay: number) => ({
    initial: reduce ? (false as const) : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        if (e.pointerType === "touch") return;
        pointer.set(e.clientX / window.innerWidth);
      }}
      onPointerLeave={() => pointer.set(REST_POSITION)}
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-x-clip pb-10 pt-28"
    >
      <motion.div
        aria-hidden
        style={{ y: sceneY }}
        className="pointer-events-none absolute right-[-8%] top-[6%] h-[62%] w-[60%] opacity-70 max-sm:opacity-40"
      >
        <HeroScene progress={scrollYProgress} />
      </motion.div>

      <div className={`${CONTAINER} relative`}>
        <motion.div style={{ y: nameY, opacity: nameOpacity }}>
          <motion.h1
            aria-label="Emirhan Solmaz"
            style={{ fontVariationSettings: settings }}
            className="text-[21vw] leading-[0.82] tracking-[-0.04em] sm:text-[clamp(3.6rem,17.5vw,17rem)]"
          >
            {LINES.map((line, lineIndex) => (
              <span
                key={line}
                className="-my-[0.07em] block overflow-hidden py-[0.07em]"
              >
                {[...line].map((char, i) => (
                  <motion.span
                    key={i}
                    aria-hidden
                    className="inline-block"
                    initial={reduce ? false : { y: "108%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.95,
                      delay: 0.1 + (lineIndex * 7 + i) * 0.045,
                      ease: EASE,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
        </motion.div>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            {...fadeUp(0.8)}
            className="max-w-sm font-serif text-xl leading-snug sm:text-2xl"
          >
            Solidity on Avalanche. Full products, database to deploy. Stellar
            Ambassador.
          </motion.p>

          <motion.div {...fadeUp(0.95)} className="flex flex-wrap gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-ink"
              >
                View projects
                <PiArrowRight aria-hidden className="size-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex rounded-lg border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-fg"
              >
                Contact
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
