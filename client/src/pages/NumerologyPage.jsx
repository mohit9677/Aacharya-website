import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import WovenLightBg from '../components/ui/WovenLightBg';
import '../App.css';

/* ────────────────────────────────────────────────
   Data — each number gets a real Unsplash image
──────────────────────────────────────────────── */
const numerologyNumbers = [
    {
        num: '1',
        title: 'Life Path Number',
        icon: '☀️',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
        imageCaption: 'Your destined road',
        desc: 'The core of your personality. Derived from your date of birth, it reveals your innate traits, natural talents, and the road you are destined to walk. People with this as their primary number are natural leaders — driven, independent, and pioneering.',
    },
    {
        num: '2',
        title: 'Destiny Number',
        icon: '🌑',
        imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=800&q=80',
        imageCaption: 'Purpose written in the stars',
        desc: 'Derived from your full birth name, it uncovers the deeper purpose of your life and the opportunities you must embrace. It governs your ultimate potential, directing your life towards a specific spiritual and material mission.',
    },
    {
        num: '3',
        title: 'Soul Urge Number',
        icon: '💫',
        imageUrl: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=800&q=80',
        imageCaption: 'The voice of your heart',
        desc: 'The deepest desire of your heart. Calculated from the vowels in your full birth name, it reveals what truly drives you from within — your motivations, passions, inner cravings, and what makes your soul feel fulfilled.',
    },
    {
        num: '4',
        title: 'Personality Number',
        icon: '🔮',
        imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80',
        imageCaption: 'How the world sees you',
        desc: 'The first impression you leave on others. Calculated from the consonants of your name, it reveals how the world perceives you before knowing the real you — your outer personality, appearance, and social energy.',
    },
    {
        num: '5',
        title: 'Birthday Number',
        icon: '🎂',
        imageUrl: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80',
        imageCaption: 'Your cosmic gift at birth',
        desc: 'A special gift from the cosmos encoded in the day you were born. It represents a unique talent or natural ability that sets you apart from everyone around you — a distinct skill that comes naturally and effortlessly.',
    },
    {
        num: '6',
        title: 'Maturity Number',
        icon: '🌿',
        imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
        imageCaption: 'Wisdom of later years',
        desc: 'What you are growing into. Emerging in mid-life, this number reveals the wisdom, mastery and elevated consciousness you will access in the second half of life — a blueprint for your mature, true self.',
    },
];

const benefits = [
    { icon: '🪐', label: 'Career & Finance Clarity', text: 'Discover which years are powerfully aligned for financial growth and business decisions.' },
    { icon: '❤️', label: 'Love & Relationships', text: 'Find your most compatible partners and understand recurring relationship patterns.' },
    { icon: '🧘', label: 'Health & Well-being', text: 'Learn which numbers govern your health cycles so you can plan holistically.' },
    { icon: '⚡', label: 'Personal Year Prediction', text: 'Know what energy governs your current year – and how to harness it for maximum success.' },
];

/* ────────────────────────────────────────────────
   Inline styles for the two-panel carousel
──────────────────────────────────────────────── */
const S = {
    section: {
        background: 'var(--bg-cosmic)',
        padding: '5rem 0',
    },
    wrapper: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '3rem',
    },
    twoPanel: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start',
    },
    /* Left 75% panel */
    left: {
        flex: '0 0 73%',
        position: 'relative',
    },
    imgWrap: {
        width: '100%',
        aspectRatio: '16/9',
        borderRadius: '20px',
        overflow: 'hidden',
        background: '#1a0a09',
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
    },
    card: {
        position: 'absolute',
        bottom: '1.5rem',
        right: '-1rem',
        width: 'min(460px, 65%)',
        background: 'rgba(30,10,9,0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderRadius: '18px',
        padding: '1.75rem',
        boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
        border: '1px solid rgba(212,175,55,0.2)',
    },
    cardNum: {
        display: 'inline-block',
        background: 'var(--gold-gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontFamily: 'var(--font-heading)',
        fontSize: '0.8rem',
        fontWeight: 700,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: '0.35rem',
    },
    cardIcon: {
        fontSize: '2rem',
        marginBottom: '0.5rem',
        display: 'block',
    },
    cardTitle: {
        fontFamily: 'var(--font-heading)',
        fontSize: '1.35rem',
        color: '#fff',
        marginBottom: '0.6rem',
    },
    cardDesc: {
        color: 'rgba(255,255,255,0.75)',
        fontSize: '0.88rem',
        lineHeight: '1.7',
        margin: 0,
    },
    /* Right 25% panel */
    right: {
        flex: '0 0 24%',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)',
    },
    listItem: (isActive) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.9rem 1.1rem',
        cursor: 'pointer',
        background: isActive ? 'var(--bg-maroon)' : 'var(--bg-card)',
        borderLeft: isActive ? '4px solid var(--gold-primary)' : '4px solid transparent',
        transition: 'all 0.2s ease',
        borderBottom: '1px solid var(--border-subtle)',
    }),
    listIcon: (isActive) => ({
        fontSize: '1.15rem',
        flexShrink: 0,
        filter: isActive ? 'drop-shadow(0 0 4px rgba(212,175,55,0.6))' : 'none',
    }),
    listLabel: (isActive) => ({
        fontSize: '0.82rem',
        fontWeight: 600,
        fontFamily: 'var(--font-heading)',
        color: isActive ? '#fff' : 'var(--text-heading)',
        letterSpacing: '0.02em',
    }),
};

