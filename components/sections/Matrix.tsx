import type { ReactNode } from "react";
import { Surface, type SurfaceVariant } from "./Surface";

/**
 * Comparison matrix / table archetype. Marks are shape-coded (check / cross / dash)
 * AND colour-coded, and carry a screen-reader label — so meaning never relies on colour
 * alone (WCAG). Horizontal-scrolls on narrow viewports. Green check uses --accent-text.
 */
export type MatrixMark = "yes" | "no" | "partial";
export type MatrixCell = MatrixMark | string;
export type MatrixRow = { label: ReactNode; cells: MatrixCell[] };

export type MatrixProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  titleId?: string;
  columns: ReactNode[];
  rows: MatrixRow[];
  /** index into `columns` to visually emphasise (e.g. the DTG column) */
  highlightColumn?: number;
  /** accessible name for the scroll region + table */
  caption?: string;
  surface?: SurfaceVariant;
  compact?: boolean;
};

const MARK: Record<MatrixMark, { label: string; d: string; cls: string }> = {
  yes: { label: "Yes", d: "M5 12l5 5L20 6", cls: "mk--yes" },
  no: { label: "No", d: "M6 6l12 12M18 6L6 18", cls: "mk--no" },
  partial: { label: "Partial", d: "M6 12h12", cls: "mk--partial" },
};

const isMark = (v: MatrixCell): v is MatrixMark => v === "yes" || v === "no" || v === "partial";

export function Matrix({
  eyebrow,
  title,
  titleId,
  columns,
  rows,
  highlightColumn,
  caption,
  surface = "default",
  compact,
}: MatrixProps) {
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
      <div className="matrix-scroll" role="region" aria-label={caption ?? "Comparison table"} tabIndex={0}>
        <table className="matrix">
          {caption ? <caption className="sr-only">{caption}</caption> : null}
          <thead>
            <tr>
              <td className="matrix__corner" />
              {columns.map((c, i) => (
                <th scope="col" key={i} className={highlightColumn === i ? "matrix__col--hl" : undefined}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r}>
                <th scope="row">{row.label}</th>
                {row.cells.map((cell, c) => (
                  <td key={c} className={highlightColumn === c ? "matrix__col--hl" : undefined}>
                    {isMark(cell) ? (
                      <span className={`mk ${MARK[cell].cls}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d={MARK[cell].d} />
                        </svg>
                        <span className="sr-only">{MARK[cell].label}</span>
                      </span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Surface>
  );
}
