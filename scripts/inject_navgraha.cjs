const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '../client/Navgraha_Puja_Complete_Guide.md');
const pujasDir = path.join(__dirname, '../client/src/pages/pujas');

const content = fs.readFileSync(mdPath, 'utf8');

function stripHTML(html) {
    return html.replace(/<[^>]*>?/gm, '').trim();
}

function getEmojiForText(text) {
    const t = text.toLowerCase();
    if (t.match(/health|illness|disease|cure|sick|surgery/)) return '❤️‍🩹';
    if (t.match(/dosha|manglik|kaal sarp|curse|enemy|evil|protect|hex/)) return '🧿';
    if (t.match(/wealth|money|business|loss|debt|finance|trade/)) return '💰';
    if (t.match(/career|job|work|promotion|profession|success/)) return '🚀';
    if (t.match(/education|study|exam|learning|school/)) return '📚';
    if (t.match(/marriage|relationship|divorce|husband|wife/)) return '💍';
    if (t.match(/mental|anxiety|depression|peace|stress|mind|memory/)) return '🧘';
    if (t.match(/foreign|visa|abroad|international/)) return '✈️';
    if (t.match(/land|property|real estate/)) return '🏠';
    if (t.match(/vehicle|car|accident/)) return '🚗';
    if (t.match(/child|progeny|conceive/)) return '👶';
    if (t.match(/speech|communication|stutter|voice/)) return '🗣️';
    if (t.match(/power|politics|influence/)) return '👑';
    if (t.match(/courage|fear|brave|confidence/)) return '🦁';
    if (t.match(/addiction|toxic|habit/)) return '⛓️';
    return '✨';
}

function getIconForText(text) {
    const t = text.toLowerCase();
    if (t.match(/wealth|money|prosperity|business|trade|finance/)) return 'GiCoins';
    if (t.match(/health|heal|disease|cure|physical|illness/)) return 'GiHealthNormal';
    if (t.match(/protect|shield|block|dosha|enemy|negativity|hex/)) return 'GiShield';
    if (t.match(/mind|memory|brain|clarify|intellect|logic/)) return 'GiBrain';
    if (t.match(/peace|calm|harmony|stability|stress/)) return 'GiLotus';
    if (t.match(/career|professional|job|success|promotion/)) return 'GiStairsGoal';
    if (t.match(/power|influence|politics|leaders/)) return 'GiCrown';
    if (t.match(/foreign|travel|abroad/)) return 'GiEarthAmerica';
    if (t.match(/communication|speech|voice/)) return 'GiSoundWaves';
    if (t.match(/education|study|learn|academic|knowledge/)) return 'GiBookAura';
    if (t.match(/love|relationship|marriage|romance|harmony/)) return 'GiHeartBeats';
    if (t.match(/courage|brave|energy|vitality|strength/)) return 'GiMuscularTorso';
    if (t.match(/property|land|home/)) return 'GiHouseKeys';
    if (t.match(/addiction|habit|illusion/)) return 'GiBreakingChain';
    return 'GiSparkles';
}

const planetBlocksRaw = content.split(/<h1><strong>☽ /).slice(1);

for (const block of planetBlocksRaw) {
    const titleMatch = block.match(/^(.*?)<\/strong><\/h1>/);
    if (!titleMatch) continue;
    
    let rawTitle = titleMatch[1].trim(); 
    let fileName = '';
    if (rawTitle.includes('Chandra')) fileName = 'ChandraPujaPage.jsx';
    if (rawTitle.includes('Mangal')) fileName = 'MangalPujaPage.jsx';
    if (rawTitle.includes('Budh')) fileName = 'BudhPujaPage.jsx';
    if (rawTitle.includes('Guru')) fileName = 'GuruPujaPage.jsx';
    if (rawTitle.includes('Shukra')) fileName = 'ShukraPujaPage.jsx';
    if (rawTitle.includes('Shani')) fileName = 'ShaniPujaPage.jsx';
    if (rawTitle.includes('Rahu')) fileName = 'RahuPujaPage.jsx';
    if (rawTitle.includes('Ketu')) fileName = 'KetuPujaPage.jsx';
    if (rawTitle.includes('Navgraha')) fileName = 'NavgrahaShantiPujaPage.jsx';

    if (!fileName) continue;

    console.log(`Processing ${rawTitle} -> ${fileName}`);

    const filePath = path.join(pujasDir, fileName);
    if (!fs.existsSync(filePath)) continue;

    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Extract Reasons from current file to assign correct emojis
    // We already injected the text, so let's just parse the React file's Why Grid and Benefits and replace icons
    
    // Replace why grid emojis
    fileContent = fileContent.replace(/(<div className="sp-why-card">\s*<h4>)(.*?)( Reason \d+<\/h4>\s*<p>)(.*?)(<\/p>)/g, (match, p1, oldEmoji, p3, p4, p5) => {
        const newEmoji = getEmojiForText(p4);
        return `${p1}${newEmoji}${p3}${p4}${p5}`;
    });

    // We also need to extract the Benefits data to recreate the array because the array is at the top of the file
    // Wait, let's just re-extract from the original markdown inside this loop since it's easier to build the array!
    const benefitsMatch = block.match(/Benefits of This Puja.*?(?=Process of This Puja)/is);
    const benefits = [];
    if (benefitsMatch) {
        const regex = /<p><strong>(\d+)<\/strong><\/p><\/td><td><p>(.*?)<\/p><p><em>(.*?)<\/em><\/p><\/td>/g;
        let bMatch;
        while ((bMatch = regex.exec(benefitsMatch[0])) !== null) {
            benefits.push({ num: bMatch[1], eng: stripHTML(bMatch[2]), hi: stripHTML(bMatch[3]) });
        }
    }

    const usedIcons = new Set();
    const newBenefitsStr = `const BENEFITS = [\n` + benefits.map(b => {
        const iconName = getIconForText(b.eng);
        usedIcons.add(iconName);
        return `    { icon: <${iconName} />, title: 'Benefit ${b.num}', desc: '${b.eng.replace(/'/g, "\\'")} | ${b.hi.replace(/'/g, "\\'")}' }`;
    }).join(',\n') + `\n]`;

    fileContent = fileContent.replace(/const BENEFITS = \[[\s\S]*?\]\s*(export default|const)/, newBenefitsStr + '\n\n$1');

    // Make sure we import the newly used icons!
    // Current import: import { GiSunrise, GiFlame, GiHealing, GiCoins, GiShield, GiScrollUnfurled } from 'react-icons/gi'
    let requiredGiIcons = Array.from(usedIcons);
    if (requiredGiIcons.length === 0) requiredGiIcons = ['GiSparkles']; // Fallback
    
    // Wait, there's always an import for GiSunrise for the Hero Badge `<GiSunrise /> Planet Puja`
    if (!requiredGiIcons.includes('GiSunrise')) {
        requiredGiIcons.push('GiSunrise');
    }

    fileContent = fileContent.replace(/import \{.*?\} from 'react-icons\/gi'/, `import { ${requiredGiIcons.join(', ')} } from 'react-icons/gi'`);

    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`Successfully updated icons in ${fileName}`);
}
