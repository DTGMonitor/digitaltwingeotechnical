"use client";

/**
 * Home proof band — variant C ("Instrument"), built from dtg-proof-band-variants.html.
 *
 * SSR-HONEST: the final values are rendered in the server markup (the JSX below). The page must
 * NEVER render "0" as its proof. JS resets to 0 ONLY at the moment animation starts (when the band
 * scrolls into view) — so with no JS, a crawler, or a failed hydration, the real figures still show.
 *
 * ONE rAF LOOP → ONE eased progress value (easeOutCubic, 1400ms) → all three numbers formatted from
 * it AND all three track fills set to (progress × 100)%. Never per-figure timers: the single
 * progress value is what guarantees identical start and finish across the three figures.
 *
 * ── FIGURE HONESTY (verbatim from the spec) ──
 * · 10,000+ = elapsed monitoring COVERAGE since 1 May 2025 (24h × days; ~720/month; 9,600 was 400
 *   days frozen early Jun 2026; ~10,800 today). Label must say COVERAGE — never staffed hours (would
 *   imply ~22h/day presence and contradict the out-of-hours staffing claim).
 * · 10+ years = PEOPLE experience (principal's monitoring leadership). NEVER company age.
 *
 * The track carries NO axis, NO ticks, NO scale numbers — it is a motion accent, not a measurement.
 * A full bar with a scale reads as a fabricated chart (see the 950 km ScaleBar fix).
 */

import { useEffect, useRef } from "react";

type Figure = {
  label: string;
  to: number;
  fmt: "comma" | "plain";
  /** the "+" is a static suffix, never animated */
  final: string;
  unit: string;
  desc: string;
};

const FIGURES: Figure[] = [
  {
    label: "Alarm review",
    to: 50000,
    fmt: "comma",
    final: "50,000",
    unit: "alarms reviewed",
    desc: "Operational alarm records reviewed with the discipline needed for clearer escalation.",
  },
  {
    label: "Monitoring coverage",
    to: 10000,
    fmt: "comma",
    final: "10,000",
    unit: "hours of monitoring coverage",
    desc: "Continuous coverage of active operating conditions, independently reviewed.",
  },
  {
    label: "Experience",
    to: 10,
    fmt: "plain",
    final: "10",
    unit: "years of monitoring leadership",
    desc: "Deep operational experience across international monitoring programs.",
  },
];

const DURATION = 1400;
const format = (v: number, f: Figure["fmt"]) =>
  f === "comma" ? Math.round(v).toLocaleString("en-AU") : String(Math.round(v));

export function ProofBand() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const vals = Array.from(root.querySelectorAll<HTMLElement>("[data-pb-val]"));
    const draws = Array.from(root.querySelectorAll<HTMLElement>("[data-pb-draw]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion: leave the numbers at their final (already-rendered) values and snap the
    // decorative fills full. No loop.
    if (reduce) {
      draws.forEach((d) => (d.style.width = "100%"));
      return;
    }

    let frame = 0;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    function animate() {
      // Reset to 0 ONLY here, at animation start — never on mount, so SSR/no-JS keep the real values.
      vals.forEach((el) => (el.textContent = format(0, el.dataset.pbFmt as Figure["fmt"])));
      draws.forEach((d) => (d.style.width = "0%"));

      let start: number | null = null;
      const step = (now: number) => {
        if (start === null) start = now;
        const p = Math.min((now - start) / DURATION, 1);
        const e = easeOutCubic(p);
        vals.forEach((el) => {
          const to = Number(el.dataset.pbTo);
          el.textContent = format(to * e, el.dataset.pbFmt as Figure["fmt"]);
        });
        draws.forEach((d) => (d.style.width = `${(e * 100).toFixed(2)}%`));
        if (p < 1) {
          frame = requestAnimationFrame(step);
        } else {
          // land exactly on the final formatted strings
          vals.forEach((el) => (el.textContent = format(Number(el.dataset.pbTo), el.dataset.pbFmt as Figure["fmt"])));
          draws.forEach((d) => (d.style.width = "100%"));
        }
      };
      frame = requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)) {
      animate();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            io.unobserve(entry.target);
            animate();
          }
        });
      },
      { threshold: 0.35 },
    );
    io.observe(root);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="proof"
      className="pb"
      aria-labelledby="proof-title"
    >
      <div className="site-container">
        <div className="pb__head">
          <div className="pb__rule" aria-hidden="true" />
          <h2 id="proof-title" className="pb__h">
            Proven in live conditions
          </h2>
          <p className="pb__lede">
            Every figure below is a record from active operations — traceable to work actually done.
          </p>
        </div>

        <div className="pb__grid">
          {FIGURES.map((f) => (
            <div className="pb__fig" key={f.label}>
              <span className="pb__lbl">{f.label}</span>
              <p className="pb__n tnum">
                {/* ticker is aria-hidden; a visually-hidden static final value carries the SR truth */}
                <span
                  className="pb__val"
                  aria-hidden="true"
                  data-pb-val
                  data-pb-to={f.to}
                  data-pb-fmt={f.fmt}
                >
                  {f.final}
                </span>
                <span className="pb__sfx" aria-hidden="true">
                  +
                </span>
                <span className="sr-only">
                  {f.final}+ {f.unit}
                </span>
              </p>
              {/* motion accent only — no axis, no ticks, no scale (a scaled bar reads as a fake chart) */}
              <div className="pb__track" aria-hidden="true">
                <span className="pb__draw" data-pb-draw />
              </div>
              <span className="pb__unit">{f.unit}</span>
              <p className="pb__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
