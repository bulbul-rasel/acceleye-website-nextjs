import type { Metadata } from "next";
import Showcase from "@/components/blocks/Showcase";
import SiteImage from "@/components/ui/SiteImage";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Icon, { type IconName } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import ProcessSteps from "@/components/blocks/ProcessSteps";
import SplitFeature from "@/components/blocks/SplitFeature";
import PageTail from "@/components/sections/PageTail";

export const metadata: Metadata = {
  title: "SaveAlert App",
  description:
    "SaveAlert: save lives with the push of a button. One tap sends a weapon, fire, medical, violence or Safe2Text alert with photo and GPS location, even during power or network outages.",
};

const alertTypes: { icon: IconName; title: string; body: string; tone: string }[] = [
  { icon: "alert", title: "Weapon alert", body: "Warn everyone and call for help the moment a weapon is seen.", tone: "bg-alert/15 text-alert" },
  { icon: "fire", title: "Fire alert", body: "Report a fire instantly with location and a photo.", tone: "bg-amber-400/15 text-amber-300" },
  { icon: "medical", title: "Medical emergency", body: "Get responders moving while staff provide first aid.", tone: "bg-emerald-400/15 text-emerald-300" },
  { icon: "shield", title: "Violence alert", body: "Flag a fight or assault so security can respond fast.", tone: "bg-rose-500/15 text-rose-300" },
  { icon: "chat", title: "Safe2Text", body: "A text button for “see something, say something” reports.", tone: "bg-accent/15 text-accent" },
];

export default function SaveAlertPage() {
  return (
    <>
      <PageHero
        eyebrow="SaveAlert App"
        title="Save lives with the push of a"
        highlight="button"
        lead="Anyone can respond instantly through multi-level alerts from a smartphone. One tap starts the alert, and the right people know what’s happening and where."
        primary={{ label: "Let Us Show You a Demo", href: "#contact" }}
        secondary={{ label: "See the 90 ms library detection", href: "/blog/gun-detected-in-school-library" }}
        stats={[
          { value: "99.99%", label: "Cloud uptime" },
          { value: "1 tap", label: "To send an alert" },
          { value: "5", label: "Alert types" },
          { value: "24/7", label: "Monitoring team" },
        ]}
        visual={<SiteImage name="saveAlertApp" aspect="aspect-[4/3]" glow priority sizes="(min-width: 1024px) 45vw, 95vw" />}
      />

      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Providing 24/7"
            title="The right alert for every crisis"
            lead="Every staff member can start an alert for a different crisis, from any smartphone."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {alertTypes.map((a) => (
              <article
                key={a.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-navy-800 to-navy-900 p-7 text-center transition hover:-translate-y-1 hover:border-accent/50"
              >
                <span className={`mx-auto grid h-16 w-16 place-items-center rounded-2xl ${a.tone}`}>
                  <Icon name={a.icon} className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">{a.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-foreground/80">
                  {a.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Showcase
        tinted
        mode="accordion"
        banner="saveAlertBanner"
        eyebrow="How it works"
        title="One tap sends everything responders need"
        lead="Crisis details and location go out 24/7, on any device, even during outages."
        items={[
          { icon: "alert", kicker: "Step 1", image: "saveAlertApp", title: "Press an alert", body: "Tap one of the alert buttons, such as Weapon." },
          { icon: "camera", kicker: "Step 2", title: "Photo captured", body: "The phone camera takes a photo of the situation." },
          { icon: "pin", kicker: "Step 3", title: "GPS added", body: "Exact location is attached automatically." },
          { icon: "chat", kicker: "Step 4", title: "Report in text", body: "A text button sends “see something, say something” reports." },
        ]}
        footnote="The 24/7 Alert Monitoring & Verification Team reviews each alert first. Then the emergency communications center, 911 and mutual-aid agencies are notified, and live data keeps flowing to first responders during pursuits."
      />

      <FeatureGrid
        eyebrow="Take a look at"
        title="Why SaveAlert?"
        lead="Automate your response with SaveAlert."
        columns={4}
        items={[
          { icon: "pin", title: "Location-accurate", body: "Help is requested in seconds with the crisis type, a photo and exact location." },
          { icon: "building", title: "Full facility coverage", body: "Staff can trigger alerts from anywhere, on or off campus." },
          { icon: "mobile", title: "No new hardware", body: "Runs on Android and iPhone over WiFi or mobile data, for a high return on investment." },
          { icon: "cloud", title: "24/7 availability", body: "Cloud-based, working regardless of power, weather or WiFi, with 99.99% uptime." },
        ]}
      />

      <SplitFeature
        tinted
        eyebrow="Download & install SaveAlert"
        title="Protect your institution even when power or network is down"
        lead="One tap notifies administrators, security staff and the 24/7 monitoring and verification center, with the crisis type, a photo and exact GPS location."
        bullets={[
          "Cloud-based service with 99.99% uptime",
          "Keeps working during power or internet outages",
          "Compatible with Android and iPhone",
          "Works over WiFi or mobile data",
        ]}
        cta={{ label: "Request a Demo", href: "#contact" }}
        reverse
      />

      <PageTail />
    </>
  );
}
