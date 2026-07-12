import type { ReactNode } from "react";
import { Surface, type SurfaceVariant } from "./Surface";

/**
 * DTG Focus module — a contained, clearly subordinate feature block using the
 * Focus steel-teal sub-family. Keep it framed as one capability that supports
 * DTG's independent positioning; never as the centre of the page (masterbook).
 */
export type FocusModuleProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  titleId?: string;
  body?: ReactNode;
  /** the five functional pillars, or any supporting list */
  pillars?: ReactNode[];
  actions?: ReactNode;
  /** the outer section surface the contained module sits on */
  surface?: SurfaceVariant;
  compact?: boolean;
};

export function FocusModule({
  eyebrow,
  title,
  titleId,
  body,
  pillars,
  actions,
  surface = "default",
  compact,
}: FocusModuleProps) {
  return (
    <Surface variant={surface} compact={compact} aria-labelledby={titleId}>
      <div className="section-kit-focus">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 id={titleId} className="section-headline">
          {title}
        </h2>
        {body ? <div className="section-kit-lead">{body}</div> : null}
        {pillars && pillars.length > 0 ? (
          <ul className="section-kit-grid" role="list">
            {pillars.map((pillar, i) => (
              <li className="section-kit-item" key={i}>
                <span className="section-kit-tag tnum">{String(i + 1).padStart(2, "0")}</span>
                <h3>{pillar}</h3>
              </li>
            ))}
          </ul>
        ) : null}
        {actions ? <div className="section-kit-actions">{actions}</div> : null}
      </div>
    </Surface>
  );
}
