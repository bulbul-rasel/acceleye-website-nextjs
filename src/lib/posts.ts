import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

// News and blog posts live as Markdown files in /content/news and /content/blog.
// Add a file (or run `npm run new:news "Title"` / `npm run new:blog "Title"`) and it
// appears on the site automatically. See content/README.md.

export type PostKind = "news" | "blog";

export type Post = {
  kind: PostKind;
  slug: string;
  title: string;
  date: string; // ISO, e.g. 2026-11-11
  displayDate: string;
  category: string;
  source?: string;
  excerpt: string;
  image?: string; // optional: only shown if set in frontmatter `image`
  sourceUrl?: string;
  featured?: boolean; // highlighted as an achievement or partnership (frontmatter `featured: true`)
  body: string;
};

const ROOT = path.join(process.cwd(), "content");

function parse(raw: string): { data: Record<string, string>; body: string } {
  const m = raw.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i < 1) continue;
    let v = line.slice(i + 1).trim();
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1).replace(/\\"/g, '"');
    data[line.slice(0, i).trim()] = v;
  }
  return { data, body: m[2].trim() };
}

function fmt(iso: string) {
  const d = new Date(iso + "T00:00:00Z");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export function getPosts(kind: PostKind): Post[] {
  const dir = path.join(ROOT, kind);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => {
      const { data, body } = parse(fs.readFileSync(path.join(dir, f), "utf8"));
      const slug = data.slug || f.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
      return {
        kind,
        slug,
        title: data.title || slug,
        date: data.date || "1970-01-01",
        displayDate: data.dateUnknown === "true" ? "" : fmt(data.date || ""),
        category: data.category || (kind === "news" ? "News" : "Insight"),
        source: data.source,
        excerpt: data.excerpt || body.split("\n\n")[0].slice(0, 200),
        image: data.image || undefined,
        sourceUrl: data.sourceUrl || undefined,
        featured: data.featured === "true",
        body,
        draft: data.draft === "true",
      };
    })
    .filter((p) => !(p as { draft?: boolean }).draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getFeatured(n = 4): Post[] {
  return [...getPosts("news"), ...getPosts("blog")]
    .filter((p) => p.featured)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, n);
}

export function getPost(kind: PostKind, slug: string) {
  return getPosts(kind).find((p) => p.slug === slug);
}

export function renderMarkdown(md: string): string {
  return marked.parse(md, { gfm: true, async: false }) as string;
}

export function getLatest(n: number) {
  return [...getPosts("news"), ...getPosts("blog")]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, n);
}
export const postHref = (p: Pick<Post, "kind" | "slug">) => `/${p.kind}/${p.slug}`;
