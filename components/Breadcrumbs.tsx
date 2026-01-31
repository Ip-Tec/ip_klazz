"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbsProps {
  lang?: string;
  slug?: string[];
}

export default function Breadcrumbs({ lang: propsLang, slug: propsSlug }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Resolve lang and slug from props or pathname
  let lang = propsLang;
  let slug = propsSlug;

  if (!lang || !slug) {
    const segments = pathname.split("/").filter(Boolean); // e.g. ["language", "javascript", "core"]
    if (!lang) lang = segments[1] || "";
    if (!slug) slug = segments.slice(2);
  }

  const formatSegment = (segment: string) =>
    segment ? segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) : "";

  // Accumulate the path for each segment
  const getSlugPath = (s: string[], index: number) => {
    return s.slice(0, index + 1).join("/");
  };

  if (!lang) return null;

  return (
    <nav className="text-orange-500 text-xs sm:text-sm md:text-lg flex justify-start md:justify-end w-full md:w-auto flex-wrap gap-1 mt-2 md:mt-0" aria-label="Breadcrumb">
      <Link href="/" className="hover:underline hover:scale-105 transition-transform shrink-0">
        Home
      </Link>
      <span className="mx-1 shrink-0 hidden sm:inline">/</span>
      <Link href={`/language/${lang}`} className="hover:underline hover:scale-105 transition-transform shrink-0">
        {lang ? (lang.charAt(0).toUpperCase() + lang.slice(1)) : ""}
      </Link>

      {slug.map((segment, index) => (
        <React.Fragment key={index}>
          <span className="mx-1 shrink-0 hidden sm:inline">/</span>
          {index === slug.length - 1 ? (
            <span className="text-orange-600 font-medium truncate max-w-[150px] sm:max-w-[200px]" title={formatSegment(segment)}>
              {formatSegment(segment.replace(/\.md$/, ""))}
            </span>
          ) : (
            <Link
              href={`/language/${lang}/${getSlugPath(slug!, index).replace(/\.md$/, "")}`}
              className="hover:underline hover:scale-105 transition-transform shrink-0"
            >
              {formatSegment(segment.replace(/\.md$/, "").replace(/_/g, " "))}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
