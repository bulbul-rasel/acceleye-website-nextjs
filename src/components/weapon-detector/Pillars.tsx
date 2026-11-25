import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import type { ImageKey } from "@/content/images";
import { capabilities, pillars } from "@/content/weaponDetector";

const pillarImages: ImageKey[] = ["weapon", "gunshot", "humanVerification"];
const capabilityImages: ImageKey[] = ["violence", "intruder", "roleSafety"];

export default function Pillars() {
  return (
    <section className="py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Core technology"
          title="Two senses. One verified answer."
          lead="Detection is only useful when it is fast and right. AccelEye combines sight, sound and human judgment."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-navy-800 to-navy-900 p-8"
            >
              <SiteImage
                name={pillarImages[i]}
                aspect="aspect-[16/10]"
                className="mb-7"
                sizes="(min-width: 1024px) 30vw, 90vw"
              />
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-white">{p.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-foreground/80">
                {p.body}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-base text-foreground/90">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/10 bg-navy-900 p-5"
            >
              <SiteImage
                name={capabilityImages[i]}
                aspect="aspect-[16/9]"
                sizes="(min-width: 768px) 30vw, 90vw"
              />
              <div className="mt-5 flex items-start gap-4 px-1 pb-1">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary/15 text-secondary">
                  <Icon name={c.icon} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                  <p className="mt-1 text-base text-foreground/80">{c.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
