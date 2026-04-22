import fs from 'node:fs'
import path from 'node:path'

const ROOT = 'D:/AstroBharatAI/AstroBharatAI aacharya website'
const PAGES_DIR = path.join(ROOT, 'client/src/pages/pujas')

const pages = [
  {
    file: 'HealthRecoveryPujaPage.jsx',
    component: 'HealthRecoveryPujaPage',
    pujaId: 'health-recovery-puja',
    pujaName: 'Health Recovery Puja',
    heroQuote: 'Divine Healing for Body, Mind, and Life Force',
    heroSubtitle:
      "A sacred Vedic healing ritual to invoke Lord Dhanvantari's grace for recovery from illness, renewed vitality, and holistic wellbeing.",
    mantra:
      'ॐ नमो भगवते वासुदेवाय धन्वंतरये अमृतकलशहस्ताय सर्वभयविनाशाय सर्वरोगनिवारणाय नमः॥',
    mantraMeaning:
      'Salutations to Lord Dhanvantari, bearer of the nectar pot, remover of fear and destroyer of disease.',
    aboutTitle: 'What is the Health Recovery Puja?',
    aboutParagraphs: [
      'Health Recovery Puja is a sacred Vedic ritual performed to invoke divine healing energies for restoration of physical, mental, and spiritual wellbeing. It invokes Lord Dhanvantari, the divine physician, for deep healing grace.',
      'According to Vedic wisdom, illness can arise from planetary imbalance, karmic burden, negative energies, or disrupted pranic flow. This puja works on all these layers through mantra, herbs, havan, and divine invocation.'
    ],
    reasons: [
      'To seek divine blessings for serious illness and chronic diseases',
      'To balance harmful graha effects like afflicted Moon, Sun, or Saturn',
      'To cleanse karmic causes behind unexplained recurring health issues',
      'To strengthen pranic body and restore vitality across all energy layers',
      'To break hereditary health patterns and ancestral disease cycles',
      'To accelerate recovery after surgery or major medical episodes',
    ],
    benefits: [
      { icon: 'heart', title: 'Accelerated Healing', desc: 'Channels healing energy deep into the body and supports faster physical recovery.' },
      { icon: 'heart', title: 'Mental Peace', desc: 'Calms anxiety, emotional distress, and fear during difficult health phases.' },
      { icon: 'star', title: 'Karmic Block Removal', desc: 'Clears subtle karmic barriers that may be obstructing the healing process.' },
      { icon: 'sun', title: 'Graha Pacification', desc: 'Neutralizes health-impacting effects of Saturn, Rahu, and Ketu influences.' },
      { icon: 'shield', title: 'Protective Aura', desc: 'Creates a protective field that helps prevent repeated health crises.' },
      { icon: 'sun', title: 'Vitality Boost', desc: 'Improves stamina, immunity, and overall life-force alignment.' },
    ],
    steps: [
      { n: '01', title: 'Sankalp & Intention', text: 'Priest and devotee declare healing intention with name and gotra.' },
      { n: '02', title: 'Sacred Space Preparation', text: 'Ritual field is prepared with flowers, herbs, and healing elements.' },
      { n: '03', title: 'Kalash & Ganesh Pujan', text: 'Kalash is consecrated and Ganesh invoked to remove healing obstacles.' },
      { n: '04', title: 'Dhanvantari Mantra Japa', text: 'Healing mantras are chanted with devotion to awaken restorative force.' },
      { n: '05', title: 'Herbal Healing Havan', text: 'Giloy, neem, turmeric, and sacred offerings are made into Agni.' },
      { n: '06', title: 'Aarti, Prasad & Sealing', text: 'Final aarti and blessings seal divine healing vibrations.' },
    ],
    footerBlessing: 'May divine healing grace restore your health and strength.',
  },
  {
    file: 'NazarDoshRemovalPujaPage.jsx',
    component: 'NazarDoshRemovalPujaPage',
    pujaId: 'nazar-dosh-removal-puja',
    pujaName: 'Nazar Dosh (Evil Eye) Removal Puja',
    heroQuote: 'Sacred Cleansing From Evil Eye Influence',
    heroSubtitle:
      'A powerful Vedic protection ritual to remove the effects of jealousy, psychic disturbance, and heavy nazar from life, home, and aura.',
    mantra:
      'ॐ क्लीं कालिकायै नमः । ॐ हनुमते नमः ।',
    mantraMeaning:
      'Salutations to Divine Mother Kali and Lord Hanuman for destruction of harmful forces and full protection.',
    aboutTitle: 'What is Nazar Dosh Removal Puja?',
    aboutParagraphs: [
      'Nazar Dosh Removal Puja is a powerful Vedic ritual to identify, neutralize, and remove evil-eye influence caused by jealousy, envy, or malicious intent.',
      'Through invocation of Durga, Bhairava, and Hanuman, plus nazar-cleansing rites and havan, this puja removes energetic damage and restores protective aura strength.'
    ],
    reasons: [
      'When sudden downturn appears in health, finance, or relationships after admiration',
      'To protect newborns and children who are highly vulnerable to nazar',
      'When symptoms like headaches, insomnia, crying, or heaviness keep repeating',
      'To protect success, wealth, property, or relationships from jealousy effects',
      'When astrologers identify strong nazar dosh or vulnerable dasha periods',
      'As periodic family-level purification against future evil-eye attacks',
    ],
    benefits: [
      { icon: 'star', title: 'Evil-Eye Dissolution', desc: 'Dissolves harmful nazar charge and restores natural aura luminosity.' },
      { icon: 'heart', title: 'Immediate Symptom Relief', desc: 'Relieves headaches, restlessness, heaviness, and sleep disruption.' },
      { icon: 'shield', title: 'Spiritual Armor', desc: 'Builds a durable protection layer around devotee and home.' },
      { icon: 'sun', title: 'Momentum Restoration', desc: 'Restarts blocked progress in career, business, and relationships.' },
      { icon: 'shield', title: 'Infant & Family Safety', desc: 'Protects sensitive children and family members from intrusion.' },
      { icon: 'star', title: 'Home Purification', desc: 'Clears accumulated negativity and restores positive vibrations.' },
    ],
    steps: [
      { n: '01', title: 'Nazar Diagnosis', text: 'Preliminary energy assessment confirms intensity of evil-eye disturbance.' },
      { n: '02', title: 'Space Cleansing', text: 'Gangajal, camphor smoke, and sea salt remove negative residue.' },
      { n: '03', title: 'Protection Sankalp', text: 'Devotee declares intent to break free from nazar influence.' },
      { n: '04', title: 'Protective Deity Invocation', text: 'Hanuman and fierce protective forces are invoked for defense.' },
      { n: '05', title: 'Nazar Extraction Ritual', text: 'Lemon-chilli, mustard, mantra, and havan rites remove evil-eye grip.' },
      { n: '06', title: 'Kavach Sealing', text: 'Sacred thread and aarti seal the aura with lasting protection.' },
    ],
    footerBlessing: 'May your aura remain pure, protected, and radiant.',
  },
  {
    file: 'ProtectionEnergyShieldPujaPage.jsx',
    component: 'ProtectionEnergyShieldPujaPage',
    pujaId: 'protection-energy-shield-puja',
    pujaName: 'Protection / Energy Shield Puja',
    heroQuote: 'Build a Divine Shield Around Your Life',
    heroSubtitle:
      'A high-intensity Vedic protection ritual to fortify aura, home, and destiny against psychic attack, negativity, and hostile energies.',
    mantra:
      'ॐ दुं दुर्गायै नमः । ॐ हनुमते रुद्रात्मकाय हुं फट्॥',
    mantraMeaning:
      'Salutations to Goddess Durga and Rudra-form Hanuman for fearless protection and destruction of hostile forces.',
    aboutTitle: 'What is Protection / Energy Shield Puja?',
    aboutParagraphs: [
      'Protection and Energy Shield Puja is a supreme Vedic fortress ritual that builds a powerful energetic shield around person, family, and home.',
      'With Durga, Hanuman, Bhairava, and kavach mantras, this puja fortifies physical, emotional, mental, astral, and causal layers against hostile energetic attack.'
    ],
    reasons: [
      'When facing unexplained anxiety, nightmares, or sense of psychic attack',
      'For high-profile or competitive roles exposed to jealousy and sabotage',
      'To protect home from recurring accidents, conflict, and dark heaviness',
      'During malefic phases like Sade Sati, Rahu-Ketu transits, and dark moon',
      'For healers and practitioners with highly open sensitive energy fields',
      'To establish a permanent 24x7 protective divine shield',
    ],
    benefits: [
      { icon: 'shield', title: 'Multi-Layer Shield', desc: 'Builds an indestructible energetic armor around the aura.' },
      { icon: 'star', title: 'Threat Elimination', desc: 'Neutralizes active curses, hostile intent, and dark projections.' },
      { icon: 'heart', title: 'Restful Sleep', desc: 'Protects subtle body from disturbing intrusions during sleep.' },
      { icon: 'sun', title: 'Courage & Willpower', desc: 'Strengthens confidence, authority, and fearless presence.' },
      { icon: 'shield', title: 'Sanctified Home', desc: 'Creates a secure energetic boundary around living spaces.' },
      { icon: 'star', title: 'Constant Protection', desc: 'Keeps divine protection active continuously without dilution.' },
    ],
    steps: [
      { n: '01', title: 'Fortress Sankalp', text: 'Sankalp declares construction of a divine protection fortress.' },
      { n: '02', title: 'Protective Boundary Setup', text: 'Salt, turmeric water, and gangajal seal ritual perimeter.' },
      { n: '03', title: 'Guardian Invocation', text: 'Ganesh and Bhairava are invoked to guard life directions.' },
      { n: '04', title: 'Kavach Recitation', text: 'Durga and Sudarshana-Hanuman protective mantras are chanted.' },
      { n: '05', title: 'Fire Wall Havan', text: 'Neem, camphor, sesame, and guggul create a protective fire wall.' },
      { n: '06', title: 'Yantra & Home Sealing', text: 'Kavach activation, aarti, and gangajal sealing complete protection.' },
    ],
    footerBlessing: 'May your path stay guarded by unstoppable divine protection.',
  },
  {
    file: 'NegativeEnergyRemovalPujaPage.jsx',
    component: 'NegativeEnergyRemovalPujaPage',
    pujaId: 'negative-energy-removal-puja',
    pujaName: 'Negative Energy Removal Puja',
    heroQuote: 'Complete Energetic Reset for Life and Home',
    heroSubtitle:
      'A deep Vedic cleansing ritual to remove spiritual heaviness, karmic residue, and environmental negativity from your aura and surroundings.',
    mantra:
      'ॐ क्रीं कालिकायै नमः । ॐ नमः शिवाय ।',
    mantraMeaning:
      'Salutations to Goddess Kali and Lord Shiva for destruction of darkness and purification into divine light.',
    aboutTitle: 'What is Negative Energy Removal Puja?',
    aboutParagraphs: [
      'Negative Energy Removal Puja is a deep Vedic cleansing ritual that identifies and removes spiritual, emotional, karmic, and environmental negativity from person and space.',
      'It is a complete energetic reset using Kali-Shiva invocation, smoke purification, mantra, and havan to clear dense dark buildup and restore divine flow.'
    ],
    reasons: [
      'When home atmosphere stays heavy, conflicted, and oppressive',
      'During repeated bad luck in finance, relationships, and health',
      'After prolonged exposure to toxic people, grief, or trauma',
      'When sleep, mood, and clarity are disturbed by subtle forces',
      'To break ancestral patterns of suffering, poverty, or dysfunction',
      'Before a new spiritual or life phase as a full energetic reset',
    ],
    benefits: [
      { icon: 'star', title: 'Complete Negative Clearing', desc: 'Removes accumulated negativity from aura and surroundings.' },
      { icon: 'heart', title: 'Emotional Lightness', desc: 'Relieves anxiety, heaviness, and unexplained emotional pressure.' },
      { icon: 'sun', title: 'Luck Cycle Reset', desc: 'Breaks repeated misfortune by clearing energetic root causes.' },
      { icon: 'shield', title: 'Home Becomes Sanctuary', desc: 'Purifies home and restores uplifting protective vibration.' },
      { icon: 'heart', title: 'Mental Clarity Restored', desc: 'Reduces fog, stress, and depressive heaviness with renewed clarity.' },
      { icon: 'star', title: 'Ancestral Burden Release', desc: 'Clears inherited karmic patterns and stagnant family residue.' },
    ],
    steps: [
      { n: '01', title: 'Energy Field Reading', text: 'Priest identifies where and how deeply negativity has settled.' },
      { n: '02', title: 'Sacred Smoke Purification', text: 'Loban and guggul smoke sweeps out stagnant energetic residue.' },
      { n: '03', title: 'Purification Sankalp', text: 'Divine witnesses are invoked for complete shuddhi and reset.' },
      { n: '04', title: 'Kali Beej & Mahamrityunjaya Japa', text: 'Intense mantra rounds remove deeper layers of darkness.' },
      { n: '05', title: 'Elemental Cleansing Havan', text: 'Camphor, neem, cloves, and sesame offerings clear multi-source negativity.' },
      { n: '06', title: 'Home Grid Sealing', text: 'Gangajal-salt sealing and aarti lock purified protective frequencies.' },
    ],
    footerBlessing: 'May every shadow dissolve and your life shine in divine light.',
  },
]

