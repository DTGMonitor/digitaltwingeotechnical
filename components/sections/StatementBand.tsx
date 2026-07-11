import type { ReactNode } from "react";
import { Surface, type SurfaceVariant } from "./Surface";

/** Eyebrow + H2 + lead intro band. Light by default; deep-teal as punctuation. */
export type StatementBandProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  titleId?: string;
  lead?: ReactNode;
  actions?: ReactNode;
  surface?: SurfaceVariant;
  compact?: boolean;
};

export function StatementBand({
  eyebrow,
  title,
  titleId,
  lead,
  actions,
  surface = "light",
  compact,
}: StatementBandProps) {
  return (
    <Surface variant={surface} compact={compact} aria-labelledby={titleId}>
      <div className="section-kit-statement">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 id={titleId} className="section-headline">
          {title}
        </h2>
        {lead ? <p className="section-kit-lead">{lead}</p> : null}
        {actions ? <div className="section-kit-actions">{actions}</div> : null}
      </div>
    </Surface>
  );
}
