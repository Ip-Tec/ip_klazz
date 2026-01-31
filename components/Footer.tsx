"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";
// No static imports for Tauri to avoid build errors in non-Tauri environments

export default function Footer() {
  const [updateStatus, setUpdateStatus] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  async function checkForUpdates() {
    // Only attempt updates if running in a Tauri environment
    if (typeof window === "undefined" || !(window as any).__TAURI_INTERNALS__) {
      setUpdateStatus("Updates only available in the desktop app.");
      setTimeout(() => setUpdateStatus(""), 3000);
      return;
    }

    setUpdateStatus("Checking for updates...");
    try {
      // Dynamically import Tauri plugins (requires installation of plugins)
      // Note: In Tauri 2.0, these are separate packages:
      // @tauri-apps/plugin-updater and @tauri-apps/plugin-dialog
      const { check } = await import("@tauri-apps/plugin-updater");
      const { ask } = await import("@tauri-apps/plugin-dialog");

      const update = await check();

      if (update?.available) {
        setUpdateStatus(`Update available: ${update.version}.`);
        const wantsToInstall = await ask("Update available. Install now?", {
          title: "Update Available",
          kind: "info",
        });

        if (wantsToInstall) {
          setUpdateStatus("Installing update...");
          await update.downloadAndInstall();
          setUpdateStatus("Update installed. Restarting...");
        } else {
          setUpdateStatus("");
        }
      } else {
        setUpdateStatus("You are up to date!");
        setTimeout(() => setUpdateStatus(""), 3000);
      }
    } catch (error) {
      console.error("Update error:", error);
      setUpdateStatus("Updater plugins not installed/configured.");
      setTimeout(() => setUpdateStatus(""), 3000);
    }
  }

  return (
    <footer className="w-full border-t mt-8 py-6 bg-gray-200 dark:bg-gray-900 dark:text-gray-300">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {year} Ip Tec (Klazz)</div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <a href="/manifest.json" className="hover:underline">
            Install
          </a>
          <button onClick={checkForUpdates} className="hover:underline">
            Check for Updates
          </button>
          {updateStatus && <span className="text-sm">{updateStatus}</span>}
        </div>
        {/* Floating theme switch */}
        <div className="m-1 bg-gray-200 dark:bg-gray-800 p-2 rounded-lg shadow-lg ">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
