const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../public/images/hero_sequence');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Source keyframes
const extHero = path.join(__dirname, '../public/images/hero.jpg');
const userImages = [
  path.join(__dirname, '../public/images/hero_sequence/media_1788269718652.jpg'),
  path.join(__dirname, '../public/images/hero_sequence/media_1788269718653.jpg'),
  path.join(__dirname, '../public/images/hero_sequence/media_1788269718663.jpg'),
  path.join(__dirname, '../public/images/hero_sequence/media_1788269718674.jpg'),
  path.join(__dirname, '../public/images/hero_sequence/media_1788269718689.jpg'),
];

const keyframePaths = [
  fs.existsSync(extHero) ? extHero : userImages[0],
  ...userImages.filter(p => fs.existsSync(p))
];

console.log(`Using ${keyframePaths.length} keyframe sources.`);

const TOTAL_FRAMES = 60;
const WIDTH = 1920;
const HEIGHT = 1080;

async function processFrames() {
  // Load and normalize keyframe raw pixel buffers
  const rawKeyframes = await Promise.all(
    keyframePaths.map(async (p) => {
      const { data, info } = await sharp(p)
        .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'center' })
        .raw()
        .toBuffer({ resolveWithObject: true });
      return { data, info };
    })
  );

  console.log(`Generating ${TOTAL_FRAMES} high-resolution frames with pixel-perfect interpolation...`);

  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const t = i / (TOTAL_FRAMES - 1); // 0 to 1

    const segmentCount = rawKeyframes.length - 1;
    const segExact = t * segmentCount;
    const segIndex = Math.min(Math.floor(segExact), segmentCount - 1);
    const segT = segExact - segIndex;

    // Smooth easeInOutCubic for camera movement
    const easeT = segT < 0.5 
      ? 4 * segT * segT * segT 
      : 1 - Math.pow(-2 * segT + 2, 3) / 2;

    const frameA = rawKeyframes[segIndex].data;
    const frameB = rawKeyframes[segIndex + 1] ? rawKeyframes[segIndex + 1].data : frameA;

    // Blend pixels linearly in raw buffer
    const blendedData = Buffer.alloc(WIDTH * HEIGHT * 3);
    for (let p = 0; p < frameA.length; p++) {
      blendedData[p] = Math.round(frameA[p] * (1 - easeT) + frameB[p] * easeT);
    }

    // Apply continuous camera push-in zoom (1.0 to 1.15)
    const zoomScale = 1.0 + (t * 0.15);
    const scaledW = Math.round(WIDTH * zoomScale);
    const scaledH = Math.round(HEIGHT * zoomScale);
    const cropX = Math.round((scaledW - WIDTH) / 2);
    const cropY = Math.round((scaledH - HEIGHT) / 2);

    const fileName = `frame_${String(i).padStart(3, '0')}.jpg`;
    const destPath = path.join(outputDir, fileName);

    await sharp(blendedData, {
      raw: {
        width: WIDTH,
        height: HEIGHT,
        channels: 3
      }
    })
      .resize(scaledW, scaledH, { fit: 'cover' })
      .extract({ left: cropX, top: cropY, width: WIDTH, height: HEIGHT })
      .jpeg({ quality: 90, progressive: true })
      .toFile(destPath);

    if (i % 10 === 0 || i === TOTAL_FRAMES - 1) {
      console.log(`Generated frame ${i + 1}/${TOTAL_FRAMES} (${fileName})`);
    }
  }

  console.log("Image sequence generation complete with 100% solid quality!");
}

processFrames().catch(err => {
  console.error("Error generating frame sequence:", err);
});
