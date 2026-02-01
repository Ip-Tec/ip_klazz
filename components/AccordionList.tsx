// ./components/AccordionList.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Accordion from "@/components/Accordion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "@/components/CodeBlock";

interface Section {
  title: string;
  content: string;
}

interface AccordionListProps {
  sections: Section[];
  language: string;
}

export default function AccordionList({
  sections,
  language,
}: AccordionListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {sections.map(({ title, content }, index) => (
        <Accordion
          key={index}
          title={title}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code: CodeBlock,
              a: ({ href, children }) => {
                if (!href) return <span>{children}</span>;

                // Handle relative links
                const cleanHref = href.replace(/^\.\//, "").replace(/\.md$/, "");
                const isExternal = href.startsWith("http://") || href.startsWith("https://");

                if (isExternal) {
                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline hover:underline-offset-2 transition-colors"
                    >
                      {children}
                    </a>
                  );
                }

                return (
                  <Link
                    href={`/language/${language}/${cleanHref}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline hover:underline-offset-2 transition-colors"
                  >
                    {children}
                  </Link>
                );
              },
              ul: ({ node: _node, ...props }) => (
                <ul
                  {...props}
                  className="list-disc list-inside ml-4 space-y-2 text-gray-700 dark:text-gray-300"
                />
              ),
              ol: ({ node: _node, ...props }) => (
                <ol
                  {...props}
                  className="list-decimal list-inside ml-4 space-y-2 text-gray-700 dark:text-gray-300"
                />
              ),
              li: ({ node: _node, ...props }) => (
                <li {...props} className="py-1" />
              ),
              h1: ({ node: _node, ...props }) => (
                <h1 {...props} className="font-bold text-2xl my-4 text-gray-900 dark:text-gray-100" />
              ),
              h2: ({ node: _node, ...props }) => (
                <h2 {...props} className="font-bold text-xl my-3 text-gray-900 dark:text-gray-100" />
              ),
              h3: ({ node: _node, ...props }) => (
                <h3 {...props} className="font-bold text-lg my-2 text-gray-900 dark:text-gray-100" />
              ),
              p: ({ node: _node, ...props }) => (
                <p {...props} className="my-2 text-gray-700 dark:text-gray-300 leading-relaxed" />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </Accordion>
      ))}
    </div>
  );
}
