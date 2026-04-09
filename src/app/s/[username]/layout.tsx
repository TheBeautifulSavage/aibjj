import type { Metadata } from "next";
import { db as prisma } from "@/lib/db";
import { getTemplate } from "@/lib/creator-templates";

interface Props {
  params: Promise<{ username: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }): Promise<Metadata> {
  const { username } = await params;
  const creator = await prisma.user.findUnique({
    where: { username },
    select: { name: true, academyName: true, bio: true },
  });

  if (!creator) {
    return { title: "Creator Not Found" };
  }

  const title = creator.academyName || creator.name || username;
  return {
    title: `${title} — BJJ Courses & Instruction`,
    description: creator.bio || `Training courses and instruction by ${title}`,
    openGraph: {
      title: `${title} — BJJ Courses & Instruction`,
      description: creator.bio || `Training courses and instruction by ${title}`,
    },
  };
}

export default async function CreatorSubdomainLayout({ params, children }: Props) {
  const { username } = await params;
  const creator = await prisma.user.findUnique({
    where: { username },
    select: { templateId: true },
  });

  const template = getTemplate(creator?.templateId);
  const isLight = template.id === "LIGHT_CLEAN";

  return (
    <div className={`min-h-screen ${template.bgColor} ${template.textColor} ${template.fontStyle}`}>
      <style dangerouslySetInnerHTML={{ __html: isLight ? `
        :root {
          --background: 0 0% 100%;
          --foreground: 0 0% 9%;
          --card: 0 0% 100%;
          --card-foreground: 0 0% 9%;
          --border: 0 0% 90%;
          color-scheme: light;
        }
      ` : "" }} />
      {children}
    </div>
  );
}
