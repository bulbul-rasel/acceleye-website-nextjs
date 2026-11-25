#!/usr/bin/env node
// Usage: npm run new:news -- "Post title"   |   npm run new:blog -- "Post title"
import fs from "node:fs";
import path from "node:path";

const [kind, ...rest] = process.argv.slice(2);
const title = rest.join(" ").trim();
if (!["news", "blog"].includes(kind) || !title) {
  console.error('Usage: node scripts/new-post.mjs <news|blog> "Post title"');
  process.exit(1);
}
const slug = title.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 70).replace(/-$/, "");
const date = new Date().toISOString().slice(0, 10);
const dir = path.join(process.cwd(), "content", kind);
fs.mkdirSync(dir, { recursive: true });
const file = path.join(dir, `${date}-${slug}.md`);
if (fs.existsSync(file)) {
  console.error("Already exists:", file);
  process.exit(1);
}
const extra = kind === "news" ? `category: Event\nsource: "Where it happened"\n` : `category: Insight\n`;
fs.writeFileSync(
  file,
  `---\ntitle: "${title.replace(/"/g, '\\"')}"\ndate: ${date}\n${extra}excerpt: "One or two sentences shown on cards and in search results."\n# image: /images/${kind}/${slug}.jpg   (optional photo, put the file in public/images/${kind}/)\n# draft: true   (uncomment to hide it while you write)\n---\n\nWrite your post here in Markdown.\n\n## A heading\n\nParagraphs, **bold**, [links](https://acceleye.com), lists and tables all work.\n`,
);
console.log("Created", path.relative(process.cwd(), file));
