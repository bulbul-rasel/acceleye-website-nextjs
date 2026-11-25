import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "AccelEye blog: school safety, AI weapon detection, partnerships and insights, including Metal Detectors in School vs AI.",
};

export default function BlogPage() {
  const [latest, ...rest] = getPosts("blog");
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights on"
        highlight="school safety and AI"
        lead="Case studies, partnerships and honest comparisons from the AccelEye team."
        primary={{ label: "Read the latest", href: "#posts" }}
        secondary={{ label: "News", href: "/news" }}
      />

      <section id="posts" className="scroll-mt-24 py-20 lg:py-28">
        <Container>
          {latest && (
            <Link
              href={`/blog/${latest.slug}`}
              className="group relative flex min-h-[18rem] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-700 via-navy-900 to-navy-950 p-8 sm:p-12"
            >
              <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
              {latest.image && <Image src={latest.image} alt="" fill unoptimized className="object-cover" />}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/20" aria-hidden="true" />
              <div className="relative">
                <span className="badge badge-primary badge-soft font-bold uppercase tracking-wider">Latest</span>
                <span className="ml-3 text-base text-foreground/70">{latest.displayDate}</span>
                <h2 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-white group-hover:text-accent sm:text-4xl">{latest.title}</h2>
                <p className="mt-4 max-w-3xl text-xl text-foreground/80">{latest.excerpt}</p>
                <span className="mt-6 inline-block text-lg font-semibold text-accent">Read the post →</span>
              </div>
            </Link>
          )}

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-navy-800 to-navy-900 p-8 transition hover:-translate-y-1 hover:border-accent/50"
              >
                {p.image && <Image src={p.image} alt="" width={800} height={450} unoptimized className="mb-6 aspect-video w-full rounded-2xl object-cover" />}
                <time className="text-base text-foreground/60">{p.displayDate}</time>
                <h3 className="mt-3 flex-1 text-2xl font-bold leading-snug text-white group-hover:text-accent">{p.title}</h3>
                <p className="mt-3 text-lg text-foreground/70">{p.excerpt}</p>
                <span className="mt-5 text-lg font-semibold text-accent">Read the post →</span>
              </Link>
            ))}
          </div>
          {!latest && <p className="text-center text-xl text-foreground/70">No posts yet.</p>}
        </Container>
      </section>

      <CtaBand
        title="See AI detection for yourself."
        lead="Call us or request a demo and we’ll show detection running on live video."
        primaryLabel="Request a Demo"
        primaryHref="/contact"
      />
      <ContactSection />
    </>
  );
}
