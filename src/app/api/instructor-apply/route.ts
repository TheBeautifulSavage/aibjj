import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, belt, academy, specialty } = await req.json();

    if (!name || !email || !specialty) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Notify admin
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "hulljessej@gmail.com",
        subject: `New Instructor Application: ${name}`,
        text: `New instructor marketplace application.\n\nName: ${name}\nEmail: ${email}\nBelt: ${belt || "Not provided"}\nAcademy: ${academy || "Not provided"}\nSpecialty: ${specialty}`,
      });

      // Confirm to applicant
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "AIBJJ Instructor Application Received",
        text: `Hi ${name},\n\nThanks for applying to sell instructionals on AIBJJ!\n\nWe've received your application and will review it within 24 hours. Once approved, you'll get access to your instructor dashboard to upload your first instructional.\n\nWith AIBJJ, you keep 90% of every sale. We handle payments, hosting, and discovery.\n\nTrain hard,\nThe AIBJJ Team\nhttps://aibjj.com`,
      });
    } catch (emailError) {
      console.error("Email send error:", emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Instructor apply error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
