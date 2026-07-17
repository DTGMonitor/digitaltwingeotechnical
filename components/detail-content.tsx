import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { renderTrademarkText } from "@/components/brand";
import { InternalHero } from "@/components/internal-hero";

export type DetailPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
  related?: { label: string; href: string }[];
};

export const detailPages: Record<string, DetailPageContent> = {
  "about/purpose-principles": {
    eyebrow: "About",
    title: "Purpose & Principles",
    intro: "DTG exists to help organisations turn complex monitoring information into informed, defensible decisions.",
    points: [
      "Many operations are dealing with too much data, too many alarms and too many disconnected systems.",
      "DTG works between monitoring data and operational decisions, bringing independent review and engineering judgement to the workflow.",
      "The core principles are simple: integrate monitoring information, govern workflows and support defensible decisions.",
    ],
  },
  // ⚪ LANDMINE — DEAD DATA, LEFT DELIBERATELY. /about/vendor-independence 308-redirects to
  // /about#vendor-independence, so nothing renders this key. Its intro is the RETIRED claim
  // ("DTG is independent of ... equipment manufacturers") — false, DTG distributes radar and GNSS
  // in Indonesia. Harmless while unrouted. DO NOT WIRE THIS UP without rewriting the intro first.
  // Same shape as the detailPages["dtg-focus"] landmine below.
  "about/vendor-independence": {
    eyebrow: "About",
    title: "Vendor Independence",
    intro: "DTG is independent of monitoring vendors, software vendors and equipment manufacturers.",
    points: [
      "Independence allows DTG to evaluate monitoring information objectively across technologies, systems and software ecosystems.",
      "The role is not to sell equipment or defend a platform. The role is to help clients understand what the information means.",
      "Vendor-independent review supports technology-agnostic thinking, clearer assurance and more defensible decisions.",
    ],
  },
  "about/our-approach": {
    eyebrow: "About",
    title: "Our Approach",
    intro: "DTG brings monitoring information together through engineering review, governance and decision support.",
    points: [
      "Integrate: bring radar, GNSS, prisms, InSAR, LiDAR, SLAM LiDAR, VWP, seismic and operational records into context.",
      "Govern: support traceability, accountability, audit trails, decision records and review discipline.",
      "Decide: help organisations move from fragmented information to informed, defensible operational response.",
    ],
  },
  "about/technical-assurance": {
    eyebrow: "About",
    title: "Technical Assurance",
    intro: "DTG applies review discipline, traceability, accountability and quality assurance to support defensible outcomes.",
    points: [
      "Monitoring governance is the discipline of knowing what changed, who reviewed it, what decision was made and why.",
      "DTG supports clear workflows, audit trails, decision records, change management and version control across monitoring review.",
      "Technical assurance strengthens confidence in the interpretation, escalation pathway and operational response.",
    ],
  },
  "about/why-dtg-exists": {
    eyebrow: "About",
    title: "Why DTG Exists",
    intro: "DTG was created to help mining organisations integrate monitoring data, govern workflows and make defensible decisions.",
    points: [
      "Many operations are dealing with too much data, too many alarms and too many disconnected systems.",
      "DTG helps clients turn fragmented information into governed monitoring workflows.",
      // COMPLIANCE: was "DTG is independent of monitoring vendors, software vendors and equipment
      // manufacturers" — a company-wide RELATIONSHIP claim, and false: DTG distributes radar and
      // GNSS in Indonesia. Reframed onto the WORK, which is what is actually true and defensible.
      // This route is unlinked but returns 200 and is indexable — "not in the nav" is not a defence.
      "DTG's review is technology-agnostic: monitoring information is assessed across systems and vendors, whoever supplied it.",
    ],
  },
  // COMPLIANCE DELETION (2026-07-18): the "about/our-journey" and "about/leadership" detailPages
  // entries were removed. Their routes 308-redirect (to /about and /about#leadership), so the data
  // was dead — but it named a sensor brand (GroundProbe GSS) in founder bios, i.e. a locked-category
  // leak sitting one un-redirect away from being live again. The recomposed /about carries this
  // history without naming any vendor. Do not re-add these keys.
  "about/vision-future": {
    eyebrow: "About",
    title: "Vision & Future",
    intro: "DTG is working toward focused actionable insight for the next generation of geotechnical risk management.",
    points: [
      "Integrated monitoring data across sensors, vendors and operating environments.",
      "Future workflows that support validation, audit trails, traceability, escalation and defensible action.",
      "Engineering expertise enhanced by AI-assisted analytics, with engineers remaining central to decision-making.",
    ],
  },
  "capabilities/monitoring-intelligence": {
    eyebrow: "Services",
    title: "Monitoring Integration",
    intro: "Remote monitoring, movement review and multi-sensor integration for complex geotechnical environments.",
    points: [
      "Integrate, Govern, Decide methodology.",
      "Radar, prism, InSAR, GNSS, LiDAR, SLAM LiDAR and movement review.",
      "Long-term trend analysis and post-blast reporting.",
      "Failure and alarm back-analysis with engineering context.",
    ],
  },
  "capabilities/monitoring-governance": {
    eyebrow: "Services",
    title: "Monitoring Governance",
    intro: "Alarm optimisation, TARP support and escalation workflows that create transparency, traceability and accountability.",
    points: [
      "Integrate, Govern, Decide workflows.",
      "TARP development and monitoring SOP support.",
      "Alarm quality review and nuisance alarm reduction.",
      "Audit trails, decision records, change management and version control for safety-critical events.",
    ],
  },
  "capabilities/technology-advisory": {
    eyebrow: "Services",
    title: "Technology Advisory",
    intro: "Vendor-independent technology selection, sensor suitability review and multi-sensor monitoring strategy.",
    points: [
      "Independent radar and sensor suitability advice.",
      "Technology selection across radar, InSAR, GNSS, prisms and LiDAR.",
      "Deployment support and monitoring strategy.",
      // COMPLIANCE: was "Independent of monitoring vendors, software vendors and equipment
      // manufacturers" — false (DTG distributes radar and GNSS in Indonesia). Engagement-scoped
      // instead: the advice starts from the requirement, which is the claim that survives discovery.
      "Advice that starts from your monitoring requirement, not from a product.",
    ],
  },
  "capabilities/data-intelligence": {
    eyebrow: "Services",
    title: "Data Analytics & Reporting",
    intro: "Data cleansing, AI-assisted analytics, validation, reporting automation and long-term trend detection.",
    points: [
      "Noisy monitoring signal improvement.",
      "Radar and prism trend validation.",
      "Data quality checks and automated reporting support.",
      "Integrate, cleanse, validate, govern and decide workflows.",
    ],
  },
  "capabilities/training-capability-development": {
    eyebrow: "Services",
    title: "Training & Capability Development",
    intro: "Radar training, monitoring awareness and technical capability support for operational teams.",
    points: [
      "Monitoring awareness and escalation training.",
      "Radar workflow and review capability support.",
      "Practical development for teams working with monitoring systems and TARPs.",
    ],
  },
  "dtg-focus": {
    eyebrow: "DTG Focus™",
    title: "What is DTG Focus™?",
    intro: "DTG Focus™ integrates monitoring data, engineering workflows, governance and intelligent analytics into a single decision-support platform.",
    points: [
      "One platform, multiple technologies and a single operational view.",
      "Integrate monitoring technologies, Govern workflows and Decide with defensible records.",
      "Supports audit trails, decision records, change management and version control across monitoring workflows.",
    ],
  },
  "dtg-focus/multi-sensor-integration": {
    eyebrow: "DTG Focus™",
    title: "Multi-Sensor Integration",
    intro: "Connect radar, InSAR, prisms, GNSS, surface LiDAR, SLAM LiDAR, seismic, VWPs and operational context.",
    points: [
      "Multiple monitoring streams in one operating environment.",
      "Sensor input and correlation workflow.",
      "Context for engineers reviewing movement and risk.",
    ],
  },
  "dtg-focus/data-cleansing": {
    eyebrow: "DTG Focus™",
    title: "AI-Assisted Data Cleansing",
    intro: "Improve noisy monitoring signals and support engineering validation.",
    points: [
      "Raw versus cleaned movement signal review.",
      "Trend separation from noise.",
      "Radar and prism validation support.",
    ],
  },
  "dtg-focus/data-governance": {
    eyebrow: "DTG Focus™",
    title: "Data Governance",
    intro: "Quality checks, validation pathways and monitoring governance inside a future decision-support platform.",
    points: [
      "Support for monitoring data quality and validation workflows.",
      "Governance pathways for alarms, TARPs, audit trails and escalation review.",
      "Decision records, change management and version control across monitoring workflows.",
      "Designed for vendor-agnostic monitoring environments.",
    ],
  },
  "dtg-focus/decision-support": {
    eyebrow: "DTG Focus™",
    title: "Decision Support",
    intro: "Workflow support for TARPs, escalation, review and clearer operational decision-making.",
    points: [
      "TARP support and escalation workflow alignment.",
      "Operational visibility across radar, GNSS, prisms, LiDAR, SLAM LiDAR, InSAR, seismic and environmental data.",
      "Informed, defensible decisions for engineers and operational decision-makers.",
    ],
  },
  "dtg-focus/automated-reporting": {
    eyebrow: "DTG Focus™",
    title: "Automated Reporting",
    intro: "Post-blast reporting, monitoring summaries, quality checks and repeatable review outputs.",
    points: [
      "Automated post-blast report workflow.",
      "Repeatable monitoring summaries.",
      "Quality checks and report-ready review outputs.",
    ],
  },
  "dtg-focus/future-workflows": {
    eyebrow: "DTG Focus™",
    title: "Future Monitoring Workflows",
    intro: "Future operating models for AI-assisted review, mobile workflows and hazard intelligence.",
    points: [
      "AI agents with human verification.",
      "Mobile monitoring workflow vision.",
      "Photo-to-stability review concepts for future development.",
    ],
  },
  "operations/open-pit-mining": {
    eyebrow: "Applications",
    title: "Active Open Pits",
    intro: "Slope movement review, radar monitoring, post-blast reporting and operational monitoring insight.",
    points: [
      "Open cut slope movement review.",
      "Radar monitoring support.",
      "Post-blast reporting and operational visibility.",
    ],
  },
  "operations/tailings-storage-facilities": {
    eyebrow: "Applications",
    title: "Tailings Storage Facilities",
    intro: "Deformation review, InSAR correlation, escalation workflows and TSF monitoring governance.",
    points: [
      "TSF deformation and movement review.",
      "InSAR correlation and escalation context.",
      "Monitoring governance for critical storage facilities.",
    ],
  },
  "operations/underground-operations": {
    eyebrow: "Applications",
    title: "Underground Mining",
    intro: "Underground convergence monitoring, deformation tracking, SLAM LiDAR analysis and review support.",
    points: [
      "Convergence monitoring and deformation tracking.",
      "SLAM LiDAR analysis support.",
      "Operational review for underground mine environments.",
    ],
  },
  "operations/civil-infrastructure": {
    eyebrow: "Applications",
    title: "Corporate & Consultants",
    intro: "Independent review, technology advisory and monitoring insight for client and consultant teams.",
    points: [
      "Geotechnical monitoring support for infrastructure slopes, corridors and assets.",
      "Integrated monitoring context across remote sensing, environmental data and field observations.",
      "Decision support for owners, operators and technical teams managing ground movement risk.",
    ],
  },
  "operations/monitoring-lifecycle": {
    eyebrow: "Applications",
    title: "Monitoring Lifecycle",
    intro: "A practical lifecycle for monitoring selection, setup, integration, operation and continuous improvement.",
    points: [
      "Technology selection and deployment support.",
      "Monitoring setup and DTG Focus™ integration pathway.",
      "24/7 monitoring, continuous improvement and mine closure monitoring support.",
    ],
  },
  "insights/monitoring-evidence": {
    eyebrow: "Services Evidence",
    title: "Monitoring Evidence",
    intro: "Monitoring hours, alarm validation, availability and multi-sensor operating evidence.",
    points: [
      "9,600+ monitoring hours and 99% monitoring availability.",
      "50,000+ alarms validated through disciplined escalation control.",
      "Zero missed critical alarm events reported in the reviewed monitoring period.",
      "Multi-sensor review across radar, InSAR, prisms, GNSS and LiDAR.",
    ],
  },
  // COMPLIANCE DELETION (2026-07-18): "insights/long-term-deformation" removed — its route
  // 308-redirects (to /applications/tsf), so the data was dead, but it named sensor brands
  // (GroundProbe, Trimble). Removed rather than left one un-redirect from live. Do not re-add.
  "insights/alarm-confidence": {
    eyebrow: "Services Evidence",
    title: "Alarm Confidence",
    intro: "How DTG improves alarm confidence, escalation quality and operational awareness.",
    points: [
      "Alarm optimisation and alarm fatigue reduction.",
      "TARP 4 response workflow review.",
      "Responsible site contact and escalation confidence.",
    ],
  },
  "insights/monitoring-lessons": {
    eyebrow: "Services Evidence",
    title: "Monitoring Lessons",
    intro: "Short technical articles explaining monitoring challenges and how DTG approaches them.",
    points: [
      "Technical notes will be added as DTG publishes monitoring lessons.",
      "Future topics: monitoring noise, escalation, TARP quality and sensor selection.",
    ],
  },
};

