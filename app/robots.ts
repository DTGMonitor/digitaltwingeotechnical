import type { MetadataRoute } from "next";

// Canonical origin — keep in sync with metadataBase in app/layout.tsx and app/sitemap.ts.
const BASE = "https://dtgeotech.com";

// Standard allow-all + sitemap pointer. /api is disallowed (the only route there is the POST-only
// contact endpoint — nothing to index).
// NOTE (launch): several orphan/legacy routes still return 200 but are NOT in the sitemap
// (/capabilities/*, /insights/*, /about/vision-future, /about/why-dtg-exists,
// /dtg-focus/data-governance, /dtg-focus/future-workflows). They are intentionally NOT blocked here
// — the correct fix is to redirect or remove them in the dead-code-cleanup task, not to paper over
// them with robots rules. Omitting them from the sitemap already means we don't advertise them.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
