import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import type { ImageKey } from "@/content/images";
import { whyAi } from "@/content/home";

const cardImages: ImageKey[] = ["aiUnderstandsSafety", "collaboration", "aiReducesCost"];

export default function WhyAi() {
  return (
    <section id="why-ai" className="scroll-mt-24 border-y border-white/10 bg-navy-900/50 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="AI matters in school safety"
          title="Why AI matters in school safety"
          lead="A social enterprise on a mission to reverse negative safety trends in schools, cities, churches and other places people gather."
        />
        <SiteImage
          name="understandSafety"
          aspect="aspect-[21/9]"
          className="mx-auto mt-14 max-w-5xl"
          sizes="(min-width: 1024px) 64rem, 95vw"
          glow
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whyAi.map((w, i) => (
            <div
              key={w.title}
              className="group rounded-2xl border border-white/10 bg-navy-900 p-8 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_44px_-14px_rgb(45_212_255/0.55)]"
            >
              <SiteImage
                name={cardImages[i]}
                aspect="aspect-[16/10]"
                className="mb-7"
                sizes="(min-width: 768px) 30vw, 90vw"
              />
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-navy-950">
                <Icon name={w.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {w.title}
              </h3>
              <p className="mt-3 leading-relaxed text-foreground/80">
                {w.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
