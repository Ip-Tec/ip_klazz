import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export async function generateStaticParams() {
  const languages = ["html", "css", "javascript", "python"];
  return languages.map((lang) => ({
    lang: lang,
  }));
}

interface LanguagePageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function LanguagePage({ params }: LanguagePageProps) {
  const { lang } = await params;
  const notesDirectory = path.join(process.cwd(), "public", "Note");
  const langDirectory = path.join(notesDirectory, lang);
  const imageDirectory = path.join(process.cwd(), "public", "image");

  try {
    const items = await fs.readdir(langDirectory, { withFileTypes: true });
    const tracks = items
      .filter((item) => item.isDirectory())
      .map((item) => item.name);

    // Map track names to icon paths
    const getTrackIcon = (track: string, lang: string) => {
      if (track === "core") {
        // Use the main language icon for core
        return `/image/${lang}${lang === 'javascript' ? '.webp' : '.png'}`;
      }
      if (track === "react") return "/image/react.png";
      if (track === "fastapi") return "/image/fastapi.png";
      return "/image/default.png";
    };

    const getTrackTitle = (name: string) => {
      if (name === "core") return "Fundamentals & Core";
      return name.replace(/-/g, " ");
    };

    if (tracks.length > 0) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-900 dark:to-black p-8 flex flex-col items-center justify-center">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-6xl font-black mb-4 text-gray-900 dark:text-white uppercase tracking-tighter drop-shadow-2xl">
              {lang} <span className="text-orange-500">Tracks</span>
            </h1>
            <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 dark:text-gray-400 text-xl font-medium">Elevate your skills with specialized paths</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            {tracks.map((track, idx) => (
              <Link
                key={track}
                href={`/language/${lang}/${track}`}
                className="group relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-full bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl p-8 rounded-[3rem] border border-white/20 dark:border-gray-700/30 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-orange-500/20 flex flex-col items-center text-center group-hover:bg-white/60 dark:group-hover:bg-gray-800/60">
                  
                  <div className="relative mb-8 p-4">
                    <Image
                      src={getTrackIcon(track, lang)}
                      alt={track}
                      width={120}
                      height={120}
                      className="group-hover:rotate-6 transition-transform duration-500 drop-shadow-lg"
                    />
                  </div>

                  <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">
                    {getTrackTitle(track)}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-8">
                    {track === "core" 
                      ? `The essential foundation of ${lang}. Master the syntax and basic principles.`
                      : `Master ${track.toUpperCase()} development and build professional-grade applications.`}
                  </p>

                  <div className="mt-auto py-3 px-6 bg-orange-500 text-white rounded-full font-bold flex items-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Get Started <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="p-8 max-w-[900px] mx-auto text-center mt-20">
        <h1 className="text-4xl font-bold mb-6">No tracks found for {lang}</h1>
        <Link href="/" className="px-8 py-3 bg-gray-900 dark:bg-white dark:text-black text-white rounded-full font-bold hover:scale-105 transition-transform">
          Return Home
        </Link>
      </div>
    );
  } catch (error) {
    console.error("Error reading tracks:", error);
    return (
      <div className="p-8 text-center mt-20">
        <h1 className="text-2xl font-bold text-red-500">Language configuration error</h1>
        <Link href="/" className="text-blue-500 underline mt-4 inline-block">Go Home</Link>
      </div>
    );
  }
}
