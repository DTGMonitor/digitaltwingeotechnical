import type { ReactNode } from "react";
import { Surface, type SurfaceVariant } from "./Surface";

/**
 * The canonical DTG method spine — Inputs → Independent Review → Governed
 * Monitoring Outcomes. Horizontal on desktop, vertical (connectors rotated) on
 * mobile. Consolidates the bespoke method diagrams scattered across the site.
 */
export type SpineNode = { label: ReactNode; body?: ReactNode };

export type ProcessSpineProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  titleId?: string;
  nodes: SpineNode[];
  surface?: SurfaceVariant;
  compact?: boolean;
};

export function ProcessSpine({
  eyebrow,
  title,
  titleId,
  nodes,
  surface = "band",
  compact,
}: ProcessSpineProps) {
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
      <ol className="spine" role="list">
        {nodes.map((node, i) => (
          <li className="spine__node" key={i}>
            <span className="spine__marker tnum" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="spine__body">
              <h3 className="spine__label">{node.label}</h3>
              {node.body ? <p>{node.body}</p> : null}
            </div>
            {i < nodes.length - 1 ? <span className="spine__connector" aria-hidden="true" /> : null}
          </li>
        ))}
      </ol>
    </Surface>
  );
}
