import { useState, useEffect } from 'react'
import { GiSunrise, GiFlame, GiHealing, GiCoins, GiShield, GiScrollUnfurled } from 'react-icons/gi'
import { FiUser, FiPhone, FiMail, FiMapPin, FiCalendar, FiClock, FiMessageSquare, FiCheck, FiAlertCircle, FiLoader } from 'react-icons/fi'
import heroImage from '../../assets/all_puja_bg.webp';
import './GenericPujaPage.css'

const PUJA_ID = 'kumbh-puja'
const PUJA_NAME = 'Kumbh (Aquarius) Puja'
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const PACKAGES = [
    {
        id: 'basic',
        name: 'Sadharan Puja',
        price: 1100,
        duration: '45 min',
        features: ['Surya Arghya ritual', 'Aditya Hridayam recitation', 'Personal Sankalp', 'Prasad dispatch'],
    },
    {
        id: 'standard',
        name: 'Vishesh Puja',
        price: 2100,
        duration: '90 min',
        features: ['All Basic features', 'Surya Namaskar Mantra (108x)', 'Havan with Surya Ahuti', 'Rudraksha energisation', 'Video recording'],
        popular: true,
    },
    {
        id: 'premium',
        name: 'Maha Surya Puja',
        price: 5100,
        duration: '3 hours',
        features: ['All Standard features', 'Navgraha Shanti', 'Surya Yantra energisation', 'Individual online participation', 'Kundli-specific remedies', 'Post-puja consultation'],
    },
]

const BENEFITS = [
    { icon: <GiFlame />, title: 'Health & Vitality', desc: 'Surya Puja strengthens the immune system, eyesight, and overall physical vitality. It protects against chronic illness.' },
    { icon: <GiCoins />, title: 'Career & Success', desc: 'Worshipping the Sun blesses devotees with leadership qualities, government favour, and professional recognition.' },
    { icon: <GiShield />, title: 'Removes Obstacles', desc: 'Neutralises malefic Sun placements in the horoscope, removes delays in work, legal matters, and reputation issues.' },
    { icon: <GiHealing />, title: 'Mental Clarity', desc: 'Brings confidence, willpower, self-respect, and clarity of thought. Removes depression and lack of direction.' },
    { icon: <GiScrollUnfurled />, title: 'Spiritual Growth', desc: 'The Sun represents the Atma (soul). Surya Puja accelerates self-realisation and connects the devotee to divine light.' },
    { icon: <GiSunrise />, title: 'Family Harmony', desc: 'Improves father–child relationships and brings blessings of elders, ancestors, and authority figures in life.' },
]

