import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import { saveAlert } from "@/content/weaponDetector";

export default function SaveAlertApp() {
  return (
    <section className="border-y border-white/10 bg-navy-900/50 py-24 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="min-w-0">
          <SectionHeading
            align="left"
            eyebrow="Mobile"
            title={saveAlert.title}
            lead={saveAlert.lead}
          />
          <ul className="mt-8 space-y-3">
            {saveAlert.notes.map((n) => (
              <li key={n} className="flex items-start gap-3 text-foreground/80">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {n}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/services/save-alert" variant="secondary" arrow>
              About SaveAlert
            </Button>
          </div>
        </div>

        <div className="min-w-0 rounded-3xl border border-white/10 bg-navy-900 p-8">
          <SiteImage
            name="saveAlertBanner"
            aspect="aspect-[16/9]"
            className="mb-8"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/50">
            Alert types
          </p>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {saveAlert.alertTypes.map((t, i) => (
              <li
                key={t}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <span className="badge badge-primary badge-soft font-mono">
                  {i + 1}
                </span>
                <span className="font-medium text-white">{t}</span>
              </li>
            ))}
          </ol>

          {/* daisyUI stats */}
          <div className="stats stats-vertical mt-6 w-full border border-white/10 bg-navy-950 sm:stats-horizontal">
            {saveAlert.facts.map((f) => (
              <div key={f.label} className="stat">
                <div className="stat-value text-accent">{f.value}</div>
                <div className="stat-title text-foreground/60">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
