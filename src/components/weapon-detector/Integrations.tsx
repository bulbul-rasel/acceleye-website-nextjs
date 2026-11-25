import SiteImage from "@/components/ui/SiteImage";
import IntegrationsTabs from "./IntegrationsTabs";

export default function Integrations() {
  const opts = { aspect: "aspect-[16/10]", sizes: "(min-width: 1024px) 30vw, 90vw", glow: true } as const;
  return (
    <IntegrationsTabs
      visuals={{
        cctv: <SiteImage name="cctv" {...opts} />,
        uav: <SiteImage name="drone" {...opts} />,
        bodycams: <SiteImage name="bodycam" {...opts} />,
      }}
    />
  );
}
