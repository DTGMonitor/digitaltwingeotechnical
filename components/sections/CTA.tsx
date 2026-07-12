import type { ReactNode } from "react";
import { Surface, type SurfaceVariant } from "./Surface";

/** Editorial pre-footer call to action. Deep-teal band by default. */
export type CTAProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  titleId?: string;
  body?: ReactNode;
  actions?: ReactNode;
  surface?: SurfaceVariant;
};

export function CTA({ eyebrow, title, titleId, body, actions, surface = "band" }: CTAProps) {
  return (
    <Surface variant={surface} aria-labelledby={titleId}>
      <div className="cta">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 id={titleId} className="section-headline">
          {title}
        </h2>
        {body ? <p className="section-kit-lead">{body}</p> : null}
        {actions ? <div className="section-kit-actions">{actions}</div> : null}
      </div>
    </Surface>
  );
}
