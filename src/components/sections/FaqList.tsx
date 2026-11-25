"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { faqGroups } from "@/content/faq";

// Searchable, filterable accordion (daisyUI collapse).
export default function FaqList() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("all");

  const total = faqGroups.reduce((n, g) => n + g.items.length, 0);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqGroups
      .filter((g) => group === "all" || g.id === group)
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (i) =>
            !q || i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q),
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [query, group]);

  const chips = [
    { id: "all", title: "All", count: total },
    ...faqGroups.map((g) => ({ id: g.id, title: g.title, count: g.items.length })),
  ];

  return (
    <section className="py-20 lg:py-28">
      <Container className="max-w-4xl">
        {/* search */}
        <label className="relative block">
          <span className="sr-only">Search questions</span>
          <Icon
            name="search"
            className="pointer-events-none absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-foreground/50"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions, e.g. “VMS” or “accuracy”"
            className="input input-lg h-16 w-full rounded-full pl-14 text-lg"
          />
        </label>

        {/* category chips */}
        <div className="mt-6 flex flex-wrap gap-3">
          {chips.map((c) => (
            <button
              key={c.id}
              onClick={() => setGroup(c.id)}
              aria-pressed={group === c.id}
              className={`rounded-full border px-5 py-2.5 text-base font-semibold transition ${
                group === c.id
                  ? "border-accent bg-accent text-navy-950"
                  : "border-white/15 text-foreground/80 hover:border-accent hover:text-accent"
              }`}
            >
              {c.title}
              <span className="ml-2 opacity-60">{c.count}</span>
            </button>
          ))}
        </div>

        {/* groups */}
        <div className="mt-12 space-y-14">
          {visible.map((g) => (
            <div key={g.id}>
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                {g.title}
              </h2>
              <div className="mt-6 space-y-3">
                {g.items.map((i) => (
                  <details
                    key={i.q}
                    className="collapse collapse-arrow rounded-2xl border border-white/10 bg-navy-900 open:border-accent/50"
                  >
                    <summary className="collapse-title text-xl font-semibold text-white">
                      {i.q}
                    </summary>
                    <div className="collapse-content text-lg leading-relaxed text-foreground/80">
                      <p className="pt-1">{i.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {visible.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-navy-900 p-12 text-center">
              <p className="text-2xl font-bold text-white">No matching questions</p>
              <p className="mt-2 text-lg text-foreground/70">
                Try a different word, or ask us directly using the form below.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
