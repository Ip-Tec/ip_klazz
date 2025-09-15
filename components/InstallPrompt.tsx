"use client";
import { useEffect, useState } from "react";

type BIPEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export default function InstallPrompt() {
  const [deferred, setDeferred] = useState<BIPEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasDismissed = localStorage.getItem("installPromptDismissed");
    if (hasDismissed === "true") return;
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BIPEvent);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 mx-auto z-50 max-w-md p-4 bg-orange-500 shadow-lg rounded-lg border border-gray-300">
      <p className="mb-3 text-sm text-gray-100">
        Install Ip Klazz for a faster, app-like experience.
      </p>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
          onClick={async () => {
            setVisible(false);
            if (!deferred) return;
            await deferred.prompt();
            await deferred.userChoice;
            setDeferred(null);
          }}
        >
          Install
        </button>
        <button
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition"
          onClick={() => {
            setVisible(false);
            localStorage.setItem("installPromptDismissed", "true");
          }}
        >
          Not now
        </button>
      </div>
    </div>
  );
}
