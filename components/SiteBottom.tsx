"use client";

import { usePathname } from "next/navigation";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { SiteFooter } from "@/components/SiteFooter";

// Inclusion list (inverted from the old drift-prone exclusion list): the shared PreFooterCTA
// renders ONLY on pages that lack their own closing CTA. Today that's just home — every other
// content page (recomposed pages, DetailPage routes, /focus, /leadership, /operations) ends with
// its own CTA, and /contact is itself the CTA target. Recomposed pages bring their own CTA, so
// this stays correct as the migration continues (Applications rebuild, etc.).
const preFooterIncludedRoutes = ["/"] as const;

function shouldShowPreFooter(pathname: string | null) {
  if (!pathname) return false;
  return preFooterIncludedRoutes.some((route) => pathname === route);
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
