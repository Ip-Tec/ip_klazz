// @/components/CodeBlock.tsx
"use client";

import { useState } from "react";
import { ReactNode } from "react";
import "highlight.js/styles/github.css";

import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import { EyeSlashIcon, EyeIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import LivePlayground from "./LivePlayground";

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
  const [isOpen, setIsOpen] = useState(true);
  const [showPlayground, setShowPlayground] = useState(false);

  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "text";

  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen && codeRef.current && !showPlayground) {
      hljs.highlightElement(codeRef.current);
    }
  }, [isOpen, children, showPlayground]);

  useEffect(() => {
    if (codeRef.current) {
      const lineCount = codeRef.current.innerText.split("\n").length;
      setIsOpen(lineCount <= 10);
    }
  }, []);

  const executeCode = () => {
    if (language === "html") {
      const newWindow = window.open();
      if (newWindow) {
        newWindow.document.write(String(children));
        newWindow.document.close();
      }
    } else if (language === "javascript" || language === "js") {
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

  if (inline) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  if (showPlayground) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowPlayground(false)}
          className="absolute top-2 right-2 z-10 bg-gray-200 dark:bg-gray-800 p-1 rounded-md text-xs font-bold"
        >
          Exit Playground
        </button>
        <LivePlayground initialCode={String(children)} language={language} />
      </div>
    );
  }

  return (
    <div className="mb-4 relative">
      <div className="flex gap-2 absolute -top-4 right-0">
        {(language === "html" || language === "javascript" || language === "js") && (
          <button
            onClick={() => setShowPlayground(true)}
            className="bg-gray-200 text-gray-700 dark:bg-blue-950 dark:text-gray-300 border-none py-2 px-3 rounded cursor-pointer"
            title="Open in Playground"
          >
            <CodeBracketIcon className="h-5 w-5" />
          </button>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-200 text-gray-700 dark:bg-blue-950 dark:text-gray-300 border-none py-2 px-3 rounded cursor-pointer"
        >
          {isOpen ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="transition-all duration-300 overflow-auto h-auto">
          <pre className="bg-gray-200 p-4 rounded overflow-auto dark:bg-blue-950">
            <code ref={codeRef} className={className} {...props}>
              {children}
            </code>
          </pre>
        </div>
      )}

      {isOpen && (language === "html" || language === "javascript" || language === "js") && (
        <>
          <button
            className="bg-blue-500 text-white dark:bg-blue-800 dark:text-gray-300 border-none py-1.5 px-4 rounded cursor-pointer mt-2 text-sm font-bold"
            onClick={executeCode}
          >
            Quick Run
          </button>
          {showOutput && (language === "javascript" || language === "js") && (
            <div className="bg-gray-100 dark:bg-blue-900 dark:text-gray-300 p-4 rounded mt-2 text-xs font-mono">
              <strong>Output:</strong>
              <pre className="whitespace-pre-wrap mt-1">{output}</pre>
            </div>
          )}
        </>
      )}
    </div>
  );
}
