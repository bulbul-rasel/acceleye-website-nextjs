import { partners } from "@/content/shared";
import { partnerLogo } from "@/lib/imageFiles";
import type { Metadata } from "next";
import SiteImage from "@/components/ui/SiteImage";
import Achievements from "@/components/sections/Achievements";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import Showcase from "@/components/blocks/Showcase";
import ProcessSteps from "@/components/blocks/ProcessSteps";
import Button from "@/components/ui/Button";
import OurPartners from "@/components/sections/OurPartners";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";
import { partnerPage } from "@/content/company";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "AccelEye integrates with top technology providers so AI weapon detection works with your existing security infrastructure. Apply to become a partner.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner with us"
        title="Seamless integration with your current"
        highlight="security infrastructure"
        lead="AccelEye integrates with top technology providers to offer comprehensive AI-powered threat detection that seamlessly works with your existing systems."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Become a partner", href: "/partners/register" }}
        visual={<SiteImage name="skyward" aspect="aspect-[4/3]" glow priority sizes="(min-width: 1024px) 45vw, 95vw" />}
      />

      <FeatureGrid
        eyebrow="Built for integration"
        title="AccelEye partnerships deliver greater value through seamless integration and joint innovation"
        lead="Working together with camera, video management and school-software providers so customers get more from the systems they already use."
        items={partnerPage.benefits}
      />

      <section className="border-y border-white/10 bg-navy-900/50 py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Our ecosystem"
            title="Technology we integrate with"
            lead="Camera, video management, school-software and public-sector partners working with AccelEye."
          />
          <div className="mx-auto mt-14 grid max-w-6xl gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {partners.map((p) => {
              const logo = partnerLogo(p.slug);
              if (!logo) return null;
              const img = (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logo} alt={`${p.name} logo`} className="max-h-16 w-auto max-w-[12rem] object-contain" />
              );
              const cls = "flex h-32 items-center justify-center rounded-3xl border border-white/10 bg-white p-6 transition hover:-translate-y-1 hover:border-accent";
              return p.url ? (
                <a key={p.slug} href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} (opens in a new tab)`} className={cls}>
                  {img}
                </a>
              ) : (
                <div key={p.slug} className={cls}>
                  {img}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Showcase
        eyebrow="How integration works"
        title="Our streamlined process simplifies integrating AccelEye with your existing technology stack"
        lead="A clear, step-by-step path from first conversation to a working integration."
        mode="accordion"
        items={partnerPage.integration.map((st, i) => ({ icon: (["eye", "bolt", "shield"] as const)[i % 3], title: st.title, kicker: `Step ${i + 1}`, body: st.body }))}
      />

      <ProcessSteps
        eyebrow="How to join"
        title="Step 1: Submit application. Step 2: Meet & collaborate."
        lead="Tell us about your product and we will work out the best way to build something together."
        steps={partnerPage.join}
        footnote="Applicants can expect a response within six weeks."
      />
      <section className="pb-24 text-center">
        <Button href="/partners/register" arrow className="px-8 py-4 text-lg">
          Open the partner application
        </Button>
      </section>

      <OurPartners />
      <Achievements eyebrow="Partnership news" title="Our latest partnerships and achievements" />
      <CtaBand
        title="Let’s build something safer."
        lead="Questions about a partnership or integration? Call or email us."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
      <ContactSection title="Talk to our partner team" />
    </>
  );
}
