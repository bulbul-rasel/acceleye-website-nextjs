import type { Metadata } from "next";
import Showcase from "@/components/blocks/Showcase";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { hasImage } from "@/lib/imageFiles";
import SiteImage from "@/components/ui/SiteImage";
import Button from "@/components/ui/Button";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import SplitFeature from "@/components/blocks/SplitFeature";
import PageTail from "@/components/sections/PageTail";
import { site } from "@/content/site";
import { layers, audiences, caseStudies, offer, faithStats } from "@/content/faith";

export const metadata: Metadata = {
  title: "Faith Communities",
  description:
    "AI-assisted threat detection and prevention for churches, mosques, synagogues and religious schools: technology that serves your sacred mission.",
};

export default function FaithPage() {
  return (
    <>
      <PageHero
        eyebrow="Faith communities"
        title="Technology that serves your"
        highlight="sacred mission"
        tagline="AI-assisted threat detection and prevention for faith communities."
        lead="Invisible AI that detects threats, helps prevent violence and alerts first responders, so your people can focus on worship, care and community."
        primary={{ label: "Learn more", href: "#what" }}
        secondary={{ label: "Free assessment", href: "#offer" }}
        visual={hasImage("faithHero") ? <SiteImage name="faithHero" aspect="aspect-[4/3]" glow priority sizes="(min-width: 1024px) 45vw, 95vw" /> : undefined}
        stats={faithStats}
      />

      <FeatureGrid
        id="what"
        eyebrow="What AccelEye does"
        title="What AccelEye does for faith communities"
        lead="Protection that stays out of the way of worship."
        items={[
          { icon: "eye", title: "AI threat detection", body: "Detects weapons, medical emergencies and threatening behavior using the cameras you already have." },
          { icon: "bolt", title: "Emergency alert system", body: "Connects directly with first responders, sharing threat details and location data." },
          { icon: "heart", title: "Self-harm prevention", body: "Early intervention for self-harm, bullying and aggressive behavior." },
        ]}
      />

      <Showcase
        tinted
        mode="accordion"
        eyebrow="Four layers"
        title="Four-layer protection"
        lead="Each layer covers a gap the others can’t."
        items={layers.map((l) => ({ icon: l.icon, kicker: l.when, title: l.title, body: l.body, image: l.image }))}
      />

      <SplitFeature
        eyebrow="Direct Connect"
        title="Alerts that reach responders in seconds"
        lead="AccelEye’s in-house messaging reaches administrators and first responders without relying on a third-party relay."
        bullets={[
          "Threat details and location shared automatically",
          "Human analysts verify before anyone is alerted",
          "Works alongside your existing cameras and VMS",
        ]}
        visual={hasImage("faithAlert") ? <SiteImage name="faithAlert" aspect="aspect-[4/3]" caption="Direct Connect alerting" glow /> : undefined}
      />

      <SplitFeature
        tinted
        reverse
        eyebrow="Beyond weapons"
        title="Care for the people inside"
        lead="Behavior analysis and digital-safety monitoring help your staff step in early when someone is struggling or being bullied."
        bullets={[
          "Early signals of self-harm and bullying",
          "Supports pastoral and teaching staff",
          "Built with privacy and compliance in mind",
        ]}
        cta={{ label: "Unified AI Safety", href: "/unified-ai-safety" }}
        visual={hasImage("faithCare") ? <SiteImage name="faithCare" aspect="aspect-[4/3]" caption="Prevention, not just response" glow /> : undefined}
      />

      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Why AccelEye" title="Built different from generic detection" lead="Two design choices set AccelEye apart from generic detection tools." />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              { t: "Self-learning custom AI models", us: "Custom-trained models that keep improving from new data.", them: "Generic, static models that don’t adapt to your site." },
              { t: "Direct Connect alerting", us: "An in-house messaging system built for speed.", them: "Third-party messaging systems in the middle." },
            ].map((c) => (
              <article key={c.t} className="rounded-3xl border border-white/10 bg-navy-900 p-9">
                <h3 className="text-2xl font-extrabold text-white">{c.t}</h3>
                <p className="mt-5 flex gap-3 text-lg text-foreground/90"><Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-accent" /><span><strong className="text-accent">AccelEye:</strong> {c.us}</span></p>
                <p className="mt-3 flex gap-3 text-lg text-foreground/60"><Icon name="close" className="mt-1 h-5 w-5 shrink-0" /><span><strong>Others:</strong> {c.them}</span></p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FeatureGrid
        tinted
        eyebrow="Who we serve"
        title="Peace of mind for every tradition"
        lead="Faith communities and religious schools of every tradition use AccelEye to stay safe and welcoming."
        items={audiences}
      />

      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="Real results" title="Communities that feel safe again" lead="Outcomes reported by AccelEye customers." />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <article key={c.name} className="flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-navy-800 to-navy-900 p-9">
                <h3 className="text-2xl font-extrabold text-white">{c.name}</h3>
                <ul className="mt-6 space-y-5">
                  {c.results.map((r) => (
                    <li key={r.label}>
                      <p className="text-4xl font-extrabold text-accent">{r.value}</p>
                      <p className="text-lg text-foreground/80">{r.label}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="offer" className="scroll-mt-24 border-y border-white/10 bg-navy-900/50 py-24 lg:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading align="left" eyebrow="Partnership offer" title="Your community’s transformation starts today" lead="Start with a no-cost look at your safety and see how AccelEye fits your community." />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={site.phoneHref}>Call {site.phone}</Button>
              <Button href="/contact" variant="secondary">Email our faith specialist</Button>
            </div>
          </div>
          <ul className="space-y-4">
            {offer.map((o) => (
              <li key={o.title} className="flex gap-4 rounded-2xl border border-white/10 bg-navy-900 p-6">
                <Icon name="check" className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <p className="text-xl font-bold text-white">{o.title}</p>
                  <p className="text-lg text-foreground/70">{o.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <PageTail />
    </>
  );
}
