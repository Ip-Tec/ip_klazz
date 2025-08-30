// @/components/CodeBlock.tsx
"use client";

import { useState } from "react";
import { ReactNode } from "react";
import "highlight.js/styles/github.css";

import { useEffect, useRef } from "react";
import hljs from "highlight.js";
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

  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "text";

  // Add highlighting for code blocks
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [children]);

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
    <div className="mb-4">
      <pre className="bg-gray-100 p-4 rounded overflow-auto">
        <code ref={codeRef} className={className} {...props}>
          {children}
        </code>
      </pre>
      {(language === "html" || language === "javascript") && (
        <>
          <button
            className="bg-blue-500 text-white border-none py-2 px-4 rounded cursor-pointer mb-[0.5rem]"
            onClick={executeCode}
          >
            Try It
          </button>
          {showOutput && language === "javascript" && (
            <div className="bg-gray-100 p-4 rounded mt-2">
              <strong>Output:</strong>
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          )}
        </>
      )}
    </div>
  );
}
