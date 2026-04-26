import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Upsert into email_captures table
    const { error } = await supabase
      .from("email_captures")
      .upsert({ email, captured_at: new Date().toISOString() }, { onConflict: "email" });

    if (error) {
      console.error("[EMAIL_CAPTURE]", error);
      // Even if table doesn't exist yet, don't error out to the user
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[EMAIL_CAPTURE]", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
