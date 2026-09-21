const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');

async function run() {
  try {
    const inputPath = 'C:\\Users\\LOQ\\.gemini\\antigravity-ide\\brain\\3938f653-57e1-4a62-b8a8-cb89d7acd4ae\\.user_uploaded\\media_1789925934763.png';
    const outputPath = 'public/assets/wasil-portrait-laptop.png';
    console.log(`Starting background removal for ${inputPath}`);
    
    // Process image
    const fileUrl = 'file:///' + inputPath.replace(/\\/g, '/');
    const blob = await removeBackground(fileUrl);
    
    // Convert blob to buffer
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Write output
    fs.writeFileSync(outputPath, buffer);
    console.log(`Successfully saved transparent PNG to ${outputPath}`);
  } catch (error) {
    console.error('Error removing background:', error);
  }
}

run();
