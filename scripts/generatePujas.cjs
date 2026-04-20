const fs = require('fs');
const path = require('path');

const CLIENT_DIR = path.join(__dirname, '../client');
const NAVBAR_PATH = path.join(CLIENT_DIR, 'src/components/layout/Navbar.jsx');
const APP_PATH = path.join(CLIENT_DIR, 'src/App.jsx');
const PUJAS_DIR = path.join(CLIENT_DIR, 'src/pages/pujas');
const TEMPLATE_JSX_PATH = path.join(CLIENT_DIR, 'src/pages/SuryaPujaPage.jsx');
const TEMPLATE_CSS_PATH = path.join(CLIENT_DIR, 'src/pages/SuryaPujaPage.css');
const GLOBAL_PUJA_CSS_PATH = path.join(CLIENT_DIR, 'src/pages/pujas/GenericPujaPage.css');

// Ensure output directory exists
if (!fs.existsSync(PUJAS_DIR)) {
    fs.mkdirSync(PUJAS_DIR, { recursive: true });
}

// 1. Copy the CSS file once to act as the generic stylesheet for all new pujas
if (fs.existsSync(TEMPLATE_CSS_PATH)) {
    let cssContent = fs.readFileSync(TEMPLATE_CSS_PATH, 'utf8');
    fs.writeFileSync(GLOBAL_PUJA_CSS_PATH, cssContent);
    console.log('✅ Created GenericPujaPage.css');
}

