import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/image/default.png";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const languageName = params.lang.toUpperCase(); // or format as needed

  return {
    title: `Learn ${languageName} - Ip Klazz`,
    description: `Explore tutorials and lessons in ${languageName} with Ip Klazz - a markdown-powered learning platform for developers and students.`,
    openGraph: {
      title: `Learn ${languageName} - Ip Klazz`,
      description: `Explore tutorials and lessons in ${languageName} with Ip Klazz - a markdown-powered learning platform for developers and students.`,
      url: `https://klazz.vercel.app/language/${params.lang}`,
      siteName: "Ip Klazz",
      images: [
        {
          url: "https://klazz.vercel.app/android-chrome-192x192.png",
          width: 1200,
          height: 630,
          alt: "Ip Klazz Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Learn ${languageName} - Ip Klazz`,
      description: `Explore tutorials and lessons in ${languageName} with Ip Klazz — a markdown-powered learning platform for developers and students.`,
      images: ["https://klazz.vercel.app/android-chrome-192x192.png"],
    },
  };
}

// Layout component for tutorial pages
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <>
      <nav className="h-p-[1rem] border-b border-gray-300 mb-[2rem] fixed w-full bg-gray-200 text-blue-500 overflow-hidden z-50">
        <Link
          href="/"
          className="text-blue-500 text-3xl text-left w-full block"
        >
          {/* Website logo */}
          <Image
            src={Logo}
            alt="Ip Klazz"
            className="h-10 w-10 top-0 m-3 rounded-full hover:scale-200 transform scale-[1.6]"
          />
          {/* Only visible on larger screens */}
          {/* <span className="hidden md:block text-2xl">Ip Klazz</span> */}
          {/* Only visible on smaller screens */}
          {/* <ArrowLeftCircleIcon className="md:hidden h-10 8 w-10 hover:scale-110 text-blue-500" /> */}
        </Link>
      </nav>
      <div className="pt-[2rem] w-full">{children}</div>
    </>
  );
}
