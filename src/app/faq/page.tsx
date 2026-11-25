import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FaqList from "@/components/sections/FaqList";
import OurPartners from "@/components/sections/OurPartners";
import ContactSection from "@/components/sections/ContactSection";
import CtaBand from "@/components/sections/CtaBand";
import { faqGroups } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about AccelEye weapon detection, violence detection, fall detection, speed, accuracy, the AI Box and VMS integrations.",
};

// Structured data so search engines can show these as rich FAQ results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked"
        highlight="questions"
        lead="Everything about speed, accuracy, integrations and how AccelEye detects weapons, violence and falls."
        primary={{ label: "Ask a Safety Specialist", href: "#contact" }}
      />
      <FaqList />
      <OurPartners />
      <CtaBand
        title="Still have questions?"
        lead="Our safety specialists are happy to walk you through a live demo and answer anything that isn’t covered here."
        primaryLabel="Talk to a Specialist"
      />
      <ContactSection title="Ask us anything" />
    </>
  );
}
