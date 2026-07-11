import type { ElementType, ReactNode } from "react";

/**
 * Section surface primitive (masterbook light / deep-teal / image-led).
 * Phase A scaffolding for the shared section kit — not yet adopted by pages.
 *
 * - `light`  → off-white default reading surface (`--surface`)
 * - `band`   → deep-teal authority band (`--deep-teal`) — intentional punctuation
 * - `base`   → footer/menu-grade deep base (`--deep-base`)
 * - `image`  → image-led; pass `media` (e.g. a filled next/image) and prefer
 *              `reserve` to keep a text-safe column instead of a dark overlay.
 */
export type SurfaceVariant = "light" | "band" | "base" | "image";

const surfaceClass: Record<SurfaceVariant, string> = {
  light: "surface-light",
  band: "surface-band",
  base: "surface-base",
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
  variant = "light",
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
