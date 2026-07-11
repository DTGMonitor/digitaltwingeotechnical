import type { Metadata } from "next";
import { UndergroundMiningPage } from "@/components/underground-mining-page";

export const metadata: Metadata = {
  title: "Underground Mining Monitoring Support | DTG",
  description:
    "DTG supports underground mining monitoring through deformation review, convergence interpretation, SLAM LiDAR analysis, spatial comparison, reporting and independent technical review.",
};

export default function Page() {
  return <UndergroundMiningPage />;
}
