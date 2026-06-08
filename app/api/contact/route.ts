import { NextResponse } from "next/server";
import { getStore } from "@netlify/blobs";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- Recipients & sender ----------------------------------------------------
const RECIPIENTS = [
  "support@hopecareglobal.org",
  "petrinaharrison80@gmail.com",
];

// FROM_EMAIL must be on a domain you have verified inside Resend.
// Until petrinaharrison.com is verified, fall back to Resend's sandbox sender
// (onboarding@resend.dev) which works without verification but can only send
// to the account owner's email. Once the domain is verified, set FROM_EMAIL
// to e.g. "Dr. Petrina Harrison <hello@petrinaharrison.com>" in Netlify env.
const FROM_EMAIL =
  process.env.FROM_EMAIL ||
  "Dr. Petrina Harrison <onboarding@resend.dev>";

// --- Helpers ----------------------------------------------------------------
type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  comment?: string;
  // honeypot field – real users leave this blank
  website?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

// --- Route handler ----------------------------------------------------------
export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const comment = (body.comment || "").trim();
  const trap = (body.website || "").trim();

  // Honeypot — silently succeed so bots think it worked.
  if (trap) {
    return NextResponse.json({ ok: true });
  }

  // Validation
  if (!name || name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Please share your name." },
      { status: 400 }
    );
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please share a valid email address." },
      { status: 400 }
    );
  }
  if (comment.length > 5000 || name.length > 200 || phone.length > 60) {
    return NextResponse.json(
      { ok: false, error: "Submission exceeds size limits." },
      { status: 400 }
    );
  }

  const now = new Date();
  const id = `${now.toISOString()}-${Math.random().toString(36).slice(2, 10)}`;
  const submission = {
    id,
    receivedAt: now.toISOString(),
    name,
    email,
    phone,
    comment,
    userAgent: req.headers.get("user-agent") || null,
    ip:
      req.headers.get("x-nf-client-connection-ip") ||
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      null,
  };

  // --- 1. Persist to Netlify Blobs ---
  let stored = false;
  try {
    const store = getStore({ name: "contact-submissions", consistency: "strong" });
    await store.setJSON(id, submission);
    stored = true;
  } catch (e) {
    // Storage is best-effort; we still try to send the email.
    console.error("[contact] blob store error:", e);
  }

  // --- 2. Send email via Resend ---
  let emailed = false;
  let emailError: string | null = null;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    emailError =
      "RESEND_API_KEY env var is not set. Submission was saved but no email was sent.";
    console.warn("[contact]", emailError);
  } else {
    try {
      const resend = new Resend(apiKey);

      const subject = `New inquiry — ${name}`;
      const html = renderEmailHtml(submission);
      const text = renderEmailText(submission);

      const { error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: RECIPIENTS,
        replyTo: email,
        subject,
        html,
        text,
      });

      if (error) {
        emailError = error.message || "Unknown email send error";
        console.error("[contact] resend error:", error);
      } else {
        emailed = true;
      }
    } catch (e) {
      emailError = e instanceof Error ? e.message : "Unknown error";
      console.error("[contact] resend exception:", e);
    }
  }

  // If storage AND email both failed, treat it as a hard error.
  if (!stored && !emailed) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not record your message right now. Please email support@hopecareglobal.org directly.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    stored,
    emailed,
    ...(emailError && process.env.NODE_ENV !== "production"
      ? { emailError }
      : {}),
  });
}

// --- Email templates --------------------------------------------------------
function renderEmailHtml(s: {
  name: string;
  email: string;
  phone: string;
  comment: string;
  receivedAt: string;
  id: string;
}) {
  const row = (label: string, value: string) =>
    value
      ? `
      <tr>
        <td style="padding:10px 16px;background:#f7f0e4;color:#5a1f24;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:600;border-bottom:1px solid #efe5d2;vertical-align:top;width:140px;">${escapeHtml(label)}</td>
        <td style="padding:10px 16px;color:#2b1a16;font-size:15px;border-bottom:1px solid #efe5d2;">${escapeHtml(value).replace(/\n/g, "<br/>")}</td>
      </tr>`
      : "";

  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f7f0e4;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f7f0e4;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background:#fbf6ec;border-radius:16px;border:1px solid rgba(90,31,36,0.12);box-shadow:0 20px 50px -30px rgba(43,26,22,0.25);overflow:hidden;max-width:600px;width:100%;">
          <tr>
            <td style="padding:32px 32px 8px;text-align:center;">
              <div style="font-size:11px;letter-spacing:5px;color:#5a1f24;font-weight:600;text-transform:uppercase;font-family:Arial,sans-serif;">New Contact Inquiry</div>
              <h1 style="margin:14px 0 0;font-family:Georgia,'Hoefler Text',serif;font-size:32px;color:#3d1418;font-weight:500;letter-spacing:-0.5px;">
                <em style="font-weight:300;">From</em> ${escapeHtml(s.name)}
              </h1>
              <div style="margin-top:12px;font-size:13px;color:#5a4a44;font-style:italic;">
                ${new Date(s.receivedAt).toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
              </div>
              <div style="margin:18px auto 0;width:60px;height:1px;background:#5a1f24;opacity:0.4;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #efe5d2;border-radius:12px;overflow:hidden;">
                ${row("Name", s.name)}
                ${row("Email", s.email)}
                ${row("Phone", s.phone)}
                ${row("Message", s.comment)}
              </table>

              <div style="margin-top:24px;font-family:Arial,sans-serif;font-size:11px;color:#5a4a44;line-height:1.7;">
                <div>Submission ID: <code style="background:#efe5d2;padding:2px 6px;border-radius:4px;color:#3d1418;">${escapeHtml(s.id)}</code></div>
                <div style="margin-top:6px;">Reply to this email to respond directly to ${escapeHtml(s.name)}.</div>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 32px;background:#3d1418;color:#f7f0e4;text-align:center;">
              <div style="font-family:Georgia,serif;font-style:italic;font-size:14px;">
                Dr. Petrina N. Harrison &middot; <span style="color:#d6b27a;">No Woman Left Behind</span>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body></html>`;
}

function renderEmailText(s: {
  name: string;
  email: string;
  phone: string;
  comment: string;
  receivedAt: string;
  id: string;
}) {
  return [
    "NEW CONTACT INQUIRY — Dr. Petrina N. Harrison",
    "",
    `Received: ${s.receivedAt}`,
    `Name:     ${s.name}`,
    `Email:    ${s.email}`,
    s.phone ? `Phone:    ${s.phone}` : null,
    "",
    "Message:",
    s.comment || "(no message)",
    "",
    `Submission ID: ${s.id}`,
    "",
    "— No Woman Left Behind —",
  ]
    .filter(Boolean)
    .join("\n");
}
