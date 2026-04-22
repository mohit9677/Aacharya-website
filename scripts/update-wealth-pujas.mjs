import fs from 'node:fs'
import path from 'node:path'

const ROOT = 'D:/AstroBharatAI/AstroBharatAI aacharya website'
const TARGET_DIR = path.join(ROOT, 'client/src/pages/pujas')
const GUIDE_TXT = path.join(ROOT, '.tmp_sacred_puja_guide.txt')

const targets = [
  { file: 'LakshmiKuberaPujaPage.jsx', component: 'LakshmiKuberaPujaPage', pujaId: 'lakshmi-kubera-puja', heading: 'Lakshmi Kuber Puja' },
  { file: 'GaneshPujaPage.jsx', component: 'GaneshPujaPage', pujaId: 'ganesh-puja', heading: 'Ganesh Puja' },
  { file: 'BusinessGrowthPujaPage.jsx', component: 'BusinessGrowthPujaPage', pujaId: 'business-growth-puja', heading: 'Business Growth Puja' },
  { file: 'CareerJobSuccessPujaPage.jsx', component: 'CareerJobSuccessPujaPage', pujaId: 'career-job-success-puja', heading: 'Career / Job / Success Puja' },
  { file: 'DhanYogActivationPujaPage.jsx', component: 'DhanYogActivationPujaPage', pujaId: 'dhan-yog-activation-puja', heading: 'Dhan Yog Activation Puja' },
  { file: 'FinancialStabilityPujaPage.jsx', component: 'FinancialStabilityPujaPage', pujaId: 'financial-stability-puja', heading: 'Financial Stability Puja' },
]

function trimLine(s) {
  return (s ?? '').replace(/\s+/g, ' ').trim()
}

function readGuideLines() {
  if (!fs.existsSync(GUIDE_TXT)) {
    throw new Error(`Missing extracted guide text at ${GUIDE_TXT}. Re-extract sacred_puja_guide.docx first.`)
  }
  return fs
    .readFileSync(GUIDE_TXT, 'utf8')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
}

function isPujaHeadingLine(line) {
  // Example: "Lakshmi Kuber Puja   •   लक्ष्मी कुबेर पूजा"
  return /\s•\s/.test(line) && !line.startsWith('✦') && !line.startsWith('●') && !line.startsWith('[')
}

function sliceSection(lines, headingEnglish) {
  const startIdx = lines.findIndex((l) => l.startsWith(headingEnglish))
  if (startIdx === -1) return null
  let endIdx = lines.length
  for (let i = startIdx + 1; i < lines.length; i++) {
    if (isPujaHeadingLine(lines[i])) {
      endIdx = i
      break
    }
  }
  return lines.slice(startIdx, endIdx)
}

function pullFirstQuotedMantra(lines) {
  // Try to find something like: Chant ...: 'Om ...'
  for (const l of lines) {
    const m = l.match(/'([^']{10,200})'/)
    if (m?.[1]) return trimLine(m[1])
  }
  return ''
}

function extractEnglishIntro(blockLines) {
  // Prefer "✦ What Is This Puja?" -> "In English:" paragraphs
  const out = []
  let mode = null
  for (const l of blockLines) {
    if (l.startsWith('✦ What Is This Puja?')) mode = 'seek'
    else if (mode === 'seek' && l === 'In English:') mode = 'collect'
    else if (mode === 'collect') {
      if (l === 'हिंदी में:' || l.startsWith('✦ ')) break
      out.push(l)
    }
  }
  const joined = trimLine(out.join(' '))
  if (joined) return joined

  // Fallback to "✦ About This Puja" English line(s)
  const out2 = []
  let mode2 = null
  for (const l of blockLines) {
    if (l.startsWith('✦ About This Puja')) mode2 = 'seek'
    else if (mode2 === 'seek' && l.startsWith('● English')) mode2 = 'collect'
    else if (mode2 === 'collect') {
      if (l.startsWith('● Hindi') || l.startsWith('✦ ')) break
      out2.push(l)
    }
  }
  return trimLine(out2.join(' '))
}

function extractWhy(blockLines) {
  const out = []
  let inWhy = false
  for (const l of blockLines) {
    if (l.startsWith('✦ Why Do People Perform This Puja?')) inWhy = true
    else if (inWhy && l.startsWith('✦ ')) break
    else if (inWhy && l.startsWith('[EN]')) out.push(trimLine(l.replace(/^\[EN\]\s*/, '')))
  }
  return out
}

function extractBenefits(blockLines) {
  const out = []
  let inBen = false
  for (const l of blockLines) {
    if (l.startsWith('✦ Benefits of This Puja')) inBen = true
    else if (inBen && l.startsWith('✦ ')) break
    else if (inBen && l.startsWith('[EN]')) out.push(trimLine(l.replace(/^\[EN\]\s*/, '')))
  }
  return out
}

