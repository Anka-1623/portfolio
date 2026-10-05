"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE } from "@/lib/ui";
import type { Tone } from "./Section";
import RollText from "./RollText";

const SECTIONS = [
  { id: "top", label: "Intro" },
  { id: "about", label: "About" },
  { id: "web3", label: "Web3" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "activity", label: "Activity" },
  { id: "contact", label: "Contact" },
];

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#web3", label: "Web3" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

/**
 * Watches which section crosses a band of the viewport. Returns a cleanup.
 * `apply` receives the index and tone of the last visible section in page order.
 */
function observeSections(
  rootMargin: string,
  apply: (index: number, tone: Tone) => void
) {
  const visible = new Set<string>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = (entry.target as HTMLElement).dataset.section;
        if (!id) continue;
        if (entry.isIntersecting) visible.add(id);
        else visible.delete(id);
      }
      let index = -1;
      SECTIONS.forEach((s, i) => {
        if (visible.has(s.id)) index = i;
      });
      if (index < 0) return;
      const el = document.getElementById(SECTIONS[index].id);
      apply(index, el?.dataset.tone === "paper" ? "paper" : "ink");
    },
    { rootMargin }
  );
  document
    .querySelectorAll<HTMLElement>("[data-section]")
    .forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}

/**
 * Fixed navigation plus a "chain" rail: one node per section joined by a line
 * that fills as the reader moves down. The nav takes the tone of the section
 * under the top edge, the rail the tone of the section at mid-screen, because
 * that is what each one actually sits on.
 */
export default function SiteChrome() {
  const [navTone, setNavTone] = useState<Tone>("ink");
  const [rail, setRail] = useState<{ index: number; tone: Tone }>({
    index: 0,
    tone: "ink",
  });
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    const delta = y - (scrollY.getPrevious() ?? 0);
    if (y < 160 || delta < -4) setHidden(false);
    else if (delta > 4) setHidden(true);
  });

  useEffect(() => {
    const stopNav = observeSections("0px 0px -94% 0px", (_, tone) =>
      setNavTone(tone)
    );
    const stopRail = observeSections("-50% 0px -50% 0px", (index, tone) =>
      setRail((prev) =>
        prev.index === index && prev.tone === tone ? prev : { index, tone }
      )
    );
    return () => {
      stopNav();
      stopRail();
    };
  }, []);

  const fill = (rail.index / (SECTIONS.length - 1)) * 100;

  return (
    <>
      <div className={`tone-${navTone} text-fg`}>
        <motion.header
          animate={{ y: hidden ? "-110%" : "0%" }}
          transition={{ duration: 0.45, ease: EASE }}
          className="fixed inset-x-0 top-0 z-50"
        >
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
            <a href="#top" className="group font-mono text-sm tracking-tight">
              <RollText>ES.</RollText>
            </a>
            <div className="flex items-center gap-8">
              <ul className="hidden items-center gap-8 sm:flex">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="group text-sm">
                      <RollText>{link.label}</RollText>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="group rounded-lg border border-line px-4 py-1.5 text-sm transition-colors hover:border-fg"
              >
                <RollText>Contact</RollText>
              </a>
            </div>
          </nav>
        </motion.header>
      </div>

      <div
        aria-label="Page sections"
        className={`tone-${rail.tone} fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 text-fg xl:block`}
      >
        <div className="relative flex h-64 flex-col justify-between">
          <span className="absolute inset-y-0 left-[3.5px] w-px bg-line" />
          <span
            className="absolute left-[3.5px] top-0 w-px bg-accent transition-[height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ height: `${fill}%` }}
          />
          {SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-label={s.label}
              className="group relative flex items-center"
            >
              <span
                className={`relative block size-2 transition-colors duration-500 ${
                  i <= rail.index ? "bg-accent" : "bg-bg ring-1 ring-line"
                }`}
              />
              <span className="pointer-events-none absolute left-5 font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100">
                {s.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
