"use client";

// Shared cinematic detail-page template for the Applications axis (pages 2-4).
// Open-pit (page 2) establishes it; TSF (3) and underground (4) reuse it with their own data.
// Structure is fixed; everything content-bearing (incl. the ONE signature visual) is data/props.
// Chrome (nav/footer) comes from the global layout; this renders only the page body.

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown, Check } from "lucide-react";
import { type ReactNode, useEffect } from "react";

export type BigNum = { n: string; l: string };
export type DataRow = { dt: string; dd: ReactNode };
export type OtherEnv = {
  en: string;
  title: string;
  desc: string;
  href: string;
  image?: string;
  imageAlt?: string;
};
// Proof band supports two shapes: big-number stats (bignums) OR capability pillars (caps) + partner pill.
export type Cap = { title: string; body: string };
export type GlanceRow = { label: string; value: string };

export type EnvironmentDetailData = {
  hero: {
    eyebrow: string;
    title: ReactNode;
    lead: string;
    image: string;
    imageAlt: string;
    primaryCta: { label: string; href: string };
    jumpLink?: { label: string; href: string };
  };
  proof: {
    eyebrow: string;
    heading: string;
    intro: string;
    bignums?: BigNum[];
    caps?: Cap[];
    partner?: ReactNode;
    partnerIcon?: ReactNode; // per-page pill glyph (TSF = sensing/Eye, underground = partnership/Users)
    verify: string;
  };
  editorial: { statement: ReactNode; sideK: string; sideParagraphs: ReactNode[]; glance?: GlanceRow[] };
  signature: { eyebrow: string; heading: string; intro: string; visual: ReactNode; note?: ReactNode };
  monitor: { k: string; heading: string; paragraphs: ReactNode[]; datalist: DataRow[] };
  scope: { k: string; heading: string; intro: string; lines: string[] };
  services: { k: string; heading: string; body: ReactNode; chips: [string, string][] };
  others: OtherEnv[];
  cta: { heading: string; body: string; button: { label: string; href: string } };
};

