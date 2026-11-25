import Container from "@/components/ui/Container";
import Icon, { type IconName } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import type { ImageKey } from "@/content/images";
import { hasImage } from "@/lib/imageFiles";

export type ShowcaseItem = {
  icon: IconName;
  title: string;
  body: string;
  image?: ImageKey;
  kicker?: string;
};

const gridCols = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

// Visual card section in the "Five core values" style: photo or gradient cards, outlined numbers,
// glowing icon badges and hover effects.
// - mode "accordion" (3 to 5 items): a row where the hovered card expands and reveals its text.
// - mode "grid" (any number): cards lift and glow, text always visible.
export default function Showcase({
  eyebrow,
  title,
  lead,
  items,
  mode = "grid",
  columns = 3,
  tinted = false,
  id,
  banner,
  footnote,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  items: ShowcaseItem[];
  mode?: "accordion" | "grid";
  columns?: 2 | 3 | 4;
  tinted?: boolean;
  id?: string;
  banner?: ImageKey;
  footnote?: string;
}) {
  const accordion = mode === "accordion";
  return (
    <section id={id} className={`relative scroll-mt-24 overflow-hidden py-24 lg:py-32 ${tinted ? "border-y border-white/10 bg-navy-900/50" : ""}`}>
      <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-accent/15 blur-3xl" style={{ animation: "cv-float 9s ease-in-out infinite" }} aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" style={{ animation: "cv-float 11s ease-in-out infinite" }} aria-hidden="true" />
      <Container className="relative">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        {banner && hasImage(banner) && (
          <SiteImage name={banner} aspect="aspect-[21/9]" className="mx-auto mt-14 max-w-5xl" sizes="(min-width: 1024px) 64rem, 95vw" glow />
        )}
        <ol
          className={
            accordion
              ? "mt-16 flex flex-col gap-4 lg:h-[34rem] lg:flex-row"
              : `mt-16 grid gap-5 ${gridCols[columns]}`
          }
        >
          {items.map((it, i) => {
            const withImage = !!it.image && hasImage(it.image);
            return (
              <li
                key={it.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 transition-[flex,transform,border-color,box-shadow] duration-500 ease-out hover:border-accent/70 hover:shadow-[0_0_60px_-12px_rgb(45_212_255/0.7)] ${
                  accordion ? "min-h-[22rem] flex-1 lg:min-h-0 lg:hover:flex-[2.6]" : "min-h-[17rem] hover:-translate-y-1.5"
                }`}
              >
                {withImage ? (
                  <SiteImage name={it.image!} background sizes="(min-width: 1024px) 40vw, 95vw" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950">
                    <div className="bg-grid absolute inset-0 opacity-50" />
                    <Icon name={it.icon} className="absolute -right-6 top-1/4 h-56 w-56 text-accent/10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6" />
                    <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
                  </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-t from-navy-950 transition-opacity duration-500 group-hover:from-navy-950/95 ${withImage ? "via-navy-950/55 to-navy-950/10" : "via-navy-950/30 to-transparent"}`} />
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,rgb(45_212_255),transparent,rgb(45_212_255),transparent)] bg-[length:200%_100%] opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ animation: "cv-shine 3s linear infinite" }}
                />
                <span className="pointer-events-none absolute right-5 top-2 select-none text-7xl font-black leading-none text-transparent [-webkit-text-stroke:2px_rgb(255_255_255/0.3)] transition-transform duration-500 group-hover:scale-110">
                  {i + 1}
                </span>
                <div className={`${accordion ? "absolute inset-x-0 bottom-0" : "relative flex h-full flex-col justify-end pt-24"} p-5 lg:p-6`}>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-navy-950 shadow-[0_0_28px_-4px_rgb(45_212_255/0.9)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
                    <Icon name={it.icon} className="h-6 w-6" />
                  </span>
                  {it.kicker && <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">{it.kicker}</p>}
                  <h3 className={`${it.kicker ? "mt-1" : "mt-4"} break-words text-lg font-extrabold leading-tight text-white ${accordion ? "transition-all duration-500 group-hover:lg:text-2xl" : "xl:text-xl"}`}>
                    {it.title}
                  </h3>
                  <p
                    className={`mt-3 text-base leading-relaxed text-foreground/85 ${
                      accordion
                        ? "max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-48 group-hover:opacity-100 max-lg:max-h-48 max-lg:opacity-100"
                        : ""
                    }`}
                  >
                    {it.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
        {footnote && <p className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-foreground/75">{footnote}</p>}
      </Container>
    </section>
  );
}
