export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={`max-w-4xl ${centered ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <p
          className={`mb-4 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-accent ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
          {eyebrow}
          {centered && (
            <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
          )}
        </p>
      )}
      <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-6 text-lg leading-relaxed text-foreground/80 sm:text-xl">
          {lead}
        </p>
      )}
    </div>
  );
}
