import React, { useState, useRef, useEffect } from 'react';
import { FiSearch, FiChevronDown, FiX } from 'react-icons/fi';
import '../App.css';
import ComingSoonModal from '../components/ui/ComingSoonModal';

const categories = [
    { id: 'all', icon: '✨', name: 'All Categories' },
    { id: 'planet', icon: '🪐', name: 'Planet (Graha) Pujas' },
    { id: 'zodiac', icon: '🔯', name: 'Zodiac (Rashi) Pujas' },
    { id: 'wealth', icon: '💰', name: 'Wealth & Career Pujas' },
    { id: 'relationship', icon: '❤️', name: 'Relationship & Marriage Pujas' },
    { id: 'health', icon: '🧘', name: 'Health & Protection Pujas' },
    { id: 'dosha', icon: '⚡', name: 'Dosha Nivaran' },
    { id: 'special', icon: '🌿', name: 'Special / Festival Pujas' }
];

const pujas = [
    {
        id: 1,
        title: "Satyanarayan Puja",
        category: "special",
        description: "Bring peace, prosperity, and happiness to your home and family.",
        imageIcon: "🌺",
        duration: "2-3 Hours"
    },
    {
        id: 2,
        title: "Rudrabhishek Puja",
        category: "special",
        description: "Invoke the blessings of Lord Shiva for health, wealth, and success.",
        imageIcon: "🔱",
        duration: "3-4 Hours"
    },
    {
        id: 3,
        title: "Navagraha Shanti Puja",
        category: "planet",
        description: "Pacify the nine planets and reduce negative astrological influences.",
        imageIcon: "🪐",
        duration: "4-5 Hours"
    },
    {
        id: 4,
        title: "Maha Mrityunjaya Jaap",
        category: "health",
        description: "For long life, healing, and overcoming severe illnesses or fears.",
        imageIcon: "📿",
        duration: "5-7 Days"
    },
    {
        id: 5,
        title: "Kaal Sarp Dosh Nivaran",
        category: "dosha",
        description: "Remedy for Kaal Sarp Dosh in your Kundli for a hurdle-free life.",
        imageIcon: "🐍",
        duration: "1 Day"
    },
    {
        id: 6,
        title: "Mangal Dosh Nivaran",
        category: "dosha",
        description: "Alleviates issues in marriage and brings intense relationship harmony.",
        imageIcon: "🔥",
        duration: "1 Day"
    },
    {
        id: 7,
        title: "Lakshmi Kubera Puja",
        category: "wealth",
        description: "Attract spiritual and material wealth, clear debts and boost career growth.",
        imageIcon: "💰",
        duration: "3-4 Hours"
    },
    {
        id: 8,
        title: "Katyayani Puja",
        category: "relationship",
        description: "Remove obstacles in marriage and find a suitable life partner.",
        imageIcon: "❤️",
        duration: "1 Day"
    },
    {
        id: 9,
        title: "Mesha Rashi Shanti Puja",
        category: "zodiac",
        description: "Aries specific planetary alignment correction rituals.",
        imageIcon: "♈",
        duration: "4-5 Hours"
    }
];

