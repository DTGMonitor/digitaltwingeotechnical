import { Fragment, type ReactNode } from "react";

const FOCUS_PATTERN = /DTG Focus(?:™|â„¢|&trade;| TM)?/g;

export function DTGFocusMark({ className = "" }: { className?: string }) {
  return (
    <span className={`dtg-focus-mark ${className}`.trim()}>
      DTG Focus<sup className="trademark">™</sup>
    </span>
  );
}

export function renderTrademarkText(text: string): ReactNode {
  const normalized = text.replace(FOCUS_PATTERN, "DTG Focus™");
  const parts = normalized.split("DTG Focus™");

  if (parts.length === 1) return normalized;

  return parts.map((part, index) => (
    <Fragment key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 ? <DTGFocusMark /> : null}
    </Fragment>
  ));
}
