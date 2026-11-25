import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import { slots, type ImageKey } from "@/content/images";
import { resolveImage } from "@/lib/imageFiles";

export const metadata: Metadata = {
  title: "Image guide",
  robots: { index: false, follow: false },
};

// A working guide for the site owner: every picture slot, where it appears,
// what to put there and which file name to use. Not linked from the site.
export default function ImageSlotsPage() {
  const keys = Object.keys(slots) as ImageKey[];
  const groups = [
    { title: "Photos needed (people appear here)", kind: "photo" as const },
    { title: "Illustrations (no people, already provided)", kind: "illustration" as const },
  ];
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Image guide</p>
        <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">Where each picture goes</h1>
        <div className="mt-6 max-w-3xl space-y-3 text-lg text-foreground/80">
          <p>
            <strong className="text-white">Photos:</strong> save a real photo as{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-base">public/images/photos/&lt;name&gt;.jpg</code>{" "}
            (jpg, png, webp or avif). It appears on the site automatically.
          </p>
          <p>
            <strong className="text-white">Illustrations:</strong> already generated in{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-base">public/images/illustrations</code>. To use a
            photo instead, add a photo with the same name in the photos folder; it wins.
          </p>
          <p>
            Until a photo exists, its spot shows a dashed “Photo needed” box describing the picture. Set{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-base">NEXT_PUBLIC_HIDE_PLACEHOLDERS=1</code> to hide those boxes on the live site.
          </p>
        </div>

        {groups.map((g) => {
          const list = keys.filter((k) => slots[k].kind === g.kind);
          const done = list.filter((k) => resolveImage(k)).length;
          return (
            <div key={g.kind} className="mt-14">
              <h2 className="text-2xl font-extrabold text-white">
                {g.title} <span className="text-base font-semibold text-foreground/60">· {done}/{list.length} in place</span>
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {list.map((k) => (
                  <article key={k} className="rounded-3xl border border-white/10 bg-navy-900 p-5">
                    <SiteImage name={k} aspect="aspect-[16/10]" />
                    <h3 className="mt-4 font-mono text-lg font-bold text-accent">{k}</h3>
                    <p className="mt-2 text-base text-foreground/80">{slots[k].brief}</p>
                    <dl className="mt-3 space-y-1 text-sm text-foreground/60">
                      <div><dt className="inline font-semibold text-foreground/80">Appears on: </dt><dd className="inline">{slots[k].usedOn.join(" · ")}</dd></div>
                      <div><dt className="inline font-semibold text-foreground/80">Size: </dt><dd className="inline">{slots[k].size}</dd></div>
                      <div><dt className="inline font-semibold text-foreground/80">File: </dt><dd className="inline font-mono">public/images/photos/{k}.jpg</dd></div>
                    </dl>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