/* ────────────────────────────────────────────────
   Main Page Component
──────────────────────────────────────────────── */
const NumerologyPage = () => {
    const navigate = useNavigate();
    const [activeIdx, setActiveIdx] = useState(0);
    const active = numerologyNumbers[activeIdx];

    return (
        <div className="page-wrapper">

            {/* ── Hero Banner ── */}
            <div className="numerology-header">
                <WovenLightBg height="100%" colorHue={0.1} />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '3rem 1rem 2.5rem' }}>
                    <h1 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>Numerology</h1>
                    <div style={{ display: 'inline-flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {['Ancient Vedic Science', 'Expert Astrologer Reading', 'Personalised Report'].map(tag => (
                            <span key={tag} style={{ background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.5)', borderRadius: '999px', padding: '0.35rem 1rem', color: '#F2C94C', fontSize: '0.9rem', fontWeight: 600 }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── What Is Numerology — Two Panel ── */}
            <section style={S.section}>
                <div style={S.wrapper}>

                    {/* Title */}
                    <div style={S.heading}>
                        <h2 className="section-title">What Is Numerology?</h2>
                        <p style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                            Numerology is a 5,000-year-old Vedic science that decodes the hidden language of the universe. Click any number type to explore its meaning.
                        </p>
                    </div>

                    {/* Two-panel row */}
                    <div style={S.twoPanel}>

                        {/* ── LEFT: Image + overlapping card ── */}
                        <div style={S.left}>
                            {/* Image */}
                            <div style={S.imgWrap}>
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={active.imageUrl}
                                        src={active.imageUrl}
                                        alt={active.title}
                                        style={S.img}
                                        initial={{ opacity: 0, scale: 1.04 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.97 }}
                                        transition={{ duration: 0.45, ease: 'easeInOut' }}
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Overlapping info card */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active.title}
                                    style={S.card}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.38, ease: 'easeOut' }}
                                >
                                    <span style={S.cardNum}>Number {active.num}</span>
                                    <span style={S.cardIcon}>{active.icon}</span>
                                    <h3 style={S.cardTitle}>{active.title}</h3>
                                    <p style={S.cardDesc}>{active.desc}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* ── RIGHT: Clickable list ── */}
                        <div style={S.right}>
                            {numerologyNumbers.map((item, idx) => (
                                <div
                                    key={item.num}
                                    style={S.listItem(idx === activeIdx)}
                                    onClick={() => setActiveIdx(idx)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={e => e.key === 'Enter' && setActiveIdx(idx)}
                                    aria-pressed={idx === activeIdx}
                                >
                                    <span style={S.listIcon(idx === activeIdx)}>{item.icon}</span>
                                    <span style={S.listLabel(idx === activeIdx)}>{item.title}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Benefits ── */}
            <section>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', display: 'block' }}>
                        What a Professional Reading Reveals
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                        {benefits.map((b) => (
                            <div key={b.label} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{b.icon}</div>
                                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--text-heading)' }}>{b.label}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.65', margin: 0 }}>{b.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why Specialist ── */}
            <section style={{ background: 'var(--bg-cosmic)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="grid-cols-2">
                        <div>
                            <h2 style={{ color: 'var(--text-heading)', marginBottom: '1rem' }}>Why Consult a Specialist?</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
                                Free online calculators give generic results. A live consultation with our Vedic Numerology specialist provides a deeply personalised, interactive reading that accounts for your complete numerological chart — not just one number.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {[
                                    'Complete 6-number Chart Analysis',
                                    'Past, Present & Future Year Cycles',
                                    'Lucky Dates, Colours & Gemstones',
                                    'Name Correction Advice',
                                    'Live Q&A session with the Astrologer',
                                ].map((pt) => (
                                    <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontWeight: 500 }}>
                                        <span style={{ color: 'var(--gold-dark)', fontSize: '1.1rem' }}>✦</span>
                                        {pt}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass-panel" style={{ padding: '2.5rem', borderLeft: '4px solid var(--gold-primary)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>❝</div>
                            <p style={{ fontStyle: 'italic', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '1.25rem', fontSize: '1rem' }}>
                                "I was skeptical, but the numerology session with the specialist changed my perspective completely. The life path reading was eerily accurate — I finally understood why I keep attracting certain patterns in life."
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--maroon-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>P</div>
                                <div>
                                    <strong style={{ display: 'block', color: 'var(--text-heading)' }}>Priya Sharma</strong>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Delhi, India ⭐⭐⭐⭐⭐</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section style={{ background: 'var(--maroon-gradient)', padding: '5rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔮</div>
                    <h2 style={{ color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>
                        Ready to Discover Your Numbers?
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto 2rem', lineHeight: '1.75' }}>
                        Log in and book a live, personalised Numerology session with our expert Vedic Astrologer. Get your complete chart decoded — instantly.
                    </p>

                    <div style={{ display: 'inline-block', background: 'rgba(212,175,55,0.15)', border: '1px solid var(--gold-primary)', borderRadius: 'var(--radius-md)', padding: '1.25rem 2.5rem', marginBottom: '2rem' }}>
                        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Consultation Fee</div>
                        <div style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 700, lineHeight: 1 }}>₹ 299</div>
                        <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', marginTop: '0.25rem' }}>One-on-One · Live Session · Specialist Astrologer</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <button
                            className="btn btn-primary"
                            style={{ fontSize: '1.1rem', padding: '0.9em 2.75em', minWidth: '280px', borderRadius: 'var(--radius-sm)' }}
                            onClick={() => navigate('/login')}
                        >
                            🔐 Login &amp; Consult a Specialist
                        </button>
                        <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem' }}>
                            New here?{' '}
                            <span style={{ color: 'var(--gold-light)', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => navigate('/signup')}>
                                Create a free account
                            </span>{' '}in seconds.
                        </span>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default NumerologyPage;
