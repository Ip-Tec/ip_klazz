// ./app/tutorial/[lang]/[slug]/page.tsx
import path from "path";
import remarkGfm from "remark-gfm";
import { promises as fs } from "fs";
import ReactMarkdown from "react-markdown";
import CodeBlock from "@/components/CodeBlock";

interface TutorialPageProps {
  params: {
    lang: string;
    slug: string;
  };
}

// Get the file path of the tutorial file
export default async function TutorialPage({ params }: TutorialPageProps) {
  const { lang, slug } = params;

  const filePath = path.join(process.cwd(), "Note", lang, `${slug}.md`);
  const fileContents = await fs.readFile(filePath, "utf8");

  return (
    <div className="max-w-[900px] mx-auto p-8">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            return (
              <CodeBlock className={className} {...props}>
                {children}
              </CodeBlock>
            );
          },
        }}
      >
        {fileContents}
      </ReactMarkdown>
    </div>
  );
}


// Generate static params for dynamic routes
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
