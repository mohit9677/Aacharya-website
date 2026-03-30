import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"
import "./CobeGlobe.css"

// Astrology-themed markers — sacred cities & spiritual centers
const defaultMarkers = [
  { id: "varanasi", location: [25.32, 83.01], region: "Varanasi" },
  { id: "ujjain", location: [23.18, 75.78], region: "Ujjain" },
  { id: "rishikesh", location: [30.09, 78.27], region: "Rishikesh" },
  { id: "kathmandu", location: [27.7, 85.32], region: "Kathmandu" },
  { id: "bali", location: [-8.34, 115.09], region: "Bali" },
  { id: "cairo", location: [30.04, 31.24], region: "Cairo" },
  { id: "cusco", location: [-13.53, -71.97], region: "Cusco" },
  { id: "sedona", location: [34.87, -111.76], region: "Sedona" },
  { id: "stonehenge", location: [51.18, -1.83], region: "Stonehenge" },
  { id: "kyoto", location: [35.01, 135.77], region: "Kyoto" },
]

const defaultArcs = [
  { id: "arc-1", from: [25.32, 83.01], to: [30.04, 31.24] },
  { id: "arc-2", from: [25.32, 83.01], to: [35.01, 135.77] },
  { id: "arc-3", from: [30.04, 31.24], to: [51.18, -1.83] },
  { id: "arc-4", from: [23.18, 75.78], to: [-8.34, 115.09] },
  { id: "arc-5", from: [34.87, -111.76], to: [-13.53, -71.97] },
  { id: "arc-6", from: [51.18, -1.83], to: [34.87, -111.76] },
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

      // Use the exact createGlobe + update() pattern from the reference component
      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: 0,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 10,
        baseColor: [1, 1, 1],
        markerColor: [0.36, 0.10, 0.09],      // Maroon markers
        glowColor: [0.94, 0.93, 0.91],
        markerElevation: 0.02,
        markers: markers.map((m) => ({
          location: m.location,
          size: 0.05,
        })),
        opacity: 0.7,
      })

      // Manual animation loop using globe.update()
      function animate() {
        if (!isPausedRef.current) phi += speed
        globe.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        })
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
  }, [markers, arcs, speed])

  return (
    <div className={`cobe-globe-wrapper ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        className="cobe-globe-canvas"
      />
      <div className="cobe-globe-label">
        🌍 Sacred Sites Worldwide
      </div>
    </div>
  )
}
