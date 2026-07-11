"use client";

import type { ReactNode } from "react";
import Link from "next/link";

type InternalHeroVariant = "default" | "environment" | "focus";
type BreadcrumbItem = {
  label: ReactNode;
  href?: string;
};

type InternalHeroProps = {
  label?: ReactNode;
  breadcrumbItems?: BreadcrumbItem[];
  title: ReactNode;
  subtitle?: ReactNode;
  copy?: ReactNode;
  intro?: ReactNode;
  titleId: string;
  variant?: InternalHeroVariant;
  visual?: ReactNode;
  actions?: ReactNode;
};

export function InternalHero({
  label,
  breadcrumbItems,
  title,
  subtitle,
  copy,
  intro,
  titleId,
  variant = "default",
  actions,
}: InternalHeroProps) {
  const introLead = subtitle;
  const introCopy = intro ?? (!subtitle ? copy : undefined);
  const hasIntroBand = Boolean(introLead || introCopy);
  const crumbs = breadcrumbItems?.length ? breadcrumbItems : label ? [{ label }] : [];

  return (
    <section className={`internal-hero internal-hero--${variant}`} aria-labelledby={titleId}>
      <div className="internal-hero__main">
        <div className="internal-hero__container">
          {crumbs.length ? (
            <nav className="internal-hero__breadcrumb" aria-label="Breadcrumb">
              {crumbs.map((item, index) => {
                const current = index === crumbs.length - 1;

                return (
                  <span key={`${String(item.label)}-${index}`}>
                    {item.href && !current ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
                  </span>
                );
              })}
            </nav>
          ) : null}
          <h1 id={titleId} className="internal-hero__title">
            {title}
          </h1>
          {actions ? <div className="internal-hero__actions">{actions}</div> : null}
        </div>
      </div>
      {hasIntroBand ? (
        <div className="internal-hero__intro-band">
          <div className="internal-hero__intro-container">
            {introLead ? <p className="internal-hero__intro-kicker">{introLead}</p> : null}
            {introCopy ? <p className="internal-hero__intro-copy">{introCopy}</p> : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
