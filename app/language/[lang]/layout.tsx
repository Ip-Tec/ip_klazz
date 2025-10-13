import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/image/default.png";
import type { Metadata, Viewport } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#3b82f6",
};

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = await params;
  const languageName = lang.toUpperCase();

  return {
    title: `Learn ${languageName} - Ip Klazz`,
    description: `Explore tutorials and lessons in ${languageName} with Ip Klazz - a markdown-powered learning platform for developers and students.`,
    openGraph: {
      title: `Learn ${languageName} - Ip Klazz`,
      description: `Explore tutorials and lessons in ${languageName} with Ip Klazz - a markdown-powered learning platform for developers and students.`,
      url: `https://klazz.vercel.app/language/${lang}`,
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

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <>
      <nav className="h-p-[1rem] border-b border-gray-300 mb-[2rem] fixed w-full flex justify-between items-center dark:bg-blue-950 overflow-hidden z-50">
        <Link
          href="/"
          className="text-blue-500 text-3xl text-left w-full block"
        >
          <Image
            src={Logo}
            alt="Ip Klazz"
            className="h-10 w-10 top-0 m-3 rounded-full hover:scale-200 transform scale-[1.6]"
          />
        </Link>

        {/* Breadcrumbs now handled by client component */}
        <Breadcrumbs />
      </nav>
      <div className="pt-[2rem] w-full">{children}</div>
    </>
  );
}
