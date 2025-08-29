import { promises as fs } from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "@/components/CodeBlock";

interface TutorialPageProps {
  params: {
    slug: string;
  };
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "Note", `${slug}.md`);
  const fileContents = await fs.readFile(filePath, "utf8");

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({
            inline,
            className,
            children,
            ...props
          }: React.ComponentProps<"code"> & {
            inline?: boolean;
          }) {
            return (
              <CodeBlock inline={inline} className={className} {...props}>
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

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const notesDirectory = path.join(process.cwd(), "Note");
  const filenames = await fs.readdir(notesDirectory);
  const mdFiles = filenames.filter((file) => file.endsWith(".md"));

  return mdFiles
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(".md", "").trim();
      return slug ? { slug } : null;
    })
    .filter((item): item is { slug: string } => item !== null);
}
