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
  title: "Ip Klazz",
  description: "Ip Klazz is a platform for learning and sharing knowledge.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ip Klazz",
    description: "Ip Klazz is a platform for learning and sharing knowledge.",
    url: "https://ip-tec.github.io/ip_klazz/",
    siteName: "Ip Klazz",
    images: [
      {
        url: "https://ip-tec.github.io/ip_klazz/android-chrome-192x192.png",
        width: 1200,
        height: 630,
      },
    ],
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
        <div>{children}</div>
      </body>
    </html>
  );
}
