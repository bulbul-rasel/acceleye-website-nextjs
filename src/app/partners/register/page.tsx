import type { Metadata } from "next";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import Container from "@/components/ui/Container";
import AffiliateForm from "@/components/sections/AffiliateForm";

export const metadata: Metadata = {
  title: "Partner registration",
  description:
    "Apply to join the AccelEye partner and affiliate program. Applicants can expect a response within six weeks.",
};

export default function PartnerRegisterPage() {
  return (
    <>
      <HeroBackdrop>
        <Container className="relative py-16 text-center lg:py-24">
          <p className="mb-6 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-accent">
            Partner program
          </p>
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl">
            Register as a <span className="text-gradient">partner</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-foreground/80">
            Tell us about you and your company. Applicants can expect a response
            within six weeks.
          </p>
        </Container>
      </HeroBackdrop>
      <section className="py-16 lg:py-24">
        <Container className="max-w-4xl">
          <AffiliateForm />
        </Container>
      </section>
    </>
  );
}
