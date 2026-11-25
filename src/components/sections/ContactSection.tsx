"use client";

import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export default function ContactSection({
  id = "contact",
  title = "Let us show you a demo",
}: {
  id?: string;
  title?: string;
}) {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...data }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error);
      toast.success("Thank you for your response. We'll be in touch soon.");
      form.reset();
    } catch (err) {
      toast.error(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again or call us.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-white/10 bg-navy-900/50 py-24 lg:py-28"
    >
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title={title}
            lead="Tell us about your campus or organization. A safety specialist will get back to you, usually within 48 hours."
          />
          <ul className="mt-8 space-y-4 text-foreground/80">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 hover:text-accent">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Icon name="phone" />
                </span>
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-accent">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Icon name="mail" />
                </span>
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-white/10 bg-navy-900 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="form-control">
              <span className="mb-1.5 block text-base text-foreground/80">Your name *</span>
              <input name="name" required autoComplete="name" className="input w-full" />
            </label>
            <label className="form-control">
              <span className="mb-1.5 block text-base text-foreground/80">Your email *</span>
              <input name="email" type="email" required autoComplete="email" className="input w-full" />
            </label>
          </div>

          <label className="form-control mt-5 block">
            <span className="mb-1.5 block text-base text-foreground/80">Subject</span>
            <input name="subject" className="input w-full" />
          </label>

          <label className="form-control mt-5 block">
            <span className="mb-1.5 block text-base text-foreground/80">Your message *</span>
            <textarea name="message" required rows={4} className="textarea w-full" />
          </label>

          {/* Honeypot: hidden from people, bots fill it in */}
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary mt-6 w-full rounded-full sm:w-auto sm:px-10"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              "Send message"
            )}
          </button>
        </form>
      </Container>
    </section>
  );
}
