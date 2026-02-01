"use client";
import { useEffect, useState, useCallback } from "react";

const THEME_KEY = "theme"; // 'dark' | 'light' | 'system'
const ORDER: Array<string> = ["light", "system", "dark"];

function SunIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={props.className}
      width="18"
      height="18"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoonIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={props.className}
      width="18"
      height="18"
      aria-hidden
    >
      <path
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SystemIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={props.className}
      width="18"
      height="18"
      aria-hidden
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="12"
        rx="2"
        ry="2"
        strokeWidth="1.5"
      />
      <path
        d="M8 20h8M12 16v4"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  // Start with 'system' on first render to avoid accessing localStorage during
  // server-side rendering or before the client environment is ready.
  const [theme, setTheme] = useState<string>("system");

  // On mount, load any persisted preference and apply it.
  useEffect(() => {
    try {
      // Support migration: older versions mistakenly used the key 'light'
      const oldKey = "light";
      const storedOld = localStorage.getItem(oldKey);
      const stored = localStorage.getItem(THEME_KEY);
      if (stored) setTheme(stored);
      else if (storedOld) {
        // migrate to new key
        localStorage.setItem(THEME_KEY, storedOld);
        localStorage.removeItem(oldKey);
        setTheme(storedOld);
      }
    } catch {
      // ignore
    }
  }, []);

  const apply = useCallback((t: string) => {
    const root = document.documentElement;
    if (t === "dark") root.classList.add("dark");
    else if (t === "light") root.classList.remove("dark");
    else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) root.classList.add("dark");
      else root.classList.remove("dark");
    }
    try {
      // also set a data attribute so it's easy to inspect the current theme in devtools
      root.dataset.theme = t;
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    apply(theme);

    let mql: MediaQueryList | null = null;
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        if (e.matches) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      }
    };

    if (window.matchMedia) {
      mql = window.matchMedia("(prefers-color-scheme: dark)");
      if (mql.addEventListener) mql.addEventListener("change", handleChange);
      else if (mql.addListener) mql.addListener(handleChange);
    }

    return () => {
      if (mql) {
        if (mql.removeEventListener)
          mql.removeEventListener("change", handleChange);
        else if (mql.removeListener) mql.removeListener(handleChange);
      }
    };
  }, [theme, apply]);

  function setAndPersist(t: string) {
    try {
      localStorage.setItem(THEME_KEY, t);
      const root = document.documentElement;
      if (t === "dark") {
        root.classList.add("dark");
      } else if (t === "light") {
        root.classList.remove("dark");
      } else {
        // system
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        root.classList.toggle("dark", prefersDark);
      }
      setTheme(t);
    } catch (e) {
      console.warn("Could not persist theme preference", e);
    }
  }

  function cycle() {
    const idx = ORDER.indexOf(theme);
    const next = ORDER[(idx + 1) % ORDER.length];
    setAndPersist(next);
  }

  const label =
    theme === "light"
      ? "Light theme"
      : theme === "dark"
        ? "Dark theme"
        : "System theme";

  return (
    <button
      onClick={cycle}
      title={label}
      aria-label={`Toggle theme — currently ${label}`}
      className="cursor-pointer p-2 rounded border bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:shadow-sm"
    >
      <span className="sr-only">{label}</span>
      {theme === "light" && <SunIcon />}
      {theme === "dark" && <MoonIcon />}
      {theme === "system" && <SystemIcon />}
    </button>
  );
}
