"use client";
import { useEffect, useState } from "react";

export default function UpdateToast() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleUpdate = () => setShowToast(true);
    window.addEventListener("swUpdated", handleUpdate);
    return () => window.removeEventListener("swUpdated", handleUpdate);
  }, []);

  const refreshPage = () => {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: "SKIP_WAITING" });
    }
    window.location.reload();
  };

  if (!showToast) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-orange-500 bg-opacity-40 text-black p-4 rounded shadow-lg z-50">
      <p>🚀 A new version is available.</p>
      <button
        onClick={refreshPage}
        className="mt-2 px-3 py-1 bg-black text-white rounded"
      >
        Refresh
      </button>
    </div>
  );
}
