// Site-wide content. Edit here and every page picks it up.
import type { IconName } from "@/components/ui/Icon";

export const site = {
  name: "AccelEye",
  copyrightYear: 2026,
  phone: "+1 (844) 755-4837",
  phoneHref: "tel:+18447554837",
  email: "support@accelx.net",
  social: [
    { label: "X / Twitter", href: "https://twitter.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export type NavLink = {
  label: string;
  href: string;
  desc: string;
  icon: IconName;
};
export type NavColumn = { title: string; links: NavLink[] };
export type NavFeature = {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
};
export type NavMenu = {
  label: string;
  columns: NavColumn[];
  feature: NavFeature;
};
export type NavSimple = { label: string; href: string };
export type NavItem = NavMenu | NavSimple;

// Announcement bar: a scrolling line at the very top of every page.
// Edit the messages below, add or remove lines, or set `enabled: false` to hide the bar.
// Each message can optionally link somewhere (use `href`).
export const announcements: {
  enabled: boolean;
  messages: { text: string; href?: string; external?: boolean }[];
} = {
  enabled: true,
  messages: [
    {
      text: "AccelEye's AI Detects a Gun in a School Library in 90 ms: Demonstrates preventing a potential disaster",
      href: "/blog/gun-detected-in-school-library",
    },
    {
      text: "AccelEye is now NMSDC-certified (MBE)",
      href: "/news/acceleye-achieves-nmsdc-mbe-certification",
    },
  ],
};

// Mega-menu structure (Omnilert-style). Pages not built yet link ahead.
export const nav: NavItem[] = [
  { label: "AI Weapon Detection", href: "/services/ai-weapon-detector" },
  { label: "Unified Safety & BTAM", href: "/unified-ai-safety" },
  {
    label: "Solutions",
    columns: [
      {
        title: "Hardware & apps",
        links: [
          { label: "AI Box", href: "/services/ai-box", desc: "On-prem and cloud AI video server for 10 to 240 cameras.", icon: "server" },
          { label: "AI SolarEye Trailer", href: "/services/ai-solar-eye-trailer", desc: "Solar-powered protection for outdoor events and remote sites.", icon: "sun" },
          { label: "SaveAlert App", href: "/services/save-alert", desc: "One-tap alerts with photo and GPS location.", icon: "mobile" },
          { label: "Faith Communities", href: "/faith", desc: "Threat detection and prevention for churches, mosques and religious schools.", icon: "church" },
        ],
      },
    ],
    feature: {
      eyebrow: "Case study",
      title: "A gun detected in a school library in 90 ms",
      body: "See how AI detection and human verification work together in real life.",
      href: "https://acceleye.com/acceleyes-ai-technology-detects-a-gun-in-a-school-library-and-demonstrates-preventing-a-potential-disaster/",
      cta: "Read the case study",
    },
  },
  {
    label: "Resources",
    columns: [
      {
        title: "Learn",
        links: [
          { label: "FAQ", href: "/faq", desc: "Speed, accuracy, integrations and how detection works.", icon: "chat" },
          { label: "News", href: "/news", desc: "Deployments, integrations, events and interviews.", icon: "file" },
          { label: "Blog", href: "/blog", desc: "Insights on school safety and AI, including metal detectors vs AI.", icon: "bulb" },
        ],
      },
      {
        title: "Trust & legal",
        links: [
          { label: "Compliance", href: "/compliance", desc: "Our compliance statement.", icon: "shield" },
          { label: "Privacy Policy", href: "/privacy", desc: "How we handle your data.", icon: "lock" },
          { label: "Terms & Conditions", href: "https://acceleye.com/termsconditions/", desc: "The terms of using our services.", icon: "file" },
        ],
      },
    ],
    feature: {
      eyebrow: "Questions?",
      title: "Find answers fast",
      body: "Search our FAQ on weapon, violence and fall detection.",
      href: "/faq",
      cta: "Open the FAQ",
    },
  },
  {
    label: "Company",
    columns: [
      {
        title: "AccelEye",
        links: [
          { label: "About us", href: "/about", desc: "A social enterprise making communities safer.", icon: "users" },
          { label: "Partners", href: "/partners", desc: "The platforms and teams we work with.", icon: "layers" },
          { label: "Become a partner", href: "/partners/register", desc: "Apply to join the partner program.", icon: "check" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "News", href: "/news", desc: "What’s new at AccelEye.", icon: "file" },
          { label: "Blog", href: "/blog", desc: "Insights on school safety and AI.", icon: "bulb" },
          { label: "Contact us", href: "/contact", desc: "Talk to a safety specialist.", icon: "mail" },
        ],
      },
    ],
    feature: {
      eyebrow: "Call us",
      title: "+1 (844) 755-4837",
      body: "Discuss your security requirements, or email for a free estimate. We usually reply within 48 hours.",
      href: "tel:+18447554837",
      cta: "Call now",
    },
  },
];

export const footerColumns = [
  {
    title: "Solutions",
    links: [
      { label: "AI Weapon Detector", href: "/services/ai-weapon-detector" },
      { label: "Unified AI Safety", href: "/unified-ai-safety" },
      { label: "AI Box", href: "/services/ai-box" },
      { label: "SaveAlert App", href: "/services/save-alert" },
      { label: "Faith Communities", href: "/faith" },
      { label: "AI SolarEye Trailer", href: "/services/ai-solar-eye-trailer" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Partners", href: "/partners" },
      { label: "News", href: "/news" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "https://acceleye.com/termsconditions/" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
];
