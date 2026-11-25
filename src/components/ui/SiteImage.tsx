import Image from "next/image";
import { slots, type ImageKey } from "@/content/images";
import { placeholdersVisible, resolveImage } from "@/lib/imageFiles";
import Icon from "./Icon";

// A picture slot in the AccelEye style: dark navy frame, faint grid, cyan glow.
// - A file in public/images/photos/<key>.jpg (or illustrations/<key>.svg) is shown if it exists.
// - A "photo" slot with no file shows a labeled placeholder saying which picture belongs here.
// - An "illustration" slot with no file shows nothing.
export default function SiteImage({
  name,
  aspect = "aspect-[4/3]",
  className = "",
  sizes = "(min-width: 1024px) 40vw, 90vw",
  caption,
  glow = false,
  priority = false,
  background = false,
}: {
  name: ImageKey;
  aspect?: string;
  className?: string;
  sizes?: string;
  caption?: string;
  glow?: boolean;
  priority?: boolean;
  /** Fill the parent edge to edge with no frame (for use behind text) */
  background?: boolean;
}) {
  const slot = slots[name];
  const file = resolveImage(name);
  const showPlaceholder = !file && slot.kind === "photo" && placeholdersVisible();
  if (!file && !showPlaceholder) return null;

  const placeholder = (
    <div
      role="img"
      aria-label={`Photo needed: ${slot.brief}`}
      className="absolute inset-0 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-accent/40 p-5 text-center"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
        <Icon name="eye" className="h-6 w-6" />
      </span>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Photo needed · {name}</p>
      <p className="max-w-md text-sm leading-snug text-foreground/80">{slot.brief}</p>
      <p className="font-mono text-[11px] text-foreground/50">public/images/photos/{name}.jpg</p>
    </div>
  );

  if (background) {
    return (
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="bg-grid absolute inset-0 opacity-60" />
        {file && <Image src={file.src} alt="" fill sizes={sizes} unoptimized={file.src.endsWith(".svg")} className="object-cover" />}
      </div>
    );
  }

  return (
    <figure className={`relative ${className}`}>
      {glow && <div className="absolute -inset-5 rounded-[2rem] bg-accent/15 blur-3xl" aria-hidden="true" />}
      <div className={`relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 ${aspect}`}>
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
        {file ? (
          <Image
            src={file.src}
            alt={slot.alt}
            fill
            sizes={sizes}
            priority={priority}
            unoptimized={file.src.endsWith(".svg")}
            className="object-cover"
          />
        ) : (
          placeholder
        )}
        {file?.isPhoto && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-accent/10" aria-hidden="true" />
        )}
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" aria-hidden="true" />
        {caption && (
          <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-navy-950/80 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
