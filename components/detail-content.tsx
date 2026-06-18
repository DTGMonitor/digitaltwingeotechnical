import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { renderTrademarkText } from "@/components/brand";

export type DetailPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
  related?: { label: string; href: string }[];
};

export const detailPages: Record<string, DetailPageContent> = {
  "about/why-dtg-exists": {
    eyebrow: "About",
    title: "Why DTG Exists",
    intro: "DTG was created to bridge the gap between powerful monitoring technologies and confident operational decisions.",
    points: [
      "Monitoring systems are generating more alarms, more signals and more vendor-specific workflows.",
      "DTG helps clients create clearer situational awareness from fragmented monitoring environments.",
      "The company is independent, technology agnostic and focused on decision support.",
    ],
  },
  "about/who-we-are": {
    eyebrow: "About",
    title: "Who We Are",
    intro: "DTG is an independent geotechnical monitoring insight company that helps organisations transform monitoring data into informed decisions.",
    points: [
      "Independent across sensors, radar brands and software ecosystems.",
      "Built around geotechnical monitoring, engineering review and operational visibility.",
      "Focused on actionable insight, governance and decision support.",
    ],
  },
  "about/our-journey": {
    eyebrow: "About",
    title: "Our Journey",
    intro: "DTG builds on a decade of remote geotechnical monitoring evolution and senior mining leadership.",
    points: [
      "Remote monitoring foundations developed through GroundProbe GSS experience from 2015 to 2024.",
      "Expanded into a technology-agnostic, multi-sensor monitoring insight model.",
      "DTG Focus™ represents the future workflow direction of the company.",
    ],
  },
  "about/leadership": {
    eyebrow: "About",
    title: "Leadership",
    intro: "Peter Saunders and Mark Burdett connect remote monitoring expertise with mining leadership and operational governance.",
    points: [
      "Peter Saunders, Founder / Director: remote monitoring pioneer and former GroundProbe GSS leader.",
      "Mark Burdett, Founder / Director: mining leadership across geology, civil engineering, consulting and governance.",
      "Together, DTG leadership connects monitoring insight with real operational understanding.",
    ],
  },
  "about/vision-future": {
    eyebrow: "About",
    title: "Vision & Future",
    intro: "DTG is working toward focused actionable insight for the next generation of geotechnical risk management.",
    points: [
      "Integrated monitoring data across sensors, vendors and operating environments.",
      "Future workflows that support validation, governance, escalation and action.",
      "Engineering expertise enhanced by AI-assisted analytics, with engineers remaining central to decision-making.",
    ],
  },
  "capabilities/monitoring-intelligence": {
    eyebrow: "Services",
    title: "Monitoring Insight",
    intro: "Remote monitoring, movement review and engineering interpretation for complex geotechnical environments.",
    points: [
      "Monitor, interpret and act methodology.",
      "Radar, prism, InSAR and movement review.",
      "Long-term trend analysis and post-blast reporting.",
      "Failure and alarm back-analysis with engineering context.",
    ],
  },
  "capabilities/monitoring-governance": {
    eyebrow: "Services",
    title: "Monitoring Governance",
    intro: "Alarm optimisation, TARP support and escalation workflows that improve confidence in monitoring response.",
    points: [
      "Detect, review, escalate and act workflows.",
      "TARP development and monitoring SOP support.",
      "Alarm quality review and nuisance alarm reduction.",
      "Response workflow review for safety-critical events.",
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
      "Vendor-agnostic review across equipment and software ecosystems.",
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
      "Integration, cleanse, validate, analyse, govern and act workflows.",
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
    intro: "DTG Focus™ is not a dashboard. It is an enterprise-grade geotechnical monitoring framework for data integration, governance, analytics and decision support.",
    points: [
      "One platform, multiple technologies and a single operational view.",
      "Integrate, visualise, analyse, govern and act.",
      "Engineering expertise enhanced by AI-assisted analytics.",
    ],
  },
  "dtg-focus/multi-sensor-integration": {
    eyebrow: "DTG Focus™",
    title: "Multi-Sensor Integration",
    intro: "Connect radar, InSAR, prisms, GNSS, LiDAR, seismic, VWPs and operational context.",
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
    intro: "Quality checks, validation pathways and monitoring governance inside a future operating framework.",
    points: [
      "Support for monitoring data quality and validation workflows.",
      "Governance pathways for alarms, TARPs and escalation review.",
      "Designed for vendor-agnostic monitoring environments.",
    ],
  },
  "dtg-focus/decision-support": {
    eyebrow: "DTG Focus™",
    title: "Decision Support",
    intro: "Workflow support for TARPs, escalation, review and clearer operational decision-making.",
    points: [
      "TARP support and escalation workflow alignment.",
      "Operational visibility across radar, GNSS, prisms, LiDAR, InSAR, seismic and environmental data.",
      "Focused actionable insight for engineers and operational decision-makers.",
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
    intro: "Underground convergence monitoring, deformation tracking, SLAM analysis and review support.",
    points: [
      "Convergence monitoring and deformation tracking.",
      "SLAM analysis support.",
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
  "insights/long-term-deformation": {
    eyebrow: "Services Evidence",
    title: "Long-Term Deformation Detection",
    intro: "How DTG identifies consistent movement from noisy radar and prism datasets.",
    points: [
      "Long-term deformation trend discovery.",
      "GroundProbe and Trimble prism validation context.",
      "Structurally controlled hazard review from noisy movement data.",
    ],
  },
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

export function DetailPage({ page }: { page: DetailPageContent }) {
  return (
    <main className="story-page">
      <section className="detail-hero">
        <div className="story-shell">
          <p className="story-eyebrow">{renderTrademarkText(page.eyebrow)}</p>
          <h1>{renderTrademarkText(page.title)}</h1>
          <p>{renderTrademarkText(page.intro)}</p>
        </div>
      </section>
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
            Initiate Briefing <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
