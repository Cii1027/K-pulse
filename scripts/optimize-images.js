const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration: sizes and output folders
const sizes = [400, 800, 1200, 1600];
const inDir = path.join(__dirname, '..', 'images', 'originals');
const outDir = path.join(__dirname, '..', 'images', 'optimized');

if (!fs.existsSync(inDir)) {
  console.error('Please create', inDir, 'and drop your official images (e.g. twice.jpg, straykids.jpg)');
  process.exit(1);
}
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

(async function(){
  const files = fs.readdirSync(inDir).filter(f => /\.(jpe?g|png|webp|tiff)$/i.test(f));
  if(files.length===0){
    console.error('No input images found in', inDir);
    process.exit(1);
  }

  for(const file of files){
    const name = path.parse(file).name;
    const srcPath = path.join(inDir, file);
    console.log('Processing', file);
    try{
      // produce JPEG/WEBP for each size
      for(const w of sizes){
        const outJpg = path.join(outDir, `${name}-${w}.jpg`);
        const outWebp = path.join(outDir, `${name}-${w}.webp`);
        await sharp(srcPath).resize({ width: w }).jpeg({ quality: 78, mozjpeg: true }).toFile(outJpg);
        await sharp(srcPath).resize({ width: w }).webp({ quality: 75 }).toFile(outWebp);
      }
      // also produce a 'largest' 2000px version
      const outLarge = path.join(outDir, `${name}-2000.jpg`);
      await sharp(srcPath).resize({ width: 2000 }).jpeg({ quality: 82, mozjpeg: true }).toFile(outLarge);
      console.log('Done', file);
    }catch(err){
      console.error('Error processing', file, err);
    }
  }
  console.log('All done. Optimized images are in', outDir);
})();
