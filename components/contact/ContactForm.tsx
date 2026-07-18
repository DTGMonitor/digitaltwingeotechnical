"use client";

/**
 * The briefing form — rendered as the numbered stages of the .ab-how band device.
 * Each field IS a stage (01–04) with an outlined numeral, per the Contact brief §4.
 *
 * STATES (the mockup is the spec): default → loading → success (in-place swap) | error (inline).
 * The error state is REQUIRED to be visible and to preserve what the user typed — a silent
 * failure is a spec violation. That is why the fetch failure path never clears state and never
 * swaps the form out: only a 200 does.
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";
type FieldKey = "name" | "email" | "context";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [invalid, setInvalid] = useState<Record<FieldKey, boolean>>({
    name: false,
    email: false,
    context: false,
  });

  // Controlled so that an error NEVER costs the user their text — the brief calls data loss
  // on failure a spec violation, and an uncontrolled form that unmounts would do exactly that.
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [context, setContext] = useState("");
  // Honeypot: a real person never fills this (it is off-screen and aria-hidden); a bot fills
  // every field it finds. Server-side check rejects silently with a 200 so bots learn nothing.
  const [company, setCompany] = useState("");

  const errorRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  // Focus moves in an EFFECT, not in the submit handler. The handler runs before React commits
  // the new state, so the error/success node does not exist yet — a requestAnimationFrame there
  // silently no-ops (caught by the keyboard QA pass: role="alert" rendered but never took focus).
  useEffect(() => {
    if (status === "error") errorRef.current?.focus();
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function validate() {
    const next: Record<FieldKey, boolean> = {
      name: !name.trim(),
      email: !email.trim() || !EMAIL_RE.test(email),
      context: !context.trim(),
    };
    setInvalid(next);
    const firstBad = (["name", "email", "context"] as FieldKey[]).find((k) => next[k]);
    if (firstBad) {
      document.getElementById(firstBad)?.focus();
      return false;
    }
    return true;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return; // no double-submit
    setStatus("idle");
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, organisation, email, context, company }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setName("");
    setOrganisation("");
    setEmail("");
    setContext("");
    setCompany("");
    setInvalid({ name: false, email: false, context: false });
    setStatus("idle");
    // Safe here: the form is already mounted when resetting from the success view, but the
    // success block unmounts in the same commit — defer one frame so focus lands on the input.
    requestAnimationFrame(() => nameRef.current?.focus());
  }

  if (status === "success") {
    return (
      <div className="cx-success" ref={successRef} tabIndex={-1} aria-live="polite">
        <span className="cx-eyebrow">Received</span>
        <h3>Briefing received</h3>
        <p>
          It&rsquo;s on its way to DTG — read by the team, answered by email.{" "}
          <b>No autoresponder, no queue.</b>
        </p>
        <p className="cx-success__fallback">
          Forgot something? Email <a href="mailto:info@dtgeotech.com">info@dtgeotech.com</a> and
          mention your name.
        </p>
        <div className="cx-success__links">
          <Link className="cx-success__go" href="/dtg-focus">
            While you wait, explore DTG Focus&trade;{" "}
            <span className="cx-success__arr" aria-hidden="true">
              &rarr;
            </span>
          </Link>
          <button type="button" className="cx-success__again" onClick={reset}>
            Send another briefing
          </button>
        </div>
      </div>
    );
  }

  const loading = status === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={`cx-stage${invalid.name ? " is-invalid" : ""}`}>
        <span className="cx-stage__n" aria-hidden="true">
          01
        </span>
        <div>
          <label htmlFor="name">Name</label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={invalid.name || undefined}
            aria-describedby={invalid.name ? "name-error" : undefined}
          />
          {invalid.name ? (
            <p className="cx-stage__err" id="name-error">
              Add your name so we know who&rsquo;s writing
            </p>
          ) : null}
        </div>
      </div>

      <div className="cx-stage">
        <span className="cx-stage__n" aria-hidden="true">
          02
        </span>
        <div>
          <label htmlFor="org">
            Organisation <span className="cx-stage__opt">optional</span>
          </label>
          <input
            type="text"
            id="org"
            name="organisation"
            autoComplete="organization"
            placeholder="Company, site or consultancy"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
          />
        </div>
      </div>

      <div className={`cx-stage${invalid.email ? " is-invalid" : ""}`}>
        <span className="cx-stage__n" aria-hidden="true">
          03
        </span>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={invalid.email || undefined}
            aria-describedby={invalid.email ? "email-error" : "email-hint"}
          />
          <p className="cx-stage__hint" id="email-hint">
            Replies come here
          </p>
          {invalid.email ? (
            <p className="cx-stage__err" id="email-error">
              We need a working email to reply to
            </p>
          ) : null}
        </div>
      </div>

      <div className={`cx-stage${invalid.context ? " is-invalid" : ""}`}>
        <span className="cx-stage__n" aria-hidden="true">
          04
        </span>
        <div>
          <label htmlFor="context">Your monitoring context</label>
          <textarea
            id="context"
            name="context"
            rows={4}
            placeholder="What you're watching, what it's doing, and the decision it needs to support"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            aria-invalid={invalid.context || undefined}
            aria-describedby={invalid.context ? "context-error" : undefined}
          />
          {invalid.context ? (
            <p className="cx-stage__err" id="context-error">
              A sentence or two is all we need to start
            </p>
          ) : null}
        </div>
      </div>

      {/* Honeypot — visually and programmatically hidden from people, present for bots. */}
      <div className="cx-hp" aria-hidden="true">
        <label htmlFor="company">Company (leave blank)</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {status === "error" ? (
        <div className="cx-formerr" ref={errorRef} role="alert" tabIndex={-1}>
          <strong>Your briefing didn&rsquo;t send</strong>
          Nothing you wrote has been lost. Try again, or email{" "}
          <a href="mailto:info@dtgeotech.com">info@dtgeotech.com</a> directly.
        </div>
      ) : null}

      <div className="cx-submitrow">
        <button type="submit" className="cx-submit" disabled={loading} aria-busy={loading}>
          {loading ? <span className="cx-submit__spinner" aria-hidden="true" /> : null}
          <span>{loading ? "Sending…" : "Send briefing"}</span>
        </button>
        <p className="cx-privacy">
          Handled as described in our <Link href="/privacy">privacy policy</Link>
        </p>
      </div>
    </form>
  );
}
