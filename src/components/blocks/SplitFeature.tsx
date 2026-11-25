import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

// Text on one side, a visual on the other. Flip with `reverse`.
export default function SplitFeature({
  eyebrow,
  title,
  lead,
  bullets,
  badges,
  cta,
  visual,
  reverse = false,
  tinted = false,
  id,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  bullets?: string[];
  badges?: string[];
  cta?: { label: string; href: string };
  visual?: ReactNode;
  reverse?: boolean;
  tinted?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 lg:py-32 ${
        tinted ? "border-y border-white/10 bg-navy-900/50" : ""
      }`}
    >
      <Container className={`grid items-center gap-14 lg:gap-20 ${visual ? "lg:grid-cols-2" : "max-w-4xl"}`}>
        <div className={reverse ? "lg:order-2" : ""}>
          <SectionHeading align="left" eyebrow={eyebrow} title={title} lead={lead} />
          {bullets && (
            <ul className="mt-8 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-lg text-foreground/90">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          )}
          {badges && (
            <div className="mt-8 flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <span
                  key={b}
                  className="badge badge-lg badge-outline badge-primary font-medium"
                >
                  {b}
                </span>
              ))}
            </div>
          )}
          {cta && (
            <div className="mt-9">
              <Button href={cta.href} arrow>
                {cta.label}
              </Button>
            </div>
          )}
        </div>
        {visual && <div className={reverse ? "lg:order-1" : ""}>{visual}</div>}
      </Container>
    </section>
  );
}