function extractProcess(blockLines) {
  const out = []
  let inProc = false
  for (const l of blockLines) {
    if (l.startsWith('✦ Puja Process')) inProc = true
    else if (inProc && l.startsWith('✦ ')) break
    else if (inProc && !l.startsWith('[HI]') && !l.startsWith('[EN]')) out.push(trimLine(l))
  }
  return out
}

function toJsArray(value) {
  return JSON.stringify(value, null, 2)
}

function makeBenefitObjects(benefitLines) {
  // Convert guide benefit lines into {title, desc} best-effort.
  // If no clear split, create generic titles.
  return benefitLines.slice(0, 6).map((line, idx) => {
    const m = line.match(/^(.*?)[—:-]\s+(.*)$/)
    if (m) return { title: trimLine(m[1]), desc: trimLine(m[2]) }
    return { title: `Benefit ${idx + 1}`, desc: line }
  })
}

function makeProcessObjects(processLines) {
  // Use first 6-7 lines as steps.
  const lines = processLines.filter(Boolean)
  const trimmed = lines.slice(0, 7)
  return trimmed.map((l) => {
    // if sentence has " - " split, else keep as sub
    const m = l.match(/^(.*?)[—:-]\s+(.*)$/)
    if (m) return { title: trimLine(m[1]), sub: trimLine(m[2]) }
    // keep shorter title
    const title = l.split('.').slice(0, 1).join('.').slice(0, 48)
    return { title: trimLine(title) || 'Step', sub: l }
  })
}

function inferHeroPieces(pujaName) {
  // Split on last word for gold gradient word.
  const parts = pujaName.split(' ')
  if (parts.length <= 1) return { a: pujaName, b: '' }
  return { a: parts.slice(0, -1).join(' '), b: parts.at(-1) }
}

