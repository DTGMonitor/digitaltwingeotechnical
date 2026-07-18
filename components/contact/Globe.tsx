"use client";

/**
 * Fixed-orientation COBE globe for the "Where we are" section (brief §5a Option A).
 *
 * DECORATIVE ONLY — aria-hidden. The office rows beside it carry the actual data; nothing here
 * is the sole source of any information.
 *
 * IT DOES NOT SPIN. Continuous rotation hides the markers for most of each loop, which defeats
 * the section's job. It is locked on the Australia–Indonesia region with a ~±2.5° sway, and is
 * fully static under reduced motion.
 *
 * Orientation uses cobe's own location→angles convention rather than a hand-guessed phi — a
 * guessed value shipped facing the wrong hemisphere once already. Centred on lat -19 / long 131
 * so Brisbane, Perth and Yogyakarta all face front.
 *
 * WHY THE SVG LIVES HERE TOO: one component owns the swap. The SVG renders by default and is
 * only hidden once WebGL has actually produced a globe — so a missing chunk, a WebGL-less
 * browser or a server render all leave a real illustration in the column, never a hole.
 */

import { useEffect, useRef, useState } from "react";

const locationToAngles = (lat: number, long: number): [number, number] => [
  Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
  (lat * Math.PI) / 180,
];

/* Marker sizes: Yogyakarta is deliberately larger — it is the Remote Monitoring Centre and the
   section above it is about out-of-hours coverage. */
const MARKERS = [
  { location: [-27.47, 153.03] as [number, number], size: 0.06 }, // Brisbane
  { location: [-31.95, 115.86] as [number, number], size: 0.06 }, // Perth
  { location: [-7.8, 110.37] as [number, number], size: 0.09 }, // Yogyakarta
];

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let destroy: (() => void) | undefined;
    let frame = 0;
    let cancelled = false;

    (async () => {
      try {
        const createGlobe = (await import("cobe")).default;
        if (cancelled || !canvasRef.current) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const [basePhi, baseTheta] = locationToAngles(-19, 131);
        let t = 0;

        // NB cobe v2 removed the `onRender` callback that v0.6.x (and the design mockup) used —
        // state is driven externally via globe.update(). Same result, different seam.
        const globe = createGlobe(canvasRef.current, {
          devicePixelRatio: 2,
          width: 1120,
          height: 1120,
          phi: basePhi,
          theta: baseTheta,
          dark: 1,
          diffuse: 1.2,
          mapSamples: 20000,
          mapBrightness: 6,
          baseColor: [0.12, 0.23, 0.28],
          markerColor: [0.39, 0.72, 0.36],
          glowColor: [0.05, 0.2, 0.27],
          markers: MARKERS,
        });

        // Under reduced motion there is no loop at all — the globe is drawn once, at rest.
        if (!reduce) {
          const sway = () => {
            t += 0.006;
            globe.update({ phi: basePhi + Math.sin(t) * 0.045 });
            frame = requestAnimationFrame(sway);
          };
          frame = requestAnimationFrame(sway);
        }

        destroy = () => globe.destroy();
        window.setTimeout(() => setReady(true), 0);
      } catch {
        /* no WebGL / chunk failed: the SVG fallback stays visible. */
      }
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      destroy?.();
    };
  }, []);

  return (
    <>
      {/* Illustrative fallback. Marker positions are computed from the real coordinates
          (BNE 27.47S 153.03E · PER 31.95S 115.86E · JOG 7.80S 110.37E); the landmass shapes
          are stylised, not survey-accurate. Decorative throughout. */}
      <svg
        className="cx-globe"
        viewBox="0 0 420 420"
        aria-hidden="true"
        focusable="false"
        style={{ display: ready ? "none" : "block" }}
      >
        <defs>
          <clipPath id="cx-gclip">
            <circle cx="210" cy="210" r="188" />
          </clipPath>
        </defs>
        <circle className="cx-g-sphere" cx="210" cy="210" r="188" />
        <g clipPath="url(#cx-gclip)">
          <ellipse className="cx-g-line" cx="210" cy="140" rx="182" ry="34" />
          <ellipse className="cx-g-line" cx="210" cy="210" rx="188" ry="52" />
          <ellipse className="cx-g-line" cx="210" cy="282" rx="176" ry="36" />
          <ellipse className="cx-g-line" cx="210" cy="210" rx="62" ry="188" />
          <ellipse className="cx-g-line" cx="210" cy="210" rx="124" ry="188" />
          <ellipse className="cx-g-line" cx="210" cy="210" rx="172" ry="188" />
          <path
            className="cx-g-land"
            d="M168,232 C175,215 200,205 225,208 C250,206 272,215 286,230 C297,243 296,262 285,275 C270,290 240,297 214,293 C190,290 170,280 163,262 C159,250 162,240 168,232 Z"
          />
          <ellipse className="cx-g-land" cx="252" cy="306" rx="9" ry="6" />
          <path className="cx-g-land" d="M118,182 C130,175 150,174 166,179 C170,182 168,187 160,188 C144,191 126,190 118,186 Z" />
          <path className="cx-g-land" d="M84,150 C94,138 108,132 118,136 C122,140 118,150 108,160 C100,168 90,170 84,164 Z" />
          <path className="cx-g-land" d="M138,120 C150,112 166,114 172,126 C176,136 170,148 158,152 C146,155 134,148 132,136 C131,128 133,124 138,120 Z" />
          <path className="cx-g-land" d="M232,146 C244,138 262,138 274,146 C280,152 276,160 264,162 C250,165 236,160 232,152 Z" />
        </g>
        <circle className="cx-g-halo" cx="147" cy="180" r="5" />
        <circle className="cx-g-dot" cx="147" cy="180" r="5" />
        <circle className="cx-g-dot" cx="276" cy="245" r="5" />
        <circle className="cx-g-dot" cx="171" cy="257" r="5" />
        <text className="cx-g-tag" x="122" y="170" textAnchor="end">
          JOG
        </text>
        <text className="cx-g-tag" x="288" y="241">
          BNE
        </text>
        <text className="cx-g-tag" x="160" y="276" textAnchor="end">
          PER
        </text>
      </svg>

      <canvas
        ref={canvasRef}
        className="cx-globe3d"
        width={1120}
        height={1120}
        aria-hidden="true"
        style={{ display: ready ? "block" : "none" }}
      />
    </>
  );
}
