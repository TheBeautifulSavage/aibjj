import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email, source = "site", intent = "free-training" } = await req.json();
    const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const payload = {
      email: normalizedEmail,
      source,
      intent,
      updatedAt: new Date().toISOString(),
    };

    const { error } = await supabase
      .from("EmailCapture")
      .upsert(payload, { onConflict: "email" });

    if (error) {
      console.error("[EMAIL_CAPTURE]", error);

      const { error: legacyError } = await supabase
        .from("email_captures")
        .upsert(
          {
            email: normalizedEmail,
            source,
            intent,
            captured_at: new Date().toISOString(),
          },
          { onConflict: "email" }
        );

      if (legacyError) {
        console.error("[EMAIL_CAPTURE_LEGACY]", legacyError);
        return NextResponse.json(
          { error: "Email capture storage is not available." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[EMAIL_CAPTURE]", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
