"use client"
import React, { useEffect, useState, memo } from 'react'

// --- Type-like constants (kept simple for JS) ---
const ICON_TYPES = /** @type {const} */ (['aries', 'taurus', 'gemini', 'leo', 'scorpio', 'pisces'])
const GLOW_COLORS = /** @type {const} */ (['gold', 'maroon'])

// --- Zodiac Icon Components (Unicode, centered) ---
const iconComponents = {
  aries: { symbol: '♈', color: '#D4AF37', label: 'Aries' },
  taurus: { symbol: '♉', color: '#D4AF37', label: 'Taurus' },
  gemini: { symbol: '♊', color: '#D4AF37', label: 'Gemini' },
  leo: { symbol: '♌', color: '#D4AF37', label: 'Leo' },
  scorpio: { symbol: '♏', color: '#D4AF37', label: 'Scorpio' },
  pisces: { symbol: '♓', color: '#D4AF37', label: 'Pisces' },
}

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }) => {
  const icon = iconComponents[type]
  if (!icon) return null
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        fontSize: '1.35rem',
        lineHeight: 1,
        color: icon.color,
        textShadow: '0 0 10px rgba(212, 175, 55, 0.35), 0 0 20px rgba(212, 175, 55, 0.18)',
        userSelect: 'none',
      }}
      aria-hidden="true"
    >
      {icon.symbol}
    </span>
  )
})
SkillIcon.displayName = 'SkillIcon'

// --- Configuration for the Orbiting Skills (same mechanics) ---
// Old → New mapping (per prompt):
// html → Aries, css → Taurus, javascript → Gemini, react → Leo, node → Scorpio, tailwind → Pisces
const skillsConfig = [
  // Inner Orbit
  {
    id: 'aries',
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: 'aries',
    phaseShift: 0,
    glowColor: 'gold',
    label: 'Aries',
  },
  {
    id: 'taurus',
    orbitRadius: 100,
    size: 45,
    speed: 1,
    iconType: 'taurus',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'gold',
    label: 'Taurus',
  },
  {
    id: 'gemini',
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: 'gemini',
    phaseShift: (4 * Math.PI) / 3,
    glowColor: 'gold',
    label: 'Gemini',
  },
  // Outer Orbit
  {
    id: 'leo',
    orbitRadius: 180,
    size: 50,
    speed: -0.6,
    iconType: 'leo',
    phaseShift: 0,
    glowColor: 'maroon',
    label: 'Leo',
  },
  {
    id: 'scorpio',
    orbitRadius: 180,
    size: 45,
    speed: -0.6,
    iconType: 'scorpio',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'maroon',
    label: 'Scorpio',
  },
  {
    id: 'pisces',
    orbitRadius: 180,
    size: 40,
    speed: -0.6,
    iconType: 'pisces',
    phaseShift: (4 * Math.PI) / 3,
    glowColor: 'maroon',
    label: 'Pisces',
  },
]

// --- Memoized Orbiting Skill Component (same math/behavior) ---
const OrbitingSkill = memo(({ config, angle }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { orbitRadius, size, iconType, label } = config

  const x = Math.cos(angle) * orbitRadius
  const y = Math.sin(angle) * orbitRadius

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          background: 'rgba(15, 8, 8, 0.72)',
          border: '1px solid rgba(212, 175, 55, 0.22)',
          boxShadow: isHovered
            ? `0 0 26px rgba(212, 175, 55, 0.32), 0 0 54px rgba(212, 175, 55, 0.16)`
            : `0 0 18px rgba(123, 30, 30, 0.18)`,
          backdropFilter: 'blur(6px)',
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs whitespace-nowrap pointer-events-none"
            style={{
              background: 'rgba(15, 8, 8, 0.92)',
              border: '1px solid rgba(212, 175, 55, 0.22)',
              color: '#F5E6D3',
              boxShadow: '0 10px 22px rgba(0,0,0,0.25)',
            }}
          >
            {label}
          </div>
        )}
      </div>
    </div>
  )
})
OrbitingSkill.displayName = 'OrbitingSkill'

// --- Optimized Orbit Path Component (same structure/behavior, theme swapped) ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'gold', animationDelay = 0 }) => {
  const glowColors = {
    gold: {
      primary: 'rgba(212, 175, 55, 0.32)',
      secondary: 'rgba(212, 175, 55, 0.14)',
      border: 'rgba(212, 175, 55, 0.22)',
    },
    maroon: {
      primary: 'rgba(123, 30, 30, 0.30)',
      secondary: 'rgba(123, 30, 30, 0.14)',
      border: 'rgba(123, 30, 30, 0.22)',
    },
  }

  const colors = glowColors[glowColor] || glowColors.gold

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Spiritual aura (soft, not neon) */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 34%, ${colors.secondary} 72%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 46px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 18px ${colors.secondary}`,
        }}
      />
    </div>
  )
})
GlowingOrbitPath.displayName = 'GlowingOrbitPath'

// --- Main App Component (same loop/structure/hover pause) ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    let animationFrameId
    let lastTime = performance.now()

    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 1000
      lastTime = currentTime

      setTime((prevTime) => prevTime + deltaTime)
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isPaused])

  const orbitConfigs = [
    { radius: 100, glowColor: 'gold', delay: 0 },
    { radius: 180, glowColor: 'maroon', delay: 1.5 },
  ]

  return (
    <main className="w-full flex items-center justify-center overflow-hidden">
      {/* Cosmic / mandala-ish background (lightweight, no deps) */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 25%, rgba(212, 175, 55, 0.16) 0%, transparent 45%),' +
              'radial-gradient(circle at 75% 70%, rgba(123, 30, 30, 0.18) 0%, transparent 48%),' +
              'radial-gradient(circle at 50% 50%, rgba(245, 230, 211, 0.10) 0%, transparent 55%)',
          }}
        />
      </div>

      <div
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[450px] md:h-[450px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(15, 8, 8, 0.55) 0%, rgba(123, 30, 30, 0.20) 55%, rgba(0, 0, 0, 0) 72%)',
        }}
      >
        {/* Central Om symbol (replaces code icon) */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center z-10 relative shadow-2xl"
          style={{
            background: 'rgba(15, 8, 8, 0.82)',
            border: '1px solid rgba(212, 175, 55, 0.28)',
          }}
        >
          <div
            className="absolute inset-0 rounded-full blur-xl animate-pulse"
            style={{ background: 'rgba(212, 175, 55, 0.20)' }}
          />
          <div
            className="absolute inset-0 rounded-full blur-2xl animate-pulse"
            style={{ background: 'rgba(123, 30, 30, 0.16)', animationDelay: '1s' }}
          />
          <div
            className="relative z-10"
            style={{
              color: '#D4AF37',
              fontSize: '2.15rem',
              lineHeight: 1,
              textShadow: '0 0 16px rgba(212, 175, 55, 0.42)',
              userSelect: 'none',
            }}
            aria-hidden="true"
          >
            ॐ
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0)
          return <OrbitingSkill key={config.id} config={config} angle={angle} />
        })}
      </div>
    </main>
  )
}

