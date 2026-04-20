const fs = require('fs');
const path = require('path');

const mappings = {
    'ChandraPujaPage.jsx': 'chandra puja.png',
    'KetuPujaPage.jsx': 'ketu puja.png',
    'NavgrahaShantiPujaPage.jsx': 'navgraha shanti puja.png',
    'RahuPujaPage.jsx': 'rahu puja.png',
    'ShaniPujaPage.jsx': 'shani puja.png',
    'ShukraPujaPage.jsx': 'shukra puja.png',
    'GuruPujaPage.jsx': 'guru puja.png',
    'BudhPujaPage.jsx': 'budh graha puja.png',
    'MangalPujaPage.jsx': 'mangal puja.png'
};

const pujasDir = path.join(__dirname, '../client/src/pages/pujas');

for (const [file, image] of Object.entries(mappings)) {
    const filePath = path.join(pujasDir, file);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${file}`);
        continue;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the heroImage import with the new image
    content = content.replace(/import heroImage from '\.\.\/\.\.\/assets\/[^']+';/, `import heroImage from '../../assets/${image}';`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file} -> ${image}`);
}
