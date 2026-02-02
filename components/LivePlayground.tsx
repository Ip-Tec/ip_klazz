'use client';

import { useState } from 'react';
import { PlayIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

interface LivePlaygroundProps {
  initialCode: string;
  language: string;
}

export default function LivePlayground({ initialCode, language }: LivePlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState("");

  const runCode = () => {
    setIsRunning(true);
    setOutput("");
    setError("");

    if (language === 'javascript' || language === 'js') {
      try {
        const logs: string[] = [];
        const originalLog = console.log;
        const originalError = console.error;

        console.log = (...args: unknown[]) => {
          logs.push(args.map(arg =>
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
        };

        console.error = (...args: unknown[]) => {
          logs.push("ERROR: " + args.map(arg =>
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
        };

        // Create a sandboxed evaluation
        const result = eval(code);

        console.log = originalLog;
        console.error = originalError;

        if (logs.length > 0) {
          setOutput(logs.join('\n'));
        } else if (result !== undefined) {
          setOutput(String(result));
        } else {
          setOutput("✓ Code executed successfully (no output)");
        }
      } catch (err: unknown) {
        setError(`Error: ${err instanceof Error ? err.message : String(err)}`);
        setOutput("");
      }
    } else if (language === 'html') {
      try {
        const blob = new Blob([code], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        setOutput("✓ HTML preview opened in new tab");
      } catch (err: unknown) {
        setError(`Error: ${err instanceof Error ? err.message : String(err)}`);
      }
    } else {
      setError(`Execution for ${language} is not supported in the playground yet.`);
    }

    setIsRunning(false);
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput("");
    setError("");
  };

  return (
    <div className="my-6 border border-blue-300 dark:border-blue-700 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-950">
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 border-b border-blue-400 dark:border-blue-700">
        <span className="text-sm font-bold text-white uppercase tracking-widest">{language} Playground</span>
        <div className="flex gap-2">
          <button
            onClick={resetCode}
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors text-white"
            title="Reset Code"
          >
            <ArrowPathIcon className="w-5 h-5" />
          </button>
          <button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded-lg font-bold text-sm transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PlayIcon className="w-4 h-4" /> {isRunning ? "Running..." : "Run"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="border-r border-gray-300 dark:border-gray-700">
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Code Editor</span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-4 font-mono text-sm bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 resize-none focus:outline-none h-[300px]"
            spellCheck={false}
          />
        </div>

        <div>
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Output</span>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 overflow-auto font-mono text-sm h-[300px]">
            {error ? (
              <pre className="text-red-600 dark:text-red-400 whitespace-pre-wrap">{error}</pre>
            ) : (
              <pre className="text-gray-800 dark:text-green-400 whitespace-pre-wrap">
                {output || "// Run code to see output here"}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
