import { NextResponse } from "next/server";
import { verifyturnstile, saveToSanity, sendAdminEmail, emailTable } from "@/lib/formHandler";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { turnstileToken, ...formData } = body;
    const valid = await verifyturnstile(turnstileToken);
    if (!valid) return NextResponse.json({ error: "Bot verification failed" }, { status: 400 });
    await saveToSanity("contactMessage", formData);
    await sendAdminEmail(`Contact: ${formData.name} — ${formData.subject}`, emailTable({ Name: formData.name, Email: formData.email, Phone: formData.phone, Subject: formData.subject, Message: formData.message }));
    return NextResponse.json({ success: true });
  } catch (err) { console.error(err); return NextResponse.json({ error: "Submission failed" }, { status: 500 }); }
}
