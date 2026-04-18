const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const assetsDir = path.join(__dirname, 'src', 'assets');
const images = [
    'all_puja_bg.png',
    'dosha_puja_bg.png',
    'health_puja_bg.png',
    'planet_puja_bg.png',
    'relationship_puja_bg.png',
    'special_puja_bg.png',
    'wealth_puja_bg.png',
    'zodiac_puja_bg.png',
];

async function convertAll() {
    for (const img of images) {
        const input = path.join(assetsDir, img);
        const output = path.join(assetsDir, img.replace('.png', '.webp'));

        if (!fs.existsSync(input)) {
            console.log(`SKIP (not found): ${img}`);
            continue;
        }

        const before = Math.round(fs.statSync(input).size / 1024);
        await sharp(input)
            .resize({ width: 960, withoutEnlargement: true }) // cap at 960px wide - perfect for dropdown
            .webp({ quality: 75 })
            .toFile(output);

        const after = Math.round(fs.statSync(output).size / 1024);
        console.log(`✓ ${img} → ${img.replace('.png', '.webp')}  ${before}KB → ${after}KB`);
    }
    console.log('\nDone. All backgrounds converted to WebP.');
}

convertAll().catch(console.error);
