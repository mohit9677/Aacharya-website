const fs = require('fs');
const path = require('path');

const pujasDir = path.join(__dirname, 'client/src/pages/pujas');
const files = fs.readdirSync(pujasDir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
    const fp = path.join(pujasDir, f);
    let content = fs.readFileSync(fp, 'utf8');
    let original = content;

    // 1. Remove Hindi text and unwrap English text in the hero section
    // Use a regex to isolate the <section className="sp-hero" ... > ... </section>
    content = content.replace(/(<section[^>]*className="sp-hero"[^>]*>)([\s\S]*?)(<\/section>)/, (match, p1, p2, p3) => {
        // Inside the hero section, find the wrapper and Hindi text
        // <div className="sp-translation-wrapper">\n <p>English...</p>\n <p className="sp-hindi">Hindi...</p>\n </div>
        let heroInner = p2;
        const wrapperRegex = /<div className="sp-translation-wrapper">\s*(<p>[\s\S]*?<\/p>)\s*<p className="sp-hindi"[\s\S]*?<\/p>\s*<\/div>/g;
        
        // Replace with just the English <p>
        heroInner = heroInner.replace(wrapperRegex, '$1');
        
        // Also catch cases where my safe_update.js didn't wrap it but it has <p className="sp-hindi">
        const hindiParagraphRegex = /\s*<p className="sp-hindi"[^>]*>[\s\S]*?<\/p>/g;
        heroInner = heroInner.replace(hindiParagraphRegex, '');
        
        return p1 + heroInner + p3;
    });

    // 2. Fix the Benefits rendering to support | and apply the maroon color via sp-hindi class
    const oldBenefitRender = `<p>{b.desc}</p>`;
    const newBenefitRender = `{b.desc.includes('|') ? (
                                    <div className="sp-translation-wrapper" style={{ flexDirection: 'column', gap: '0.6rem', marginBottom: 0 }}>
                                        <p>{b.desc.split('|')[0].trim()}</p>
                                        <p className="sp-hindi"><em>{b.desc.split('|')[1].trim()}</em></p>
                                    </div>
                                ) : (
                                    <p>{b.desc}</p>
                                )}`;
                                
    content = content.replace(oldBenefitRender, newBenefitRender);

    if (content !== original) {
        fs.writeFileSync(fp, content, 'utf8');
        console.log(`Updated ${f}`);
    }
});
