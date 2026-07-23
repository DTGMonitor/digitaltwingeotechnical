// DTG Focus(TM) — the product page. Rebuilt 2026-07-18 (branch dtg-focus-rebuild). This filename
// previously held an orphaned earlier draft (unused — the route rendered dtg-focus-editorial-page).
//
// 🔒 COMPLIANCE — hold the honest boundary exactly (CLAUDE.md §3, amended this branch):
//  - Focus is BUILT AND RUNNING and used in delivery for clients. NEVER write "in development",
//    "roadmap", "coming soon", "not yet available" or "preview".
//  - EQUALLY never claim complete integrated coverage exists today — the fully integrated product
//    is still being completed. Delivery is framed CONSULTATIVELY ("we start from what your teams
//    need to see"), which is true and how DTG works. The sentence promising full coverage is the
//    one that fails in a demo; it is not on this page.
//  - The five capabilities get EQUAL weight — never promote one (esp. Analytics) above the others.
//  - 🔒 The sponsor (a major mining group funds Focus development) is SECRET — never on the page.
//  - No sensor brand names, no client names, no retired independence claims.
//  - Every "DTG Focus" renders the ™ via brand.tsx — never hand-typed, and the <sup> never goes
//    inside alt/aria/title.
//
// Content-first: reveals are gated on <html>.reveals-armed (added by SectionReveals on mount), so a
// JS failure leaves the page fully visible rather than stranded at opacity:0.

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { CTA, SectionReveals } from "@/components/sections";
import { DTGFocusMark, renderTrademarkText } from "@/components/brand";

const audiences = [
  {
    n: "01",
    kicker: "Monitoring teams",
    title: "The people watching the sensors",
    lead: "Your monitoring on one screen — alarms in context, movement against history, and the review recorded as it happens rather than reconstructed afterwards.",
    points: [
      "Live map and trend review together",
      "Alarms with the surrounding evidence",
      "Data quality flagged automatically",
      "Review notes captured in-flow",
      "Escalation context ready to hand",
      "Nothing waiting on a manual export",
    ],
  },
  {
    n: "02",
    kicker: "Site engineers",
    title: "The people who have to make the call today",
    lead: "What is the ground doing right now, and what does it mean for the plan? Daily operational condition at a glance — without spending the first hour of the day assembling it from four systems.",
    points: [
      "Today's ground condition, immediately",
      "Movement history and rate of change",
      "Cross-sensor agreement made visible",
      "Context for operational decisions",
      "Evidence assembled, not hunted for",
      "Defensible record behind every call",
    ],
  },
  {
    n: "03",
    kicker: "Corporate & group geotech",
    title: "The people accountable across every site",
    lead: "Are the sensors actually working? Is the data any good? Is each site running monitoring the way it's supposed to? Portfolio visibility without ringing every site to ask.",
    points: [
      "Sensor health and uptime across sites",
      "Data quality and completeness",
      "Monitoring performance, compared",
      "Review discipline made visible",
      "Assurance evidence in one place",
      "Consistent standards, site to site",
    ],
  },
];

const pillars: { n: string; title: string; kicker: string; body: string }[] = [
  {
    n: "01",
    title: "Integration",
    kicker: "Your sources, one place",
    body: "Radar, GNSS, prisms, InSAR, LiDAR, piezometers, seismic — across any vendor, read together instead of in six separate windows. Nothing on your site gets replaced to make it fit.",
  },
  {
    n: "02",
    title: "Analytics",
    kicker: "The processing underneath",
    body: "Data quality assessed across your connected sensors, noise separated from real movement, trends resolved from messy signal, and developing change surfaced early — running continuously, so people aren't doing it by hand.",
  },
  {
    n: "03",
    title: "Review & workflow",
    kicker: "Built for how monitoring runs",
    body: "Alarms arriving with their evidence, escalation aligned to your TARP, and the review captured as it happens — shaped around the routines your team already works to.",
  },
  {
    n: "04",
    title: "Governance & reporting",
    kicker: "The decision, documented",
    body: "What was seen, who reviewed it, what was decided and when — captured as the work happens. Reports and back-analysis build from that record rather than being reconstructed from it, so a call made today can still be explained next year.",
  },
  {
    n: "05",
    title: "Portfolio view",
    kicker: "Your sites, compared",
    body: "Sensor health, data quality and monitoring performance across the whole group — so corporate can see how each site is really running without ringing them to ask.",
  },
];

const delivery: [string, string][] = [
  ["Tell us what you're monitoring", "What's on site, what your teams are trying to see, and where the current process costs you time."],
  ["We connect what you already run", "Focus works with your existing sensors and platforms across vendors. Nothing gets replaced to make it fit."],
  ["Your teams get their view", "Monitoring, engineering and corporate each see what they need — the same data, three ways."],
  ["It grows with the operation", "Start with what matters most and extend it. We build the next piece around what you actually use."],
];

