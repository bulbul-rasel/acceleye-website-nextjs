import type { ReactNode } from "react";
import Container from "./Container";
import Button from "./Button";
import HeroBackdrop from "./HeroBackdrop";

type Cta = { label: string; href: string };

// Shared hero for every inner page: backdrop, big headline, CTAs, visual on the right.
export default function PageHero({
  eyebrow,
  title,
  highlight,
  tagline,
  lead,
  primary,
  secondary,
  visual,
  stats,
}: {
  eyebrow: string;
  title: string;
  /** Last words of the title shown with the cyan gradient */
  highlight?: string;
  tagline?: string;
  lead: string;
  primary: Cta;
  secondary?: Cta;
  visual?: ReactNode;
  stats?: { value: string; label: string }[];
}) {
  return (
    <HeroBackdrop>
      <Container
        className={`relative grid items-center gap-14 py-20 lg:py-28 ${
          visual ? "lg:grid-cols-[1.05fr_1fr]" : ""
        }`}
      >
        <div>
          <p className="mb-6 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-accent">
            {eyebrow}
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-gradient">{highlight}</span>
              </>
            )}
          </h1>
          {tagline && (
            <p className="mt-6 text-2xl font-semibold text-accent sm:text-3xl">
              {tagline}
            </p>
          )}
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground/80">
            {lead}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href={primary.href} arrow className="px-8 py-4 text-lg">
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="ghost" arrow className="text-lg">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
        {visual}
      </Container>

      {stats && (
        <div className="relative border-t border-white/10 bg-navy-950/60">
          <Container>
            <dl
              className={`grid grid-cols-2 divide-x divide-white/10 ${
                stats.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
              }`}
            >
              {stats.map((s) => (
                <div key={s.label} className="px-4 py-9 text-center sm:px-8">
                  <dd className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    {s.value}
                  </dd>
                  <dt className="mt-2 text-sm uppercase tracking-wider text-foreground/60">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      )}
    </HeroBackdrop>
  );
}
