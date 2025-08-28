import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "@/components/CodeBlock";

interface TutorialPageProps {
  params: {
    lang: string;
    slug: string;
  };
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { lang, slug } = params;
  const filePath = path.join(process.cwd(), "Note", lang, `${slug}.md`);
  const fileContents = await fs.readFile(filePath, "utf8");

  const { content, data } = matter(fileContents);
  const { title, description } = data as {
    title?: string;
    description?: string;
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1>{title || slug}</h1>
      {description && <p>{description}</p>}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{ code: CodeBlock }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export async function generateStaticParams(): Promise<
  { lang: string; slug: string }[]
> {
  const notesDirectory = path.join(process.cwd(), "Note");
  const languages = await fs.readdir(notesDirectory);

  const allParams: { lang: string; slug: string }[] = [];

  for (const lang of languages) {
    const langPath = path.join(notesDirectory, lang);
    const stat = await fs.stat(langPath);
    if (!stat.isDirectory()) continue;

    const files = await fs.readdir(langPath);
    const mdFiles = files.filter((file) => file.endsWith(".md"));

    mdFiles.forEach((file) => {
      allParams.push({
        lang,
        slug: file.replace(".md", ""),
      });
    });
  }

  return allParams;
}
