# Content-discipline pass — review sheet

**Branch:** `fix/content-discipline` · **Status:** held for owner row-level approval — **not merged, not pushed.**
**Build + lint:** green. Every change below is applied on the branch and verified in the rendered HTML.

This sheet is the complete record for review: the full **A2/A3 before/after table** and the full
**Data Analytics cut list**. Approve rows individually; for any row you reject as too generic, supply
a bounded third option and it will be applied.

---

## A2 / A3 — absolutes & DTG Focus maturity (live pages only)

Legacy/orphan pages (`open-pit-mining-page.tsx` etc.) and redirect-dead data
(`operations/monitoring-lifecycle` "24/7") are **not** rendered and were left untouched.

| # | Page (file) | Before | After | Tag |
|---|---|---|---|---|
| 1 | `/about` (`app/about/page.tsx`) | "**Every source** read against the others — so precursors a single sensor **misses become visible**." | "Sources read against one another, so precursors a single sensor **might miss can surface for review**." | A2 |
| 2 | `/services` overview (`components/services-overview.tsx`) | "Read **every source** against the others, so precursors single sensors **miss are caught**." | "Read sources against one another, so precursors a single sensor **might miss can surface for review**." | A2 |
| 3 | Data Analytics | "Track alarm performance automatically across **every sensor**" | "Review alarm performance across **your monitoring network**" | A2 |
| 4 | Data Analytics | "Continuous automated analysis across **all sensors**" | "Continuous analysis across **your connected sensors**" | A2 |
| 5 | Data Analytics | "combined geotechnical and **AI-engineering** capability" | "combined geotechnical and **analytics-engineering** capability" | A2 / AI-framing |
| 6 | Tech Integration (meta + lead) | "**every sensor, every system**, one consolidated and traceable source of truth" | "**your sensors, your systems**, one consolidated and traceable source of truth" | A2 |
| 7 | Tech Integration | "**Every source**, connected — whoever supplied it." | "**Your sources**, connected — whoever supplied them." | A2 |
| 8 | Tech Integration (outcomes ×2) | "**Every sensor** in one consolidated, governed view." / "**every source** connected" | "**Your sensors** in one consolidated, governed view." / "**your sources** connected" | A2 |
| 9 | Tech Integration (CTA) | "Bring **every sensor** into one governed view." | "Bring **your sensors** into one governed view." | A2 |
| 10 | `/solutions` (`components/solutions-page.tsx`) | "correlate data across **every sensor type**" | "correlate data across **your sensor types**" | A2 |
| 11 | DTG Focus (`components/dtg-focus-page.tsx`) | "Everything on one screen, so **nothing gets missed** on a night shift." | "Your monitoring on one screen —" *(infallibility clause removed)* | **A3** |
| 12 | DTG Focus | kicker "**Every source**, one place" | "**Your sources**, one place" | A3 |
| 13 | DTG Focus | "Data quality assessed across **every sensor**" | "Data quality assessed across **your connected sensors**" | A3 |
| 14 | DTG Focus | kicker "**Every site**, compared" | "**Your sites**, compared" | A3 |
| 15 | DTG Focus | "**Every source** in one view." | "**Your sources** in one view." | A3 |
| 16 | DTG Focus | "across **every sensor** … **caught first**" | "across **your connected sensors** … **surfaced early**" | A3 |
| 17 | DTG Focus (hero) | "takes **everything** your site is measuring" | "takes **what** your site is measuring" | A3 |
| 18 | DTG Focus | "**All sources**, one view" / "**Every technology** read together" | "**Your sources**, one view" / "**Your technologies** read together" | A3 |
| 19 | `/dtg-focus` metadata (`app/dtg-focus/page.tsx`) | "**Every source** in one view" | "**Your sources** in one view" | A3 |
| 20 | Home (`app/page.tsx`) | "It brings **every source** into one view" | "It brings **your sources** into one view" | A3 |

