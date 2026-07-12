import type { ReactNode } from "react";
import { Surface } from "./Surface";

/**
 * Shared hero archetype — generalises the home hero and InternalHero.
 * Variants: `image` (full-bleed + reserved negative space), `dark` (deep-teal
 * statement), `light` (editorial). Content and behaviour stay with the pages;
 * this only owns composition + surface. Phase A scaffold.
 */
export type SectionHeroVariant = "image" | "dark" | "light";

export type SectionHeroProps = {
  variant?: SectionHeroVariant;
  eyebrow?: ReactNode;
  title: ReactNode;
  titleId: string;
  lead?: ReactNode;
  actions?: ReactNode;
  /** image variant: media layer behind the copy (e.g. a filled next/image) */
  media?: ReactNode;
};

export function SectionHero({
  variant = "light",
  eyebrow,
  title,
  titleId,
  lead,
  actions,
  media,
}: SectionHeroProps) {
  const surface = variant === "image" ? "image" : variant === "dark" ? "band" : "default";

  return (
    <Surface
      variant={surface}
      media={variant === "image" ? media : undefined}
      reserve={variant === "image"}
      aria-labelledby={titleId}
    >
      <div className="section-kit-hero">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 id={titleId} className="section-hero__title">
          {title}
        </h1>
        {lead ? <p className="section-kit-lead">{lead}</p> : null}
        {actions ? <div className="section-kit-actions">{actions}</div> : null}
      </div>
    </Surface>
  );
}
