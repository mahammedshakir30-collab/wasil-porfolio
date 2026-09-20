import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsDir = path.join(__dirname, '../public/projects');
const outputFile = path.join(__dirname, '../src/data/portfolio.json');

// Ensure data directory exists
const dataDir = path.dirname(outputFile);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

function generateData() {
  if (!fs.existsSync(projectsDir)) {
    console.warn(`Warning: Projects directory not found at ${projectsDir}`);
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
    return;
  }

  const categories = fs.readdirSync(projectsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory());

  const portfolioItems = [];
  let idCounter = 1;

  for (const category of categories) {
    const categoryName = category.name;
    // Format category name for display (e.g. "special day" -> "Special Day")
    const formattedCategory = categoryName
      .split(/[-_ ]+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const categoryPath = path.join(projectsDir, categoryName);
    const files = fs.readdirSync(categoryPath);

    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
        // Basic title from filename
        const title = file
          .replace(/\.[^/.]+$/, "") // remove extension
          .split(/[-_]+/)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        portfolioItems.push({
          id: idCounter++,
          title: title,
          category: formattedCategory,
          src: `/projects/${categoryName}/${file}`,
          client: 'Independent',
          tags: [formattedCategory.toLowerCase(), 'design'],
          type: 'Standard'
        });
      }
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(portfolioItems, null, 2));
  console.log(`Successfully generated portfolio data with ${portfolioItems.length} items.`);
}

generateData();
