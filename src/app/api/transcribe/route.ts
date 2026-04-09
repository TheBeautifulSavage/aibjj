import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const audio = formData.get("audio") as File;

    if (!audio) {
      return NextResponse.json({ error: "No audio file provided" }, { status: 400 });
    }

    if (audio.size < 1000) {
      return NextResponse.json({ error: "Audio too short" }, { status: 400 });
    }

    // Determine file extension from type or name
    const type = audio.type || "audio/webm";
    let filename = audio.name || "recording.webm";
    if (!filename.includes(".")) {
      if (type.includes("mp4") || type.includes("m4a")) filename = "recording.m4a";
      else if (type.includes("ogg")) filename = "recording.ogg";
      else if (type.includes("wav")) filename = "recording.wav";
      else filename = "recording.webm";
    }

    // Forward to OpenAI Whisper
    const whisperForm = new FormData();
    whisperForm.append("file", audio, filename);
    whisperForm.append("model", "whisper-1");
    whisperForm.append("language", "en");
    whisperForm.append("response_format", "json");

    const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: whisperForm,
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Whisper API error:", response.status, err);
      return NextResponse.json({ error: "Transcription failed", details: err }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ text: data.text || "" });
  } catch (error) {
    console.error("Transcribe error:", error);
    return NextResponse.json({ error: "Failed to transcribe" }, { status: 500 });
  }
}
