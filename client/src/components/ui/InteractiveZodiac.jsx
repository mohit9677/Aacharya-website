import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './InteractiveZodiac.css';

import ariesImg from '../../assets/zodiacs/sepia_aries.png';
import taurusImg from '../../assets/zodiacs/sepia_taurus.png';
import geminiImg from '../../assets/zodiacs/sepia_gemini.png';
import cancerImg from '../../assets/zodiacs/sepia_cancer.png';
import leoImg from '../../assets/zodiacs/sepia_leo.png';
import virgoImg from '../../assets/zodiacs/sepia_virgo.png';
import libraImg from '../../assets/zodiacs/sepia_libra.png';
import scorpioImg from '../../assets/zodiacs/sepia_scorpio.png';
import sagittariusImg from '../../assets/zodiacs/sepia_sagittarius.png';
import capricornImg from '../../assets/zodiacs/sepia_capricorn.png';
import aquariusImg from '../../assets/zodiacs/sepia_aquarius.png';
import piscesImg from '../../assets/zodiacs/sepia_pisces.png';

export const SagittariusShootOverlay = () => null;

const zodiacImages = {
    "Aries": ariesImg, "Taurus": taurusImg, "Gemini": geminiImg,
    "Cancer": cancerImg, "Leo": leoImg, "Virgo": virgoImg,
    "Libra": libraImg, "Scorpio": scorpioImg, "Sagittarius": sagittariusImg,
    "Capricorn": capricornImg, "Aquarius": aquariusImg, "Pisces": piscesImg,
};

const timelineData = [
    { id: 1,  title: "Aries",       date: "Mar 21 – Apr 19", element: "Fire",  ruler: "Mars",    traits: "Courageous, determined, confident",         desc: "The pioneer and trailblazer of the wheel, Aries energy helps us initiate and fight for our beliefs.", relatedIds: [5, 9],  energy: 95 },
    { id: 2,  title: "Taurus",      date: "Apr 20 – May 20", element: "Earth", ruler: "Venus",   traits: "Reliable, patient, practical, devoted",     desc: "The persistent provider who helps us seek security and enjoy earthly pleasures.",                      relatedIds: [6, 10], energy: 88 },
    { id: 3,  title: "Gemini",      date: "May 21 – Jun 20", element: "Air",   ruler: "Mercury", traits: "Gentle, affectionate, curious, adaptable",   desc: "The versatile and expressive twins who help us communicate and collaborate.",                          relatedIds: [7, 11], energy: 82 },
    { id: 4,  title: "Cancer",      date: "Jun 21 – Jul 22", element: "Water", ruler: "Moon",    traits: "Tenacious, imaginative, loyal, emotional",   desc: "The natural nurturer who helps us connect with feelings and plant deep roots.",                        relatedIds: [8, 12], energy: 78 },
    { id: 5,  title: "Leo",         date: "Jul 23 – Aug 22", element: "Fire",  ruler: "Sun",     traits: "Creative, passionate, generous, warm",       desc: "The regal ruler who helps us shine and express ourselves boldly.",                                     relatedIds: [1, 9],  energy: 92 },
    { id: 6,  title: "Virgo",       date: "Aug 23 – Sep 22", element: "Earth", ruler: "Mercury", traits: "Loyal, analytical, kind, hardworking",       desc: "The masterful helper who teaches us to serve and prioritize wellbeing.",                               relatedIds: [2, 10], energy: 85 },
    { id: 7,  title: "Libra",       date: "Sep 23 – Oct 22", element: "Air",   ruler: "Venus",   traits: "Cooperative, diplomatic, gracious",          desc: "The balanced beautifier who inspires us to seek peace, harmony and cooperation.",                      relatedIds: [3, 11], energy: 80 },
    { id: 8,  title: "Scorpio",     date: "Oct 23 – Nov 21", element: "Water", ruler: "Pluto",   traits: "Resourceful, brave, passionate, stubborn",   desc: "The most intense sign that helps us dive deep and form lasting bonds.",                                relatedIds: [4, 12], energy: 97 },
    { id: 9,  title: "Sagittarius", date: "Nov 22 – Dec 21", element: "Fire",  ruler: "Jupiter", traits: "Generous, idealistic, great humor",          desc: "The worldly adventurer who inspires us to dream big and take fearless risks.",                         relatedIds: [1, 5],  energy: 90 },
    { id: 10, title: "Capricorn",   date: "Dec 22 – Jan 19", element: "Earth", ruler: "Saturn",  traits: "Responsible, disciplined, self-control",     desc: "The measured master planner who teaches us the power of structure.",                                   relatedIds: [2, 6],  energy: 87 },
    { id: 11, title: "Aquarius",    date: "Jan 20 – Feb 18", element: "Air",   ruler: "Uranus",  traits: "Progressive, original, independent",         desc: "The mad scientist and humanitarian who helps us innovate for social justice.",                         relatedIds: [3, 7],  energy: 75 },
    { id: 12, title: "Pisces",      date: "Feb 19 – Mar 20", element: "Water", ruler: "Neptune", traits: "Compassionate, artistic, intuitive, gentle", desc: "The dreamer and healer who awakens compassion and divine connection.",                                 relatedIds: [4, 8],  energy: 83 },
];

