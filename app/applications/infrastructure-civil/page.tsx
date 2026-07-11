import type { Metadata } from "next";
import { InfrastructureCivilPage } from "@/components/infrastructure-civil-page";

export const metadata: Metadata = {
  title: "Infrastructure & Civil Monitoring Support | DTG",
  description:
    "DTG supports infrastructure and civil monitoring through ground movement review, asset deformation interpretation, multi-sensor comparison, data quality assessment, reporting traceability and independent technical review.",
};

export default function Page() {
  return <InfrastructureCivilPage />;
}
