import type { MetadataRoute } from "next";

// Canonical origin — keep in sync with metadataBase in app/layout.tsx.
const BASE = "https://dtgeotech.com";

// CANONICAL, nav-reachable public pages only (CLAUDE.md §5). A sitemap is a POSITIVE index of what
// should be crawled, so this list deliberately EXCLUDES:
//  - every redirecting route (/operations/*, /leadership, /markets, /portfolio, /focus, the
//    redirecting /about/* and /dtg-focus/* children, /insights/long-term-deformation, etc.);
//  - orphan/legacy routes that still return 200 but are NOT in the nav IA: /capabilities/*,
//    /insights/* (non-redirect ones), /about/vision-future, /about/why-dtg-exists,
//    /dtg-focus/data-governance, /dtg-focus/future-workflows. Those are the dead-code-cleanup task's
//    to resolve (redirect or remove) — do NOT add them here.
// When a NEW canonical page ships (or /privacy /terms change), add it below.
const ROUTES = [
  "/",
  "/about",
  "/services",
  "/services/remote-monitoring",
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
  "/solutions",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
