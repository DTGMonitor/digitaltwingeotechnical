"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { InternalHero } from "@/components/internal-hero";

const contextRows = [
  ["Restricted visibility", "Underground deformation may be localised and difficult to observe continuously."],
  [
    "Spatial comparison",
    "Change is often understood by comparing excavation profiles, scans, inspections or monitoring records over time.",
  ],
  ["Context matters", "Ground support, excavation sequence, geology and inspection evidence influence interpretation."],
] as const;

const reviewRows = [
  {
    area: "Convergence and deformation behaviour",
    matters: "Movement may be localised around drives, headings, intersections, stopes or unsupported areas.",
    support:
      "Review of closure, displacement, deformation patterns, movement direction, localised change and progressive behaviour.",
  },
  {
    area: "SLAM LiDAR and spatial change",
    matters: "Scan-to-scan comparison can reveal excavation geometry change that is not obvious from isolated observations.",
    support:
      "Review of SLAM LiDAR outputs, spatial comparison, excavation profile change and scan-based deformation indicators where suitable data is available.",
  },
  {
    area: "Ground support and excavation context",
    matters:
      "Deformation needs to be interpreted with support condition, excavation sequence, geological structure and operational activity.",
    support:
      "Review of monitoring observations alongside inspection notes, ground support records, excavation history, geological mapping and operational context where available.",
  },
  {
    area: "Data quality and monitoring confidence",
    matters:
      "Poor scan coverage, registration error, incomplete point clouds, alignment issues or data gaps can affect interpretation.",
    support:
      "Review of scan coverage, registration quality, point-cloud completeness, survey alignment, spatial resolution and interpretation limitations.",
  },
  {
    area: "Reporting and traceability",
    matters: "Underground records need to support future comparison, technical review and communication.",
    support:
      "Structured reporting of what was reviewed, what changed, what was compared, how confident the interpretation is and what uncertainty remains.",
  },
] as const;

const pathwayStages = [
  [
    "Spatial record",
    "Available scans, point clouds, convergence observations, inspections and historical records are gathered for review.",
    "RECORD",
  ],
  [
    "Scan quality review",
    "Coverage, registration, alignment, completeness, resolution and data limitations are checked.",
    "QUALITY",
  ],
  [
    "Change comparison",
    "Excavation profiles, scan periods and deformation indicators are compared to identify meaningful spatial change.",
    "COMPARE",
  ],
  [
    "Context review",
    "Observed changes are reviewed alongside excavation geometry, ground support, geology, inspections and operational activity where available.",
    "CONTEXT",
  ],
  [
    "Technical interpretation",
    "Evidence strength, uncertainty, deformation behaviour and areas requiring further review are clarified.",
    "INTERPRET",
  ],
  [
    "Reporting record",
    "Findings, assumptions, limitations and comparison notes are documented for traceability.",
    "REPORT",
  ],
] as const;

const evidenceGroups = [
  {
    title: "Spatial records",
    copy: "Spatial datasets help show excavation profile change, convergence indicators and areas requiring comparison.",
    items: ["SLAM LiDAR", "laser scanning / point clouds", "scan-to-scan comparison", "excavation profile change"],
  },
  {
    title: "Monitoring and measurements",
    copy: "Measurement records can add point-based evidence to the spatial and inspection record.",
    items: ["convergence measurements", "extensometers where available", "prisms / survey monitoring where applicable", "deformation records"],
  },
  {
    title: "Site context",
    copy: "Underground interpretation depends on the excavation, support condition and geological setting around the observation.",
    items: ["inspections", "ground support records", "excavation history", "geological mapping", "operational records"],
  },
  {
    title: "Review records",
    copy: "Structured records preserve what was compared, what changed and what confidence exists in the interpretation.",
    items: ["event reports", "historical monitoring records", "comparison notes", "technical review records"],
  },
] as const;

const clientQuestions = [
  "Is convergence or deformation developing in a specific area?",
  "Has the excavation profile changed between scan periods?",
  "Is the observed change meaningful or influenced by scan quality or registration?",
  "Are there areas where scan coverage or data quality limits interpretation?",
  "Does the deformation align with excavation geometry, ground support condition or structural context?",
  "Are inspection observations consistent with the monitoring record?",
  "What should be reviewed further, reported or escalated?",
  "What should be recorded for future comparison and traceability?",
] as const;

const outcomes = [
  [
    "Clearer deformation understanding",
    "Teams gain clearer interpretation of underground deformation, convergence behaviour and spatial change.",
  ],
  [
    "Stronger spatial comparison",
    "Scan and spatial datasets can be reviewed more consistently to identify meaningful change and uncertainty.",
  ],
  [
    "Better context integration",
    "Monitoring observations can be considered alongside inspections, ground support, excavation sequence and geological context.",
  ],
  [
    "Improved reporting traceability",
    "Underground monitoring records become more structured, comparable and useful for future review.",
  ],
  [
    "More defensible technical review",
    "Technical conclusions are better supported by reviewed evidence, documented limitations and clear interpretation.",
  ],
] as const;

