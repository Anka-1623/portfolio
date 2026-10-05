"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { useRef } from "react";
import type { IconType } from "react-icons";
import {
  SiFastapi,
  SiFlask,
  SiGooglegemini,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSolidity,
  SiStellar,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import AvalancheIcon from "./AvalancheIcon";

const ITEMS: { label: string; Icon: IconType }[] = [
  { label: "Solidity", Icon: SiSolidity },
  { label: "Avalanche", Icon: AvalancheIcon },
  { label: "Stellar", Icon: SiStellar },
  { label: "React", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "FastAPI", Icon: SiFastapi },
  { label: "Flask", Icon: SiFlask },
  { label: "Supabase", Icon: SiSupabase },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "Tailwind CSS", Icon: SiTailwindcss },
  { label: "Gemini API", Icon: SiGooglegemini },
  { label: "Vercel", Icon: SiVercel },
];

const BASE_SPEED = -1.4; // percent of the track per second

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 gap-16 pr-16">
      {ITEMS.map(({ label, Icon }) => (
        <span
          key={label}
          className="flex items-center gap-4 whitespace-nowrap text-fg/70 transition-colors hover:text-fg"
        >
          <Icon aria-hidden className="size-9 shrink-0" />
          <span className="text-3xl font-semibold tracking-tight">{label}</span>
        </span>
      ))}
    </div>
  );
}

/**
 * The strip drifts on its own and speeds up (or reverses) with the scroll
 * velocity, so it answers the reader's own movement.
 */
export default function Marquee() {
  const reduce = useReducedMotion();
  const offset = useMotionValue(0);
  const direction = useRef(1);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const boost = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(offset, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const b = boost.get();
    if (b < 0) direction.current = -1;
    else if (b > 0) direction.current = 1;
    let move = direction.current * BASE_SPEED * (delta / 1000);
    move += direction.current * move * b;
    offset.set(offset.get() + move);
  });

  return (
    <div className="relative overflow-hidden border-y border-line py-10">
      <motion.div style={{ x }} className="flex w-max">
        <Row />
        <Row hidden />
      </motion.div>
    </div>
  );
}
