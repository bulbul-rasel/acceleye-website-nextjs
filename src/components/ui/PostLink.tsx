import Link from "next/link";
import type { ComponentProps } from "react";

// Every post opens its own page inside the site (content is read from /content).
export default function PostLink({
  kind,
  slug,
  sourceUrl: _sourceUrl, // accepted but unused, so it never reaches the DOM
  ...rest
}: { kind: "news" | "blog"; slug: string; sourceUrl?: string } & Omit<ComponentProps<"a">, "href">) {
  return <Link href={`/${kind}/${slug}`} {...rest} />;
}
