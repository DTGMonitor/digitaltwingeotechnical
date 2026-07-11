import type { ReactNode } from "react";
import { Surface, type SurfaceVariant } from "./Surface";

/** Text column + media/figure (5/7 or 7/5), alternating side. */
export type EditorialSplitProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  titleId?: string;
  body?: ReactNode;
  actions?: ReactNode;
  media: ReactNode;
  /** put the media on the left (text on the right) */
  mediaLeft?: boolean;
  surface?: SurfaceVariant;
  compact?: boolean;
};

export function EditorialSplit({
  eyebrow,
  title,
  titleId,
  body,
  actions,
  media,
  mediaLeft = false,
  surface = "light",
  compact,
}: EditorialSplitProps) {
  return (
    <Surface variant={surface} compact={compact} aria-labelledby={titleId}>
      <div className="section-kit-split" data-flip={mediaLeft ? "true" : "false"}>
        <div className="section-kit-split__copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 id={titleId} className="section-headline">
            {title}
          </h2>
          {body ? <div className="section-kit-lead">{body}</div> : null}
          {actions ? <div className="section-kit-actions">{actions}</div> : null}
        </div>
        <div className="section-kit-split__media">{media}</div>
      </div>
    </Surface>
  );
}
