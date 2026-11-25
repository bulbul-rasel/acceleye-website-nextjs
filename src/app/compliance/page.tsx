import type { Metadata } from "next";
import LegalDocument from "@/components/sections/LegalDocument";
import { compliance } from "@/content/legal";

export const metadata: Metadata = {
  title: "Compliance statement",
  description:
    "AccelEye compliance: COPPA, FERPA, state student privacy laws, GDPR, SOC 2 (in progress), the DHS SAFETY Act application and our data security program.",
};

export default function CompliancePage() {
  return (
    <LegalDocument
      doc={compliance}
      other={{ label: "Read the privacy policy", href: "/privacy" }}
    />
  );
}
