import { sanityWriteClient } from "@/sanity/lib/client";

export async function verifyturnstile(token: string): Promise<boolean> {
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY || "placeholder",
        response: token,
      }),
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

export async function saveToSanity(type: string, data: Record<string, unknown>) {
  return sanityWriteClient.create({
    _type: type,
    submittedAt: new Date().toISOString(),
    ...data,
  });
}

export async function sendAdminEmail(subject: string, html: string) {
  // Lazy-import Resend to avoid module-level instantiation error at build time
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);
  return resend.emails.send({
    from: "Family Care Farms Nigeria <noreply@familycarefarmsinit.org>",
    to: process.env.ADMIN_EMAIL || "admin@familycarefarmsinit.org",
    subject,
    html,
  });
}

export function emailTable(data: Record<string, unknown>): string {
  const rows = Object.entries(data)
    .map(([k, v]) =>
      `<tr>
        <td style="padding:6px 12px;font-weight:600;color:#265a2b;white-space:nowrap;border-bottom:1px solid #eee">${k}</td>
        <td style="padding:6px 12px;color:#333;border-bottom:1px solid #eee">${v || "—"}</td>
      </tr>`
    )
    .join("");
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;border:1px solid #ddd;border-radius:4px;overflow:hidden">
      <div style="background:#1c3c1f;padding:20px 24px;color:white">
        <h2 style="margin:0;font-size:18px">Family Care Farms Initiatives Nigeria</h2>
        <p style="margin:4px 0 0;opacity:.7;font-size:13px">New form submission</p>
      </div>
      <table style="width:100%;border-collapse:collapse">
        <tbody>${rows}</tbody>
      </table>
      <div style="background:#f8f5ec;padding:12px 24px;font-size:12px;color:#666;border-top:1px solid #e0d8c8">
        Log in to Sanity Studio to manage this submission.
      </div>
    </div>
  `;
}
