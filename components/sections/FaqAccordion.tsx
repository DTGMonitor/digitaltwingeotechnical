import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { Surface, type SurfaceVariant } from "./Surface";

/**
 * FAQ accordion built on native <details>/<summary> — keyboard-accessible with no client JS.
 *
 * Pass `name` to make it an EXCLUSIVE accordion (opening one closes the others) via the native
 * <details name> attribute — no JS. Support: Chrome 120+ / Safari 17.2+ / Firefox 130+ (Baseline
 * ~2024). On older browsers it degrades to INDEPENDENT accordions — still fully functional and
 * keyboard-accessible, just not mutually exclusive — so no JS fallback is warranted.
 *
 * The plus icon rotates 45° into an × and fills green when open (CSS on [open]); reduced-motion
 * drops the transition. Heading uses the shared .svcd-sec-head so it matches every other section
 * head (Services matrix/tabs included).
 *
 * Shared by /about and, since the FAQ propagation, the Services template — the always-open
 * two-column .svcd-faq markup ServicePage used to hand-roll is retired in favour of this.
 */
export type FaqItem = { question: ReactNode; answer: ReactNode };

export type FaqAccordionProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  titleId?: string;
  items: FaqItem[];
  /** shared <details name> group → exclusive accordion. Omit for independent open/close. */
  name?: string;
  surface?: SurfaceVariant;
  compact?: boolean;
};

export function FaqAccordion({ eyebrow, title, titleId, items, name, surface = "default", compact }: FaqAccordionProps) {
  return (
    <Surface variant={surface} compact={compact} aria-labelledby={title ? titleId : undefined}>
      {title ? (
        <div className="svcd-sec-head">
          {eyebrow ? <span className="svcd-eyebrow">{eyebrow}</span> : null}
          <h2 id={titleId}>{title}</h2>
        </div>
      ) : null}
      <div className="faq">
        {items.map((item, i) => (
          <details className="faq__item" key={i} name={name}>
            <summary className="faq__q">
              <span className="faq__q-text">{item.question}</span>
              <span className="faq__plus" aria-hidden="true">
                <Plus size={13} strokeWidth={2.6} />
              </span>
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
