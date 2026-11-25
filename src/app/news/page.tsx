import Achievements from "@/components/sections/Achievements";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import NewsList from "@/components/sections/NewsList";
import LatestBlog from "@/components/sections/LatestBlog";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "News",
  description:
    "AccelEye news: school district deployments, integrations with Verkada and AxxonSoft, conference appearances, interviews and live tests.",
};

export default function NewsPage() {
  const posts = getPosts("news").map(({ body, ...rest }) => (void body, rest));
  return (
    <>
      <PageHero
        eyebrow="News"
        title="AccelEye in the"
        highlight="news"
        lead="Deployments, integrations, live tests, conferences and interviews, all in one place."
        primary={{ label: "Read the latest", href: "#latest" }}
        secondary={{ label: "Read the blog", href: "/blog" }}
        stats={[
          { value: String(posts.length), label: "News items" },
          { value: "90 ms", label: "Library detection" },
          { value: "2", label: "School district deployments" },
        ]}
      />
      <div id="latest" className="scroll-mt-24">
        <NewsList posts={posts} />
      </div>
      <Achievements />
      <LatestBlog />
      <CtaBand
        title="Want to be our next success story?"
        lead="Call us to talk through your security requirements, or request a demo."
        primaryLabel="Request a Demo"
        primaryHref="/contact"
      />
      <ContactSection />
    </>
  );
}
