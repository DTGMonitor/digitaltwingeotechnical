import type { ReactNode } from "react";
import { Surface, type SurfaceVariant } from "./Surface";

/**
 * Sequenced process (e.g. Integrate → Govern → Decide). Numbering is shown only
 * when the content is genuinely a sequence — pass `numbered` deliberately.
 */
export type ProcessStep = {
  title: ReactNode;
  body?: ReactNode;
};

export type ProcessStepsProps = {
  eyebrow?: ReactNode;
  title?: ReactNode;
  titleId?: string;
  steps: ProcessStep[];
  numbered?: boolean;
  surface?: SurfaceVariant;
  compact?: boolean;
};

export function ProcessSteps({
  eyebrow,
  title,
  titleId,
  steps,
  numbered = false,
  surface = "default",
  compact,
}: ProcessStepsProps) {
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
      <ol className="section-kit-steps" role="list">
        {steps.map((step, i) => (
          <li className="section-kit-item" key={i}>
            {numbered ? (
              <span className="section-kit-step__index tnum">
                {String(i + 1).padStart(2, "0")}
              </span>
            ) : null}
            <h3>{step.title}</h3>
            {step.body ? <p>{step.body}</p> : null}
          </li>
        ))}
      </ol>
    </Surface>
  );
}
