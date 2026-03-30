import { useRef, useEffect } from 'react'
import {
  Clock, PerspectiveCamera, Scene, WebGLRenderer, SRGBColorSpace, MathUtils,
  Vector2, Vector3, MeshPhysicalMaterial, Color, Object3D, InstancedMesh,
  PMREMGenerator, SphereGeometry, AmbientLight, PointLight, ACESFilmicToneMapping,
  Raycaster, Plane,
} from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import './BallpitBg.css'

// ── Physics Engine ──
class PhysicsEngine {
  constructor(config) {
    this.config = config
    this.positionData = new Float32Array(3 * config.count)
    this.velocityData = new Float32Array(3 * config.count)
    this.sizeData = new Float32Array(config.count)
    this.center = new Vector3()
    this._initPositions()
    this._initSizes()
  }

  _initPositions() {
    const { count, maxX, maxY, maxZ } = this.config
    this.center.toArray(this.positionData, 0)
    for (let i = 1; i < count; i++) {
      const idx = 3 * i
      this.positionData[idx] = MathUtils.randFloatSpread(2 * maxX)
      this.positionData[idx + 1] = MathUtils.randFloatSpread(2 * maxY)
      this.positionData[idx + 2] = MathUtils.randFloatSpread(2 * maxZ)
    }
  }

  _initSizes() {
    const { count, size0, minSize, maxSize } = this.config
    this.sizeData[0] = size0
    for (let i = 1; i < count; i++) {
      this.sizeData[i] = MathUtils.randFloat(minSize, maxSize)
    }
  }

  update(delta) {
    const { config, center, positionData, sizeData, velocityData } = this
    const startIdx = config.controlSphere0 ? 1 : 0

    if (config.controlSphere0) {
      const pos = new Vector3().fromArray(positionData, 0)
      pos.lerp(center, 0.1).toArray(positionData, 0)
      velocityData[0] = velocityData[1] = velocityData[2] = 0
    }

    for (let i = startIdx; i < config.count; i++) {
      const base = 3 * i
      const pos = new Vector3().fromArray(positionData, base)
      const vel = new Vector3().fromArray(velocityData, base)

      // Gravity
      vel.y -= delta * config.gravity * sizeData[i]
      // Friction
      vel.multiplyScalar(config.friction)
      vel.clampLength(0, config.maxVelocity)
      pos.add(vel)

      // Sphere-to-sphere collision
      for (let j = i + 1; j < config.count; j++) {
        const otherBase = 3 * j
        const otherPos = new Vector3().fromArray(positionData, otherBase)
        const diff = new Vector3().subVectors(otherPos, pos)
        const dist = diff.length()
        const sumRadius = sizeData[i] + sizeData[j]
        if (dist < sumRadius) {
          const overlap = (sumRadius - dist) * 0.5
          diff.normalize()
          pos.addScaledVector(diff, -overlap)
          otherPos.addScaledVector(diff, overlap)
          pos.toArray(positionData, base)
          otherPos.toArray(positionData, otherBase)
        }
      }

      // Wall boundaries
      if (Math.abs(pos.x) + sizeData[i] > config.maxX) {
        pos.x = Math.sign(pos.x) * (config.maxX - sizeData[i])
        vel.x *= -config.wallBounce
      }
      if (pos.y - sizeData[i] < -config.maxY) {
        pos.y = -config.maxY + sizeData[i]
        vel.y *= -config.wallBounce
      }
      if (Math.abs(pos.z) + sizeData[i] > config.maxZ) {
        pos.z = Math.sign(pos.z) * (config.maxZ - sizeData[i])
        vel.z *= -config.wallBounce
      }

      pos.toArray(positionData, base)
      vel.toArray(velocityData, base)
    }
  }
}

// ── Instanced Spheres ──
const _dummy = new Object3D()

class InstancedSpheres extends InstancedMesh {
  constructor(renderer, config) {
    const pmrem = new PMREMGenerator(renderer)
    const envTexture = pmrem.fromScene(new RoomEnvironment(renderer)).texture
    pmrem.dispose()

    const geometry = new SphereGeometry(1, 24, 24)
    const material = new MeshPhysicalMaterial({
      envMap: envTexture,
      ...config.materialParams,
    })
    super(geometry, material, config.count)

    this.config = config
    this.physics = new PhysicsEngine(config)

    this.ambientLight = new AmbientLight(0xffffff, config.ambientIntensity)
    this.add(this.ambientLight)
    this.light = new PointLight(0xffffff, config.lightIntensity, 100, 1)
    this.add(this.light)

    this._setColors(config.colors)
  }