// 2. Read Navbar.jsx and inject slugs
let navbarContent = fs.readFileSync(NAVBAR_PATH, 'utf8');
const pujaRegex = /\{\s*id:\s*(\d+),\s*title:\s*"([^"]+)",\s*category:\s*"([^"]+)"(,\s*slug:\s*"[^"]+")?,([^}]+)\}/g;

const pujas = [];
let updatedNavbar = navbarContent.replace(pujaRegex, (match, id, title, category, existingSlug, rest) => {
    // Generate slug from title: "Chandra (Moon) Puja" -> "chandra-puja"
    let generatedSlug = title.toLowerCase()
        .replace(/\s*\(.*?\)\s*/g, '-') // replace (Moon) with -
        .replace(/[^a-z0-9]+/g, '-')    // replace non alphanumeric with -
        .replace(/-+/g, '-')            // collapse dashes
        .replace(/^-|-$/g, '');         // trim dashes

    if (!generatedSlug.endsWith('puja')) {
        generatedSlug += '-puja';
    }

    const slugToUse = existingSlug ? existingSlug.match(/"([^"]+)"/)[1] : generatedSlug;
    pujas.push({ id, title, category, slug: slugToUse });

    // reconstruct the object
    return `{ id: ${id}, title: "${title}", category: "${category}", slug: "${slugToUse}",${rest}}`;
});

fs.writeFileSync(NAVBAR_PATH, updatedNavbar);
console.log('✅ Updated Navbar.jsx with slugs');

// 3. Read SuryaPujaPage.jsx as template
let templateJsx = fs.readFileSync(TEMPLATE_JSX_PATH, 'utf8');

// Convert imports
templateJsx = templateJsx.replace("import suryaHero from '../assets/surya_puja_hero.png'", "import heroImage from '../../assets/all_puja_bg.webp'");
templateJsx = templateJsx.replace("import './SuryaPujaPage.css'", "import './GenericPujaPage.css'");

const componentNames = [];

pujas.forEach(puja => {
    // Skip surya-puja as it already exists
    if (puja.slug === 'surya-puja') return;

    const componentName = puja.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Page';
    componentNames.push({ name: componentName, slug: puja.slug });

    let newJsx = templateJsx;
    
    // Replace Constants
    newJsx = newJsx.replace(/const PUJA_ID = 'surya-puja'/, `const PUJA_ID = '${puja.slug}'`);
    newJsx = newJsx.replace(/const PUJA_NAME = 'Surya \(Sun\) Puja'/, `const PUJA_NAME = '${puja.title}'`);
    
    // Replace Component Name
    newJsx = newJsx.replace(/export default function SuryaPujaPage/g, `export default function ${componentName}`);
    
    // Replace Hero Image Variable
    newJsx = newJsx.replace(/src=\{suryaHero\}/g, `src={heroImage}`);
    newJsx = newJsx.replace(/alt="Surya Puja at sunrise"/g, `alt="${puja.title}"`);
    
    // Replace Content with generic placeholders
    newJsx = newJsx.replace(/<h1>Surya \(Sun\) Puja<\/h1>/g, `<h1>${puja.title}</h1>`);
    newJsx = newJsx.replace(/<p>Invoke the blessings of Lord Surya.*?<\/p>/g, `<p>[Hero description for ${puja.title} will go here. This provides the primary benefits and calling.]</p>`);
    
    newJsx = newJsx.replace(/<h2>What is Surya Puja\?<\/h2>/g, `<h2>What is ${puja.title}?</h2>`);
    // Replace the first paragraph in the About section (simplified regex targeting the entire content between headers)
    newJsx = newJsx.replace(/<p>Surya Puja is a sacred Vedic ritual.*?<\/p>/s, `<p>[Detailed description of what ${puja.title} is, its Vedic significance, and the main deity or cosmic energy involved. Add specific context here later.]</p>\n                    <p>[Secondary paragraph detailing when it is traditionally performed and the historical references.]</p>`);
    
    newJsx = newJsx.replace(/<h2>Why Do People Perform Surya Puja\?<\/h2>/g, `<h2>Why Do People Perform ${puja.title}?</h2>`);
    newJsx = newJsx.replace(/<div className="sp-why-grid">.*?<\/div>\s*<\/div>\s*<\/section>/s, 
`<div className="sp-why-grid">
                        <div className="sp-why-card">
                            <h4>🔴 [Reason 1]</h4>
                            <p>[Specific astrologial or life problem addressed by this puja.]</p>
                        </div>
                        <div className="sp-why-card">
                            <h4>🏛️ [Reason 2]</h4>
                            <p>[Another significant reason devotees seek this specific cosmic intervention.]</p>
                        </div>
                        <div className="sp-why-card">
                            <h4>👁️ [Reason 3]</h4>
                            <p>[Health, mental, or physical conditions targeted by the ritual.]</p>
                        </div>
                        <div className="sp-why-card">
                            <h4>💼 [Reason 4]</h4>
                            <p>[Career, business, or prosperity-related obstacles removed.]</p>
                        </div>
                        <div className="sp-why-card">
                            <h4>👨‍👧 [Reason 5]</h4>
                            <p>[Relationship, family, or ancestral benefits granted.]</p>
                        </div>
                        <div className="sp-why-card">
                            <h4>⚡ [Reason 6]</h4>
                            <p>[Dasha, transit or timing-specific amplifications of the puja's effects.]</p>
                        </div>
                    </div>
                </div>
            </section>`);

    newJsx = newJsx.replace(/<h2>Benefits of Surya Puja<\/h2>/g, `<h2>Benefits of ${puja.title}</h2>`);

    const filePath = path.join(PUJAS_DIR, `${componentName}.jsx`);
    fs.writeFileSync(filePath, newJsx);
});

console.log(`✅ Generated ${pujas.length - 1} individual puja web pages`);

// 4. Update App.jsx to register the routes
let appJsx = fs.readFileSync(APP_PATH, 'utf8');

// Inject imports
const imports = componentNames.map(c => `import ${c.name} from './pages/pujas/${c.name}';`).join('\n');
if(!appJsx.includes('import ChandraPujaPage')) {
    appJsx = appJsx.replace(/import SuryaPujaPage from '\.\/pages\/SuryaPujaPage';/, `import SuryaPujaPage from './pages/SuryaPujaPage';\n${imports}`);
}

// Inject routes
const routes = componentNames.map(c => `              <Route path="/puja/${c.slug}" element={<${c.name} />} />`).join('\n');
if(!appJsx.includes('path="/puja/chandra-puja"')) {
    appJsx = appJsx.replace(/<Route path="\/puja\/surya-puja" element=\{<SuryaPujaPage \/>\} \/>/, `<Route path="/puja/surya-puja" element={<SuryaPujaPage />} />\n${routes}`);
}

fs.writeFileSync(APP_PATH, appJsx);
console.log('✅ Updated App.jsx with all routes');
console.log('Script execution complete!');
