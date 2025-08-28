import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

export default async function Home() {
  const notesDirectory = path.join(process.cwd(), "Note");
  const languageFolders = await fs.readdir(notesDirectory, {
    withFileTypes: true,
  });
  const languages = languageFolders
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return (
    <div className="p-4 my-0 max-w-[900px] mx-auto">
      <h1>Choose a Language</h1>
      <div className="flex flex-wrap gap-4">
        {languages.map((lang) => (
          <Link key={lang} href={`/language/${lang}`}>
            <div className="border border-gray-300 rounded-lg p-4 w-48 text-center cursor-pointer bg-gray-100">
              <h2 className="text-lg font-semibold">{lang}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
