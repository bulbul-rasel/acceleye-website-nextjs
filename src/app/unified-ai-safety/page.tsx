import type { Metadata } from "next";
import Showcase from "@/components/blocks/Showcase";
import SiteImage from "@/components/ui/SiteImage";
import PageHero from "@/components/ui/PageHero";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import SplitFeature from "@/components/blocks/SplitFeature";
import PageTail from "@/components/sections/PageTail";
import Impact from "@/components/home/Impact";

export const metadata: Metadata = {
  title: "Unified AI Safety & BTAM",
  description:
    "One connected AI platform for school safety and wellbeing: weapon detection, digital wellness analytics and AI-enhanced behavioral threat assessment (BTAM) in a single workflow.",
};

export default function UnifiedAiSafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Unified AI Safety & BTAM"
        title="One connected AI platform for"
        highlight="safety & wellbeing"
        lead="Detect, assess and manage physical and online threats across every school, faster and at lower cost."
        primary={{ label: "Request a Demo", href: "#contact" }}
        secondary={{ label: "See the 90 ms library detection", href: "/blog/gun-detected-in-school-library" }}
        stats={[
          { value: "25+", label: "Data sources unified" },
          { value: "55%", label: "Faster case closure" },
          { value: "4–6 s", label: "To notify responders" },
          { value: "99.95%", label: "False alarms filtered" },
        ]}
        visual={<SiteImage name="aiEnhance" aspect="aspect-[4/3]" glow priority sizes="(min-width: 1024px) 45vw, 95vw" />}
      />

      <SplitFeature
        tinted
        eyebrow="One centralized platform"
        title="Detect, assess and manage physical and online threats while supporting student wellbeing across every school"
        lead="Replace paper forms, Google Forms and scattered emails with one compliance-focused system that combines real-time campus weapon detection with online monitoring for cyberbullying, self-harm and violence threats."
        cta={{ label: "Let us show you a demo", href: "/contact" }}
        visual={<SiteImage name="unifiedPlatform" aspect="aspect-[4/3]" glow sizes="(min-width: 1024px) 45vw, 95vw" />}
      />

      <FeatureGrid
        eyebrow="Remove disconnected tools"
        title="From silos to unified safety, wellbeing & BTAM"
        lead="See the full picture, so decisions are faster and nothing falls through the cracks."
        columns={4}
        items={[
          {
            icon: "layers",
            title: "Unify & centralize",
            body: "Connects 25+ data sources in one secure platform, giving AI the context and your team the clarity to decide faster.",
          },
          {
            icon: "bolt",
            title: "Reduce manual work",
            body: "Routine tasks are automated so staff can focus on high-impact decisions and student care.",
          },
          {
            icon: "eye",
            title: "Act with foresight",
            body: "Complex data becomes trends and patterns that help prevent recurring issues.",
          },
          {
            icon: "users",
            title: "One digital workflow",
            body: "A single view of the whole district, shared by administrators, counselors and safety staff.",
          },
        ]}
      />

      <Showcase
        tinted
        columns={4}
        banner="aiEnhance"
        eyebrow="55% faster case closure"
        title="Unified AI-enhanced BTAM"
        lead="A unified dashboard, guided workflows and individualized AI insights take cases from first report to closure."
        items={[
          { icon: "search", title: "Multi-source threat intelligence", body: "Continuous monitoring for digital and physical threats." },
          { icon: "file", title: "Automatic data gathering", body: "Rapid multi-source history collection with AI summaries." },
          { icon: "eye", title: "Guided assessment & research", body: "Structured investigation with built-in AI tools and analytics." },
          { icon: "layers", title: "Case management & reporting", body: "Automatic case creation, full lifecycle tracking and report generation." },
          { icon: "chat", title: "Centralized intake", body: "One secure dashboard for staff reports and anonymous tips." },
          { icon: "check", title: "Intervention tracking", body: "Assign action items, set review dates and monitor student support plans." },
          { icon: "shield", title: "Standardized assessments", body: "Prebuilt, evidence-based threat and suicide-risk templates aligned with state mandates." },
          { icon: "lock", title: "Defensible audit trail", body: "Automatic, immutable logs of who viewed, edited or acted on each case." },
        ]}
      />

      <Showcase
        eyebrow="Enhance safety & well-being with AI & human collaboration"
        title="Transform safety & security with proven AI technology"
        lead="Physical safety, digital safety and human verification working together."
        columns={4}
        items={[
          { icon: "eye", image: "weapon", title: "Dual threat detection", body: "Visual weapon detection plus gunshot detection covers threats cameras can’t see." },
          { icon: "users", image: "collaborationSquare", title: "Human verification", body: "24/7 analysts confirm threats, then alert administrators, security or 911 in 4–6 seconds." },
          { icon: "heart", image: "digitalSafety", title: "Digital wellness analytics", body: "Gen AI flags self-harm, cyberbullying, violence and mental-health concerns across email, documents, social media and searches." },
          { icon: "pulse", image: "aiAnalysis", title: "AI access-log analysis", body: "Finds anomalies in physical access logs and coordinates the response." },
          { icon: "lock", title: "Web filter", body: "Protects students online and on campus." },
          { icon: "mobile", title: "Parents app", body: "Gives parents insight into their child’s online activity." },
          { icon: "alert", title: "SaveAlert app", body: "Keeps alerting active during power or network outages." },
          { icon: "file", title: "AI interview summaries", body: "AI threat analysis and interview summarization for BTAM teams." },
        ]}
      />

      <FeatureGrid
        tinted
        eyebrow="Enhance existing systems with new technology"
        title="Unified AI seamlessly works with existing and new systems"
        lead="No rip-and-replace. Connect what you already run."
        columns={4}
        items={[
          { icon: "camera", image: "cctv", title: "CCTV cameras", body: "Works with most VMS and cameras, filtering up to 99.95% of false alarms." },
          { icon: "building", image: "accessControl", title: "Access control", body: "Flags physical anomalies automatically from existing systems." },
          { icon: "mobile", image: "iosDevice", title: "iOS devices", body: "Uses anonymous global insights and real-time data to reduce false alarms." },
          { icon: "server", image: "chromebook", title: "Chromebooks", body: "Anonymous crowdsourced device data improves accuracy and prevention." },
        ]}
      />

      <Impact />

      <FeatureGrid
        eyebrow="We understand your pain points"
        title="Comprehensive safety tools, optimized for BTAM"
        lead="Everything your team needs to detect threats, verify them and respond, without stitching together separate tools."
        columns={3}
        items={[
          { icon: "eye", title: "Enhance security with visual weapon detection & gunshot detection", body: "Covers visible and audible threats across campuses, buildings and public spaces.", image: "weapon" },
          { icon: "bolt", title: "24/7 human verification & instant alerting", body: "Analysts confirm threats, then administrators, security or emergency services are notified within 4–6 seconds.", image: "humanVerification" },
          { icon: "heart", title: "Online safety & wellness", body: "Web filter, Parents app, advanced digital wellness analytics, full control of your data with privacy, AI-enhanced BTAM and the SaveAlert app.", image: "digitalSafety" },
        ]}
      />

      <PageTail />
    </>
  );
}
