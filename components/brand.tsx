import { Fragment, type ReactNode } from "react";

const FOCUS_TOKEN = "DTG Focus(TM)";
const FOCUS_PATTERN =
  /DTG Focus(?:\u2122|\u00e2\u201e\u00a2|\u00c3\u00a2\u00e2\u20ac\u017e\u00c2\u00a2|&trade;| TM)?/g;

export function DTGFocusMark({ className = "" }: { className?: string }) {
  return (
    <span className={`dtg-focus-mark ${className}`.trim()}>
      DTG Focus<sup className="trademark">&trade;</sup>
    </span>
  );
}

export function renderTrademarkText(text: string): ReactNode {
  const normalized = text.replace(FOCUS_PATTERN, FOCUS_TOKEN);
  const parts = normalized.split(FOCUS_TOKEN);

  if (parts.length === 1) return normalized;

  return parts.map((part, index) => (
    <Fragment key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 ? <DTGFocusMark /> : null}
    </Fragment>
  ));
}
