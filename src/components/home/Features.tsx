import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import { features } from "@/content/home";

export default function Features() {
  return (
    <section className="py-24 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <SectionHeading
            align="left"
            eyebrow="We understand your pain points"
            title="Comprehensive safety, optimized for you"
            lead="Detect weapons, respond to threats and spot early warning signs of harm, without stitching together separate tools."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/services/ai-weapon-detector" arrow>
              Explore AI Weapon Detection
            </Button>
            <Button href="/unified-ai-safety" variant="secondary">
              Unified AI Safety
            </Button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl border border-white/10 bg-navy-900 p-7 transition hover:border-accent/50 hover:shadow-[0_0_44px_-14px_rgb(45_212_255/0.55)]"
            >
              {f.image && <SiteImage name={f.image} aspect="aspect-[16/10]" className="mb-6" sizes="(min-width: 1024px) 30vw, 90vw" />}
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                <Icon name={f.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-foreground/80">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
