import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/sections";

export const metadata: Metadata = {
  title: "Data Analytics & Automation | Digital Twin Geotechnical",
  description:
    "From data to decision, faster — analytics and automation for geotechnical monitoring that cut through the noise and surface what matters.",
};

const content: ServiceContent = {
  slug: "data-analytics-automation",
  name: "Data analytics.",
  lead: "From data to decision, faster — DTG brings analytics and automation to geotechnical monitoring, cutting through the noise and surfacing what matters so you reach clear, confident decisions sooner.",
  ctas: [
    { label: "Talk to DTG", href: "/contact", primary: true },
    { label: "What we automate", href: "#data-analytics-automation-included" },
  ],
  problem: {
    eyebrow: "The idea",
    title: "Imagine monitoring where the routine runs itself.",
    intro:
      "Noise cleaned automatically, alarms that tune themselves, the important signal surfaced the moment it appears — so your people spend their time on judgement, not manual processing. That's the monitoring DTG is building toward, and delivering today.",
    solutions: [{ label: "Solutions 02 — data, but not decisions", href: "/solutions#overstretched-teams" }],
  },
  whatsIncluded: {
    eyebrow: "What we automate",
    title: "The repetitive work, handled — so people are free for the decisions.",
    intro:
      "Some of these we've already built; others we build with you. The idea is constant: make monitoring simpler, faster and less manual.",
    groups: [
      {
        title: "Automated data cleaning & filtering",
        desc: "Your noisy data, made readable.",
        points: [
          "Automatic removal of noise, gaps, drift and outliers",
          "Messy multi-sensor feeds turned into clear, readable signal",
          "Clean data ready to act on — no manual pre-processing",
          "e.g. a tool that turns an unreadable feed into an at-a-glance trend.",
        ],
      },
      {
        title: "Intelligent alarm & TARP management",
        desc: "Stop drowning in alarms.",
        points: [
          "Track alarm performance automatically across every sensor",
          "Cut false triggers and surface the ones that matter",
          "Derive the right TARP thresholds from your actual data",
          "e.g. a system that tells you whether your alarms are set right.",
        ],
      },
      {
        title: "Automated detection & prioritisation",
        desc: "The system flags what matters, before a person has to.",
        points: [
          "Continuous automated analysis across all sensors",
          "Developing movement surfaced early, not after the fact",
          "What needs attention is prioritised for the engineer",
          "Decisions no longer wait on someone noticing manually",
        ],
      },
      {
        title: "Custom analytics & tooling",
        desc: "Built for your problem, by people who can build it.",
        points: [
          "Where off-the-shelf doesn't fit, we build what you need",
          "Analytics and models tailored to your ground and sensors",
          "Backed by combined geotechnical and AI-engineering capability",
          "Cutting-edge methods, applied to real monitoring problems",
        ],
      },
    ],
  },
  crossLink: {
    title: "People make the calls — always",
    body: "Automation handles the repetitive work; qualified engineers keep ownership of interpretation and decisions. It's engineering judgement supported by advanced analytics, never replaced by it. Analytics runs on consolidated data — see Technology integration.",
    linkLabel: "Technology integration",
    href: "/services/technology-integration",
  },
  delivery: {
    eyebrow: "How it works",
    title: "Understand the problem, then automate it.",
    steps: [
      { title: "Understand", body: "We learn your monitoring, your data and the manual pain." },
      { title: "Build or apply", body: "Apply proven tools, or build what your problem needs." },
      { title: "Automate", body: "The repetitive work runs itself, consistently." },
      { title: "Keep people deciding", body: "Engineers act on clear signals, not raw noise." },
    ],
  },
  outcomes: {
    eyebrow: "What you get",
    title: "What automation gives you.",
    items: [
      { title: "Less manual work", body: "Repetitive processing handled automatically." },
      { title: "Faster decisions", body: "Clear signals surfaced without waiting on manual review." },
      { title: "Fewer false alarms", body: "Alarms and thresholds tuned from your real data." },
      { title: "People on the judgement", body: "Your engineers freed for the calls that need them." },
    ],
  },
  faqs: [
    {
      question: 'Is this "AI" making the decisions?',
      answer:
        "No. Advanced analytics and automation handle repeatable processing, flagging and prioritisation — but interpretation and decisions stay with qualified engineers. It's engineering judgement supported by analytics, not replaced by it.",
    },
    {
      question: "How is this different from Technology integration?",
      answer:
        "Integration gets all your data into one governed place; analytics is the interpretation on top — quality analysis, trends and insight. Integration is the foundation; analytics is what you learn from it.",
    },
    {
      question: "Do you work with our existing data?",
      answer:
        "Yes. We're technology-agnostic and analyse data from your existing sensors and platforms across vendors — we don't require a particular system to work from.",
    },
    {
      question: "Does this replace our geotechnical engineer?",
      answer:
        "No. Analytics does the heavy lifting on processing and pattern-finding so your engineer can focus on interpretation and decisions. It strengthens their judgement rather than substituting for it.",
    },
    {
      question: "Can analytics be a one-off, or is it ongoing?",
      answer:
        "Both. We can run a one-off analysis on a specific dataset or question, or provide ongoing automated processing and interpretation as part of continuous monitoring.",
    },
  ],
  cta: {
    eyebrow: "Get started",
    title: "What in your monitoring should be automated?",
    body: "Tell us where the manual work piles up — we'll show you what can be automated.",
    actionLabel: "Talk to DTG",
    actionHref: "/contact",
  },
};

export default function Page() {
  return <ServicePage content={content} />;
}
