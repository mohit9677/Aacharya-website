import fs from 'node:fs'
import path from 'node:path'

const ROOT = 'D:/AstroBharatAI/AstroBharatAI aacharya website'
const PAGES_DIR = path.join(ROOT, 'client/src/pages/pujas')

const pages = [
  {
    file: 'LoveMarriagePujaPage.jsx',
    component: 'LoveMarriagePujaPage',
    pujaId: 'love-marriage-puja',
    pujaName: 'Love Marriage Puja',
    sanskar: 'Prem Vivah Sankalp',
    tagline: 'Sacred blessings to unite two hearts with family acceptance, harmony, and divine grace.',
    about: [
      'Love Marriage Puja is a Vedic ritual performed to remove relationship obstacles, calm planetary afflictions, and bless the union of two individuals who wish to marry by choice.',
      'It is commonly performed when couples face delay, resistance, misunderstanding, or astrological incompatibility despite strong mutual commitment.',
    ],
    why: [
      'To remove obstacles caused by Mangal, Rahu, or Shani influence in the relationship chart.',
      'To attract family acceptance and peaceful communication between both households.',
      'To reduce repeated conflicts and stabilize emotional compatibility between partners.',
      'To protect the relationship from jealousy, negativity, and outside interference.',
      'To support timely marriage discussions and commitment decisions.',
      'To strengthen trust, loyalty, and long-term emotional alignment.',
    ],
    benefits: [
      { icon: '💖', title: 'Stronger Bond', desc: 'Improves trust, communication, and emotional security between partners.' },
      { icon: '🕯', title: 'Obstacle Removal', desc: 'Pacifies doshas and unseen blocks delaying union and commitment.' },
      { icon: '👨‍👩‍👧‍👦', title: 'Family Harmony', desc: 'Encourages acceptance, respect, and support from both families.' },
      { icon: '🛡', title: 'Protection', desc: 'Creates a protective spiritual shield around the relationship.' },
      { icon: '📿', title: 'Karmic Healing', desc: 'Helps dissolve repeated patterns from past relationship pain.' },
      { icon: '✨', title: 'Auspicious Marriage Path', desc: 'Opens smooth pathways toward a sacred and stable married life.' },
    ],
    steps: [
      { n: '01', title: 'Sankalp for Union', text: 'Names and intentions of both partners are offered before Agni.' },
      { n: '02', title: 'Ganesh & Gauri Pujan', text: 'Invoking removal of obstacles and blessings of divine feminine grace.' },
      { n: '03', title: 'Graha Shanti', text: 'Pacifying planets causing delay, fear, or resistance in relationship matters.' },
      { n: '04', title: 'Prem Samriddhi Mantra Japa', text: 'Focused mantra chanting for emotional stability and sacred commitment.' },
      { n: '05', title: 'Havan & Ahuti', text: 'Fire offerings for harmonizing families and attracting marriage yoga.' },
      { n: '06', title: 'Ashirwad & Raksha', text: 'Final blessings and protection for a joyful marriage journey.' },
    ],
    testimonials: [
      { name: 'Ritika & Aman', city: 'Jaipur', text: 'This puja helped us gain confidence and family support for our marriage.' },
      { name: 'Neha', city: 'Pune', text: 'After the puja, communication improved and constant fights stopped.' },
      { name: 'Karan & Isha', city: 'Ahmedabad', text: 'The process felt powerful and gave us emotional stability and hope.' },
    ],
  },
  {
    file: 'RelationshipHealingPujaPage.jsx',
    component: 'RelationshipHealingPujaPage',
    pujaId: 'relationship-healing-puja',
    pujaName: 'Relationship Healing Puja',
    sanskar: 'Sambandh Shuddhi Vidhi',
    tagline: 'A compassionate Vedic healing ritual to restore trust, peace, and emotional connection.',
    about: [
      'Relationship Healing Puja is performed for couples and families experiencing repeated misunderstanding, emotional distance, or unresolved hurt.',
      'Through mantra, sankalp, and sacred fire offerings, this puja calms emotional turbulence and re-establishes warmth in relationships.',
    ],
    why: [
      'To heal recurring conflicts and reduce ego-based clashes.',
      'To release resentment, guilt, and emotional heaviness in relationships.',
      'To restore honest communication and respectful listening.',
      'To harmonize relationship karma and remove negative influence.',
      'To rebuild affection after trust breakdown or prolonged distance.',
      'To invite peace, forgiveness, and emotional maturity.',
    ],
    benefits: [
      { icon: '🫶', title: 'Emotional Repair', desc: 'Supports healing of hurt, anger, and unresolved emotional pain.' },
      { icon: '🧘', title: 'Mental Calm', desc: 'Reduces stress and reactive behavior during relationship conversations.' },
      { icon: '💬', title: 'Better Communication', desc: 'Improves listening, empathy, and clear expression between partners.' },
      { icon: '🌺', title: 'Affection Returns', desc: 'Revives warmth, care, and emotional closeness in daily life.' },
      { icon: '🕉', title: 'Karmic Cleansing', desc: 'Purifies energetic heaviness and repetitive conflict patterns.' },
      { icon: '🏡', title: 'Household Peace', desc: 'Creates a calmer and more respectful family environment.' },
    ],
    steps: [
      { n: '01', title: 'Relationship Sankalp', text: 'Sacred intention for healing, peace, and mutual understanding is set.' },
      { n: '02', title: 'Ganesh Invocation', text: 'Prayers to remove communication obstacles and emotional blocks.' },
      { n: '03', title: 'Shanti Mantra Japa', text: 'Focused chanting for inner calm, clarity, and emotional balance.' },
      { n: '04', title: 'Hridaya Shuddhi Vidhi', text: 'Ritual offerings for forgiveness, compassion, and trust rebuilding.' },
      { n: '05', title: 'Agni Healing Havan', text: 'Fire ritual to burn conflict energy and invite harmony vibrations.' },
      { n: '06', title: 'Blessing & Guidance', text: 'Closing blessings with practical spiritual guidance for ongoing healing.' },
    ],
    testimonials: [
      { name: 'Maya & Rohit', city: 'Delhi', text: 'We became calmer with each other and started resolving issues respectfully.' },
      { name: 'Sonal', city: 'Indore', text: 'This puja brought emotional relief and helped us reconnect after long silence.' },
      { name: 'Ankit & Pooja', city: 'Noida', text: 'The ritual gave our relationship a fresh beginning and renewed trust.' },
    ],
  },
  {
    file: 'CompatibilityPujaPage.jsx',
    component: 'CompatibilityPujaPage',
    pujaId: 'compatibility-puja',
    pujaName: 'Compatibility (Kundli Milan) Puja',
    sanskar: 'Kundli Milan Shanti',
    tagline: 'Aligning two energies for a stable, prosperous, and spiritually compatible marriage.',
    about: [
      'Compatibility Puja is performed when couples seek deeper astrological harmony before marriage, especially when guna mismatch or dosha concerns are present.',
      'It strengthens compatibility factors and reduces friction points indicated in kundli matching reports.',
    ],
    why: [
      'To balance guna mismatch and reduce marital incompatibility risks.',
      'To pacify Nadi, Bhakoot, and Mangal-related concerns before marriage.',
      'To improve emotional, mental, and family-level compatibility.',
      'To strengthen long-term trust and cooperation between partners.',
      'To avoid repeated misunderstandings due to chart-based imbalances.',
      'To begin marriage with shastric blessings and astrological support.',
    ],
    benefits: [
      { icon: '📜', title: 'Improved Match Quality', desc: 'Strengthens compatibility dimensions indicated in kundli analysis.' },
      { icon: '🪔', title: 'Dosha Relief', desc: 'Reduces harmful impact of specific marriage-related doshas.' },
      { icon: '🤝', title: 'Mutual Understanding', desc: 'Enhances cooperation and patience in difficult phases.' },
      { icon: '💠', title: 'Stable Married Life', desc: 'Builds a stronger foundation for long-term marital happiness.' },
      { icon: '🌼', title: 'Family Alignment', desc: 'Encourages smoother adjustment between both family systems.' },
      { icon: '✨', title: 'Auspicious Beginning', desc: 'Invokes sacred blessings for a healthy and prosperous union.' },
    ],
    steps: [
      { n: '01', title: 'Kundli Sankalp', text: 'Both charts are spiritually dedicated for compatibility harmonization.' },
      { n: '02', title: 'Ganesh Pujan', text: 'Obstacle removal for smooth marriage progression and clear decisions.' },
      { n: '03', title: 'Guna Samya Mantras', text: 'Mantras for balancing psychological and emotional compatibility factors.' },
      { n: '04', title: 'Dosha Nivaran Vidhi', text: 'Targeted rituals for Nadi, Bhakoot, and Mangal concerns.' },
      { n: '05', title: 'Havan for Marriage Yoga', text: 'Sacred fire offerings to activate auspicious married-life combinations.' },
      { n: '06', title: 'Ashirwad & Muhurat Guidance', text: 'Final blessings and guidance for next marriage steps.' },
    ],
    testimonials: [
      { name: 'Harsh & Kavya', city: 'Lucknow', text: 'We felt much more confident after this puja despite initial kundli concerns.' },
      { name: 'Vaani', city: 'Surat', text: 'The ritual and guidance made our engagement process very smooth.' },
      { name: 'Rajat & Nidhi', city: 'Bhopal', text: 'Family anxieties reduced and the atmosphere became positive.' },
    ],
  },
  {
    file: 'BreakupRecoveryPujaPage.jsx',
    component: 'BreakupRecoveryPujaPage',
    pujaId: 'breakup-recovery-puja',
    pujaName: 'Breakup Recovery Puja',
    sanskar: 'Manas Shanti Sadhana',
    tagline: 'A healing puja for emotional recovery, closure, and spiritual strength after heartbreak.',
    about: [
      'Breakup Recovery Puja supports individuals facing emotional distress, grief, anxiety, or loss of confidence after relationship separation.',
      'This ritual helps release attachment pain, calm the mind, and restore self-worth and life direction.',
    ],
    why: [
      'To heal heartbreak, anxiety, and overthinking after separation.',
      'To release unhealthy attachment and regain emotional clarity.',
      'To remove negative thought loops and restore mental peace.',
      'To rebuild confidence and open the path for a healthy future.',
      'To protect from recurring toxic relationship patterns.',
      'To invite spiritual acceptance, strength, and renewed hope.',
    ],
    benefits: [
      { icon: '💧', title: 'Emotional Release', desc: 'Helps process grief and release bottled pain with spiritual support.' },
      { icon: '🧠', title: 'Mental Clarity', desc: 'Reduces confusion, rumination, and emotional chaos.' },
      { icon: '🛡', title: 'Energetic Protection', desc: 'Protects from negative energies and repeated emotional drains.' },
      { icon: '🌿', title: 'Inner Healing', desc: 'Encourages calm, acceptance, and balanced emotional recovery.' },
      { icon: '🌅', title: 'Fresh Beginning', desc: 'Creates space for self-growth and healthier relationship choices.' },
      { icon: '✨', title: 'Spiritual Strength', desc: 'Reconnects you with faith, resilience, and purpose.' },
    ],
    steps: [
      { n: '01', title: 'Shanti Sankalp', text: 'Intention is set for emotional healing and inner stability.' },
      { n: '02', title: 'Ganesh & Devi Invocation', text: 'Divine support is invoked for courage and obstacle removal.' },
      { n: '03', title: 'Manas Shuddhi Japa', text: 'Chanting for cleansing sorrow, fear, and heavy emotions.' },
      { n: '04', title: 'Cord Release Vidhi', text: 'Ritual for peaceful closure and detachment from past pain.' },
      { n: '05', title: 'Healing Havan', text: 'Fire offerings to transform grief into strength and clarity.' },
      { n: '06', title: 'Blessings for New Path', text: 'Closing prayers for confidence, peace, and a brighter future.' },
    ],
    testimonials: [
      { name: 'Shruti', city: 'Mumbai', text: 'I felt lighter and calmer after the puja. It truly helped me move forward.' },
      { name: 'Aarav', city: 'Chandigarh', text: 'This gave me closure and emotional strength during a difficult phase.' },
      { name: 'Pallavi', city: 'Kolkata', text: 'I regained focus, faith, and confidence after attending this ritual.' },
    ],
  },
  {
    file: 'DelayInMarriagePujaPage.jsx',
    component: 'DelayInMarriagePujaPage',
    pujaId: 'delay-in-marriage-puja',
    pujaName: 'Delay in Marriage Puja',
    sanskar: 'Vivah Vighna Nivaran',
    tagline: 'A focused Vedic remedy to remove marriage delays and activate auspicious union yoga.',
    about: [
      'Delay in Marriage Puja is performed when suitable proposals repeatedly fail, marriage talks get blocked, or timelines keep extending due to astrological and karmic factors.',
      'This ritual helps remove vighnas and strengthens timely marriage opportunities with divine grace.',
    ],
    why: [
      'To remove planetary blocks causing repeated delay in marriage.',
      'To pacify Manglik, Shani, Rahu, or Guru-related marriage obstacles.',
      'To improve proposal finalization and communication outcomes.',
      'To reduce fear, confusion, and indecision around commitment.',
      'To attract the right life partner at the right time.',
      'To begin marriage journey with blessings and stability.',
    ],
    benefits: [
      { icon: '⏳', title: 'Delay Reduction', desc: 'Helps unblock prolonged marriage delays and stalled discussions.' },
      { icon: '📿', title: 'Dosha Pacification', desc: 'Calms planetary influences that obstruct timely marriage.' },
      { icon: '💬', title: 'Smoother Alliances', desc: 'Improves communication and outcomes in marriage proposals.' },
      { icon: '💞', title: 'Right Partner Energy', desc: 'Attracts compatible and sincere partner opportunities.' },
      { icon: '🏵', title: 'Family Readiness', desc: 'Creates support and alignment within family decision-making.' },
      { icon: '✨', title: 'Auspicious Momentum', desc: 'Activates positive marriage yoga and timely progression.' },
    ],
    steps: [
      { n: '01', title: 'Vivah Sankalp', text: 'Prayer intention is set for timely and auspicious marriage.' },
      { n: '02', title: 'Ganesh Pujan', text: 'Removal of obstacles and delays in alliance finalization.' },
      { n: '03', title: 'Graha Shanti', text: 'Pacifying planets creating postponement and repeated rejection.' },
      { n: '04', title: 'Vivah Yog Mantra Japa', text: 'Chanting to activate favorable marriage combinations.' },
      { n: '05', title: 'Havan for Union', text: 'Fire ritual to clear delay karma and invite divine timing.' },
      { n: '06', title: 'Aashirwad & Remedies', text: 'Blessings and practical follow-up remedies for continuity.' },
    ],
    testimonials: [
      { name: 'Komal', city: 'Nagpur', text: 'After months of delay, proposals finally started moving positively.' },
      { name: 'Saket', city: 'Patna', text: 'The puja gave us confidence and removed many repeated obstacles.' },
      { name: 'Family of Rhea', city: 'Hyderabad', text: 'We saw clear momentum and harmony in the marriage process.' },
    ],
  },
]

