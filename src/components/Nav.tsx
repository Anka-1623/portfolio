"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#web3", label: "Web3" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 48],
    ["rgba(8, 9, 11, 0)", "rgba(8, 9, 11, 0.8)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 48],
    ["rgba(244, 243, 240, 0)", "rgba(244, 243, 240, 0.09)"]
  );
  const blur = useTransform(scrollY, [0, 48], ["blur(0px)", "blur(12px)"]);

  return (
    <motion.header
      style={{
        backgroundColor: background,
        borderBottomColor: borderColor,
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
      }}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-foreground"
        >
          ES<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 sm:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-lg border border-border px-4 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
