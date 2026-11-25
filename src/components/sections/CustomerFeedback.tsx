"use client";

import { useCallback, useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { feedback } from "@/content/shared";

// One featured card at a time, with a people picker, arrows and gentle autoplay.
export default function CustomerFeedback({
  eyebrow = "Read our customer feedback",
  title = "We deliver what we promise",
}: {
  eyebrow?: string;
  title?: string;
} = {}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = feedback.length;

  const go = useCallback(
    (i: number) => setActive(((i % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % count), 7000);
    return () => clearInterval(t);
  }, [paused, count]);

  const current = feedback[active];

  return (
    <section id="feedback" className="scroll-mt-24 border-y border-white/10 bg-navy-900/50 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          lead="What the people closest to school safety say after seeing AccelEye in action."
        />

        <div
          className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[18rem_1fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* people picker */}
          <div
            role="tablist"
            aria-label="Customer feedback"
            className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {feedback.map((f, i) => (
              <button
                key={f.name}
                role="tab"
                aria-selected={i === active}
                onClick={() => go(i)}
                className={`flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                  i === active
                    ? "border-accent/60 bg-accent/10"
                    : "border-white/10 bg-navy-900 hover:border-white/30"
                }`}
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-lg font-bold ${
                    i === active
                      ? "bg-accent text-navy-950"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {f.name[0]}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-base font-semibold text-white">
                    {f.name}
                  </span>
                  <span className="block truncate text-sm text-foreground/60">
                    {f.role}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* featured card */}
          <div className="relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 p-8 sm:p-12">
            <div
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute right-8 top-2 select-none font-serif text-[9rem] leading-none text-accent/15"
              aria-hidden="true"
            >
              ”
            </span>

            <div key={active} role="tabpanel" className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                {current.role}
              </p>
              <p className="mt-6 text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-4xl">
                {current.quote}
              </p>
            </div>

            <div className="relative mt-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-lg font-bold text-navy-950">
                  {current.name[0]}
                </span>
                <span className="text-lg font-semibold text-white">
                  {current.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => go(active - 1)}
                  aria-label="Previous feedback"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-accent hover:text-accent"
                >
                  <Icon name="arrow" className="h-5 w-5 rotate-180" />
                </button>
                <button
                  onClick={() => go(active + 1)}
                  aria-label="Next feedback"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-accent hover:text-accent"
                >
                  <Icon name="arrow" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* dots */}
        <div className="mt-8 flex justify-center gap-2" aria-hidden="true">
          {feedback.map((f, i) => (
            <span
              key={f.name}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-8 bg-accent" : "w-3 bg-white/20"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
