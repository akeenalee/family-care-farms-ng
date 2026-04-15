import { NextResponse } from "next/server";
import { verifyturnstile, saveToSanity, sendAdminEmail, emailTable } from "@/lib/formHandler";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { turnstileToken, ...formData } = body;
    const valid = await verifyturnstile(turnstileToken);
    if (!valid) return NextResponse.json({ error: "Bot verification failed" }, { status: 400 });
    await saveToSanity("partnerInquiry", formData);
    await sendAdminEmail(`New Partner Inquiry — ${formData.contactName} (${formData.partnerType})`, emailTable({ Name: formData.contactName, Organisation: formData.organisation, Email: formData.email, Phone: formData.phone, "Partner Type": formData.partnerType, Message: formData.message }));
    return NextResponse.json({ success: true });
  } catch (err) { console.error(err); return NextResponse.json({ error: "Submission failed" }, { status: 500 }); }
}
