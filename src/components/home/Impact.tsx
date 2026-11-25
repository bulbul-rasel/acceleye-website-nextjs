import Container from "@/components/ui/Container";
import { impact } from "@/content/home";

export default function Impact() {
  return (
    <section className="border-y border-white/10 bg-navy-950 py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {impact.map((s) => (
            <div key={s.label} className="text-center">
              <dd className="text-5xl font-extrabold tracking-tight text-gradient sm:text-6xl">{s.value}</dd>
              <dt className="mt-3 text-base font-semibold uppercase tracking-wider text-foreground/70">{s.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
