"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // e.g. ["language", "html", "tags"]

  const lang = segments[1] || "unknown";
  const topic = segments[2] ? decodeURIComponent(segments[2]) : null;

  const formatTopic = (slug: string) =>
    slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()); // "html-tags" → "Html Tags"

  return (
    <div className="text-orange-500 text-lg flex justify-end w-full pr-3">
      <Link href="/" className="hover:underline hover:scale-105 transition-transform">
        Home
      </Link>
      <span className="mx-2">/</span>
      <Link href={`/language/${lang}`} className="hover:underline hover:scale-105 transition-transform">
      {/* only make the first letter capitalized */}
        {lang.charAt(0).toUpperCase() + lang.slice(1)}
      </Link>
      {topic && (
        <>
          <span className="mx-2">/</span>
          <span className="text-orange-600">{formatTopic(topic)}</span>
        </>
      )}
    </div>
  );
}
