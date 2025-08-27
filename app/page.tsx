import path from "path";
import Link from "next/link";
import { promises as fs } from "fs";

export default async function Home() {
  const notesDirectory = path.join(process.cwd(), "Note");
  let mdFiles: string[] = [];

  try {
    const filenames = await fs.readdir(notesDirectory);
    mdFiles = filenames.filter((file) => file.endsWith(".md"));
  } catch (error) {
    console.error("Note directory not found:", error);
  }

  return (
    <div className="p-[2rem] max-w-[800px] my-0 mx-auto">
      <h1>Tutorial Website</h1>
      <p>Select a tutorial to get started</p>
      {mdFiles.length > 0 ? (
        <ul className="w-auto">
          {mdFiles.map((file) => (
            <li key={file} className="my-2 w-full block bg-gray-200 rounded-full">
              <Link
                className="hover:bg-blue-200 p-2 hover:rounded-full block"
                href={`/tutorial/${file.replace(".md", "")}`}
              >
                {file.replace("_", " ").replace(".md", "")}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          No tutorials found. Make sure the &#39;Note&#39; folder exists and
          contains .md files.
        </p>
      )}
    </div>
  );
}
