import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import HeroBackdrop from "@/components/ui/HeroBackdrop";
import Container from "@/components/ui/Container";
import PostBody from "@/components/sections/PostBody";
import NewsInsights from "@/components/sections/NewsInsights";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";
import { getPost, getPosts } from "@/lib/posts";

export function generateStaticParams() {
  return getPosts("news").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost("news", slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default async function NewsPost({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const p = getPost("news", slug);
  if (!p) notFound();
  return (
    <>
      <HeroBackdrop>
        <Container className="relative max-w-4xl py-16 lg:py-24">
          <Link href="/news" className="text-lg font-semibold text-accent hover:underline">← Back to news</Link>
          <p className="mt-8 text-base text-foreground/70">
            {p.displayDate} · {p.category}{p.source ? ` · ${p.source}` : ""}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">{p.title}</h1>
        </Container>
      </HeroBackdrop>
      <article className="py-16 lg:py-24">
        <Container className="max-w-4xl">
          {p.image && (
            <Image src={p.image} alt={p.title} width={1600} height={900} unoptimized className="mb-12 w-full rounded-3xl object-cover" />
          )}
          <PostBody markdown={p.body} />
        </Container>
      </article>
      <NewsInsights title="More from AccelEye" />
      <CtaBand primaryLabel="Request a Demo" primaryHref="/contact" />
      <ContactSection />
    </>
  );
}
