"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";
import { countries, usStates } from "@/content/company";

const terms = [
  "You must be 18 or older, live in the US, and be a real person (no bot accounts).",
  "Use your legal name and a valid email. One person, one login, one account.",
  "You are responsible for your account’s security and all activity under it.",
  "Commissions need tracked links and sales. Payouts begin after $20 in earnings and are paid monthly.",
  "No earning commission on your own purchases, no press releases about the agreement, and no showing product prices on your own site.",
  "Follow applicable laws, including anti-spam rules.",
  "You are an independent contractor, not a partner or employee. Either side can end the agreement, and AccelEye can end the program at any time.",
  "Disputes go to confidential arbitration under American Arbitration Association rules, under US law.",
];

const field = "input w-full";
const label = "mb-1.5 block text-base text-foreground/80";

export default function AffiliateForm() {
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(true);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (!data.agree) {
      setAgreed(false);
      toast.error("You must agree to the terms.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "affiliate", ...data }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error);
      toast.success("Application received. Expect a response within six weeks.");
      form.reset();
    } catch (err) {
      toast.error(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-3xl border border-white/10 bg-navy-900 p-6 sm:p-10"
    >
      <p className="text-base text-foreground/60">* Required fields</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label>
          <span className={label}>First name *</span>
          <input name="firstName" required autoComplete="given-name" className={field} />
        </label>
        <label>
          <span className={label}>Last name *</span>
          <input name="lastName" required autoComplete="family-name" className={field} />
        </label>
        <label>
          <span className={label}>Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label>
          <span className={label}>Email address *</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="sm:col-span-2">
          <span className={label}>Address line 1 *</span>
          <input name="address1" required autoComplete="address-line1" className={field} />
        </label>
        <label className="sm:col-span-2">
          <span className={label}>Address line 2</span>
          <input name="address2" autoComplete="address-line2" className={field} />
        </label>
        <label>
          <span className={label}>City *</span>
          <input name="city" required autoComplete="address-level2" className={field} />
        </label>
        <label>
          <span className={label}>State *</span>
          <select name="state" required defaultValue="" className="select w-full">
            <option value="" disabled>
              Select an option
            </option>
            {usStates.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          <span className={label}>Zip code *</span>
          <input name="zip" required autoComplete="postal-code" className={field} />
        </label>
        <label>
          <span className={label}>Country *</span>
          <select name="country" required defaultValue="" className="select w-full">
            <option value="" disabled>
              Select an option
            </option>
            {countries.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          <span className={label}>Company name *</span>
          <input name="company" required autoComplete="organization" className={field} />
        </label>
        <label>
          <span className={label}>Website URL *</span>
          <input name="websiteUrl" required inputMode="url" placeholder="https://" className={field} />
        </label>
      </div>

      {/* honeypot */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <details className="mt-8 rounded-2xl border border-white/10 bg-navy-950/60 p-5">
        <summary className="cursor-pointer text-lg font-semibold text-white">
          Affiliate program terms (summary)
        </summary>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/80">
          {terms.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-foreground/60">
          This is a summary. Read the full{" "}
          <a
            href="https://acceleye.com/termsconditions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            Terms and Conditions
          </a>
          .
        </p>
      </details>

      <label className="mt-6 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="agree"
          onChange={() => setAgreed(true)}
          className="checkbox checkbox-primary mt-1"
        />
        <span className="text-lg text-foreground/90">
          I agree to the{" "}
          <a
            href="https://acceleye.com/termsconditions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            Terms and Conditions
          </a>
          . *
        </span>
      </label>
      {!agreed && (
        <p role="alert" className="mt-2 text-base font-semibold text-alert">
          You must agree to the terms.
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary btn-lg rounded-full px-10"
        >
          {loading ? <span className="loading loading-spinner" /> : "Submit application"}
        </button>
        <Link href="/partners" className="text-lg font-semibold text-accent hover:underline">
          ← Back to partners
        </Link>
      </div>
    </form>
  );
}
