import type { Metadata } from "next";
import { UndergroundDetail } from "@/components/environments/underground-detail";

export const metadata: Metadata = {
  title: "Underground Mining Monitoring Support | DTG",
  description:
    "Independent underground convergence monitoring from DTG — over 950 km of scan and deformation data processed and analysed, reading movement by scan-to-scan comparison across kilometres of workings.",
};

export default function Page() {
  return <UndergroundDetail />;
}
