"use client";

import Marquee from "react-fast-marquee";
import type { ReactNode } from "react";

// Thin client wrapper so server components can render a scrolling ticker.
export default function MarqueeRow({
  children,
  speed = 40,
  direction = "left",
}: {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
}) {
  return (
    <Marquee
      speed={speed}
      direction={direction}
      pauseOnHover
      gradient={false}
      autoFill
    >
      {children}
    </Marquee>
  );
}
