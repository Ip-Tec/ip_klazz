const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const notesDir = path.join(process.cwd(), 'public', 'Note');
const outputDir = path.join(process.cwd(), 'public');
const outputPath = path.join(outputDir, 'search-index.json');

function getAllFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.md') && file !== 'Table_Of_Contents.md') {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

function generateSearchIndex() {
  console.log('Generating search index...');
  
  const files = getAllFiles(notesDir);
  const searchIndex = [];

  files.forEach((filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    // Create a relative path for the URL
    // e.g., public/Note/python/core/intro.md -> /language/python/core/intro
    const relativePath = path.relative(notesDir, filePath);
    const parts = relativePath.split(path.sep);
    const lang = parts[0];
    const slugParts = parts.slice(1).map(p => p.replace('.md', ''));
    const url = `/language/${lang}/${slugParts.join('/')}`;

    // Create a snippet (first 150 chars of content)
    const contentSnippet = content
      .replace(/[#*`]/g, '') // Remove markdown formatting
      .replace(/\s+/g, ' ')  // Collapse whitespace
      .trim()
      .substring(0, 150) + '...';

    const title = data.title || 
       slugParts[slugParts.length - 1]
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());

    searchIndex.push({
      title,
      content: contentSnippet, // Searching snippet content
      url,
      lang,
      type: 'Tutorial'
    });
  });

  fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2));
  console.log(`Search index generated with ${searchIndex.length} items.`);
}

generateSearchIndex();
