"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

// Lenis honors prefers-reduced-motion on its own (smoothing is disabled).
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, anchors: true }}>
      {children}
    </ReactLenis>
  );
}
