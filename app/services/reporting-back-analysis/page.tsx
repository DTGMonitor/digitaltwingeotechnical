import type { Metadata } from "next";
import { ReportingBackAnalysisPage } from "@/components/reporting-back-analysis-page";

export const metadata: Metadata = {
  title: "Reporting & Back-Analysis | Digital Twin Geotechnical",
  description:
    "Structured monitoring reporting, alarm review, event back-analysis, traceability and lessons learned for more defensible monitoring decisions.",
};

export default function Page() {
  return <ReportingBackAnalysisPage />;
}
