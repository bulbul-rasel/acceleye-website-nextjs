import { renderMarkdown } from "@/lib/posts";

// Renders a post's Markdown. Content comes from files in /content, written by the site owner.
export default function PostBody({ markdown }: { markdown: string }) {
  return (
    <div
      className="post-body"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }}
    />
  );
}
