import type { Metadata } from "next";
import { TailingsStorageFacilitiesPage } from "@/components/tailings-storage-facilities-page";

export const metadata: Metadata = {
  title: "Tailings Storage Facilities Monitoring Support | DTG",
  description:
    "DTG supports Tailings Storage Facility monitoring through deformation trend review, multi-sensor comparison, data quality assessment, reporting traceability and independent technical review.",
};

export default function Page() {
  return <TailingsStorageFacilitiesPage />;
}
