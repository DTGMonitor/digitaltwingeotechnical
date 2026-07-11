"use client";

import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BookOpenCheck,
  ChevronDown,
  CircleGauge,
  Compass,
  FileCheck2,
  Layers3,
  RadioTower,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { DTGFocusMark } from "@/components/brand";
import { InternalHero } from "@/components/internal-hero";

type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  body: string;
  href: string;
  useWhen: string[];
  outcomes: string[];
  tags: string[];
  Icon: LucideIcon;
  tone: "data" | "governance";
};

const homeLifecycleSteps = [
  {
    number: "01",
    title: "Define",
    summary: "Clarify requirements and risk context.",
    service: "Technology Advisory",
    Icon: Compass,
    tone: "governance",
  },
  {
    number: "02",
    title: "Select",
    summary: "Assess systems, vendors and integration.",
    service: "Technology Advisory",
    Icon: FileCheck2,
    tone: "governance",
  },
  {
    number: "03",
    title: "Monitor",
    summary: "Review alarms, data and reporting.",
    service: "Remote Monitoring",
    href: "/services/remote-monitoring",
    Icon: RadioTower,
    tone: "data",
  },
  {
    number: "04",
    title: "Analyse",
    summary: "Cleanse, correlate and back-analyse.",
    service: "Analytics & Automation",
    Icon: Activity,
    tone: "data",
  },
  {
    number: "05",
    title: "Govern",
    summary: "Support TARPs and decision records.",
    service: "Technical Advisory",
    Icon: ShieldCheck,
    tone: "governance",
  },
  {
    number: "06",
    title: "Build Capability",
    summary: "Improve awareness and response discipline.",
    service: "Training & Readiness",
    Icon: BookOpenCheck,
    tone: "hybrid",
  },
];

const primaryServices: Service[] = [
  {
    id: "remote-monitoring",
    number: "01",
    title: "Remote Monitoring",
    summary: "Real-time monitoring review and operational support for live environments.",
    body: "DTG provides remote monitoring support for clients managing radar, prisms, GNSS, InSAR, LiDAR, and other monitoring inputs. The service supports day-to-day monitoring visibility, alarm review, escalation communication, reporting discipline, and operational confidence.",
    href: "/services/remote-monitoring",
    useWhen: [
      "internal teams need monitoring support",
      "monitoring coverage needs to be strengthened",
      "alarms require independent review",
      "operational sites need consistent monitoring attention",
      "reporting and escalation need more structure",
    ],
    outcomes: [
      "Improved monitoring continuity",
      "Faster awareness of changing conditions",
      "More consistent alarm review",
      "Clearer escalation communication",
      "Stronger operational visibility",
    ],
    tags: ["LIVE MONITORING", "ALARM REVIEW", "ESCALATION", "REPORTING", "OPERATIONAL SUPPORT"],
    Icon: RadioTower,
    tone: "data",
  },
  {
    id: "monitoring-intelligence",
    number: "02",
    title: "Data Analytics",
    summary: "Advanced interpretation, analytics, and multi-sensor insight.",
    body: "DTG helps clients make sense of complex monitoring information by reviewing trends, correlating multiple data sources, identifying uncertainty, and converting monitoring output into more useful interpretation.",
    href: "/capabilities/data-intelligence",
    useWhen: [
      "multiple sensors need to be interpreted together",
      "trend behaviour is unclear",
      "monitoring data is noisy or incomplete",
      "long-term displacement needs review",
      "teams need clearer insight beyond raw alarms",
    ],
    outcomes: [
      "Better understanding of movement trends",
      "Multi-sensor correlation",
      "Reduced confusion from fragmented data",
      "Clearer interpretation of uncertainty",
      "More useful decision-support outputs",
    ],
    tags: ["MULTI-SENSOR", "ANALYTICS", "TREND REVIEW", "DATA INTERPRETATION", "DECISION SUPPORT"],
    Icon: Layers3,
    tone: "data",
  },
  {
    id: "governance-assurance",
    number: "03",
    title: "Technical Advisory",
    summary: "Independent advice on monitoring strategy, workflows, governance, and performance.",
    body: "DTG advises clients on how monitoring systems, workflows, thresholds, escalation pathways, and reporting structures should be designed, reviewed, and improved.",
    href: "/capabilities/monitoring-governance",
    useWhen: [
      "monitoring workflows are inconsistent",
      "alarm pathways need review",
      "TARP logic needs improvement",
      "reporting is not supporting decisions clearly",
      "stakeholders need independent monitoring advice",
    ],
    outcomes: [
      "Clearer monitoring governance",
      "Better-aligned escalation pathways",
      "Reduced operational ambiguity",
      "Stronger decision traceability",
      "More defensible monitoring workflows",
    ],
    tags: ["GOVERNANCE", "WORKFLOWS", "TARP", "ESCALATION", "ADVISORY"],
    Icon: FileCheck2,
    tone: "governance",
  },
  {
    id: "technology-advisory",
    number: "04",
    title: "Technology Advisory",
    summary: "Independent technology evaluation, selection, and implementation guidance.",
    body: "DTG helps clients assess monitoring technologies based on site risk, geometry, movement behaviour, operational constraints, data quality requirements, integration needs, and governance objectives.",
    href: "/capabilities/technology-advisory",
    useWhen: [
      "clients are selecting new monitoring technology",
      "multiple vendor options need comparison",
      "existing technology performance is uncertain",
      "monitoring requirements need definition",
      "integration and supportability need assessment",
    ],
    outcomes: [
      "Better-fit technology selection",
      "Clearer comparison of options",
      "Reduced vendor lock-in risk",
      "Stronger procurement rationale",
      "More practical implementation planning",
    ],
    tags: ["TECHNOLOGY SELECTION", "VENDOR-INDEPENDENT", "SENSOR REVIEW", "PROCUREMENT SUPPORT", "INTEGRATION"],
    Icon: Compass,
    tone: "governance",
  },
  {
    id: "technical-assurance",
    number: "05",
    title: "Technology Integration",
    summary: "Independent review of monitoring quality, alarms, interpretation, and traceability.",
    body: "DTG provides technical review across monitoring data quality, instrument configuration, alarm logic, multi-sensor correlation, reporting, and governance.",
    href: "/about/technical-assurance",
    useWhen: [
      "monitoring confidence needs strengthening",
      "alarms or thresholds need independent review",
      "data quality is uncertain",
      "reporting needs stronger traceability",
      "decisions need to be technically defensible",
    ],
    outcomes: [
      "More reliable interpretation",
      "Clearer alarm confidence",
      "Stronger review discipline",
      "Better documentation of uncertainty",
      "More defensible reporting",
    ],
    tags: ["DATA QUALITY", "ALARM LOGIC", "TRACEABILITY", "ASSURANCE", "GOVERNANCE"],
    Icon: ShieldCheck,
    tone: "governance",
  },
  {
    id: "training-awareness",
    number: "06",
    title: "Technical Advisory",
    summary: "Practical training to improve monitoring understanding and operational readiness.",
    body: "DTG supports monitoring capability development through training, awareness sessions, workflow guidance, and practical knowledge transfer.",
    href: "/capabilities/training-capability-development",
    useWhen: [
      "client teams need monitoring awareness",
      "new monitoring systems are being introduced",
      "operational teams need clearer escalation understanding",
      "reporting and review expectations need alignment",
      "monitoring knowledge needs to be transferred internally",
    ],
    outcomes: [
      "Stronger team awareness",
      "Better monitoring response readiness",
      "Improved technical and operational communication",
      "Clearer understanding of alarms and escalation",
      "More consistent monitoring practice",
    ],
    tags: ["TRAINING", "AWARENESS", "KNOWLEDGE TRANSFER", "READINESS", "TEAM CAPABILITY"],
    Icon: BookOpenCheck,
    tone: "data",
  },
];

