// COMPLIANCE — DO NOT UNDO: DTG Focus(TM) IS NOT A PRODUCT A CLIENT CAN BUY. The truth: it is in
// ACTIVE DEVELOPMENT, DTG uses parts of it in its OWN delivery today, and it is NOT yet available
// to clients. NEVER say it is "offered", "available", "delivered through", or that clients "can"
// have it. The reconciliation line is: we use it in our own delivery; it isn't yet available as a
// product.
// NB the "Is DTG Focus a standalone product?" FAQ still restates CLAUDE.md §3's categorical
// definition ("is a supporting, governed monitoring environment ... operational decision-support
// platform"). That wording is DOWNSTREAM of an unresolved conflict — the governing docs describe
// Focus as an existing product while it is still in development. Escalated for Peter; do not patch
// that FAQ piecemeal until the docs and reality are reconciled.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { renderTrademarkText } from "@/components/brand";
import {
  Surface,
  SectionHero,
  StatementBand,
  ValueGrid,
  ProcessSpine,
  FaqAccordion,
  ProfileCard,
  CTA,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "About | Digital Twin Geotechnical",
  description:
    "DTG is an independent geotechnical monitoring, analytics and decision-support company — how we work, our principles, vendor independence, technical assurance and leadership.",
};

const capabilities = [
  { title: "Independent monitoring review", body: "Live and scheduled review of monitoring data, alarms and TARP-based escalation." },
  { title: "Reporting & back-analysis", body: "Independent reports, event reviews and failure back-analysis." },
  { title: "Technology integration", body: "Vendor-independent review and integration across monitoring systems." },
  { title: "Data analytics & automation", body: "Cleansing, correlation, trend analysis and repeatable reporting." },
  { title: "Technical advisory", body: "Monitoring strategy, governance, escalation design and capability transfer." },
];

const spineNodes = [
  { label: "Inputs", body: "Radar, GNSS, prisms, InSAR, LiDAR, SLAM LiDAR, VWP, seismic and operational records." },
  { label: "Independent review", body: "Engineering judgement, vendor-independent validation, governance and traceability." },
  { label: "Governed monitoring outcomes", body: "Trusted outcomes, decision support, escalation confidence and defensible records." },
];

const isAffirm = [
  "An independent monitoring, analytics and decision-support company",
  "Requirement-first and technology-agnostic",
  "Accountable for monitoring outcomes across systems",
  "A partner to your geotechnical team",
];
// COMPLIANCE — DO NOT UNDO: independence claims are ENGAGEMENT-SCOPED, and that applies to
// IDENTITY framing too, not just commercial framing. "A monitoring hardware vendor" was CUT from
// this list: it is the same claim as "we sell no hardware", which is already prohibited — DTG
// distributes radar and GNSS in Indonesia, so it fails "does it survive discovery?" outright.
//
// ⚠️ THE TRAP THIS LIST SETS: a "what DTG is not" list reads as a DESCRIPTION, so the claims in it
// don't feel like claims. Two earlier concept sweeps missed this one because they searched for
// commercial wording ("no commission", "commercially neutral", "no product to sell", "no vendor
// lock-in", "no vendor bias") and this is framed as identity. The sweep concept is now: "what does
// DTG say it IS or ISN'T", not just "what does DTG say about its commercials".
// NEVER add here: hardware vendor / equipment supplier / distributor denials, or anything asserting
// DTG is "independent of" vendors, manufacturers or suppliers as a company-wide relationship.
// SAFE here: category statements with no commercial assertion, and claims about the WORK.
//
// WATCH ITEM (true today, has a shelf life — do not fix, do flag): "A software or SaaS product
// company" is accurate now, but DTG Focus is being built as a platform. Revisit when Focus ships.
//
// NB "Accountable for monitoring outcomes across systems" in the affirm list is CONFIRMED TRUE —
// DTG is contractually accountable. It is a real differentiator; do not soften it.
const isNegate = [
  "A software or SaaS product company",
  "A dashboard company — visualisation is one layer, not the value",
  "A replacement for your geotechnical team",
];

