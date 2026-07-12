import type { ElementType, ReactNode } from "react";

/**
 * Section surface primitive (masterbook light / deep-teal / image-led).
 * Phase A scaffolding for the shared section kit — not yet adopted by pages.
 *
 * Theme-aware (consumes the --c-* layer; dark by default, light under [data-theme=light]).
 * - `default` → the base reading surface (`--c-surface`)
 * - `raised`  → cards / panels (`--c-surface-raised`)
 * - `band`    → deep-teal authority band (`--c-surface-band`) — intentional punctuation
 * - `deep`    → footer/menu-grade deep base (`--c-surface-deep`)
 * - `image`   → image-led; pass `media` (e.g. a filled next/image) and prefer
 *               `reserve` to keep a text-safe column instead of a dark overlay.
 */
export type SurfaceVariant = "default" | "raised" | "band" | "deep" | "image";

const surfaceClass: Record<SurfaceVariant, string> = {
  default: "surface-default",
  raised: "surface-raised",
  band: "surface-band",
  deep: "surface-deep",
  image: "surface-image",
};

export type SurfaceProps = {
  variant?: SurfaceVariant;
  compact?: boolean;
  /** image variant only: the media layer sitting behind the content */
  media?: ReactNode;
  /** image variant only: reserve a text-safe column rather than overlay the image */
  reserve?: boolean;
  /** wrap children in `.site-container` (default true) */
  container?: boolean;
  as?: ElementType;
  id?: string;
  className?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  children: ReactNode;
};

export function Surface({
  variant = "default",
  compact = false,
  media,
  reserve = false,
  container = true,
  as: Tag = "section",
  id,
  className,
  children,
  ...aria
}: SurfaceProps) {
  const classes = [
    "site-section",
    compact ? "section-compact" : null,
    surfaceClass[variant],
    variant === "image" && reserve ? "surface-image--reserve" : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = container ? <div className="site-container">{children}</div> : children;

  if (variant === "image") {
    return (
      <Tag id={id} className={classes} {...aria}>
        <div className="surface-image__media" aria-hidden={media ? undefined : true}>
          {media}
        </div>
        <div className="surface-image__content">{inner}</div>
      </Tag>
    );
  }

  return (
    <Tag id={id} className={classes} {...aria}>
      {inner}
    </Tag>
  );
}
