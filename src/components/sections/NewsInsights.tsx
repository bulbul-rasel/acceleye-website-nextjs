import PostLink from "@/components/ui/PostLink";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { getLatest } from "@/lib/posts";

// Latest three posts from /content/news and /content/blog.
export default function NewsInsights({ title = "News and insights" }: { title?: string }) {
  const posts = getLatest(3);
  return (
    <section className="py-24 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading align="left" eyebrow="News & insights" title={title} lead="The latest announcements, deployments and ideas from AccelEye." />
          <Button href="/news" variant="ghost" arrow>
            View all
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <PostLink
              key={p.kind + p.slug}
              kind={p.kind}
              slug={p.slug}
              sourceUrl={p.sourceUrl}
              className="card group overflow-hidden border border-white/10 bg-navy-900 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_44px_-14px_rgb(45_212_255/0.55)]"
            >
              {p.image && (
                <Image src={p.image} alt="" width={800} height={450} unoptimized className="aspect-video w-full object-cover" />
              )}
              <div className="card-body">
                <div className="flex items-center justify-between gap-3">
                  <span className="badge badge-primary badge-soft font-semibold uppercase tracking-wider">{p.category}</span>
                  <time className="text-sm text-foreground/50">{p.displayDate}</time>
                </div>
                <h3 className="card-title text-xl leading-snug group-hover:text-accent">{p.title}</h3>
                <span className="mt-2 text-base font-semibold text-accent">Read →</span>
              </div>
            </PostLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
