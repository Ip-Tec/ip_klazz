// ./app/tutorial/[lang]/[slug]/page.tsx
import path from "path";
import { existsSync } from "fs";
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

  // Get the file path of the tutorial file
  const filePath = path.join(process.cwd(), "Note", lang, `${slug}.md`);
  const fileContents = await fs.readFile(filePath, "utf8");

  // check if file exists
  if (!existsSync(filePath)) {
    return <div>File not found</div>;
  }

  return (
    <div className="max-w-[900px] mx-auto p-8">
      {/* display the tutorial content using ReactMarkdown */}
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
  // Get the directory of the notes
  const notesDirectory = path.join(process.cwd(), "Note");
  const languages = await fs.readdir(notesDirectory);

  // Get all language slugs
  const allParams: { lang: string; slug: string }[] = [];

  // Loop through each language
  for (const lang of languages) {
    const langPath = path.join(notesDirectory, lang);
    const stat = await fs.stat(langPath);
    if (!stat.isDirectory()) continue;

    // read all files in the language directory
    const files = await fs.readdir(langPath);
    const mdFiles = files.filter((file) => file.endsWith(".md"));
    
    // Loop through each markdown file
    mdFiles.forEach((file) => {
      allParams.push({
        lang,
        slug: file.replace(".md", ""),
      });
    });
  }

  return allParams;
}
