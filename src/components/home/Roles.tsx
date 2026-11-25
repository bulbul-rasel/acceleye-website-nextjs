import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import type { ImageKey } from "@/content/images";
import { roles } from "@/content/home";

const roleImages: ImageKey[] = ["roleSecurity", "roleAdmin", "roleTeacher", "roleParent"];

export default function Roles() {
  return (
    <section className="border-y border-white/10 bg-navy-900/50 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="AI-human collaboration"
          title="Built for everyone who keeps people safe"
          lead="Continuous video analysis detects weapons, violence and intruders, so your people can focus on what only people can do."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r, i) => (
            <div
              key={r.role}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-navy-800 to-navy-900 p-7"
            >
              <SiteImage
                name={roleImages[i]}
                aspect="aspect-square"
                className="mb-6"
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
              />
              <h3 className="text-xl font-semibold text-accent">{r.role}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
