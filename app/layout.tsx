import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import InstallPrompt from "@/components/InstallPrompt";
import IOSInstallHint from "@/components/IOSInstallHint";
import UpdateToast from "@/components/UpdateEventToast";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://klazz.vercel.app"),
  title: "Ip Klazz - Markdown-Powered Tutorials",
  description:
    "Klazz is a lightweight, markdown-powered learning platform for developers and students. Explore bite-sized tutorials in HTML, CSS, JavaScript, and more.",
  manifest: "/manifest.json",
  // themeColor: "#3b82f6",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Ip Klazz - Markdown-Powered Tutorials",
    description:
      "Explore bite-sized tutorials in HTML, CSS, JavaScript, and more — rendered from markdown with syntax highlighting.",
    url: "https://klazz.vercel.app/",
    siteName: "Ip Klazz",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 1200,
        height: 630,
        alt: "Ip Klazz Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ip Klazz - Markdown-Powered Tutorials",
    description:
      "Markdown-powered tutorials in HTML, CSS, JavaScript, and more.",
    images: ["/android-chrome-192x192.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ip Klazz",
  },
};

// viewport settings are handled by Next.js defaults or can be added here if needed.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#3b82f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-300 text-gray-900 dark:bg-gray-950 dark:text-gray-300`}
      >
        <ServiceWorkerRegister />
        <InstallPrompt />
        <IOSInstallHint />
        <UpdateToast />
        <nav className="p-[1rem] shadow-2xl mb-[-2rem] fixed w-full bg-gray-200 dark:bg-blue-950 dark:text-gray-300 flex items-center justify-between">
          <Link href="/" className="text-decoration-none">
            <span className="text-orange-500 font-bold">Ip Klazz</span>
          </Link>
        </nav>
        {children}

        {/* Site footer */}
        <Footer />
      </body>
    </html>
  );
}
