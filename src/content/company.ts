import type { IconName } from "@/components/ui/Icon";

// Content for About / Contact / Partners / News / Blog.
// Adapted from acceleye.com. Edit here.

export const about = {
  story:
    "AccelEye is run by a team of American and immigrant technologist parents who left roles at Intel, AMD, NVIDIA and Microsoft to give back to the country and society that supported them. They believe everyone deserves to live safely, and that children should be able to learn and grow without fear.",
  mission:
    "Reverse the rise of mass shootings and suicides in the U.S., a trend that has persisted for about 20 years despite federal and state programs, by applying technology, expertise and research built over 25+ years of corporate and university collaboration.",
  vision:
    "Communities where everyone lives in peace and harmony, and every child can thrive.",
  commitments: [
    {
      icon: "shield" as IconName,
      title: "Protect communities",
      body: "Protect communities, students and teachers from harm, both online and on campus.",
    },
    {
      icon: "heart" as IconName,
      title: "Intervene early",
      body: "Detect suicide, bullying and violence risks so staff can step in early.",
    },
    {
      icon: "users" as IconName,
      title: "Help communities thrive",
      body: "Improve how communities and students live, engage, learn and thrive.",
    },
    {
      icon: "eye" as IconName,
      title: "Honest technology",
      body: "Use the latest technology honestly and transparently.",
    },
  ],
  values: [
    { icon: "lock" as IconName, title: "Customer Trust", sub: "Communities, schools and students first", body: "We put the well-being of communities, schools and students at the center of every decision." },
    { icon: "check" as IconName, title: "Accountability", sub: "Delivering on our promises", body: "We honor our commitments and make sure our products and interactions deliver real value." },
    { icon: "chat" as IconName, title: "Transparency", sub: "Clear and honest communication", body: "We believe in openness, straightforward solutions and honesty in every conversation." },
    { icon: "shield" as IconName, title: "Integrity", sub: "Doing what’s right and effective", body: "We act with fairness, honesty and high ethical standards, and assume the best in others." },
    { icon: "users" as IconName, title: "Teamwork", sub: "Stronger together", body: "We collaborate and support one another to build better solutions." },
  ],
  backgrounds: ["Intel", "AMD", "NVIDIA", "Microsoft"],
};

export const contact = {
  company: "Accelx Inc, San Jose",
  address: "Accelx Inc, San Jose",
  hours: "All day: 24 hours available",
  mapQuery: "Accelx Inc, San Jose, CA",
};

export const partnerPage = {
  benefits: [
    {
      icon: "layers" as IconName,
      title: "Product development",
      body: "Build integrations between partner products and services that add value for customers and end users.",
    },
    {
      icon: "shield" as IconName,
      title: "Enhanced security",
      body: "Connect AccelEye AI weapon detection to existing security infrastructure for a more unified, proactive threat response.",
    },
    {
      icon: "bolt" as IconName,
      title: "Rapid deployment",
      body: "Pre-built integrations speed up deployment and simplify implementation with partner solutions.",
    },
  ],
  integration: [
    { title: "Assessment", body: "Evaluate existing infrastructure to find the most effective integration points." },
    { title: "Configuration", body: "Integrate AccelEye AI weapon detection into the security setup." },
    { title: "Deployment", body: "Deploy the integrated solution after full testing and validation." },
  ],
  join: [
    { title: "Submit application", body: "Register through the partner form. Applicants can expect a response within six weeks." },
    { title: "Meet & collaborate", body: "If the application looks like a potential match, AccelEye reaches out to arrange an initial meeting." },
  ],
};

export const usStates = [
  "Outside US","Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming",
];

export const countries = [
  "United States","Australia","Austria","Bangladesh","Belgium","Brazil","Canada","Chile","China","Colombia","Czechia","Denmark","Egypt","Finland","France","Germany","Greece","Hong Kong","India","Indonesia","Ireland","Israel","Italy","Japan","Kenya","Malaysia","Mexico","Netherlands","New Zealand","Nigeria","Norway","Pakistan","Philippines","Poland","Portugal","Saudi Arabia","Singapore","South Africa","South Korea","Spain","Sweden","Switzerland","Taiwan","Thailand","Turkey","United Arab Emirates","United Kingdom","Vietnam","Other",
];
