// Legal page content: summaries of the official PDFs. The PDFs are authoritative.

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { rows: [string, string][] };
};

export type LegalDoc = {
  title: string;
  eyebrow: string;
  lead: string;
  updated: string;
  version?: string;
  nextReview?: string;
  pdf: string;
  contact: { label: string; value: string; href: string }[];
  sections: LegalSection[];
};

const PDF_BASE = "https://acceleye.com/wp-content/uploads/2026/09/";

export const compliance: LegalDoc = {
  eyebrow: "Compliance",
  title: "Compliance statement",
  lead: "How AccelEye handles student and customer data, and the laws, frameworks and security practices we follow.",
  updated: "August 21, 2026",
  version: "3.0",
  nextReview: "November 21, 2026",
  pdf: `${PDF_BASE}AccelEye_Compliance_Statement_Aug2026.pdf`,
  contact: [
    { label: "Privacy & compliance", value: "privacy@acceleye.com", href: "mailto:privacy@acceleye.com" },
    { label: "General support", value: "support@acceleye.com", href: "mailto:support@acceleye.com" },
    { label: "Phone", value: "+1 (844) 755-4837", href: "tel:+18447554837" },
  ],
  sections: [
    {
      id: "ai-ethics",
      title: "AI ethics & principles",
      paragraphs: [
        "AccelEye’s threat-detection AI is meant to flag potential weapon or violence threats from security cameras and to speed up human review and emergency response.",
        "We follow the NIST AI Risk Management Framework and test regularly to reduce false positives and false negatives.",
      ],
    },
    {
      id: "data-collection",
      title: "How AccelEye collects data",
      paragraphs: [
        "The service analyzes cameras a school or district already has. It may process images of anyone on camera, including students, staff and visitors.",
        "Video is not used for commercial, advertising or profiling purposes. Audio capture, where it occurs, is subject to state consent-to-record laws, and schools should confirm with their representative whether audio is captured.",
      ],
    },
    {
      id: "coppa",
      title: "COPPA",
      paragraphs: [
        "AccelEye complies with the 2025 amendments to the Children’s Online Privacy Protection Act. The amended rule took effect June 23, 2025, with a compliance deadline of April 22, 2026, and AccelEye states it has been in full compliance since then. School districts may rely on their authority to consent for students under COPPA.",
      ],
      bullets: [
        "Limit data collection and avoid third-party disclosure and behavioral targeting",
        "Treat biometric identifiers as personal information",
        "Maintain a written information security program and minimize retention",
        "Offer no incentives to children",
      ],
    },
    {
      id: "ferpa",
      title: "FERPA",
      paragraphs: [
        "AccelEye may be designated a “School Official” with a legitimate educational interest. Districts retain control of student data, and parent or eligible-student requests go through the district.",
      ],
    },
    {
      id: "ny-2d",
      title: "New York Education Law § 2-d",
      paragraphs: [
        "AccelEye follows Education Law § 2-d, 8 NYCRR Part 121 and the Parents’ Bill of Rights.",
      ],
      bullets: [
        "No sale of student personally identifiable information",
        "Encryption and access controls",
        "Breach notification and handling of parental complaints",
        "Staff training and signed contract supplements",
      ],
    },
    {
      id: "new-mexico",
      title: "New Mexico student data privacy",
      paragraphs: [
        "New Mexico has no standalone student data privacy statute, so AccelEye follows FERPA, COPPA and the standards under NMSA § 22-1-11 set by the New Mexico Public Education Department. AccelEye participates in the Student Data Privacy Consortium and works with districts on National Data Privacy Agreements.",
      ],
    },
    {
      id: "sdpc",
      title: "Student Data Privacy Consortium & NDPA",
      paragraphs: [
        "AccelEye works with districts in participating states to execute Data Processing / Privacy Agreements through the SDPC’s National Data Privacy Agreement framework.",
      ],
    },
    {
      id: "other-states",
      title: "Other U.S. state laws",
      bullets: [
        "State student data privacy laws: practices are designed to meet the general model of California’s SOPIPA, and AccelEye will sign state or district addenda on request.",
        "Comprehensive state consumer privacy laws (about twenty states, modeled on CCPA/CPRA and Virginia’s framework): core consumer rights are extended to residents where applicable, and personal data is not sold.",
        "State breach notification laws: AccelEye aims to meet the requirements of each applicable state.",
        "Biometric and wiretap/consent laws: evaluated state by state for each deployment.",
        "A state-by-state compliance matrix is available at privacy@acceleye.com.",
      ],
    },
    {
      id: "biometric",
      title: "Biometric data practices",
      paragraphs: [
        "Some AI outputs may count as biometric identifiers under laws such as Illinois BIPA, Texas CUBI and Washington RCW 19.375.",
      ],
      bullets: [
        "Processed only for contracted safety services",
        "Not sold, and not used for profit",
        "Retained only as long as needed, under a written retention and destruction policy",
      ],
    },
    {
      id: "ccpa",
      title: "California CCPA / CPRA",
      paragraphs: [
        "The CPRA amendments took effect January 1, 2023, with 2025 updates. The statement covers California employees and B2B contacts.",
      ],
      bullets: [
        "Rights to know, access, limit, correct, opt out, and be free from retaliation",
        "References AB 1008, SB 1223 (neural data) and AB 1824 (opt-out preferences in corporate transactions)",
        "Data mapping, minimization, retention schedules and privacy impact assessments",
      ],
    },
    {
      id: "gdpr",
      title: "GDPR & UK GDPR",
      paragraphs: [
        "The GDPR took effect May 25, 2018 and the UK GDPR January 1, 2021. AccelEye acts as a data processor for schools and districts.",
      ],
      bullets: [
        "Article 28 processing terms",
        "A DPA with EU Standard Contractual Clauses and the UK International Data Transfer Addendum",
        "Records of processing (Article 30), security measures (Article 32) and privacy by design (Article 25)",
        "Breach notice to controllers",
      ],
    },
    {
      id: "ofac",
      title: "OFAC compliance",
      paragraphs: [
        "AccelEye screens orders and engagements against U.S., EU, UK and UN sanctions lists, rejects prohibited transactions, provides annual training and maintains an export-controls program.",
      ],
    },
    {
      id: "soc2",
      title: "SOC 2",
      paragraphs: [
        "AccelEye designs its controls to meet the AICPA’s SOC 2 Trust Services Criteria. The audit is in progress and no report has been issued yet. The statement will be updated with the audit type, period and report request process once it is complete.",
      ],
    },
    {
      id: "safety-act",
      title: "DHS SAFETY Act",
      paragraphs: [
        "Accelx completed its pre-application consultation on August 8, 2026 and has submitted a formal application. DHS’s estimated review timeline places a determination within calendar year 2026. This is an application in progress, not a designation, and the statement will be updated once a decision is issued.",
      ],
    },
    {
      id: "security",
      title: "Our data security program",
      bullets: [
        "Administrative: a designated privacy and security team and Data Protection Officer, documented policies, staff training, background checks where permitted, and incident response procedures.",
        "Technical: TLS 1.2+ in transit, AES-256 at rest, MFA, role-based access control, vulnerability management and penetration testing, intrusion detection and prevention, logging, and a secure development lifecycle.",
        "Physical: 24/7 secured data centers and controlled facility access.",
      ],
    },
    {
      id: "retention",
      title: "Data retention",
      table: {
        rows: [
          ["Account data", "Active account period plus 30 days after closure"],
          ["Security-event video / images", "90 days, longer if needed for investigations or law enforcement requests"],
          ["Digital threat-analysis data", "90 days, longer if needed for investigations"],
          ["Audit logs", "At least 2 years"],
        ],
      },
    },
    {
      id: "breach",
      title: "Incident & breach notification",
      paragraphs: [
        "AccelEye notifies the affected district or customer without unreasonable delay and within the shortest legally required timeframe, sharing the nature and scope of the incident, the data categories involved and the remediation steps.",
      ],
    },
    {
      id: "rights",
      title: "Your rights & how to contact us",
      paragraphs: [
        "Privacy and compliance inquiries, DPAs and data subject rights requests go to privacy@acceleye.com. The Data Protection Officer is Alimul Hoque. This document is maintained by Accelx Inc. (AccelEye)’s Legal and Privacy Team.",
      ],
    },
  ],
};

