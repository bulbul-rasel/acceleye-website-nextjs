import Container from "@/components/ui/Container";
import MarqueeRow from "@/components/ui/MarqueeRow";
import SectionHeading from "@/components/ui/SectionHeading";
import { partners } from "@/content/shared";
import { partnerLogo } from "@/lib/imageFiles";

export default function OurPartners({
  title = "Our partners",
  lead = "AccelEye works with leading camera, video management and school-software companies, plus public-sector purchasing partners, so you can add AI detection to the systems you already use.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section id="partners" className="relative scroll-mt-24 overflow-hidden border-y border-accent/30 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-950 py-24 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading eyebrow="Trusted integrations" title={title} lead={lead} />
      </Container>
      <div className="relative mt-12">
        <MarqueeRow speed={35}>
          {partners.map((p) => {
            const logo = partnerLogo(p.slug);
            const body = logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logo} alt={`${p.name} logo`} className="max-h-14 w-auto max-w-[11rem] object-contain" />
            ) : (
              <span className="sr-only">{p.name}</span>
            );
            const cls =
              "mx-4 inline-flex h-24 min-w-[10rem] items-center justify-center rounded-2xl border border-accent/40 bg-white px-8 shadow-[0_0_30px_-12px_rgb(45_212_255/0.8)] transition hover:-translate-y-1 hover:border-accent sm:mx-5";
            return p.url ? (
              <a key={p.slug} href={p.url} target="_blank" rel="noopener noreferrer" className={cls} aria-label={`${p.name} (opens in a new tab)`}>
                {body}
              </a>
            ) : (
              <span key={p.slug} className={cls}>
                {body}
              </span>
            );
          })}
        </MarqueeRow>
      </div>
    </section>
  );
}
