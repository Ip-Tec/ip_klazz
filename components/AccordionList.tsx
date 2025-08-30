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

export default function AccordionList({ sections, language }: AccordionListProps) {
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
                  href={`${language}/${href && href.replace('.md', '')}`}
                  className="block text-gray-600 hover:text-gray-200 hover:bg-gray-500 p-2 rounded-md transition duration-200"
                >
                  {children}
                </a>
              ),
              ul: ({ children }) => (
                <ul className="block list-outside ist-inside bg-gray-200 rounded-md p-2">
                  {children}
                </ul>
              ),
              li: ({ children }) => <li className="block my-2">{children}</li>,
              h1: ({children})=> <h1 className="font-bold text-2xl my-4">{children}</h1>,
              h2: ({children})=> <h2 className="font-bold text-xl my-4">{children}</h2>
            }}
          >
            {content}
          </ReactMarkdown>
        </Accordion>
      ))}
    </>
  );
}
