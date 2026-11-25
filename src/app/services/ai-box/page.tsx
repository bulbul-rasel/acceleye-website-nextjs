import type { Metadata } from "next";
import Showcase from "@/components/blocks/Showcase";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import type { ImageKey } from "@/content/images";
import { hasImage } from "@/lib/imageFiles";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import SplitFeature from "@/components/blocks/SplitFeature";
import PageTail from "@/components/sections/PageTail";

export const metadata: Metadata = {
  title: "AI Box",
  description:
    "AI Box: a GPU-accelerated AI video server for scalable surveillance. Plug in on-prem or in the cloud and run weapon and violence detection across 10 to 240 cameras.",
};

const models: {
  name: string;
  tag: string;
  capacity: string;
  unit: string;
  image: ImageKey;
  points: string[];
}[] = [
  {
    name: "AI Box Starter",
    image: "aiBoxStarter",
    tag: "Compact, powerful, intelligent",
    capacity: "Up to 10",
    unit: "IP cameras",
    points: [
      "Compact GPU-powered workstation",
      "Real-time AI video analytics",
      "Energy-efficient processing",
      "Integrates with cloud platforms and leading VMS",
    ],
  },
  {
    name: "AI Box Pro",
    image: "aiBoxPro",
    tag: "Scalable, intelligent, enterprise-ready",
    capacity: "40–240",
    unit: "cameras",
    points: [
      "Rack-mounted, GPU-powered server",
      "Real-time analytics for large enterprise surveillance",
      "Runs 24/7 and suits multi-site deployments",
      "Integrates with leading VMS",
    ],
  },
];

export default function AiBoxPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Box"
        title="Smart surveillance in minutes with"
        highlight="AIBox"
        tagline="Seamless deployment on-prem and in the cloud."
        lead="Save power, reduce OpX with a hardware- and software-accelerated AI platform."
        primary={{ label: "Request a Demo", href: "#contact" }}
        secondary={{ label: "Compare models", href: "#models" }}
        stats={[
          { value: "10", label: "Cameras on Starter" },
          { value: "240", label: "Cameras on Pro (max)" },
          { value: "< 1 s", label: "Threat detection" },
          { value: "24/7", label: "Always on" },
        ]}
        visual={<SiteImage name="aiBoxPro" aspect="aspect-[4/3]" glow priority sizes="(min-width: 1024px) 45vw, 95vw" />}
      />

      <SplitFeature
        eyebrow="AI-optimized video server"
        title="Built for scalable surveillance"
        lead="The AI Box links your on-premises cameras with the cloud for real-time video analytics, across mid-size to large deployments."
        bullets={[
          "GPUs pull camera feeds from your local network and send them securely to the cloud",
          "Weapon detection, behavior analysis and anomaly alerts",
          "Manage cameras centrally, 24/7",
          "Supports major VMS platforms",
          "Scales across multi-site facilities",
        ]}
        visual={
          <div className="grid grid-cols-2 gap-5">
            <SiteImage name="aiServerCloud" aspect="aspect-[3/4]" glow sizes="(min-width: 1024px) 22vw, 45vw" />
            <SiteImage name="aiServerChip" aspect="aspect-[3/4]" className="mt-10" glow sizes="(min-width: 1024px) 22vw, 45vw" />
          </div>
        }
      />

      <Showcase
        tinted
        mode="accordion"
        eyebrow="Higher power efficiency & performance"
        title="Save power, reduce the cost of your security system with AIBox"
        lead="Run AI analytics on the cameras you already own, using less power and fewer servers."
        items={[
          { icon: "bolt", image: "aiServerChip", title: "Power efficiency", body: "Hardware-accelerated processing uses less power per camera." },
          { icon: "building", image: "aiReducesCost", title: "Lower security-system cost", body: "Use the cameras and VMS you already have, with no costly replacements." },
          { icon: "server", image: "aiBoxPro", title: "Higher performance", body: "Process hundreds of feeds in real time without slowing down." },
        ]}
      />

      <section id="models" className="scroll-mt-24 py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Seamless deployment on-prem & cloud"
            title="Choose the right AI Box"
            lead="Pick the size that matches your camera count. Both integrate with leading VMS platforms."
          />
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-2">
            {models.map((m, i) => (
              <article
                key={m.name}
                className={`relative flex flex-col rounded-3xl border p-9 ${
                  i === 1
                    ? "border-accent/60 bg-gradient-to-b from-navy-700 to-navy-900 shadow-[0_0_60px_-20px_rgb(45_212_255/0.6)]"
                    : "border-white/10 bg-gradient-to-b from-navy-800 to-navy-900"
                }`}
              >
                {i === 1 && (
                  <span className="badge badge-primary absolute right-6 top-6 font-bold uppercase tracking-wider">
                    Enterprise
                  </span>
                )}
                <SiteImage
                  name={m.image}
                  aspect="aspect-[16/9]"
                  className="mb-8"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
                <h3 className="text-3xl font-extrabold text-white">{m.name}</h3>
                <p className="mt-1 text-lg text-accent">{m.tag}</p>
                <p className="mt-8 flex items-baseline gap-3">
                  <span className="text-5xl font-extrabold text-white sm:text-6xl">
                    {m.capacity}
                  </span>
                  <span className="text-xl text-foreground/70">{m.unit}</span>
                </p>
                <ul className="mt-8 space-y-4 border-t border-white/10 pt-8">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-lg text-foreground/90">
                      <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg text-foreground/80">
            Already running a VMS? You can integrate directly,{" "}
            <strong className="text-white">no AI Box required.</strong>
          </p>
        </Container>
      </section>

      <FeatureGrid
        tinted
        eyebrow="Instantly with plug-and-play integration – zero setup, full performance"
        title="Integrations & implementation"
        lead="Connect to your existing cameras and video management system, on-premises or in the cloud."
        columns={2}
        items={[
          { icon: "cloud", title: "Cloud · Live 24 hours", body: "Simply plug in to instantly unlock the power of AccelEye AI, with no setup and no delays." },
          { icon: "server", title: "On-prem · Live 24/7", body: "Unbox the server, plug it in and get instant access to AccelEye AI: zero setup, all the power." },
        ]}
      />

      <SplitFeature
        eyebrow="End-to-end optimized enhanced AI solutions"
        title="We deliver premium weapon detection solutions at best"
        lead="The system keeps learning from large datasets to tell real threats from false alarms, processing hundreds of camera feeds in real time and alerting security instantly."
        badges={[
          "Schools",
          "Healthcare facilities",
          "Commercial spaces",
          "Government offices",
          "Entertainment venues",
        ]}
        cta={{ label: "Explore AI Weapon Detection", href: "/services/ai-weapon-detector" }}
        visual={hasImage("gunBanner") ? <SiteImage
            name="gunBanner"
            aspect="aspect-[4/3]"
            caption="Sub-second weapon detection"
            glow
          /> : undefined}
        reverse
      />

      <PageTail />
    </>
  );
}
