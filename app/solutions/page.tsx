import type { Metadata } from "next";
import { SolutionsPage } from "@/components/solutions-page";

export const metadata: Metadata = {
  title: "Solutions | Digital Twin Geotechnical",
  description:
    "Start where you are. Six situations DTG is most often called into — from asset owners with sensors but no one watching them, to overstretched geotechnical teams and mature teams wanting independent assurance.",
};

export default function Page() {
  return <SolutionsPage />;
}
