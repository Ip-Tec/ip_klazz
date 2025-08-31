// ./app/language/[lang]/page.tsx
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { extractSections } from "@/lib/markdownUtils";
import AccordionList from "@/components/AccordionList";

interface LanguagePageProps {
  params: {
    lang: string;
  };
}

export default async function LanguagePage({ params }: LanguagePageProps) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  const tocPath = path.join(
    process.cwd(),
    "Note",
    lang,
    "Table_Of_Contents.md"
  );

  try {
    const fileContents = await fs.readFile(tocPath, "utf8");
    const { content, data } = matter(fileContents);
    const { title, description } = data as {
      title?: string;
      description?: string;
    };

    const sections = extractSections(content);

    return (
      <div className="p-4 max-w-[900px] mx-auto">
        <h1 className="text-2xl font-bold my-2">
          {title || `${lang.toUpperCase()} Table Of Contents`}
        </h1>
        {description && <p>{description}</p>}
        <AccordionList sections={sections} language={lang} />
      </div>
    );
  } catch {
    return (
      <div className="p-4 max-w-[900px] mx-auto">
        <h1>{lang.toUpperCase()} Tutorials</h1>
        <p>
          No table of contents found. Please add a
          &apos;Table_Of_Contents.md&apos; file to the folder.
        </p>
      </div>
    );
  }
}
