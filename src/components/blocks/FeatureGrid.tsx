import Container from "@/components/ui/Container";
import Icon, { type IconName } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import type { ImageKey } from "@/content/images";
import { hasImage } from "@/lib/imageFiles";

export type FeatureItem = {
  icon: IconName;
  title: string;
  body: string;
  image?: ImageKey;
};

const cols = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

// Reusable icon-card grid with a section heading. Use on any page.
export default function FeatureGrid({
  eyebrow,
  title,
  lead,
  items,
  columns = 3,
  tinted = false,
  id,
  image,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  tinted?: boolean;
  id?: string;
  image?: ImageKey;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 lg:py-32 ${
        tinted ? "border-y border-white/10 bg-navy-900/50" : ""
      }`}
    >
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        {image && hasImage(image) && (
          <SiteImage
            name={image}
            aspect="aspect-[21/9]"
            className="mx-auto mt-14 max-w-5xl"
            sizes="(min-width: 1024px) 64rem, 95vw"
            glow
          />
        )}
        <div className={`mt-16 grid gap-6 ${cols[columns]}`}>
          {items.map((it) => (
            <article
              key={it.title}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-navy-800 to-navy-900 p-8 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_44px_-14px_rgb(45_212_255/0.55)]"
            >
              {it.image && hasImage(it.image) && (
                <SiteImage
                  name={it.image}
                  aspect="aspect-[16/10]"
                  className="mb-6"
                  sizes="(min-width: 1024px) 28vw, 90vw"
                />
              )}
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-navy-950">
                <Icon name={it.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-white">{it.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-foreground/80">
                {it.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
