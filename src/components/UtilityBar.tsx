import Container from "./ui/Container";
import Icon from "./ui/Icon";
import { site } from "@/content/site";

export default function UtilityBar() {
  return (
    <div className="border-b border-white/10 bg-navy-950 text-xs text-foreground/70">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
        <span className="hidden sm:inline">AI-assisted weapon and violence detection with 24/7 human verification</span>
        <div className="hidden items-center gap-5 sm:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 hover:text-white"
          >
            <Icon name="phone" className="h-3.5 w-3.5" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-1.5 hover:text-white"
          >
            <Icon name="mail" className="h-3.5 w-3.5" />
            {site.email}
          </a>
        </div>
      </Container>
    </div>
  );
}
