import type { Metadata } from "next";
import { DataAnalyticsAutomationPage } from "@/components/data-analytics-automation-page";

export const metadata: Metadata = {
  title: "Data Analytics & Automation | Digital Twin Geotechnical",
  description:
    "Monitoring data cleansing, trend analysis, multi-sensor comparison, alarm analytics, SLAM LiDAR analysis and automation-assisted technical review.",
};

export default function Page() {
  return <DataAnalyticsAutomationPage />;
}
