import Impact from "@/components/home/Impact";
import OurPartners from "@/components/sections/OurPartners";
import CustomerFeedback from "@/components/sections/CustomerFeedback";
import LatestBlog from "@/components/sections/LatestBlog";
import ContactSection from "@/components/sections/ContactSection";
import CtaBand from "@/components/sections/CtaBand";

// The closing run shared by the service pages, in the same order as acceleye.com:
// call-to-action, latest blog, stats, partners, testimonials, contact.
export default function PageTail({
  ctaTitle = "Call us to discuss your security and integration requirements",
  ctaLead = "Call to talk through your security and integration needs, or email for a free estimate. We usually reply within 48 hours.",
}: {
  ctaTitle?: string;
  ctaLead?: string;
}) {
  return (
    <>
      <CtaBand title={ctaTitle} lead={ctaLead} primaryLabel="Let us show you a demo" />
      <LatestBlog />
      <Impact />
      <OurPartners />
      <CustomerFeedback eyebrow="What they say" title="Services feedback" />
      <ContactSection />
    </>
  );
}