const BookPujaPage = () => {
    const [showComingSoon, setShowComingSoon] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const activeCatObj = categories.find(c => c.id === selectedCategory) || categories[0];

    const filteredPujas = pujas.filter(puja => {
        const matchesCategory = selectedCategory === "all" || puja.category === selectedCategory;
        const matchesSearch = puja.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              puja.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="page-wrapper">
            <div className="page-header">
                <h1>Book Puja</h1>
                <p>Perform authentic Vedic rituals with experienced Pandits from the comfort of your home.</p>
            </div>

            <section className="container" style={{ margin: '3rem auto', maxWidth: '1200px' }}>
                
                {/* Custom Mega Dropdown Filter Component */}
                <div style={{ marginBottom: '3rem', position: 'relative', zIndex: 50 }} ref={dropdownRef}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <button 
                            className="btn" 
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '0.8rem', 
                                padding: '1rem 1.5rem', 
                                borderRadius: '50px',
                                background: '#FFFFFF',
                                border: '2px solid rgba(212, 175, 55, 0.4)',
                                color: '#5D1916',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.06)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span style={{ fontSize: '1.4rem' }}>{activeCatObj.icon}</span>
                            <span>{activeCatObj.name}</span>
                            <FiChevronDown style={{ 
                                transition: 'transform 0.3s', 
                                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)' 
                            }} />
                        </button>
                    </div>

                    {isDropdownOpen && (
                        <div style={{
                            position: 'absolute',
                            top: 'calc(100% + 15px)',
                            left: 0,
                            width: '100%',
                            maxWidth: '750px',
                            background: '#FFFFFF',
                            borderRadius: '16px',
                            boxShadow: '0 15px 40px rgba(93, 25, 22, 0.15)',
                            border: '1px solid rgba(212, 175, 55, 0.2)',
                            overflow: 'hidden',
                            animation: 'fadeIn 0.2s ease-in-out'
                        }}>
                            {/* Search Bar Inside Dropdown */}
                            <div style={{ 
                                padding: '1.5rem', 
                                borderBottom: '1px solid rgba(0,0,0,0.05)',
                                background: '#fafafa'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    background: '#FFFFFF',
                                    border: '1px solid rgba(0,0,0,0.1)',
                                    borderRadius: '50px',
                                    padding: '0.8rem 1.2rem',
                                    gap: '0.8rem',
                                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                                }}>
                                    <FiSearch style={{ color: '#888', fontSize: '1.2rem' }} />
                                    <input 
                                        type="text" 
                                        placeholder="Search for a specific puja by name or purpose..." 
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            background: 'transparent',
                                            width: '100%',
                                            fontSize: '1rem',
                                            color: '#333'
                                        }}
                                    />
                                    {searchQuery && (
                                        <button 
                                            onClick={() => setSearchQuery('')}
                                            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#aaa', display: 'flex' }}
                                        >
                                            <FiX style={{ fontSize: '1.2rem' }} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Categories Grid */}
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
                                gap: '1rem', 
                                padding: '1.5rem',
                                maxHeight: '400px',
                                overflowY: 'auto'
                            }}>
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => {
                                            setSelectedCategory(cat.id);
                                            setIsDropdownOpen(false);
                                        }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.8rem',
                                            padding: '1rem',
                                            borderRadius: '12px',
                                            border: selectedCategory === cat.id ? '2px solid rgba(212, 175, 55, 0.8)' : '2px solid transparent',
                                            background: selectedCategory === cat.id ? 'rgba(212, 175, 55, 0.05)' : '#f9f9f9',
                                            color: '#5D1916',
                                            fontWeight: selectedCategory === cat.id ? 'bold' : '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                            textAlign: 'left'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (selectedCategory !== cat.id) {
                                                e.currentTarget.style.background = '#f0f0f0';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (selectedCategory !== cat.id) {
                                                e.currentTarget.style.background = '#f9f9f9';
                                            }
                                        }}
                                    >
                                        <span style={{ fontSize: '1.5rem' }}>{cat.icon}</span>
                                        <span>{cat.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {filteredPujas.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>🔍</span>
                        <h3 style={{ color: '#5D1916', fontSize: '1.5rem' }}>No pujas found!</h3>
                        <p style={{ color: '#666', marginTop: '0.5rem' }}>Try adjusting your search or selecting a different category.</p>
                        <button 
                            className="btn btn-primary" 
                            style={{ marginTop: '1.5rem' }}
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
                        gap: '2rem' 
                    }}>
                        {filteredPujas.map((puja) => (
                            <div key={puja.id} className="glass-panel" style={{ padding: '2.5rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.2rem', transition: 'all 0.3s ease', cursor: 'pointer', border: '1px solid rgba(212, 175, 55, 0.15)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(93, 25, 22, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'; }}>
                                <div style={{ fontSize: '4rem', marginBottom: '0.5rem', lineHeight: 1 }}>{puja.imageIcon}</div>
                                
                                <div>
                                    <span style={{ 
                                        display: 'inline-block', 
                                        padding: '0.25rem 0.8rem', 
                                        background: 'rgba(212, 175, 55, 0.1)', 
                                        color: '#D4AF37', 
                                        borderRadius: '20px', 
                                        fontSize: '0.75rem', 
                                        fontWeight: 'bold', 
                                        textTransform: 'uppercase', 
                                        letterSpacing: '1px',
                                        marginBottom: '0.8rem' 
                                    }}>
                                        {categories.find(c => c.id === puja.category)?.name || "Puja"}
                                    </span>
                                    <h3 style={{ color: 'var(--maroon-primary)', fontSize: '1.4rem' }}>{puja.title}</h3>
                                </div>

                                <p style={{ flexGrow: 1, fontSize: '1rem', color: '#555', lineHeight: '1.5' }}>
                                    {puja.description}
                                </p>
                                <div style={{ fontSize: '0.95rem', color: '#888', fontWeight: 'bold', margin: '0.5rem 0' }}>
                                    ⏳ Duration: {puja.duration}
                                </div>
                                <button className="btn book-puja-btn btn-type1" onClick={() => setShowComingSoon(true)} style={{ marginTop: 'auto', width: '100%', height: '48px' }}>
                                    <span className="btn-txt">Book Pandit</span>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
        </div>
    );
};

export default BookPujaPage;
