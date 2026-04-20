const fs = require('fs');
const path = require('path');

const PUJAS_DIR = path.join(__dirname, '../client/src/pages/pujas');

const files = fs.readdirSync(PUJAS_DIR);

files.forEach(file => {
    if (file.endsWith('.jsx')) {
        const filePath = path.join(PUJAS_DIR, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix the undefined variable variable crash
        content = content.replace(/\$\{suryaHero\}/g, "${heroImage}");
        
        fs.writeFileSync(filePath, content);
    }
});

console.log('✅ Fixed React undefined variable crash');
