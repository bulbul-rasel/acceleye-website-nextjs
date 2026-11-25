import PageHero from "@/components/ui/PageHero";
import { hero } from "@/content/weaponDetector";

export default function DualTechHero() {
  return (
    <PageHero
      eyebrow={hero.eyebrow}
      title="Dual Technology"
      highlight="AI Weapon Detection"
      tagline={hero.tagline}
      lead={hero.lead}
      primary={hero.primary}
      secondary={hero.secondary}
      stats={[
        { value: "90 ms", label: "Detection time" },
        { value: "99.95%", label: "False alarms filtered" },
        { value: "4–6 s", label: "To verified alert" },
        { value: "24/7", label: "Human verification" },
      ]}
    />
  );
}
