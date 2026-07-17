import type { Metadata } from "next";
import { DTGFocusPage } from "@/components/dtg-focus-page";

// NB no ™ in the <title>/description — attributes and <title> can't hold markup, and a literal
// "™" in metadata risks mojibake. The mark renders on-page via brand.tsx.
export const metadata: Metadata = {
  title: "DTG Focus | Monitoring review, brought together",
  description:
    "DTG Focus is DTG's own monitoring software — built and running, used by DTG engineers every day. Every source in one view: integration, analytics, review and workflow, governance and reporting, and portfolio visibility across sites.",
};

export default function Page() {
  return <DTGFocusPage />;
}
