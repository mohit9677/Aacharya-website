const fs = require('fs');
const path = require('path');

const CLIENT_DIR = path.join(__dirname, '../client');
const APP_PATH = path.join(CLIENT_DIR, 'src/App.jsx');

let appJsx = fs.readFileSync(APP_PATH, 'utf8');

// Find all Route lines we just added, e.g. <Route path="/puja/something" element={<SomeNamePage />} />
const regex = /<Route path="\/puja\/[^"]+" element=\{<([A-Za-z0-9_]+) \/>\} \/>/g;

let match;
const newImports = [];

while ((match = regex.exec(appJsx)) !== null) {
  const componentName = match[1];
  if(componentName !== 'SuryaPujaPage') {
    newImports.push(`import ${componentName} from './pages/pujas/${componentName}';`);
  }
}

// Remove previously added broken routes if any (just in case we run it multiple times)
// but wait, routes ARE in there. We just need the imports.

if (!appJsx.includes('import ChandraPujaPage')) {
  appJsx = appJsx.replace(
      "import SuryaPujaPage from './pages/SuryaPujaPage'", 
      "import SuryaPujaPage from './pages/SuryaPujaPage'\n" + newImports.join('\n')
  );
  fs.writeFileSync(APP_PATH, appJsx);
  console.log('✅ Fixed App.jsx imports');
}
