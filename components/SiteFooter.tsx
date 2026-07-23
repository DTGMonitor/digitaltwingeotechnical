import Image from "next/image";
import Link from "next/link";
import { DTGFocusMark } from "@/components/brand";

/**
 * Sitemap footer — SITE-WIDE component (owner-directed redesign, Contact brief §6a).
 * Modelled on the AtkinsRéalis / Arup / WSP register, rendered in DTG tokens.
 *
 * This replaced a footer that repeated the office list, the email address and a "start a
 * monitoring conversation" line — i.e. it duplicated /contact on every page, including on
 * /contact itself. The footer is now navigation, brand and legal only. Contact detail lives in
 * the page content where it belongs.
 *
 * ⚠️ EVERY HREF HERE WAS VERIFIED AGAINST THE ROUTE TABLE (2026-07-19), and that mattered:
 * the design mockup's proposed links were 11-of-16 wrong — one route that does not exist
 * (/about/who-we-are), six that 308-redirect (/operations/*, /about/leadership,
 * /dtg-focus/decision-support), and a /capabilities/* set that resolves but points at LEGACY
 * ORPHAN routes rather than the approved Services IA. Linking those from a site-wide footer
 * would have made orphaned legacy pages nav-reachable, reversing the direction this project has
 * been moving them (redirect/retire, not promote).
 *
 * These columns mirror the canonical IA in components/site.tsx. If you add a link here, confirm
 * the route renders (not a redirect, not an orphan) before shipping it.
 */

const columns = [
  {
    heading: "Services",
    label: "Services",
    links: [
      ["All services", "/services"],
      ["Remote monitoring", "/services/remote-monitoring"],
      ["Reporting & back-analysis", "/services/reporting-back-analysis"],
      ["Technology integration", "/services/technology-integration"],
      ["Data analytics & automation", "/services/data-analytics-automation"],
      ["Technical advisory", "/services/technical-advisory"],
    ],
  },
  {
    heading: "Applications",
    label: "Applications",
    links: [
      ["All applications", "/applications"],
      ["Open-pit mining", "/applications/open-pit-mining"],
      ["Tailings storage facilities", "/applications/tailings-storage-facilities"],
      ["Underground mining", "/applications/underground-mining"],
      ["Infrastructure & civil", "/applications/infrastructure-civil"],
    ],
  },
  {
    heading: "Solutions",
    label: "Solutions and DTG Focus",
    links: [
      ["Find your situation", "/solutions"],
      ["DTG Focus™", "/dtg-focus"],
      // Repointed 2026-07-19: /dtg-focus/multi-sensor-integration now redirects to Technology
      // Integration, so this links the destination directly (no redirect hop). ⚠️ This now points
      // at the same page as the Services column's "Technology integration" entry — a mild
      // duplication, flagged for the owner. If the owner rebuilds multi-sensor integration as a
      // DTG Focus capability page, point this back at it.
      ["Multi-sensor integration", "/services/technology-integration"],
    ],
  },
  {
    heading: "Company",
    label: "Company",
    links: [
      ["About DTG", "/about"],
      ["How DTG works", "/about#how-dtg-works"],
      ["Contact", "/contact"],
    ],
  },
] as const;

function FooterLabel({ label }: { label: string }) {
  if (label === "DTG Focus™") return <DTGFocusMark />;
  return <>{label}</>;
}

export function SiteFooter() {
  return (
    <footer className="sf" aria-labelledby="sf-heading">
      <h2 id="sf-heading" className="sr-only">
        Site footer
      </h2>
      <div className="site-container">
        <div className="sf__grid">
          <div className="sf__brand">
            <Link href="/" aria-label="Digital Twin Geotechnical — home">
              <Image
                src="/images/dtg-logo-broken-white-full.png"
                alt="DTG — Digital Twin Geotechnical"
                width={567}
                height={301}
                className="sf__logo"
              />
            </Link>
            <p>
              Independent geotechnical monitoring, analytics and decision support — integrated
              data, informed decisions.
            </p>
          </div>

          {columns.map((column) => (
            <nav className="sf__col" aria-label={column.label} key={column.heading}>
              <h3>{column.heading}</h3>
              {column.links.map(([label, href]) => (
                <Link href={href} key={href}>
                  <FooterLabel label={label} />
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="sf__base">
          {/* Legal links are limited to pages that actually exist. Peer footers list statutory
              pages because those companies publish them — no equivalents are fabricated here.
              /privacy is currently a DRAFT pending legal review (see app/privacy/page.tsx). */}
          <span>
            © {new Date().getFullYear()} Digital Twin Geotechnical ·{" "}
            <Link href="/privacy">Privacy policy</Link>
          </span>
          <a
            className="sf__social"
            href="https://www.linkedin.com/company/digitaltwingeotechnical/"
            target="_blank"
            rel="noopener"
          >
            <span className="sf__social-ic" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </span>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
