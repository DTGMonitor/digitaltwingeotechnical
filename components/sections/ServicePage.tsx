import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { renderTrademarkText } from "@/components/brand";
import { Surface } from "./Surface";
import { CTA } from "./CTA";
import { Matrix, type MatrixCell } from "./Matrix";
import { Tabs } from "./Tabs";
import { SectionReveals } from "./SectionReveals";

/**
 * Shared, data-driven service-page template. ONE template + one ServiceContent object per
 * service — uplift here and all five inherit it. Server component; the reveal behaviour is a
 * client island (SectionReveals) so the copy stays server-rendered.
 *
 * Scoped to the .svcd-* family. It composes the shared Surface primitive for surfaces (never
 * duplicate that block — a partial duplicate is what caused the invisible-button bug) but
 * renders its own content markup, because CTA / FaqAccordion / .section-kit-* / .kit-button
 * are SHARED with /about and others and must not be restyled from here.
 *
 * The FAQ is deliberately NOT an accordion: five short answers that build trust
 * ("Does this replace our geotechnical engineer? No.") should not sit behind a click.
 * The shared FaqAccordion is untouched and still used by /about.
 *
 * Section headings are overridable per service (data-analytics renames several); the FAQ
 * heading defaults to "Common questions." rather than being hardcoded to the service name.
 */
type Cta = { label: string; href: string; primary?: boolean };
type LinkRef = { label: string; href: string };

export type ServiceContent = {
  slug: string;
  /** Sentence case, NO full stop — site-wide hero rule. */
  name: string;
  lead: string;
  ctas: Cta[];
  problem: {
    eyebrow: string;
    title: string;
    intro: string;
    /** optional second line, set in the page's own voice — rendered emphasised */
    emphasis?: string;
    solutions: LinkRef[];
  };
  /** optional proof slot — why this service is credible. Sits between problem and whatsIncluded. */
  proof?: { eyebrow?: string; title: string; intro?: string; items: { title: string; body: string }[] };
  whatsIncluded: {
    eyebrow?: string;
    title: string;
    intro?: string;
    groups: { title: string; desc: string; points: string[] }[];
  };
  /** zero, one or many adjacent cross-links, rendered in order */
  crossLinks?: { title: string; body: string; linkLabel: string; href: string }[];
  matrix?: { eyebrow?: string; title?: string; rowHeader?: string; columns: string[]; rows: { label: string; cells: MatrixCell[] }[]; highlightColumn?: number };
  tabs?: { eyebrow?: string; title?: string; items: { label: string; heading?: string; intro?: string; points?: string[] }[] };
  delivery: { eyebrow?: string; title: string; steps: { title: string; body: string }[] };
  outcomes: { eyebrow?: string; title: string; items: { icon?: ReactNode; title: string; body?: string }[] };
  /** Optional heading overrides — data-analytics renames its sections. */
  faqSection?: { eyebrow?: string; title?: string };
  faqs: { question: string; answer: string }[];
  cta: { eyebrow?: string; title: string; body?: string; actionLabel: string; actionHref: string };
};

