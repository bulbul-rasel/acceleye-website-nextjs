import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";

export default function CtaBand({
  title = "Let’s save lives.",
  lead = "Camera-based gun and active-shooter detection, human verification, automated mass communication and early response, working together from the first second.",
  primaryLabel = "Let us show you a demo",
  primaryHref = "#contact",
}: {
  title?: string;
  lead?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-24 lg:py-32">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-72 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />

      <Container className="relative text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-foreground/80">
          {lead}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={primaryHref} arrow>
            {primaryLabel}
          </Button>
          <Button href={site.phoneHref} variant="secondary">
            Call {site.phone}
          </Button>
        </div>
        <p className="mt-5 text-base text-foreground/50">
          Or email {site.email} for a free estimate. We usually reply within 48
          hours.
        </p>
      </Container>
    </section>
  );
}