const elementColors = {
    Fire:  { primary: '#D4AF37', glow: 'rgba(212,175,55,0.6)', bg: 'rgba(212,175,55,0.12)' },
    Earth: { primary: '#8B6914', glow: 'rgba(139,105,20,0.5)', bg: 'rgba(139,105,20,0.12)' },
    Air:   { primary: '#C9B06B', glow: 'rgba(201,176,107,0.5)', bg: 'rgba(201,176,107,0.12)' },
    Water: { primary: '#A0926B', glow: 'rgba(160,146,107,0.5)', bg: 'rgba(160,146,107,0.12)' },
};

const InteractiveZodiac = () => {
    const [rotationAngle, setRotationAngle] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true);
    const [activeNodeId, setActiveNodeId] = useState(null);
    const [pulseEffect, setPulseEffect] = useState({});
    const [containerSize, setContainerSize] = useState({ w: 500, h: 500 });
    const containerRef = useRef(null);

    // Measure the container
    useEffect(() => {
        const measure = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setContainerSize({ w: rect.width, h: rect.height });
            }
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    // Auto-rotate the orbit
    useEffect(() => {
        let timer;
        if (autoRotate) {
            timer = setInterval(() => {
                setRotationAngle(prev => (prev + 0.25) % 360);
            }, 50);
        }
        return () => clearInterval(timer);
    }, [autoRotate]);

    const handleContainerClick = (e) => {
        if (e.target === containerRef.current || e.target.classList.contains('rot-orbit-ring') || e.target.classList.contains('rot-orbit-area')) {
            setActiveNodeId(null);
            setPulseEffect({});
            setAutoRotate(true);
        }
    };

    const toggleItem = (id) => {
        if (activeNodeId === id) {
            setActiveNodeId(null);
            setPulseEffect({});
            setAutoRotate(true);
        } else {
            setActiveNodeId(id);
            setAutoRotate(false);

            const item = timelineData.find(i => i.id === id);
            const newPulse = {};
            if (item) item.relatedIds.forEach(rId => { newPulse[rId] = true; });
            setPulseEffect(newPulse);

            // Center view on clicked node — bring it to the top (270 degrees = 12 o'clock position)
            const nodeIndex = timelineData.findIndex(i => i.id === id);
            const targetAngle = (nodeIndex / timelineData.length) * 360;
            setRotationAngle(270 - targetAngle);
        }
    };

    const calculateNodePosition = useCallback((index, total) => {
        const angle = ((index / total) * 360 + rotationAngle) % 360;
        const radian = (angle * Math.PI) / 180;

        // Force a PERFECT CIRCULAR orbital path using only the smallest dimension
        // This guarantees the wheel never looks like an oval, regardless of panel stretch!
        const minDim = Math.max(300, Math.min(containerSize.w, containerSize.h) - 40); // 40px safe padding
        const orbitRadius = minDim * 0.42; // Radius is 42% of the safe size

        const x = orbitRadius * Math.cos(radian);
        const y = orbitRadius * Math.sin(radian);

        // "3D" effect: nodes closer to bottom are farther away in perspective
        const depthFactor = (1 + Math.sin(radian)) / 2; // 0 at top, 1 at bottom
        const scale = 0.65 + 0.35 * depthFactor;
        const opacity = Math.max(0.4, 0.4 + 0.6 * depthFactor);
        const zIndex = Math.round(50 + 100 * depthFactor);

        return { x, y, angle, zIndex, opacity, scale };
    }, [rotationAngle, containerSize]);

    // Calculate the perfect circular size for the background rings based on same logic
    const safeMinDim = Math.max(300, Math.min(containerSize.w, containerSize.h) - 40);
    const outerRingSize = safeMinDim * 0.84; // Matches 42% radius * 2
    const innerRingSize = safeMinDim * 0.45; // Inner decorative ring

    return (
        <div
            className="rot-container"
            ref={containerRef}
            onClick={handleContainerClick}
        >
            {/* Orbit Rings dynamically sized to be perfect circles */}
            <div 
                className="rot-orbit-ring" 
                style={{ width: `${outerRingSize}px`, height: `${outerRingSize}px` }} 
            />
            <div 
                className="rot-orbit-ring rot-orbit-ring-inner" 
                style={{ width: `${innerRingSize}px`, height: `${innerRingSize}px` }} 
            />

            {/* Central Core (Sun) */}
            <div className="rot-core">
                <div className="rot-core-ping" />
                <div className="rot-core-ping rot-core-ping-delayed" />
                <div className="rot-core-inner" />
            </div>

            {/* Orbital Nodes — absolutely positioned from center */}
            <div className="rot-orbit-area">
                {timelineData.map((item, index) => {
                    const pos = calculateNodePosition(index, timelineData.length);
                    const isActive = activeNodeId === item.id;
                    const isRelated = pulseEffect[item.id];
                    const colors = elementColors[item.element];

                    return (
                        <div
                            key={item.id}
                            className="rot-node"
                            style={{
                                transform: `translate(${pos.x}px, ${pos.y}px)`,
                                zIndex: isActive ? 200 : pos.zIndex,
                                opacity: isActive ? 1 : pos.opacity,
                            }}
                            onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
                        >
                            {/* Inner wrapper for scaling to prevent blurring the card/text */}
                            <div className="rot-scale-wrapper" style={{ transform: `scale(${isActive ? 1.3 : pos.scale})` }}>
                                {/* Energy aura */}
                            <div
                                className={`rot-node-aura ${isRelated ? 'rot-pulse' : ''}`}
                                style={{
                                    width: `${item.energy * 0.5 + 35}px`,
                                    height: `${item.energy * 0.5 + 35}px`,
                                    background: `radial-gradient(circle, ${colors.bg} 0%, transparent 70%)`,
                                }}
                            />

                                {/* Node image body without any frame/border */}
                                <div className="rot-node-circle">
                                    <img
                                        src={zodiacImages[item.title]}
                                        alt={item.title}
                                        className="rot-node-img"
                                        draggable={false}
                                    />
                                </div>
                            </div>

                            {/* Crisp Label outside scaled area */}
                            <div className={`rot-node-label ${isActive ? 'rot-node-label-active' : ''}`}>
                                {item.title}
                            </div>

                            {/* Expanded card */}
                            {isActive && (
                                <div
                                    className="rot-card"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="rot-card-connector" />

                                    <div className="rot-card-header">
                                        <span
                                            className="rot-badge"
                                            style={{ background: colors.bg, color: colors.primary, borderColor: colors.primary }}
                                        >
                                            {item.element.toUpperCase()}
                                        </span>
                                        <span className="rot-card-date">{item.date}</span>
                                    </div>

                                    <h3 className="rot-card-title">{item.title}</h3>

                                    <div className="rot-card-meta">
                                        <span className="rot-badge rot-badge-ruler">
                                            Ruler: {item.ruler}
                                        </span>
                                    </div>

                                    <p className="rot-card-desc">"{item.desc}"</p>
                                    <p className="rot-card-traits">Traits: {item.traits}</p>

                                    {/* Energy bar */}
                                    <div className="rot-energy-section">
                                        <div className="rot-energy-header">
                                            <span className="rot-energy-icon">⚡</span>
                                            <span>Cosmic Energy</span>
                                            <span className="rot-energy-value">{item.energy}%</span>
                                        </div>
                                        <div className="rot-energy-track">
                                            <div
                                                className="rot-energy-fill"
                                                style={{
                                                    width: `${item.energy}%`,
                                                    background: `linear-gradient(90deg, ${colors.primary}, ${colors.glow})`,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Connected nodes */}
                                    {item.relatedIds.length > 0 && (
                                        <div className="rot-connections-section">
                                            <div className="rot-connections-header">
                                                <span className="rot-connections-icon">🔗</span>
                                                <span>Connected Signs</span>
                                            </div>
                                            <div className="rot-connections-list">
                                                {item.relatedIds.map(relId => {
                                                    const related = timelineData.find(i => i.id === relId);
                                                    return (
                                                        <button
                                                            key={relId}
                                                            className="rot-connection-btn"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                toggleItem(relId);
                                                            }}
                                                        >
                                                            {related?.title} →
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default InteractiveZodiac;
