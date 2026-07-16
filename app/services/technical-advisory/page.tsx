// COMPLIANCE — DO NOT UNDO: independence here is ENGAGEMENT-SCOPED. DTG distributes hardware in
// Indonesia, so company-wide financial claims are indefensible. NEVER reintroduce "no commission",
// "no vendor lock-in", "no lock-in", "no product to sell" or "we sell no hardware". The promise is
// how DTG advises on YOUR site — driven by your risk and your data, not by a product.
// NB the "Recommends across the market, not one product line" matrix row is a SCOPE-OF-ADVICE claim
// (binary-true, no commercial claim) — it rests on the factual assumption that DTG advisory really
// does recommend across the market, including against its own distributed products. Pending Peter's
// confirmation; if that isn't true, CUT the row rather than reword it.
// NB the FAQ "Do you recommend specific vendors' products?" is DELIBERATELY silent on the
// distribution arm. That is a holding position, not an end state: disclosure is a leadership/legal
// call, and half-disclosing would raise the question without answering it. Do NOT add a neutrality
// claim here. If DTG establishes genuine advisory/distribution separation, this FAQ is where to say
// so — it becomes a credential rather than a risk. Escalated for Peter.
import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/sections";

export const metadata: Metadata = {
  title: "Technical Advisory | Digital Twin Geotechnical",
  description:
    "Independent expert guidance on the decisions that matter — from choosing monitoring technology to auditing what you already have.",
};

