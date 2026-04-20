const fs = require('fs');
const path = require('path');

const PUJAS_DIR = path.join(__dirname, '../client/src/pages/pujas');

const files = fs.readdirSync(PUJAS_DIR);

files.forEach(file => {
    if (file.endsWith('.jsx')) {
        const filePath = path.join(PUJAS_DIR, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix the hero import and path
        // From: import suryaHero from '../assets/surya.png'
        // To: import heroImage from '../../assets/all_puja_bg.webp'
        content = content.replace(/import suryaHero from '\.\.\/assets\/surya\.png';?/g, "import heroImage from '../../assets/all_puja_bg.webp';");
        
        // Also fix the tag incase the previous replacement didn't catch if there was no "suryaHero" 
        content = content.replace(/src=\{suryaHero\}/g, "src={heroImage}");
        
        fs.writeFileSync(filePath, content);
    }
});

console.log('✅ Fixed hero image imports in all generated puja pages');
