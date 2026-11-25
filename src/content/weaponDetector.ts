import type { IconName } from "@/components/ui/Icon";

export const hero = {
  eyebrow: "AI Weapon Detector",
  title: "Dual Technology AI Weapon Detection",
  tagline: "See the threat. Hear the danger. Act instantly.",
  lead: "Visual gun detection on live video, paired with acoustic gunshot sensors, covers the areas cameras can't see, inside and outside your perimeter.",
  primary: { label: "Request a Demo", href: "#contact" },
  secondary: { label: "See the 90 ms library detection", href: "#demo" },
};

export const pillars: {
  icon: IconName;
  title: string;
  body: string;
  bullets: string[];
}[] = [
  {
    icon: "eye",
    title: "Visual weapon detection",
    body: "Works with the cameras you already have. Firearms are detected in seconds and security or the AccelEye monitoring center is alerted, giving you a first line of defense against active shooters.",
    bullets: [
      "Uses existing cameras",
      "Detects firearms in seconds",
      "Alerts security or the monitoring center",
    ],
  },
  {
    icon: "pulse",
    title: "Gunshot detection",
    body: "Acoustic sensors recognize gunfire and send real-time alerts, extending coverage to outdoor spaces, school perimeters and critical infrastructure.",
    bullets: [
      "Recognizes the sound of gunfire",
      "Real-time alerts",
      "Covers outdoors and perimeters",
    ],
  },
  {
    icon: "users",
    title: "24/7 human verification & instant alerting",
    body: "A trained review team confirms every alert in real time to reduce false positives and notify responders quickly.",
    bullets: [
      "Humans confirm every alert",
      "Fewer false positives",
      "Responders notified quickly",
    ],
  },
];

export const capabilities: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Violence detection",
    body: "Updates both sides with live data while responders are on their way.",
  },
  {
    icon: "eye",
    title: "Intruder detection",
    body: "Flags unauthorized people on camera so staff can react early.",
  },
  {
    icon: "bolt",
    title: "24/7 live monitoring & verification",
    body: "Analysts watch over your sites around the clock.",
  },
];

export const workflow = [
  {
    title: "AI weapon detection",
    body: "Cameras and acoustic sensors spot visible and audible threats.",
  },
  {
    title: "Detection notification",
    body: "The potential threat is sent immediately for review.",
  },
  {
    title: "AccelEye verification",
    body: "Trained analysts confirm the threat in real time.",
  },
  {
    title: "Fast response",
    body: "Staff and responders get verified, live information while they are en route.",
  },
];

export const demo = {
  title: "Watch AccelEye detect a gun",
  body: "See detection in action in a Santa Clara, CA school district.",
  vimeoId: "1069098717",
};

export const accuracy = [
  {
    value: 100,
    display: "~100%",
    label: "Handgun detection",
    note: "Including on black-and-white backgrounds",
  },
  {
    value: 95,
    display: "95%",
    label: "Infrared low light",
    note: "Accuracy in infrared low-light conditions",
  },
  {
    value: 96,
    display: "96%",
    label: "RGB low light",
    note: "Accuracy in RGB low-light conditions",
  },
];

export const integrations: {
  id: string;
  title: string;
  icon: IconName;
  headline: string;
  body: string;
  bullets: string[];
  stats: { value: string; label: string }[];
  works?: string[];
}[] = [
  {
    id: "cctv",
    title: "CCTV & VMS",
    icon: "camera",
    headline: "Works with the cameras and VMS you already run",
    body: "Detection plugs into your existing video, so you add protection without ripping anything out.",
    bullets: [
      "Connects to most VMS platforms and IP cameras",
      "Filters up to 99.95% of false alarms before anyone is alerted",
      "No rip-and-replace: use the cameras you already have",
      "Run through your VMS directly, or add an AI Box for on-prem processing",
    ],
    stats: [
      { value: "99.95%", label: "False alarms filtered" },
      { value: "90 ms", label: "Detection time" },
    ],
    works: ["Milestone", "ALTA", "AxxonSoft"],
  },
  {
    id: "uav",
    title: "UAV / drones",
    icon: "eye",
    headline: "Firearm detection from the air",
    body: "Add coverage where fixed cameras can’t reach, using drone video analyzed by the same AI.",
    bullets: [
      "Detects firearms in drone video",
      "Up to 50 m range with 4K drones",
      "Up to 100 m range with 8K cameras",
      "Extends your view across large outdoor areas and perimeters",
    ],
    stats: [
      { value: "50 m", label: "Range with 4K drones" },
      { value: "100 m", label: "Range with 8K cameras" },
    ],
  },
  {
    id: "bodycams",
    title: "Bodycams",
    icon: "users",
    headline: "Detection on the move",
    body: "Built for the hardest video: cameras that are moving, in difficult conditions.",
    bullets: [
      "Tracks objects against moving backgrounds",
      "Designed for harsh conditions",
      "Analysis and response in under one second",
      "Keeps working while the camera is moving",
    ],
    stats: [
      { value: "< 1 s", label: "Analysis & response" },
      { value: "Moving", label: "Backgrounds handled" },
    ],
  },
];

export const saveAlert = {
  title: "SaveAlert app",
  lead: "One tap sends an alert to administrators, security and the monitoring center, with the crisis type, a photo and GPS location attached.",
  alertTypes: ["Weapon", "Fire", "Medical emergency", "Violence", "Safe2Text"],
  facts: [
    { value: "99.99%", label: "Cloud uptime" },
    { value: "1 tap", label: "To send an alert" },
  ],
  notes: [
    "Works during power or internet outages over WiFi or mobile data",
    "Available for Android and iPhone",
    "Includes crisis type, photo and GPS location",
  ],
};

export const aiBox = {
  title: "AI Box hardware",
  lead: "Run detection on your own premises with a box sized to your camera count.",
  models: [
    {
      name: "AI Box Starter",
      badge: "Compact",
      capacity: "Up to 10 IP cameras",
      body: "A compact GPU workstation for single buildings and smaller sites.",
    },
    {
      name: "AI Box Pro",
      badge: "Enterprise",
      capacity: "40–240 cameras",
      body: "A rack-mounted GPU server for multi-site deployments.",
    },
  ],
  note: "Already running a VMS? You can integrate directly without an AI Box.",
};
