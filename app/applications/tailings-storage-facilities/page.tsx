import type { Metadata } from "next";
import { TsfDetail } from "@/components/environments/tsf-detail";

export const metadata: Metadata = {
  title: "Tailings Storage Facilities Monitoring Support | DTG",
  description:
    "Independent tailings monitoring from DTG: wide-area satellite InSAR (via Catalyst Earth), monthly water-body mapping and machine-learning analytics that surface slow, long-term deformation from noisy data.",
};

export default function Page() {
  return <TsfDetail />;
}
