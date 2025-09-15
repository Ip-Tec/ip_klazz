// ./components/ClientSaver.tsx
"use client";
import { useEffect } from "react";
import { savePage } from "@/utils/db"; // adjust path to your db.js

export default function ClientSaver({
  lang,
  slug,
  content,
}: {
  lang: string;
  slug: string;
  content: string;
}) {
  useEffect(() => {
    const id = `${lang}/${slug}`;
    savePage(id, content);
  }, [lang, slug, content]);

  return null; // no UI needed
}
