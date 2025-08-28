import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";

export default async function Home() {
  const notesDirectory = path.join(process.cwd(), "Note");
  const imageDirectory = path.join(process.cwd(), "public", "image");

  const languageFolders = await fs.readdir(notesDirectory, {
    withFileTypes: true,
  });

  const languages = languageFolders
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const imagePaths = await Promise.all(
    languages.map(async (lang) => {
      const pngPath = path.join(imageDirectory, `${lang}.png`);
      const webpPath = path.join(imageDirectory, `${lang}.webp`);
      const defaultPath = `/image/default.png`;

      try {
        await fs.access(pngPath);
        return `/image/${lang}.png`;
      } catch {
        try {
          await fs.access(webpPath);
          return `/image/${lang}.webp`;
        } catch {
          return defaultPath;
        }
      }
    })
  );

  return (
    <div className="p-4 my-0 max-w-[900px] mx-auto">
      <h1 className="text-2xl font-bold mt-10 ">Choose a Language</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
        {languages.map((lang, index) => (
          <Link key={lang} href={`/language/${lang}`} className="hover:scale-105 transition-transform ">
            <div className=" rounded-lg p-4 w-48 text-center cursor-pointer bg-gray-100">
              <Image
                src={imagePaths[index]}
                alt={lang}
                width={100}
                height={100}
              />
              <h2 className="text-lg font-semibold">{lang.toUpperCase()}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
