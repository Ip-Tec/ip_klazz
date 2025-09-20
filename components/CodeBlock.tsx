// @/components/CodeBlock.tsx
"use client";

import { useState } from "react";
import { ReactNode } from "react";
import "highlight.js/styles/github.css";

import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function CodeBlock({
  inline = false,
  className,
  children,
  ...props
}: CodeBlockProps) {
  const [output, setOutput] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  // State to manage code block visibility (Accordion)
  const [isOpen, setIsOpen] = useState(true);

  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "text";

  // Add highlighting for code blocks
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [isOpen, children]);

  // hidden long code blocks and show short code by default
  useEffect(() => {
    if (codeRef.current) {
      const lineCount = codeRef.current.innerText.split("\n").length;
      setIsOpen(lineCount <= 10); // Show if 10 lines or fewer
    }
  }, []);

  // The executeCode function is responsible for running the code snippets
  const executeCode = () => {
    if (language === "html") {
      const newWindow = window.open();
      if (newWindow) {
        newWindow.document.write(String(children));
        newWindow.document.close();
      }
    } else if (language === "javascript") {
      try {
        const originalLog = console.log;
        const logs: string[] = [];

        console.log = (...args: unknown[]) => {
          logs.push(
            args
              .map((arg) =>
                typeof arg === "object" ? JSON.stringify(arg) : String(arg)
              )
              .join(" ")
          );
        };

        eval(String(children));

        console.log = originalLog;
        setOutput(logs.join("\n"));
        setShowOutput(true);
      } catch (error: unknown) {
        const message =
          error instanceof Error
            ? error.message
            : typeof error === "string"
            ? error
            : "Unknown error";
        setOutput(`Error: ${message}`);
        setShowOutput(true);
      }
    }
  };

  // Render the code block
  if (inline) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  // Render the code block
  return (
    <div className="mb-4 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-200 text-gray-700 dark:bg-blue-950 dark:text-gray-300 border-none py-2 px-3 rounded cursor-pointer mb-2 absolute -top-4 right-0"
      >
        {/* Add icon from Heroicons */}
        {isOpen ? (
          <EyeSlashIcon className="h-5 w-5 inline-block mr-1 text-gray-500 dark:text-gray-300" />
        ) : (
          <EyeIcon className="h-5 w-5 inline-block mr-1 text-gray-500 dark:text-gray-300" />
        )}
        {/* {isOpen ? "Hide Code" : "Show Code"} */}
      </button>

      {isOpen && (
        <div
          className={`transition-all duration-300 overflow-auto ${
            isOpen ? "max-h-screen h-auto " : "max-h-4"
          }`}
        >
          <pre className="bg-gray-200 p-4 rounded overflow-auto dark:bg-blue-950 ">
            <code ref={codeRef} className={className} {...props}>
              {children}
            </code>
          </pre>
        </div>
      )}

      {(language === "html" || language === "javascript") && (
        <>
          <button
            className="bg-blue-500 text-white dark:bg-blue-800 dark:text-gray-300 border-none py-2 px-4 rounded cursor-pointer mb-[0.5rem]"
            onClick={executeCode}
          >
            Try It
          </button>
          {showOutput && language === "javascript" && (
            <div className="bg-gray-100 dark:bg-blue-900 dark:text-gray-300 p-4 rounded mt-2">
              <strong>Output:</strong>
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          )}
        </>
      )}
    </div>
  );
}
