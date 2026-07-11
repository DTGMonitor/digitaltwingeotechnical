import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const applicationDetailPages = {
  "open-pit-mining": {
    eyebrow: "Applications",
    title: "Open Pit Mining",
    intro: "Monitoring support for active pit slopes, highwall movement, alarms, deformation trends and operational response.",
    points: [
      "Slope movement review and deformation trend interpretation.",
      "SSR / radar monitoring support, alarm review and TARP context.",
      "Reporting and escalation support for active mining environments.",
    ],
  },
  "tailings-storage-facilities": {
    eyebrow: "Applications",
    title: "Tailings Storage Facilities",
    intro: "Monitoring support for deformation trends, long-term behaviour, reporting consistency and independent review of TSF monitoring information.",
    points: [
      "Deformation review and long-term trend analysis.",
      "InSAR, GNSS and radar comparison where monitoring inputs need context.",
      "Reporting, traceability and independent technical review for TSF environments.",
    ],
  },
  "underground-mining": {
    eyebrow: "Applications",
    title: "Underground Mining",
    intro: "Monitoring support for underground deformation, convergence review, spatial change detection and SLAM LiDAR analysis where applicable.",
    points: [
      "Convergence review and deformation tracking.",
      "SLAM LiDAR analysis, spatial comparison and change detection support.",
      "Reporting and technical interpretation for underground monitoring environments.",
    ],
  },
  "infrastructure-civil": {
    eyebrow: "Applications",
    title: "Infrastructure & Civil",
    intro: "Monitoring support for slopes, corridors, assets and infrastructure environments where deformation or ground movement requires technical review.",
    points: [
      "Slope, corridor and asset monitoring support.",
      "Deformation reporting and multi-sensor review.",
      "Technical advisory support for civil infrastructure environments.",
    ],
  },
} as const;

export type ApplicationDetailKey = keyof typeof applicationDetailPages;

export function ApplicationDetailPage({ page }: { page: (typeof applicationDetailPages)[ApplicationDetailKey] }) {
  return (
    <main className="application-detail-page">
      <section className="application-detail-hero" aria-labelledby="application-detail-title">
        <div className="ao-container application-detail-grid">
          <div>
            <p className="rm-eyebrow">{page.eyebrow}</p>
            <h1 id="application-detail-title">{page.title}</h1>
            <p>{page.intro}</p>
          </div>
          <div className="application-detail-panel">
            <p className="rm-eyebrow">Typical support</p>
            <ul>
              {page.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="ao-section ao-section-light">
        <div className="ao-container application-detail-next">
          <div>
            <p className="rm-eyebrow">Application context</p>
            <h2>Dedicated application content is being structured around the DTG monitoring support model.</h2>
            <p>
              This page provides the correct application route and initial operating-environment context while the full
              application-specific page is developed within the DTG monitoring support model.
            </p>
          </div>
          <div className="rm-actions">
            <Link href="/applications" className="rm-button rm-button-primary">
              Back to applications <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            <Link href="/contact" className="rm-button rm-button-secondary">
              Discuss this environment <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
