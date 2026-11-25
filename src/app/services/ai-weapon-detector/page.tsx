import type { Metadata } from "next";
import DualTechHero from "@/components/weapon-detector/DualTechHero";
import Pillars from "@/components/weapon-detector/Pillars";
import Workflow from "@/components/weapon-detector/Workflow";
import DemoVideo from "@/components/weapon-detector/DemoVideo";
import Accuracy from "@/components/weapon-detector/Accuracy";
import Integrations from "@/components/weapon-detector/Integrations";
import SaveAlertApp from "@/components/weapon-detector/SaveAlertApp";
import AiBoxLineup from "@/components/weapon-detector/AiBoxLineup";
import PageTail from "@/components/sections/PageTail";
import GunViolenceHeadlines from "@/components/sections/GunViolenceHeadlines";
import GunViolenceVideos from "@/components/sections/GunViolenceVideos";

export const metadata: Metadata = {
  title: "AI Weapon Detector",
  description:
    "Dual technology AI weapon detection: visual gun detection plus acoustic gunshot sensors, verified by humans 24/7. See the threat. Hear the danger. Act instantly.",
};

export default function AiWeaponDetectorPage() {
  return (
    <>
      <DualTechHero />
      <Pillars />
      <Workflow />
      <DemoVideo />
      <Accuracy />
      <Integrations />
      <SaveAlertApp />
      <AiBoxLineup />
      <GunViolenceHeadlines />
      <GunViolenceVideos />
      <PageTail />
    </>
  );
}
