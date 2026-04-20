const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\1c350ee5-faab-4e4d-98cb-d7ed658c2831';
const ASSETS_DIR = path.join(__dirname, '../client/src/assets');

const files = fs.readdirSync(ARTIFACT_DIR);
const imagesToCopy = files.filter(f => f.match(/^(chandra|mangal|budh|guru|shukra|shani|rahu|ketu|navgraha)_puja_hero.*\.png$/));

imagesToCopy.forEach(file => {
    // Standardize name (e.g. chandra_puja_hero_123.png -> chandra_puja_hero.png)
    const newName = file.replace(/_\d+\.png$/, '.png');
    fs.copyFileSync(path.join(ARTIFACT_DIR, file), path.join(ASSETS_DIR, newName));
    console.log(`Copied ${file} to ${newName}`);
});
