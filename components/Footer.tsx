import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-8 py-6 bg-gray-200 dark:bg-gray-900 dark:text-gray-300">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} Ip Klazz</div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <a href="/manifest.json" className="hover:underline">
            Install
          </a>
        </div>
        {/* Floating theme switch */}
        <div className="m-1 bg-gray-200 dark:bg-gray-800 p-2 rounded-lg shadow-lg ">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
