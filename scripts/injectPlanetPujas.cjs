const fs = require('fs');
const path = require('path');

const PUJAS_DIR = path.join(__dirname, '../client/src/pages/pujas');

const planetData = {
    'ChandraPujaPage.jsx': {
        importName: 'chandraHero',
        imageFile: 'chandra_puja_hero.png',
        heroTitle: 'Chandra (Moon) Puja',
        heroDesc: 'Attain profound mental peace, emotional stability, and harmonious relationships. The Moon governs the mind; balancing  its energy removes anxiety and attracts serene prosperity.',
        whatIsDesc1: 'Chandra (Moon) Puja is a soothing Vedic ritual dedicated to Lord Soma. In Vedic Astrology, the Moon represents the mind, emotions, mother, and overall psychological well-being. When the Moon is weak or afflicted in a horoscope, it can cause severe depression, mood swings, and instability.',
        whatIsDesc2: 'This ritual is typically performed on Mondays (Somvaar), during Full Moons (Purnima), or specific Nakshatras aligned with Chandra. It involves the chanting of Chandra Beej Mantras and offerings of white items like milk, rice, and silver.',
        whyCards: [
            { icon: '🌪️', title: 'Mental Turmoil', desc: 'Soothes severe anxiety, depression, and mood swings caused by an afflicted Moon.' },
            { icon: '👩‍👧', title: 'Mother’s Health', desc: 'Improves the health and relationship with one’s mother or maternal figures.' },
            { icon: '💧', title: 'Emotional Balance', desc: 'Restores inner peace and helps one recover from deep emotional trauma.' },
            { icon: '🛌', title: 'Sleep Disorders', desc: 'Curative for insomnia, nightmares, and other sleep-related issues.' },
            { icon: '🌊', title: 'Water Elements', desc: 'Removes doshas related to the water element, improving fertility and fluid balance.' },
            { icon: '🌑', title: 'Kemdruma Dosh', desc: 'Neutralizes the dreaded Kemdruma Dosh which brings extreme isolation and poverty.' }
        ],
        benefits: [
            { icon: '<GiHealing />', title: 'Absolute Serenity', desc: 'Brings immense mental peace and clarity, dissolving fears and phobias.' },
            { icon: '<GiCoins />', title: 'Fluid Fortune', desc: 'Ensures a steady flow of liquid cash and maternal wealth.' },
            { icon: '<GiShield />', title: 'Dosha Cancellation', desc: 'Alleviates the negative effects of Eclipse (Grahan) and Kemdruma doshas.' },
            { icon: '<GiScrollUnfurled />', title: 'Creative Intuition', desc: 'Enhances artistic creativity, imagination, and psychic intuition.' },
            { icon: '<GiSunrise />', title: 'Hormonal Balance', desc: 'Improves bodily fluids, hormonal balance, and reproductive health.' },
            { icon: '<GiFlame />', title: 'Calm Relationships', desc: 'Removes emotional friction in marriages and family dynamics.' }
        ],
        packages: [
            { id: 'basic', name: 'Shanti Puja', price: 1100, duration: '45 min', features: ['Chandra Mantra Chanting', 'Personal Sankalp', 'White Flowers Offering', 'Prasad dispatch'], popular: false },
            { id: 'standard', name: 'Vishesh Sommaar Puja', price: 2100, duration: '90 min', features: ['10,000x Chandra Beej Mantra', 'Havan with Milk Ahuti', 'Silver Item Energization', 'Video recording'], popular: true },
            { id: 'premium', name: 'Maha Chandra Purnima Puja', price: 5100, duration: '3 hours', features: ['Complete Navgraha Shanti', 'Chandra Yantra Sthapana', 'Live Individual Participation', 'Post-Puja Consultation'], popular: false }
        ],
        process: [
            { num: 1, icon: '🧘', title: 'Sankalp', sub: 'Setting intention with name & gotra' },
            { num: 2, icon: '🙏', title: 'Avahana', sub: 'Invoking Moon God (Soma)' },
            { num: 3, icon: '🌸', title: 'Shvet Offering', sub: 'Offering white lotuses & sandalwood' },
            { num: 4, icon: '📖', title: 'Mantra Japa', sub: 'Chanting Om Som Somaya Namah' },
            { num: 5, icon: '🔥', title: 'Som Havan', sub: 'Sacred fire with kheer oblations' },
            { num: 6, icon: '💧', title: 'Chandra Arghya', sub: 'Offering milk/water to the Moon' },
            { num: 7, icon: '🎁', title: 'Aarti & Prasad', sub: 'Dispatch of energized silver/pearl' }
        ]
    },
    'MangalPujaPage.jsx': {
        importName: 'mangalHero',
        imageFile: 'mangal_puja_hero.png',
        heroTitle: 'Mangal (Mars) Puja',
        heroDesc: 'Ignite unmatched courage, clear heavy debts, and resolve delayed marriages. Neutralize Manglik Dosh and harness the fiery energy of Mars for victory in all endeavors.',
        whatIsDesc1: 'Mangal (Mars) Puja is an intense and energetic Vedic fire ritual aimed at pacifying Lord Mangal. Mars is the commander-in-chief of the planetary cabinet, symbolizing raw energy, courage, property, blood, and marital harmony.',
        whatIsDesc2: 'An afflicted Mars creates the dreaded Kuja/Manglik Dosh, causing severe marital discord, accidents, and immense debt. This puja is generally performed on Tuesdays using red flowers, red lentils, and fierce Vedic mantras.',
        whyCards: [
            { icon: '💔', title: 'Manglik Dosha', desc: 'Severely delays marriage or causes divorce/discord if left untreated.' },
            { icon: '💸', title: 'Crushing Debt', desc: 'Rin-Mochan (debt-clearing) is a primary reason devotees pray to Mars.' },
            { icon: '🏠', title: 'Property Disputes', desc: 'Resolves legal battles over land, real estate, and family inheritance.' },
            { icon: '🩸', title: 'Blood & Health', desc: 'Aids in recovering from surgeries, accidents, and blood-related disorders.' },
            { icon: '⚔️', title: 'Enemies & Litigation', desc: 'Grants victory over hidden enemies and success in court cases.' },
            { icon: '🔥', title: 'Anger Issues', desc: 'Soothes a volatile temper and channels aggression into productive ambition.' }
        ],
        benefits: [
            { icon: '<GiShield />', title: 'Marital Bliss', desc: 'Completely neutralizes Manglik dosha, ensuring a happy married life.' },
            { icon: '<GiCoins />', title: 'Debt Liquidation', desc: 'Miraculously clears long-standing loans and financial burdens.' },
            { icon: '<GiFlame />', title: 'Supreme Courage', desc: 'Instills fearlessness and the willpower to conquer life’s challenges.' },
            { icon: '<GiHealing />', title: 'Surgical Success', desc: 'Provides divine protection during medical procedures and quick healing.' },
            { icon: '<GiScrollUnfurled />', title: 'Property Wealth', desc: 'Ensures smooth acquisition of land and homes without legal hurdles.' },
            { icon: '<GiSunrise />', title: 'Vital Energy', desc: 'Boosts physical stamina, fitness, and dynamic life-force energy.' }
        ],
        packages: [
            { id: 'basic', name: 'Mangal Shanti', price: 1100, duration: '45 min', features: ['Rin-Mochan Stotra', 'Personal Sankalp', 'Red Flower Offering', 'Prasad dispatch'], popular: false },
            { id: 'standard', name: 'Vishesh Kuja Dosha Puja', price: 2100, duration: '90 min', features: ['10,000x Mangal Beej Mantra', 'Havan with Red Lentil Ahuti', 'Coral/Copper Energization', 'Video recording'], popular: true },
            { id: 'premium', name: 'Maha Bhaum Havan', price: 5100, duration: '3 hours', features: ['Complete Mangal & Navgraha Shanti', 'Mangal Yantra Sthapana', 'Live Individual Participation', 'Post-Puja Consultation'], popular: false }
        ],
        process: [
            { num: 1, icon: '🧘', title: 'Sankalp', sub: 'Setting fierce intention for victory' },
            { num: 2, icon: '🙏', title: 'Avahana', sub: 'Invoking Lord Mangal & Hanuman' },
            { num: 3, icon: '🌸', title: 'Rakta Offering', sub: 'Offering red lotuses & kumkum' },
            { num: 4, icon: '📖', title: 'Mantra Japa', sub: 'Chanting Om Kram Kreem Kroum' },
            { num: 5, icon: '🔥', title: 'Bhaum Havan', sub: 'Sacred fire with red wood oblations' },
            { num: 6, icon: '💧', title: 'Purnahuti', sub: 'Final offering to seal the energy' },
            { num: 7, icon: '🎁', title: 'Aarti & Prasad', sub: 'Dispatch of energized copper/yantra' }
        ]
    },
    'BudhPujaPage.jsx': {
        importName: 'budhHero',
        imageFile: 'budh_puja_hero.png',
        heroTitle: 'Budh (Mercury) Puja',
        heroDesc: 'Unlock brilliant intellect, flawless communication, and rapid business growth. Propitiate the Prince of Planets to sharpen your mind and excel in commerce.',
        whatIsDesc1: 'Budh (Mercury) Puja is performed to invoke the blessings of the intellectual planet, Mercury. In Vedic astrology, Budh governs speech, memory, analytical thinking, commerce, and the nervous system.',
        whatIsDesc2: 'An afflicted Mercury can cause speech impediments, poor decision-making, business losses, and memory issues. This puja is performed on Wednesdays (Budhwaar) using green elements like Durva grass, green gram, and emerald colors.',
        whyCards: [
            { icon: '📈', title: 'Business Losses', desc: 'Overcomes stagnation and opens new avenues for trade and commerce.' },
            { icon: '🗣️', title: 'Speech Defects', desc: 'Helps cure stuttering, shyness, and improves public speaking skills.' },
            { icon: '🧠', title: 'Academic Focus', desc: 'Vital for students lacking concentration or struggling with exams.' },
            { icon: '📉', title: 'Nervous Anxiety', desc: 'Calms an overactive nervous system and panic disorders.' },
            { icon: '✍️', title: 'Writing Block', desc: 'Removes creative blocks for writers, journalists, and programmers.' },
            { icon: '🤝', title: 'Communication Breakdown', desc: 'Fixes misunderstandings in personal and professional relationships.' }
        ],
        benefits: [
            { icon: '<GiScrollUnfurled />', title: 'Sharp Memory', desc: 'Enhances cognitive functions, memory retention, and quick wit.' },
            { icon: '<GiCoins />', title: 'Trade Success', desc: 'Brings immense success in stock markets, sales, and entrepreneurship.' },
            { icon: '<GiHealing />', title: 'Nervous Health', desc: 'Improves skin health, nerve function, and vocal cord vitality.' },
            { icon: '<GiFlame />', title: 'Eloquence', desc: 'Grants the power of persuasion and charming communication.' },
            { icon: '<GiShield />', title: 'Astrological Cure', desc: 'Removes Bhadra dosha and supports a weak Mercury in the chart.' },
            { icon: '<GiSunrise />', title: 'Analytical Skills', desc: 'Boosts logical reasoning, math skills, and strategic planning.' }
        ],
        packages: [
            { id: 'basic', name: 'Budh Shanti', price: 1100, duration: '45 min', features: ['Vishnu Sahasranama', 'Personal Sankalp', 'Green Gram Offering', 'Prasad dispatch'], popular: false },
            { id: 'standard', name: 'Vishesh Vidyaprapti Puja', price: 2100, duration: '90 min', features: ['10,000x Budh Beej Mantra', 'Havan with Durva Grass', 'Emerald/Onyx Energization', 'Video recording'], popular: true },
            { id: 'premium', name: 'Maha Budh Vyapar Havan', price: 5100, duration: '3 hours', features: ['Complete Navgraha Shanti', 'Budh Yantra Sthapana', 'Live Individual Participation', 'Post-Puja Consultation'], popular: false }
        ],
        process: [
            { num: 1, icon: '🧘', title: 'Sankalp', sub: 'Setting intention for wisdom & wealth' },
            { num: 2, icon: '🙏', title: 'Avahana', sub: 'Invoking Lord Budh & Lord Vishnu' },
            { num: 3, icon: '🌸', title: 'Harit Offering', sub: 'Offering green clothes & Durva grass' },
            { num: 4, icon: '📖', title: 'Mantra Japa', sub: 'Chanting Om Braam Breem Broum' },
            { num: 5, icon: '🔥', title: 'Budh Havan', sub: 'Sacred fire with Apamarga oblations' },
            { num: 6, icon: '💧', title: 'Purnahuti', sub: 'Final offering to seal the energy' },
            { num: 7, icon: '🎁', title: 'Aarti & Prasad', sub: 'Dispatch of energized green onyx/yantra' }
        ]
    },
    'GuruPujaPage.jsx': {
        importName: 'guruHero',
        imageFile: 'guru_puja_hero.png',
        heroTitle: 'Guru (Jupiter) Puja',
        heroDesc: 'Attract boundless fortune, profound wisdom, and marital harmony. Worship the planet of expansion to unlock the ultimate grace and blessings in your life.',
        whatIsDesc1: 'Guru (Jupiter) Puja honors Brihaspati, the teacher of the gods and the most benefic planet in Vedic astrology. Jupiter represents wealth, knowledge, spirituality, children, and marriage for women.',
        whatIsDesc2: 'A weak Jupiter causes delays in marriage, childlessness, lack of respect, and financial drought. Performed on Thursdays using yellow items like turmeric and gram dal, this puja invokes unparalleled divine grace.',
        whyCards: [
            { icon: '💍', title: 'Marriage Delays', desc: 'Crucial for women facing inexplicable delays in finding a suitable husband.' },
            { icon: '👶', title: 'Childbirth Issues', desc: 'Jupiter is the karaka of progeny; this puja aids in conceiving a healthy child.' },
            { icon: '💸', title: 'Financial Blockages', desc: 'Clears obstacles preventing wealth accumulation and savings.' },
            { icon: '🎓', title: 'Education Hurdles', desc: 'Grants success in higher education and spiritual studies.' },
            { icon: '⚖️', title: 'Loss of Respect', desc: 'Restores honor, reputation, and social standing in society.' },
            { icon: '📿', title: 'Spiritual Stagnation', desc: 'Awakens higher consciousness and connects you with a true Guru.' }
        ],
        benefits: [
            { icon: '<GiCoins />', title: 'Abundant Wealth', desc: 'Unlocks doors to continuous prosperity and gold accumulation.' },
            { icon: '<GiHealing />', title: 'Divine Protection', desc: 'Jupiter’s grace acts as an ultimate shield against major life disasters.' },
            { icon: '<GiSunrise />', title: 'Happy Marriage', desc: 'Ensures a timely, prosperous, and deeply fulfilling marital life.' },
            { icon: '<GiScrollUnfurled />', title: 'Supreme Wisdom', desc: 'Grants deep understanding of philosophy, religion, and right action.' },
            { icon: '<GiShield />', title: 'Guru Chandal Dosh', desc: 'Neutralizes the severe effects of Jupiter-Rahu combinations.' },
            { icon: '<GiFlame />', title: 'Healthy Progeny', desc: 'Blesses couples with obedient, intelligent, and healthy children.' }
        ],
        packages: [
            { id: 'basic', name: 'Guru Shanti', price: 1100, duration: '45 min', features: ['Brihaspati Stotram', 'Personal Sankalp', 'Yellow Flower Offering', 'Prasad dispatch'], popular: false },
            { id: 'standard', name: 'Vishesh Brihaspati Puja', price: 2100, duration: '90 min', features: ['16,000x Guru Beej Mantra', 'Havan with Peepal Wood', 'Yellow Sapphire/Topaz Energization', 'Video recording'], popular: true },
            { id: 'premium', name: 'Maha Guru Kripa Havan', price: 5100, duration: '3 hours', features: ['Complete Navgraha Shanti', 'Guru Yantra Sthapana', 'Live Individual Participation', 'Post-Puja Consultation'], popular: false }
        ],
        process: [
            { num: 1, icon: '🧘', title: 'Sankalp', sub: 'Setting intention for fortune & grace' },
            { num: 2, icon: '🙏', title: 'Avahana', sub: 'Invoking Lord Brihaspati & Brahma' },
            { num: 3, icon: '🌸', title: 'Peeta Offering', sub: 'Offering yellow turmeric & chana dal' },
            { num: 4, icon: '📖', title: 'Mantra Japa', sub: 'Chanting Om Graam Greem Groum' },
            { num: 5, icon: '🔥', title: 'Guru Havan', sub: 'Sacred fire with Peepal oblations' },
            { num: 6, icon: '💧', title: 'Purnahuti', sub: 'Final offering to seal the energy' },
            { num: 7, icon: '🎁', title: 'Aarti & Prasad', sub: 'Dispatch of energized yellow thread/yantra' }
        ]
    },
    'ShukraPujaPage.jsx': {
        importName: 'shukraHero',
        imageFile: 'shukra_puja_hero.png',
        heroTitle: 'Shukra (Venus) Puja',
        heroDesc: 'Magnetize love, absolute luxury, and irresistible charm. Worship the planet of beauty to manifest a life of artistic success, romantic bliss, and material comfort.',
        whatIsDesc1: 'Shukra (Venus) Puja is a beautiful ritual dedicated to Shukracharya, the planet ruling romance, luxury, art, vehicles, and sensual pleasures. In Vedic astrology, a strong Venus makes life effortlessly comfortable.',
        whatIsDesc2: 'When Venus is debilitated, one suffers from a lack of love, marital dissatisfaction, poverty, and loss of aesthetic appeal. Performed on Fridays, this puja utilizes white flowers, perfumes, and silver to invoke Venusian grace.',
        whyCards: [
            { icon: '💔', title: 'Lack of Love', desc: 'Cures loneliness and attracts a loving, compatible soulmate.' },
            { icon: '📉', title: 'Material Poverty', desc: 'Removes the blockages keeping you from enjoying a luxurious lifestyle.' },
            { icon: '🎭', title: 'Artistic Blocks', desc: 'Restores creativity for actors, artists, designers, and musicians.' },
            { icon: '🚫', title: 'Marital Discord', desc: 'Soothes friction and restores intimacy and romance in marriage.' },
            { icon: '🚗', title: 'Vehicle/Asset Loss', desc: 'Prevents accidents and aids in the smooth purchase of homes and cars.' },
            { icon: '💄', title: 'Loss of Charm', desc: 'Restores physical magnetism, beauty, and social grace.' }
        ],
        benefits: [
            { icon: '<GiCoins />', title: 'Extreme Luxury', desc: 'Attracts high-end wealth, comforts, and an elevated standard of living.' },
            { icon: '<GiFlame />', title: 'Romantic Bliss', desc: 'Ensures deep passionate love, romance, and an attractive partner.' },
            { icon: '<GiHealing />', title: 'Reproductive Health', desc: 'Improves vitality, fertility, and cures reproductive disorders.' },
            { icon: '<GiScrollUnfurled />', title: 'Fame & Glamour', desc: 'Grants massive success in the media, fashion, and entertainment industries.' },
            { icon: '<GiShield />', title: 'Kalathra Dosh', desc: 'Neutralizes astrological curses affecting one’s spouse and marriage.' },
            { icon: '<GiSunrise />', title: 'Magnetic Aura', desc: 'Enhances your physical and charismatic appeal, drawing people to you.' }
        ],
        packages: [
            { id: 'basic', name: 'Shukra Shanti', price: 1100, duration: '45 min', features: ['Shukra Kavach', 'Personal Sankalp', 'White Lotus Offering', 'Prasad dispatch'], popular: false },
            { id: 'standard', name: 'Vishesh Akarshan Puja', price: 2100, duration: '90 min', features: ['16,000x Shukra Beej Mantra', 'Havan with Ghee Ahuti', 'Diamond/Opal Energization', 'Video recording'], popular: true },
            { id: 'premium', name: 'Maha Shukra Aishwarya Havan', price: 5100, duration: '3 hours', features: ['Complete Navgraha Shanti', 'Shukra Yantra Sthapana', 'Live Individual Participation', 'Post-Puja Consultation'], popular: false }
        ],
        process: [
            { num: 1, icon: '🧘', title: 'Sankalp', sub: 'Setting intention for love & luxury' },
            { num: 2, icon: '🙏', title: 'Avahana', sub: 'Invoking Lord Shukra & Goddess Lakshmi' },
            { num: 3, icon: '🌸', title: 'Shvet Offering', sub: 'Offering perfumes, white cloth & rice' },
            { num: 4, icon: '📖', title: 'Mantra Japa', sub: 'Chanting Om Draam Dreem Droum' },
            { num: 5, icon: '🔥', title: 'Shukra Havan', sub: 'Sacred fire with Gular wood oblations' },
            { num: 6, icon: '💧', title: 'Purnahuti', sub: 'Final offering to seal the energy' },
            { num: 7, icon: '🎁', title: 'Aarti & Prasad', sub: 'Dispatch of energized Sphatik/yantra' }
        ]
    },
    'ShaniPujaPage.jsx': {
        importName: 'shaniHero',
        imageFile: 'shani_puja_hero.png',
        heroTitle: 'Shani (Saturn) Puja',
        heroDesc: 'Pacify karmic debts, overcome immense struggles, and survive Sade Sati. Propitiate the Lord of Justice to turn delays into profound, lasting achievements.',
        whatIsDesc1: 'Shani (Saturn) Puja is a highly solemn and powerful ritual dedicated to Lord Shani, the strict karmic judge of the cosmos. Saturn rules discipline, hard work, sorrow, longevity, and structural success.',
        whatIsDesc2: 'When undergoing Sade Sati (7.5 years of Saturn), Dhaiya, or a weak Saturn dasha, a person faces unbearable delays, poverty, illness, and constant humiliation. This puja, performed on Saturdays with black sesame and mustard oil, mitigates this immense karmic wrath.',
        whyCards: [
            { icon: '⏳', title: 'Sade Sati & Dhaiya', desc: 'The most critical reason; mitigates the extreme suffering of Saturn’s transit.' },
            { icon: '🚧', title: 'Constant Delays', desc: 'Removes the invisible walls stopping your career, marriage, or success.' },
            { icon: '📉', title: 'Loss of Employment', desc: 'Cures joblessness, workplace humiliation, and business failures.' },
            { icon: '🦴', title: 'Chronic Illness', desc: 'Relieves prolonged diseases, joint pains, and mysterious ailments.' },
            { icon: '⚖️', title: 'Legal Troubles', desc: 'Saves devotees from unjust litigation, imprisonment, and false allegations.' },
            { icon: '😔', title: 'Depression', desc: 'Lifts the heavy, dark cloud of despair and karmic exhaustion.' }
        ],
        benefits: [
            { icon: '<GiShield />', title: 'Sade Sati Relief', desc: 'Provides immediate relief from the crushing pressure of Saturn transits.' },
            { icon: '<GiCoins />', title: 'Stable Career', desc: 'Grants long-lasting, unbreakable success that stands the test of time.' },
            { icon: '<GiHealing />', title: 'Karmic Cleansing', desc: 'Burns through past-life negative karma, freeing you from suffering.' },
            { icon: '<GiScrollUnfurled />', title: 'Iron Discipline', desc: 'Instills focus, patience, and the ability to endure and conquer.' },
            { icon: '<GiFlame />', title: 'Legal Victory', desc: 'Judgments fall in your favor; enemies and competitors are neutralized.' },
            { icon: '<GiSunrise />', title: 'Longevity', desc: 'Saturn is the karaka of Ayush (life); this puja ensures a long, stable life.' }
        ],
        packages: [
            { id: 'basic', name: 'Shani Shanti', price: 1100, duration: '45 min', features: ['Shani Chalisa', 'Personal Sankalp', 'Mustard Oil Offering', 'Prasad dispatch'], popular: false },
            { id: 'standard', name: 'Vishesh Sade Sati Nivaran', price: 2100, duration: '90 min', features: ['23,000x Shani Beej Mantra', 'Havan with Shami Wood', 'Iron/Sapphire Energization', 'Video recording'], popular: true },
            { id: 'premium', name: 'Maha Shani Dosha Havan', price: 5100, duration: '3 hours', features: ['Complete Navgraha Shanti', 'Shani Yantra Sthapana', 'Live Individual Participation', 'Post-Puja Consultation'], popular: false }
        ],
        process: [
            { num: 1, icon: '🧘', title: 'Sankalp', sub: 'Setting solemn intention for relief' },
            { num: 2, icon: '🙏', title: 'Avahana', sub: 'Invoking Lord Shani & Lord Shiva' },
            { num: 3, icon: '🌸', title: 'Krishna Offering', sub: 'Offering black sesame & mustard oil' },
            { num: 4, icon: '📖', title: 'Mantra Japa', sub: 'Chanting Om Praam Preem Proum' },
            { num: 5, icon: '🔥', title: 'Shani Havan', sub: 'Sacred fire with Shami wood' },
            { num: 6, icon: '💧', title: 'Tailabhishekam', sub: 'Oil offering to Shani Shila' },
            { num: 7, icon: '🎁', title: 'Aarti & Prasad', sub: 'Dispatch of energized horseshoe/yantra' }
        ]
    },
    'RahuPujaPage.jsx': {
        importName: 'rahuHero',
        imageFile: 'rahu_puja_hero.png',
        heroTitle: 'Rahu Puja',
        heroDesc: 'Vanquish sudden disasters, dark magic, and mental confusion. Tame the Shadow Planet to turn its massive chaotic energy into sudden political and material success.',
        whatIsDesc1: 'Rahu Puja is a highly specialized occult ritual directed at the north lunar node, Rahu. Not a physical planet, Rahu is a shadow entity representing illusion, sudden events, foreign lands, poisons, and unquenchable worldly desires.',
        whatIsDesc2: 'An afflicted Rahu causes sudden downfalls, crippling phobias, addiction, black magic effects, and misdiagnosis of diseases. This puja is performed during Rahu Kaal or twilight using durva, lead, and blue flowers to pacify its chaotic wrath.',
        whyCards: [
            { icon: '🌩️', title: 'Sudden Downfalls', desc: 'Prevents unexpected bankruptcies, scandals, and sudden job losses.' },
            { icon: '👻', title: 'Black Magic & Phobias', desc: 'Cures severe paranoia, unseen fears, and removes evil eye/tantric attacks.' },
            { icon: '💊', title: 'Addictions', desc: 'Crucial for overcoming drug, alcohol, smoking, or gambling addictions.' },
            { icon: '🐍', title: 'Reptile Dreams', desc: 'Stops recurring nightmares of snakes and falling, classic Rahu symptoms.' },
            { icon: '⚕️', title: 'Undiagnosed Illness', desc: 'Helps cure bizarre health issues that doctors cannot diagnose.' },
            { icon: '🗳️', title: 'Political Struggles', desc: 'Politicians perform this to gain mass manipulation and electoral success.' }
        ],
        benefits: [
            { icon: '<GiShield />', title: 'Aura Protection', desc: 'Creates an impenetrable shield against hexes, occult attacks, and jealousy.' },
            { icon: '<GiCoins />', title: 'Sudden Wealth', desc: 'When pacified, Rahu grants massive, unexpected windfalls and lottery luck.' },
            { icon: '<GiHealing />', title: 'Mental Clarity', desc: 'Lifts the "smoke" from the mind, curing confusion and deep illusions.' },
            { icon: '<GiScrollUnfurled />', title: 'Foreign Success', desc: 'Grants visas, PR, and massive success in foreign lands or with foreign tech.' },
            { icon: '<GiFlame />', title: 'Political Power', desc: 'Grants the charisma and cunning needed to rule masses and win elections.' },
            { icon: '<GiSunrise />', title: 'Overcoming Addiction', desc: 'Breaks the chains of toxic habits and psychological dependencies.' }
        ],
        packages: [
            { id: 'basic', name: 'Rahu Shanti', price: 1100, duration: '45 min', features: ['Rahu Kavach', 'Personal Sankalp', 'Blue Flower Offering', 'Prasad dispatch'], popular: false },
            { id: 'standard', name: 'Vishesh Chhaya Dosh Puja', price: 2100, duration: '90 min', features: ['18,000x Rahu Beej Mantra', 'Havan with Durva Ahuti', 'Hessonite Energization', 'Video recording'], popular: true },
            { id: 'premium', name: 'Maha Rahu Kripa Havan', price: 5100, duration: '3 hours', features: ['Complete Navgraha Shanti', 'Rahu Yantra Sthapana', 'Live Individual Participation', 'Post-Puja Consultation'], popular: false }
        ],
        process: [
            { num: 1, icon: '🧘', title: 'Sankalp', sub: 'Setting intention to pierce illusion' },
            { num: 2, icon: '🙏', title: 'Avahana', sub: 'Invoking Shadow Lord Rahu' },
            { num: 3, icon: '🌸', title: 'Neela Offering', sub: 'Offering blue flowers & sandalwood' },
            { num: 4, icon: '📖', title: 'Mantra Japa', sub: 'Chanting Om Bhraam Bhreem Bhroum' },
            { num: 5, icon: '🔥', title: 'Rahu Havan', sub: 'Sacred fire with Durva oblations' },
            { num: 6, icon: '💧', title: 'Purnahuti', sub: 'Final offering to seal the energy' },
            { num: 7, icon: '🎁', title: 'Aarti & Prasad', sub: 'Dispatch of energized Hessonite/yantra' }
        ]
    },
    'KetuPujaPage.jsx': {
        importName: 'ketuHero',
        imageFile: 'ketu_puja_hero.png',
        heroTitle: 'Ketu Puja',
        heroDesc: 'Sever the chains of karma, heal mysterious diseases, and awaken profound spiritual intuition. Pacify the Shadow of the Tail to turn detachment into divine liberation.',
        whatIsDesc1: 'Ketu Puja aims to appease the south lunar node, Ketu. Known as the planet of detachment, spirituality, and sudden endings, Ketu strips away worldly attachments to force the soul toward Moksha (liberation).',
        whatIsDesc2: 'When afflicted, Ketu causes bizarre diseases, physical injuries, snakebites, surgical complications, and extreme feelings of isolation or depression. This esoteric ritual clears karmic baggage and transforms Ketu’s isolating energy into deep mystical insight.',
        whyCards: [
            { icon: '🔪', title: 'Surgical Complications', desc: 'Performed before or after surgeries to ensure smooth healing and no errors.' },
            { icon: '🦠', title: 'Mysterious Ailments', desc: 'Cures viral infections and viral/bacterial diseases with no clear origin.' },
            { icon: '🚫', title: 'Extreme Detachment', desc: 'Helps when one feels suicidal, deeply lonely, or disconnected from reality.' },
            { icon: '🐍', title: 'Snake/Animal Bites', desc: 'Protects against venomous creatures, accidents, and sudden physical trauma.' },
            { icon: '💼', title: 'Sudden Endings', desc: 'Stops the sudden, inexplicable ending of careers, marriages, or friendships.' },
            { icon: '👁️', title: 'Spiritual Blockage', desc: 'Opens the third eye and removes hurdles in meditation and occult studies.' }
        ],
        benefits: [
            { icon: '<GiHealing />', title: 'Physical Healing', desc: 'Rapid recovery from surgeries, viral infections, and skin diseases.' },
            { icon: '<GiShield />', title: 'Accident Protection', desc: 'Creates a psychic shield against sudden cuts, wounds, and accidents.' },
            { icon: '<GiScrollUnfurled />', title: 'Occult Mastery', desc: 'Grants extreme proficiency in astrology, tarot, tantra, and healing arts.' },
            { icon: '<GiFlame />', title: 'Karmic Liberation', desc: 'Burns past-life sins (Sanchita Karma) causing current lifetime suffering.' },
            { icon: '<GiCoins />', title: 'Unexpected Gains', desc: 'Ketu can grant sudden, massive inheritance or hidden wealth.' },
            { icon: '<GiSunrise />', title: 'Inner Peace', desc: 'Replaces crippling isolation with a blissed state of spiritual solitude.' }
        ],
        packages: [
            { id: 'basic', name: 'Ketu Shanti', price: 1100, duration: '45 min', features: ['Ketu Kavach', 'Personal Sankalp', 'Ash/Grey Color Offering', 'Prasad dispatch'], popular: false },
            { id: 'standard', name: 'Vishesh Moksha Karaka Puja', price: 2100, duration: '90 min', features: ['17,000x Ketu Beej Mantra', 'Havan with Kusha Grass', 'Cat\'s Eye Energization', 'Video recording'], popular: true },
            { id: 'premium', name: 'Maha Ketu Kripa Havan', price: 5100, duration: '3 hours', features: ['Complete Navgraha Shanti', 'Ketu Yantra Sthapana', 'Live Individual Participation', 'Post-Puja Consultation'], popular: false }
        ],
        process: [
            { num: 1, icon: '🧘', title: 'Sankalp', sub: 'Setting intention for karmic release' },
            { num: 2, icon: '🙏', title: 'Avahana', sub: 'Invoking Shadow Lord Ketu & Lord Ganesha' },
            { num: 3, icon: '🌸', title: 'Dhumra Offering', sub: 'Offering multi-colored/grey items' },
            { num: 4, icon: '📖', title: 'Mantra Japa', sub: 'Chanting Om Sraam Sreem Sroum' },
            { num: 5, icon: '🔥', title: 'Ketu Havan', sub: 'Sacred fire with Kusha oblations' },
            { num: 6, icon: '💧', title: 'Purnahuti', sub: 'Final offering to seal the energy' },
            { num: 7, icon: '🎁', title: 'Aarti & Prasad', sub: 'Dispatch of energized Cat\'s Eye/yantra' }
        ]
    },
    'NavgrahaShantiPujaPage.jsx': {
        importName: 'navgrahaHero',
        imageFile: 'navgraha_puja_hero.png',
        heroTitle: 'Navgraha Shanti Puja',
        heroDesc: 'Harmonize the cosmic forces. Pacify all nine planets simultaneously to remove all life obstacles, cure chronic mult-planetary doshas, and unlock total 360-degree prosperity.',
        whatIsDesc1: 'Navgraha Shanti Puja is the ultimate, comprehensive Vedic fire ritual dedicated to all nine planetary deities (Surya, Chandra, Mangal, Budh, Guru, Shukra, Shani, Rahu, and Ketu) simultaneously.',
        whatIsDesc2: 'Instead of targeting a single afflicted planet, this massive ritual balances the entire birth chart. It is highly recommended when an individual is facing attacks from multiple sides of life—health, wealth, and marriage—signifying mixed planetary wrath.',
        whyCards: [
            { icon: '🌪️', title: 'Total Chaos', desc: 'When every aspect of life (health, wealth, relationships) is failing simultaneously.' },
            { icon: '🏠', title: 'New Beginnings', desc: 'Crucial before entering a new home (Griha Pravesh) or starting a business.' },
            { icon: '❓', title: 'Unknown Doshas', desc: 'When astrology indicates multiple conflicting doshas that can’t be treated individually.' },
            { icon: '🌟', title: 'Birth & Marriages', desc: 'Performed to bless a newborn or a newly wedded couple with full cosmic support.' },
            { icon: '📉', title: 'Dasha Sandhi', desc: 'When shifting from one major planetary period (Mahadasha) into another.' },
            { icon: '🛡️', title: 'General Protection', desc: 'As an annual ritual to ensure the entire family is protected from celestial harm.' }
        ],
        benefits: [
            { icon: '<GiShield />', title: 'Total Protection', desc: 'Creates an ultimate 360-degree shield against all forms of cosmic negativity.' },
            { icon: '<GiCoins />', title: 'Holistic Prosperity', desc: 'Unlocks wealth, health, and happiness by aligning all 9 forces in your favor.' },
            { icon: '<GiHealing />', title: 'Removes All Doshas', desc: 'Simultaneously dilutes Manglik, Kaal Sarp, Kemdruma, and Guru Chandal doshas.' },
            { icon: '<GiScrollUnfurled />', title: 'Peace of Mind', desc: 'Stops the chaotic rollercoaster of life, instilling profound stability.' },
            { icon: '<GiFlame />', title: 'Career Acceleration', desc: 'Removes the multi-faceted blockages stopping your professional rise.' },
            { icon: '<GiSunrise />', title: 'Family Harmony', desc: 'Balances the varying astrological energies of all family members living together.' }
        ],
        packages: [
            { id: 'basic', name: 'Navgraha Shanti path', price: 2100, duration: '60 min', features: ['Navgraha Stotra Chanting', 'Personal Sankalp', 'Nine Grains Offering', 'Prasad dispatch'], popular: false },
            { id: 'standard', name: 'Vishesh Navgraha Havan', price: 5100, duration: '2 hours', features: ['All 9 Beej Mantras Chanted', 'Havan with 9 Specific Woods', 'Navgraha Yantra Energization', 'Video recording'], popular: true },
            { id: 'premium', name: 'Maha Navgraha Mandal Havan', price: 11000, duration: '4 hours', features: ['Complete 9-Brahmin Chanting', 'Navgraha Mandal Sthapana', 'Live Individual Participation', 'Complete Astrological Consultation'], popular: false }
        ],
        process: [
            { num: 1, icon: '🧘', title: 'Sankalp', sub: 'Setting intention for total cosmic harmony' },
            { num: 2, icon: '🙏', title: 'Graha Avahana', sub: 'Invoking all 9 planetary deities' },
            { num: 3, icon: '🌸', title: 'Navadhanya', sub: 'Offering 9 specific grains for 9 planets' },
            { num: 4, icon: '📖', title: 'Mantra Japa', sub: 'Chanting the Beej mantra for every planet' },
            { num: 5, icon: '🔥', title: 'Navgraha Havan', sub: 'Sacred fire using 9 different holy woods' },
            { num: 6, icon: '💧', title: 'Purnahuti', sub: 'Final offering to seal the cosmic array' },
            { num: 7, icon: '🎁', title: 'Aarti & Prasad', sub: 'Dispatch of energized Navgraha Yantra' }
        ]
    }
};

