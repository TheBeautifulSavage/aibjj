"use client";

import { useState, useRef, useCallback } from "react";
import { Mic, MicOff, Loader2 } from "lucide-react";

interface VoiceInputProps {
  onTranscript: (text: string) => void;
  disabled?: boolean;
}

export default function VoiceInput({ onTranscript, disabled }: VoiceInputProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [error, setError] = useState("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getMimeType = () => {
    // Prefer webm, fall back to mp4 (Safari), then ogg
    if (MediaRecorder.isTypeSupported("audio/webm;codecs=opus")) return "audio/webm;codecs=opus";
    if (MediaRecorder.isTypeSupported("audio/webm")) return "audio/webm";
    if (MediaRecorder.isTypeSupported("audio/mp4")) return "audio/mp4";
    if (MediaRecorder.isTypeSupported("audio/ogg")) return "audio/ogg";
    return "";
  };

  const startRecording = useCallback(async () => {
    setError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, sampleRate: 16000 },
      });

      const mimeType = getMimeType();
      const options = mimeType ? { mimeType } : {};
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        if (timerRef.current) clearInterval(timerRef.current);
        setRecordingSeconds(0);

        if (chunksRef.current.length === 0) {
          setError("No audio captured. Try again.");
          setIsProcessing(false);
          return;
        }

        const blob = new Blob(chunksRef.current, { type: mimeType || "audio/webm" });
        if (blob.size < 1000) {
          setError("Recording too short. Hold mic and speak.");
          setIsProcessing(false);
          return;
        }

        setIsProcessing(true);
        try {
          const ext = mimeType?.includes("mp4") ? "m4a" : mimeType?.includes("ogg") ? "ogg" : "webm";
          const form = new FormData();
          form.append("audio", blob, `recording.${ext}`);

          const res = await fetch("/api/transcribe", { method: "POST", body: form });
          const data = await res.json();

          if (data.text && data.text.trim()) {
            onTranscript(data.text.trim());
          } else {
            setError("Nothing detected. Speak clearly and try again.");
          }
        } catch {
          setError("Transcription failed. Check connection.");
        } finally {
          setIsProcessing(false);
        }
      };

      // Collect data every 500ms so we don't lose audio
      mediaRecorder.start(500);
      setIsRecording(true);
      setRecordingSeconds(0);

      // Show recording timer
      timerRef.current = setInterval(() => {
        setRecordingSeconds((s) => {
          if (s >= 59) {
            // Auto-stop at 60s
            stopRecording();
            return 60;
          }
          return s + 1;
        });
      }, 1000);

    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      if (msg.includes("Permission") || msg.includes("NotAllowed")) {
        setError("Mic access denied. Allow in browser settings.");
      } else {
        setError("Could not access microphone.");
      }
      console.error("Mic error:", e);
    }
  }, [onTranscript]); // eslint-disable-line react-hooks/exhaustive-deps

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, []);

  const handleClick = () => {
    if (isRecording) stopRecording();
    else startRecording();
  };

  if (isProcessing) {
    return (
      <div className="flex flex-col items-center gap-0.5">
        <button disabled className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-700 text-zinc-400">
          <Loader2 className="h-4 w-4 animate-spin" />
        </button>
        <span className="text-[9px] text-zinc-500">thinking...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-0.5">
      <button
        onClick={handleClick}
        disabled={disabled}
        title={isRecording ? "Tap to stop" : "Voice input"}
        className={`relative flex h-9 w-9 items-center justify-center rounded-lg transition-all ${
          isRecording
            ? "bg-red-600 text-white shadow-lg shadow-red-600/40 scale-110"
            : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:text-white"
        } disabled:opacity-40`}
      >
        {isRecording ? (
          <>
            {/* Pulsing ring */}
            <span className="absolute inset-0 rounded-lg animate-ping bg-red-500 opacity-30" />
            <MicOff className="h-4 w-4 relative" />
          </>
        ) : (
          <Mic className="h-4 w-4" />
        )}
      </button>
      {isRecording && (
        <span className="text-[9px] font-mono text-red-400">
          {String(Math.floor(recordingSeconds / 60)).padStart(1, "0")}:{String(recordingSeconds % 60).padStart(2, "0")}
        </span>
      )}
      {error && !isRecording && (
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] text-red-400">{error}</span>
      )}
    </div>
  );
}
