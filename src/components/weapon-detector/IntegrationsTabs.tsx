"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ReactNode } from "react";
import { integrations } from "@/content/weaponDetector";

// Real tabs (buttons + state) so every integration shows full content.
export default function IntegrationsTabs({ visuals }: { visuals: Record<string, ReactNode> }) {
  const [active, setActive] = useState(0);
  const t = integrations[active];

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Integrations"
          title="Fits the cameras you already run"
          lead="From fixed CCTV to drones and body-worn cameras, detection plugs into the video you already have."
        />

        <div className="mx-auto mt-14 max-w-5xl">
          {/* tab buttons */}
          <div
            role="tablist"
            aria-label="Integrations"
            className="grid gap-3 sm:grid-cols-3"
          >
            {integrations.map((it, i) => (
              <button
                key={it.id}
                role="tab"
                id={`tab-${it.id}`}
                aria-selected={i === active}
                aria-controls={`panel-${it.id}`}
                onClick={() => setActive(i)}
                className={`flex items-center justify-center gap-3 rounded-2xl border px-5 py-4 text-lg font-bold transition ${
                  i === active
                    ? "border-accent bg-accent text-navy-950 shadow-[0_0_30px_-8px_rgb(45_212_255/0.7)]"
                    : "border-white/10 bg-navy-900 text-white hover:border-accent/50"
                }`}
              >
                <Icon name={it.icon} className="h-6 w-6" />
                {it.title}
              </button>
            ))}
          </div>

          {/* panel */}
          <div
            role="tabpanel"
            id={`panel-${t.id}`}
            aria-labelledby={`tab-${t.id}`}
            className="mt-6 grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr]"
          >
            <div>
              <h3 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {t.headline}
              </h3>
              <p className="mt-4 text-xl leading-relaxed text-foreground/80">
                {t.body}
              </p>
              <ul className="mt-8 space-y-4">
                {t.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-lg text-foreground/90"
                  >
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <div key={t.id}>{visuals[t.id]}</div>
              {t.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-navy-950/70 px-7 py-6"
                >
                  <div className="text-5xl font-extrabold tracking-tight text-accent">
                    {s.value}
                  </div>
                  <div className="mt-1 text-base uppercase tracking-wider text-foreground/60">
                    {s.label}
                  </div>
                </div>
              ))}

              {t.works && (
                <div className="rounded-2xl border border-white/10 bg-navy-950/70 px-7 py-6">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">
                    Works with
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.works.map((w) => (
                      <span
                        key={w}
                        className="badge badge-lg badge-outline badge-primary font-semibold"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