function getDetailBreadcrumb(page: DetailPageContent) {
  if (page.eyebrow.includes("DTG Focus")) {
    return [{ label: "Home", href: "/" }, { label: "DTG Focus", href: "/dtg-focus" }, { label: page.title }];
  }

  if (page.eyebrow === "About") {
    return [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: page.title }];
  }

  if (page.eyebrow === "Services" || page.eyebrow === "Services Evidence") {
    return [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: page.title }];
  }

  if (page.eyebrow === "Applications") {
    return [{ label: "Home", href: "/" }, { label: "Applications", href: "/applications" }, { label: page.title }];
  }

  return [{ label: "Home", href: "/" }, { label: page.title }];
}

export function DetailPage({ page }: { page: DetailPageContent }) {
  const titleId = `${page.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-title`;

  return (
    <main className="story-page">
      <InternalHero
        breadcrumbItems={getDetailBreadcrumb(page).map((item) => ({
          ...item,
          label: renderTrademarkText(item.label),
        }))}
        title={renderTrademarkText(page.title)}
        subtitle={renderTrademarkText(page.intro)}
        titleId={titleId}
        variant={page.eyebrow.includes("DTG Focus") ? "focus" : "default"}
      />
      <section className="detail-body">
        <div className="story-shell detail-grid">
          <div>
            <p className="story-eyebrow text-[#6d747a]">Overview</p>
            <h2>Built one level deeper.</h2>
          </div>
          <div className="detail-list">
            {page.points.map((point) => (
              <div key={point}>{renderTrademarkText(point)}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-cta">
        <div className="story-shell">
          <h2>Start a monitoring conversation.</h2>
          <Link href="/contact" className="story-button">
            CONTACT <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
