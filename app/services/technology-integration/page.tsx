// COMPLIANCE — DO NOT UNDO: independence here is ENGAGEMENT-SCOPED. DTG distributes hardware in
// Indonesia, so company-wide financial claims are indefensible. NEVER reintroduce "no commission",
// "no vendor lock-in", "no lock-in", "no product to sell" or "we sell no hardware". Describe the
// integration honestly instead ("no rip-and-replace", "technology-agnostic", "regardless of who
// supplied it") — those are technical claims about the work, not commercial claims about DTG.
//
// COMPLIANCE — DTG Focus(TM) framing (CLAUDE.md §3, amended 2026-07-18). The truth: Focus is DTG's
// own monitoring software, BUILT AND RUNNING and used in DTG's own delivery; individual capabilities
// CAN be set up for a client on request; complete coverage across every source is still being
// completed. NEVER write "in development", "roadmap", "coming soon", "not yet available" or
// "preview" — and equally never promise complete integrated coverage today.
// The structural rule still holds and is why the Focus material lives in the cross-link and the FAQ:
// SHORT BULLETS CANNOT CARRY THIS NUANCE — they flatten it into either an availability claim or a
// not-available claim. Keep it where there is room to state the boundary properly. Integration
// delivers into the CLIENT'S OWN systems and does not depend on Focus — that part never changed.
//
// ⚠️ THIS COMMENT ASSERTED THE OPPOSITE UNTIL 2026-07-18: "IT IS IN ACTIVE DEVELOPMENT ... NOT yet
// available to clients". Correct when written (a50a125), contradicted by the §3 amendment the next
// day, and left standing — so it went on certifying the two violations in this very file.
import type { Metadata } from "next";
import { Layers, Plug, GitBranch, Play } from "lucide-react";
import { ServicePage, type ServiceContent } from "@/components/sections";

export const metadata: Metadata = {
  title: "Technology Integration | Digital Twin Geotechnical",
  description:
    "Connect multi-vendor monitoring into one governed view — your sensors, your systems, one consolidated and traceable source of truth.",
};

const content: ServiceContent = {
  slug: "technology-integration",
  name: "Technology integration",
  lead: "Connect multi-vendor monitoring into one governed view — your sensors, your systems, one consolidated and traceable source of truth.",
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
        desc: "Your sources, connected — whoever supplied them.",
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
  crossLinks: [
    {
      title: "Integration is the foundation, not the finish",
      body: "Consolidating the data is step one. Interpreting it — quality analysis, trends and automated processing — is Data analytics; watching it continuously is Remote monitoring. Integration delivers into your own systems — DTG Focus™ is the governed environment we use in our own delivery, and it isn't a prerequisite: integration works with the systems you already have.",
      linkLabel: "Data analytics",
      href: "/services/data-analytics-automation",
    },
  ],
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
      { icon: <Layers size={17} />, title: "One source of truth", body: "Your sensors in one consolidated, governed view." },
      { icon: <Plug size={17} />, title: "Works with what you have", body: "Technology-agnostic — your sources connected, whoever supplied them." },
      { icon: <GitBranch size={17} />, title: "Traceable data", body: "From source sensor through to combined picture." },
      { icon: <Play size={17} />, title: "Ready to act on", body: "Consolidated data set up for review and escalation." },
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
        "No. Integration is the work of connecting and governing your data sources, delivered into your own systems. DTG Focus™ is DTG's own monitoring software — built and running, and used in how we deliver; individual capabilities can be set up on request. Integration doesn't depend on it.",
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
    title: "Bring your sensors into one governed view.",
    body: "Tell us what systems you're running — we'll scope the integration.",
    actionLabel: "Talk to DTG",
    actionHref: "/contact",
  },
};

export default function Page() {
  return <ServicePage content={content} />;
}