const homeServices = [
  {
    id: "remote-monitoring",
    number: "01",
    title: "Remote Monitoring",
    description:
      "Independent oversight of real-time geotechnical monitoring to support faster response, clearer escalation and more confident operational decisions.",
    href: "/services/remote-monitoring",
    tags: ["Alarm review", "Live monitoring", "Escalation support"],
    Icon: RadioTower,
  },
  {
    id: "reporting-back-analysis",
    number: "02",
    title: "Reporting & Back-Analysis",
    description:
      "Clear reporting, event review and historical analysis to support traceable insight and stronger learning from monitoring events.",
    href: "/services/reporting-back-analysis",
    tags: ["Event review", "Technical reporting", "Decision records"],
    Icon: FileCheck2,
  },
  {
    id: "technology-integration",
    number: "03",
    title: "Technology Integration",
    description:
      "Connecting monitoring technologies, platforms and data streams into one clearer operational understanding.",
    href: "/services/technology-integration",
    tags: ["Multi-sensor inputs", "Platform alignment", "Data flow"],
    Icon: Layers3,
  },
  {
    id: "data-analytics",
    number: "04",
    title: "Data Analytics",
    description:
      "Transforming monitoring data into structured insight through analysis, correlation and clearer trend interpretation.",
    href: "/services/data-analytics-automation",
    tags: ["Trend review", "Correlation", "Movement insight"],
    Icon: Activity,
  },
  {
    id: "technical-advisory",
    number: "05",
    title: "Technical Advisory",
    description:
      "Independent technical guidance to support monitoring strategy, interpretation, escalation and decision-ready outcomes.",
    href: "/services/technical-advisory",
    tags: ["Strategy", "Governance", "Decision support"],
    Icon: Compass,
  },
];

const supportChips = [
  "Alarm Optimisation",
  "TARP Development",
  "Radar Monitoring Review",
  "Prism and GNSS Review",
  "InSAR Integration",
  "Post-Blast Monitoring Review",
  "Failure and Alarm Back-Analysis",
  "Data Cleansing and Filtering",
  "Monitoring Report Review",
  "Multi-Sensor Integration",
  "Underground Monitoring Support",
  "Operational Reporting",
];

const lifecycle = [
  ["Define", "Clarify monitoring requirement, risk, decision need, and operational context.", "governance"],
  ["Select", "Evaluate technologies, vendors, sensors, and integration options.", "governance"],
  ["Monitor", "Support live monitoring, review, alarms, and operational reporting.", "data"],
  ["Interpret", "Correlate data sources, review trends, and assess uncertainty.", "data"],
  ["Govern", "Strengthen workflows, escalation logic, TARPs, documentation, and assurance.", "governance"],
  ["Build Capability", "Train teams, transfer knowledge, and improve monitoring maturity.", "hybrid"],
] as const;

const outcomes = [
  ["Clearer monitoring visibility", "Monitoring information becomes easier to review, communicate, and act on."],
  ["Better technology decisions", "Technology choices are aligned to site need, risk, and operational practicality."],
  ["Reduced alarm uncertainty", "Alarm logic and escalation pathways are reviewed for meaning and usefulness."],
  ["Stronger governance", "Workflows, TARPs, reports, and decision records become more traceable."],
  ["Improved team capability", "Client teams gain clearer monitoring knowledge, awareness, and response confidence."],
];

const faqs = [
  [
    "Are DTG services tied to one monitoring technology?",
    "No. DTG's services are technology-agnostic. The monitoring requirement, operational context, data quality, and decision need should define the approach - not a preferred vendor or product.",
  ],
  [
    "Can DTG support existing monitoring systems?",
    "Yes. DTG can review and support existing monitoring systems, workflows, alarms, reporting, and data interpretation. The aim is to improve confidence in what is already in place as well as advise on future improvements.",
  ],
  [
    "Does DTG provide live monitoring support?",
    "Yes. DTG can support remote monitoring, alarm review, escalation communication, reporting discipline, and operational visibility depending on the client's monitoring requirements.",
  ],
  [
    "Can services be used individually?",
    "Yes. Each service can be used individually. However, many clients gain stronger value when technology review, monitoring support, interpretation, governance, and training are connected.",
  ],
  [
    "How does DTG's service model differ from a vendor?",
    "Vendors typically focus on their own equipment or platform. DTG focuses on the monitoring outcome: whether the technology, data, interpretation, workflows, and escalation pathways support better decisions.",
  ],
];

