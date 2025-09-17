// utils/generate-cache-list.js
// Script to generate a list of URLs to cache for the service worker
// This script scans the /public/Note directory for markdown files
// and generates their corresponding URLs based on language and slug.
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseDir = join(__dirname, "..", "public", "Note"); // adjust if needed
const langs = fs.readdirSync(baseDir);
const urls = [];

langs.forEach((lang) => {
  const langDir = join(baseDir, lang);
  const files = fs.readdirSync(langDir).filter((f) => f.endsWith(".md"));
  files.forEach((file) => {
    const slug = file.replace(".md", "");
    urls.push(`/language/${lang}/${slug}/`);
  });
});

fs.writeFileSync(
  join(__dirname, "..", "public", "cache-urls.json"),
  JSON.stringify(urls, null, 2)
);
