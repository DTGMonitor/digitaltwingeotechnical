// 🔒 IP & CONFIDENTIALITY — DO NOT UNDO. This page describes DTG's own analytics, so the
// temptation to "add specifics" is exactly the risk. NEVER publish here:
//  - ALGORITHM NAMES (Random Forest, Isolation Forest, Savitzky-Golay, Theil-Sen) — competitive IP.
//  - TOOL NAMES (PrismWatch, InSAR PS Analysis System) — competitive IP. The tools are described
//    anonymously on purpose ("a tool that turns an unreadable feed into an at-a-glance trend").
//  - THE PAPER (Tailings & Mine Waste) — accepted / IN PRESS, NOT published. You cannot cite what a
//    reader cannot read. FOLLOW-UP: add it the moment it publishes — it is the strongest proof DTG
//    will have.
//  - DTG Focus(TM) — deliberately off this page entirely (user's call).
//  - THE APPLICATIONS NUMBERS (50,000 alarms / 500 TARP / 1,000km / 99% / 3 sites) — they belong to
//    Applications. This page CROSS-LINKS to them and never repeats them. Point, don't repeat.
// The "Why don't you name the methods you use?" FAQ is the deliberate answer to the gap this
// creates: someone technical will ask, and silence would read as evasion.
import type { Metadata } from "next";
import { Zap, Clock, BellOff, Users } from "lucide-react";
import { ServicePage, type ServiceContent } from "@/components/sections";

export const metadata: Metadata = {
  title: "Data Analytics & Automation | Digital Twin Geotechnical",
  description:
    "From data to decision, faster — analytics and automation for geotechnical monitoring that cut through the noise and surface what matters.",
};

const content: ServiceContent = {
  slug: "data-analytics-automation",
  name: "Data analytics",
  lead: "From data to decision, faster — cutting through the noise and surfacing what matters, so your people spend their time on judgement instead of manual processing.",
  ctas: [
    { label: "Talk to DTG", href: "/contact", primary: true },
    { label: "What we automate", href: "#data-analytics-automation-included" },
  ],
  problem: {
    eyebrow: "The idea",
    title: "Imagine monitoring where the routine runs itself.",
    intro:
      "Noise cleaned automatically. Alarms that tune themselves. The important signal surfaced the moment it appears — so your people spend their time on judgement, not manual processing.",
    // The hedge is resolved. This replaced "That's the monitoring DTG is building toward, and
    // delivering today", which faced both ways and committed to neither. DTG's own tools run daily
    // on live operations, so the honest claim is forward-facing and singular. Do not re-hedge it.
    emphasis: "We deliver this today, and we're building it further.",
    solutions: [{ label: "Solutions 02 — data, but not decisions", href: "/solutions#overstretched-teams" }],
  },
  // THE POINT OF THIS PAGE. It is the page every cross-link on the site promises, and it had zero
  // proof. This section is the proof — all of it true, none of it revealing anything.
  proof: {
    eyebrow: "Why DTG can do this",
    title: "Geotechnical engineers and AI engineers, in one team.",
    intro:
      "Most monitoring firms have one or the other. DTG has both — working the same problems, in the same room. That's why our analytics are built in-house rather than bought in, or wrapped around someone else's black box.",
    items: [
      {
        title: "The team",
        body: "Geotechnical engineers who know what the ground is doing, and AI engineers who can build the tools to see it. The combination is rare, and it's the reason any of this is possible.",
      },
      {
        title: "Built, not bought",
        body: "The tools below aren't a roadmap. We've built them, and we run them every day on live operations — that's where they were proven, and where they keep improving.",
      },
      {
        title: "Our methods are our own",
        body: "We develop our own analytics, and we don't publish them. That's deliberate — it's what you're getting that you can't get elsewhere, and we'd rather it stayed that way.",
      },
    ],
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
          // "Built and running", not "e.g." — same anonymity, opposite meaning. The tool is real
          // and unnamed (see the IP note at the top); it is NOT a hypothetical example.
          "Built and running: a tool that turns an unreadable feed into an at-a-glance trend",
        ],
      },
      {
        title: "Intelligent alarm & TARP management",
        desc: "Stop drowning in alarms.",
        points: [
          "Track alarm performance automatically across every sensor",
          "Cut false triggers and surface the ones that matter",
          "Derive the right TARP thresholds from your actual data",
          "Built and running: a system that tells you whether your alarms are set right",
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
  crossLinks: [
    // CLOSES THE LINK LOOP. Every Applications page and every Solutions situation points INTO this
    // page and previously died here. This points back at the evidence. The operational numbers stay
    // on Applications — point, never repeat (see the IP note at the top).
    {
      title: "See the analytics at work",
      body: "These aren't tools waiting for a client. They run every day across live mining operations — reviewing the data, filtering the alarms, surfacing the movement that matters. The record of what that's caught sits with the environments themselves.",
      linkLabel: "Where we work",
      href: "/applications",
    },
    {
      title: "People make the calls — always",
      body: "Automation handles the repetitive work; qualified engineers keep ownership of interpretation and decisions. It's engineering judgement supported by advanced analytics, never replaced by it. Analytics runs on consolidated data — see Technology integration.",
      linkLabel: "Technology integration",
      href: "/services/technology-integration",
    },
  ],
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
      { icon: <Zap size={17} />, title: "Less manual work", body: "Repetitive processing handled automatically." },
      { icon: <Clock size={17} />, title: "Faster decisions", body: "Clear signals surfaced without waiting on manual review." },
      { icon: <BellOff size={17} />, title: "Fewer false alarms", body: "Alarms and thresholds tuned from your real data." },
      { icon: <Users size={17} />, title: "People on the judgement", body: "Your engineers freed for the calls that need them." },
    ],
  },
  faqs: [
    {
      question: 'Is this "AI" making the decisions?',
      answer:
        "No. Advanced analytics and automation handle repeatable processing, flagging and prioritisation — but interpretation and decisions stay with qualified engineers. It's engineering judgement supported by analytics, not replaced by it.",
    },
    // The deliberate answer to the gap the IP position creates. Someone technical WILL ask why no
    // methods are named; having no answer reads as evasion, so this turns the gap into a position.
    // Do not soften it, and do not answer it by naming anything.
    {
      question: "Why don't you name the methods you use?",
      answer:
        "Because they're ours. We develop our own analytics rather than reselling someone else's, and we don't publish the detail — that's the edge you're engaging us for. We're happy to walk through what a method does, and what it's been proven on, with a client under agreement.",
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