export function EnvironmentDetailPage({ data }: { data: EnvironmentDetailData }) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-envd-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const { hero, proof, editorial, signature, monitor, scope, services, others, cta } = data;

  return (
    <main className="envd-page">
      {/* CINEMATIC HERO — image + scrim, always dark, bottom-anchored under the fixed header */}
      <header className="envd-hero">
        <div className="envd-hero__bg">
          <Image src={hero.image} alt={hero.imageAlt} fill priority sizes="100vw" className="envd-hero__img" />
        </div>
        <div className="envd-hero__scrim" aria-hidden="true" />
        <div className="envd-hero__content site-container" data-envd-reveal>
          <span className="envd-eyebrow envd-hero__eyebrow">{hero.eyebrow}</span>
          <h1 className="envd-hero__title">{hero.title}</h1>
          <p className="envd-hero__lead">{hero.lead}</p>
          <div className="envd-hero__cta">
            <Link href={hero.primaryCta.href} className="envd-btn">
              {hero.primaryCta.label}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            {hero.jumpLink ? (
              <a href={hero.jumpLink.href} className="envd-tlink">
                {hero.jumpLink.label}
              </a>
            ) : null}
          </div>
        </div>
        <span className="envd-scrollcue" aria-hidden="true">
          <span>Scroll</span>
          <ArrowDown size={18} />
        </span>
      </header>

      {/* OVERSIZED PROOF — deep-teal band */}
      <section className="envd-proof" id="proof">
        <div className="site-container" data-envd-reveal>
          <span className="envd-eyebrow envd-proof__eyebrow">{proof.eyebrow}</span>
          <h2 className="envd-proof__heading">{proof.heading}</h2>
          <p className="envd-proof__intro">{proof.intro}</p>
          {proof.bignums ? (
            <div className="envd-bignums">
              {proof.bignums.map((b) => (
                <div className="envd-bignum" key={b.l}>
                  <div className="envd-bignum__n">{b.n}</div>
                  <div className="envd-bignum__l">{b.l}</div>
                </div>
              ))}
            </div>
          ) : null}
          {proof.caps ? (
            <div className="envd-caps">
              {proof.caps.map((c) => (
                <div className="envd-cap" key={c.title}>
                  <b>{c.title}</b>
                  <span>{c.body}</span>
                </div>
              ))}
            </div>
          ) : null}
          {proof.partner ? (
            <div className="envd-partner">
              {proof.partnerIcon}
              {proof.partner}
            </div>
          ) : null}
          <p className="envd-proof__verify">{proof.verify}</p>
        </div>
      </section>

      {/* EDITORIAL INTRO */}
      <section className="envd-section">
        <div className="site-container envd-lead-split" data-envd-reveal>
          <div className="envd-lead-split__big">{editorial.statement}</div>
          <div className="envd-lead-split__side">
            <div className="envd-k">{editorial.sideK}</div>
            {editorial.sideParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {editorial.glance ? (
              <div className="envd-glance">
                {editorial.glance.map((g) => (
                  <div className="envd-glance__g" key={g.label}>
                    <b>{g.label}</b>
                    <span>{g.value}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* SIGNATURE VISUAL — one per environment (swappable slot) */}
      <section className="envd-section envd-section--alt" id="signature">
        <div className="site-container">
          <div className="envd-sechead" data-envd-reveal>
            <span className="envd-eyebrow">{signature.eyebrow}</span>
            <h2>{signature.heading}</h2>
            <p>{signature.intro}</p>
          </div>
          <div data-envd-reveal>{signature.visual}</div>
          {signature.note ? (
            <p className="envd-sig__note" data-envd-reveal>
              {signature.note}
            </p>
          ) : null}
        </div>
      </section>

      {/* HOW WE MONITOR IT */}
      <section className="envd-section">
        <div className="site-container envd-approach" data-envd-reveal>
          <div>
            <div className="envd-approach__k">{monitor.k}</div>
            <h2 className="envd-approach__h">{monitor.heading}</h2>
            {monitor.paragraphs.map((p, i) => (
              <p className="envd-approach__p" key={i}>
                {p}
              </p>
            ))}
          </div>
          <div className="envd-datalist">
            {monitor.datalist.map((row) => (
              <div className="envd-datarow" key={row.dt}>
                <div className="envd-datarow__dt">{row.dt}</div>
                <div className="envd-datarow__dd">{row.dd}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE BOUNDARY */}
      <section className="envd-section envd-section--alt">
        <div className="site-container" data-envd-reveal>
          <div className="envd-scope">
            <div className="envd-scope__k">{scope.k}</div>
            <h2 className="envd-scope__h">{scope.heading}</h2>
            <p className="envd-scope__p">{scope.intro}</p>
            {scope.lines.map((line) => (
              <div className="envd-scope__line" key={line}>
                <Check size={20} aria-hidden="true" />
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES CROSS-LINK */}
      <section className="envd-section">
        <div className="site-container envd-xlink" data-envd-reveal>
          <div className="envd-k">{services.k}</div>
          <h2 className="envd-xlink__h">{services.heading}</h2>
          <p className="envd-xlink__p">{services.body}</p>
          <div className="envd-xchips">
            {services.chips.map(([label, href]) => (
              <Link href={href} key={href} className="envd-xchip">
                {label}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER ENVIRONMENTS */}
      <section className="envd-section envd-section--alt">
        <div className="site-container">
          <div className="envd-sechead envd-sechead--tight" data-envd-reveal>
            <span className="envd-eyebrow">Other environments</span>
            <h2>Where else DTG works.</h2>
          </div>
          <div className="envd-others" data-envd-reveal>
            {others.map((o) => (
              <Link href={o.href} key={o.href} className="envd-othc">
                {o.image ? (
                  <Image src={o.image} alt={o.imageAlt ?? ""} fill sizes="(max-width:900px) 100vw, 33vw" className="envd-othc__img" />
                ) : null}
                <span className="envd-othc__scrim" aria-hidden="true" />
                <span className="envd-othc__oc">
                  <span className="envd-othc__en">{o.en}</span>
                  <span className="envd-othc__title">{o.title}</span>
                  <span className="envd-othc__desc">{o.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="envd-section envd-cta">
        <div className="site-container" data-envd-reveal>
          <h2>{cta.heading}</h2>
          <p>{cta.body}</p>
          <Link href={cta.button.href} className="envd-btn">
            {cta.button.label}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