const serviceRelationships = [
  ["Monitor", "Live review, alarms and reporting."],
  ["Interpret", "Trends, correlation and technical insight."],
  ["Govern", "Workflows, assurance and decision traceability."],
] as const;

function LegacyServicesSection() {
  const [openService, setOpenService] = useState(primaryServices[0].id);
  const [openFaq, setOpenFaq] = useState("faq-0");

  return (
    <section id="services" className="svc-section" aria-labelledby="services-title">
      <div className="svc-band svc-band-hero">
        <div className="story-shell svc-shell">
          <div className="svc-header">
          <p className="eyebrow svc-eyebrow">Services</p>
          <h1 id="services-title" className="section-title svc-title">
            Monitoring services built around decision confidence.
          </h1>
          <div className="svc-deck">
            <p>
              DTG supports clients across the monitoring lifecycle - from technology selection and system review through
              to live monitoring, data interpretation, alarm optimisation, governance, reporting, and training.
            </p>
            <p>
              Our services are independent, technology-agnostic, and focused on helping geotechnical and operational
              teams make better decisions from complex monitoring environments.
            </p>
          </div>
          <p className="svc-support-line">Integrated monitoring. Independent review. Governed response.</p>
          <div className="svc-hero-actions">
            <Link href="#service-index" className="story-button">
              Explore service areas <ArrowUpRight size={15} />
            </Link>
            <Link href="/contact" className="story-button secondary">
              Start a monitoring conversation <ArrowUpRight size={15} />
            </Link>
          </div>
          </div>
        </div>
      </div>

      <div className="svc-band svc-band-architecture">
        <div className="story-shell svc-shell">
        <section className="svc-architecture" aria-labelledby="services-architecture-title">
          <div className="svc-architecture-copy">
            <p className="svc-kicker">Monitoring capabilities</p>
            <h2 id="services-architecture-title">One connected monitoring capability.</h2>
            <p>
              DTG connects monitoring, analytics, advisory, assurance and training into one practical support model -
              helping teams move from fragmented information to clearer operational decisions.
            </p>
            <p className="svc-architecture-line">
              Each service can stand alone. Together, they strengthen monitoring visibility, interpretation, governance
              and response confidence.
            </p>
            <div className="svc-relationship-row" aria-label="How DTG service groups relate">
              {serviceRelationships.map(([title, copy]) => (
                <article key={title}>
                  <strong>{title}</strong>
                  <span>{copy}</span>
                </article>
              ))}
            </div>
            <div className="svc-architecture-actions">
              <Link href="/services" className="story-button">
                Explore all services <ArrowUpRight size={15} />
              </Link>
              <Link href="/contact" className="svc-text-link">
                Discuss monitoring support <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
          <ServiceArchitectureDiagram />
        </section>
        </div>
      </div>

      <div className="svc-band svc-band-index">
        <div className="story-shell svc-shell">
        <div id="service-index" className="svc-index" aria-label="Primary DTG services">
          {[
            "monitoring-reporting",
            "technology-selection-integration",
            "data-analytics-automation",
            "technical-advisory-risk-support",
          ].map((anchor) => (
            <span key={anchor} id={anchor} className="svc-anchor-target" aria-hidden="true" />
          ))}
          {primaryServices.map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              isOpen={openService === service.id}
              onToggle={() => setOpenService(openService === service.id ? "" : service.id)}
            />
          ))}
        </div>
        </div>
      </div>

      <div className="svc-band svc-band-support">
        <div className="story-shell svc-shell">
        <div className="svc-specialist">
          <div>
            <p className="svc-kicker">Specialist support areas</p>
            <h3>Targeted monitoring support when the problem is specific.</h3>
            <p>
              DTG can also support targeted monitoring tasks where clients need independent review, interpretation, or
              workflow improvement.
            </p>
          </div>
          <div className="svc-chip-grid" aria-label="Specialist service support areas">
            {supportChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>
        </div>
      </div>

      <div className="svc-band svc-band-lifecycle">
        <div className="story-shell svc-shell">
        <div className="svc-lifecycle" aria-labelledby="services-lifecycle-title">
          <div className="svc-block-heading">
            <p className="svc-kicker">How services connect</p>
            <h3 id="services-lifecycle-title">How DTG services connect</h3>
            <p>
              Most monitoring challenges do not sit inside one service category. DTG&apos;s services are designed to connect
              technology advice, live monitoring support, alarm review, reporting improvement, and training into one
              practical monitoring support model.
            </p>
          </div>
          <ol className="svc-lifecycle-strip">
            {lifecycle.map(([title, copy, tone], index) => (
              <li className={`svc-lifecycle-step svc-lifecycle-step-${tone}`} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
        </div>
      </div>

      <div className="svc-band svc-band-outcomes">
        <div className="story-shell svc-shell">
        <div className="svc-outcomes" aria-labelledby="services-outcomes-title">
          <div className="svc-block-heading">
            <p className="svc-kicker">Client value</p>
            <h3 id="services-outcomes-title">What clients gain from DTG services</h3>
          </div>
          <div className="svc-outcome-grid">
            {outcomes.map(([title, copy]) => (
              <article className="svc-outcome-card" key={title}>
                <CircleGauge aria-hidden="true" size={22} strokeWidth={1.5} />
                <h4>{title}</h4>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
        </div>
      </div>

      <div className="svc-band svc-band-faq">
        <div className="story-shell svc-shell">
        <div className="svc-faq" aria-labelledby="services-faq-title">
          <div className="svc-block-heading">
            <p className="svc-kicker">FAQ</p>
            <h3 id="services-faq-title">Services, explained clearly.</h3>
          </div>
          <div className="svc-faq-list">
            {faqs.map(([question, answer], index) => {
              const id = `services-faq-${index}`;
              const isOpen = openFaq === `faq-${index}`;
              return (
                <div className="svc-faq-item" key={question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpenFaq(isOpen ? "" : `faq-${index}`)}
                  >
                    <span>{question}</span>
                    <ChevronDown aria-hidden="true" size={18} />
                  </button>
                  <div id={id} className="svc-faq-panel" hidden={!isOpen}>
                    <p>{answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>

      <div className="svc-band svc-band-cta">
        <div className="story-shell svc-shell">
        <div className="svc-cta">
          <div>
            <p className="svc-kicker">Next step</p>
            <h3>Need support across your monitoring lifecycle?</h3>
            <p>
              DTG can help review your monitoring systems, support live monitoring, improve alarm confidence, strengthen
              workflows, and turn complex monitoring information into more defensible operational decisions.
            </p>
          </div>
          <div className="svc-cta-actions">
            <Link href="/contact" className="story-button">
              Start a monitoring conversation <ArrowUpRight size={15} />
            </Link>
            <Link href="/dtg-focus" className="story-button secondary">
              Explore <DTGFocusMark />
            </Link>
            <Link href="/contact" className="svc-text-link">
              Request an independent service review <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function LegacyHomeServicesOverview() {
  return (
    <section id="services" className="home-services-overview" aria-labelledby="home-services-title">
      <div className="story-shell home-services-grid">
        <div className="home-services-copy">
          <p className="eyebrow">Services</p>
          <h2 id="home-services-title">Monitoring services built around decision confidence.</h2>
          <p>
            DTG provides independent monitoring support across live review, analytics, governance, advisory, technology
            selection and operational readiness.
          </p>
          <p className="home-services-support">
            Our services help teams move from fragmented monitoring information to clearer, more defensible decisions.
          </p>
          <div className="home-services-actions">
            <Link href="/services" className="story-button">
              Explore Services <ArrowUpRight size={15} />
            </Link>
            <Link href="/contact" className="svc-home-text-link">
              Discuss monitoring support <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="home-services-lifecycle" aria-label="Monitoring lifecycle support">
          <div className="home-services-lifecycle-header">
            <span>Monitoring lifecycle support</span>
            <strong>One structured service pathway.</strong>
          </div>
          <div className="home-services-rail" aria-hidden="true">
            <span />
          </div>
          <div className="home-lifecycle-steps">
            {homeLifecycleSteps.map(({ number, title, summary, service, Icon, tone, href }) => {
              const className = `home-lifecycle-step home-lifecycle-step-${tone}${href ? " home-lifecycle-link" : ""}`;
              const content = (
                <>
                  <span className="home-lifecycle-number">{number}</span>
                  <span className="home-service-icon">
                    <Icon aria-hidden="true" size={22} strokeWidth={1.45} />
                  </span>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  <small>{service}</small>
                </>
              );

              return href ? (
                <Link href={href} className={className} key={title} aria-label="Explore Remote Monitoring">
                  {content}
                </Link>
              ) : (
                <article className={className} key={title}>
                  {content}
                </article>
              );
            })}
          </div>
          <p className="home-services-outcome">
            <span>Outcome</span>
            Clearer monitoring visibility. Stronger review discipline. More defensible decisions.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, isOpen, onToggle }: { service: Service; isOpen: boolean; onToggle: () => void }) {
  const Icon = service.Icon;
  const panelId = `service-panel-${service.id}`;

  return (
    <article id={service.id} className={`svc-row svc-row-${service.tone} ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="svc-row-button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="svc-row-number">{service.number}</span>
        <span className="svc-row-title-wrap">
          <Icon aria-hidden="true" size={24} strokeWidth={1.45} />
          <span className="svc-row-title">{service.title}</span>
        </span>
        <span className="svc-row-summary">{service.summary}</span>
        <span className="svc-row-meta">
          {service.tags.slice(0, 2).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          <ChevronDown aria-hidden="true" size={20} />
        </span>
      </button>
      <div id={panelId} className="svc-row-panel" hidden={!isOpen}>
        <div className="svc-panel-copy">
          <p>{service.body}</p>
          <Link href={service.href} className="svc-text-link">
            Explore service <ArrowUpRight size={14} />
          </Link>
        </div>
        <div>
          <h4>Use this service when</h4>
          <ul>
            {service.useWhen.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Key outcomes</h4>
          <ul>
            {service.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="svc-panel-tags">
          {service.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ServiceArchitectureDiagram() {
  const nodes = [
    {
      label: "Remote Monitoring",
      descriptor: "Live review, alarms, escalation and reporting.",
      href: "/services/remote-monitoring",
      Icon: RadioTower,
      tone: "data",
    },
    {
      label: "Data Analytics",
      descriptor: "Trend analysis, correlation and interpretation.",
      href: "/services/monitoring-intelligence",
      Icon: Activity,
      tone: "data",
    },
    {
      label: "Technical Advisory",
      descriptor: "Workflows, strategy and monitoring performance.",
      href: "/services/monitoring-advisory",
      Icon: FileCheck2,
      tone: "governance",
    },
    {
      label: "Technology Advisory",
      descriptor: "Vendor-independent review and selection.",
      href: "/services/technology-advisory",
      Icon: Compass,
      tone: "governance",
    },
    {
      label: "Technology Integration",
      descriptor: "Data quality, alarm logic and traceability.",
      href: "/services/technical-assurance",
      Icon: ShieldCheck,
      tone: "governance",
    },
    {
      label: "Technical Advisory",
      descriptor: "Capability, readiness and response discipline.",
      href: "/services/training-awareness",
      Icon: BookOpenCheck,
      tone: "data",
    },
  ] as const;

  return (
    <div
      className="svc-architecture-diagram"
      role="group"
      aria-labelledby="svc-ecosystem-title"
      aria-describedby="svc-ecosystem-desc"
    >
      <p id="svc-ecosystem-title" className="sr-only">
        DTG connected monitoring capability
      </p>
      <p id="svc-ecosystem-desc" className="sr-only">
        DTG services connect remote monitoring, intelligence, advisory, technology review, assurance and training around
        client decision confidence.
      </p>
      <svg className="svc-diagram-connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path className="svc-connector svc-connector-1 svc-connector-data" d="M27 19 C39 24 43 33 50 50" />
        <path className="svc-connector svc-connector-2 svc-connector-data" d="M73 19 C61 24 57 33 50 50" />
        <path className="svc-connector svc-connector-3 svc-connector-governance" d="M27 50 C36 50 42 50 50 50" />
        <path className="svc-connector svc-connector-4 svc-connector-governance" d="M73 50 C64 50 58 50 50 50" />
        <path className="svc-connector svc-connector-5 svc-connector-governance" d="M27 81 C39 76 43 67 50 50" />
        <path className="svc-connector svc-connector-6 svc-connector-data" d="M73 81 C61 76 57 67 50 50" />
      </svg>
      <div className="svc-diagram-ring" aria-hidden="true" />
      <div className="svc-diagram-center">
        <span>Client outcome</span>
        <strong>Decision Confidence</strong>
        <small>Clearer operational response</small>
      </div>
      {nodes.map(({ label, descriptor, href, Icon, tone }, index) => (
        <Link
          href={href}
          className={`svc-diagram-node svc-diagram-node-${tone} svc-diagram-node-${index + 1}`}
          key={label}
        >
          <Icon aria-hidden="true" size={20} strokeWidth={1.45} />
          <span className="svc-node-copy">
            <strong>{label}</strong>
            <small>{descriptor}</small>
          </span>
          <ArrowUpRight className="svc-node-arrow" aria-hidden="true" size={15} strokeWidth={1.6} />
        </Link>
      ))}
    </div>
  );
}

void LegacyServicesSection;
void LegacyHomeServicesOverview;

type ServiceArea = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  shortLine: string;
  detailHref: string;
  positioning: string;
  coreMessage: string;
  description: string;
  whereHelps: string;
  scope: string[];
  outputs: string[];
  clientValue: string;
  visualConcept: string[];
  Icon: LucideIcon;
  tone: "data" | "governance" | "hybrid";
};

const newServiceAreas: ServiceArea[] = [
  {
    id: "remote-monitoring",
    number: "01",
    title: "Remote Monitoring",
    shortTitle: "Remote Monitoring",
    shortLine: "Live monitoring review, alarms and escalation support.",
    detailHref: "/services/remote-monitoring",
    positioning: "Live monitoring support for changing ground conditions.",
    coreMessage:
      "DTG supports real-time geotechnical monitoring environments through live monitoring review, data quality awareness, deformation trend interpretation and escalation support.",
    description:
      "Live monitoring, alarms, data quality and TARP-based escalation.",
    whereHelps:
      "For sites that operate real-time geotechnical monitoring systems and need live or near-real-time support for alarm review, deformation interpretation and communication with site teams.",
    scope: [
      "real-time monitoring of open-pit mine slopes and other geotechnical assets",
      "slope stability radar and real-time sensor monitoring support",
      "radar / sensor data quality assessment",
      "system health review",
      "scan area review",
      "image quality review",
      "monitoring feature review",
      "alarm configuration review",
      "atmospheric correction review",
      "deformation trend interpretation",
      "progressive, regressive and linear trend review",
      "failure and rockfall identification support",
      "TARP-based escalation support",
      "inverse velocity failure prediction for progressive deformation trends",
      "communication with the site geotechnical team",
      "coordination with technical specialists for system or hardware issues",
    ],
    outputs: [
      "live monitoring review",
      "alarm and escalation communication",
      "deformation trend updates",
      "monitoring quality observations",
      "failure prediction updates where applicable",
      "operational monitoring support records",
    ],
    clientValue:
      "Clients gain clearer monitoring visibility, stronger alarm context, faster escalation confidence and more consistent monitoring records.",
    visualConcept: ["Data Quality", "Deformation Review", "TARP Escalation", "Site Communication", "Decision Support"],
    Icon: RadioTower,
    tone: "data",
  },
  {
    id: "monitoring-reporting",
    number: "02",
    title: "Reporting & Back-Analysis",
    shortTitle: "Reporting & Back-Analysis",
    shortLine: "Clear reporting, event review and historical analysis.",
    detailHref: "/services/reporting-back-analysis",
    positioning: "Independent monitoring reports and event review for clearer decision records.",
    coreMessage:
      "Reporting is not only an output from live monitoring. It is a standalone service for clients who need independent review, interpretation and documentation of monitoring information.",
    description:
      "Independent monitoring reports, deformation interpretation, event reviews, alarm back-analysis, failure back-analysis and long-term multi-sensor reporting.",
    whereHelps:
      "For clients who need DTG to review, interpret and document monitoring information, whether or not DTG is providing live remote monitoring.",
    scope: [
      "daily monitoring reports",
      "weekly monitoring reports",
      "monthly monitoring reports",
      "site-required monitoring reports",
      "radar data quality reporting",
      "deformation analysis reporting",
      "slope behaviour evaluation",
      "deformation velocity review",
      "alarm back-analysis reports",
      "failure reports",
      "failure back-analysis reports",
      "post-blast analysis reports",
      "event-based monitoring reports",
      "long-term multi-sensor analysis reports",
      "independent review of existing site monitoring data",
    ],
    outputs: [
      "daily / weekly / monthly monitoring reports",
      "post-blast review reports",
      "alarm back-analysis reports",
      "failure back-analysis reports",
      "long-term trend reports",
      "independent monitoring review reports",
      "decision-support documentation",
    ],
    clientValue:
      "Clients gain clearer documentation, stronger review traceability, independent interpretation and better decision-support records.",
    visualConcept: ["Monitoring Data", "Review", "Interpretation", "Report", "Decision Record"],
    Icon: FileCheck2,
    tone: "governance",
  },
  {
    id: "technology-selection-integration",
    number: "03",
    title: "Technology Integration",
    shortTitle: "Technology Integration",
    shortLine: "Connecting monitoring systems, data sources and workflows.",
    detailHref: "/services/technology-integration",
    positioning: "Vendor-independent technology review, selection and integration support.",
    coreMessage: "DTG starts with monitoring requirements, site conditions and decision needs - not vendor preference.",
    description:
      "Vendor-independent review, selection and integration support for monitoring technologies and systems.",
    whereHelps:
      "For clients choosing, comparing, reviewing or integrating monitoring systems across complex operational environments.",
    scope: [
      "monitoring requirement definition",
      "technology suitability review",
      "vendor-independent comparison",
      "sensor selection support",
      "radar, GNSS, prisms, InSAR, LiDAR, SLAM LiDAR, VWP and other monitoring technology review",
      "software / platform review",
      "multi-sensor integration support",
      "implementation guidance",
      "supportability review",
      "operational practicality review",
      "data quality and integration potential review",
    ],
    outputs: [
      "technology suitability review",
      "vendor comparison support",
      "monitoring system recommendation",
      "integration pathway",
      "implementation support notes",
      "monitoring requirement brief",
    ],
    clientValue:
      "Clients gain better technology decisions, reduced vendor bias, clearer trade-offs and stronger alignment between monitoring systems and operational needs.",
    visualConcept: ["Requirement", "Site Conditions", "Technology Options", "Integration", "Monitoring Value"],
    Icon: Compass,
    tone: "governance",
  },
  {
    id: "data-analytics-automation",
    number: "04",
    title: "Data Analytics",
    shortTitle: "Data Analytics",
    shortLine: "Filtering, trend analysis and repeatable review workflows.",
    detailHref: "/services/data-analytics-automation",
    positioning: "Advanced processing, correlation and automation for complex monitoring data.",
    coreMessage:
      "This service is for clients with noisy, fragmented, long-term or technically complex datasets that require deeper processing, correlation or automated workflows.",
    description:
      "Data cleansing, trend analysis, multi-sensor correlation, SLAM LiDAR deformation analysis and automated monitoring workflows.",
    whereHelps:
      "For clients with complex, noisy, fragmented or long-term monitoring datasets that require deeper processing, analysis, correlation or automation.",
    scope: [
      "data cleansing",
      "filtering",
      "long-term trend analysis",
      "deformation trend review",
      "velocity analysis",
      "multi-sensor correlation",
      "radar, prism, GNSS, InSAR, LiDAR and VWP data comparison",
      "SLAM LiDAR deformation analysis",
      "underground convergence review",
      "point cloud comparison",
      "change detection",
      "custom reporting workflows",
      "alarm / failure back-analysis automation",
      "automated monitoring workflows",
      "machine-learning-supported review where appropriate",
    ],
    outputs: [
      "cleaned datasets",
      "filtered deformation trends",
      "correlation plots or summaries",
      "long-term trend analysis",
      "SLAM LiDAR deformation analysis outputs",
      "change detection summaries",
      "automated reporting workflow",
      "custom analytical tools",
      "decision-support analytics",
    ],
    clientValue:
      "Clients gain clearer trends, faster review workflows, stronger multi-sensor understanding and more repeatable analytical outputs.",
    visualConcept: ["Raw Data", "Clean", "Correlate", "Analyse", "Automate", "Review"],
    Icon: Activity,
    tone: "data",
  },
  {
    id: "technical-advisory-risk-support",
    number: "05",
    title: "Technical Advisory",
    shortTitle: "Technical Advisory",
    shortLine: "Independent advice, strategy and capability support.",
    detailHref: "/services/technical-advisory",
    positioning: "Independent review, risk support, monitoring strategy and capability transfer.",
    coreMessage:
      "This service supports clients who need monitoring-related technical advice, risk context, review discipline, training or capability transfer.",
    description: "Independent review, risk support, monitoring strategy and capability transfer.",
    whereHelps:
      "For clients who need technical support, monitoring interpretation, risk context, training or capability transfer around their monitoring program.",
    scope: [
      "technical monitoring advice",
      "risk-based review",
      "monitoring workflow review",
      "TARP awareness",
      "escalation support",
      "monitoring response discipline",
      "reporting discipline",
      "training and knowledge transfer",
      "capability transfer for client monitoring teams",
      "review of monitoring practice",
      "support for operational decision-making",
    ],
    outputs: [
      "technical advisory notes",
      "monitoring review recommendations",
      "training sessions",
      "capability transfer materials",
      "risk support summaries",
      "escalation or response guidance",
      "monitoring workflow improvement notes",
    ],
    clientValue:
      "Clients gain stronger technical understanding, improved monitoring discipline, clearer response awareness and better team capability.",
    visualConcept: ["Review", "Advise", "Train", "Support", "Improve"],
    Icon: ShieldCheck,
    tone: "hybrid",
  },
];

const newSupportChips = [
  "weekend reporting support",
  "daily / weekly / monthly monitoring reports",
  "post-blast review",
  "alarm back-analysis",
  "failure back-analysis",
  "long-term deformation trend review",
  "multi-sensor correlation",
  "SLAM LiDAR deformation analysis",
  "underground convergence review",
  "radar data quality review",
  "TARP and escalation review",
  "monitoring workflow review",
  "technology suitability review",
  "independent reporting for existing site teams",
  "capability transfer",
];

void newSupportChips;

const newLifecycle = [
  ["Select", "Technology Integration", "Define requirements, compare options and plan integration.", "governance"],
  ["Monitor", "Remote Monitoring", "Review live systems, alarms, data quality and escalation.", "data"],
  ["Report", "Reporting & Back-Analysis", "Document trends, events, alarms, failures and long-term behaviour.", "governance"],
  ["Analyse", "Data Analytics", "Cleanse, correlate and interpret complex monitoring datasets.", "data"],
  ["Support", "Technical Advisory", "Strengthen interpretation, response discipline and team capability.", "hybrid"],
] as const;

const newOutcomes = [
  ["Clearer monitoring visibility", "Monitoring information becomes easier to review, communicate and act on."],
  ["Better technology decisions", "Technology choices are aligned to site needs, risk exposure and operational practicality."],
  ["Reduced alarm uncertainty", "Alarms, trends and events are reviewed with stronger technical context."],
  ["Stronger decision records", "Reports, TARPs, audit trails and review records become more traceable."],
  ["Improved team capability", "Client teams gain clearer monitoring knowledge, response discipline and operational confidence."],
];

const newFaqs = [
  [
    "Can DTG provide reporting without remote monitoring?",
    "Yes. DTG can provide independent reporting, event review, alarm back-analysis, failure back-analysis and long-term monitoring reports even when the site already has its own monitoring team.",
  ],
  [
    "Can DTG support sites that already have monitoring engineers?",
    "Yes. DTG can support existing teams through independent review, reporting, technical advice, analytics, training or event-based back-analysis.",
  ],
  [
    "Are DTG services tied to one monitoring vendor?",
    "No. DTG is independent of monitoring vendors, software vendors and equipment manufacturers. Technology is reviewed based on site requirements, data quality, operational practicality and decision value.",
  ],
  [
    "Can DTG help with both real-time and non-real-time monitoring data?",
    "Yes. Remote Monitoring supports real-time monitoring environments, while Reporting & Back-Analysis can support non-real-time datasets, periodic reporting and event-based review.",
  ],
  [
    "Where does SLAM LiDAR underground analysis sit?",
    "SLAM LiDAR deformation analysis sits under Data Analytics and may also support underground mining applications, convergence review, point cloud comparison and change detection.",
  ],
  [
    "Can services be used individually?",
    "Yes. DTG services can be used individually or combined depending on site requirements, monitoring maturity and operational risk.",
  ],
];

const serviceOverviewCopy: Record<string, { title: string; description: string; supports: string }> = {
  "remote-monitoring": {
    title: "Remote Monitoring",
    description: "Live monitoring, alarm review, data quality checks and TARP-based escalation support.",
    supports: "Live systems, alarms, deformation trends and operational escalation.",
  },
  "monitoring-reporting": {
    title: "Reporting & Back-Analysis",
    description: "Independent reporting, event review, failure back-analysis and traceable decision records.",
    supports: "Reports, event reviews, trend records and technical documentation.",
  },
  "technology-selection-integration": {
    title: "Technology Integration",
    description:
      "Vendor-independent review, selection and integration support for monitoring technologies and systems.",
    supports: "Technology selection, integration pathways and platform review.",
  },
  "data-analytics-automation": {
    title: "Data Analytics",
    description: "Data cleansing, trend analysis, multi-source correlation and movement interpretation.",
    supports: "Noisy datasets, long-term trends, correlation and repeatable analysis.",
  },
  "technical-advisory-risk-support": {
    title: "Technical Advisory",
    description:
      "Independent technical guidance for monitoring strategy, escalation, governance and capability transfer.",
    supports: "Strategy, review discipline, escalation logic and team capability.",
  },
};

export function ServicesSection() {
  const [openFaq, setOpenFaq] = useState("faq-0");

  return (
    <section id="services" className="services-overview-page" aria-labelledby="services-title">
      <InternalHero
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title="Services"
        subtitle="Independent monitoring support."
        intro="DTG supports monitoring teams through independent review, reporting, technology integration, analytics and advisory support."
        titleId="services-title"
      />

      <div className="services-overview-band">
        <div className="site-container services-support-layout">
          <div>
            <p className="section-label">WHAT DTG SERVICES SUPPORT</p>
            <h2>From monitoring information to defensible decisions.</h2>
          </div>
          <p>
            Monitoring systems produce data, alarms, trends and reports. DTG helps clients review that information,
            interpret what it means, and support clearer operational decisions through independent geotechnical
            monitoring expertise.
          </p>
        </div>
      </div>

      <div id="service-areas" className="services-overview-band services-list-band">
        <div className="site-container">
          <div className="services-section-heading">
            <p className="section-label">SERVICES WE PROVIDE</p>
            <h2>What DTG can support.</h2>
          </div>
          <ol className="services-index-list" aria-label="DTG services">
            {newServiceAreas.map((service) => {
              const overview = serviceOverviewCopy[service.id];
              return (
                <li key={service.id}>
                  <Link href={service.detailHref} className="services-index-row">
                    <span className="services-index-number">{service.number}</span>
                    <span className="services-index-title">{overview.title}</span>
                    <span className="services-index-copy">
                      <span>{overview.description}</span>
                      <small>Supports: {overview.supports}</small>
                    </span>
                    <ArrowUpRight aria-hidden="true" size={17} />
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <div className="services-overview-band">
        <div className="site-container services-connect-layout">
          <div className="services-section-heading">
            <p className="section-label">HOW SERVICES CONNECT</p>
            <h2>Services that can stand alone or work together.</h2>
            <p>
              DTG services can be combined across monitoring programs without forcing a single engagement model.
            </p>
          </div>
          <ol className="services-sequence" aria-label="Services connection sequence">
            {newLifecycle.map(([title, service, copy], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <small>{service}</small>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="services-overview-band">
        <div className="site-container">
          <div className="services-section-heading">
            <p className="section-label">OUTCOMES</p>
            <h2>What clients gain from DTG services.</h2>
          </div>
          <div className="services-outcome-list">
            {newOutcomes.map(([title, copy]) => (
              <article key={title}>
                <CircleGauge aria-hidden="true" size={20} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="services-overview-band services-faq-band">
        <div className="site-container services-faq-layout">
          <div className="services-section-heading">
            <p className="section-label">FAQ</p>
            <h2>Services, explained clearly.</h2>
          </div>
          <div className="services-faq-list">
            {newFaqs.map(([question, answer], index) => {
              const id = `services-faq-${index}`;
              const isOpen = openFaq === `faq-${index}`;
              return (
                <div className="services-faq-item" key={question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpenFaq(isOpen ? "" : `faq-${index}`)}
                  >
                    <span>{question}</span>
                    <ChevronDown aria-hidden="true" size={18} />
                  </button>
                  <div id={id} className="services-faq-panel" hidden={!isOpen}>
                    <p>{answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="services-overview-band services-cta-band">
        <div className="site-container services-overview-cta">
          <div>
            <p className="section-label">START A CONVERSATION</p>
            <h2>Need support across your monitoring lifecycle?</h2>
            <p>
              DTG can help review live monitoring, prepare independent reports, support technology decisions, analyse
              complex datasets and strengthen advisory response.
            </p>
          </div>
          <Link href="/contact" className="story-button">
            Discuss monitoring support <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeServicesOverview() {
  return (
    <section id="services" className="home-services-overview" aria-labelledby="home-services-title">
      <div className="site-container home-services-editorial">
        <div className="home-services-header">
          <p className="section-label">SERVICES</p>
          <h2 id="home-services-title">Independent Monitoring Support.</h2>
          <p>
            DTG supports monitoring teams through independent review, reporting, technology integration, analytics and
            advisory support.
          </p>
        </div>

        <ol className="home-services-index" aria-label="DTG services">
          {homeServices.map(({ number, title, description, href, tags }) => (
            <li key={title}>
              <Link href={href} className="home-service-index-row">
                <span className="home-service-index-number">{number}</span>
                <h3>{title}</h3>
                <div className="home-service-index-copy">
                  <p>{description}</p>
                  <div className="home-service-index-tags" aria-label={`${title} support areas`}>
                    {tags.map((tag) => (
                      <small key={tag}>{tag}</small>
                    ))}
                  </div>
                </div>
                <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ServiceDetail({ service }: { service: ServiceArea }) {
  const { id, number, title, positioning, whereHelps, scope, outputs, clientValue, visualConcept, Icon, tone } = service;

  if (id === "remote-monitoring") {
    return (
      <article id={id} className={`svc-detail-card svc-detail-card-${tone} svc-detail-card-preview`}>
        <div className="svc-detail-intro">
          <span>{number}</span>
          <Icon aria-hidden="true" size={28} strokeWidth={1.45} />
          <h2>{title}</h2>
          <p>{service.description}</p>
        </div>
        <div className="svc-detail-body">
          <section>
            <h3>Preview</h3>
            <p>{service.coreMessage}</p>
          </section>
          <section>
            <h3>Dedicated service page</h3>
            <p>
              The full Remote Monitoring service detail now lives on its own page, including review scope, workflow,
              service modes, deliverables, outcomes and FAQ.
            </p>
            <Link href="/services/remote-monitoring" className="svc-text-link">
              Explore Remote Monitoring <ArrowUpRight size={14} />
            </Link>
          </section>
        </div>
      </article>
    );
  }

  return (
    <article id={id} className={`svc-detail-card svc-detail-card-${tone}`}>
      <div className="svc-detail-intro">
        <span>{number}</span>
        <Icon aria-hidden="true" size={28} strokeWidth={1.45} />
        <h2>{title}</h2>
        <p>{positioning}</p>
      </div>
      <div className="svc-detail-body">
        <section>
          <h3>Where this helps</h3>
          <p>{whereHelps}</p>
        </section>
        <section>
          <h3>What DTG does</h3>
          <ul>
            {scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Typical outputs</h3>
          <ul>
            {outputs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Client value</h3>
          <p>{clientValue}</p>
        </section>
        <section>
          <h3>Service pathway</h3>
          <div className="svc-process-line">
            {visualConcept.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
        {id === "monitoring-reporting" ? (
          <section>
            <h3>Dedicated service page</h3>
            <p>Explore the full Reporting & Back-Analysis service page for reporting models, event workflows, report types, review scope and FAQ.</p>
            <Link href="/services/reporting-back-analysis" className="svc-text-link">
              Explore Reporting & Back-Analysis <ArrowUpRight size={14} />
            </Link>
          </section>
        ) : null}
        {id === "technology-selection-integration" ? (
          <section>
            <h3>Dedicated service page</h3>
            <p>Explore the full Technology Integration service page for integration scope, monitoring workflows, governance alignment and FAQ.</p>
            <Link href="/services/technology-integration" className="svc-text-link">
              Explore Technology Integration <ArrowUpRight size={14} />
            </Link>
          </section>
        ) : null}
        {id === "data-analytics-automation" ? (
          <section>
            <h3>Dedicated service page</h3>
            <p>Explore the full Data Analytics service page for data cleansing, trend analysis, multi-sensor comparison, workflow automation and FAQ.</p>
            <Link href="/services/data-analytics-automation" className="svc-text-link">
              Explore Data Analytics <ArrowUpRight size={14} />
            </Link>
          </section>
        ) : null}
        {id === "technical-advisory-risk-support" ? (
          <section>
            <h3>Dedicated service page</h3>
            <p>Explore the full Technical Advisory service page for monitoring review, alarm and TARP support, workflow improvement, technical risk support and FAQ.</p>
            <Link href="/services/technical-advisory" className="svc-text-link">
              Explore Technical Advisory <ArrowUpRight size={14} />
            </Link>
          </section>
        ) : null}
      </div>
    </article>
  );
}

void ServiceDetail;
