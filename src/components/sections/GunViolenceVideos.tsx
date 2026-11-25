import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { videos } from "@/content/shared";

export default function GunViolenceVideos() {
  return (
    <section className="py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Learn more"
          title="About gun violence"
          lead="Watch and learn why proactive, AI-assisted detection with human verification matters."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {videos.map((v) => (
            <div
              key={v.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900"
            >
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
