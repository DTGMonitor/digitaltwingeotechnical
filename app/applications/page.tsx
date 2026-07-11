import type { Metadata } from "next";
import { ApplicationsOverviewEditorial } from "@/components/applications-overview-editorial";

export const metadata: Metadata = {
  title: "Applications | Digital Twin Geotechnical",
  description:
    "Monitoring support across open pit mining, tailings storage facilities, underground mining and civil infrastructure environments.",
};

export default function ApplicationsPage() {
  return <ApplicationsOverviewEditorial />;
}