function pageSource(cfg) {
  return `import { useState, useEffect } from 'react'
import {
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiCalendar,
  FiClock,
  FiMessageSquare,
  FiCheck,
  FiAlertCircle,
  FiLoader,
  FiShield,
  FiHome,
  FiBriefcase,
  FiAward,
} from 'react-icons/fi'
import { GiSparkles, GiFlame, GiLotus, GiReceiveMoney } from 'react-icons/gi'
import heroImage from '../../assets/puja/hero-diya.png'
import pujaImage from '../../assets/puja/pandit-aarti.png'
import mandalaImage from '../../assets/puja/mangal-yantra.png'
import './LakshmiPraptiStyle.css'

const PUJA_ID = '${cfg.pujaId}'
const PUJA_NAME = '${cfg.pujaName}'
const MANTRA = ${JSON.stringify(cfg.mantra || '')}
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const PACKAGES = [
  {
    id: 'basic',
    name: 'Saral ${cfg.pujaName}',
    price: 5100,
    duration: '1.5 hours',
    features: ['Sankalp and core mantra path', 'Basic samagri and puja setup', 'Aarti and prasad blessing', 'Online participation support'],
  },
  {
    id: 'standard',
    name: 'Shubh ${cfg.pujaName}',
    price: 11100,
    duration: '3 hours',
    features: ['Everything in Saral package', 'Extended mantra japa', 'Havan with focused ahutis', 'Personalized intention sankalp', 'Prasad dispatch support'],
    popular: true,
  },
  {
    id: 'premium',
    name: 'Divya ${cfg.pujaName} Anushthan',
    price: 21100,
    duration: '5-6 hours',
    features: ['Complete Vedic anushthan', 'Advanced mantra and ritual sequence', 'Expanded havan process', 'Personalized chart-aware remedies', 'Priority pandit support'],
  },
]

const REASONS = ${toJsArray(cfg.reasons)}
const BENEFITS = ${toJsArray(cfg.benefits)}
const PROCESS = ${toJsArray(cfg.process)}

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
    if (form.time && isTimeConflict(form.time)) return { type: 'error', msg: 'This time is within a locked slot. Please choose a time outside locked windows.' }
    return { type: 'ok', msg: \`\${availability.remainingSlots} slot(s) remaining today.\` }
  }

  const handleSubmit = async e => {
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
    <div className="lp-page">
      <section className="lp-hero" id="top">
        <div className="lp-bg-gradient" />
        <img src={mandalaImage} alt="" className="lp-mandala lp-mandala-right" />
        <img src={mandalaImage} alt="" className="lp-mandala lp-mandala-left" />
        <div className="lp-container lp-hero-grid">
          <div className="lp-hero-content">
            <span className="lp-pill"><GiSparkles /> Vedic Wealth Ritual</span>
            <h1>${cfg.heroTitleA} <span>${cfg.heroTitleB}</span></h1>
            {MANTRA ? (
              <p className="lp-mantra">{MANTRA}</p>
            ) : (
              <p className="lp-mantra" style={{ opacity: 0.7 }}>ॐ शुभं भवतु</p>
            )}
            <p className="lp-subtitle">${cfg.subtitle}</p>
            <div className="lp-cta-row">
              <a href="#booking" className="lp-btn lp-btn-primary">Book Your Puja</a>
              <a href="#packages" className="lp-btn lp-btn-outline">View Packages</a>
            </div>
            <div className="lp-proof-row">
              <div><FiCheck /> 5000+ Pujas Done</div>
              <div><FiCheck /> Verified Pandits</div>
              <div><FiCheck /> Live Streaming</div>
            </div>
          </div>
          <div className="lp-hero-art">
            <div className="lp-glow" />
            <img src={heroImage} alt="${cfg.pujaName}" />
            <div className="lp-floating-card">
              <GiFlame />
              <div>
                <p>Next Auspicious Date</p>
                <strong>Friday - Pushya Nakshatra</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-section lp-about">
        <div className="lp-container lp-about-grid">
          <div className="lp-about-image-wrap">
            <img src={pujaImage} alt="${cfg.pujaName} setup" className="lp-about-image" />
            <div className="lp-about-badge">Authentic Vedic Vidhi</div>
          </div>
          <div className="lp-about-copy">
            <p className="lp-label">What is this puja?</p>
            <h2>The Sacred Ritual of <span>Prosperity</span></h2>
            <p>${cfg.aboutP1}</p>
            <p>${cfg.aboutP2}</p>
            <div className="lp-about-stats">
              <div><strong>5000+</strong><span>Devotees Blessed</span></div>
              <div><strong>15+ yrs</strong><span>Pandit Experience</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-section lp-reasons">
        <div className="lp-container">
          <p className="lp-label center">Why perform it</p>
          <h2 className="lp-title center">The Reason Behind the Ritual</h2>
          <div className="lp-reason-grid">
            {REASONS.map(reason => (
              <div className="lp-reason-card" key={reason}><GiLotus /> {reason}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section">
        <div className="lp-container">
          <p className="lp-label center">Divine Benefits</p>
          <h2 className="lp-title center">Blessings You Receive</h2>
          <div className="lp-benefit-grid">
            {BENEFITS.map((b, i) => (
              <div key={i} className="lp-benefit-card">
                <div className="lp-benefit-icon">
                  {i % 6 === 0 ? <GiReceiveMoney /> : i % 6 === 1 ? <FiShield /> : i % 6 === 2 ? <FiHome /> : i % 6 === 3 ? <FiBriefcase /> : i % 6 === 4 ? <GiSparkles /> : <FiAward />}
                </div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section lp-process">
        <div className="lp-container">
          <p className="lp-label center">Sacred Vidhi</p>
          <h2 className="lp-title center">The Puja Process</h2>
          <div className="lp-steps-grid">
            {PROCESS.map((s, i) => (
              <div key={s.title} className="lp-step-card" style={{ '--i': i }}>
                <div className="lp-step-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section" id="packages">
        <div className="lp-container">
          <p className="lp-label center">Puja Packages</p>
          <h2 className="lp-title center">Choose Your Anushthan</h2>
          <div className="lp-packages">
            {PACKAGES.map(pkg => (
              <div
                key={pkg.id}
                className={\`lp-package-card \${selectedPkg === pkg.id ? 'selected' : ''} \${pkg.popular ? 'popular' : ''}\`}
                onClick={() => setSelectedPkg(pkg.id)}
              >
                {pkg.popular && <div className="lp-popular-badge">Most Popular</div>}
                <h3>{pkg.name}</h3>
                <div className="lp-price">
                  <span className="lp-price-currency">₹</span>
                  <span className="lp-price-amount">{pkg.price.toLocaleString('en-IN')}</span>
                </div>
                <div className="lp-duration"><FiClock /> {pkg.duration}</div>
                <ul className="lp-features">
                  {pkg.features.map((f, i) => <li key={i}><FiCheck /> {f}</li>)}
                </ul>
                <div className={\`lp-select-btn \${selectedPkg === pkg.id ? 'active' : ''}\`}>
                  {selectedPkg === pkg.id ? '✓ Selected' : 'Select Package'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-section lp-booking" id="booking">
        <div className="lp-container">
          <p className="lp-label center">Book Your Puja</p>
          <h2 className="lp-title center">Begin Your Journey to Prosperity</h2>

          {status === 'success' ? (
            <div className="lp-success-card">
              <div className="lp-success-icon"><FiCheck /></div>
              <h3>Puja Booked Successfully! 🙏</h3>
              <p>{statusMsg}</p>
              {bookedInfo && (
                <div className="lp-booking-summary">
                  <p><strong>Date:</strong> {bookedInfo.bookingDate}</p>
                  <p><strong>Time:</strong> {bookedInfo.startTime} – {bookedInfo.endTime} (slot locked)</p>
                  <p><strong>Status:</strong> {bookedInfo.status}</p>
                </div>
              )}
              <p className="lp-success-note">Our team will call you within 2 hours to confirm your slot and guide you through the virtual participation process.</p>
            </div>
          ) : (
            <form className="lp-form" onSubmit={handleSubmit}>
              <div className="lp-form-grid">
                <div className="lp-form-group">
                  <label><FiUser /> Full Name *</label>
                  <input name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="lp-form-group">
                  <label><FiMail /> Email Address *</label>
                  <input name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="lp-form-group">
                  <label><FiPhone /> Phone Number *</label>
                  <input name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
                </div>
                <div className="lp-form-group">
                  <label><FiMapPin /> Address / City</label>
                  <input name="address" placeholder="Your city or full address" value={form.address} onChange={handleChange} />
                </div>
                <div className="lp-form-group">
                  <label>Gotra (optional)</label>
                  <input name="gotra" placeholder="e.g. Kashyap" value={form.gotra} onChange={handleChange} />
                </div>
                <div className="lp-form-group">
                  <label><FiCalendar /> Puja Date *</label>
                  <input name="date" type="date" min={today} value={form.date} onChange={handleChange} required />
                  {availability && (
                    <div className={\`lp-avail-badge \${availability.available ? 'ok' : 'full'}\`}>
                      {availability.available ? \`\${availability.remainingSlots}/\${availability.totalSlots} slots available\` : 'No slots available for this date'}
                    </div>
                  )}
                </div>
                <div className="lp-form-group">
                  <label><FiClock /> Preferred Start Time *</label>
                  <input name="time" type="time" value={form.time} onChange={handleChange} required min="05:00" max="19:00" step="1800" />
                  {hint && (
                    <div className={\`lp-hint \${hint.type}\`}>
                      {hint.type === 'error' ? <FiAlertCircle /> : <FiCheck />} {hint.msg}
                    </div>
                  )}
                  <p className="lp-time-note">⚠ Each booking locks a 5-hour window. Max 5 pujas per day.</p>
                </div>
                <div className="lp-form-group lp-full-width">
                  <label><FiMessageSquare /> Special Message / Wishes</label>
                  <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Share your intention for this puja..." />
                </div>
              </div>

              <div className="lp-form-summary">
                <span>Selected: <strong>{PACKAGES.find(p => p.id === selectedPkg)?.name}</strong></span>
                <span>Amount: <strong>₹{PACKAGES.find(p => p.id === selectedPkg)?.price.toLocaleString('en-IN')}</strong></span>
              </div>

              {status === 'error' && (
                <div className="lp-error-msg"><FiAlertCircle /> {statusMsg}</div>
              )}

              <button type="submit" className="lp-submit-btn" disabled={status === 'loading'}>
                {status === 'loading' ? <><FiLoader className="lp-spin" /> Processing...</> : '🪔 Confirm Puja Booking'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
`
}
const guideLines = readGuideLines()

