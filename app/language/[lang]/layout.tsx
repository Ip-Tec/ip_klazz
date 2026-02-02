import React from "react";

import type { Metadata, Viewport } from "next";


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
  params: Promise<{ lang: string }>;
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
      {/* <nav className="p-[1rem] border-b border-gray-300 fixed w-full flex flex-col md:flex-row justify-between items-start md:items-center dark:bg-gray-900 z-50 bg-white dark:bg-gray-900 gap-2 md:gap-0">
        <Link
          href="/"
          className="text-blue-500 text-3xl text-left shrink-0"
        >
          <Image
            src={Logo}
            alt="Ip Klazz"
            className="h-10 w-10 top-0 m-3 rounded-full hover:scale-200 transform scale-[1.6]"
          />
        </Link> */}

      {/* Breadcrumbs now handled by client component */}
      {/* <Breadcrumbs /> */}
      {/* </nav > */}
      <div className="h-auto w-full">{children}</div>
    </>
  );
}
