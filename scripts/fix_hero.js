const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../client/src/pages/pujas');

const files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.endsWith('.jsx')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        let changed = false;
        
        // Find style={{ '--sp-hero-image': `url(${someHero})` }}
        content = content.replace(/style=\{\{\s*'--sp-hero-image':\s*`url\(\$\{([A-Za-z]+Hero)\}\)`\s*\}\}/g, (match, varName) => {
            changed = true;
            return "style={{ '--sp-hero-image': `url(${heroImage})` }}";
        });

        if (changed) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed ${file}`);
        }
    }
});
