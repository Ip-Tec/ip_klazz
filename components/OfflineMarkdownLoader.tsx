"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPage } from "@/utils/db"; // adjust path to your db.js
import CodeBlock from "@/components/CodeBlock";

interface OfflineMarkdownLoaderProps {
  lang: string;
  slug: string;
}

export default function OfflineMarkdownLoader({
  lang,
  slug,
}: OfflineMarkdownLoaderProps) {
  const [content, setContent] = useState<string | null>(null);
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    if (!navigator.onLine) {
      setOffline(true);
      const id = `${lang}/${slug}`;
      getPage(id).then((data) => {
        if (data?.content) {
          setContent(data.content);
        } else {
          setContent("⚠️ This page is not available offline yet.");
        }
      });
    }
  }, [lang, slug]);

  if (!offline || !content) return null;

  return (
    <div className="max-w-[900px] mx-auto p-8">
      {/* make it look like a card */}
      <div className="mb-4 bg-yellow-700 text-gray-200 shadow-2xl p-2 rounded-lg text-center font-semibold">
        You are offline. Showing cached content.
      </div>
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
        {content}
      </ReactMarkdown>
    </div>
  );
}