for (const t of targets) {
  const block = sliceSection(guideLines, t.heading)
  if (!block) throw new Error(`Could not find section for "${t.heading}" in guide text`)

  const pujaName = trimLine(block[0].split('•')[0])
  const hero = inferHeroPieces(pujaName)
  const why = extractWhy(block)
  const benLines = extractBenefits(block)
  const procLines = extractProcess(block)
  const longIntro = extractEnglishIntro(block)
  const mantra = pullFirstQuotedMantra(procLines) || pullFirstQuotedMantra(block)

  const cfg = {
    ...t,
    pujaName,
    heroTitleA: hero.a,
    heroTitleB: hero.b || 'Puja',
    mantra,
    subtitle: longIntro ? longIntro.slice(0, 220) + (longIntro.length > 220 ? '…' : '') : `Book ${pujaName} performed by Vedic pandits for authentic blessings.`,
    aboutP1: longIntro ? longIntro.slice(0, 520) + (longIntro.length > 520 ? '…' : '') : `Learn the meaning and significance of ${pujaName}.`,
    aboutP2: why[0] ? `Why devotees perform it: ${why[0]}` : 'Performed with devotion and correct vidhi, this puja aligns your intentions with divine grace.',
    reasons: why.length ? why.slice(0, 6) : ['Remove obstacles', 'Attract blessings', 'Improve stability', 'Enhance growth', 'Protect outcomes', 'Create peace'],
    benefits: makeBenefitObjects(benLines),
    process: makeProcessObjects(procLines),
  }

  const outPath = path.join(TARGET_DIR, t.file)
  fs.writeFileSync(outPath, pageSource(cfg), 'utf8')
  console.log(`updated ${t.file} from sacred_puja_guide`)
}

