import Hero from "@/components/home/Hero";
import WhyAi from "@/components/home/WhyAi";
import Features from "@/components/home/Features";
import Roles from "@/components/home/Roles";
import Impact from "@/components/home/Impact";
import CoreValues from "@/components/home/CoreValues";
import Achievements from "@/components/sections/Achievements";
import OurPartners from "@/components/sections/OurPartners";
import GunViolenceHeadlines from "@/components/sections/GunViolenceHeadlines";
import GunViolenceVideos from "@/components/sections/GunViolenceVideos";
import CustomerFeedback from "@/components/sections/CustomerFeedback";
import LatestBlog from "@/components/sections/LatestBlog";
import ContactSection from "@/components/sections/ContactSection";
import CtaBand from "@/components/sections/CtaBand";

// Section order follows acceleye.com.
export default function Home() {
  return (
    <>
      <Hero />
      <WhyAi />
      <CustomerFeedback />
      <Roles />
      <Features />
      <Impact />
      <CoreValues />
      <CtaBand
        title="Call us to discuss a demo"
        lead="Call to discuss a demo, or email for a free estimate. We usually reply within 48 hours."
        primaryLabel="Let us show you a demo"
      />
      <Achievements />
      <OurPartners />
      <CtaBand
        title="Discuss your security requirements"
        lead="Call to talk through your security requirements, or email for a free estimate."
        primaryLabel="Request a Demo"
      />
      <LatestBlog />
      <GunViolenceVideos />
      <GunViolenceHeadlines />
      <ContactSection title="Let’s save lives!" />
    </>
  );
}
