import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Accordion from "@/components/Accordion";
import CodeBlock from "@/components/CodeBlock";

interface LanguagePageProps {
  params: {
    lang: string;
  };
}

export default async function LanguagePage({ params }: LanguagePageProps) {
  const { lang } = params;
  const tocPath = path.join(
    process.cwd(),
    "Note",
    lang,
    "table_of_contents.md"
  );

  try {
    const fileContents = await fs.readFile(tocPath, "utf8");
    const { content, data } = matter(fileContents);
    const { title, description } = data as {
      title?: string;
      description?: string;
    };

    return (
      <div className="p-4 max-w-[900px] mx-auto">
        <h1 className="text-2xl font-bold my-2">
          {title || `${lang.toUpperCase()} Tutorials`}
        </h1>
        {description && <p>{description}</p>}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code: CodeBlock,
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-gray-600 hover:text-gray-200 hover:bg-gray-700 p-2 rounded-md transition duration-200"
              >
                {children}
              </a>
            ),
            h1: ({ children }) => (
              <h1 className="text-xl font-bold my-2">{children}</h1>
            ),
            h2: ({ children }) => (
              <Accordion title={String(children)}>
                <h2 className="text-md font-bold my-2 bg-gray-200 rounded-md p-2">
                  {children}
                </h2>
              </Accordion>
            ),
            h3: ({ children }) => (
              <h3 className="text-md font-bold my-2">{children}</h3>
            ),
            ul: ({ children }) => (
              <ul className="list-outside ist-inside bg-gray-200 rounded-md p-2">
                {children}
              </ul>
            ),
            li: ({ children }) => <li className="my-2">{children}</li>,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-4 max-w-[900px] mx-auto">
        <h1>{lang.toUpperCase()} Tutorials</h1>
        <p>
          No table of contents found. Please add a `table_of_contents.md` file
          to the folder.
        </p>
      </div>
    );
  }
}
