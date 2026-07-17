"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Surface, type SurfaceVariant } from "./Surface";

/**
 * Accessible tabbed section (WAI-ARIA Tabs pattern). Roving tabindex + arrow / Home / End
 * keyboard navigation with automatic activation. No transform animation, so it is
 * reduced-motion-safe by construction.
 */
export type TabItem = { label: string; content: ReactNode };

export type TabsProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  titleId?: string;
  items: TabItem[];
  ariaLabel?: string;
  surface?: SurfaceVariant;
  compact?: boolean;
};

export function Tabs({ eyebrow, title, titleId, items, ariaLabel, surface = "default", compact }: TabsProps) {
  const [active, setActive] = useState(0);
  const base = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const last = items.length - 1;
    let next = active;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = active === last ? 0 : active + 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = active === 0 ? last : active - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = last;
        break;
      default:
        return;
    }
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <Surface variant={surface} compact={compact} aria-labelledby={title ? titleId : undefined}>
      {title ? (
        <div className="svcd-sec-head">
          {eyebrow ? <span className="svcd-eyebrow">{eyebrow}</span> : null}
          <h2 id={titleId}>{title}</h2>
        </div>
      ) : null}
      <div className="tabs">
        <div
          className="tabs__list"
          role="tablist"
          aria-label={ariaLabel ?? (typeof title === "string" ? title : "Tabs")}
          onKeyDown={onKeyDown}
        >
          {items.map((item, i) => (
            <button
              key={i}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${base}-tab-${i}`}
              aria-selected={active === i}
              aria-controls={`${base}-panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              className={`tabs__tab ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {item.label}
            </button>
          ))}
        </div>
        {items.map((item, i) => (
          <div
            key={i}
            role="tabpanel"
            id={`${base}-panel-${i}`}
            aria-labelledby={`${base}-tab-${i}`}
            hidden={active !== i}
            tabIndex={0}
            className="tabs__panel"
          >
            {item.content}
          </div>
        ))}
      </div>
    </Surface>
  );
}
