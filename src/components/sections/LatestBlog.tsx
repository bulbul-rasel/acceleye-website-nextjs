import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getPosts } from "@/lib/posts";

// Latest posts from /content/blog.
export default function LatestBlog() {
  const [latest, ...more] = getPosts("blog");
  if (!latest) return null;
  const rest = more.slice(0, 3);
  return (
    <section className="border-t border-white/10 py-24 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Link
          href={`/blog/${latest.slug}`}
          className="group relative flex min-h-80 flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-700 via-navy-900 to-navy-950 p-8 sm:p-10"
        >
          <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
          {latest.image && <Image src={latest.image} alt="" fill unoptimized className="object-cover" />}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" aria-hidden="true" />
          <div className="relative">
            <span className="badge badge-primary badge-soft font-semibold uppercase tracking-wider">Read latest blog</span>
            <time className="ml-3 text-sm text-foreground/60">{latest.displayDate}</time>
            <h3 className="mt-4 text-2xl font-bold leading-tight text-white group-hover:text-accent sm:text-3xl">{latest.title}</h3>
            <span className="mt-5 inline-block text-base font-semibold text-accent">Read the post →</span>
          </div>
        </Link>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">More from the blog</p>
          <ul className="mt-4 divide-y divide-white/10">
            {rest.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="block py-5 hover:text-accent">
                  <time className="text-sm text-foreground/50">{p.displayDate}</time>
                  <span className="mt-1 block font-semibold text-white">{p.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button href="/blog" variant="ghost" arrow>Browse all articles</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
