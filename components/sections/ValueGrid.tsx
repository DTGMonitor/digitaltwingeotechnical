import type { ReactNode } from "react";
import { Surface, type SurfaceVariant } from "./Surface";

/** Capability / value grid built from space + tone (no boxed cell walls). */
export type ValueGridItem = {
  title: ReactNode;
  body?: ReactNode;
  /** optional technical microdata tag (rendered in mono) */
  tag?: ReactNode;
  icon?: ReactNode;
};

export type ValueGridProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  titleId?: string;
  items: ValueGridItem[];
  surface?: SurfaceVariant;
  compact?: boolean;
};

export function ValueGrid({
  eyebrow,
  title,
  titleId,
  items,
  surface = "default",
  compact,
}: ValueGridProps) {
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
      <ul className="section-kit-grid" role="list">
        {items.map((item, i) => (
          <li className="section-kit-item" key={i}>
            {item.tag ? <span className="section-kit-tag">{item.tag}</span> : null}
            {item.icon ? <span aria-hidden="true">{item.icon}</span> : null}
            <h3>{item.title}</h3>
            {item.body ? <p>{item.body}</p> : null}
          </li>
        ))}
      </ul>
    </Surface>
  );
}