function pickIcon(iconName) {
  if (iconName === 'shield') return 'FiShield'
  if (iconName === 'sun') return 'FiSun'
  if (iconName === 'star') return 'FiStar'
  return 'FiHeart'
}

function toJs(value) {
  return JSON.stringify(value, null, 2)
}

function buildBenefits(benefits) {
  return `[
${benefits
  .map(
    b =>
      `  { icon: <${pickIcon(b.icon)} />, title: ${JSON.stringify(b.title)}, desc: ${JSON.stringify(b.desc)} }`
  )
  .join(',\n')}
]`
}

function buildSource(cfg) {
  return `import { useEffect, useState } from 'react'
import {
    FiAlertCircle,
    FiBookOpen,
    FiCalendar,
    FiCheck,
    FiClock,
    FiHeart,
    FiLoader,
    FiMail,
    FiMapPin,
    FiMessageSquare,
    FiPhone,
    FiShield,
    FiStar,
    FiSun,
    FiUser,
    FiUsers,
} from 'react-icons/fi'
import heroImage from '../../assets/all_puja_bg.webp'
import shivaImage from '../../assets/puja/temple-gopuram.png'
import havanImage from '../../assets/puja/havan-kund.png'
import './MahamrityunjayaPujaStyle.css'

const PUJA_ID = ${JSON.stringify(cfg.pujaId)}
const PUJA_NAME = ${JSON.stringify(cfg.pujaName)}
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const PACKAGES = [
    {
        id: 'saral',
        name: 'Saral Puja',
        sanskrit: 'सरल पूजा',
        price: 5100,
        duration: '3 Hours',
        pandits: '2 Pandits',
        chants: '11,000 Mantras',
        features: ['Core mantra japa', 'Shuddhi sankalp', 'Sacred havan', 'Live video of puja', 'Prasad dispatch'],
    },
    {
        id: 'vishesh',
        sanskrit: 'विशेष पूजा',
        name: 'Vishesh Puja',
        price: 11100,
        duration: '6 Hours',
        pandits: '4 Pandits',
        chants: '51,000 Mantras',
        features: ['Extended mantra anushthan', 'Personal sankalp with gotra', 'Detailed havan', 'Live HD video', 'Prasad + energized protection thread', 'Pandit guidance call'],
        popular: true,
    },
    {
        id: 'maha',
        name: 'Maha Puja',
        sanskrit: 'महा पूजा',
        price: 25100,
        duration: 'Full Day',
        pandits: '8 Pandits',
        chants: '1,25,000 Mantras',
        features: ['Sava lakh mantra completion', 'Advanced ritual sequence', 'Grand havan vidhi', 'Full ceremony recording', 'Premium prasad hamper', 'Post-puja follow-up guidance'],
    },
]

const BENEFITS = ${buildBenefits(cfg.benefits)}

const REASONS = ${toJs(cfg.reasons)}

const STEPS = ${toJs(cfg.steps)}

export default function ${cfg.component}() {
    const [selectedPkg, setSelectedPkg] = useState('vishesh')
    const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', gotra: '', date: '', time: '', message: '' })
    const [availability, setAvailability] = useState(null)
    const [status, setStatus] = useState('idle')
    const [statusMsg, setStatusMsg] = useState('')
    const [bookedInfo, setBookedInfo] = useState(null)

    useEffect(() => {
        if (!form.date) { setAvailability(null); return }
        fetch(\`\${API_BASE}/api/puja-bookings/availability?pujaId=\${PUJA_ID}&date=\${form.date}\`)
            .then(r => r.json())
            .then(data => setAvailability(data))
            .catch(() => setAvailability(null))
    }, [form.date])

    useEffect(() => {
        document.body.classList.add('mm-page-active')
        return () => {
            document.body.classList.remove('mm-page-active')
        }
    }, [])

    const handleChange = e => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
        if (status !== 'idle') { setStatus('idle'); setStatusMsg('') }
    }

    const isTimeConflict = (time) => {
        if (!availability || !time) return false
        return availability.bookedTimeWindows?.some(({ start, end }) => {
            const toMin = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m }
            const chosen = toMin(time)
            return chosen >= toMin(start) && chosen < toMin(end)
        })
    }

    const getTimeHint = () => {
        if (!availability) return null
        if (!availability.available) return { type: 'error', msg: 'No puja slots available for this date. Please choose another date.' }
        if (form.time && isTimeConflict(form.time)) return { type: 'error', msg: 'This time is within a locked slot. Please choose a time outside locked windows.' }
        return { type: 'ok', msg: \`\${availability.remainingSlots} slot(s) remaining today.\` }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!form.name || !form.email || !form.phone || !form.date || !form.time) {
            setStatus('error'); setStatusMsg('Please fill all required fields.'); return
        }
        if (isTimeConflict(form.time)) {
            setStatus('error'); setStatusMsg('Your chosen time conflicts with an existing booking. Please pick another slot.'); return
        }
        const pkg = PACKAGES.find(p => p.id === selectedPkg)

        setStatus('loading')
        try {
            const res = await fetch(\`\${API_BASE}/api/puja-bookings\`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    pujaId: PUJA_ID,
                    pujaName: PUJA_NAME,
                    name: form.name, email: form.email, phone: form.phone,
                    address: form.address, gotra: form.gotra,
                    bookingDate: form.date, startTime: form.time,
                    package: selectedPkg, amount: pkg.price,
                    message: form.message,
                }),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.error || 'Booking failed.')
            setStatus('success')
            setStatusMsg(data.message)
            setBookedInfo(data.booking)
        } catch (err) {
            setStatus('error')
            setStatusMsg(err.message)
        }
    }

    const hint = getTimeHint()
    const today = new Date().toISOString().split('T')[0]

    return (
        <div className="mm-page">
            <div className="mm-topbar">ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् • Health & Protection Puja</div>

            <section className="mm-hero" style={{ '--mm-hero-image': \`url(\${heroImage})\` }}>
                <div className="mm-hero-overlay" />
                <div className="mm-hero-content">
                    <p className="mm-badge">✦ Health & Protection Puja ✦</p>
                    <h1>${cfg.pujaName.replace(/"/g, '&quot;')} <span>Puja</span></h1>
                    <p className="mm-quote">${cfg.heroQuote.replace(/"/g, '&quot;')}</p>
                    <p className="mm-subtitle">
                        ${cfg.heroSubtitle.replace(/"/g, '&quot;')}
                    </p>
                    <div className="mm-actions">
                        <a href="#booking" className="mm-btn mm-btn-gold">Book Your Puja</a>
                        <a href="#packages" className="mm-btn mm-btn-outline">View Packages</a>
                    </div>
                    <div className="mm-hero-meta">
                        <span><FiStar /> 10,000+ Pujas Performed</span>
                        <span><FiUsers /> Vedic Certified Pandits</span>
                        <span><FiBookOpen /> Live Video Darshan</span>
                    </div>
                </div>
            </section>

            <section className="mm-mantra">
                <h2>${cfg.mantra.replace(/"/g, '&quot;')}</h2>
                <p>${cfg.mantraMeaning.replace(/"/g, '&quot;')}</p>
            </section>

            <section className="mm-section">
                <div className="mm-container mm-about">
                    <div>
                        <p className="mm-label">Sacred Knowledge</p>
                        <h2>${cfg.aboutTitle.replace(/"/g, '&quot;')}</h2>
                        <p>
                            ${cfg.aboutParagraphs[0].replace(/"/g, '&quot;')}
                        </p>
                        <p>
                            ${cfg.aboutParagraphs[1].replace(/"/g, '&quot;')}
                        </p>
                    </div>
                    <img src={shivaImage} alt="Sacred ritual symbolism" />
                </div>
            </section>

            <section className="mm-section mm-warm">
                <div className="mm-container">
                    <p className="mm-label center">The Calling</p>
                    <h2 className="center">Why Devotees Perform This Puja</h2>
                    <div className="mm-reasons">
                        {REASONS.map((reason, idx) => (
                            <div className="mm-reason-card" key={reason}>
                                <span>{idx + 1}</span>
                                <p>{reason}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mm-section">
                <div className="mm-container">
                    <p className="mm-label center">Divine Blessings</p>
                    <h2 className="center">Benefits of the Puja</h2>
                    <div className="mm-benefits">
                        {BENEFITS.map((b, i) => (
                            <div key={i} className="mm-benefit-card">
                                <div className="mm-benefit-icon">{b.icon}</div>
                                <h4>{b.title}</h4>
                                <p>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mm-section mm-process" style={{ '--mm-process-image': \`url(\${havanImage})\` }}>
                <div className="mm-process-overlay" />
                <div className="mm-container mm-process-content">
                    <p className="mm-label center">Sacred Vidhi</p>
                    <h2 className="center">The Process of the Puja</h2>
                    <div className="mm-steps">
                        {STEPS.map(step => (
                            <div key={step.n} className="mm-step-card">
                                <span>{step.n}</span>
                                <h4>{step.title}</h4>
                                <p>{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mm-section mm-warm" id="packages">
                <div className="mm-container">
                    <p className="mm-label center">Choose Your Sankalp</p>
                    <h2 className="center">Puja Packages & Pricing</h2>
                    <div className="mm-packages">
                        {PACKAGES.map(pkg => (
                            <div
                                key={pkg.id}
                                className={\`mm-package-card \${selectedPkg === pkg.id ? 'selected' : ''} \${pkg.popular ? 'popular' : ''}\`}
                                onClick={() => setSelectedPkg(pkg.id)}
                            >
                                {pkg.popular && <div className="mm-popular-badge">Most Chosen</div>}
                                <p className="mm-sanskrit">{pkg.sanskrit}</p>
                                <h3>{pkg.name}</h3>
                                <div className="mm-price">₹{pkg.price.toLocaleString('en-IN')}</div>
                                <div className="mm-package-meta">
                                    <span><FiUsers /> {pkg.pandits}</span>
                                    <span><FiClock /> {pkg.duration}</span>
                                    <span><FiBookOpen /> {pkg.chants}</span>
                                </div>
                                <ul className="mm-features">
                                    {pkg.features.map((f, i) => <li key={i}><FiCheck /> {f}</li>)}
                                </ul>
                                <div className={\`mm-select-btn \${selectedPkg === pkg.id ? 'active' : ''}\`}>
                                    {selectedPkg === pkg.id ? '✓ Selected' : 'Select Package'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mm-section" id="booking">
                <div className="mm-container">
                    <p className="mm-label center">Begin Your Sacred Journey</p>
                    <h2 className="center">Book Your Puja</h2>

                    {status === 'success' ? (
                        <div className="mm-success-card">
                            <div className="mm-success-icon"><FiCheck /></div>
                            <h3>Puja Booked Successfully! 🙏</h3>
                            <p>{statusMsg}</p>
                            {bookedInfo && (
                                <div className="mm-booking-summary">
                                    <p><strong>Date:</strong> {bookedInfo.bookingDate}</p>
                                    <p><strong>Time:</strong> {bookedInfo.startTime} – {bookedInfo.endTime} (slot locked)</p>
                                    <p><strong>Status:</strong> {bookedInfo.status}</p>
                                </div>
                            )}
                            <p className="mm-success-note">Our team will call you within 2 hours to confirm your slot and guide the ritual details.</p>
                        </div>
                    ) : (
                        <form className="mm-form" onSubmit={handleSubmit}>
                            <div className="mm-form-grid">
                                <div className="mm-form-group">
                                    <label><FiUser /> Full Name *</label>
                                    <input name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                                </div>
                                <div className="mm-form-group">
                                    <label><FiMail /> Email Address *</label>
                                    <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                                </div>
                                <div className="mm-form-group">
                                    <label><FiPhone /> Phone Number *</label>
                                    <input name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
                                </div>
                                <div className="mm-form-group">
                                    <label><FiMapPin /> Address / City</label>
                                    <input name="address" placeholder="Your city or full address" value={form.address} onChange={handleChange} />
                                </div>
                                <div className="mm-form-group">
                                    <label>Gotra (Family Lineage)</label>
                                    <input name="gotra" placeholder="e.g. Kashyap, Bharadwaj (optional)" value={form.gotra} onChange={handleChange} />
                                </div>
                                <div className="mm-form-group">
                                    <label><FiCalendar /> Puja Date *</label>
                                    <input name="date" type="date" min={today} value={form.date} onChange={handleChange} required />
                                    {availability && (
                                        <div className={\`mm-avail-badge \${availability.available ? 'ok' : 'full'}\`}>
                                            {availability.available
                                                ? \`\${availability.remainingSlots}/\${availability.totalSlots} slots available\`
                                                : 'No slots available for this date'}
                                        </div>
                                    )}
                                </div>
                                <div className="mm-form-group">
                                    <label><FiClock /> Preferred Start Time *</label>
                                    <input name="time" type="time" value={form.time} onChange={handleChange} required min="05:00" max="19:00" step="1800" />
                                    {hint && (
                                        <div className={\`mm-hint \${hint.type}\`}>
                                            {hint.type === 'error' ? <FiAlertCircle /> : <FiCheck />} {hint.msg}
                                        </div>
                                    )}
                                    <p className="mm-time-note">Each booking locks a 5-hour window. Max 5 pujas per day.</p>
                                </div>
                                <div className="mm-form-group mm-full-width">
                                    <label><FiMessageSquare /> Special Message / Wishes</label>
                                    <textarea name="message" rows={3} placeholder="Share your specific concern or sankalp..." value={form.message} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="mm-form-summary">
                                <span>Selected: <strong>{PACKAGES.find(p => p.id === selectedPkg)?.name}</strong></span>
                                <span>Amount: <strong>₹{PACKAGES.find(p => p.id === selectedPkg)?.price.toLocaleString('en-IN')}</strong></span>
                            </div>

                            {status === 'error' && (
                                <div className="mm-error-msg"><FiAlertCircle /> {statusMsg}</div>
                            )}

                            <button type="submit" className="mm-submit-btn" disabled={status === 'loading'}>
                                {status === 'loading' ? <><FiLoader className="mm-spin" /> Processing...</> : '🪔 Confirm Puja Booking'}
                            </button>
                        </form>
                    )}
                </div>
            </section>

            <footer className="mm-footer">
                <p className="mm-footer-mantra">ॐ नमः शिवाय</p>
                <p>${cfg.footerBlessing.replace(/"/g, '&quot;')}</p>
                <small>© {new Date().getFullYear()} Sacred Pujas • Performed with devotion.</small>
            </footer>
        </div>
    )
}
`
}

for (const cfg of pages) {
  const outPath = path.join(PAGES_DIR, cfg.file)
  fs.writeFileSync(outPath, buildSource(cfg), 'utf8')
  console.log(`updated ${cfg.file}`)
}

