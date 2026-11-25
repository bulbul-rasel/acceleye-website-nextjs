import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import Icon, { type IconName } from "@/components/ui/Icon";
import { coreValues } from "@/content/home";

const meta: { image: "coreValue1" | "coreValue2" | "coreValue3" | "coreValue4" | "coreValue5"; icon: IconName; text: string }[] = [
  { image: "coreValue1", icon: "heart", text: "Every school and family we serve should feel safer and better supported after working with us." },
  { image: "coreValue2", icon: "users", text: "We lift each other up, share what we learn and celebrate the wins that protect people." },
  { image: "coreValue3", icon: "bolt", text: "We keep improving the technology, because a safer school is never finished." },
  { image: "coreValue4", icon: "shield", text: "We build trust that lasts with the schools, parents and responders who rely on us." },
  { image: "coreValue5", icon: "eye", text: "We give back to the communities we are part of and stay on a mission to reverse unsafe trends." },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-accent/15 blur-3xl" style={{ animation: "cv-float 9s ease-in-out infinite" }} aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" style={{ animation: "cv-float 11s ease-in-out infinite" }} aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Our culture"
          title="Five core values shape our culture"
          lead="The beliefs that guide how we build our technology and how we work with schools and communities."
        />
        <ol className="mt-16 flex flex-col gap-4 lg:h-[34rem] lg:flex-row">
          {coreValues.map((v, i) => {
            const m = meta[i];
            return (
              <li
                key={v}
                className="group relative min-h-[22rem] flex-1 overflow-hidden rounded-3xl border border-white/10 transition-[flex,border-color,box-shadow] duration-500 ease-out hover:border-accent/70 hover:shadow-[0_0_60px_-12px_rgb(45_212_255/0.7)] lg:min-h-0 lg:hover:flex-[2.6]"
              >
                <SiteImage name={m.image} background sizes="(min-width: 1024px) 40vw, 95vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/10 transition-opacity duration-500 group-hover:from-navy-950/95" />
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,rgb(45_212_255),transparent,rgb(45_212_255),transparent)] bg-[length:200%_100%] opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ animation: "cv-shine 3s linear infinite" }}
                />
                <span className="pointer-events-none absolute right-5 top-2 select-none text-8xl font-black leading-none text-transparent [-webkit-text-stroke:2px_rgb(255_255_255/0.35)] transition-transform duration-500 group-hover:scale-110">
                  {i + 1}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-navy-950 shadow-[0_0_28px_-4px_rgb(45_212_255/0.9)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
                    <Icon name={m.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 break-words text-lg font-extrabold leading-tight text-white transition-all duration-500 group-hover:lg:text-2xl">{v}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-lg leading-relaxed text-foreground/85 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 max-lg:max-h-40 max-lg:opacity-100">
                    {m.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
