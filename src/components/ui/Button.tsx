import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "./Icon";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-navy-950 hover:bg-white shadow-[0_0_30px_-6px_rgb(45_212_255/0.7)]",
  secondary:
    "border border-white/20 text-white hover:border-accent hover:text-accent",
  ghost: "text-accent hover:text-white px-0",
};

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  const padding = variant === "ghost" ? "" : "px-6 py-3";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full text-base font-semibold transition ${padding} ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <Icon
          name="arrow"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
