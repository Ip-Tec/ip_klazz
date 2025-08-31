"use client";
import { useEffect, useState } from "react";

export default function IOSInstallHint() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // @ts-expect-error - nonstandard iOS Safari property: navigator.standalone indicates PWA standalone mode
      navigator.standalone === true;

    if (isIOS && !isStandalone) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 mx-auto max-w-md p-4 bg-white/90 shadow rounded border z-50">
      <p className="text-sm">
        Add <strong>Ip Klazz</strong> to your Home Screen: tap the Share icon, then “Add to Home Screen”.
      </p>
      <button
        className="mt-2 px-3 py-1 border rounded"
        onClick={() => setShow(false)}
      >
        Got it
      </button>
    </div>
  );
}
