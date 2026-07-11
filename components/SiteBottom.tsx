"use client";

import { usePathname } from "next/navigation";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { SiteFooter } from "@/components/SiteFooter";

const preFooterExcludedRoutes = [
  "/contact",
  "/privacy",
  "/terms",
  "/404",
  "/not-found",
  "/about",
  "/about/purpose-principles",
  "/about/vendor-independence",
  "/about/our-approach",
  "/about/technical-assurance",
  "/about/leadership",
  "/services",
  "/services/remote-monitoring",
  "/services/remote-monitoring-review",
  "/services/reporting-back-analysis",
  "/services/technology-integration",
  "/services/data-analytics-automation",
  "/services/technical-advisory",
  "/applications",
  "/applications/open-pit-mining",
  "/applications/tailings-storage-facilities",
  "/applications/underground-mining",
  "/applications/infrastructure-civil",
  "/dtg-focus",
  "/focus",
  "/leadership",
  "/operations",
] as const;

function shouldShowPreFooter(pathname: string | null) {
  if (!pathname) return true;
  return !preFooterExcludedRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

export function SiteBottom() {
  const pathname = usePathname();

  return (
    <>
      {shouldShowPreFooter(pathname) ? <PreFooterCTA /> : null}
      <SiteFooter />
    </>
  );
}
