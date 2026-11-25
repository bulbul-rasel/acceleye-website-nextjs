import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import type { ImageKey } from "@/content/images";
import { hasImage } from "@/lib/imageFiles";

// Numbered steps joined by a connector line on desktop.
export default function ProcessSteps({
  eyebrow,
  title,
  lead,
  steps,
  tinted = true,
  footnote,
  image,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  steps: { title: string; body: string }[];
  tinted?: boolean;
  footnote?: string;
  image?: ImageKey;
}) {
  const grid =
    steps.length === 3
      ? "lg:grid-cols-3"
      : steps.length === 5
        ? "lg:grid-cols-5"
        : "lg:grid-cols-4";
  return (
    <section
      className={`py-24 lg:py-32 ${
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
        <ol className={`relative mt-16 grid gap-6 sm:grid-cols-2 ${grid}`}>
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-3xl border border-white/10 bg-navy-900 p-8"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-2xl font-extrabold text-navy-950 shadow-[0_0_30px_-6px_rgb(45_212_255/0.7)]">
                {i + 1}
              </span>
              <h3 className="mt-6 text-2xl font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-foreground/80">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
        {footnote && (
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg text-foreground/80">
            {footnote}
          </p>
        )}
      </Container>
    </section>
  );
}
