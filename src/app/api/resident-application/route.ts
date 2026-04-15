import { NextResponse } from "next/server";
import { verifyturnstile, saveToSanity, sendAdminEmail, emailTable } from "@/lib/formHandler";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { turnstileToken, ...formData } = body;

    const valid = await verifyturnstile(turnstileToken);
    if (!valid) {
      return NextResponse.json({ error: "Bot verification failed" }, { status: 400 });
    }

    await saveToSanity("residentApplication", formData);

    await sendAdminEmail(
      `New Resident Application — ${formData.residentName || "Unknown"}`,
      emailTable({
        "Resident Name": formData.residentName,
        "Resident Age": formData.residentAge,
        "Family Contact": formData.familyName,
        "Family Email": formData.familyEmail,
        "Family Phone": formData.familyPhone,
        "Location": formData.location,
        "Care Needs": formData.careNeeds,
        "Additional Info": formData.additionalInfo,
        "How Heard": formData.howHeard,
      })
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resident application error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