const faqs = [
  [
    "What does DTG support in underground mining?",
    "DTG supports underground monitoring through deformation review, convergence interpretation, SLAM LiDAR analysis, spatial comparison, data quality review, reporting, back-analysis and technical advisory support.",
  ],
  [
    "Does DTG only work with SLAM LiDAR?",
    "No. SLAM LiDAR may be part of underground monitoring, but DTG can also review available information such as laser scans, point clouds, convergence measurements, extensometers, prisms, inspections, ground support records, geological mapping and operational records.",
  ],
  [
    "What is scan-to-scan comparison?",
    "Scan-to-scan comparison is the review of spatial datasets from different monitoring periods to identify changes in excavation profile, convergence, deformation indicators or areas requiring further technical review.",
  ],
  [
    "Can DTG review scan quality and data limitations?",
    "Yes. DTG can review coverage, registration quality, alignment, completeness, resolution, data gaps and other limitations that affect confidence in interpretation.",
  ],
  [
    "Can DTG provide underground reporting without live monitoring?",
    "Yes. DTG can provide periodic reporting, event review, historical comparison, scan review or back-analysis depending on available data and client requirements.",
  ],
  [
    "Does DTG replace site geotechnical inspections?",
    "No. DTG does not replace site inspections. DTG supports monitoring review by helping interpret available data and records alongside inspection observations and site context where available.",
  ],
  [
    "Can DTG help improve underground monitoring workflows?",
    "Yes. DTG can review underground monitoring workflows, spatial comparison methods, reporting discipline, data quality checks, escalation logic and capability transfer needs.",
  ],
] as const;

export function UndergroundMiningPage() {
  return (
    <main className="tsf-page ug-page">
      <UndergroundHero />
      <UndergroundContext />
      <UndergroundReviewMatrix />
      <UndergroundReviewPathway />
      <UndergroundEvidence />
      <UndergroundQuestions />
      <UndergroundOutcomes />
      <UndergroundFAQCTA />
    </main>
  );
}

