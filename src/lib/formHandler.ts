import { sanityWriteClient } from "@/sanity/lib/client";

export async function verifyturnstile(token: string): Promise<boolean> {
  if (!token) {
    console.error("Turnstile: no token provided");
    return false;
  }
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || secret === "placeholder") {
    console.error("Turnstile: secret key missing or placeholder — bypassing in dev");
    return true; // allow through if secret not configured
  }
  try {
    // Turnstile requires form-encoded body, not JSON
    const formData = new URLSearchParams();
    formData.append("secret", secret);
    formData.append("response", token);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });
    const data = await res.json();
    console.log("Turnstile verify result:", JSON.stringify(data));
    return data.success === true;
  } catch (e) {
    console.error("Turnstile verify error:", e);
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
