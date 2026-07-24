import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StoryMotion } from "@/components/storytelling";
import { ApplicationsCarousel } from "@/components/applications-carousel";
import { MonitoringChallenge } from "@/components/monitoring-challenge";
import { HomeServicesOverview } from "@/components/home-services-overview";
import { ProofBand } from "@/components/proof-band";
import { DTGFocusMark, renderTrademarkText } from "@/components/brand";

// The home proof band is now components/proof-band.tsx (variant C). The two NON-NUMERIC cards that
// used to live here — "Evidence across monitoring sources" (multi-sensor) and "Independent
// operating experience" (technology-agnostic) — were removed: both claims are already carried on
// Services (multi-sensor integration / vendor-independent review) and About (vendor independence),
// so nothing was lost. Only the three record-figures remain: 50,000+ / 10,000+ / 10+.

const applications: [string, string, string, string, string[]][] = [
  ["Open Pit Mining", "Slope monitoring, alarms and deformation trends.", "/images/operation-gold-mining.png", "/applications/open-pit-mining", ["Radar", "Slopes"]],
  ["Tailings Storage Facilities", "Long-term deformation review and reporting traceability.", "/images/operation-tailings-storage.png", "/applications/tailings-storage-facilities", ["InSAR", "Records"]],
  ["Underground Mining", "Convergence, SLAM LiDAR and spatial change review.", "/images/operation-underground-monitoring.png", "/applications/underground-mining", ["SLAM LiDAR", "Convergence"]],
  ["Infrastructure & Civil", "Ground movement, asset deformation and corridor monitoring.", "/images/sector-infrastructure.png", "/applications/infrastructure-civil", ["Corridors", "Assets"]],
];

const heroLinks = [
  ["Explore DTG", "/about"],
  ["Our Services", "/services"],
] as const;

const focusPillars = [
  "Integrated monitoring information",
  "Workflow support",
  "Decision visibility",
  "Governance and assurance",
] as const;

export default function Home() {
  return (
    <main className="story-page home-page">
      <StoryMotion />

      <section className="story-hero homepage-hero relative overflow-hidden">
        <div className="home-hero-artwork" aria-hidden="true">
          <Image
            src="/images/home/dtg-home-hero-dam-reservoir.png"
            fill
            priority
            alt=""
            className="home-hero-photo"
            sizes="100vw"
          />
        </div>
        <div className="home-hero-overlay" aria-hidden="true" />
        <div className="site-container home-hero-content">
          <div className="home-hero-copy">
            <h1 className="hero-message fade-up" aria-label="Integrated Data. Informed Decisions.">
              <span className="hero-title-desktop" aria-hidden="true">
                Integrated Data.<br />
                Informed Decisions.
              </span>
              <span className="hero-title-mobile" aria-hidden="true">
                Integrated<br />
                Data.<br />
                Informed<br />
                Decisions.
              </span>
            </h1>
            <div className="home-hero-link-grid fade-up" aria-label="Homepage pathways">
              {heroLinks.map(([label, href], index) => (
                <Link
                  href={href}
                  className={`home-hero-link-card ${index === 0 ? "is-primary" : "is-secondary"}`}
                  key={label}
                >
                  <span>{label}</span>
                  <ArrowUpRight aria-hidden="true" size={15} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MonitoringChallenge />

      <HomeServicesOverview />

      <ProofBand />

      <section id="dtg-focus" className="focus-section home-focus-section" aria-labelledby="home-focus-title">
        <div className="site-container home-focus-layout">
          <div className="home-focus-copy">
            <p className="story-eyebrow fade-up"><DTGFocusMark /></p>
            <h2 id="home-focus-title" className="section-headline fade-up">
              Governed Monitoring Workflows.
            </h2>
            <p className="story-subcopy fade-up">
              {renderTrademarkText(
                "DTG Focus is DTG's own monitoring software — built and running. It brings your sources into one view, with analytics, review workflow and governance on the same data.",
              )}
            </p>
            <div className="focus-home-pillars fade-up" aria-label="DTG Focus support pillars">
              {focusPillars.map((pillar, index) => (
                <span key={pillar}>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  {pillar}
                </span>
              ))}
            </div>
          </div>
          <FocusOperationalView />
        </div>
      </section>

      <section id="applications" className="applications-section" aria-labelledby="applications-title">
        <div className="site-container applications-container">
          <div className="applications-header">
            <p className="section-label fade-up">OPERATING ENVIRONMENTS</p>
            <h2 id="applications-title" className="section-headline fade-up">
              Where DTG Works.
            </h2>
            <p className="story-subcopy fade-up">
              DTG supports operating environments where ground movement, monitoring records and response pathways need
              clear technical understanding.
            </p>
          </div>
          <ApplicationsCarousel applications={applications} />
        </div>
      </section>

    </main>
  );
}

function FocusOperationalView() {
  const dtgFocusOverviewPath = "/images/dtg-focus-laptop-preview.png";

  return (
    <figure className="focus-operational-view fade-up">
      <div className="focus-operational-image-frame">
        <Image
          src={dtgFocusOverviewPath}
          width={1672}
          height={941}
          alt="DTG Focus shown on a laptop in an operating environment"
          className="focus-operational-image"
          sizes="(max-width: 1024px) 100vw, 46vw"
        />
      </div>
      <figcaption>DTG Focus — every monitoring source in one review environment.</figcaption>
    </figure>
  );
}


