import type { ReactNode } from "react";

/**
 * Leadership profile card. Shows a portrait when provided, otherwise a monogram
 * fallback (initials on the Focus steel-teal). Not a Surface itself — place inside
 * a section (e.g. a `.profile-grid` within a Surface).
 */
export type ProfileCardProps = {
  name: string;
  role: ReactNode;
  bio?: ReactNode;
  /** a filled next/image (or similar); when omitted a monogram is rendered */
  portrait?: ReactNode;
  tags?: ReactNode[];
};

function monogram(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function ProfileCard({ name, role, bio, portrait, tags }: ProfileCardProps) {
  return (
    <article className="profile">
      <div className="profile__media">
        {portrait ?? (
          <span className="profile__monogram" aria-hidden="true">
            {monogram(name)}
          </span>
        )}
      </div>
      <div className="profile__body">
        <h3 className="profile__name">{name}</h3>
        <p className="profile__role">{role}</p>
        {bio ? <div className="profile__bio">{bio}</div> : null}
        {tags && tags.length > 0 ? (
          <ul className="profile__tags" role="list">
            {tags.map((tag, i) => (
              <li key={i} className="section-kit-tag">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
