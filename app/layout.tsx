import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// add favion, and social media meta tags
export const metadata: Metadata = {
  title: "Ip Klazz - Markdown-Powered Tutorials",
  description:
    "Klazz is a lightweight, markdown-powered learning platform for developers and students. Explore bite-sized tutorials in HTML, CSS, JavaScript, and more — rendered with syntax highlighting, responsive design, and intuitive navigation.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ip Klazz - Markdown-Powered Tutorials",
    description:
      "Learn HTML, CSS, JavaScript and more with Klazz — a clean, markdown-driven tutorial platform for developers and students.",
    url: "https://klazz.vercel.app/",
    siteName: "Ip Klazz",
    images: [
      {
        url: "./android-chrome-192x192.png",
        width: 1200,
        height: 630,
        alt: "Ip Klazz Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ip Klazz – Markdown-Powered Tutorials",
    description:
      "Explore bite-sized tutorials in HTML, CSS, JavaScript and more — beautifully rendered from markdown files.",
    images: ["./android-chrome-192x192.png"],
    creator: "@ip_tec", // optional: replace with your actual Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="p-[1rem] shadow-2xl mb-[-2rem] fixed w-full bg-gray-200">
          <Link href="/" className="text-decoration-none">
            <span className="text-blue-500 font-bold">Tutorial Website</span>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
