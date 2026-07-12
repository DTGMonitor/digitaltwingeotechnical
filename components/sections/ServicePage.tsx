import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { renderTrademarkText } from "@/components/brand";
import { Surface } from "./Surface";
import { FaqAccordion } from "./FaqAccordion";
import { CTA } from "./CTA";
import { Matrix, type MatrixCell } from "./Matrix";
import { Tabs } from "./Tabs";

/**
 * Shared, data-driven service-page template (Phase E). One server component + one
 * content object per service. Themed via --c-*; optional slots (crossLink / matrix /
 * tabs) render only when present. Hero has NO breadcrumb (updated rule): green eyebrow →
 * service-name H1 → standfirst → CTAs.
 */
type Cta = { label: string; href: string; primary?: boolean };
type LinkRef = { label: string; href: string };

export type ServiceContent = {
  slug: string;
  name: string;
  lead: string;
  ctas: Cta[];
  problem: { eyebrow: string; title: string; intro: string; solutions: LinkRef[] };
  whatsIncluded: {
    eyebrow?: string;
    title: string;
    layout?: "grid" | "split" | "flow" | "list";
    groups: { icon?: ReactNode; title: string; desc: string; points: string[] }[];
  };
  crossLink?: { title: string; body: string; linkLabel: string; href: string };
  matrix?: { eyebrow?: string; title?: string; columns: string[]; rows: { label: string; cells: MatrixCell[] }[]; highlightColumn?: number };
  tabs?: { eyebrow?: string; title?: string; items: { label: string; heading?: string; intro?: string; points?: string[] }[] };
  delivery: { eyebrow?: string; title: string; steps: { title: string; body: string }[] };
  outcomes: { eyebrow?: string; title: string; items: { title: string; body?: string }[] };
  faqs: { question: string; answer: string }[];
  cta: { eyebrow?: string; title: string; actionLabel: string; actionHref: string };
};

function Actions({ ctas }: { ctas: Cta[] }) {
  return (
    <div className="section-kit-actions">
      {ctas.map((c) => (
        <Link key={c.href + c.label} href={c.href} className={`kit-button ${c.primary ? "kit-button--primary" : ""}`}>
          {renderTrademarkText(c.label)} <ArrowUpRight size={15} />
        </Link>
      ))}
    </div>
  );
}

