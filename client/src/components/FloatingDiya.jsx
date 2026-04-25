const sizeMap = {
  sm: 16,
  md: 22,
  lg: 28,
}

export default function FloatingDiya({ style = {}, delay = 0, size = 'md' }) {
  const flameSize = sizeMap[size] || sizeMap.md
  return (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        zIndex: 3,
        fontSize: flameSize,
        lineHeight: 1,
        animation: `floating-diya 4s ease-in-out ${delay}s infinite`,
        filter: 'drop-shadow(0 0 8px rgba(238, 199, 125, 0.7))',
        ...style,
      }}
    >
      🪔
    </span>
  )
}
