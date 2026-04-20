const fs = require('fs');
const path = require('path');

const pujasDir = path.join(__dirname, '../client/src/pages/pujas');

const planetData = {
    'Mangal': {
        planetName: 'Mangal (Mars)',
        deity: 'Lord Hanuman and Mangal Dev',
        mantra: 'Om Kram Krim Kraum Sah Bhaumaya Namah',
        color: 'red',
        item: 'copper/coral',
        offerings: 'red flowers and sindoor',
        ahuti: 'specific red oblations',
        energy: 'fiery energy',
        basicFeatures: ['Mangal Beej Mantra Chanting', 'Personal Sankalp', 'Red Flowers Offering', 'Prasad dispatch'],
        standardFeatures: ['All Basic features', '10,000x Mangal Mantra', 'Havan with specific Ahuti', 'Copper Item Energization', 'Video recording'],
        premiumFeatures: ['All Standard features', 'Mangal Yantra Sthapana', 'Live Individual Participation', 'Complete Navgraha Shanti', 'Post-Puja Consultation']
    },
    'Shukra': {
        planetName: 'Shukra (Venus)',
        deity: 'Goddess Lakshmi and Shukracharya',
        mantra: 'Om Dram Drim Draum Sah Shukraya Namah',
        color: 'white',
        item: 'silver/crystal',
        offerings: 'white lotuses and perfumes',
        ahuti: 'sweet oblations and ghee',
        energy: 'luxurious and harmonious energy',
        basicFeatures: ['Shukra Beej Mantra Chanting', 'Personal Sankalp', 'White Flowers Offering', 'Prasad dispatch'],
        standardFeatures: ['All Basic features', '10,000x Shukra Mantra', 'Havan with sweet Ahuti', 'Silver/Crystal Energization', 'Video recording'],
        premiumFeatures: ['All Standard features', 'Shukra Yantra Sthapana', 'Live Individual Participation', 'Complete Navgraha Shanti', 'Post-Puja Consultation']
    },
    'Budh': {
        planetName: 'Budh (Mercury)',
        deity: 'Lord Ganesha and Budh Dev',
        mantra: 'Om Bram Brim Braum Sah Budhaya Namah',
        color: 'green',
        item: 'bronze/emerald',
        offerings: 'green durva grass and tulsi',
        ahuti: 'green moong and specific oblations',
        energy: 'intellectual and communicative energy',
        basicFeatures: ['Budh Beej Mantra Chanting', 'Personal Sankalp', 'Green Durva Offering', 'Prasad dispatch'],
        standardFeatures: ['All Basic features', '10,000x Budh Mantra', 'Havan with specific Ahuti', 'Bronze Item Energization', 'Video recording'],
        premiumFeatures: ['All Standard features', 'Budh Yantra Sthapana', 'Live Individual Participation', 'Complete Navgraha Shanti', 'Post-Puja Consultation']
    },
    'Chandra': {
        planetName: 'Chandra (Moon)',
        deity: 'Lord Shiva and Chandra Dev',
        mantra: 'Om Shram Shrim Shraum Sah Chandraya Namah',
        color: 'white/silver',
        item: 'silver/pearl',
        offerings: 'milk, rice, and white flowers',
        ahuti: 'kheer and white sesame',
        energy: 'calming and emotional energy',
        basicFeatures: ['Chandra Beej Mantra Chanting', 'Personal Sankalp', 'White Flowers Offering', 'Prasad dispatch'],
        standardFeatures: ['All Basic features', '10,000x Chandra Mantra', 'Havan with Milk Ahuti', 'Silver Item Energization', 'Video recording'],
        premiumFeatures: ['All Standard features', 'Chandra Yantra Sthapana', 'Live Individual Participation', 'Complete Navgraha Shanti', 'Post-Puja Consultation']
    },
    'Surya': {
        planetName: 'Surya (Sun)',
        deity: 'Lord Surya Narayana',
        mantra: 'Om Hram Hrim Hraum Sah Suryaya Namah',
        color: 'orange/red',
        item: 'copper/ruby',
        offerings: 'red lotuses and water (Arghya)',
        ahuti: 'wheat and specific wood',
        energy: 'radiant and authoritative energy',
        basicFeatures: ['Surya Arghya ritual', 'Aditya Hridayam recitation', 'Personal Sankalp', 'Prasad dispatch'],
        standardFeatures: ['All Basic features', 'Surya Namaskar Mantra (108x)', 'Havan with Surya Ahuti', 'Copper item energisation', 'Video recording'],
        premiumFeatures: ['All Standard features', 'Navgraha Shanti', 'Surya Yantra energisation', 'Individual online participation', 'Post-puja consultation']
    },
    'Guru': {
        planetName: 'Guru (Jupiter)',
        deity: 'Lord Vishnu and Brihaspati',
        mantra: 'Om Gram Grim Graum Sah Gurave Namah',
        color: 'yellow',
        item: 'gold/brass',
        offerings: 'yellow flowers and turmeric',
        ahuti: 'yellow pulses and ghee',
        energy: 'expansive and wise energy',
        basicFeatures: ['Guru Beej Mantra Chanting', 'Personal Sankalp', 'Yellow Flowers Offering', 'Prasad dispatch'],
        standardFeatures: ['All Basic features', '10,000x Guru Mantra', 'Havan with specific Ahuti', 'Brass Item Energization', 'Video recording'],
        premiumFeatures: ['All Standard features', 'Guru Yantra Sthapana', 'Live Individual Participation', 'Complete Navgraha Shanti', 'Post-Puja Consultation']
    },
    'Shani': {
        planetName: 'Shani (Saturn)',
        deity: 'Lord Shiva and Shani Dev',
        mantra: 'Om Pram Prim Praum Sah Shanaye Namah',
        color: 'blue/black',
        item: 'iron/sapphire',
        offerings: 'blue flowers and black sesame seeds',
        ahuti: 'mustard oil and black sesame',
        energy: 'disciplined and structuring energy',
        basicFeatures: ['Shani Beej Mantra Chanting', 'Personal Sankalp', 'Blue Flowers Offering', 'Prasad dispatch'],
        standardFeatures: ['All Basic features', '10,000x Shani Mantra', 'Havan with specific Ahuti', 'Iron Item Energization', 'Video recording'],
        premiumFeatures: ['All Standard features', 'Shani Yantra Sthapana', 'Live Individual Participation', 'Complete Navgraha Shanti', 'Post-Puja Consultation']
    }
};

