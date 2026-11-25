import type { Metadata } from "next";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import Container from "@/components/ui/Container";
import Icon, { type IconName } from "@/components/ui/Icon";
import ContactSection from "@/components/sections/ContactSection";
import { contact } from "@/content/company";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Talk to an AccelEye safety specialist. Call +1 (844) 755-4837 or email support@accelx.net. We usually reply within 48 hours.",
};

const cards: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "phone", label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: "mail", label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: "pin", label: "Visit", value: contact.address },
  { icon: "pulse", label: "Available", value: contact.hours },
];

export default function ContactPage() {
  const map = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;
  return (
    <>
      <HeroBackdrop>
        <Container className="relative py-20 text-center lg:py-28">
          <p className="mb-6 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-accent">
            Contact us
          </p>
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            We always send a <span className="text-gradient">quick response</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-foreground/80">
            Providing AI detection systems that make life easier and safer. Tell
            us what you need and a safety specialist will get back to you,
            usually within 48 hours.
          </p>

          <div className="mx-auto mt-14 grid max-w-5xl gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-foreground/60">
                    {c.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">{c.value}</p>
                </>
              );
              const cls =
                "rounded-3xl border border-white/10 bg-navy-900/80 p-6 transition hover:border-accent/50";
              return c.href ? (
                <a key={c.label} href={c.href} className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={c.label} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
        </Container>
      </HeroBackdrop>

      <ContactSection id="contact" title="Send us a message" />

      <section className="border-t border-white/10 py-20 lg:py-28">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-navy-900">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4">
              <div>
                <p className="text-lg font-bold text-white">{contact.company}</p>
                <p className="text-base text-foreground/70">{contact.address}</p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-accent hover:underline"
              >
                Open in Google Maps ↗
              </a>
            </div>
            <iframe
              title="Map of AccelEye in San Jose, California"
              src={map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[24rem] w-full border-0 grayscale invert-[0.92] hue-rotate-180"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
