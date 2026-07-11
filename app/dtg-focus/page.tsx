import type { Metadata } from "next";
import { DTGFocusEditorialPage } from "@/components/dtg-focus-editorial-page";

export const metadata: Metadata = {
  title: "DTG Focus™ | Integrated Monitoring Decision Support",
  description:
    "DTG Focus™ is DTG's developing decision-support platform for integrated geotechnical monitoring data, governed workflows, analytics and more defensible operational decisions.",
};

export default function Page() {
  return <DTGFocusEditorialPage />;
}
