import type { Metadata } from "next";
import { InfrastructureDetail } from "@/components/environments/infrastructure-detail";

export const metadata: Metadata = {
  title: "Infrastructure & Civil Monitoring Support | DTG",
  description:
    "DTG brings independent geotechnical monitoring and analytics to the built environment — dams, road and rail earthworks, landslides, tunnels, bridges and retaining structures where ground movement is the risk.",
};

export default function Page() {
  return <InfrastructureDetail />;
}
