import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { DTGFocusMark } from "@/components/brand";

const exploreLinks = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Applications", "/applications"],
  ["DTG Focus™", "/dtg-focus"],
  ["Contact", "/contact"],
] as const;

const serviceLinks = [
  ["Remote Monitoring", "/services/remote-monitoring"],
  ["Reporting & Back-Analysis", "/services/reporting-back-analysis"],
  ["Technology Integration", "/services/technology-integration"],
  ["Data Analytics", "/services/data-analytics-automation"],
  ["Technical Advisory", "/services/technical-advisory"],
] as const;

const locations = [
  ["Brisbane, Queensland", "DTG Headquarters"],
  ["Perth, Western Australia", "DTG Corporate"],
  ["Yogyakarta, Indonesia", "Remote Monitoring Centre"],
] as const;

function FooterLinkLabel({ label }: { label: string }) {
  if (label === "DTG Focus™") return <DTGFocusMark />;
  return label;
}

export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link href="/" aria-label="Digital Twin Geotechnical home">
              <Image
                src="/images/dtg-logo-broken-white-full.png"
                alt="Digital Twin Geotechnical"
                width={567}
                height={301}
                className="site-footer__logo"
              />
            </Link>
            <p>Independent geotechnical insight for informed, defensible decisions.</p>
            <span>Integrated Data. Informed Decisions.</span>
          </div>

          <nav aria-label="Footer explore links" className="site-footer__column">
            <h2>Explore</h2>
            {exploreLinks.map(([label, href]) => (
              <Link href={href} key={href}>
                <FooterLinkLabel label={label} />
              </Link>
            ))}
          </nav>

          <nav aria-label="Footer service links" className="site-footer__column">
            <h2>Services</h2>
            {serviceLinks.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="site-footer__column site-footer__contact">
            <h2>Contact</h2>
            <Link href="mailto:info@dtgeotech.com">info@dtgeotech.com</Link>
            <p>Start a monitoring conversation.</p>
            <div className="site-footer__locations" aria-label="DTG locations">
              {locations.map(([place, description]) => (
                <div key={place}>
                  <strong>{place}</strong>
                  <span>{description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 Digital Twin Geotechnical. All rights reserved.</p>
          <div>
            <span>Integrated Data. Informed Decisions.</span>
            <Link href="#top" aria-label="Back to top" className="site-footer__top">
              <ArrowUp aria-hidden="true" size={14} />
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