const rashiData = {
    'MeshPujaPage.jsx': { eng: 'Aries', ruler: 'Mangal', theme: 'courage, physical vitality, and triumph over enemies' },
    'VrishabhPujaPage.jsx': { eng: 'Taurus', ruler: 'Shukra', theme: 'wealth, stability, luxury, and lasting romance' },
    'MithunPujaPage.jsx': { eng: 'Gemini', ruler: 'Budh', theme: 'intelligence, fast communication, business success, and adaptability' },
    'KarkPujaPage.jsx': { eng: 'Cancer', ruler: 'Chandra', theme: 'emotional peace, mental clarity, and domestic harmony' },
    'SinghPujaPage.jsx': { eng: 'Leo', ruler: 'Surya', theme: 'leadership, immense confidence, health, and authority' },
    'KanyaPujaPage.jsx': { eng: 'Virgo', ruler: 'Budh', theme: 'analytical skills, overcoming debts, and healing from disease' },
    'TulaPujaPage.jsx': { eng: 'Libra', ruler: 'Shukra', theme: 'harmony, successful partnerships, justice, and artistic fame' },
    'VrishchikPujaPage.jsx': { eng: 'Scorpio', ruler: 'Mangal', theme: 'transformation, hidden wealth, deep research, and overcoming trauma' },
    'DhanuPujaPage.jsx': { eng: 'Sagittarius', ruler: 'Guru', theme: 'higher education, spiritual luck, fortune, and global travel' },
    'MakarPujaPage.jsx': { eng: 'Capricorn', ruler: 'Shani', theme: 'career milestones, discipline, massive structural success, and reward for hard work' },
    'KumbhPujaPage.jsx': { eng: 'Aquarius', ruler: 'Shani', theme: 'innovation, large-scale financial gains, networking, and removing deep blockages' },
    'MeenPujaPage.jsx': { eng: 'Pisces', ruler: 'Guru', theme: 'spiritual liberation, deep wisdom, foreign settlement, and intuition' }
};

