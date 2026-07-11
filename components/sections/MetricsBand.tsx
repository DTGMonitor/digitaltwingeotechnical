import type { ReactNode } from "react";
import { Surface, type SurfaceVariant } from "./Surface";

/** Large numerals + short labels; dark or light; no cell walls. Tabular numerals. */
export type Metric = {
  value: ReactNode;
  label: ReactNode;
};

export type MetricsBandProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  titleId?: string;
  metrics: Metric[];
  /** deep-teal reads well here; light also valid */
  surface?: SurfaceVariant;
  compact?: boolean;
};

export function MetricsBand({
  eyebrow,
  title,
  titleId,
  metrics,
  surface = "band",
  compact,
}: MetricsBandProps) {
  return (
    <Surface variant={surface} compact={compact} aria-labelledby={title ? titleId : undefined}>
      {title ? (
        <div className="section-kit-statement">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 id={titleId} className="section-headline">
            {title}
          </h2>
        </div>
      ) : null}
      <dl className="section-kit-metrics">
        {metrics.map((metric, i) => (
          <div key={i}>
            <dt className="section-kit-metric-value tnum">{metric.value}</dt>
            <dd className="eyebrow">{metric.label}</dd>
          </div>
        ))}
      </dl>
    </Surface>
  );
}
