import type { Metadata } from "next";
import LegalDocument from "@/components/sections/LegalDocument";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "AccelEye privacy policy: what data we collect, how we use and retain it, who we share it with, student data and your rights.",
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      doc={privacy}
      other={{ label: "Read the compliance statement", href: "/compliance" }}
    />
  );
}
