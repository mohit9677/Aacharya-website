import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import './WovenLightBg.css'

/**
 * WovenLightBg — A Three.js particle system background
 * Renders a slowly rotating torus knot made of glowing particles.
 * Mouse interaction pushes particles away; they gently return.
 *
 * Props:
 *   height    — CSS height of the container (default: "280px")
 *   className — optional extra class name
 *   colorHue  — base hue for particles 0-1 (default: 0.12 = gold)
 */
export default function WovenLightBg({
  height = "280px",
  className = "",
  colorHue = 0.12,
}) {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    const container = mountRef.current
    const width = container.clientWidth
    const containerHeight = container.clientHeight

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / containerHeight, 0.1, 1000)
    camera.position.z = 4

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, containerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0) // Transparent background
    container.appendChild(renderer.domElement)

    const mouse = new THREE.Vector2(0, 0)
    const clock = new THREE.Clock()

    // Particle system — torus knot shape
    const particleCount = 25000
    const positions = new Float32Array(particleCount * 3)
    const originalPositions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)

    const geometry = new THREE.BufferGeometry()
    const torusKnot = new THREE.TorusKnotGeometry(1.2, 0.4, 200, 32)

    for (let i = 0; i < particleCount; i++) {
      const vertexIndex = i % torusKnot.attributes.position.count
      const x = torusKnot.attributes.position.getX(vertexIndex)
      const y = torusKnot.attributes.position.getY(vertexIndex)
      const z = torusKnot.attributes.position.getZ(vertexIndex)

      // Add slight randomness for a more organic look
      const jitter = 0.03
      positions[i * 3] = x + (Math.random() - 0.5) * jitter
      positions[i * 3 + 1] = y + (Math.random() - 0.5) * jitter
      positions[i * 3 + 2] = z + (Math.random() - 0.5) * jitter
      originalPositions[i * 3] = positions[i * 3]
      originalPositions[i * 3 + 1] = positions[i * 3 + 1]
      originalPositions[i * 3 + 2] = positions[i * 3 + 2]

      // Gold/amber/warm color palette
      const color = new THREE.Color()
      const hue = colorHue + (Math.random() - 0.5) * 0.08 // Slight hue variation
      const saturation = 0.6 + Math.random() * 0.3
      const lightness = 0.5 + Math.random() * 0.3
      color.setHSL(hue, saturation, lightness)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      velocities[i * 3] = 0
      velocities[i * 3 + 1] = 0
      velocities[i * 3 + 2] = 0
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.015,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.75,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // Mouse tracking
    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    }
    container.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    let animationId
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      const mouseWorld = new THREE.Vector3(mouse.x * 3, mouse.y * 3, 0)

      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3
        const iy = i * 3 + 1
        const iz = i * 3 + 2

        const currentPos = new THREE.Vector3(positions[ix], positions[iy], positions[iz])
        const originalPos = new THREE.Vector3(originalPositions[ix], originalPositions[iy], originalPositions[iz])
        const velocity = new THREE.Vector3(velocities[ix], velocities[iy], velocities[iz])

        // Mouse repulsion
        const dist = currentPos.distanceTo(mouseWorld)
        if (dist < 1.2) {
          const force = (1.2 - dist) * 0.008
          const direction = new THREE.Vector3().subVectors(currentPos, mouseWorld).normalize()
          velocity.add(direction.multiplyScalar(force))
        }

        // Return to original position
        const returnForce = new THREE.Vector3().subVectors(originalPos, currentPos).multiplyScalar(0.001)
        velocity.add(returnForce)

        // Damping
        velocity.multiplyScalar(0.96)

        positions[ix] += velocity.x
        positions[iy] += velocity.y
        positions[iz] += velocity.z

        velocities[ix] = velocity.x
        velocities[iy] = velocity.y
        velocities[iz] = velocity.z
      }
      geometry.attributes.position.needsUpdate = true

      // Slow rotation
      points.rotation.y = elapsedTime * 0.04
      points.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1

      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const handleResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('mousemove', handleMouseMove)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      torusKnot.dispose()
      renderer.dispose()
    }
  }, [colorHue])

  return (
    <div
      ref={mountRef}
      className={`woven-light-bg ${className}`}
      style={{ height }}
    />
  )
}
