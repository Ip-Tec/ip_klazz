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
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Tutorial Website</h1>
      <p>Select a tutorial to get started:</p>
      {mdFiles.length > 0 ? (
        <ul>
          {mdFiles.map((file) => (
            <li key={file}>
              <Link href={`/tutorial/${file.replace(".md", "")}`}>
                {file.replace(".md", "")}
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
