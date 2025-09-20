// @/component/OfflineDashboard.tsx
// Accepts sections from the table of contents
// Lets users select topics to cache
// Checks IndexedDB to see what's already

"use client";
import { useEffect, useState } from "react";
import { savePage, getPage, deletePage } from "@/utils/db";

interface Section {
  title: string;
  slug: string;
}

export default function OfflineDashboard({
  language,
  sections,
}: {
  language: string;
  sections: Section[];
}) {
  const [cachedTopics, setCachedTopics] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [cachedData, setCachedData] = useState<
    Record<string, { updatedAt: string }>
  >({});

  useEffect(() => {
    const syncCached = async () => {
      for (const id of cachedTopics) {
        const [lang, slug] = id.split("/");
        const res = await fetch(`/language/${lang}/${slug}`);
        const html = await res.text();
        await savePage(id, {
          content: html,
          updatedAt: new Date().toISOString(),
        });
      }
    };

    window.addEventListener("online", syncCached);
    return () => window.removeEventListener("online", syncCached);
  }, [cachedTopics]);

  useEffect(() => {
    // Check which topics are already cached
    Promise.all(
      sections.map(({ slug }) =>
        getPage(`${language}/${slug}`).then((data) =>
          data ? { id: `${language}/${slug}`, updatedAt: data.updatedAt } : null
        )
      )
    ).then((results) => {
      const valid = results.filter(Boolean) as {
        id: string;
        updatedAt: string;
      }[];
      const map = Object.fromEntries(
        valid.map(({ id, updatedAt }) => [id, { updatedAt }])
      );
      setCachedTopics(valid.map(({ id }) => id));
      setCachedData(map);
    });
  }, [language, sections]);

  const toggleSelection = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const downloadSelected = async () => {
    for (const id of selected) {
      const [lang, slug] = id.split("/");
      const res = await fetch(`/language/${lang}/${slug}`);
      const html = await res.text();
      await savePage(id, html);
    }
    alert("Selected topics saved for offline use!");
    setCachedTopics((prev) => [...prev, ...selected]);
    setSelected([]);
  };

  return (
    <div className="mt-6 border-t pt-4">
      <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-300">
        Manage Offline Content
      </h2>
      <ul className="space-y-2">
        {sections.map(({ title, slug }) => {
          const id = `${language}/${slug}`;
          const isCached = cachedTopics.includes(id);
          return (
            <li key={id} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selected.includes(id)}
                onChange={() => toggleSelection(id)}
                disabled={isCached}
              />
              <label className={isCached ? "text-green-600" : ""}>
                {title} {isCached && "(Saved)"}
              </label>
              {isCached && (
                <span className="text-xs text-gray-500 dark:text-gray-300 ml-2">
                  Last updated:{" "}
                  {new Date(cachedData[id]?.updatedAt).toLocaleString()}
                </span>
              )}

              <button
                className="ml-2 px-2 py-1 text-gray-50 hover:text-gray-100 hover:bg-red-600 transition border border-red-600 rounded"
                onClick={() => {
                  deletePage(id);
                  setCachedTopics((prev) => prev.filter((t) => t !== id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      {selected.length > 0 && (
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={downloadSelected}
        >
          Download Selected
        </button>
      )}
    </div>
  );
}
