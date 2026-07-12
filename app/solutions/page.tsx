import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { renderTrademarkText } from "@/components/brand";
import { SectionHero, Surface, CTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Solutions | Digital Twin Geotechnical",
  description:
    "How DTG helps — six common client situations, from asset owners without a monitoring team to teams needing an integrated platform.",
};

type Chip = { label: string; href: string };

type Situation = {
  slug: string;
  heading: string;
  subline: string;
  badge?: string;
  intro: string;
  wrong: string[];
  helps: string[];
  outcome: string;
  chips: Chip[];
};

const situations: Situation[] = [
  {
    slug: "asset-owners",
    heading: "Asset owners without a monitoring team",
    subline: "We have the sensors, but no one to watch them.",
    badge: "Most common",
    intro:
      "You've invested in monitoring technology — slope stability radar, prisms, InSAR, piezometers, extensometers. The hardware is capable. But monitoring only protects a site when competent people are actually watching, continuously, and know how to act.",
    wrong: [
      "No competent coverage on nights, weekends or shift changes — exactly when incidents happen.",
      "Alarms trigger but aren't reviewed in time, or real ones are lost to alarm fatigue.",
      "Movement that precedes a failure goes unseen because nothing is being correlated.",
      "No spare capacity to produce weekly and monthly reporting, or post-event back-analysis.",
      "Sensor placement is never reviewed, so blind spots persist.",
    ],
    helps: [
      "We become your monitoring team — continuous, competent review of your data and alarms, including out-of-hours.",
      "Structured escalation the moment thresholds are breached.",
      "Weekly and monthly reporting produced for you.",
      "Failure and alarm back-analysis after events.",
      "Review of sensor placement to close blind spots.",
    ],
    outcome:
      "Continuous, competent eyes on your site — fewer missed events, defensible records, and your people freed from the watch.",
    chips: [
      { label: "Remote monitoring", href: "/services/remote-monitoring" },
      { label: "Reporting & back-analysis", href: "/services/reporting-back-analysis" },
    ],
  },
  {
    slug: "overstretched-teams",
    heading: "Overstretched geotechnical teams",
    subline: "We have data, but it's not turning into decisions.",
    intro:
      "You have a geotechnical engineer, but the monitoring workload has outpaced them. The data exists; the capacity to turn it into governed, defensible decisions doesn't.",
    wrong: [
      "Alarms trigger constantly — real signals are lost in the noise.",
      "Failures and precursors are missed for lack of time to correlate.",
      "Each sensor type has its own separate report; nothing combines into one picture.",
      "No consistent basis for what to trust, or when to escalate.",
    ],
    helps: [
      "We structure, quality-test and correlate data across every sensor type into one governed view.",
      "We tune alarm thresholds to cut false triggers.",
      "We give your engineer defensible, combined interpretation instead of raw feeds.",
      "One overview, one method — repeatable and traceable.",
    ],
    outcome: "Fewer false alarms, earlier real detection, and one combined view your team can defend.",
    chips: [
      { label: "Data analytics", href: "/services/data-analytics-automation" },
      { label: "Technology integration", href: "/services/technology-integration" },
    ],
  },
  {
    slug: "operators-consultants",
    heading: "Operators & consultants running client sites",
    subline: "We run sites for clients, but have no geotech of our own.",
    intro:
      "You operate or manage sites on behalf of the asset owner — but you don't carry in-house geotechnical monitoring capability to stand behind the data you're accountable for.",
    wrong: [
      "You're accountable to your client for monitoring you can't independently interpret.",
      "No in-house geotech to review alarms, produce reports, or defend decisions.",
      "The reporting and traceability your contract requires needs a team you don't have.",
    ],
    helps: [
      "We provide the independent monitoring and review layer you place in front of your client.",
      "Delivered as your capability, or working alongside your team.",
      "Reporting and traceability built for contractual accountability.",
    ],
    outcome: "Credible geotechnical capability without hiring a team — something defensible to hand your client.",
    chips: [
      { label: "Remote monitoring", href: "/services/remote-monitoring" },
      { label: "Technical advisory", href: "/services/technical-advisory" },
    ],
  },
  {
    slug: "selecting-technology",
    heading: "Teams selecting monitoring technology",
    subline: "We're choosing monitoring technology and don't know what to pick.",
    intro:
      "You need to invest, but the market is full of vendors each selling their own system — and you want advice that starts from your requirement, not a product.",
    wrong: [
      "It's hard to compare monitoring technologies objectively.",
      "Real risk of buying the wrong system for the actual ground risk.",
      "Vendor advice is rarely neutral.",
    ],
    helps: [
      "Independent, technology-agnostic advice that starts from your risk and requirement.",
      "Objective comparison of options against what you actually need.",
      "A recommendation with no commission and no vendor lock-in.",
    ],
    outcome: "The right technology for your risk, chosen with confidence.",
    chips: [{ label: "Technical advisory", href: "/services/technical-advisory" }],
  },
  {
    slug: "assurance",
    heading: "Mature teams wanting assurance",
    subline: "We want an independent second opinion.",
    intro:
      "You already have the engineers, the systems and the process. But on critical assets, you want an outside expert to audit and confirm what you're seeing.",
    wrong: [
      "Internal review can miss what a fresh expert sees.",
      "Critical assets warrant independent assurance.",
      "High-stakes decisions are stronger with a defensible second opinion.",
    ],
    helps: [
      "Specialist third-party review of your monitoring, interpretation and escalation.",
      "An independent audit against good practice.",
      "A defensible second opinion on the calls that matter.",
    ],
    outcome: "Independent assurance on the assets where it matters most.",
    chips: [{ label: "Technical advisory", href: "/services/technical-advisory" }],
  },
  {
    slug: "integrated-platform",
    heading: "Teams needing an integrated platform",
    subline: "We need one integrated view of everything.",
    intro:
      "You have the people and the systems, but the work is scattered across tools. No single place brings every geotechnical sensor, report and decision together.",
    wrong: [
      "Separate tools for each sensor type.",
      "No single overview; traceability is manual.",
      "Decision records are scattered across systems.",
    ],
    helps: [
      "DTG Focus™ integrates monitoring review, traceability and decision records in one place.",
      "One governed environment, within DTG's wider service approach.",
      "A single overview across all your geotechnical sensors.",
    ],
    outcome: "One integrated, governed view — with every decision traceable.",
    chips: [{ label: "DTG Focus™", href: "/dtg-focus" }],
  },
];

