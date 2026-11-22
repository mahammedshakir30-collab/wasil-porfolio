import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.js';
import { createCanvas } from 'canvas';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

pdfjsLib.GlobalWorkerOptions.workerSrc = require.resolve('pdfjs-dist/legacy/build/pdf.worker.js');

const CMAP_URL = path.join(path.dirname(require.resolve('pdfjs-dist/legacy/build/pdf.js')), '../cmaps/').replace(/\\/g, '/') + '/';
const CMAP_PACKED = true;

const brochures = [
  {
    id: 'kron-company',
    pdfPath: path.join(__dirname, '../public/projects/brochures/kron-company-profile.pdf'),
    outputDir: path.join(__dirname, '../public/assets/brochures/kron-company'),
    prefix: 'page'
  },
  {
    id: 'cactus-clarity',
    pdfPath: path.join(__dirname, '../public/projects/brochures/cactus-business-clarity.pdf'),
    outputDir: path.join(__dirname, '../public/assets/brochures/cactus-clarity'),
    prefix: 'page'
  },
  {
    id: 'cactus-services',
    pdfPath: path.join(__dirname, '../public/projects/brochures/cactus-services-brochure.pdf'),
    outputDir: path.join(__dirname, '../public/assets/brochures/cactus-services'),
    prefix: 'page'
  }
];

async function extractPdf(item) {
  console.log(`Processing ${path.basename(item.pdfPath)}...`);
  if (!fs.existsSync(item.pdfPath)) {
    console.error(`File not found: ${item.pdfPath}`);
    return;
  }

  if (!fs.existsSync(item.outputDir)) {
    fs.mkdirSync(item.outputDir, { recursive: true });
  }

  const data = new Uint8Array(fs.readFileSync(item.pdfPath));
  const doc = await pdfjsLib.getDocument({
    data,
    cMapUrl: CMAP_URL,
    cMapPacked: CMAP_PACKED,
  }).promise;

  const numPages = doc.numPages;
  console.log(`Found ${numPages} pages in ${item.id}.`);

  for (let i = 1; i <= numPages; i++) {
    const page = await doc.getPage(i);
    // 1.5 scale is high-res and sharp on Retina, but lightweight and fast loading
    const viewport = page.getViewport({ scale: 1.5 });

    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext('2d');

    await page.render({
      canvasContext: context,
      viewport: viewport,
    }).promise;

    const pageNumStr = i.toString().padStart(2, '0');
    const outPath = path.join(item.outputDir, `${item.prefix}${pageNumStr}.jpg`);
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
    fs.writeFileSync(outPath, buffer);
  }
  console.log(`Completed ${item.id} (${numPages} pages saved)`);
}

async function main() {
  for (const brochure of brochures) {
    await extractPdf(brochure);
  }
  console.log('All brochure PDFs extracted successfully!');
}

main().catch(console.error);
