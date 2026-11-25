import Link from "next/link";
import Container from "./ui/Container";
import Logo from "./Logo";
import NewsletterForm from "./sections/NewsletterForm";
import { footerColumns, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <section className="border-b border-white/10 bg-navy-900/60 py-16 text-center">
        <Container>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Let’s save lives!</h2>
          <p className="mt-3 text-xl font-semibold text-accent">We are a social enterprise</p>
          <p className="mx-auto mt-5 max-w-3xl text-xl font-semibold text-white">
            Most effective solution for active shooter threat in school and public settings.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-lg leading-relaxed text-foreground/70">
            AccelEye analyzes video feeds from security cameras and saves lives through early gun and active shooter
            detection, human verification, automated mass communication, and early response.
          </p>
          <p className="mt-5 text-base text-foreground/70">
            Read AccelEye’s{" "}
            <Link href="/privacy" className="font-semibold text-accent hover:underline">Privacy Policy</Link> and{" "}
            <a href="https://acceleye.com/termsconditions/" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">Terms &amp; Conditions</a>{" "}
            to know more about us.
          </p>
        </Container>
      </section>
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-base leading-relaxed text-foreground/60">
            AI-assisted weapon and violence detection with 24/7 human
            monitoring and verification, so help is on the way in seconds.
          </p>
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-base text-foreground/60 transition hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-foreground/50 sm:flex-row sm:items-center">
          <p>
            © {site.copyrightYear} AccelEye. All rights reserved.
          </p>
          <div className="flex gap-5">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