export default function SolutionsPage() {
  return (
    <main id="top">
      <SectionHero
        variant="dark"
        eyebrow="Solutions"
        title="Start with your situation."
        titleId="solutions-hero-title"
        lead="How DTG helps, by the situation you're in — six common starting points, from asset owners without a monitoring team to teams needing one integrated view. Find yours below."
        actions={
          <Link href="/contact" className="kit-button kit-button--primary">
            Talk to DTG <ArrowUpRight size={15} />
          </Link>
        }
      />

      <Surface variant="default" aria-labelledby="solutions-index-title">
        <div className="section-kit-statement">
          <p className="eyebrow">Quick scan</p>
          <h2 id="solutions-index-title" className="section-headline">
            Six situations we help with.
          </h2>
        </div>
        <nav className="solutions-index" aria-label="Situations">
          {situations.map((s, i) => (
            <Link href={`#${s.slug}`} key={s.slug}>
              <span className="tnum">{String(i + 1).padStart(2, "0")}</span>
              <span>{renderTrademarkText(s.heading)}</span>
            </Link>
          ))}
        </nav>
      </Surface>

      {situations.map((s, i) => (
        <Surface key={s.slug} id={s.slug} variant={i % 2 === 1 ? "band" : "default"} aria-labelledby={`${s.slug}-title`}>
          <div className="situation">
            <div className="situation__head">
              <span className="situation__num tnum">{String(i + 1).padStart(2, "0")}</span>
              {s.badge ? <span className="situation__badge">{s.badge}</span> : null}
              <h2 id={`${s.slug}-title`} className="section-headline">
                {renderTrademarkText(s.heading)}
              </h2>
              <p className="situation__subline">&ldquo;{renderTrademarkText(s.subline)}&rdquo;</p>
            </div>

            <p className="section-kit-lead">{renderTrademarkText(s.intro)}</p>

            <div className="contrast-grid">
              <div className="contrast-col is-negate">
                <h3>What&rsquo;s going wrong</h3>
                <ul>
                  {s.wrong.map((item, j) => (
                    <li key={j}>{renderTrademarkText(item)}</li>
                  ))}
                </ul>
              </div>
              <div className="contrast-col is-affirm">
                <h3>How DTG helps</h3>
                <ul>
                  {s.helps.map((item, j) => (
                    <li key={j}>{renderTrademarkText(item)}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="situation__outcome">
              <strong>Outcome</strong>
              {renderTrademarkText(s.outcome)}
            </p>

            <div className="situation__chips" aria-label="Relevant services">
              {s.chips.map((chip) => (
                <Link href={chip.href} className="chip" key={chip.href + chip.label}>
                  {renderTrademarkText(chip.label)} <ArrowUpRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </Surface>
      ))}

      <CTA
        surface="band"
        eyebrow="Not sure which fits?"
        title="Tell us your situation and we'll point you to the right support."
        titleId="solutions-cta"
        actions={
          <Link href="/contact" className="kit-button kit-button--primary">
            Contact DTG <ArrowUpRight size={15} />
          </Link>
        }
      />
    </main>
  );
}