export default function KumbhPujaPage() {
    const [selectedPkg, setSelectedPkg] = useState('standard')
    const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', gotra: '', date: '', time: '', message: '' })
    const [availability, setAvailability] = useState(null)
    const [status, setStatus] = useState('idle') // idle | loading | success | error
    const [statusMsg, setStatusMsg] = useState('')
    const [bookedInfo, setBookedInfo] = useState(null)

    // Fetch availability whenever date changes
    useEffect(() => {
        if (!form.date) { setAvailability(null); return }
        fetch(`${API_BASE}/api/puja-bookings/availability?pujaId=${PUJA_ID}&date=${form.date}`)
            .then(r => r.json())
            .then(data => setAvailability(data))
            .catch(() => setAvailability(null))
    }, [form.date])

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
        if (form.time && isTimeConflict(form.time)) return { type: 'error', msg: `This time is within a locked slot. Please choose a time outside locked windows.` }
        return { type: 'ok', msg: `${availability.remainingSlots} slot(s) remaining today.` }
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
            const res = await fetch(`${API_BASE}/api/puja-bookings`, {
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
        <div className="sp-page">

            {/* ── Hero ── */}
            <section
                className="sp-hero"
                style={{ '--sp-hero-image': `url(${heroImage})` }}
                aria-label="Surya Puja — pandit offering arghya at sunrise by the river"
            >
                <div className="sp-hero-overlay">
                    <div className="sp-hero-badge"><GiSunrise /> Planet Puja</div>
                    <h1>Kumbh (Aquarius) Puja</h1>
                    <p>Attain innovation, large-scale financial gains, networking, and removing deep blockages and invite divine blessings into your life. Shani (Saturn) governs Aquarius; balancing its energy unlocks profound cosmic benefits.</p>
                    <a href="#booking" className="sp-hero-cta">Book Your Puja</a>
                </div>
            </section>

            {/* ── What is Surya Puja ── */}
            <section className="sp-section sp-about">
                <div className="sp-container">
                    <div className="sp-label">Ancient Vedic Ritual</div>
                    <h2>What is Kumbh (Aquarius) Puja?</h2>
                    <p>Kumbh (Aquarius) Puja is a powerful Vedic ritual dedicated to Lord Shiva and Shani Dev and Shani (Saturn). As the sign of Aquarius, it perfectly channels the energy of innovation, large-scale financial gains, networking, and removing deep blockages.</p>
                    <p>When Shani (Saturn) is weak or afflicted in your horoscope, it can cause significant obstacles. This tailored ritual pacifies these malefic placements.</p>
                    <p>The puja is traditionally performed to invoke purely auspicious energies, featuring specific Shani (Saturn) Beej Mantras and sacred offerings to clear karmic blockages.</p>
                </div>
            </section>

            {/* ── Why Perform ── */}
            <section className="sp-section sp-why">
                <div className="sp-container">
                    <div className="sp-label">Purpose & Significance</div>
                    <h2>Why Do People Perform Kumbh (Aquarius) Puja?</h2>
                    <div className="sp-why-grid">
                        <div className="sp-why-card">
                            <h4>💫 Astrological Alignment</h4>
                            <p>Corrects doshas and negative transits directly impacting the Aquarius moon sign or ascendant.</p>
                        </div>
                        <div className="sp-why-card">
                            <h4>🎯 Career Breakthroughs</h4>
                            <p>Removes unseen obstacles severely blocking your professional and financial innovation, large-scale financial gains, networking, and removing deep blockages.</p>
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
            </section>

            {/* ── Benefits ── */}
            <section className="sp-section sp-benefits">
                <div className="sp-container">
                    <div className="sp-label">Divine Blessings</div>
                    <h2>Benefits of Kumbh (Aquarius) Puja</h2>
                    <div className="sp-benefits-grid">
                        {BENEFITS.map((b, i) => (
                            <div key={i} className="sp-benefit-card">
                                <div className="sp-benefit-icon">{b.icon}</div>
                                <h4>{b.title}</h4>
                                <p>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Process ── */}
            <section className="sp-section sp-process">
                <div className="sp-container">
                    <div className="sp-label">How It Works</div>
                    <h2>Puja Process</h2>
                    <div className="sp-stairs">
                        {[
                            { num: 1, icon: '🧘', title: 'Sankalp', sub: 'Setting your personalized intention with name & gotra' },
                            { num: 2, icon: '🙏', title: 'Avahana', sub: 'Invoking Lord Shiva and Shani Dev with ancient Vedic mantras' },
                            { num: 3, icon: '🌸', title: 'Shodashopachar', sub: 'Offering blue flowers and black sesame seeds and sacred items' },
                            { num: 4, icon: '📖', title: 'Mantra Japa', sub: 'Chanting Om Pram Prim Praum Sah Shanaye Namah' },
                            { num: 5, icon: '🔥', title: 'Sacred Havan', sub: 'Fire ritual with mustard oil and black sesame' },
                            { num: 6, icon: '💧', title: 'Shanti Path', sub: 'Vedic prayers to stabilize the disciplined and structuring energy' },
                            { num: 7, icon: '🎁', title: 'Aarti & Prasad', sub: 'Sending you energized iron/sapphire and divine blessings' },
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
            </section>

            {/* ── Pricing ── */}
            <section className="sp-section sp-pricing" id="booking">
                <div className="sp-container">
                    <div className="sp-label">Choose Your Package</div>
                    <h2>Puja Packages & Pricing</h2>
                    <div className="sp-packages">
                        {PACKAGES.map(pkg => (
                            <div
                                key={pkg.id}
                                className={`sp-package-card ${selectedPkg === pkg.id ? 'selected' : ''} ${pkg.popular ? 'popular' : ''}`}
                                onClick={() => setSelectedPkg(pkg.id)}
                            >
                                {pkg.popular && <div className="sp-popular-badge">Most Popular</div>}
                                <h3>{pkg.name}</h3>
                                <div className="sp-price">
                                    <span className="sp-price-currency">₹</span>
                                    <span className="sp-price-amount">{pkg.price.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="sp-duration">⏱ {pkg.duration}</div>
                                <ul className="sp-features">
                                    {pkg.features.map((f, i) => <li key={i}><FiCheck /> {f}</li>)}
                                </ul>
                                <div className={`sp-select-btn ${selectedPkg === pkg.id ? 'active' : ''}`}>
                                    {selectedPkg === pkg.id ? '✓ Selected' : 'Select Package'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Booking Form ── */}
            <section className="sp-section sp-booking-section">
                <div className="sp-container">
                    <div className="sp-label">Book Your Slot</div>
                    <h2>Fill Booking Details</h2>

                    {status === 'success' ? (
                        <div className="sp-success-card">
                            <div className="sp-success-icon"><FiCheck /></div>
                            <h3>Puja Booked Successfully! 🙏</h3>
                            <p>{statusMsg}</p>
                            {bookedInfo && (
                                <div className="sp-booking-summary">
                                    <p><strong>Date:</strong> {bookedInfo.bookingDate}</p>
                                    <p><strong>Time:</strong> {bookedInfo.startTime} – {bookedInfo.endTime} (slot locked)</p>
                                    <p><strong>Status:</strong> {bookedInfo.status}</p>
                                </div>
                            )}
                            <p className="sp-success-note">Our team will call you within 2 hours to confirm your slot and guide you through the virtual participation process.</p>
                        </div>
                    ) : (
                        <form className="sp-form" onSubmit={handleSubmit}>
                            <div className="sp-form-grid">
                                <div className="sp-form-group">
                                    <label><FiUser /> Full Name *</label>
                                    <input name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                                </div>
                                <div className="sp-form-group">
                                    <label><FiMail /> Email Address *</label>
                                    <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                                </div>
                                <div className="sp-form-group">
                                    <label><FiPhone /> Phone Number *</label>
                                    <input name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
                                </div>
                                <div className="sp-form-group">
                                    <label><FiMapPin /> Address / City</label>
                                    <input name="address" placeholder="Your city or full address" value={form.address} onChange={handleChange} />
                                </div>
                                <div className="sp-form-group">
                                    <label>Gotra (Family Lineage)</label>
                                    <input name="gotra" placeholder="e.g. Kashyap, Bharadwaj (optional)" value={form.gotra} onChange={handleChange} />
                                </div>
                                <div className="sp-form-group">
                                    <label><FiCalendar /> Puja Date *</label>
                                    <input name="date" type="date" min={today} value={form.date} onChange={handleChange} required />
                                    {availability && (
                                        <div className={`sp-avail-badge ${availability.available ? 'ok' : 'full'}`}>
                                            {availability.available
                                                ? `${availability.remainingSlots}/${availability.totalSlots} slots available`
                                                : `No slots available for this date`}
                                        </div>
                                    )}
                                </div>
                                <div className="sp-form-group">
                                    <label><FiClock /> Preferred Start Time *</label>
                                    <input name="time" type="time" value={form.time} onChange={handleChange} required
                                        min="05:00" max="19:00" step="1800" />
                                    {hint && (
                                        <div className={`sp-hint ${hint.type}`}>
                                            {hint.type === 'error' ? <FiAlertCircle /> : <FiCheck />} {hint.msg}
                                        </div>
                                    )}
                                    <p className="sp-time-note">⚠ Each booking locks a 5-hour window. Max 5 pujas per day.</p>
                                </div>
                                <div className="sp-form-group sp-full-width">
                                    <label><FiMessageSquare /> Special Message / Wishes</label>
                                    <textarea name="message" rows={3} placeholder="Any specific wish, health issue, or prayer intention..." value={form.message} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="sp-form-summary">
                                <span>Selected: <strong>{PACKAGES.find(p => p.id === selectedPkg)?.name}</strong></span>
                                <span>Amount: <strong>₹{PACKAGES.find(p => p.id === selectedPkg)?.price.toLocaleString('en-IN')}</strong></span>
                            </div>

                            {status === 'error' && (
                                <div className="sp-error-msg"><FiAlertCircle /> {statusMsg}</div>
                            )}

                            <button type="submit" className="sp-submit-btn" disabled={status === 'loading'}>
                                {status === 'loading' ? <><FiLoader className="sp-spin" /> Processing...</> : '🙏 Confirm Puja Booking'}
                            </button>
                        </form>
                    )}
                </div>
            </section>

        </div>
    )
}
