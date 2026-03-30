export type VideoType = "youtube" | "vimeo" | "drive" | "direct" | "unknown";

export interface VideoEmbed {
  type: VideoType;
  embedUrl: string;
  videoId?: string;
}

export function getVideoEmbed(url: string): VideoEmbed {
  if (!url || !url.trim()) {
    return { type: "unknown", embedUrl: "" };
  }

  const trimmed = url.trim();

  // YouTube
  const ytMatch = trimmed.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch) {
    return {
      type: "youtube",
      embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}?rel=0&modestbranding=1`,
      videoId: ytMatch[1],
    };
  }

  // Vimeo
  const vimeoMatch = trimmed.match(
    /(?:vimeo\.com\/(?:video\/)?|player\.vimeo\.com\/video\/)(\d+)/
  );
  if (vimeoMatch) {
    return {
      type: "vimeo",
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?title=0&byline=0&portrait=0`,
      videoId: vimeoMatch[1],
    };
  }

  // Google Drive
  const driveMatch = trimmed.match(
    /drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)/
  );
  if (driveMatch) {
    return {
      type: "drive",
      embedUrl: `https://drive.google.com/file/d/${driveMatch[1]}/preview`,
      videoId: driveMatch[1],
    };
  }

  // Direct video URL (mp4, webm, mov, etc.)
  if (/\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i.test(trimmed) || trimmed.includes("dropbox.com")) {
    // Convert Dropbox share links to direct download
    let directUrl = trimmed;
    if (trimmed.includes("dropbox.com")) {
      directUrl = trimmed.replace("dl=0", "dl=1").replace("www.dropbox.com", "dl.dropboxusercontent.com");
    }
    return {
      type: "direct",
      embedUrl: directUrl,
    };
  }

  // If nothing matched but it looks like a URL, try as direct
  if (trimmed.startsWith("http")) {
    return { type: "direct", embedUrl: trimmed };
  }

  return { type: "unknown", embedUrl: "" };
}

export function getVideoThumbnail(url: string): string | null {
  const embed = getVideoEmbed(url);
  if (embed.type === "youtube" && embed.videoId) {
    return `https://img.youtube.com/vi/${embed.videoId}/hqdefault.jpg`;
  }
  return null;
}

export function formatDuration(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (hrs > 0) {
    return `${hrs}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
