"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import type { IconType } from "react-icons";
import { SiSolidity, SiStellar } from "react-icons/si";
import { usePrefersReducedMotion } from "@/lib/motion";
import { CONTAINER, EASE } from "@/lib/ui";

type Logo = { src: string; width: number; height: number };

type Item = {
  key: string;
  name: string;
  role: string;
  note?: string;
  // Entries with an official wordmark show it as the title.
  logo?: Logo;
  // Entries without one get a typeset title and a watermark glyph.
  Icon?: IconType;
};

// Order is priority: Team1 Turkiye leads, Stellar comes last.
const ITEMS: Item[] = [
  {
    key: "team1",
    name: "Team1 Turkiye",
    role: "Collaborator",
    logo: { src: "/logos/team1-turkiye.png", width: 2000, height: 298 },
  },
  {
    key: "avalanche",
    name: "Avalanche",
    role: "Building on the C-Chain",
    logo: { src: "/logos/avalanche.png", width: 2000, height: 295 },
  },
  { key: "solidity", name: "Solidity", role: "Smart contracts", Icon: SiSolidity },
  { key: "stellar", name: "Stellar", role: "Ambassador", note: "New", Icon: SiStellar },
];

const NAME_CLASS =
  "text-[clamp(3rem,11vw,10rem)] font-semibold leading-[0.92] tracking-[-0.04em]";

function Title({ item }: { item: Item }) {
  if (item.logo) {
    return (
      <Image
        src={item.logo.src}
        alt={item.name}
        width={item.logo.width}
        height={item.logo.height}
        loading="eager"
        sizes="(min-width: 1100px) 62rem, 88vw"
        className="h-auto w-[min(88vw,62rem)]"
      />
    );
  }
  return <>{item.name}</>;
}

/**
 * The section pins to the viewport and scroll progress walks through the
 * entries. Progress decides the entry; the entry swaps with a mask roll.
 */
export default function Web3() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(ITEMS.length - 1, Math.max(0, Math.floor(v * ITEMS.length)));
    setIndex((prev) => (prev === next ? prev : next));
  });

  const item = ITEMS[index];

  if (reduce) {
    return (
      <div ref={ref} className={`${CONTAINER} py-28 sm:py-40`}>
        <h2 className="font-mono text-sm text-muted">Web3</h2>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {ITEMS.map((entry) => (
            <li key={entry.key} className="py-8">
              <h3 className={entry.logo ? "" : NAME_CLASS}>
                <Title item={entry} />
              </h3>
              <p className="mt-4 font-serif text-2xl italic">{entry.role}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div ref={ref} className="h-[360dvh]">
      <div className="sticky top-0 flex h-[100dvh] flex-col justify-between overflow-hidden py-24">
        <div className={CONTAINER}>
          <h2 className="font-mono text-sm text-muted">Web3</h2>
        </div>

        <div className={`${CONTAINER} relative`}>
          <AnimatePresence mode="wait">
            {item.Icon && (
              <motion.div
                key={`glyph-${item.key}`}
                aria-hidden
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-fg/[0.08] sm:right-10"
              >
                <item.Icon className="size-[34vh] max-w-[70vw]" />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div key={item.key} className="relative">
              <div className="overflow-hidden pb-[0.08em]">
                <motion.h3
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-105%" }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className={item.logo ? "" : NAME_CLASS}
                >
                  <Title item={item} />
                </motion.h3>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
                className="mt-8 font-serif text-2xl italic sm:text-4xl"
              >
                {item.role}
                {item.note && (
                  <span className="ml-4 align-middle font-mono text-sm not-italic text-accent">
                    {item.note}
                  </span>
                )}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={`${CONTAINER} flex gap-3`}>
          {ITEMS.map((entry, i) => (
            <div key={entry.key} className="flex-1">
              <span
                className={`block h-px transition-colors duration-500 ${
                  i <= index ? "bg-accent" : "bg-line"
                }`}
              />
              <span
                className={`mt-3 hidden font-mono text-xs transition-colors duration-500 sm:block ${
                  i === index ? "text-fg" : "text-muted"
                }`}
              >
                {entry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