for (const [filename, rashi] of Object.entries(rashiData)) {
    const filePath = path.join(pujasDir, filename);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${filename} (not found)`);
        continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const pl = planetData[rashi.ruler];
    
    const pujaNameHindi = filename.replace('PujaPage.jsx', '');
    const fullPujaName = `${pujaNameHindi} (${rashi.eng}) Puja`;

    // 1. Replace PACKAGES array
    const packagesRegex = /const PACKAGES = \[\s*\{[\s\S]*?\}\s*\]\n/m;
    const newPackages = `const PACKAGES = [
    {
        id: 'basic',
        name: 'Sadharan Puja',
        price: 1100,
        duration: '45 min',
        features: ${JSON.stringify(pl.basicFeatures)},
    },
    {
        id: 'standard',
        name: 'Vishesh Puja',
        price: 2100,
        duration: '90 min',
        features: ${JSON.stringify(pl.standardFeatures)},
        popular: true,
    },
    {
        id: 'premium',
        name: 'Maha ${pujaNameHindi} Puja',
        price: 5100,
        duration: '3 hours',
        features: ${JSON.stringify(pl.premiumFeatures)},
    },
]
`;
    content = content.replace(packagesRegex, newPackages);

    // 2. Replace BENEFITS array
    const benefitsRegex = /const BENEFITS = \[\s*\{[\s\S]*?\}\s*\]\n/m;
    const newBenefits = `const BENEFITS = [
    { icon: <GiFlame />, title: 'Core Strength', desc: 'Boosts your natural ${rashi.theme}.' },
    { icon: <GiShield />, title: 'Cosmic Protection', desc: 'Shields against malefic planetary transits affecting ${rashi.eng}.' },
    { icon: <GiCoins />, title: 'Prosperity', desc: 'Attracts financial stability aligned with ${pl.planetName} energy.' },
    { icon: <GiHealing />, title: 'Mental Peace', desc: 'Soothes anxieties and clears blockages in your personal life.' },
    { icon: <GiScrollUnfurled />, title: 'Spiritual Alignment', desc: 'Harmonizes your karmic path and balances your soul.' },
    { icon: '🌟', title: 'Life Success', desc: 'Enhances overall success, joy, and fulfillment in your daily pursuits.' }
]
`;
    content = content.replace(benefitsRegex, newBenefits);

    // 3. Replace Hero Description
    const heroDescRegex = /<p>\[Hero description.*?\]<\/p>/;
    content = content.replace(heroDescRegex, `<p>Attain ${rashi.theme} and invite divine blessings into your life. ${pl.planetName} governs ${rashi.eng}; balancing its energy unlocks profound cosmic benefits.</p>`);

    // 4. Replace What is Puja 
    const whatIsRegex = /<section className="sp-section sp-about">[\s\S]*?<\/section>/;
    const newWhatIs = `<section className="sp-section sp-about">
                <div className="sp-container">
                    <div className="sp-label">Ancient Vedic Ritual</div>
                    <h2>What is ${fullPujaName}?</h2>
                    <p>${fullPujaName} is a powerful Vedic ritual dedicated to ${pl.deity} and ${pl.planetName}. As the sign of ${rashi.eng}, it perfectly channels the energy of ${rashi.theme}.</p>
                    <p>When ${pl.planetName} is weak or afflicted in your horoscope, it can cause significant obstacles. This tailored ritual pacifies these malefic placements.</p>
                    <p>The puja is traditionally performed to invoke purely auspicious energies, featuring specific ${pl.planetName} Beej Mantras and sacred offerings to clear karmic blockages.</p>
                </div>
            </section>`;
    content = content.replace(whatIsRegex, newWhatIs);

    // 5. Replace Why Perform grid
    const whyRegex = /<section className="sp-section sp-why">[\s\S]*?<\/section>/;
    const newWhy = `<section className="sp-section sp-why">
                <div className="sp-container">
                    <div className="sp-label">Purpose & Significance</div>
                    <h2>Why Do People Perform ${fullPujaName}?</h2>
                    <div className="sp-why-grid">
                        <div className="sp-why-card">
                            <h4>💫 Astrological Alignment</h4>
                            <p>Corrects doshas and negative transits directly impacting the ${rashi.eng} moon sign or ascendant.</p>
                        </div>
                        <div className="sp-why-card">
                            <h4>🎯 Career Breakthroughs</h4>
                            <p>Removes unseen obstacles severely blocking your professional and financial ${rashi.theme}.</p>
                        </div>
                        <div className="sp-why-card">
                            <h4>🧘 Inner Peace</h4>
                            <p>Resolves mental unrest and brings deeply rooted emotional stability and clarity.</p>
                        </div>
                        <div className="sp-why-card">
                            <h4>❤️ Relationship Harmony</h4>
                            <p>Heals familial disputes and paves the way for loving, supportive partnerships.</p>
                        </div>
                        <div className="sp-why-card">
                            <h4>🛡️ Health Protection</h4>
                            <p>Activates a cosmic shield to protect your physical vitality and holistic wellbeing.</p>
                        </div>
                        <div className="sp-why-card">
                            <h4>✨ Karmic Cleansing</h4>
                            <p>Accelerates the process of overcoming past life karmic debts blocking your success.</p>
                        </div>
                    </div>
                </div>
            </section>`;
    content = content.replace(whyRegex, newWhy);

    // 6. Replace Process Stairs
    const processRegex = /<div className="sp-stairs">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
    const newProcess = `<div className="sp-stairs">
                        {[
                            { num: 1, icon: '🧘', title: 'Sankalp', sub: 'Setting your personalized intention with name & gotra' },
                            { num: 2, icon: '🙏', title: 'Avahana', sub: 'Invoking ${pl.deity} with ancient Vedic mantras' },
                            { num: 3, icon: '🌸', title: 'Shodashopachar', sub: 'Offering ${pl.offerings} and sacred items' },
                            { num: 4, icon: '📖', title: 'Mantra Japa', sub: 'Chanting ${pl.mantra}' },
                            { num: 5, icon: '🔥', title: 'Sacred Havan', sub: 'Fire ritual with ${pl.ahuti}' },
                            { num: 6, icon: '💧', title: 'Shanti Path', sub: 'Vedic prayers to stabilize the ${pl.energy}' },
                            { num: 7, icon: '🎁', title: 'Aarti & Prasad', sub: 'Sending you energized ${pl.item} and divine blessings' },
                        ].map((s, i) => (
                            <div key={s.num} className="sp-stair" style={{ '--i': i }}>
                                <div className="sp-stair-num">{s.num}</div>
                                <div className="sp-stair-icon">{s.icon}</div>
                                <div className="sp-stair-text">
                                    <span className="sp-stair-title">{s.title}</span>
                                    <span className="sp-stair-sub">{s.sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>`;
    content = content.replace(processRegex, newProcess);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully updated ${filename}`);
}
