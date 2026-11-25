import type { Metadata } from "next";
import Showcase from "@/components/blocks/Showcase";
import PageHero from "@/components/ui/PageHero";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import SplitFeature from "@/components/blocks/SplitFeature";
import { hasImage } from "@/lib/imageFiles";
import SiteImage from "@/components/ui/SiteImage";
import PageTail from "@/components/sections/PageTail";

export const metadata: Metadata = {
  title: "AI SolarEye Trailer",
  description:
    "SolarEye: a solar-powered trailer with lights and cameras for AI-assisted weapon, fire and violence detection at outdoor events, parking lots and remote sites.",
};

export default function SolarEyePage() {
  return (
    <>
      <PageHero
        eyebrow="AI SolarEye Trailer"
        title="Solar-powered protection with AI"
        highlight="weapon, fire & violence detection"
        tagline="Flexible, reliable, fully integrated."
        lead="Protect outdoor events, parking lots and remote sites instantly. No power outlet needed, no construction, and monitored around the clock."
        primary={{ label: "Request a Demo", href: "#contact" }}
        secondary={{ label: "See the advantages", href: "#advantages" }}
        stats={[
          { value: "360°", label: "Perimeter coverage" },
          { value: "Solar", label: "Self-sustaining power" },
          { value: "4G / 5G", label: "Cellular or WiFi" },
          { value: "1 tap", label: "To call 911 from the app" },
        ]}
        visual={<SiteImage name="solarTrailer" aspect="aspect-[4/3]" glow priority sizes="(min-width: 1024px) 45vw, 95vw" />}
      />

      <SplitFeature
        eyebrow="Outdoor protection"
        title="Secure outdoor space with SolarEye"
        lead="Picture a school soccer game with a full set of bleachers. Four SolarEye trailers with camera masts sit at the field corners, covering the whole perimeter."
        bullets={[
          "360-degree perimeter coverage from the field corners",
          "Solar-powered on cellular or 5G, with no external power",
          "AccelEye AI detects weapons, violence and gunshots",
          "A central alert team watches every unit",
          "Less load on teachers, administrators and on-site security",
        ]}
        visual={hasImage("solarField") ? <SiteImage
            name="solarField"
            aspect="aspect-[6/5]"
            caption="Four trailers guard the field"
            glow
          /> : undefined}
      />

      <FeatureGrid
        id="advantages"
        image="solarTrailer"
        tinted
        eyebrow="SolarEye advantages"
        title="Everything on one trailer"
        lead="A solar-powered trailer with lights and cameras that runs on WiFi or cellular, ideal for parking lots, outdoor events and mobile setups without external power."
        items={[
          { icon: "sun", title: "Solar power", body: "A solar panel charges a built-in battery that runs the lights and camera, so it’s self-sustaining for remote or extended use." },
          { icon: "bulb", title: "Lighting", body: "Energy-efficient LED trailer lights you can control remotely from the app." },
          { icon: "camera", title: "Camera system", body: "HD video with wide-angle or 360° views on some models, night vision and AI detection for weapons, violence and fire. Some models add audio." },
          { icon: "wifi", title: "Connectivity", body: "WiFi for remote viewing on your network, or cellular (often 4G LTE) where WiFi isn’t available." },
          { icon: "mobile", title: "App control", body: "View the feed, change settings and control lights from anywhere. Get push notifications, review recordings, set multiple alert recipients and call 911 with one press." },
          { icon: "shield", title: "Weatherproof", body: "Weather-resistant against rain, dust and temperature swings." },
        ]}
      />

      <Showcase
        eyebrow="Features"
        title="Automate your response with AI and remote monitoring"
        lead="Detection, verification and alerts in one package."
        items={[
          { icon: "eye", title: "Weapon & violence detection", body: "AI watches the feed for firearms and violent behavior." },
          { icon: "users", title: "Employee vs. intruder", body: "Tell staff from people who shouldn’t be there." },
          { icon: "fire", title: "Fire detection", body: "Early detection of fire on camera." },
          { icon: "pin", title: "Instant alerts with map location", body: "Responders see exactly where the alert came from." },
          { icon: "cloud", title: "Cloud-based AI models", body: "Models are updated centrally, so you always run the latest." },
          { icon: "camera", title: "IP & CCTV camera support", body: "Add existing cameras to the same monitoring." },
        ]}
      />

      <SplitFeature
        tinted
        eyebrow="Where it works"
        title="Anywhere you need eyes, fast"
        lead="Because SolarEye needs no external power and no construction, it can be placed wherever the risk is, and moved when plans change."
        badges={[
          "Parking lots",
          "Outdoor events",
          "Remote or off-grid sites",
          "Mobile setups",
          "School sports fields",
        ]}
        cta={{ label: "Request a Demo", href: "#contact" }}
        reverse
      />

      <PageTail />
    </>
  );
}
