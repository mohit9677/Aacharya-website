export default function OrnamentDivider({ symbol = '✦' }) {
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        margin: '14px 0',
        color: '#eec77d',
        opacity: 0.9,
      }}
    >
      <span style={{ width: 48, height: 1, background: 'currentColor', opacity: 0.5 }} />
      <span style={{ fontSize: 18, lineHeight: 1 }}>{symbol}</span>
      <span style={{ width: 48, height: 1, background: 'currentColor', opacity: 0.5 }} />
    </div>
  )
}