export function ServicePage({ content }: { content: ServiceContent }) {
  const c = content;
  const heroId = `${c.slug}-hero`;
  return (
    <main id="top" className="service-page">
      {/* Hero — no breadcrumb */}
      <Surface variant="band" aria-labelledby={heroId}>
        <div className="service-hero">
          <p className="eyebrow eyebrow-accent">Service</p>
          <h1 id={heroId} className="service-hero__title">
            {renderTrademarkText(c.name)}
          </h1>
          <p className="service-hero__lead">{renderTrademarkText(c.lead)}</p>
          <Actions ctas={c.ctas} />
        </div>
      </Surface>

      {/* Problem band + Solutions back-link */}
      <Surface variant="band" aria-labelledby={`${c.slug}-problem`}>
        <div className="service-problem">
          <p className="eyebrow eyebrow-accent">{c.problem.eyebrow}</p>
          <h2 id={`${c.slug}-problem`} className="section-headline service-h2--narrow">
            {renderTrademarkText(c.problem.title)}
          </h2>
          <p className="section-kit-lead">{renderTrademarkText(c.problem.intro)}</p>
          {c.problem.solutions.length > 0 ? (
            <p className="service-backlink">
              This helps:{" "}
              {c.problem.solutions.map((s, i) => (
                <span key={s.href}>
                  {i > 0 ? " · " : null}
                  <Link href={s.href} className="service-backlink__link">
                    {renderTrademarkText(s.label)} <ArrowUpRight size={13} />
                  </Link>
                </span>
              ))}
            </p>
          ) : null}
        </div>
      </Surface>

      {/* What's included — layout prop (default grid) */}
      <Surface variant="default" aria-labelledby={`${c.slug}-included`}>
        <div className="section-kit-statement">
          {c.whatsIncluded.eyebrow ? <p className="eyebrow">{c.whatsIncluded.eyebrow}</p> : null}
          <h2 id={`${c.slug}-included`} className="section-headline service-h2--section">
            {renderTrademarkText(c.whatsIncluded.title)}
          </h2>
        </div>
        <div className="whats-included" data-layout={c.whatsIncluded.layout ?? "grid"}>
          {c.whatsIncluded.groups.map((g, i) => (
            <article className="wi-group" key={i}>
              {g.icon ? <span className="wi-group__icon" aria-hidden="true">{g.icon}</span> : null}
              <h3>{renderTrademarkText(g.title)}</h3>
              <p className="wi-group__desc">{renderTrademarkText(g.desc)}</p>
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

      {/* Adjacent cross-link (optional) */}
      {c.crossLink ? (
        <Surface variant="default" compact aria-label={c.crossLink.title}>
          <div className="cross-link">
            <div>
              <h3>{renderTrademarkText(c.crossLink.title)}</h3>
              <p>{renderTrademarkText(c.crossLink.body)}</p>
            </div>
            <Link href={c.crossLink.href} className="cross-link__cta">
              {renderTrademarkText(c.crossLink.linkLabel)} <ArrowUpRight size={15} />
            </Link>
          </div>
        </Surface>
      ) : null}

      {/* Matrix (optional) */}
      {c.matrix ? (
        <Matrix
          surface="default"
          eyebrow={c.matrix.eyebrow}
          title={c.matrix.title}
          titleId={`${c.slug}-matrix`}
          columns={c.matrix.columns}
          rows={c.matrix.rows}
          highlightColumn={c.matrix.highlightColumn}
          caption={typeof c.matrix.title === "string" ? c.matrix.title : "Comparison"}
        />
      ) : null}

      {/* Tabs (optional) */}
      {c.tabs ? (
        <Tabs
          surface="default"
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

      {/* How it's delivered — 4-step strip */}
      <Surface variant="band" aria-labelledby={`${c.slug}-delivery`}>
        <div className="section-kit-statement">
          {c.delivery.eyebrow ? <p className="eyebrow eyebrow-accent">{c.delivery.eyebrow}</p> : null}
          <h2 id={`${c.slug}-delivery`} className="section-headline service-h2--section">
            {renderTrademarkText(c.delivery.title)}
          </h2>
        </div>
        <ol className="delivery-steps">
          {c.delivery.steps.map((s, i) => (
            <li className="delivery-step" key={i}>
              <span className="delivery-step__n tnum">{String(i + 1).padStart(2, "0")}</span>
              <h3>{renderTrademarkText(s.title)}</h3>
              <p>{renderTrademarkText(s.body)}</p>
            </li>
          ))}
        </ol>
      </Surface>

      {/* What you get — outcomes */}
      <Surface variant="default" aria-labelledby={`${c.slug}-outcomes`}>
        <div className="section-kit-statement">
          {c.outcomes.eyebrow ? <p className="eyebrow">{c.outcomes.eyebrow}</p> : null}
          <h2 id={`${c.slug}-outcomes`} className="section-headline service-h2--section">
            {renderTrademarkText(c.outcomes.title)}
          </h2>
        </div>
        <div className="service-outcomes">
          {c.outcomes.items.map((o, i) => (
            <article className="service-outcome" key={i}>
              <h3>{renderTrademarkText(o.title)}</h3>
              {o.body ? <p>{renderTrademarkText(o.body)}</p> : null}
            </article>
          ))}
        </div>
      </Surface>

      {/* FAQ — 5, native <details> */}
      <FaqAccordion
        surface="default"
        eyebrow="FAQ"
        title={`${c.name.replace(/\.$/, "")}, explained.`}
        titleId={`${c.slug}-faq`}
        items={c.faqs.map((f) => ({
          question: renderTrademarkText(f.question),
          answer: renderTrademarkText(f.answer),
        }))}
      />

      {/* CTA */}
      <CTA
        surface="band"
        eyebrow={c.cta.eyebrow}
        title={renderTrademarkText(c.cta.title)}
        titleId={`${c.slug}-cta`}
        actions={
          <Link href={c.cta.actionHref} className="kit-button kit-button--primary">
            {renderTrademarkText(c.cta.actionLabel)} <ArrowUpRight size={15} />
          </Link>
        }
      />
    </main>
  );
}
