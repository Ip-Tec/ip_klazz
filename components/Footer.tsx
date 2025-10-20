"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import { checkUpdate, installUpdate } from "@tauri-apps/api/updater";
import { ask } from "@tauri-apps/api/dialog";

export default function Footer() {
  const [updateStatus, setUpdateStatus] = useState("");

  async function checkForUpdates() {
    setUpdateStatus("Checking for updates...");
    try {
      const { shouldUpdate, manifest } = await checkUpdate();

      if (shouldUpdate) {
        setUpdateStatus(`Update available: ${manifest?.version}.`);
        const wantsToInstall = await ask("Update available. Install now?", {
          title: "Update Available",
          type: "info",
        });

        if (wantsToInstall) {
          setUpdateStatus("Installing update...");
          await installUpdate();
          setUpdateStatus("Update installed. Restarting...");
        } else {
          setUpdateStatus("");
        }
      } else {
        setUpdateStatus("You are up to date!");
        setTimeout(() => setUpdateStatus(""), 3000);
      }
    } catch (error) {
      console.error(error);
      setUpdateStatus("Error checking for updates.");
      setTimeout(() => setUpdateStatus(""), 3000);
    }
  }

  return (
    <footer className="w-full border-t mt-8 py-6 bg-gray-200 dark:bg-gray-900 dark:text-gray-300">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} Ip Klazz</div>
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
