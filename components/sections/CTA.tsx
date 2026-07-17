import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Surface, type SurfaceVariant } from "./Surface";

/**
 * Editorial pre-footer call to action. Deep-teal band; the ENTIRE band is the link
 * (asymmetric: large left-aligned type, action pinned bottom-right on the same baseline).
 *
 * Shared by /about and all five Services pages (via ServicePage). It is the ONLY CTA those
 * recomposed pages use — the legacy `components/ui.tsx` CTA on /focus /leadership /operations
 * is a separate component and is intentionally not touched here.
 *
 * Prior API took an `actions` node (a button link); this takes `href` + `actionLabel` so the
 * whole band can be one anchor. Both call sites already had the href/label to hand.
 */
export type CTAProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  titleId?: string;
  body?: ReactNode;
  href: string;
  actionLabel: ReactNode;
  surface?: SurfaceVariant;
};

export function CTA({ eyebrow, title, titleId, body, href, actionLabel, surface = "band" }: CTAProps) {
  return (
    <Surface variant={surface} container={false} aria-labelledby={titleId}>
      <a href={href} className="cta-link">
        <div className="cta-grid site-container">
          <div>
            {eyebrow ? <p className="eyebrow cta__eyebrow">{eyebrow}</p> : null}
            <h2 id={titleId} className="cta__title">
              {title}
            </h2>
            {body ? <p className="cta__body">{body}</p> : null}
          </div>
          <div className="cta-go">
            <span className="cta-go__label">{actionLabel}</span>
            <span className="cta-arrow" aria-hidden="true">
              <ArrowRight size={24} />
            </span>
          </div>
        </div>
      </a>
    </Surface>
  );
}
