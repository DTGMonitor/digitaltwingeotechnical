// COMPLIANCE — DO NOT UNDO: independence here is ENGAGEMENT-SCOPED. DTG distributes hardware in
// Indonesia, so company-wide financial claims are indefensible. NEVER reintroduce "no commission",
// "no vendor lock-in", "no lock-in", "no product to sell" or "we sell no hardware". Describe the
// integration honestly instead ("no rip-and-replace", "technology-agnostic", "regardless of who
// supplied it") — those are technical claims about the work, not commercial claims about DTG.
//
// COMPLIANCE — DTG Focus(TM) IS NOT A PRODUCT A CLIENT CAN BUY. The truth: it is in ACTIVE
// DEVELOPMENT, DTG uses parts of it in its OWN delivery today, and it is NOT yet available to
// clients. NEVER say it is "delivered through", "offered", "available", or that a client "can"
// integrate into it. Integration delivers into the CLIENT'S OWN systems and does not depend on
// Focus. Short bullets cannot carry this nuance — they flatten it into an availability claim — so
// keep the Focus truth in the cross-link and FAQ where there is room to state it properly.
import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/sections";

export const metadata: Metadata = {
  title: "Technology Integration | Digital Twin Geotechnical",
  description:
    "Connect multi-vendor monitoring into one governed view — every sensor, every system, one consolidated and traceable source of truth.",
};

const content: ServiceContent = {
  slug: "technology-integration",
  name: "Technology integration",
  lead: "Connect multi-vendor monitoring into one governed view — every sensor, every system, one consolidated and traceable source of truth.",
  ctas: [
    { label: "Talk to DTG", href: "/contact", primary: true },
    { label: "What's included", href: "#technology-integration-included" },
  ],
  problem: {
    eyebrow: "The problem it solves",
    title: "Every sensor in its own silo isn't a monitoring system.",
    intro:
      "Radar on one platform, piezometers on another, InSAR in a third — each with its own login, format and report. No one sees the whole picture. DTG integrates them, technology-agnostically, into one governed view.",
    solutions: [{ label: "Solutions 02 — data, but not decisions", href: "/solutions#overstretched-teams" }],
  },
  whatsIncluded: {
    eyebrow: "What's included",
    title: "One consolidated, governed monitoring picture.",
    intro: "We connect what you already have — no rip-and-replace, regardless of who supplied it.",
    groups: [
      {
        title: "Multi-vendor sensor integration",
        desc: "Every source, connected — whoever supplied it.",
        points: [
          "Radar, prisms, InSAR, piezometers, extensometers and more",
          "Technology-agnostic across vendors and platforms",
          "Connect existing hardware — no rip-and-replace",
          "New sensors added as your network grows",
        ],
      },
      {
        title: "Data consolidation & alignment",
        desc: "Different formats, one coherent dataset.",
        points: [
          "Normalise differing formats, units and timestamps",
          "Align data onto a common reference and timeline",
          "Resolve gaps and overlaps between systems",
          "One combined view across all sensor types",
        ],
      },
      {
        title: "Governed data flow",
        desc: "Consolidation you can trust and trace.",
        points: [
          "Controlled, auditable data pipelines",
          "Data quality checks built into the flow",
          "Traceability from source sensor to combined view",
          "Access and version control",
        ],
      },
      {
        title: "Single monitoring view",
        desc: "One place to see everything.",
        points: [
          "Consolidated overview across all monitoring",
          "Consistent alarms and thresholds across systems",
          "Ready for review, reporting and escalation",
          "Delivered into your existing systems and reporting",
        ],
      },
    ],
  },
  crossLink: {
    title: "Integration is the foundation, not the finish",
    body: "Consolidating the data is step one. Interpreting it — quality analysis, trends and automated processing — is Data analytics; watching it continuously is Remote monitoring. Integration delivers into your own systems — DTG Focus™, the governed environment we use in our own delivery, is still in development and not yet available as a product.",
    linkLabel: "Data analytics",
    href: "/services/data-analytics-automation",
  },
  delivery: {
    eyebrow: "How it's delivered",
    title: "Connect, align, govern, consolidate.",
    steps: [
      { title: "Audit", body: "We map your sensors, systems, formats and gaps." },
      { title: "Connect", body: "Integrate each source, whoever supplied it." },
      { title: "Align & govern", body: "Normalise, quality-check and make the flow traceable." },
      { title: "Consolidate", body: "One governed view, ready for review and reporting." },
    ],
  },
  outcomes: {
    eyebrow: "What you get",
    title: "What technology integration gives you.",
    items: [
      { title: "One source of truth", body: "Every sensor in one consolidated, governed view." },
      { title: "Works with what you have", body: "Technology-agnostic — every source connected, whoever supplied it." },
      { title: "Traceable data", body: "From source sensor through to combined picture." },
      { title: "Ready to act on", body: "Consolidated data set up for review and escalation." },
    ],
  },
  faqs: [
    {
      question: "Do we have to replace our existing sensors or platforms?",
      answer:
        "No. Integration connects what you already own. We're technology-agnostic and work across vendors — there's no rip-and-replace and no requirement to standardise on one supplier.",
    },
    {
      question: "Is this the same as DTG Focus™?",
      answer:
        "No. Integration is the work of connecting and governing your data sources, delivered into your own systems. DTG Focus™ is the governed environment we use in our own delivery — it's in active development and not yet available as a product you can buy. Integration doesn't depend on it.",
    },
    {
      question: "How is this different from Data analytics?",
      answer:
        "Integration gets all your data into one governed, consolidated place. Data analytics is the interpretation on top — quality analysis, trends and automated processing. Integration is the foundation the analytics runs on.",
    },
    {
      question: "Can you integrate a vendor's proprietary or closed system?",
      answer:
        "In most cases, yes — via the export, API or data feed available. Where a system is fully closed, we'll tell you honestly what can and can't be connected and find the most practical route.",
    },
    {
      question: "Who owns the integrated data?",
      answer:
        "You do. Integration consolidates your data under your control, with access and version governance — DTG operates the flow, but the data and the source of truth remain yours.",
    },
  ],
  cta: {
    eyebrow: "Get started",
    title: "Bring every sensor into one governed view.",
    body: "Tell us what systems you're running — we'll scope the integration.",
    actionLabel: "Talk to DTG",
    actionHref: "/contact",
  },
};

export default function Page() {
  return <ServicePage content={content} />;
}