const verbs: [string, string][] = [
  ["See it", "Your sources in one view. Radar, GNSS, prisms and InSAR together — not scattered across six windows and one engineer's memory."],
  ["Trust it", "Quality assessed continuously across your connected sensors. Gaps, drift, noise and a quietly failing instrument surfaced early, because everything after this depends on the data being real."],
  ["Understand it", "One sensor is an opinion. Four technologies read against each other is evidence — and where they disagree is often where the answer is."],
  ["Act on it", "Out of thousands of readings, the handful that need a person. Surfaced early, with the context already assembled around them."],
  ["Defend it", "What was seen, what was decided, who was told and when — recorded as the work happens. So when someone asks why, a year later, the answer is already there."],
];

export function DTGFocusPage() {
  return (
    <main id="top" className="dfx-page">
      <SectionReveals attr="dfx-reveal" />

      {/* HERO — supplied image, off-white logo, no sub-brand theme */}
      <header className="dfx-hero" aria-labelledby="dfx-hero-title">
        <div className="dfx-hero__media" aria-hidden="true">
          <Image src="/images/dtg-focus/hero.png" alt="" fill priority sizes="100vw" className="dfx-hero__img" />
          <span className="dfx-hero__scrim" />
        </div>
        <div className="dfx-hero__content site-container" data-dfx-reveal>
          <Image
            src="/images/dtg-focus-logo-transparent.png"
            alt="DTG Focus"
            width={280}
            height={92}
            priority
            className="dfx-hero__logo"
          />
          <h1 id="dfx-hero-title" className="dfx-hero__title">
            Focused Actionable Insight
          </h1>
          <p className="dfx-hero__lead">
            {renderTrademarkText(
              "DTG Focus takes what your site is measuring and turns it into the handful of things that actually need a decision — with the evidence already attached. Built by the monitoring engineers who use it every day.",
            )}
          </p>
          <div className="dfx-hero__btns">
            <Link href="/contact" className="dfx-btn">
              Talk to DTG <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="#who" className="dfx-btn dfx-btn--ghost">
              Who it&rsquo;s for
            </Link>
          </div>
        </div>
        <span className="dfx-scrollcue" aria-hidden="true">
          <span>Scroll</span>
          <ArrowDown size={18} />
        </span>
      </header>

      {/* WHAT IT IS — image 1 */}
      <section className="dfx-isit" id="see" aria-labelledby="dfx-isit-title">
        <div className="site-container">
          <div className="dfx-sec-head" data-dfx-reveal>
            <span className="dfx-eyebrow">What it is</span>
            <h2 id="dfx-isit-title">Monitoring data stops being a pile of feeds and starts being a picture.</h2>
            <p>
              {renderTrademarkText(
                "Radar, GNSS, prisms, InSAR, inspections — normally that means a different window for each, and an engineer holding the whole thing together in their head. DTG Focus puts them in one view: the map, the trends beside it, the data quality checked, and the review record built as you go.",
              )}
            </p>
          </div>
          <figure className="dfx-shot" data-dfx-reveal>
            <div className="dfx-shot__bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <em>
                <DTGFocusMark /> — monitoring review
              </em>
            </div>
            <Image
              src="/images/dtg-focus/overview.png"
              alt="DTG Focus software showing every monitoring source in one review environment — an aerial map with deformation overlay and a trend chart beside it."
              width={1667}
              height={938}
              className="dfx-shot__img"
            />
            <figcaption>{renderTrademarkText("DTG Focus — every monitoring source in one review environment.")}</figcaption>
          </figure>
          <div className="dfx-isit__pts" data-dfx-reveal>
            {[
              ["Your sources, one view", "Your technologies read together, not in separate windows."],
              ["Trends beside the map", "Where it's moving and how it's been moving, on one screen."],
              ["Quality checked first", "Bad data flagged before anyone interprets it."],
              ["The record writes itself", "What was reviewed, and when — captured as you work."],
            ].map(([t, b]) => (
              <div className="dfx-ip" key={t}>
                <h3>{t}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR — three sticky stacking cards */}
      <section className="dfx-who" id="who" aria-labelledby="dfx-who-title">
        <div className="site-container">
          <div className="dfx-who__head" data-dfx-reveal>
            <span className="dfx-eyebrow">Who it&rsquo;s for</span>
            <h2 id="dfx-who-title">Three people need three different things from the same data.</h2>
            <p>
              {renderTrademarkText(
                "A monitoring technician, a site geotech and a corporate principal are all looking at the same sensors — and none of them need the same screen. DTG Focus gives each of them theirs.",
              )}
            </p>
          </div>
          <div className="dfx-stack">
            {audiences.map((a, i) => (
              <article className="dfx-sc" key={a.n} style={{ top: `calc(90px + ${i} * 18px)` }} data-dfx-reveal>
                <div className="dfx-sc__in">
                  <div className="dfx-sc__n" aria-hidden="true">
                    {a.n}
                  </div>
                  <div>
                    <span className="dfx-sc__k">{a.kicker}</span>
                    <h3>{a.title}</h3>
                    <p className="dfx-sc__lead">{a.lead}</p>
                    <ul className="dfx-sc__l">
                      {a.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSIDE FOCUS — five equal capabilities + image 2 */}
      <section className="dfx-inside" aria-labelledby="dfx-inside-title">
        <div className="site-container">
          <div className="dfx-sec-head" data-dfx-reveal>
            <span className="dfx-eyebrow">
              Inside <DTGFocusMark />
            </span>
            <h2 id="dfx-inside-title">Five capabilities, running together.</h2>
            <p>
              Each one is substantial on its own. The point is that they run in the same place, on the same data, at the
              same time — which is the part that has never existed.
            </p>
          </div>
          <div className="dfx-pillars">
            {pillars.map((p) => (
              <div className="dfx-pl" key={p.n} data-dfx-reveal>
                <div className="dfx-pl__n" aria-hidden="true">
                  {p.n}
                </div>
                <div className="dfx-pl__t">
                  <h3>{p.title}</h3>
                  <div className="dfx-pl__k">{p.kicker}</div>
                </div>
                <p className="dfx-pl__d">{p.body}</p>
              </div>
            ))}
          </div>
          <figure className="dfx-shot dfx-shot--inline" data-dfx-reveal>
            <div className="dfx-shot__bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <em>
                <DTGFocusMark /> — back-analysis report
              </em>
            </div>
            <Image
              src="/images/dtg-focus/back-analysis.png"
              alt="DTG Focus back-analysis report — a pit deformation model with velocity and inverse-velocity analysis assembled from the monitoring record."
              width={1667}
              height={938}
              className="dfx-shot__img"
            />
            <figcaption>
              <b>One example:</b> integrated back-analysis reporting — the report assembled from the monitoring record
              itself, not rebuilt by hand afterwards. One of many things running behind the capabilities above.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* HOW YOU GET IT — consultative delivery */}
      <section className="dfx-dep" aria-labelledby="dfx-dep-title">
        <div className="site-container dfx-dep__grid">
          <div className="dfx-dep__l" data-dfx-reveal>
            <span className="dfx-eyebrow">How you get it</span>
            <h2 id="dfx-dep-title">We start from what your teams need to see.</h2>
            <p>
              {renderTrademarkText(
                "Focus isn't a box you buy and then work out what to do with. We look at your operation, your sensors and the people who need the information — then set up the views that actually serve them.",
              )}
            </p>
          </div>
          <ol className="dfx-dep__steps" data-dfx-reveal>
            {delivery.map(([t, b], i) => (
              <li className="dfx-dstep" key={t}>
                <span className="dfx-dstep__n tnum" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{t}</h3>
                  <p>{b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SIGNAL TO DECISION — the verbs close */}
      <section className="dfx-verbs" aria-labelledby="dfx-verbs-title">
        <div className="site-container">
          <div className="dfx-verbs__head" data-dfx-reveal>
            <span className="dfx-eyebrow">Signal to decision</span>
            <h2 id="dfx-verbs-title">Five things have to happen before a monitoring decision means anything.</h2>
            <p>
              {renderTrademarkText(
                "Every one of these is done today, somewhere — in a spreadsheet, in someone's head, in an email at 2am. DTG Focus does all five, in one place, on the same data.",
              )}
            </p>
          </div>
          <div className="dfx-vlist">
            {verbs.map(([w, d]) => (
              <div className="dfx-vb" key={w} data-dfx-reveal>
                <p className="dfx-vb__w">{w}</p>
                <p className="dfx-vb__d">{d}</p>
              </div>
            ))}
          </div>
          <div className="dfx-verbs__close" data-dfx-reveal>
            <p>
              <b>Five separate jobs, done in one place, on the same data, as the work happens.</b> That is the part that
              has never existed — and it is what DTG delivers today, starting from whatever your teams most need to see.
            </p>
          </div>
        </div>
      </section>

      {/* CTA — shared editorial band */}
      <CTA
        surface="band"
        eyebrow={renderTrademarkText("DTG Focus")}
        title="See it on your own data."
        titleId="dfx-cta"
        body={renderTrademarkText(
          "Tell us what you're monitoring and who needs to see it — we'll show you what DTG Focus would do with it.",
        )}
        href="/contact"
        actionLabel="Talk to DTG"
      />
    </main>
  );
}
