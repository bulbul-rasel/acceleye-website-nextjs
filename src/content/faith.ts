import type { FeatureItem } from "@/components/blocks/FeatureGrid";

export const faithStats = [
  { value: "100K+", label: "People served" },
  { value: "4,500", label: "Events served" },
  { value: "30+", label: "Locations" },
  { value: "10+", label: "Areas served" },
];

export const layers = [
  { icon: "eye" as const, when: "Where cameras can see", image: "weapon" as const, title: "Visual weapon detection", body: "AI analyzes your existing camera feeds for visible weapons." },
  { icon: "pulse" as const, when: "Where cameras cannot see", image: "gunshot" as const, title: "Gunshot detection", body: "Audio sensors cover blind spots, inside and out." },
  { icon: "mobile" as const, when: "When power or Wi-Fi fails", image: "saveAlertApp" as const, title: "SaveAlert mobile app", body: "Cellular-based emergency communication that keeps working when the network doesn’t." },
  { icon: "heart" as const, when: "Before harm happens", image: "faithCare" as const, title: "Self-harm and bullying prevention", body: "Behavioral analysis and digital threat monitoring help you step in early." },
];

export const audiences: FeatureItem[] = [
  { icon: "church", title: "Churches and Christian schools", body: "Pastoral staff focus on spiritual care while families feel secure." },
  { icon: "users", title: "Mosques and Islamic cultural centers", body: "Attendance and community programs return to full capacity." },
  { icon: "building", title: "Religious schools and academies", body: "A secure environment that supports learning and helps prevent bullying." },
];

export const caseStudies = [
  { name: "Grace Community Church", results: [{ value: "+25%", label: "Family program participation" }, { value: "2×", label: "Children’s ministry within 6 months" }] },
  { name: "Islamic Center of Northeast", results: [{ value: "100%", label: "Pre-incident attendance restored" }, { value: "Full", label: "Eid events back at capacity" }] },
  { name: "St. Mary’s Catholic Academy", results: [{ value: "+15%", label: "Test scores" }, { value: "−40%", label: "Behavioral incidents" }, { value: "98%", label: "Parent satisfaction" }] },
];

export const offer = [
  { title: "Free community assessment", body: "A $2,500 value, on us." },
  { title: "Grant funding assistance", body: "Help securing up to $75,000 through FEMA." },
  { title: "Free pilot evaluation", body: "See it working on your own cameras first." },
  { title: "Dedicated faith specialists", body: "People who understand your community." },
];
