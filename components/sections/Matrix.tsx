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
  /** header for the row-label column (defaults to "Consideration") */
  rowHeader?: string;
  /** accessible name for the scroll region + table */
  caption?: string;
  surface?: SurfaceVariant;
  compact?: boolean;
};

const MARK: Record<MatrixMark, { label: string; d: string; cls: string }> = {
  yes: { label: "Yes", d: "M20 6L9 17l-5-5", cls: "mk--yes" },
  no: { label: "No", d: "M6 6l12 12M18 6L6 18", cls: "mk--no" },
  partial: { label: "Partial", d: "M5 12h14", cls: "mk--partial" },
};

const isMark = (v: MatrixCell): v is MatrixMark => v === "yes" || v === "no" || v === "partial";

export function Matrix({
  eyebrow,
  title,
  titleId,
  columns,
  rows,
  highlightColumn,
  rowHeader,
  caption,
  surface = "default",
  compact,
}: MatrixProps) {
  return (
    <Surface variant={surface} compact={compact} aria-labelledby={title ? titleId : undefined}>
      {title ? (
        <div className="svcd-sec-head">
          {eyebrow ? <span className="svcd-eyebrow">{eyebrow}</span> : null}
          <h2 id={titleId}>{title}</h2>
        </div>
      ) : null}
      <div className="matrix-scroll" role="region" aria-label={caption ?? "Comparison table"} tabIndex={0}>
        <table className="matrix">
          {caption ? <caption className="sr-only">{caption}</caption> : null}
          <thead>
            <tr>
              <th scope="col" className="matrix__corner">
                {rowHeader ?? "Consideration"}
              </th>
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
                      /* The label is VISIBLE, not sr-only: an icon alone forces sighted readers to
                         decode a legend, and colour is not the only cue. */
                      <span className={`mk ${MARK[cell].cls}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
                          <path d={MARK[cell].d} />
                        </svg>
                        {MARK[cell].label}
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
