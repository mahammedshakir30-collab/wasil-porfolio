import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.js';
import { createCanvas } from 'canvas';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the standard worker is used
pdfjsLib.GlobalWorkerOptions.workerSrc = require.resolve('pdfjs-dist/legacy/build/pdf.worker.js');

const CMAP_URL = path.join(path.dirname(require.resolve('pdfjs-dist/legacy/build/pdf.js')), '../cmaps/').replace(/\\/g, '/') + '/';
const CMAP_PACKED = true;

const projects = [
  {
    pdfPath: path.join(__dirname, 'public/projects/menu/Document from واصل بن حسن.pdf'),
    outputDir: path.join(__dirname, 'public/assets/posters/dr-tea'),
    prefix: 'page'
  },
  {
    pdfPath: path.join(__dirname, 'public/projects/menu/Document from واصل بن حسن (2).pdf'),
    outputDir: path.join(__dirname, 'public/assets/posters/cloud-cafe'),
    prefix: 'page'
  },
  {
    pdfPath: path.join(__dirname, 'public/projects/menu/Document from واصل بن حسن (1).pdf'),
    outputDir: path.join(__dirname, 'public/assets/posters/eden-garden-cafe'),
    prefix: 'page'
  }
];

async function extractPdf(project) {
  console.log(`Processing ${path.basename(project.pdfPath)}...`);
  
  if (!fs.existsSync(project.pdfPath)) {
    console.error(`File not found: ${project.pdfPath}`);
    return;
  }

  // Create output dir
  if (!fs.existsSync(project.outputDir)) {
    fs.mkdirSync(project.outputDir, { recursive: true });
  }

  const data = new Uint8Array(fs.readFileSync(project.pdfPath));
  const loadingTask = pdfjsLib.getDocument({
    data,
    cMapUrl: CMAP_URL,
    cMapPacked: CMAP_PACKED,
  });

  const pdfDocument = await loadingTask.promise;
  const numPages = pdfDocument.numPages;
  console.log(`Found ${numPages} pages.`);

  for (let i = 1; i <= numPages; i++) {
    const page = await pdfDocument.getPage(i);
    const viewport = page.getViewport({ scale: 2.0 }); // High res

    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext('2d');

    await page.render({
      canvasContext: context,
      viewport: viewport,
    }).promise;

    const pageNumStr = i.toString().padStart(2, '0');
    const outPath = path.join(project.outputDir, `${project.prefix}${pageNumStr}.jpg`);
    
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
    fs.writeFileSync(outPath, buffer);
    console.log(`Saved ${outPath}`);
  }
  
  console.log(`Finished ${project.pdfPath}\n`);
}

async function main() {
  for (const proj of projects) {
    await extractPdf(proj);
  }
  
  // Handle the single image poster
  const posterSource = path.join(__dirname, 'public/projects/menu/Photo from واصل بن حسن.jpg');
  const posterDestDir = path.join(__dirname, 'public/assets/posters/eden-garden-poster');
  if (fs.existsSync(posterSource)) {
    if (!fs.existsSync(posterDestDir)) {
      fs.mkdirSync(posterDestDir, { recursive: true });
    }
    fs.copyFileSync(posterSource, path.join(posterDestDir, 'page01.jpg'));
    console.log(`Copied single poster to ${posterDestDir}/page01.jpg`);
  }
}

main().catch(console.error);
