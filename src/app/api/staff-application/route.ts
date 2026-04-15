import { NextResponse } from "next/server";
import { verifyturnstile, saveToSanity, sendAdminEmail, emailTable } from "@/lib/formHandler";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { turnstileToken, ...formData } = body;
    const valid = await verifyturnstile(turnstileToken);
    if (!valid) return NextResponse.json({ error: "Bot verification failed" }, { status: 400 });
    await saveToSanity("staffApplication", formData);
    await sendAdminEmail(`New Staff Application — ${formData.fullName} (${formData.role})`, emailTable({ Name: formData.fullName, Email: formData.email, Phone: formData.phone, Role: formData.role, Experience: formData.experience, Location: formData.location, Motivation: formData.motivation }));
    return NextResponse.json({ success: true });
  } catch (err) { console.error(err); return NextResponse.json({ error: "Submission failed" }, { status: 500 }); }
}
