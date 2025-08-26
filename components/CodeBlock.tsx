"use client";

import { useState } from "react";
import { ReactNode } from "react";

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

  if (inline) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  return (
    <div style={{ marginBottom: "1rem" }}>
      <pre
        style={{
          backgroundColor: "#f5f5f5",
          padding: "1rem",
          borderRadius: "4px",
          overflow: "auto",
        }}
      >
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
      {(language === "html" || language === "javascript") && (
        <>
          <button
            onClick={executeCode}
            style={{
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "0.5rem",
            }}
          >
            Try It
          </button>
          {showOutput && language === "javascript" && (
            <div
              style={{
                backgroundColor: "#f0f0f0",
                padding: "1rem",
                borderRadius: "4px",
                marginTop: "0.5rem",
              }}
            >
              <strong>Output:</strong>
              <pre style={{ whiteSpace: "pre-wrap" }}>{output}</pre>
            </div>
          )}
        </>
      )}
    </div>
  );
}
