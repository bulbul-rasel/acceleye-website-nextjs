import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { demo } from "@/content/weaponDetector";

export default function DemoVideo() {
  return (
    <section id="demo" className="scroll-mt-24 py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="See it in action"
          title={demo.title}
          lead={demo.body}
        />
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-navy-900 shadow-2xl shadow-accent/10">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={`https://player.vimeo.com/video/${demo.vimeoId}?dnt=1`}
              title={demo.title}
              loading="lazy"
              allow="fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
