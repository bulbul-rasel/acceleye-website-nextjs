import type { ReactNode } from "react";

// The grid + glow background from the first home hero. Reuse on every page hero.
export default function HeroBackdrop({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden border-b border-white/10 ${className}`}
    >
      <div
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 top-20 h-[360px] w-[360px] rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />
      {children}
    </section>
  );
}
