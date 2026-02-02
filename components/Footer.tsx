"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";
import { useInstall } from "@/app/context/InstallContext";

export default function Footer() {
  const [updateStatus, setUpdateStatus] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [os, setOs] = useState<"android" | "windows" | "macos" | "other">("other");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const { showInstallPrompt } = useInstall();

  useEffect(() => {
    setYear(new Date().getFullYear());

    // Simple OS detection
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("android")) {
      setOs("android");
    } else if (userAgent.includes("win")) {
      setOs("windows");
    } else if (userAgent.includes("mac")) {
      setOs("macos");
    }
  }, []);

  // Fetch the latest release download URL from GitHub
  useEffect(() => {
    const fetchDownloadUrl = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/ip-tec/klazz/releases/latest"
        );
        if (!response.ok) return;

        const data = await response.json();
        const assets = data.assets || [];

        // Find the appropriate asset based on OS
        let asset;
        if (os === "windows") {
          // Look for .msi or .exe file
          asset = assets.find((a: any) =>
            a.name.endsWith(".msi") || a.name.endsWith(".exe")
          );
        } else if (os === "macos") {
          // Look for .dmg or .app.tar.gz file
          asset = assets.find((a: any) =>
            a.name.endsWith(".dmg") || a.name.endsWith(".app.tar.gz")
          );
        }

        if (asset?.browser_download_url) {
          setDownloadUrl(asset.browser_download_url);
        }
      } catch (error) {
        console.error("Failed to fetch download URL:", error);
      }
    };

    if (os === "windows" || os === "macos") {
      fetchDownloadUrl();
    }
  }, [os]);

  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (os === "android") {
      showInstallPrompt();
    } else if (os === "windows" || os === "macos") {
      if (downloadUrl) {
        // Use the dynamically fetched download URL
        window.open(downloadUrl, "_blank");
      } else {
        // Fallback to releases page if URL hasn't been fetched yet
        window.open("https://github.com/ip-tec/klazz/releases/latest", "_blank");
      }
    } else {
      // Fallback for other OS
      showInstallPrompt();
    }
  };

  async function checkForUpdates() {
    // Only attempt updates if running in a Tauri environment
    if (typeof window === "undefined" || !('__TAURI_INTERNALS__' in window)) {
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
          <button onClick={handleInstallClick} className="hover:underline">
            {os === "windows" ? "Install Windows App" : os === "macos" ? "Install Mac App" : "Install App"}
          </button>
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