const principles: Array<[string, string]> = [
  ["Technical judgement, not just data", "Experienced review helps teams understand what the data means."],
  ["Validation before action", "Signals are checked for quality, reliability and operational context."],
  ["Context over isolated alarms", "Alerts are interpreted alongside related systems, events and observations."],
  ["Independent review that builds confidence", "Technology-agnostic assessment clarifies what the evidence supports."],
  ["Governance that supports escalation", "Traceable workflows help teams know what changed, who reviewed it and why."],
  ["Outcomes that stand up in the field", "Monitoring review is shaped around decisions that can be defended."],
];

const vendorLed = [
  "Technology-first",
  "Brand-specific workflow",
  "System-limited interpretation",
  "Performance claims without context",
  "Reporting shaped by platform capability",
];
const independentReview = [
  "Requirement-first",
  "Technology-agnostic",
  "Cross-system interpretation",
  "Evidence and context-led",
  "Decision-focused and traceable",
];

const assuranceChecks = [
  { title: "Is the data reliable enough?", body: "Review availability, continuity, noise, gaps and instrument behaviour before interpretation." },
  { title: "Do the sensors agree?", body: "Compare technologies and observations to make agreement, delay or contradiction visible." },
  { title: "Is interpretation defensible?", body: "Record evidence, assumptions, uncertainty, recommendations and review logic." },
  { title: "Can teams respond with confidence?", body: "Connect technical review to responsibilities, decision records and change control." },
];

const leaders = [
  {
    name: "Peter Saunders",
    role: "Founder / Director",
    src: "/images/peter-saunders-portrait.png",
    bio: "Peter brings extensive experience in geotechnical monitoring, operational implementation and monitoring service leadership — helping mining and infrastructure teams use monitoring systems as decision-support tools, not only instruments.",
    tags: ["Monitoring operations", "Technology implementation", "Monitoring governance", "Client advisory"],
  },
  {
    name: "Mark Burdett",
    role: "Founder / Director",
    src: "/images/mark-burdett-portrait.png",
    bio: "Mark brings senior mining and operational experience to DTG's leadership, with a focus on how geotechnical information supports decisions across complex mining environments.",
    tags: ["Mining leadership", "Operational risk", "Geotechnical strategy", "Governance"],
  },
];

const faqs = [
  {
    question: "Does independence mean DTG is anti-vendor?",
    answer:
      "No. Good monitoring depends on good vendors, good equipment and good implementation. Independence means assessing options objectively and keeping the monitoring requirement at the centre of the decision.",
  },
  {
    question: renderTrademarkText("Is DTG Focus™ a standalone product?"),
    answer: renderTrademarkText(
      "No. DTG Focus is a supporting, governed monitoring environment within DTG's service approach — an operational decision-support platform, not a standalone SaaS product or dashboard. It is introduced only where it materially improves the solution.",
    ),
  },
  {
    question: "Is technical assurance the same as data quality control?",
    answer:
      "No. Data quality control is one part of assurance. Technical assurance also considers configuration, alarm logic, multi-sensor correlation, interpretation, escalation, reporting and governance.",
  },
  {
    question: "Does DTG replace the client geotechnical team?",
    answer:
      "No. DTG supports client teams by providing independent monitoring review, technical interpretation, workflow support and decision confidence.",
  },
  {
    question: renderTrademarkText("Do we need DTG Focus to work with DTG?"),
    answer: renderTrademarkText(
      "No. DTG's review, analytics, governance and advisory work stands on its own. DTG Focus is in active development and not yet available as a product — we use parts of it in our own delivery today, but nothing about working with DTG depends on it.",
    ),
  },
  {
    question: "Does AI make the monitoring decisions?",
    answer:
      "No. DTG's position is engineering judgement supported by advanced analytics. AI and automation assist review and reporting; they never replace engineering judgement or autonomously identify failures.",
  },
];

