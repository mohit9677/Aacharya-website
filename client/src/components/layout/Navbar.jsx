import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown, FiPhone, FiVideo, FiUser } from 'react-icons/fi'
import logo from '../../assets/logo.svg'
import './Navbar.css'

import { useAuth } from '../../context/AuthContext'
import ComingSoonModal from '../ui/ComingSoonModal'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [showComingSoon, setShowComingSoon] = useState(false)
    const { user, logout } = useAuth() || {}; // Handle potential null context if used outside provider (though unlikely here)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
        <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Top Bar: White - Brand & Actions */}
            <div className="header-top">
                <div className="header-top-content header-layout-grid" style={{ padding: '0 5px' }}>
                    <div className="brand grid-left">
                        <Link to="/" className="brand-name" style={{ textDecoration: 'none' }}>
                            Dr Kunwar Harshit Rajveer
                        </Link>
                    </div>

                    {/* Center Navigation Items */}
                    <nav className="top-nav-items grid-center" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem, 1vw, 1.5rem)' }}>
                        <div className="nav-dropdown-container">
                            <span className="nav-item">Services <FiChevronDown /></span>
                            <div className="nav-dropdown-menu">
                                <Link to="/services/kundli-matching" className="dropdown-item">Kundli Matching</Link>
                                <Link to="/services/janam-kundli" className="dropdown-item">Janam Kundli</Link>
                                <Link to="/services/vastu-consultation" className="dropdown-item">Vastu Consultation</Link>
                                <Link to="/services/palmistry" className="dropdown-item">Palmistry</Link>
                                <Link to="/services/face-reading" className="dropdown-item">Face Reading</Link>
                            </div>
                        </div>

                        <div className="nav-dropdown-container">
                            <span className="nav-item">Horoscope <FiChevronDown /></span>
                            <div className="nav-dropdown-menu">
                                <Link to="/horoscope/daily" className="dropdown-item">Daily Horoscope</Link>
                                <Link to="/horoscope/weekly" className="dropdown-item">Weekly Horoscope</Link>
                                <Link to="/horoscope/monthly" className="dropdown-item">Monthly Horoscope</Link>
                                <Link to="/horoscope/yearly" className="dropdown-item">Yearly Horoscope</Link>
                                <Link to="/horoscope/zodiac-signs" className="dropdown-item">Zodiac Signs</Link>
                            </div>
                        </div>

                        <Link to="/panchang" className="nav-item">Daily Panchang</Link>
                        <Link to="/numerology" className="nav-item">Numerology</Link>
                        <Link to="/reports" className="nav-item">Reports</Link>
                        <Link to="/blog" className="nav-item">Blog</Link>
                    </nav>

                    {/* Right Side Actions */}
                    <div className="header-actions grid-right">
                        <div className="header-buttons" style={{ display: 'flex', gap: 'clamp(0.4rem, 0.6vw, 0.8rem)' }}>
                            <button className="btn-pill" onClick={() => setShowComingSoon(true)}><FiPhone /> Talk to AstroHarshit Ji</button>
                            <button className="btn-pill" onClick={() => setShowComingSoon(true)}><FiVideo /> Get Live Consultation</button>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FiX /> : <FiMenu />}
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Maroon - Main Navigation */}
            <div className={`header-bottom ${isOpen ? 'active' : ''}`}>
                <nav className="main-nav header-layout-grid" style={{ padding: '0 5px', width: '100%' }}>
                    {/* Left Side */}
                    <div className="bottom-nav-left grid-left align-left-anchor">
                        <NavLink to="/" className={({ isActive }) => `main-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}><FiUser className="home-icon" /> Home</NavLink>
                    </div>

                    {/* Center Navigation */}
                    <div className="bottom-nav-center grid-center align-center-anchor">
                        <NavLink to="/learning" className="main-link" onClick={() => setIsOpen(false)}>Digital Learning</NavLink>
                        <NavLink to="/mandir" className="main-link" onClick={() => setIsOpen(false)}>Digital Mandir</NavLink>
                        <NavLink to="/mart" className="main-link" onClick={() => setIsOpen(false)}>Digital Mart</NavLink>
                        <NavLink to="/about" className="main-link" onClick={() => setIsOpen(false)}>About Us</NavLink>
                    </div>

                    {/* Right Side */}
                    <div className="bottom-nav-right grid-right align-right-anchor" style={{ display: 'flex', alignItems: 'center', gap: '1.5vw' }}>
                        <NavLink to="/book-puja" className="book-puja-btn btn-type1" onClick={() => setIsOpen(false)}>
                            <span className="btn-txt">Book Puja</span>
                        </NavLink>
                        <NavLink to="/contact" className="main-link" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
                        {user ? (
                            <div className="user-menu" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255, 255, 255, 0.9)' }}>
                                <span style={{ fontWeight: 'bold' }}>Hello, {user.name}</span>
                                <button onClick={logout} className="btn-pill outline" style={{ color: 'rgba(255, 255, 255, 0.9)', borderColor: 'rgba(255, 255, 255, 0.5)' }}>Logout</button>
                            </div>
                        ) : (
                            <Link to="/login" onClick={() => setIsOpen(false)}>
                                <button className="btn-pill outline" style={{ color: 'rgba(255, 255, 255, 0.9)', borderColor: 'rgba(255, 255, 255, 0.5)' }}><FiUser /> Login</button>
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        </header>

        <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
        </>
    )
}