export const privacy: LegalDoc = {
  eyebrow: "Privacy",
  title: "Privacy policy",
  lead: "What we collect, how we use it, how long we keep it and the choices you have.",
  updated: "August 21, 2026 (effective)",
  nextReview: "Reviewed at least quarterly",
  pdf: `${PDF_BASE}AccelEye_Privacy_Policy_Review_Aug2026.pdf`,
  contact: [
    { label: "Privacy requests", value: "privacy@acceleye.com", href: "mailto:privacy@acceleye.com" },
    { label: "General support", value: "support@acceleye.com", href: "mailto:support@acceleye.com" },
    { label: "Phone", value: "+1 (844) 755-4837", href: "tel:+18447554837" },
  ],
  sections: [
    {
      id: "collected",
      title: "Data we collect",
      bullets: [
        "Trial users: an email and username.",
        "Paying customers: name, addresses and contact info. Payment card data is held by the payment processor.",
        "School administrators: contact and system information.",
        "Safety Agent extension: may access student names, emails, device identifiers and usage data from school-approved platforms.",
        "Detection Service: analyzes security camera footage, which can include anyone on camera.",
        "Standard device, usage and cookie data.",
      ],
    },
    {
      id: "use",
      title: "How we use data",
      paragraphs: [
        "Data is used to run the services, including weapon and violence detection, student-safety reporting and order processing. We don’t use data for advertising or profiling unrelated to the service.",
        "School camera footage and children’s data are not used to train AI models. Models are trained only on public and fully anonymized data. Marketing emails go only to customers who opt in.",
      ],
    },
    {
      id: "retention",
      title: "Retention",
      bullets: [
        "Account data: kept while the account is active, plus 30 days after closure.",
        "Security video and Safety Agent flags: generally 90 days, longer if an investigation requires it.",
        "Audit logs: at least two years.",
        "Afterwards data is deleted or anonymized, unless the law or a legal hold requires otherwise.",
      ],
    },
    {
      id: "sharing",
      title: "Sharing",
      paragraphs: [
        "We don’t sell personal information. We share data with:",
      ],
      bullets: [
        "Contracted service providers",
        "Authorized school staff, at the school’s direction",
        "Emergency services or law enforcement when a verified threat or legal requirement applies",
        "Payment processors, for purchases",
        "Anyone else, with consent",
      ],
    },
    {
      id: "students",
      title: "Student data",
      paragraphs: [
        "Students cannot register themselves. Schools or educational organizations must obtain any required consents, including parental consent, before students use the services.",
        "We don’t use student data for targeted advertising or non-educational profiling. Under FERPA, AccelEye operates as a school official acting under the district’s direction.",
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      bullets: [
        "Request to know, access, correct or delete your data.",
        "Limit the use of sensitive information, and opt out of sales or sharing. There is no retaliation for exercising these rights.",
        "Rights extend to residents of other states with comprehensive privacy laws.",
        "Students and adult end users are generally directed to their school. Districts and customers can contact AccelEye directly.",
        "Biometric data is covered under state biometric laws and is not sold or profited from.",
      ],
    },
    {
      id: "security",
      title: "Security",
      paragraphs: [
        "We use encryption, multi-factor authentication, role-based access, security assessments and an incident response plan. No system is completely secure. If there is a breach, we notify affected parties without unreasonable delay and within legally required timeframes.",
      ],
    },
    {
      id: "frameworks",
      title: "Frameworks in progress",
      paragraphs: [
        "AccelEye is still completing EU-U.S. Data Privacy Framework certification. See the Compliance statement for the full list of laws and frameworks we follow.",
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      paragraphs: [
        "Accelx Inc. (d/b/a AccelEye), 447 Downing Ave, San Jose, CA 95128. Privacy requests go to privacy@acceleye.com, and general support to support@acceleye.com or +1 (844) 755-4837. We respond to general privacy inquiries in 24 to 48 hours.",
        "This policy is reviewed at least quarterly and may be updated. Material changes are communicated to school districts under their contracts.",
      ],
    },
  ],
};