export function ServicePage({ content }: { content: ServiceContent }) {
  const c = content;
  const heroId = `${c.slug}-hero`;
  const includedId = `${c.slug}-included`;

  return (
    <main id="top" className="svcd-page">
      <SectionReveals attr="svcd-reveal" />

      {/* HERO — cinematic, gradient, no image. Text on the .site-container ruler:
          never add width:100% here, it overrides the container and bleeds to the edge. */}
      <header className="svcd-hero" aria-labelledby={heroId}>
        <div className="svcd-hero__content site-container" data-svcd-reveal>
          <span className="svcd-eyebrow svcd-hero__eyebrow">Services</span>
          <h1 id={heroId} className="svcd-hero__title">
            {renderTrademarkText(c.name)}
          </h1>
          <p className="svcd-hero__lead">{renderTrademarkText(c.lead)}</p>
          <div className="svcd-hero__btns">
            {c.ctas.map((cta) => (
              <Link
                key={cta.href + cta.label}
                href={cta.href}
                className={`svcd-btn ${cta.primary ? "" : "svcd-btn--ghost"}`}
              >
                {renderTrademarkText(cta.label)}
                {cta.primary ? <ArrowRight size={16} aria-hidden="true" /> : null}
              </Link>
            ))}
          </div>
        </div>
        <span className="svcd-scrollcue" aria-hidden="true">
          <span>Scroll</span>
          <ArrowDown size={18} />
        </span>
      </header>

      {/* PROBLEM */}
      <Surface variant="default" className="svcd-problem" aria-labelledby={`${c.slug}-problem`}>
        <div className="svcd-problem__grid">
          <div data-svcd-reveal>
            <span className="svcd-eyebrow">{renderTrademarkText(c.problem.eyebrow)}</span>
            <h2 id={`${c.slug}-problem`} className="svcd-problem__title">
              {renderTrademarkText(c.problem.title)}
            </h2>
          </div>
          <div data-svcd-reveal>
            <p className="svcd-problem__intro">{renderTrademarkText(c.problem.intro)}</p>
            {c.problem.emphasis ? (
              <p className="svcd-problem__emph">{renderTrademarkText(c.problem.emphasis)}</p>
            ) : null}
            {c.problem.solutions.map((s) => (
              <Link key={s.href} href={s.href} className="svcd-sollink">
                {renderTrademarkText(s.label)}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </Surface>

      {/* WHY THIS IS CREDIBLE (optional) — the proof slot */}
      {c.proof ? (
        <Surface variant="default" className="svcd-own" aria-labelledby={`${c.slug}-proof`}>
          <div className="svcd-sec-head" data-svcd-reveal>
            {c.proof.eyebrow ? <span className="svcd-eyebrow">{renderTrademarkText(c.proof.eyebrow)}</span> : null}
            <h2 id={`${c.slug}-proof`}>{renderTrademarkText(c.proof.title)}</h2>
            {c.proof.intro ? <p>{renderTrademarkText(c.proof.intro)}</p> : null}
          </div>
          <div className="svcd-own__grid">
            {c.proof.items.map((p, i) => (
              <article className="svcd-ow" key={i} data-svcd-reveal>
                <h3>{renderTrademarkText(p.title)}</h3>
                <p>{renderTrademarkText(p.body)}</p>
              </article>
            ))}
          </div>
        </Surface>
      ) : null}

      {/* WHAT'S INCLUDED */}
      <Surface variant="raised" id={includedId} className="svcd-inc" aria-labelledby={`${c.slug}-included-title`}>
        <div className="svcd-sec-head" data-svcd-reveal>
          {c.whatsIncluded.eyebrow ? (
            <span className="svcd-eyebrow">{renderTrademarkText(c.whatsIncluded.eyebrow)}</span>
          ) : null}
          <h2 id={`${c.slug}-included-title`}>{renderTrademarkText(c.whatsIncluded.title)}</h2>
          {c.whatsIncluded.intro ? <p>{renderTrademarkText(c.whatsIncluded.intro)}</p> : null}
        </div>
        <div className="svcd-inc__grid">
          {c.whatsIncluded.groups.map((g, i) => (
            <article className="svcd-ig" key={i} data-svcd-reveal>
              <h3>{renderTrademarkText(g.title)}</h3>
              <p className="svcd-ig__sub">{renderTrademarkText(g.desc)}</p>
              {g.points.length > 0 ? (
                <ul>
                  {g.points.map((p, j) => (
                    <li key={j}>{renderTrademarkText(p)}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </Surface>

      {/* CROSS-LINKS (optional, one or many) */}
      {c.crossLinks && c.crossLinks.length > 0 ? (
        <Surface variant="default" compact className="svcd-xl" aria-label="Related services">
          {c.crossLinks.map((xl, i) => (
            <div className="svcd-xl__box" key={i} data-svcd-reveal>
              <div>
                <h3>{renderTrademarkText(xl.title)}</h3>
                <p>{renderTrademarkText(xl.body)}</p>
              </div>
              <Link href={xl.href} className="svcd-xl__go">
                {renderTrademarkText(xl.linkLabel)}
                <ArrowRight className="svcd-xl__arw" size={15} aria-hidden="true" />
              </Link>
            </div>
          ))}
        </Surface>
      ) : null}

      {/* MATRIX (optional — technical-advisory only) */}
      {c.matrix ? (
        <Matrix
          surface="default"
          eyebrow={c.matrix.eyebrow}
          title={c.matrix.title}
          titleId={`${c.slug}-matrix`}
          rowHeader={c.matrix.rowHeader}
          columns={c.matrix.columns}
          rows={c.matrix.rows}
          highlightColumn={c.matrix.highlightColumn}
          caption={typeof c.matrix.title === "string" ? c.matrix.title : "Comparison"}
        />
      ) : null}

      {/* TABS (optional — technical-advisory only) */}
      {c.tabs ? (
        <Tabs
          surface="raised"
          eyebrow={c.tabs.eyebrow}
          title={c.tabs.title}
          titleId={`${c.slug}-tabs`}
          ariaLabel={c.tabs.title}
          items={c.tabs.items.map((t) => ({
            label: t.label,
            content: (
              <div className="tab-body">
                <div className="tab-body__head">
                  {t.heading ? <h3>{renderTrademarkText(t.heading)}</h3> : null}
                  {t.intro ? <p className="tab-body__intro">{renderTrademarkText(t.intro)}</p> : null}
                </div>
                {t.points && t.points.length > 0 ? (
                  <ul>
                    {t.points.map((p, j) => (
                      <li key={j}>{renderTrademarkText(p)}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ),
          }))}
        />
      ) : null}

      {/* HOW IT'S DELIVERED */}
      <Surface variant="default" className="svcd-del" aria-labelledby={`${c.slug}-delivery`}>
        <div className="svcd-sec-head" data-svcd-reveal>
          {c.delivery.eyebrow ? (
            <span className="svcd-eyebrow">{renderTrademarkText(c.delivery.eyebrow)}</span>
          ) : null}
          <h2 id={`${c.slug}-delivery`}>{renderTrademarkText(c.delivery.title)}</h2>
        </div>
        <ol className="svcd-steps">
          {c.delivery.steps.map((s, i) => (
            <li className="svcd-st" key={i} data-svcd-reveal>
              <span className="svcd-st__n tnum" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{renderTrademarkText(s.title)}</h3>
              <p>{renderTrademarkText(s.body)}</p>
            </li>
          ))}
        </ol>
      </Surface>

      {/* WHAT YOU GET */}
      <Surface variant="raised" className="svcd-out" aria-labelledby={`${c.slug}-outcomes`}>
        <div className="svcd-sec-head" data-svcd-reveal>
          {c.outcomes.eyebrow ? (
            <span className="svcd-eyebrow">{renderTrademarkText(c.outcomes.eyebrow)}</span>
          ) : null}
          <h2 id={`${c.slug}-outcomes`}>{renderTrademarkText(c.outcomes.title)}</h2>
        </div>
        <div className="svcd-out__grid">
          {c.outcomes.items.map((o, i) => (
            <article className="svcd-og" key={i} data-svcd-reveal>
              {o.icon ? (
                <span className="svcd-og__icon" aria-hidden="true">
                  {o.icon}
                </span>
              ) : null}
              <h3>{renderTrademarkText(o.title)}</h3>
              {o.body ? <p>{renderTrademarkText(o.body)}</p> : null}
            </article>
          ))}
        </div>
      </Surface>

      {/* FAQs — always open, two columns. NOT an accordion (see the note at the top). */}
      <Surface variant="default" className="svcd-faq" aria-labelledby={`${c.slug}-faq`}>
        <div className="svcd-sec-head" data-svcd-reveal>
          <span className="svcd-eyebrow">{c.faqSection?.eyebrow ?? "FAQs"}</span>
          <h2 id={`${c.slug}-faq`}>{renderTrademarkText(c.faqSection?.title ?? "Common questions.")}</h2>
        </div>
        <dl className="svcd-faq__list">
          {c.faqs.map((f, i) => (
            <div className="svcd-fq" key={i} data-svcd-reveal>
              <dt>{renderTrademarkText(f.question)}</dt>
              <dd>{renderTrademarkText(f.answer)}</dd>
            </div>
          ))}
        </dl>
      </Surface>

      {/* CTA — shared kit component on a deep-teal band */}
      <CTA
        surface="band"
        eyebrow={c.cta.eyebrow}
        title={renderTrademarkText(c.cta.title)}
        titleId={`${c.slug}-cta`}
        body={c.cta.body ? renderTrademarkText(c.cta.body) : undefined}
        actions={
          <Link href={c.cta.actionHref} className="kit-button kit-button--primary">
            {renderTrademarkText(c.cta.actionLabel)} <ArrowRight size={15} />
          </Link>
        }
      />
    </main>
  );
}
