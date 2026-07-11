import type { Metadata } from "next";
import { RemoteMonitoringReviewPage } from "@/components/remote-monitoring-review-page";

export const metadata: Metadata = {
  title: "Remote Monitoring | Digital Twin Geotechnical",
  description:
    "Live monitoring support, alarm awareness, data quality review, deformation trend interpretation and TARP-based escalation support for complex ground movement risk.",
};

export default function Page() {
  return <RemoteMonitoringReviewPage />;
}
