import type { ImageKey } from "@/content/images";
import type { IconName } from "@/components/ui/Icon";

export const hero = {
  eyebrow: "AI-assisted weapon & violence detection · 24/7 human monitoring & verification",
  title: "AI-enhanced safety and well-being for students, staff and communities.",
  lead: "AI-assisted weapon detection, device activity intelligence and OSINT keeps you proactive, not reactive.",
  primary: { label: "Talk to a Safety Specialist", href: "/contact" },
  secondary: { label: "See the 90 ms library detection", href: "/news" },
  stats: [
    { value: "90 ms", label: "Library gun detection time" },
    { value: "4–6 s", label: "From verification to alert" },
    { value: "24/7", label: "Human monitoring" },
    { value: "100K+", label: "Events served" },
  ],
};

export const steps = [
  {
    n: "01",
    title: "AI detects the threat",
    body: "Computer vision watches your existing camera feeds for visible weapons and violence, while gunshot detection covers what cameras can't see. No costly hardware replacement.",
    bullets: [
      "Visual weapon and violence detection",
      "Audible gunshot detection",
      "Works with the cameras you already have",
    ],
    href: "/services/ai-weapon-detector",
  },
  {
    n: "02",
    title: "Humans verify in real time",
    body: "Every potential threat goes to trained analysts who confirm it around the clock, so staff aren't chasing false alarms.",
    bullets: [
      "24/7 human verification",
      "Fewer false positives",
      "Less screen fatigue for your team",
    ],
    href: "/unified-ai-safety",
  },
  {
    n: "03",
    title: "Instant alerts go out",
    body: "Confirmed threats reach administrators, security and emergency services within seconds, so the response starts while it still matters.",
    bullets: [
      "Alerts in 4–6 seconds",
      "Administrators, security and 911",
      "Automated mass communication",
    ],
    href: "/services/ai-weapon-detector",
  },
];

export const whyAi: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "AI that understands safety",
    body: "Trained on physical and digital threats, it recognizes weapons, violence and online harm, and keeps learning as risks change.",
  },
  {
    icon: "users",
    title: "AI that enhances humans",
    body: "It takes over constant monitoring so staff can focus on judgment, response and student care.",
  },
  {
    icon: "bolt",
    title: "AI that reduces cost",
    body: "Several safety tools in one platform, running on existing cameras, which lowers total cost of ownership.",
  },
];

export const features: { icon: IconName; title: string; body: string; image?: ImageKey }[] = [
  {
    icon: "eye",
    title: "Visual weapon detection & gunshot detection",
    body: "Covers visible and audible threats across campuses, buildings and public spaces.",
    image: "weapon",
  },
  {
    icon: "bolt",
    title: "24/7 human verification & instant alerting",
    body: "Analysts confirm threats, then administrators, security or emergency services are notified within 4–6 seconds.",
    image: "humanVerification",
  },
  {
    icon: "heart",
    title: "Advanced digital wellness analytics",
    image: "aiAnalysis",
    body: "Generative AI flags self-harm, cyberbullying, violence and mental-health concerns across email, documents, social media and web searches. Includes a web filter, parental app and compliance tools.",
  },
  {
    icon: "lock",
    title: "Full control of your data with privacy",
    image: "dataPrivacy",
    body: "Recording happens only when a threat is detected, and your organization keeps full control of its data.",
  },
];

export const roles = [
  {
    role: "Security directors & chiefs",
    body: "Real-time insight from physical and digital activity to spot threats during planning and response.",
  },
  {
    role: "Administrators",
    body: "Early warning signs of mental-health struggles, bullying and self-harm.",
  },
  {
    role: "Teachers",
    body: "Clearer visibility into student challenges and safety concerns.",
  },
  {
    role: "Parents",
    body: "Know when a child may need extra support, and work with the school to provide it.",
  },
];

export const industries: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "building",
    title: "Schools & districts",
    body: "Protect students and staff across K-12 campuses.",
  },
  {
    icon: "city",
    title: "Cities & municipalities",
    body: "Safer streets, parks and public buildings.",
  },
  {
    icon: "church",
    title: "Houses of worship",
    body: "Peace of mind for congregations and events.",
  },
  {
    icon: "pin",
    title: "Public venues",
    body: "Temporary or remote sites, including solar-powered trailers.",
  },
];

export const impact = [
  { value: "100K+", label: "Events served" },
  { value: "4,500", label: "People served" },
  { value: "30+", label: "Locations" },
  { value: "10+", label: "Areas served" },
];

export const coreValues = [
  "Delight customers",
  "Inspire each other",
  "Build something better",
  "Develop lasting connection",
  "Enrich our communities",
];
