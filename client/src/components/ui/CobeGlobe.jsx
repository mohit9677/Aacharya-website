import { useEffect, useRef, useCallback, useState } from "react"
import createGlobe from "cobe"
import "./CobeGlobe.css"

// Country markers that should appear only when visible on front hemisphere
const defaultMarkers = [
  { id: "india", location: [20.5937, 78.9629], label: "India" },
  { id: "usa", location: [39.8283, -98.5795], label: "USA" },
  { id: "canada", location: [56.1304, -106.3468], label: "Canada" },
  { id: "brazil", location: [-14.2350, -51.9253], label: "Brazil" },
  { id: "australia", location: [-25.2744, 133.7751], label: "Australia" },
]

const defaultArcs = [
  { id: "usa-india", from: [39.8283, -98.5795], to: [20.5937, 78.9629] },
  { id: "canada-india", from: [56.1304, -106.3468], to: [20.5937, 78.9629] },
  { id: "india-australia", from: [20.5937, 78.9629], to: [-25.2744, 133.7751] },
]

export default function CobeGlobe({
  markers = defaultMarkers,
  arcs = defaultArcs,
  speed = 0.003,
  className = "",
}) {
  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)
  const lastLabelUpdateRef = useRef(0)
  const [visibleCountries, setVisibleCountries] = useState([])

  const projectMarkerToScreen = useCallback((lat, lon, phi, theta) => {
    const latRad = (lat * Math.PI) / 180
    // Small longitude calibration to visually align labels with rendered globe map
    const lonRad = ((lon - 22) * Math.PI) / 180

    // Sphere basis aligned to Cobe map orientation
    const x = Math.cos(latRad) * Math.cos(lonRad)
    const y = Math.sin(latRad)
    const z = Math.cos(latRad) * Math.sin(lonRad)

    const x1 = x * Math.cos(phi) + z * Math.sin(phi)
    const z1 = -x * Math.sin(phi) + z * Math.cos(phi)

    const y2 = y * Math.cos(theta) - z1 * Math.sin(theta)
    const z2 = y * Math.sin(theta) + z1 * Math.cos(theta)

    // Require stronger front-hemisphere confidence so behind/edge countries stay hidden
    const visible = z2 > 0.14
    // Tuned projection scale/offset for better visual label alignment on this globe setup
    const px = 46 + x1 * 34
    const py = 50 - y2 * 34

    return { visible, x: px, y: py }
  }, [])

  const handlePointerDown = useCallback((e) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe = null
    let animationId
    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.22,
        dark: 0,
        diffuse: 1.6,
        mapSamples: 16000,
        mapBrightness: 10,
        baseColor: [1, 1, 1],
        markerColor: [0.24, 0.42, 0.88], // blue markers like reference
        glowColor: [0.94, 0.93, 0.91],
        markerElevation: 0.01,
        markers: markers.map((m) => ({
          location: m.location,
          size: 0.045,
        })),
        arcs: arcs.map((a) => ({
          from: a.from,
          to: a.to,
        })),
        arcColor: [0.30, 0.45, 0.85],
        arcWidth: 0.8,
        arcHeight: 0.22,
        opacity: 0.72,
      })

      function animate() {
        if (!isPausedRef.current) phi += speed
        const livePhi = phi + phiOffsetRef.current + dragOffset.current.phi
        const liveTheta = 0.22 + thetaOffsetRef.current + dragOffset.current.theta

        globe.update({
          phi: livePhi,
          theta: liveTheta,
          markers: markers.map((m) => ({
            location: m.location,
            size: 0.045,
          })),
          arcs: arcs.map((a) => ({
            from: a.from,
            to: a.to,
          })),
          arcColor: [0.30, 0.45, 0.85],
        })

        const now = performance.now()
        if (now - lastLabelUpdateRef.current > 80) {
          lastLabelUpdateRef.current = now
          const nextVisible = markers
            .map((m) => {
              const p = projectMarkerToScreen(m.location[0], m.location[1], livePhi, liveTheta)
              return { ...m, ...p }
            })
            .filter((m) => m.visible)

          setVisibleCountries(nextVisible)
        }

        animationId = requestAnimationFrame(animate)
      }
      animate()

      // Fade in
      setTimeout(() => {
        if (canvas) canvas.style.opacity = "1"
      }, 50)
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [markers, arcs, speed, projectMarkerToScreen])

  return (
    <div className={`cobe-globe-wrapper ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        className="cobe-globe-canvas"
      />
      {visibleCountries.map((country) => (
        <div
          key={country.id}
          className="cobe-country"
          style={{
            left: `${country.x}%`,
            top: `${country.y}%`,
          }}
        >
          <span className="cobe-country-dot" />
          <span className="cobe-country-label">{country.label}</span>
        </div>
      ))}

      <div className="cobe-globe-label">
        <span className="cobe-dot">●</span> Sacred Sites Worldwide
      </div>
    </div>
  )
}
