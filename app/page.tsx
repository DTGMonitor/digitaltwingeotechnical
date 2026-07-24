import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StoryMotion } from "@/components/storytelling";
import { ApplicationsCarousel } from "@/components/applications-carousel";
import { MonitoringChallenge } from "@/components/monitoring-challenge";
import { HomeServicesOverview } from "@/components/home-services-overview";
import { ProofBand } from "@/components/proof-band";
import dtgFocusLogo from "@/public/images/dtg-focus-logo-transparent.png";

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

      {/* DTG Focus — spec-sheet layout on a deep-teal authority band. `.surface-band`
          re-scopes the full on-dark token set for BOTH themes (globals.css:212), so the
          `.dfx-*` children read correctly under [data-theme=light] too. */}
      <section id="dtg-focus" className="dfx-section surface-band" aria-labelledby="home-focus-title">
        <div className="site-container">
          <div className="dfx-rule fade-up" />
          <div className="dfx-logo fade-up">
            {/* Logo lockup: brand asset (renders off-white on dark per CLAUDE.md §3), with a
                standalone ™ beside it — the text mark component isn't used because the wordmark
                here is the image, not typed text. */}
            <Image src={dtgFocusLogo} alt="DTG Focus" sizes="120px" />
            <span className="dfx-tm">™</span>
          </div>

          <h2 id="home-focus-title" className="dfx-h2 fade-up">
            <span className="dfx-l1">One monitoring environment,</span>{" "}
            <span className="dfx-l2">configured to your operation</span>
          </h2>
          <p className="dfx-sub fade-up">
            Your monitoring sources, analytics, review workflow and governance brought together on one live record.
          </p>

          <div className="dfx-rows fade-up">
            <div className="dfx-row">
              <span className="dfx-key">Sources</span>
              <div className="dfx-val">
                <strong className="dfx-stmt">Read together, regardless of supplier</strong>
                {/* "and other monitoring sources" is non-exhaustive by design — do not tighten to "every source" (an absolute the sitewide sweep removed). */}
                <p className="dfx-supp">Radar, GNSS, InSAR, prisms, LiDAR, piezometers and other monitoring sources.</p>
                <div className="dfx-chips">
                  <span className="dfx-chip">Radar</span>
                  <span className="dfx-chip">GNSS</span>
                  <span className="dfx-chip">InSAR</span>
                  <span className="dfx-chip">Prisms</span>
                  <span className="dfx-chip">LiDAR</span>
                  <span className="dfx-chip">Piezometers</span>
                </div>
              </div>
            </div>
            <div className="dfx-row">
              <span className="dfx-key">Analytics</span>
              <div className="dfx-val">
                <strong className="dfx-stmt">Performed on the live record</strong>
                <p className="dfx-supp">Trends, comparisons and threshold reviews without exporting and re-keying data.</p>
              </div>
            </div>
            <div className="dfx-row">
              <span className="dfx-key">Review</span>
              <div className="dfx-val">
                <strong className="dfx-stmt">Assigned, escalated and signed off</strong>
                <p className="dfx-supp">Every action remains connected to the data that initiated it.</p>
              </div>
            </div>
            <div className="dfx-row">
              <span className="dfx-key">Governance</span>
              <div className="dfx-val">
                <strong className="dfx-stmt">Versioned and reviewable</strong>
                <p className="dfx-supp">What was seen, what was decided and why remain available for later scrutiny.</p>
              </div>
            </div>
            <div className="dfx-row">
              <span className="dfx-key">Deployment</span>
              <div className="dfx-val">
                <strong className="dfx-stmt">Configured for each operation</strong>
                {/* Maturity claim aligned to the Solutions canonical: configured per operation, extended as monitoring grows. Never claim complete coverage. */}
                <p className="dfx-supp">Start with the required coverage and extend the environment as monitoring grows.</p>
              </div>
            </div>
          </div>

          {/* MEDIA + CAPTION — STAGED, not rendered.
              Pending a legible synthetic capture. Provenance is cleared (owner-confirmed
              synthetic), but the current capture's UI text is garbled, so it ships staged —
              no empty box on the live page. TO ENABLE: remove this comment wrapper, restore
              the markup below, and place the provenance note as its own JSX comment
              immediately above the Image.

              Provenance note, verbatim:
              Synthetic demo capture — interface data, sensor IDs, plotted series and pit
              imagery are all fabricated for marketing use. Owner-confirmed provenance.
              Not a client site. Do not treat as client-derived imagery.

              <div className="dfx-media">
                <Image src="/images/dtg-focus-demo.png"
                       alt="DTG Focus interface, sources analytics and review workflow on one live record"
                       fill sizes="(max-width:760px) 100vw, 1200px" style={{ objectFit: "cover" }} />
              </div>
              <p className="dfx-caption">DTG Focus — sources, analytics and review workflow on one live record</p>
          */}
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

