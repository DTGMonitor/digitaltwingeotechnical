// Home "monitoring challenge" section — variant E ("Statement + rail"), built from
// dtg-challenge-variants.html. Replaces the old "More Data. Less Clarity." descending staircase.
//
// WHY: the old heading was Title Case with full stops (old standard); the descending staircase
// pulled the eye down-and-away under copy meant to land on confidence; and the four numbered beats
// weren't a real sequence (01/02 both problem states, 03 DTG, 04 outcome, all styled as equals).
// This is one statement + a quiet 4-step rail with the DTG step raised on an accent rule.
//
// Copy discipline (kept verbatim from the spec): "VWP" retired -> "piezometers". Problem framing is
// industry-general ("often", "owned by no one") — never an assertion about a named client. Outcome
// language lands on defensible/reviewable, never on prevention.

const steps: { n: string; title: string; body: string; dtg?: boolean }[] = [
  { n: "01", title: "Instruments exist", body: "Radar, GNSS, InSAR, prisms, LiDAR and piezometers, often across several vendors." },
  { n: "02", title: "Signals don’t agree", body: "Separate systems, alarms without context, correlation owned by no one." },
  { n: "03", title: "Independent review", body: "DTG validates, correlates, contextualises and governs the picture.", dtg: true },
  { n: "04", title: "The decision holds", body: "Clearer awareness, and reasoning that survives review." },
];

export function MonitoringChallenge() {
  return (
    <section id="about" className="monitoring-challenge" aria-labelledby="mc-title">
      <div className="site-container challenge-container">
        <div className="mc-head">
          <div className="mc-rule" aria-hidden="true" />
          <span className="mc-eyebrow">The monitoring challenge</span>
        </div>

        {/* The statement IS the section heading. Sentence case, no terminal full stop (site standard). */}
        <h2 id="mc-title" className="mc-stmt">
          The data isn&rsquo;t the problem &mdash;{" "}
          <span className="mc-stmt__q">the gap between the reading and the decision</span>{" "}
          <span className="mc-stmt__a">is</span>
        </h2>

        <p className="mc-sub">
          Most operations are already well instrumented. What&rsquo;s missing is the independent
          layer that turns separate feeds into one picture a team can act on &mdash; and defend
          afterwards.
        </p>

        <div className="mc-rail">
          {steps.map((s) => (
            <div className={`mc-step${s.dtg ? " mc-step--dtg" : ""}`} key={s.n}>
              <span className="mc-step__n">{s.n}</span>
              <b>{s.title}</b>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
