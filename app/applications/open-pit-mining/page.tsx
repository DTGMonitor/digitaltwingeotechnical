import type { Metadata } from "next";
import { OpenPitMiningPage } from "@/components/open-pit-mining-page";

export const metadata: Metadata = {
  title: "Open Pit Mining | Digital Twin Geotechnical",
  description:
    "Open pit slope monitoring support for movement review, alarm relevance, data quality, TARP response and operational reporting.",
};

export default function Page() {
  return <OpenPitMiningPage />;
}
