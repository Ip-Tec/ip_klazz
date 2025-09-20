// ./components/AccordionList.tsx
"use client";

import { useState } from "react";
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
    <>
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
              a: ({ href, children }) => (
                <a
                  href={`${language}/${href && href.replace(".md", "")}`}
                  className="block text-gray-600 hover:text-gray-200 hover:bg-gray-500 dark:text-gray-300 dark:hover:text-gray-300 dark:hover:bg-blue-700 p-2 rounded-md transition duration-200"
                >
                  {children}
                </a>
              ),
              ul: ({ node, ...props }) => (
                <ul
                  {...props}
                  
                  className="block list-outside bg-gray-200 dark:bg-blue-950 dark:text-gray-300 rounded-md p-2"
                />
              ),

              li: ({ node, ...props }) => (
                <li {...props} className="block my-2" />
              ),

              h1: ({ node, ...props }) => (
                <h1 {...props} className="font-bold text-2xl my-4" />
              ),
              h2: ({ node, ...props }) => (
                <h2 {...props} className="font-bold text-xl my-4" />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </Accordion>
      ))}
    </>
  );
}
