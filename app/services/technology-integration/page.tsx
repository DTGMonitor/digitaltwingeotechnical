import type { Metadata } from "next";
import { TechnologyIntegrationPage } from "@/components/technology-integration-page";

export const metadata: Metadata = {
  title: "Technology Integration | Digital Twin Geotechnical",
  description:
    "Technology-agnostic monitoring integration support connecting sensors, data sources, reporting pathways, governance and decision-support workflows.",
};

export default function Page() {
  return <TechnologyIntegrationPage />;
}
