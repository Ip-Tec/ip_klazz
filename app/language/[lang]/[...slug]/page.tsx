// ./app/language/[lang]/[...slug]/page.tsx
import path from "path";
import { promises as fs } from "fs";
import matter from "gray-matter";
import { extractSections } from "@/lib/markdownUtils";
import AccordionList from "@/components/AccordionList";
import OfflineDashboard from "@/components/OfflineDashboard";
import ClientSaver from "@/components/ClientSaver";
import OfflineMarkdownLoader from "@/components/OfflineMarkdownLoader";
import ProtectedContent from "@/components/ProtectedContent";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";
import Image from "next/image";
import SocialShare from "@/components/SocialShare";

interface PageProps {
  params: Promise<{
    lang: string;
    slug: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const fullSlug = slug.join("/");
  const formattedSlug = slug[slug.length - 1]
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  const formattedLang = lang.toUpperCase();

  return {
    title: `${formattedSlug} - ${formattedLang} | Ip Klazz`,
    description: `Explore the "${formattedSlug}" tutorial in ${formattedLang} with Ip Klazz — a markdown-powered learning platform for developers and students.`,
    openGraph: {
      title: `${formattedSlug} - Learn ${formattedLang} | Ip Klazz`,
      description: `Explore the "${formattedSlug}" tutorial in ${formattedLang} with Ip Klazz — a markdown-powered learning platform for developers and students.`,
      url: `https://klazz.vercel.app/language/${lang}/${fullSlug}`,
      siteName: "Ip Klazz",
      images: [
        {
          url: "https://klazz.vercel.app/android-chrome-192x192.png",
          width: 1200,
          height: 630,
          alt: "Ip Klazz Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedSlug} - Learn ${formattedLang} | Ip Klazz`,
      description: `Explore the "${formattedSlug}" tutorial in ${formattedLang} with markdown-powered lessons and syntax-highlighted code blocks.`,
      images: ["https://klazz.vercel.app/android-chrome-192x192.png"],
    },
  };
}

export default async function CatchAllPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const fullSlug = slug.join("/");

  const baseDir = path.join(process.cwd(), "public", "Note", lang);
  const possibleTocPath = path.join(baseDir, fullSlug, "Table_Of_Contents.md");
  const possibleFilePath = path.join(baseDir, `${fullSlug}.md`);

  // Format the last slug segment for display
  const formattedTitle = slug[slug.length - 1]
    // remove underline
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  // Language icon path
  const langIcon = `/image/${lang}${lang === "javascript" ? ".webp" : ".png"}`;

  // 1. Try TOC View (Directory Home)
  try {
    const tocContents = await fs.readFile(possibleTocPath, "utf8");
    const { content, data } = matter(tocContents);
    const sections = extractSections(content);
    const { title, description } = data as { title?: string; description?: string };

    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-950 dark:to-blue-900 py-12 px-4 md:px-8 border-b border-blue-300 dark:border-blue-800">
          <div className="max-w-[900px] mx-auto">
            <Breadcrumbs lang={lang} slug={slug} />
            <div className="mt-8 flex items-center gap-6">
              <div className="shrink-0">
                <Image
                  src={langIcon}
                  alt={lang}
                  width={80}
                  height={80}
                  className="drop-shadow-lg"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-3">
                  {title || formattedTitle}
                </h1>
                {description && (
                  <p className="text-lg text-blue-700 dark:text-blue-300 leading-relaxed max-w-2xl">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[900px] mx-auto p-4 md:p-8">
          {/* Save content to IndexedDB */}
          <ClientSaver lang={lang} slug={fullSlug} content={tocContents} />
          <OfflineMarkdownLoader lang={lang} slug={fullSlug} />

          {/* Table of Contents */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Table of Contents</h2>
            <AccordionList sections={sections} language={`${lang}/${slug.join("/")}`} />
          </div>

          {/* Offline Dashboard */}
          <OfflineDashboard language={`${lang}/${slug.join("/")}`} sections={sections} />
        </div>
      </div>
    );
  } catch {
    // 2. Try Tutorial View (File Content)
    try {
      const fileContents = await fs.readFile(possibleFilePath, "utf8");
      const { data, content: markdownBody } = matter(fileContents);
      const isPremium = data.premium === true;

      return (
        <div className="min-h-screen">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-950 dark:to-purple-900 py-12 px-4 md:px-8 border-b border-purple-300 dark:border-purple-800">
            <div className="max-w-[900px] mx-auto">
              <Breadcrumbs lang={lang} slug={slug} />
              <div className="mt-8 flex items-center gap-6">
                <div className="shrink-0">
                  <Image
                    src={langIcon}
                    alt={lang}
                    width={80}
                    height={80}
                    className="drop-shadow-lg"
                  />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-purple-900 dark:text-purple-100">
                    {formattedTitle}
                  </h1>
                  <p className="text-purple-700 dark:text-purple-300 mt-1 text-sm md:text-base font-medium">
                    {lang.toUpperCase()} Tutorial
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-[900px] mx-auto p-4 md:p-8">
            <ClientSaver lang={lang} slug={fullSlug} content={fileContents} />
            <OfflineMarkdownLoader lang={lang} slug={fullSlug} />

            <div className="prose dark:prose-invert max-w-none mt-6">
              <ProtectedContent
                lang={lang}
                path={`${lang}/${slug.slice(0, -1).join("/")}`}
                fileContents={markdownBody}
                isPremium={isPremium}
              />
            </div>

            {/* Social Sharing */}
            <SocialShare
              title={`${formattedTitle} - Learn ${lang.toUpperCase()} on Ip Klazz`}
              url={`https://klazz.vercel.app/language/${lang}/${fullSlug}`}
            />
          </div>
        </div>
      );
    } catch {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">404 - Not Found</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              The tutorial or track you are looking for does not exist.
            </p>
            <a
              href={`/language/${lang}`}
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to {lang.toUpperCase()}
            </a>
          </div>
        </div>
      );
    }
  }
}

// Recursive function to get all paths
async function getPaths(directory: string, base: string[] = []): Promise<string[][]> {
  const items = await fs.readdir(directory, { withFileTypes: true });
  let paths: string[][] = [];

  for (const item of items) {
    if (item.isDirectory()) {
      const subPaths = await getPaths(path.join(directory, item.name), [...base, item.name]);
      paths.push([...base, item.name]); // The directory itself (for TOC)
      paths = paths.concat(subPaths);
    } else if (item.name.endsWith(".md") && item.name !== "Table_Of_Contents.md") {
      paths.push([...base, item.name.replace(".md", "")]);
    }
  }

  return paths;
}

export async function generateStaticParams() {
  const notesDir = path.join(process.cwd(), "public", "Note");
  const languages = ["html", "css", "javascript", "python"];
  const allParams: { lang: string; slug: string[] }[] = [];

  for (const lang of languages) {
    const langDir = path.join(notesDir, lang);
    try {
      const slugs = await getPaths(langDir);
      slugs.forEach(slug => {
        allParams.push({ lang, slug });
      });
    } catch {
      console.warn(`No directory found for ${lang}`);
    }
  }

  return allParams;
}
