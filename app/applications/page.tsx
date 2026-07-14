import type { Metadata } from "next";
import { ApplicationsOverview } from "@/components/applications-overview";

export const metadata: Metadata = {
  title: "Applications | Digital Twin Geotechnical",
  description:
    "Where DTG works: independent monitoring, analytics and decision support across open-pit mining, tailings storage facilities, underground mining and civil infrastructure environments.",
};

export default function ApplicationsPage() {
  return <ApplicationsOverview />;
}
