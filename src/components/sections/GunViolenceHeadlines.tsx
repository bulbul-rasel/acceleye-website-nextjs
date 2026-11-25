import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { headlines } from "@/content/shared";

export default function GunViolenceHeadlines() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-navy-900/50 py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-alert/15 blur-3xl" style={{ animation: "cv-float 9s ease-in-out infinite" }} aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" style={{ animation: "cv-float 11s ease-in-out infinite" }} aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why it matters"
          title="Headlines on gun violence"
          lead="Every one of these stories is a reminder that seconds count. Early detection and fast, verified alerts change outcomes."
        />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {headlines.map((h, i) => (
            <li key={h.href}>
              <a
                href={h.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full min-h-[18rem] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 p-6 transition duration-500 hover:-translate-y-1.5 hover:border-accent/70 hover:shadow-[0_0_60px_-12px_rgb(45_212_255/0.7)]"
              >
                <div className="bg-grid absolute inset-0 opacity-40" />
                <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-alert/25 blur-3xl transition-opacity group-hover:opacity-80" />
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,rgb(45_212_255),transparent,rgb(45_212_255),transparent)] bg-[length:200%_100%] opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ animation: "cv-shine 3s linear infinite" }}
                />
                <span className="pointer-events-none absolute right-5 top-2 select-none text-7xl font-black leading-none text-transparent [-webkit-text-stroke:2px_rgb(255_255_255/0.28)] transition-transform duration-500 group-hover:scale-110">
                  {i + 1}
                </span>
                <span className="relative self-start rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  {h.outlet}
                </span>
                <h3 className="relative mt-4 text-lg font-extrabold leading-snug text-white transition-colors group-hover:text-accent">{h.title}</h3>
                <span className="relative mt-5 inline-flex items-center gap-2 text-base font-semibold text-accent">
                  Read article <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
