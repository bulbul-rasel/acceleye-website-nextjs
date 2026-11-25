import type { CSSProperties } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import type { ImageKey } from "@/content/images";
import { accuracy } from "@/content/weaponDetector";

const accuracyImages: ImageKey[] = ["infraDetect", "infraredFrame", "rgbLowLight"];

export default function Accuracy() {
  return (
    <section className="border-y border-white/10 bg-navy-900/50 py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Accuracy"
          title="Built to be right, day or night"
          lead="Multi-weapon detection recognizes firearms and knives, while pencils and everyday items are not flagged."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {accuracy.map((a, i) => (
            <div
              key={a.label}
              className="flex flex-col items-center rounded-3xl border border-white/10 bg-navy-900 p-8 text-center"
            >
              <SiteImage
                name={accuracyImages[i]}
                aspect="aspect-[16/10]"
                className="mb-8 w-full"
                sizes="(min-width: 768px) 30vw, 90vw"
              />
              {/* daisyUI radial progress */}
              <div
                className="radial-progress text-accent"
                style={
                  {
                    "--value": a.value,
                    "--size": "9rem",
                    "--thickness": "0.6rem",
                  } as CSSProperties
                }
                role="progressbar"
                aria-valuenow={a.value}
                aria-label={a.label}
              >
                <span className="text-2xl font-bold text-white">{a.display}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{a.label}</h3>
              <p className="mt-2 text-base text-foreground/80">{a.note}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
