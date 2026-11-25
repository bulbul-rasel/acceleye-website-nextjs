"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./ui/Container";
import Icon from "./ui/Icon";
import Logo from "./Logo";
import { nav } from "@/content/site";

export default function Header() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);

  const closeAll = () => {
    setOpenIdx(null);
    setMobile(false);
  };

  // Escape closes the mega menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/90 backdrop-blur-xl">
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <Logo />

        {/* Desktop mega menu */}
        <nav className="hidden h-full xl:block" aria-label="Main">
          <ul className="flex h-full items-stretch">
            {nav.map((item, i) => {
              if (!("columns" in item)) {
                return (
                  <li key={item.label} className="flex">
                    <Link
                      href={item.href}
                      className="relative flex items-center whitespace-nowrap px-4 text-base font-semibold text-foreground/85 transition hover:text-white xl:px-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const isOpen = openIdx === i;
              return (
                <li
                  key={item.label}
                  className="flex"
                  onMouseEnter={() => setOpenIdx(i)}
                  onMouseLeave={() => setOpenIdx(null)}
                  onFocus={() => setOpenIdx(i)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null))
                      setOpenIdx(null);
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`relative flex items-center gap-1.5 whitespace-nowrap px-4 text-base font-semibold transition xl:px-4 ${
                      isOpen ? "text-white" : "text-foreground/85 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <Icon
                      name="chevron"
                      className={`h-4 w-4 transition ${isOpen ? "rotate-180 text-accent" : "opacity-60"}`}
                    />
                    <span
                      className={`absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-accent transition xl:inset-x-4 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>

                  {/* mega panel, anchored to the header */}
                  <div
                    className={`absolute inset-x-0 top-full transition duration-150 ${
                      isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="border-b border-white/10 bg-navy-900 shadow-2xl shadow-black/50">
                      <Container
                        className="grid gap-10 py-10"
                      >
                        <div
                          className="grid gap-10"
                          style={{
                            gridTemplateColumns: `repeat(${item.columns.length}, minmax(0, 1fr)) 22rem`,
                          }}
                        >
                          {item.columns.map((col) => (
                            <div key={col.title}>
                              <p className="mb-4 px-3 text-sm font-bold uppercase tracking-[0.2em] text-accent">
                                {col.title}
                              </p>
                              <ul className="space-y-1">
                                {col.links.map((l) => (
                                  <li key={l.label}>
                                    <Link
                                      href={l.href}
                                      onClick={closeAll}
                                      className="group/link flex items-start gap-4 rounded-2xl p-3 transition hover:bg-white/5"
                                    >
                                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent transition group-hover/link:bg-accent group-hover/link:text-navy-950">
                                        <Icon name={l.icon} className="h-6 w-6" />
                                      </span>
                                      <span>
                                        <span className="block text-lg font-semibold text-white group-hover/link:text-accent">
                                          {l.label}
                                        </span>
                                        <span className="mt-0.5 block text-base leading-snug text-foreground/70">
                                          {l.desc}
                                        </span>
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                          {/* feature card */}
                          <Link
                            href={item.feature.href}
                            onClick={closeAll}
                            className="group/feat relative flex flex-col justify-end overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 p-7"
                          >
                            <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
                            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
                            <div className="relative">
                              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                                {item.feature.eyebrow}
                              </p>
                              <p className="mt-3 text-2xl font-extrabold leading-tight text-white">
                                {item.feature.title}
                              </p>
                              <p className="mt-3 text-base leading-relaxed text-foreground/80">
                                {item.feature.body}
                              </p>
                              <span className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-accent">
                                {item.feature.cta}
                                <Icon
                                  name="arrow"
                                  className="h-4 w-4 transition-transform group-hover/feat:translate-x-1"
                                />
                              </span>
                            </div>
                          </Link>
                        </div>
                      </Container>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* actions */}
        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-accent px-6 py-3 text-base font-bold text-navy-950 shadow-[0_0_30px_-6px_rgb(45_212_255/0.7)] transition hover:bg-white"
          >
            Request a Demo
          </Link>
        </div>

        {/* mobile controls */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            type="button"
            onClick={() => setMobile((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-white"
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
          >
            <Icon name={mobile ? "close" : "menu"} />
          </button>
        </div>
      </Container>

      {/* Mobile menu: accordion */}
      {mobile && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-white/10 bg-navy-950 xl:hidden">
          <Container className="space-y-2 py-5">
            {nav.map((item) =>
              !("columns" in item) ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeAll}
                  className="block rounded-2xl border border-white/10 bg-navy-900 px-5 py-4 text-lg font-semibold text-white"
                >
                  {item.label}
                </Link>
              ) : (
              <details key={item.label} className="group rounded-2xl border border-white/10 bg-navy-900">
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-lg font-semibold text-white">
                  {item.label}
                  <Icon
                    name="chevron"
                    className="h-5 w-5 transition group-open:rotate-180"
                  />
                </summary>
                <div className="space-y-5 px-3 pb-4">
                  {item.columns.map((col) => (
                    <div key={col.title}>
                      <p className="px-2 pb-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        {col.title}
                      </p>
                      {col.links.map((l) => (
                        <Link
                          key={l.label}
                          href={l.href}
                          onClick={closeAll}
                          className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-base text-foreground/90 hover:bg-white/5"
                        >
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                            <Icon name={l.icon} className="h-5 w-5" />
                          </span>
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </details>
              ),
            )}
            <Link
              href="/contact"
              onClick={closeAll}
              className="mt-3 block rounded-full bg-accent px-5 py-4 text-center text-lg font-bold text-navy-950"
            >
              Request a Demo
            </Link>
          </Container>
        </div>
      )}

    </header>
  );
}
