import type { Metadata } from "next";
import { ServicesOverview } from "@/components/services-overview";

export const metadata: Metadata = {
  title: "Services | Digital Twin Geotechnical",
  description:
    "Independent review across the monitoring lifecycle — remote monitoring, reporting & back-analysis, technology integration, data analytics and technical advisory.",
};

export default function ServicesPage() {
  return <ServicesOverview />;
}
