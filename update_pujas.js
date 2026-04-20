const fs = require('fs');
const path = require('path');

const pujasDir = path.join(__dirname, 'client/src/pages/pujas');

const files = fs.readdirSync(pujasDir).filter(f => f.endsWith('.jsx'));

let changedFiles = 0;

for (const file of files) {
  const filePath = path.join(pujasDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Notice: Some <p> might have classes or styles: <p className="sp-hindi">
  // We want to match: (<p[^>]*> ... </p>) followed by (<p className="sp-hindi"> ... </p>)
  // But wait, what if the first <p> IS the sp-hindi one? It won't match if we are careful.
  
  // Using a robust regex:
  // Capture English <p> that IS NOT sp-hindi: (<p(?:(?!className="sp-hindi")[^>])*>[\s\S]*?<\/p>)
  // Capture Hindi <p>: (<p className="sp-hindi"[\s\S]*?<\/p>)
  
  const regex = /(<p(?![^>]*className="sp-hindi")[^>]*>[\s\S]*?<\/p>)\s*(<p className="sp-hindi"[^>]*>[\s\S]*?<\/p>)/g;
  
  const newContent = content.replace(regex, '<div className="sp-translation-wrapper">\n                                $1\n                                $2\n                            </div>');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    changedFiles++;
  }
}

console.log(`Updated ${changedFiles} files with translation wrappers.`);
