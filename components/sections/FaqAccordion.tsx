import type { ReactNode } from "react";
import { Surface, type SurfaceVariant } from "./Surface";

/**
 * FAQ accordion built on native <details>/<summary> — keyboard-accessible with no
 * client JS, and no motion under prefers-reduced-motion. Server component.
 */
export type FaqItem = { question: ReactNode; answer: ReactNode };

export type FaqAccordionProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  titleId?: string;
  items: FaqItem[];
  surface?: SurfaceVariant;
  compact?: boolean;
};

export function FaqAccordion({
  eyebrow,
  title,
  titleId,
  items,
  surface = "default",
  compact,
}: FaqAccordionProps) {
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
      <div className="faq">
        {items.map((item, i) => (
          <details className="faq__item" key={i}>
            <summary className="faq__q">
              <span>{item.question}</span>
              <span className="faq__icon" aria-hidden="true" />
            </summary>
            <div className="faq__a">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </Surface>
  );
}
