import { NextResponse } from "next/server";
import { sendEnquiry } from "@/lib/sendEnquiry";

/**
 * Contact enquiry endpoint.
 *
 * Replaces the old mailto: form, which depended on the visitor having a configured desktop mail
 * client and captured nothing on DTG's side — an enquiry that failed simply vanished.
 *
 * CONTRACT WITH THE UI: a non-200 MUST reach the user as the visible error state with their text
 * intact. Never "fail open" with a 200 on a send failure — a silent failure is worse than the old
 * mailto, because the user believes the briefing was sent.
 */

export const runtime = "nodejs";

const RECIPIENT = "info@dtgeotech.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX = { name: 200, organisation: 200, email: 320, context: 5000 };

/* Rate limit: in-memory, per-IP, fixed window. Deliberately simple — this runs on a single
   modest instance and the endpoint is low-volume. It resets on redeploy, which is acceptable
   for spam control but is NOT a security boundary; if the site moves to multi-instance hosting
   this needs a shared store (Redis/Upstash) or it will only limit per-instance. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  if (hits.size > 5000) {
    for (const [key, value] of hits) if (now > value.resetAt) hits.delete(key);
  }
  return entry.count > MAX_PER_WINDOW;
}

function clientIp(request: Request) {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const organisation = typeof body.organisation === "string" ? body.organisation.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const context = typeof body.context === "string" ? body.context.trim() : "";
  const honeypot = typeof body.company === "string" ? body.company.trim() : "";

  // Honeypot: accept and discard. Returning 200 means a bot gets no signal about why it failed;
  // returning an error would teach it to try again without the field.
  if (honeypot) return NextResponse.json({ ok: true });

  // Server-side validation — the client's checks are a courtesy, not a guarantee.
  if (!name || !email || !context || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }
  if (
    name.length > MAX.name ||
    organisation.length > MAX.organisation ||
    email.length > MAX.email ||
    context.length > MAX.context
  ) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 });
  }

  if (rateLimited(clientIp(request))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    await sendEnquiry({
      to: RECIPIENT,
      replyTo: email,
      subject: `Monitoring briefing — ${organisation || name}`,
      text: [
        `Name: ${name}`,
        `Organisation: ${organisation || "(not given)"}`,
        `Email: ${email}`,
        "",
        "Monitoring context:",
        context,
      ].join("\n"),
    });
  } catch (error) {
    // Logged server-side; the client gets a generic failure. The UI turns this into the visible
    // error state with the user's text preserved.
    console.error("[contact] send failed:", error);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
