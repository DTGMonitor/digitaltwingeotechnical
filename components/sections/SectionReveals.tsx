"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal island. Renders nothing — it only attaches an IntersectionObserver to
 * `[data-<attr>]` elements and adds `.is-in` as they enter view.
 *
 * Why an island rather than a "use client" directive on the page: it lets a content-heavy
 * template stay a SERVER component and still get the site's reveal behaviour, so only the
 * observer reaches the browser instead of the whole page's copy.
 *
 * Reduced motion is honoured by revealing everything immediately (never leave content
 * stranded at opacity:0 — the CSS also guards this, but a reader with JS disabled must
 * never lose the page, which is why `.is-in` is the additive state rather than the default).
 *
 * CONTENT-FIRST: on mount it adds `.reveals-armed` to <html>. Reveal CSS that hides content
 * (opacity:0) should be GATED on that class — `.reveals-armed [data-x-reveal] { opacity:0 }` —
 * so that if the JS never runs (error, disabled), the class is never added and the content is
 * simply visible. Never let a broken island hide a page. (Older families gate on nothing and
 * carry this latent risk; new pages should gate on `.reveals-armed`.)
 */
export function SectionReveals({ attr }: { attr: string }) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(`[data-${attr}]`));
    if (els.length === 0) return;
    document.documentElement.classList.add("reveals-armed");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [attr]);

  return null;
}