function SectionHeader({ eyebrow, title, copy, id }: { eyebrow: string; title: string; copy?: string; id: string }) {
  return (
    <div className="tsf-section-header">
      <p className="rm-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function UndergroundHero() {
  return (
    <InternalHero
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Applications", href: "/applications" }, { label: "Underground Mining" }]}
      title="Underground Mining"
      subtitle="Monitoring support where context, access and spatial change matter."
      intro="DTG helps underground mining teams review deformation evidence, convergence behaviour, SLAM LiDAR outputs, spatial change, inspection records and reporting information."
      titleId="underground-title"
      variant="environment"
    />
  );
}

function UndergroundContext() {
  return (
    <section className="tsf-section tsf-section-light" aria-labelledby="underground-context-title">
      <div className="tsf-container tsf-editorial-split">
        <div>
          <p className="rm-eyebrow">Underground context</p>
          <h2 id="underground-context-title">Underground monitoring depends on context, access and spatial change.</h2>
          <strong>Underground change is not always obvious until records are compared carefully.</strong>
        </div>
        <div>
          <p>
            Underground mining environments require monitoring review that considers excavation geometry, ground support,
            mining sequence, access limitations, inspection findings and changes between survey or scan periods.
          </p>
          <p>
            Movement may be localised, progressive, structurally controlled or visible only when spatial records are
            compared over time.
          </p>
          <p>
            For underground environments, the key question is not only whether deformation is present. The more important
            question is where the change is occurring, whether it is meaningful, how confident the evidence is and whether
            the record supports further technical review.
          </p>
          <div className="tsf-editorial-rows">
            {contextRows.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function UndergroundReviewMatrix() {
  return (
    <section id="underground-review-areas" className="tsf-section tsf-section-mist" aria-labelledby="underground-review-title">
      <div className="tsf-container">
        <SectionHeader
          id="underground-review-title"
          eyebrow="Review areas"
          title="What needs careful review in underground monitoring."
          copy="Underground monitoring requires careful review of convergence behaviour, spatial change, scan quality, ground support context, excavation history and reporting traceability."
        />
        <div className="tsf-matrix" role="table" aria-label="Underground monitoring review areas">
          <div className="tsf-matrix-head" role="row">
            <span role="columnheader">Review area</span>
            <span role="columnheader">Why it matters</span>
            <span role="columnheader">DTG support</span>
          </div>
          {reviewRows.map((row) => (
            <div className="tsf-matrix-row" role="row" key={row.area}>
              <strong role="cell">{row.area}</strong>
              <p role="cell">{row.matters}</p>
              <p role="cell">{row.support}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UndergroundReviewPathway() {
  return (
    <section className="tsf-section tsf-section-dark" aria-labelledby="underground-pathway-title">
      <div className="tsf-container">
        <SectionHeader
          id="underground-pathway-title"
          eyebrow="Review pathway"
          title="From spatial evidence to technical review."
          copy="DTG helps underground teams move from scan outputs, inspection records and monitoring observations to clearer technical interpretation. The review process should clarify what changed, where it changed and how reliable the evidence is."
        />
        <ol className="tsf-pathway" aria-label="Underground monitoring review pathway">
          {pathwayStages.map(([title, copy, label], index) => (
            <li className={label === "INTERPRET" ? "is-interpret" : ""} key={title}>
              <span>{label}</span>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
        <p className="tsf-pathway-statement">
          The value is not only capturing the excavation. The value is understanding what changed, where it changed and
          how reliable the evidence is.
        </p>
      </div>
    </section>
  );
}

function UndergroundEvidence() {
  return (
    <section className="tsf-section tsf-section-light" aria-labelledby="underground-evidence-title">
      <div className="tsf-container">
        <SectionHeader
          id="underground-evidence-title"
          eyebrow="Monitoring evidence"
          title="Underground monitoring often depends on spatial evidence and site context."
          copy="Underground monitoring may include SLAM LiDAR, laser scanning, convergence measurements, extensometers, prisms, inspections, ground support records, excavation history, geological mapping and operational records."
        />
        <p className="tsf-lead">
          Each source can provide useful evidence, but each also has limitations. DTG helps review available monitoring
          information in context so teams can understand where deformation evidence is clear, where uncertainty remains
          and what the data can reasonably support.
        </p>
        <div className="tsf-evidence-grid">
          {evidenceGroups.map((group, index) => (
            <article key={group.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
              <p>{group.copy}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UndergroundQuestions() {
  return (
    <section className="tsf-section tsf-section-mist" aria-labelledby="underground-questions-title">
      <div className="tsf-container">
        <SectionHeader
          id="underground-questions-title"
          eyebrow="Client questions"
          title="Questions underground teams often need to answer."
          copy="Underground monitoring support becomes valuable when it helps teams answer practical questions about deformation, convergence, spatial change, inspection context and confidence in the evidence."
        />
        <div className="tsf-question-rows">
          {clientQuestions.map((question, index) => (
            <article key={question}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{question}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UndergroundOutcomes() {
  return (
    <section className="tsf-section tsf-section-dark" aria-labelledby="underground-outcomes-title">
      <div className="tsf-container tsf-outcomes-layout">
        <div>
          <p className="rm-eyebrow">Outcomes</p>
          <h2 id="underground-outcomes-title">What underground teams gain from DTG support.</h2>
        </div>
        <div className="tsf-outcome-rows">
          {outcomes.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UndergroundFAQCTA() {
  const [open, setOpen] = useState("faq-0");

  return (
    <section className="tsf-faq-cta-section ug-faq-cta-section" aria-labelledby="underground-faq-title">
      <div className="tsf-section tsf-section-light rb-faq-section">
        <div className="tsf-container rb-faq-layout">
          <p className="rm-eyebrow">FAQ</p>
          <h2 id="underground-faq-title">Underground Mining, explained clearly.</h2>
          <div className="rm-faq-list rb-faq-list">
            {faqs.map(([question, answer], index) => {
              const id = `underground-faq-${index}`;
              const isOpen = open === `faq-${index}`;
              return (
                <article className="rm-faq-item rb-faq-item" key={question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? "" : `faq-${index}`)}
                  >
                    <span>{question}</span>
                    <ChevronDown aria-hidden="true" size={18} />
                  </button>
                  <div id={id} hidden={!isOpen}>
                    <p>{answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <div className="tsf-section tsf-section-dark rb-final-cta-section" aria-labelledby="underground-cta-title">
        <div className="tsf-container">
          <div className="rm-cta-panel rb-cta-panel tsf-cta-panel">
            <div>
              <p className="rm-eyebrow">Underground monitoring support</p>
              <h2 id="underground-cta-title">Need clearer review of underground deformation evidence?</h2>
              <p>
                DTG can help review convergence behaviour, SLAM LiDAR outputs, spatial change, inspection context and
                reporting records so underground monitoring information becomes clearer, more traceable and more useful
                for technical decision-making.
              </p>
            </div>
            <div className="rm-actions">
              <Link href="/contact" className="rm-button rm-button-primary">
                Discuss underground monitoring support <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
              <Link href="/applications" className="rm-button rm-button-secondary">
                Back to Applications <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <p className="rb-related-services">
              Related applications: <Link href="/applications/open-pit-mining">Open Pit Mining</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/applications/tailings-storage-facilities">Tailings Storage Facilities</Link>{" "}
              <span aria-hidden="true">&middot;</span>{" "}
              <Link href="/applications/infrastructure-civil">Infrastructure & Civil</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