function esc(value) {
  return JSON.stringify(value, null, 2)
}

function buildSource(cfg) {
  return `import { useState, useEffect } from 'react'
import { FiUser, FiPhone, FiMail, FiMapPin, FiCalendar, FiClock, FiMessageSquare, FiCheck, FiAlertCircle, FiLoader } from 'react-icons/fi'
import heroImage from '../../assets/puja/hero-diya.png'
import processImage from '../../assets/puja/pandit-aarti.png'
import mandalaImage from '../../assets/puja/mangal-yantra.png'
import './VivahPujaStyle.css'

const PUJA_ID = '${cfg.pujaId}'
const PUJA_NAME = '${cfg.pujaName}'
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const PACKAGES = [
  {
    id: 'basic',
    name: 'Saral ${cfg.pujaName}',
    price: 5100,
    duration: '1.5 hour ceremony',
    features: ['1 Vedic Pandit', 'Basic samagri included', 'Online or in-person', 'Digital sankalp report'],
  },
  {
    id: 'standard',
    name: 'Shubh ${cfg.pujaName}',
    price: 11100,
    duration: '3 hour ceremony',
    features: ['2 experienced Pandits', 'Premium samagri & havan', 'Kundali analysis + dosha nivaran', 'Prasad delivery'],
    popular: true,
  },
  {
    id: 'premium',
    name: 'Divya ${cfg.pujaName} Mahotsav',
    price: 21100,
    duration: 'Full-day ceremony',
    features: ['4 senior Vedic Pandits', 'Grand complete setup', 'Navagraha + dosha shanti', 'Live streaming for family', 'Post-puja consultation'],
  },
]

const BENEFITS = ${esc(cfg.benefits)}
const STEPS = ${esc(cfg.steps)}
const TESTIMONIALS = ${esc(cfg.testimonials)}

const FAQS = [
  { q: 'Can this puja be done online?', a: 'Yes. Our pandits perform the ritual with authentic vidhi through live video and share prasad instructions.' },
  { q: 'Do I need kundali details?', a: 'Birth details are recommended for personalized sankalp and targeted mantra remedies.' },
  { q: 'How soon can I book?', a: 'You can choose the next available date and our team confirms muhurat as per ritual requirements.' },
  { q: 'Will I receive guidance after puja?', a: 'Yes, we share practical post-puja guidance and simple follow-up remedies.' },
]

const WHY_PERFORM = ${esc(cfg.why)}

export default function ${cfg.component}() {
  const [selectedPkg, setSelectedPkg] = useState('standard')
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

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (status !== 'idle') { setStatus('idle'); setStatusMsg('') }
  }

  const isTimeConflict = time => {
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
    if (form.time && isTimeConflict(form.time)) return { type: 'error', msg: 'This time is within a locked slot. Please choose another time.' }
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
    <div className="vp-page">
      <header className="vp-header">
        <div className="vp-container vp-nav">
          <a href="#top" className="vp-brand">🕉 ${cfg.sanskar}</a>
          <div className="vp-links">
            <a href="#about">About</a>
            <a href="#benefits">Benefits</a>
            <a href="#process">Process</a>
            <a href="#packages">Packages</a>
            <a href="#book">Book</a>
          </div>
          <a href="#book" className="vp-nav-btn">Book Puja</a>
        </div>
      </header>

      <section className="vp-hero" id="top">
        <img src={heroImage} alt="${cfg.pujaName}" className="vp-hero-bg" />
        <div className="vp-hero-overlay" />
        <img src={mandalaImage} alt="" className="vp-mandala vp-mandala-right" />
        <img src={mandalaImage} alt="" className="vp-mandala vp-mandala-left" />
        <div className="vp-container vp-hero-content">
          <p className="vp-dev">${cfg.sanskar}</p>
          <h1>${cfg.pujaName}</h1>
          <p className="vp-tagline">${cfg.tagline}</p>
          <div className="vp-hero-actions">
            <a href="#book" className="vp-btn vp-btn-primary">Book Your Puja</a>
            <a href="#about" className="vp-btn vp-btn-outline">Learn More</a>
          </div>
        </div>
      </section>

      <section id="about" className="vp-section vp-soft">
        <div className="vp-container vp-about-grid">
          <div>
            <p className="vp-label">About the Puja</p>
            <h2>What is ${cfg.pujaName}?</h2>
            <p>${cfg.about[0]}</p>
            <p>${cfg.about[1]}</p>
            <ul className="vp-list">
              {WHY_PERFORM.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <img src={processImage} alt="Puja process" className="vp-about-image" />
        </div>
      </section>

      <section className="vp-section vp-why">
        <div className="vp-container">
          <p className="vp-label center">Purpose & Significance</p>
          <h2 className="center">Why People Perform ${cfg.pujaName}</h2>
          <div className="vp-why-grid">
            {WHY_PERFORM.map((reason) => (
              <div key={reason} className="vp-why-card">
                <span>✦</span>
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vp-section" id="benefits">
        <div className="vp-container">
          <p className="vp-label center">Divine Benefits</p>
          <h2 className="center">Blessings of ${cfg.pujaName}</h2>
          <div className="vp-benefits">
            {BENEFITS.map((b) => (
              <div className="vp-card" key={b.title}>
                <div className="vp-emoji">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vp-section vp-soft" id="process">
        <div className="vp-container">
          <p className="vp-label center">Sacred Steps</p>
          <h2 className="center">The Puja Process</h2>
          <div className="vp-steps">
            {STEPS.map((s) => (
              <div key={s.n} className="vp-step-card">
                <span>{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vp-section vp-soft" id="packages">
        <div className="vp-container">
          <p className="vp-label center">Puja Packages</p>
          <h2 className="center">Choose Your Sankalp</h2>
          <div className="vp-packages">
            {PACKAGES.map(pkg => (
              <div key={pkg.id} className={\`vp-package \${pkg.popular ? 'popular' : ''}\`} onClick={() => setSelectedPkg(pkg.id)}>
                {pkg.popular && <div className="vp-pop">Most Chosen</div>}
                <h3>{pkg.name}</h3>
                <div className="vp-price">₹{pkg.price.toLocaleString('en-IN')}</div>
                <p className="vp-duration">{pkg.duration}</p>
                <ul>
                  {pkg.features.map((f, i) => <li key={i}><FiCheck /> {f}</li>)}
                </ul>
                <button className="vp-select">{selectedPkg === pkg.id ? '✓ Selected' : 'Select Package'}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vp-section">
        <div className="vp-container">
          <p className="vp-label center">Devotee Voices</p>
          <h2 className="center">Blessed Experiences</h2>
          <div className="vp-testimonials">
            {TESTIMONIALS.map((t) => (
              <div className="vp-card" key={t.name}>
                <p className="vp-stars">★★★★★</p>
                <p className="vp-quote">"{t.text}"</p>
                <h3>{t.name}</h3>
                <p className="vp-city">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vp-section" id="book">
        <div className="vp-container vp-book">
          <p className="vp-label center">Reserve Your Date</p>
          <h2 className="center">Book Your ${cfg.pujaName}</h2>
          {status === 'success' ? (
            <div className="vp-success">
              <div className="vp-success-icon"><FiCheck /></div>
              <h3>Puja Booked Successfully!</h3>
              <p>{statusMsg}</p>
              {bookedInfo && (
                <div className="vp-booking-summary">
                  <p><strong>Date:</strong> {bookedInfo.bookingDate}</p>
                  <p><strong>Time:</strong> {bookedInfo.startTime} - {bookedInfo.endTime}</p>
                </div>
              )}
            </div>
          ) : (
            <form className="vp-form" onSubmit={handleSubmit}>
              <div className="vp-grid">
                <label><FiUser /> Full Name *<input name="name" value={form.name} onChange={handleChange} required /></label>
                <label><FiPhone /> Phone *<input name="phone" type="tel" value={form.phone} onChange={handleChange} required /></label>
                <label><FiMail /> Email *<input name="email" type="email" value={form.email} onChange={handleChange} required /></label>
                <label><FiMapPin /> Address / City<input name="address" value={form.address} onChange={handleChange} /></label>
                <label>Gotra<input name="gotra" value={form.gotra} onChange={handleChange} /></label>
                <label><FiCalendar /> Puja Date *<input name="date" type="date" min={today} value={form.date} onChange={handleChange} required /></label>
                <label><FiClock /> Start Time *<input name="time" type="time" min="05:00" max="19:00" step="1800" value={form.time} onChange={handleChange} required /></label>
                <label className="full"><FiMessageSquare /> Message<textarea name="message" rows={3} value={form.message} onChange={handleChange} /></label>
              </div>
              {availability && <p className={\`vp-hint \${availability.available ? 'ok' : 'err'}\`}>{availability.available ? \`\${availability.remainingSlots}/\${availability.totalSlots} slots available\` : 'No slots available for this date'}</p>}
              {hint && <p className={\`vp-hint \${hint.type === 'ok' ? 'ok' : 'err'}\`}>{hint.msg}</p>}
              {status === 'error' && <div className="vp-error"><FiAlertCircle /> {statusMsg}</div>}
              <div className="vp-summary">Selected: <strong>{PACKAGES.find(p => p.id === selectedPkg)?.name}</strong> | Amount: <strong>₹{PACKAGES.find(p => p.id === selectedPkg)?.price.toLocaleString('en-IN')}</strong></div>
              <button type="submit" className="vp-submit" disabled={status === 'loading'}>
                {status === 'loading' ? <><FiLoader className="spin" /> Processing...</> : '🪔 Confirm Booking'}
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="vp-section vp-soft">
        <div className="vp-container vp-faq">
          <p className="vp-label center">Curiosities</p>
          <h2 className="center">Frequently Asked</h2>
          <div className="vp-faq-list">
            {FAQS.map((f) => (
              <div className="vp-card" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="vp-footer">
        <div className="vp-container">
          <p className="vp-footer-line">Om Shantih Shantih Shantih</p>
          <h3>${cfg.sanskar}</h3>
          <p>Authentic Vedic ceremonies performed by learned pandits, rooted in scripture and tradition.</p>
          <small>© {new Date().getFullYear()} ${cfg.sanskar}. All blessings reserved.</small>
        </div>
      </footer>
    </div>
  )
}
`
}

for (const cfg of pages) {
  fs.writeFileSync(path.join(PAGES_DIR, cfg.file), buildSource(cfg), 'utf8')
  console.log(`updated ${cfg.file}`)
}

