import type { Metadata } from "next";
import { UndergroundDetail } from "@/components/environments/underground-detail";

export const metadata: Metadata = {
  title: "Underground Mining Monitoring Support | DTG",
  description:
    "Independent underground convergence monitoring from DTG — over 1,000km delivered, reading movement by scan-to-scan comparison across kilometres of workings.",
};

export default function Page() {
  return <UndergroundDetail />;
}
