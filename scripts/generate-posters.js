import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory where posters are stored
const postersDir = path.join(__dirname, '../public/posters');
// Output file for the React app to consume
const outputFile = path.join(__dirname, '../src/data/posters.json');

// Get all files in the posters directory
try {
  if (!fs.existsSync(postersDir)) {
    fs.mkdirSync(postersDir, { recursive: true });
  }

  const files = fs.readdirSync(postersDir);
  
  // Filter out non-image files (like .DS_Store)
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
  });

  // Map to the public URL path
  const posterData = imageFiles.map(file => ({
    id: file,
    url: `posters/${file}`
  }));

  // Write to src/data/posters.json
  fs.writeFileSync(outputFile, JSON.stringify(posterData, null, 2));
  console.log(`Successfully generated posters.json with ${posterData.length} images.`);
} catch (error) {
  console.error('Error generating posters list:', error);
}