  _setColors(colors) {
    if (!Array.isArray(colors) || !colors.length) return
    const colorObjs = colors.map((c) => (c instanceof Color ? c : new Color(c)))
    for (let i = 0; i < this.count; i++) {
      this.setColorAt(i, colorObjs[i % colorObjs.length])
    }
    if (this.instanceColor) this.instanceColor.needsUpdate = true
  }

  update(delta) {
    this.physics.update(delta)
    for (let i = 0; i < this.count; i++) {
      _dummy.position.fromArray(this.physics.positionData, 3 * i)
      _dummy.scale.setScalar(this.physics.sizeData[i])
      _dummy.updateMatrix()
      this.setMatrixAt(i, _dummy.matrix)
    }
    this.instanceMatrix.needsUpdate = true
    if (this.config.controlSphere0) {
      this.light.position.fromArray(this.physics.positionData, 0)
    }
  }
}

// ── AstroBharat Palette — warm golds and maroon shades ──
const ASTRO_COLORS = [
  '#D4AF37', // Gold primary
  '#F2C94C', // Gold light
  '#AA8C2C', // Gold dark
  '#5D1916', // Maroon
  '#8B4513', // Saddle brown
  '#CD853F', // Peru/copper
  '#FFD700', // Pure gold accent
]

const DEFAULT_CONFIG = {
  count: 120,
  materialParams: {
    metalness: 0.8,
    roughness: 0.2,
    clearcoat: 1,
    clearcoatRoughness: 0.15,
  },
  minSize: 0.2,
  maxSize: 0.6,
  size0: 0.8,
  gravity: 0.3,
  friction: 0.995,
  wallBounce: 0.3,
  maxVelocity: 0.08,
  maxX: 8,
  maxY: 5,
  maxZ: 6,
  controlSphere0: true,
  followCursor: true,
  lightIntensity: 4,
  ambientIntensity: 1.5,
  colors: ASTRO_COLORS,
}

/**
 * BallpitBg — Interactive 3D sphere physics background
 * Renders shiny metallic spheres that fall with gravity,
 * collide with each other, and follow the mouse cursor.
 *
 * Props:
 *   height    — CSS height (default: "280px")
 *   className — optional class
 *   config    — partial override of sphere/physics config
 */
export default function BallpitBg({ height = '280px', className = '', config = {} }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const container = canvas.parentElement

    const mergedConfig = { ...DEFAULT_CONFIG, ...config }

    // Scene setup
    const clock = new Clock()
    const scene = new Scene()
    const camera = new PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.set(0, 0, 15)

    const renderer = new WebGLRenderer({
      canvas,
      powerPreference: 'high-performance',
      alpha: true,
      antialias: true,
    })
    renderer.outputColorSpace = SRGBColorSpace
    renderer.toneMapping = ACESFilmicToneMapping
    renderer.setClearColor(0x000000, 0)

    // Sizing
    function resize() {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      // Update physics boundaries to match viewport
      const fovRad = (camera.fov * Math.PI) / 180
      const wHeight = 2 * Math.tan(fovRad / 2) * camera.position.z
      const wWidth = wHeight * camera.aspect
      spheres.physics.config.maxX = wWidth / 2
      spheres.physics.config.maxY = wHeight / 2
      spheres.physics.config.maxZ = wWidth / 4
    }

    // Create spheres
    const spheres = new InstancedSpheres(renderer, mergedConfig)
    scene.add(spheres)

    resize()

    // Mouse tracking
    const pointer = new Vector2(0, 0)
    const raycaster = new Raycaster()
    const plane = new Plane(new Vector3(0, 0, 1), 0)
    const intersectionPoint = new Vector3()

    function onPointerMove(e) {
      const rect = container.getBoundingClientRect()
      pointer.set(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      )
    }

    if (mergedConfig.followCursor) {
      container.addEventListener('pointermove', onPointerMove)
    }

    // Animation
    let animationId
    function animate() {
      animationId = requestAnimationFrame(animate)
      const delta = clock.getDelta()

      if (mergedConfig.followCursor) {
        raycaster.setFromCamera(pointer, camera)
        if (raycaster.ray.intersectPlane(plane, intersectionPoint)) {
          spheres.physics.center.copy(intersectionPoint)
        }
      }

      spheres.update(delta)
      renderer.render(scene, camera)
    }
    clock.start()
    animate()

    // Resize
    window.addEventListener('resize', resize)
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      ro.disconnect()
      container.removeEventListener('pointermove', onPointerMove)
      scene.clear()
      renderer.dispose()
    }
  }, [])

  return (
    <div className={`ballpit-bg ${className}`} style={{ height }}>
      <canvas ref={canvasRef} className="ballpit-canvas" />
    </div>
  )
}
