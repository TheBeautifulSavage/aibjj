export interface CreatorTemplate {
  id: string;
  name: string;
  description: string;
  bgColor: string;
  bgColorSecondary: string;
  accentColor: string;
  accentColorHover: string;
  textColor: string;
  textMuted: string;
  fontStyle: string;
  heroStyle: "centered" | "split" | "fullwidth";
  cardStyle: "rounded" | "sharp" | "bordered";
  cardBg: string;
  borderColor: string;
}

export const CREATOR_TEMPLATES: Record<string, CreatorTemplate> = {
  DARK_PRO: {
    id: "DARK_PRO",
    name: "Dark Pro",
    description: "Dark background, red accents — very BJJ/martial arts feel",
    bgColor: "bg-[#0a0a0a]",
    bgColorSecondary: "bg-[#111111]",
    accentColor: "bg-red-600",
    accentColorHover: "hover:bg-red-700",
    textColor: "text-white",
    textMuted: "text-zinc-400",
    fontStyle: "font-sans",
    heroStyle: "centered",
    cardStyle: "rounded",
    cardBg: "bg-zinc-900",
    borderColor: "border-zinc-800",
  },
  LIGHT_CLEAN: {
    id: "LIGHT_CLEAN",
    name: "Light Clean",
    description: "White/light gray, minimal — professional instructor look",
    bgColor: "bg-white",
    bgColorSecondary: "bg-gray-50",
    accentColor: "bg-zinc-900",
    accentColorHover: "hover:bg-zinc-800",
    textColor: "text-zinc-900",
    textMuted: "text-zinc-500",
    fontStyle: "font-sans",
    heroStyle: "split",
    cardStyle: "bordered",
    cardBg: "bg-white",
    borderColor: "border-gray-200",
  },
  BOLD_SPORT: {
    id: "BOLD_SPORT",
    name: "Bold Sport",
    description: "Black/gold, athletic — competition focused",
    bgColor: "bg-black",
    bgColorSecondary: "bg-zinc-950",
    accentColor: "bg-yellow-500",
    accentColorHover: "hover:bg-yellow-600",
    textColor: "text-white",
    textMuted: "text-zinc-400",
    fontStyle: "font-sans",
    heroStyle: "fullwidth",
    cardStyle: "sharp",
    cardBg: "bg-zinc-900",
    borderColor: "border-yellow-500/20",
  },
};

export const TEMPLATE_LIST = Object.values(CREATOR_TEMPLATES);

export function getTemplate(id: string | null | undefined): CreatorTemplate {
  return CREATOR_TEMPLATES[id || "DARK_PRO"] || CREATOR_TEMPLATES.DARK_PRO;
}
