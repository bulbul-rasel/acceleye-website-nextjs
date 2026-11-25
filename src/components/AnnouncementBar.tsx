import Link from "next/link";
import MarqueeRow from "@/components/ui/MarqueeRow";
import { announcements } from "@/content/site";

// Custom announcement line scrolling across the very top of the site.
// Edit the text in `announcements` (src/content/site.ts).
export default function AnnouncementBar() {
  if (!announcements.enabled || announcements.messages.length === 0) return null;
  return (
    <div className="border-b border-accent/20 bg-accent/10 py-2 text-sm font-semibold text-white">
      <MarqueeRow speed={45}>
        {announcements.messages.map((m) => {
          const inner = (
            <>
              <span className="mx-3 inline-block h-2 w-2 rounded-full bg-alert align-middle" aria-hidden="true" />
              {m.text}
              <span className="mx-8 text-accent/60" aria-hidden="true">◆</span>
            </>
          );
          return m.href ? (
            <Link key={m.text} href={m.href} className="hover:text-accent">
              {inner}
            </Link>
          ) : (
            <span key={m.text}>{inner}</span>
          );
        })}
      </MarqueeRow>
    </div>
  );
}