function ContrastBlock({
  affirmTitle,
  affirm,
  negateTitle,
  negate,
}: {
  affirmTitle: string;
  affirm: string[];
  negateTitle: string;
  negate: string[];
}) {
  return (
    <div className="contrast-grid">
      <div className="contrast-col is-affirm">
        <h3>{affirmTitle}</h3>
        <ul>
          {affirm.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="contrast-col is-negate">
        <h3>{negateTitle}</h3>
        <ul>
          {negate.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main id="top">
      <SectionHero
        variant="dark"
        eyebrow="About DTG"
        title="Independent monitoring support."
        titleId="about-hero-title"
        lead="DTG is an independent geotechnical monitoring, analytics and decision-support company. We sit above individual sensors and vendor platforms — validating monitoring information, connecting evidence, governing escalation, and helping teams use monitoring outputs in operational and engineering decisions."
        actions={
          <>
            <Link href="/contact" className="kit-button kit-button--primary">
              Start a conversation <ArrowUpRight size={15} />
            </Link>
            <Link href="/services" className="kit-button">
              Explore services <ArrowUpRight size={15} />
            </Link>
          </>
        }
      />

      <ValueGrid
        surface="default"
        eyebrow="What we do"
        title="Capabilities that turn monitoring into trusted outcomes."
        titleId="what-we-do"
        items={capabilities}
      />

      <StatementBand
        surface="default"
        eyebrow="The monitoring gap"
        title="More data does not automatically create clearer decisions."
        titleId="the-gap"
        lead="Monitoring technology has advanced faster than the systems used to interpret, govern and act on it. The market has strong technology providers; the missing layer is independent responsibility for monitoring outcomes across mixed technologies, teams and workflows."
      />

      <ProcessSpine
        surface="band"
        eyebrow="How DTG works"
        title="Inputs, independent review, governed outcomes."
        titleId="how-dtg-works"
        nodes={spineNodes}
      />

      <Surface variant="default" aria-labelledby="what-dtg-is">
        <div className="section-kit-statement">
          <p className="eyebrow">Positioning</p>
          <h2 id="what-dtg-is" className="section-headline">
            What DTG is — and what it is not.
          </h2>
        </div>
        <ContrastBlock affirmTitle="DTG is" affirm={isAffirm} negateTitle="DTG is not" negate={isNegate} />
      </Surface>

      <Surface variant="default" aria-labelledby="purpose-principles">
        <div className="section-kit-statement">
          <p className="eyebrow">Purpose &amp; principles</p>
          <h2 id="purpose-principles" className="section-headline">
            The principles that protect decision quality.
          </h2>
        </div>
        <ol className="numbered-list">
          {principles.map(([title, body]) => (
            <li key={title}>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Surface>

      <Surface variant="default" aria-labelledby="vendor-independence">
        <div className="section-kit-statement">
          <p className="eyebrow">Vendor independence</p>
          <h2 id="vendor-independence" className="section-headline">
            Vendor-led assumptions vs independent DTG review.
          </h2>
          <p className="section-kit-lead">
            Independence does not mean anti-vendor. Strong monitoring depends on good technology and
            implementation — DTG keeps the monitoring requirement at the centre of the decision.
          </p>
        </div>
        <ContrastBlock
          affirmTitle="Independent DTG review"
          affirm={independentReview}
          negateTitle="Vendor-led assumptions"
          negate={vendorLed}
        />
      </Surface>

      <StatementBand
        surface="default"
        eyebrow="Technical assurance"
        title="Traceable review for defensible decisions."
        titleId="technical-assurance"
        lead="Technical assurance is not a single checklist completed at the end of a project. It is a structured way of asking whether monitoring information can be trusted, understood and defended."
      />
      <ValueGrid surface="default" compact items={assuranceChecks} />

      <Surface variant="default" aria-labelledby="leadership">
        <div className="section-kit-statement">
          <p className="eyebrow">Leadership</p>
          <h2 id="leadership" className="section-headline">
            Technical and mining leadership.
          </h2>
        </div>
        <div className="profile-grid">
          {leaders.map((leader) => (
            <ProfileCard
              key={leader.name}
              name={leader.name}
              role={leader.role}
              bio={leader.bio}
              tags={leader.tags}
              portrait={
                <Image
                  src={leader.src}
                  alt={`Portrait of ${leader.name}, ${leader.role} of DTG`}
                  width={480}
                  height={600}
                />
              }
            />
          ))}
        </div>
      </Surface>

      <FaqAccordion
        surface="default"
        eyebrow="FAQs"
        title="Clear answers, without positioning."
        titleId="faq"
        name="about-faq"
        items={faqs}
      />

      <CTA
        surface="band"
        eyebrow="Start a monitoring conversation"
        title="Talk to DTG about decision quality."
        titleId="about-cta"
        body="Tell us what you're monitoring, and where it's falling short. We'll be straight about what we'd bring."
        href="/contact"
        actionLabel="Contact DTG"
      />
    </main>
  );
}