const execute = () => {
    Object.keys(planetData).forEach(fileName => {
        const filePath = path.join(PUJAS_DIR, fileName);
        if (!fs.existsSync(filePath)) {
            console.log("Skipping " + fileName + ", not found.");
            return;
        }

        let content = fs.readFileSync(filePath, 'utf8');
        const data = planetData[fileName];

        // Replace Image Import
        content = content.replace(/import heroImage from '\.\.\/\.\.\/assets\/all_puja_bg\.webp';/, `import ${data.importName} from '../../assets/${data.imageFile}';`);
        
        // Fix the hero style variable
        content = content.replace(/\$\{heroImage\}/g, `\${${data.importName}}`);

        // Fix Hero text (DO NOT use /s flag with .*)
        content = content.replace(/\[Hero description.*?\]/, data.heroDesc);
        
        // Fix What Is text (paragraphs)
        content = content.replace(/<p>\[Detailed description of what.*?\]<\/p>/, `<p>${data.whatIsDesc1}</p>`);
        content = content.replace(/<p>\[Secondary paragraph detailing.*?\]<\/p>/, `<p>${data.whatIsDesc2}</p>`);

        // Fix Why Cards using a regex to replace the entire sp-why-grid block inside that section
        let whyReplacement = '<div className="sp-why-grid">\n';
        data.whyCards.forEach(c => {
            whyReplacement += `                        <div className="sp-why-card">
                            <h4>${c.icon} ${c.title}</h4>
                            <p>${c.desc}</p>
                        </div>\n`;
        });
        whyReplacement += '                    </div>';
        
        content = content.replace(/<div className="sp-why-grid">.*?<\/div>\s*<\/div>\s*<\/section>/s, `${whyReplacement}\n                </div>\n            </section>`);

        // Fix BENEFITS array
        let benefitsArrayStr = 'const BENEFITS = [\n';
        data.benefits.forEach(b => {
             benefitsArrayStr += `    { icon: ${b.icon}, title: '${b.title.replace(/'/g, "\\'")}', desc: '${b.desc.replace(/'/g, "\\'")}' },\n`;
        });
        benefitsArrayStr += ']\n\nexport default function';
        content = content.replace(/const BENEFITS = \[.*?\]\s*export default function/s, benefitsArrayStr);

        // Fix PACKAGES array
        let packagesArrayStr = 'const PACKAGES = [\n';
        data.packages.forEach(p => {
             packagesArrayStr += `    {
        id: '${p.id}',
        name: '${p.name.replace(/'/g, "\\'")}',
        price: ${p.price},
        duration: '${p.duration}',
        features: [${p.features.map(f => `'${f.replace(/'/g, "\\'")}'`).join(', ')}],
        ${p.popular ? 'popular: true,' : ''}
    },\n`;
        });
        packagesArrayStr += ']\n\nconst BENEFITS';
        content = content.replace(/const PACKAGES = \[.*?\]\s*const BENEFITS/s, packagesArrayStr);

        // Fix Process Stairs
        let processArrayStr = '[\n';
        data.process.forEach(s => {
             processArrayStr += `                            { num: ${s.num}, icon: '${s.icon}', title: '${s.title.replace(/'/g, "\\'")}', sub: '${s.sub.replace(/'/g, "\\'")}' },\n`;
        });
        processArrayStr += '                        ].map';
        content = content.replace(/\{\[\s*\{ num: 1, icon: '🧘',.*?\].map/s, `{${processArrayStr}`);
        
        // Save
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fully injected content for ${fileName}`);
    });
};

execute();
