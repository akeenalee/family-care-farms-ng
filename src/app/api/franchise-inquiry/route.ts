import { NextResponse } from "next/server";
import { verifyturnstile, saveToSanity, sendAdminEmail, emailTable } from "@/lib/formHandler";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { turnstileToken, ...formData } = body;
    const valid = await verifyturnstile(turnstileToken);
    if (!valid) return NextResponse.json({ error: "Bot verification failed" }, { status: 400 });
    await saveToSanity("franchiseInquiry", formData);
    await sendAdminEmail(`New Franchise Inquiry — ${formData.contactName} (${formData.country})`, emailTable({ Name: formData.contactName, Organisation: formData.organisation, Email: formData.email, Phone: formData.phone, Country: formData.country, State: formData.state, "Land Available": formData.landAvailable, Message: formData.message }));
    return NextResponse.json({ success: true });
  } catch (err) { console.error(err); return NextResponse.json({ error: "Submission failed" }, { status: 500 }); }
}
