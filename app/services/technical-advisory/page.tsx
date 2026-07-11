import type { Metadata } from "next";
import { TechnicalAdvisoryPage } from "@/components/technical-advisory-service-page";

export const metadata: Metadata = {
  title: "Technical Advisory | Digital Twin Geotechnical",
  description:
    "Independent monitoring advice for site teams, corporate technical teams, consultants, asset owners and operations leaders who need clearer judgement and more defensible monitoring decisions.",
};

export default function Page() {
  return <TechnicalAdvisoryPage />;
}
