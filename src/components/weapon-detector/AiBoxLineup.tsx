import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import type { ImageKey } from "@/content/images";
import { aiBox } from "@/content/weaponDetector";

const boxImages: ImageKey[] = ["aiBoxStarter", "aiBoxPro"];

export default function AiBoxLineup() {
  return (
    <section className="py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Hardware"
          title={aiBox.title}
          lead={aiBox.lead}
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {aiBox.models.map((m, i) => (
            <div
              key={m.name}
              className="card border border-white/10 bg-gradient-to-b from-navy-800 to-navy-900 p-8 transition hover:border-accent/50 hover:shadow-[0_0_44px_-14px_rgb(45_212_255/0.55)]"
            >
              <SiteImage
                name={boxImages[i]}
                aspect="aspect-[16/9]"
                className="mb-6"
                sizes="(min-width: 768px) 30vw, 90vw"
              />
              <span className="badge badge-primary badge-soft self-start font-semibold uppercase tracking-wider">
                {m.badge}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">{m.name}</h3>
              <p className="mt-2 text-3xl font-bold text-accent">{m.capacity}</p>
              <p className="mt-4 text-foreground/80">{m.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-foreground/60">
          {aiBox.note}
        </p>
        <div className="mt-4 text-center">
          <Button href="/services/ai-box" variant="ghost" arrow>
            Explore the AI Box
          </Button>
        </div>
      </Container>
    </section>
  );
}
