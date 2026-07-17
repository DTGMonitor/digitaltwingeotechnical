import type { Metadata } from "next";
import { Clock, Eye, FileCheck, Users } from "lucide-react";
import { ServicePage, type ServiceContent } from "@/components/sections";

export const metadata: Metadata = {
  title: "Remote Monitoring | Digital Twin Geotechnical",
  description:
    "We become your monitoring team — continuous, independent review of your geotechnical data and alarms, so nothing critical goes unwatched.",
};

const content: ServiceContent = {
  slug: "remote-monitoring",
  name: "Remote monitoring",
  lead: "We become your monitoring team — continuous, independent review of your geotechnical data and alarms, so nothing critical goes unwatched.",
  ctas: [
    { label: "Talk to DTG", href: "/contact", primary: true },
    { label: "What's included", href: "#remote-monitoring-included" },
  ],
  problem: {
    eyebrow: "The problem it solves",
    title: "Sensors don't keep a site safe. Watching them does.",
    intro:
      "You've invested in monitoring technology, but coverage has gaps — nights, weekends, alarm fatigue — and precursor movement can pass unseen. Remote monitoring puts competent eyes on your data, continuously.",
    solutions: [{ label: "Solutions 01 — no one to watch the sensors", href: "/solutions#asset-owners" }],
  },
  whatsIncluded: {
    eyebrow: "What's included",
    title: "Everything a competent monitoring team does — as a service.",
    intro:
      "Remote monitoring follows the real review workflow — trust the data, watch the movement, validate the alarms, escalate properly.",
    groups: [
      {
        title: "Data quality & sensor performance review",
        desc: "Trust the data before interpreting it.",
        points: [
          "Sensor health and uptime checks",
          "Data gaps, drift and anomalies flagged",
          "Faulty or degraded sensors identified",
          "Data quality-assured before interpretation",
        ],
      },
      {
        title: "Monitoring & movement review",
        desc: "Competent eyes on what the ground is actually doing.",
        points: [
          "Continuous review across radar, prisms, InSAR, piezometers, extensometers",
          "Cross-sensor correlation to catch precursors",
          "Trend and rate-of-movement tracking",
          "Out-of-hours cover — nights, weekends, shift changes",
        ],
      },
      {
        title: "Alarm review",
        desc: "Tell the real signals from the noise.",
        points: [
          "Review and validation of triggered alarms",
          "False-alarm filtering to cut alarm fatigue",
          "Real precursors distinguished from noise",
          "Threshold checks against monitoring behaviour",
        ],
      },
      {
        title: "TARP & escalation",
        desc: "The right people told the right thing at the right time.",
        points: [
          "TARP-aligned trigger levels and response pathways",
          "Structured escalation when thresholds are breached",
          "Documented notification — who was told, and when",
          "Traceable record of the response",
        ],
      },
    ],
  },
  crossLinks: [
    {
      title: "Reporting is included",
      body: "Routine weekly and monthly monitoring reports come as part of the watch. For standalone technical reporting and post-event failure back-analysis, see our dedicated service.",
      linkLabel: "Reporting & back-analysis",
      href: "/services/reporting-back-analysis",
    },
  ],
  delivery: {
    eyebrow: "How it's delivered",
    title: "Set up once, watched continuously.",
    steps: [
      { title: "Onboard", body: "We map your sensors, thresholds and escalation contacts." },
      { title: "Watch", body: "Continuous independent review of data and alarms." },
      { title: "Escalate", body: "Structured, documented response when it's warranted." },
      { title: "Report & improve", body: "Routine reporting and back-analysis that sharpen the system." },
    ],
  },
  outcomes: {
    eyebrow: "What you get",
    title: "What remote monitoring gives you.",
    items: [
      { icon: <Clock size={17} />, title: "Continuous coverage", body: "Competent eyes on your site, including out of hours." },
      { icon: <Eye size={17} />, title: "Fewer missed events", body: "Correlated review catches precursors single sensors miss." },
      { icon: <FileCheck size={17} />, title: "Defensible records", body: "Every review, alarm and decision is traceable." },
      { icon: <Users size={17} />, title: "Your people freed", body: "Your engineers focus on engineering, not the watch." },
    ],
  },
  faqs: [
    {
      question: "Do you provide 24/7 coverage?",
      answer:
        "Coverage is set to your risk — from business-hours review through to continuous out-of-hours watch on critical assets. We agree the schedule and escalation pathway during onboarding.",
    },
    {
      question: "Does this replace our geotechnical engineer?",
      answer:
        "No. We're the continuous watch and review layer; your engineer keeps ownership of the ground model and the decisions. Analytics and monitoring support their judgement — they don't replace it.",
    },
    {
      question: "Which monitoring systems do you work with?",
      answer:
        "We're technology-agnostic — radar, prisms, InSAR, piezometers, extensometers and more, across vendors. We review whatever you already have rather than requiring a particular platform.",
    },
    {
      question: "How do you handle escalation?",
      answer:
        "Against agreed thresholds and TARP-aligned pathways defined with you at onboarding, with documented notification and a traceable record of who was informed and when.",
    },
    {
      question: "Can we start small, or on a single critical asset?",
      answer:
        "Yes. Many engagements begin with one critical slope, dam or structure, then scale as trust builds. We scope the watch to your risk and budget rather than requiring an all-or-nothing commitment.",
    },
  ],
  cta: {
    eyebrow: "Get started",
    title: "Put competent eyes on your monitoring.",
    body: "Tell us what you're monitoring and where the gaps are — we'll scope the watch.",
    actionLabel: "Talk to DTG",
    actionHref: "/contact",
  },
};

export default function Page() {
  return <ServicePage content={content} />;
}