const content: ServiceContent = {
  slug: "technical-advisory",
  name: "Technical advisory.",
  lead: "Independent expert guidance on the decisions that matter — from choosing monitoring technology to auditing what you already have.",
  ctas: [
    { label: "Talk to DTG", href: "/contact", primary: true },
    { label: "What's included", href: "#technical-advisory-included" },
  ],
  problem: {
    eyebrow: "The problem it solves",
    title: "Big monitoring decisions deserve an independent expert.",
    intro:
      "Choosing technology, designing a monitoring approach, or confirming a critical call — these decisions carry real risk, and vendor advice is rarely neutral. DTG gives specialist, independent guidance aligned with your outcome, not a product.",
    solutions: [
      { label: "Solutions 04 — choosing technology", href: "/solutions#selecting-technology" },
      { label: "Solutions 05 — a second opinion", href: "/solutions#assurance" },
    ],
  },
  whatsIncluded: {
    eyebrow: "What's included",
    title: "Independent expertise, across the decisions that matter.",
    intro: "Engage us for a single decision, or as an ongoing independent advisor.",
    groups: [
      {
        title: "Monitoring strategy & review",
        desc: "The right monitoring approach for your risk.",
        points: [
          "Review or design of your monitoring strategy",
          "Risk-based scope and coverage",
          "Sensor placement and network design",
          "Alignment with TARP and governance",
        ],
      },
      {
        title: "Independent technology selection",
        desc: "Choose the right technology, objectively.",
        points: [
          "Technology-agnostic comparison of options",
          "Requirement-led recommendation",
          "On your site, driven by your data — not by a product",
          "Procurement and specification support",
        ],
      },
      {
        title: "Assurance & second opinion",
        desc: "Confirm the critical calls.",
        points: [
          "Independent audit of existing monitoring",
          "Review of interpretation and escalation",
          "A defensible second opinion",
          "Assurance on critical assets",
        ],
      },
      {
        title: "Expert support & due diligence",
        desc: "Specialist input when you need it.",
        points: [
          "Ad-hoc expert consultation",
          "Due diligence on monitoring systems",
          "Independent review for stakeholders",
          "Support through incidents and disputes",
        ],
      },
    ],
  },
  matrix: {
    eyebrow: "Why independent advisory",
    title: "Independent advice you can't get from a vendor.",
    columns: ["DTG advisory", "Vendor advice", "In-house only"],
    highlightColumn: 0,
    rows: [
      { label: "Starts from your requirement, not a product", cells: ["yes", "no", "yes"] },
      { label: "Technology-agnostic across vendors", cells: ["yes", "no", "partial"] },
      { label: "Recommends across the market, not one product line", cells: ["yes", "no", "yes"] },
      { label: "Specialist geotechnical monitoring depth", cells: ["yes", "partial", "partial"] },
      { label: "Independent of your own conclusions", cells: ["yes", "no", "no"] },
    ],
  },
  tabs: {
    eyebrow: "How advisory helps",
    title: "Advisory for the decision you're facing.",
    items: [
      {
        label: "Selecting technology",
        heading: "Selecting technology",
        intro: "You're investing in monitoring and need to choose well — without a vendor steering you.",
        points: [
          "We define what your risk actually requires, first",
          "Compare technologies objectively across vendors",
          "Recommend the right fit — driven by your risk, not a product",
          "Support the specification and procurement",
        ],
      },
      {
        label: "Reviewing an approach",
        heading: "Reviewing an approach",
        intro: "You have a monitoring setup and want to know it's fit for purpose.",
        points: [
          "Review scope, coverage and sensor placement",
          "Check alignment with your risk and TARP",
          "Identify blind spots and gaps",
          "Recommend practical improvements",
        ],
      },
      {
        label: "A second opinion",
        heading: "A second opinion",
        intro: "You have the calls covered internally, but want independent assurance on the critical ones.",
        points: [
          "Independent audit of monitoring and interpretation",
          "Review of escalation and decision-making",
          "A defensible, documented second opinion",
          "Assurance for boards, regulators or clients",
        ],
      },
      {
        label: "After an event",
        heading: "After an event",
        intro: "Something moved, failed or triggered — and you need expert input, fast.",
        points: [
          "Rapid independent review of what happened",
          "Expert interpretation of the monitoring evidence",
          "Input for stakeholders, insurers or disputes",
          "Recommendations to prevent recurrence",
        ],
      },
    ],
  },
  delivery: {
    eyebrow: "How it's delivered",
    title: "Understand, assess, advise, support.",
    steps: [
      { title: "Understand", body: "We learn your decision, risk and context." },
      { title: "Assess", body: "Review the evidence, options or existing setup." },
      { title: "Advise", body: "A clear, independent recommendation." },
      { title: "Support", body: "Help you act on it — and stand behind it." },
    ],
  },
  outcomes: {
    eyebrow: "What you get",
    title: "What technical advisory gives you.",
    items: [
      { title: "Confident decisions", body: "Backed by independent, specialist expertise." },
      { title: "No vendor bias", body: "Advice aligned to your outcome, not a product." },
      { title: "Independent assurance", body: "A defensible second view on critical calls." },
      { title: "Specialist depth", body: "Geotechnical monitoring expertise, on demand." },
    ],
  },
  faqs: [
    {
      question: "Is advisory a one-off, or ongoing?",
      answer:
        "Both. Many engagements are a single decision — a technology choice, an audit, a second opinion. But we can also act as your retained independent advisor over time.",
    },
    {
      question: "Do you recommend specific vendors' products?",
      answer:
        "We're technology-agnostic — we recommend across the market for your requirement, not from one product line. Where a specific technology fits best, we'll say so and explain why.",
    },
    {
      question: "Can you review monitoring another firm set up?",
      answer:
        "Yes. Independent review across vendors and providers is a core part of advisory — we assess whatever is in place, regardless of who supplied or configured it.",
    },
    {
      question: "Do you provide expert review for disputes or due diligence?",
      answer:
        "Yes. We provide independent expert review, due diligence on monitoring systems, and defensible input for stakeholders, insurers or dispute contexts.",
    },
    {
      question: "How is advisory different from your other services?",
      answer:
        "Advisory is guidance on decisions; the other services are ongoing delivery — the watch, the reporting, the analytics. Advisory often leads into them, but it can stand entirely on its own.",
    },
  ],
  cta: {
    eyebrow: "Get started",
    title: "Facing a monitoring decision?",
    body: "Tell us what you're deciding — we'll give you an independent read.",
    actionLabel: "Talk to DTG",
    actionHref: "/contact",
  },
};

export default function Page() {
  return <ServicePage content={content} />;
}
