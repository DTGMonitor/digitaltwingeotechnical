"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Minimal motion island (Phase C) — ONLY metric count-ups (`[data-count]`) and
 * spine/diagram SVG path-draw. General `.fade-up` reveals are handled kit-native
 * by CSS (see globals.css). Everything is disabled under prefers-reduced-motion.
 *
 * Note: the current homepage renders none of these targets yet (proof metrics are
 * static, no live SVG diagram), so this island is dormant until count-ups/diagrams
 * are deliberately wired — kept minimal on purpose.
 */
export function StoryMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Metric count-ups
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count || 0);
        const suffix = el.dataset.suffix || "";
        if (!suffix && target === 0 && el.textContent?.trim() !== "0") return;
        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
          onUpdate: () => {
            const rounded = Math.round(obj.value);
            el.textContent = target >= 1000 ? rounded.toLocaleString() + suffix : rounded + suffix;
          },
        });
      });

      // Spine / diagram SVG path-draw
      const diagram = document.querySelector<HTMLElement>(".data-decision-diagram");
      if (diagram) {
        const prime = (path: SVGPathElement) => {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        };
        const paths = [
          ...diagram.querySelectorAll<SVGPathElement>(".input-line"),
          ...diagram.querySelectorAll<SVGPathElement>(".output-line"),
        ];
        paths.forEach(prime);
        gsap.to(paths, {
          strokeDashoffset: 0,
          duration: 1.3,
          ease: "power2.inOut",
          stagger: 0.07,
          scrollTrigger: { trigger: diagram, start: "top 74%", once: true },
          onComplete: () => gsap.set(paths, { clearProps: "strokeDasharray,strokeDashoffset" }),
        });
      }

      const line = document.querySelector<SVGPathElement>(".convergence-line, .methodology-line");
      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: { trigger: line, start: "top 78%", once: true },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
