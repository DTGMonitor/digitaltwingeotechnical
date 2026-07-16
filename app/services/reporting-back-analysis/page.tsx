import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/sections";

export const metadata: Metadata = {
  title: "Reporting & Back-Analysis | Digital Twin Geotechnical",
  description:
    "Clear technical reporting and rigorous post-event back-analysis — so your monitoring produces records and answers you can defend.",
};

const content: ServiceContent = {
  slug: "reporting-back-analysis",
  name: "Reporting & back-analysis",
  lead: "Clear technical reporting, and rigorous post-event back-analysis — so your monitoring produces records and answers you can defend.",
  ctas: [
    { label: "Talk to DTG", href: "/contact", primary: true },
    { label: "What's included", href: "#reporting-back-analysis-included" },
  ],
  problem: {
    eyebrow: "The problem it solves",
    title: "Data isn't a decision until it's reported and understood.",
    intro:
      "Monitoring generates volumes of data, but decisions need clear reporting — and when something moves or fails, you need to know why. DTG turns raw monitoring into defensible reports and rigorous back-analysis.",
    solutions: [
      { label: "Solutions 02 — data, but not decisions", href: "/solutions#overstretched-teams" },
      { label: "Solutions 05 — a second opinion", href: "/solutions#assurance" },
    ],
  },
  whatsIncluded: {
    eyebrow: "What's included",
    title: "From routine reporting to forensic back-analysis.",
    intro: "Two complementary strands — the ongoing record, and the deep look when something happens.",
    groups: [
      {
        title: "Technical reporting",
        desc: "The record, produced to a consistent standard.",
        points: [
          "Weekly, monthly and periodic monitoring reports",
          "Trend, rate and threshold summaries",
          "One combined view across all sensor types",
          "Reports structured to defend a decision or satisfy a regulator",
        ],
      },
      {
        title: "Event & failure back-analysis",
        desc: "The rigorous look when something moves or fails.",
        points: [
          "Post-event and post-failure investigation",
          "Reconstruction of what the data showed, and when",
          "Root-cause and precursor analysis",
          "Findings you can act on and stand behind",
        ],
      },
      {
        title: "Alarm & trigger back-analysis",
        desc: "Understand why the alarms behaved as they did.",
        points: [
          "Review of alarm and trigger performance over time",
          "Analysis of false triggers and missed events",
          "Threshold and TARP-level recommendations",
          "Evidence to refine future response",
        ],
      },
      {
        title: "Interpretation & recommendations",
        desc: "Reporting that ends in a clear technical position.",
        points: [
          "Independent interpretation of what the data means",
          "Stated assumptions, limitations and uncertainty",
          "Actionable recommendations, traceable to evidence",
          "A clear technical trail from observation to conclusion",
        ],
      },
    ],
  },
  crossLink: {
    title: "Already have us monitoring?",
    body: "Routine reporting comes as part of Remote monitoring. This service adds standalone technical reporting and the deeper forensic back-analysis — commissioned on its own, or on top of the watch.",
    linkLabel: "Remote monitoring",
    href: "/services/remote-monitoring",
  },
  delivery: {
    eyebrow: "How it's delivered",
    title: "Structured, evidence-first, defensible.",
    steps: [
      { title: "Assemble", body: "We gather the monitoring data, records and context." },
      { title: "Analyse", body: "Quality-check, reconstruct and interpret the evidence." },
      { title: "Report", body: "A clear technical position with stated assumptions." },
      { title: "Recommend", body: "Actionable findings, traceable to the evidence." },
    ],
  },
  outcomes: {
    eyebrow: "What you get",
    title: "What reporting & back-analysis gives you.",
    items: [
      { title: "A defensible record", body: "Consistent reporting that stands up to scrutiny." },
      { title: "Answers after events", body: "Rigorous back-analysis of what happened and why." },
      { title: "Better future response", body: "Findings feed back into thresholds and TARPs." },
      { title: "Traceable conclusions", body: "Every recommendation tied to the evidence behind it." },
    ],
  },
  faqs: [
    {
      question: "Can we commission this without a monitoring subscription?",
      answer:
        "Yes. Reporting and back-analysis can be a standalone engagement — for example a post-event investigation on data you already hold — or an add-on to Remote monitoring. It doesn't require an ongoing watch.",
    },
    {
      question: "What's the difference from the reporting in Remote monitoring?",
      answer:
        "Remote monitoring includes routine weekly/monthly reports as part of the watch. This service adds standalone technical reporting and the deeper forensic back-analysis — the rigorous investigation when something moves, fails, or needs to be defended.",
    },
    {
      question: "Do you back-analyse events on someone else's monitoring data?",
      answer:
        "Yes. We're technology-agnostic and can work from your existing records across vendors — we reconstruct what the data showed and when, independently of who supplied the sensors.",
    },
    {
      question: "Are the reports suitable for regulators or auditors?",
      answer:
        "Reports are structured to be defensible — with stated assumptions, limitations and a clear evidence trail — so they hold up in technical review, audit or regulatory contexts.",
    },
    {
      question: "How quickly can you turn around a post-event back-analysis?",
      answer:
        "It depends on the event and the data available, but we prioritise post-failure and incident investigations — we'll agree a timeframe up front and can mobilise quickly when a decision or response is time-critical.",
    },
  ],
  cta: {
    eyebrow: "Get started",
    title: "Need a report that holds up — or answers after an event?",
    body: "Tell us what happened, or what you need reported — we'll scope it.",
    actionLabel: "Talk to DTG",
    actionHref: "/contact",
  },
};

export default function Page() {
  return <ServicePage content={content} />;
}
