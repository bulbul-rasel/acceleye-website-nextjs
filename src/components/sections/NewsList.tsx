"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import PostLink from "@/components/ui/PostLink";
import type { Post } from "@/lib/posts";

const tones = ["badge-primary", "badge-success", "badge-warning", "badge-info", "badge-error", "badge-secondary"];

export type ListPost = Omit<Post, "body">;

export default function NewsList({ posts }: { posts: ListPost[] }) {
  const cats = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const tone = (c: string) => tones[cats.indexOf(c) % tones.length];
  const [cat, setCat] = useState("All");
  const items = posts.filter((n) => cat === "All" || n.category === cat);
  const [featured, ...rest] = items;

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-wrap gap-3">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={`rounded-full border px-5 py-2.5 text-base font-semibold transition ${
                cat === c
                  ? "border-accent bg-accent text-navy-950"
                  : "border-white/15 text-foreground/80 hover:border-accent hover:text-accent"
              }`}
            >
              {c}
              <span className="ml-2 opacity-60">
                {c === "All" ? posts.length : posts.filter((n) => n.category === c).length}
              </span>
            </button>
          ))}
        </div>

        {featured && (
          <PostLink
            kind="news"
            slug={featured.slug}
            sourceUrl={featured.sourceUrl}
            className="group relative mt-10 flex min-h-[20rem] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-700 via-navy-900 to-navy-950 p-8 sm:p-12"
          >
            {featured.image ? (
              <>
                <Image src={featured.image} alt="" fill unoptimized className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/20" aria-hidden="true" />
              </>
            ) : (
              <>
                <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
                <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
              </>
            )}
            <div className="relative">
              <span className={`badge badge-soft font-bold uppercase tracking-wider ${tone(featured.category)}`}>
                {featured.category}
              </span>
              <span className="ml-3 text-base text-foreground/70">
                {[featured.displayDate, featured.source].filter(Boolean).join(" · ")}
              </span>
              <h2 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-white group-hover:text-accent sm:text-4xl lg:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-3xl text-xl text-foreground/80">{featured.excerpt}</p>
              <span className="mt-6 inline-block text-lg font-semibold text-accent">
                Read more →
              </span>
            </div>
          </PostLink>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((n) => (
            <PostLink
              key={n.slug}
              kind="news"
              slug={n.slug}
              sourceUrl={n.sourceUrl}
              className="group flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-navy-800 to-navy-900 p-7 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_44px_-14px_rgb(45_212_255/0.55)]"
            >
              {n.image && (
                <Image src={n.image} alt="" width={800} height={450} unoptimized className="mb-6 aspect-video w-full rounded-2xl object-cover" />
              )}
              <div className="flex items-center justify-between gap-3">
                <span className={`badge badge-soft font-semibold uppercase tracking-wider ${tone(n.category)}`}>
                  {n.category}
                </span>
                <time className="text-base text-foreground/60">{n.displayDate}</time>
              </div>
              <h3 className="mt-5 flex-1 text-xl font-bold leading-snug text-white group-hover:text-accent">
                {n.title}
              </h3>
              <p className="mt-3 text-base text-foreground/70">{n.excerpt}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-foreground/50">
                {n.source}
              </p>
              <span className="mt-4 text-base font-semibold text-accent">Read more →</span>
            </PostLink>
          ))}
        </div>

        {items.length === 0 && (
          <p className="mt-10 text-center text-xl text-foreground/70">
            Nothing in this category yet.
          </p>
        )}
      </Container>
    </section>
  );
}
