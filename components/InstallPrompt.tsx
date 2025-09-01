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
    <div className="fixed bottom-4 left-4 right-4 mx-auto max-w-md p-4 bg-orange-600/80 shadow-lg rounded-lg border">
      <p className="mb-3 text-sm text-gray-100">
        Install Ip Klazz for a faster, app-like experience.
      </p>
      <div className="flex gap-2">
        <button
          className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-800 cursor-pointer"
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
          className="px-3 py-2 border rounded hover:bg-gray-200 cursor-pointer"
          onClick={() => setVisible(false)}
        >
          Not now
        </button>
      </div>
    </div>
  );
}