### Kept, with rationale (flagged for override, not changed)

| Page | Text | Why kept |
|---|---|---|
| Remote Monitoring FAQ | Q: "Do you provide **24/7** coverage?" — A: "Coverage is set to your risk — from business-hours review through to continuous out-of-hours watch on critical assets. We agree the schedule and escalation pathway during onboarding." | The question uses the client's phrasing; the **answer** is already scoped and honest. Rewording the question doesn't improve honesty. |
| Tech Integration | Title: "**Every sensor in its own silo** isn't a monitoring system." | "Every sensor in *its own silo*" describes the **problem**, not a DTG capability claim. Rhetorical. |

### A3 note

After softening the absolutes, no DTG Focus surface claims complete coverage as done, and the page's
`delivery` section already carries the measured nuance ("Start with what matters most and extend it…
It grows with the operation") — so it now agrees with the Solutions canonical ("Complete coverage
across every source in one place is still being completed") rather than contradicting it. **If you
want an explicit "still being expanded" line added** to DTG Focus (not just the absence of
over-claims), say so and it will be added.

---

## Data Analytics — exact replacements, cuts, and rewords

### The three exact replacements (applied verbatim)

| Target | Replacement |
|---|---|
| "automatic removal" | "Noise, drift, outliers and data-quality issues are identified and, where appropriate, conditioned within a traceable processed dataset. Original source data remains preserved." |
| "derive the right TARP thresholds" | "Support evidence-based review and optimisation of alarm and TARP thresholds" |
| "Geotechnical engineers and AI engineers" (proof title) | "Geotechnical domain expertise combined with software, data and analytics engineering" |

### The simplify — every sentence CUT

| # | Cut sentence |
|---|---|
| 1 | "Built and running: a tool that turns an unreadable feed into an at-a-glance trend" |
| 2 | "Built and running: a system that tells you whether your alarms are set right" |
| 3 | "Decisions no longer wait on someone noticing manually" |
| 4 | "— no manual pre-processing" (trimmed from "Clean data ready to act on — no manual pre-processing"; outcome "Clean data ready to act on" kept) |

### 🔴 Conflict to rule on (cuts 1 & 2)

The two "Built and running:" lines are **explicitly defended by the IP note at the top of the file**
(*"'Built and running', not 'e.g.' … it is NOT a hypothetical example"*) — deliberate proof-of-realness.
Your simplify instruction (cut methodology detail) overrides that earlier decision. They are cut on the
branch; **name any you want restored.**

### Not cut (template-required)

`delivery` ("How it works") and `proof` sections are **required** by the ServicePage template — dropping
them is a structural change, out of scope for a copy pass. Kept.

---

## Appendix — A7 relocation (context; applied, principal-sourced)

Recorded here so the sheet is a complete account of the branch, though the A7 facts came from the principal.

- **Underground** now carries the relocated stats block, exact principal wording: heading **"The escalations
  that matter"**, and **950+ km** scan/deformation data (across active engagements) · **500+** TARP trigger
  responses supported · **50** confirmed falls of ground. The ScaleBar and its heading were corrected to the
  authorised **950km+** figure and throughput framing (no "km of tunnels monitored"), using only
  principal-authorised wording. Metadata aligned.
- **Open-pit** — the numeric funnel was removed (relocated); the escalation *workflow* stays as a
  number-free Validate → Escalate → Act flow. Heading reworded to drop the numbers.
- **⚠️ Open-pit "Proven in the pit" block left in place and flagged:** 99% uptime / 3 operations / 14 mo /
  "Since May 2025" and the "tens of thousands of alarms" intro are separate open-pit-labelled figures you
  did **not** name for relocation. Item 3 ("qualitative only until the principal supplies open-pit figures")
  implies they should also come out — but removing approved figures on inference is not something to guess.
  **Decision needed:** keep, remove pending open-pit figures, or replace.
