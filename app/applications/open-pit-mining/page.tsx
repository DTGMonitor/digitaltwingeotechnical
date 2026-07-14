import type { Metadata } from "next";
import { OpenPitDetail } from "@/components/environments/open-pit-detail";

export const metadata: Metadata = {
  title: "Open Pit Mining | Digital Twin Geotechnical",
  description:
    "Independent, radar-led open-pit slope monitoring from DTG's monitoring centre — continuous review, alarm validation, TARP escalation and decision support across active operations.",
};

export default function Page() {
  return <OpenPitDetail />;
}
