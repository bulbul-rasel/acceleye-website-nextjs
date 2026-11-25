import Link from "next/link";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import type { LegalDoc } from "@/content/legal";

// Long-form legal page: hero, sticky table of contents, readable sections.
export default function LegalDocument({
  doc,
  other,
}: {
  doc: LegalDoc;
  other: { label: string; href: string };
}) {
  return (
    <>
      <HeroBackdrop>
        <Container className="relative py-16 lg:py-24">
          <p className="mb-6 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-accent">
            {doc.eyebrow}
          </p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {doc.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-foreground/80">
            {doc.lead}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-base text-foreground/70">
            <span>
              <strong className="text-white">Last updated:</strong> {doc.updated}
            </span>
            {doc.version && (
              <span>
                <strong className="text-white">Version:</strong> {doc.version}
              </span>
            )}
            {doc.nextReview && (
              <span>
                <strong className="text-white">Next review:</strong> {doc.nextReview}
              </span>
            )}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={doc.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-lg font-bold text-navy-950 transition hover:bg-white"
            >
              <Icon name="file" className="h-5 w-5" />
              Download the official PDF
            </a>
            <Link
              href={other.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-lg font-semibold text-white transition hover:border-accent hover:text-accent"
            >
              {other.label}
            </Link>
          </div>
        </Container>
      </HeroBackdrop>

      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[17rem_1fr]">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">
              On this page
            </p>
            <ul className="space-y-1 border-l border-white/10">
              {doc.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-base text-foreground/70 transition hover:border-accent hover:text-white"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 max-w-3xl space-y-14">
            <p className="rounded-2xl border border-white/10 bg-navy-900 p-5 text-base text-foreground/70">
              This page summarizes AccelEye’s official document. If anything
              differs, the official PDF applies.
            </p>

            {doc.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {s.title}
                </h2>
                {s.paragraphs?.map((p) => (
                  <p key={p} className="mt-4 text-xl leading-relaxed text-foreground/85">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-5 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-xl leading-relaxed text-foreground/85">
                        <span className="mt-1.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                          <Icon name="check" className="h-4 w-4" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {s.table && (
                  <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                    <table className="w-full text-left text-lg">
                      <tbody className="divide-y divide-white/10 bg-navy-900">
                        {s.table.rows.map(([k, v]) => (
                          <tr key={k} className="align-top">
                            <th className="w-1/3 p-4 font-bold text-white">{k}</th>
                            <td className="p-4 text-foreground/85">{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-navy-800 to-navy-900 p-8">
              <h2 className="text-2xl font-bold text-white">Questions?</h2>
              <ul className="mt-4 space-y-2 text-lg">
                {doc.contact.map((c) => (
                  <li key={c.label} className="flex flex-wrap gap-x-3">
                    <span className="text-foreground/60">{c.label}:</span>
                    <a href={c.href} className="font-semibold text-accent hover:underline">
                      {c.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
