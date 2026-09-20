const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');

async function run() {
  try {
    const inputPath = 'C:\\Users\\LOQ\\.gemini\\antigravity-ide\\brain\\d8c8d0a9-0659-439a-a9b2-2a61350cd180\\.user_uploaded\\media_1789752870965.jpg';
    const outputPath = 'public/assets/wasil-portrait.png';
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
