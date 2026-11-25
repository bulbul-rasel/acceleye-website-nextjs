import Link from "next/link";
import Container from "@/components/ui/Container";
import Icon, { type IconName } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeatured, postHref } from "@/lib/posts";

const iconFor = (category: string): IconName =>
  /company/i.test(category) ? "shield" : /integration/i.test(category) ? "layers" : /case/i.test(category) ? "eye" : "users";

// Highlights news and blog posts marked `featured: true` (achievements, certifications, partnerships).
export default function Achievements({
  eyebrow = "Achievements & partnerships",
  title = "Milestones that earn your trust",
  lead = "Certifications, contracts, integrations and real-world results from AccelEye.",
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
}) {
  const items = getFeatured(5);
  if (items.length === 0) return null;
  return (
    <section id="achievements" className="relative scroll-mt-24 overflow-hidden border-y border-accent/30 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((p, i) => (
            <Link
              key={p.kind + p.slug}
              href={postHref(p)}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-accent/30 bg-navy-950/70 p-8 shadow-[0_0_44px_-18px_rgb(45_212_255/0.7)] transition hover:-translate-y-1 hover:border-accent ${
                i === 0 ? "lg:col-span-2 lg:row-span-1 lg:p-10" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/15 text-accent ring-1 ring-accent/40">
                  <Icon name={iconFor(p.category)} className="h-7 w-7" />
                </span>
                <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  {p.category}
                </span>
              </div>
              <h3 className={`mt-6 font-extrabold leading-snug text-white group-hover:text-accent ${i === 0 ? "text-3xl lg:text-4xl" : "text-xl"}`}>{p.title}</h3>
              <p className="mt-3 flex-1 text-lg leading-relaxed text-foreground/75">{p.excerpt}</p>
              <span className="mt-6 text-lg font-semibold text-accent">
                {[p.displayDate, p.kind === "blog" ? "Blog" : "News"].filter(Boolean).join(" · ")} · Read more →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
