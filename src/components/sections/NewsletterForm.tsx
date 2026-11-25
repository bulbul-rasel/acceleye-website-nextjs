"use client";

import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error);
      toast.success("You're subscribed. Thank you!");
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
      className="mt-6 flex max-w-sm gap-2"
      aria-label="Newsletter"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Your email"
        className="input input-sm h-11 min-w-0 flex-1 rounded-full bg-navy-900 px-4"
      />
      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary btn-sm h-11 rounded-full px-5"
      >
        {loading ? <span className="loading loading-spinner loading-xs" /> : "Subscribe"}
      </button>
    </form>
  );
}
