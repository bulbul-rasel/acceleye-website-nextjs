import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import { hero } from "@/content/home";

export default function Hero() {
  return (
    <HeroBackdrop>
      <Container className="relative grid items-center gap-14 py-20 lg:py-32">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-accent">
            {hero.eyebrow}
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            AI-enhanced safety and wellbeing for{" "}
            <span className="text-gradient">students, staff and communities.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground/80">
            {hero.lead}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href={hero.primary.href} arrow>
              {hero.primary.label}
            </Button>
            <Button href={hero.secondary.href} variant="ghost" arrow>
              {hero.secondary.label}
            </Button>
          </div>
        </div>

      </Container>

      {/* stats */}
      <div className="relative border-t border-white/10 bg-navy-950/60">
        <Container>
          <dl className="grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
            {hero.stats.map((s) => (
              <div key={s.label} className="px-4 py-8 text-center sm:px-8">
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
    </HeroBackdrop>
  );
}
