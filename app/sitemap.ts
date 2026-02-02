import { MetadataRoute } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

const BASE_URL = 'https://klazz.vercel.app';

// Recursive function to get all paths
async function getPaths(directory: string, base: string[] = []): Promise<string[][]> {
  // Check if directory exists first
  try {
    await fs.access(directory);
  } catch {
    return [];
  }

  const items = await fs.readdir(directory, { withFileTypes: true });
  let paths: string[][] = [];

  for (const item of items) {
    if (item.isDirectory()) {
      const subPaths = await getPaths(path.join(directory, item.name), [...base, item.name]);
      paths.push([...base, item.name]); // The directory itself (for TOC)
      paths = paths.concat(subPaths);
    } else if (item.name.endsWith(".md") && item.name !== "Table_Of_Contents.md") {
      paths.push([...base, item.name.replace(".md", "")]);
    }
  }

  return paths;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/language/html',
    '/language/css',
    '/language/javascript',
    '/language/python',
    '/pricing',
    '/about',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const notesDir = path.join(process.cwd(), "public", "Note");
  const languages = ["html", "css", "javascript", "python"];
  let tutorialRoutes: MetadataRoute.Sitemap = [];

  for (const lang of languages) {
    const langDir = path.join(notesDir, lang);
    const slugs = await getPaths(langDir);
    
    const langRoutes = slugs.map(slug => ({
      url: `${BASE_URL}/language/${lang}/${slug.join('/')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    }));

    tutorialRoutes = [...tutorialRoutes, ...langRoutes];
  }

  return [...routes, ...tutorialRoutes];
}
