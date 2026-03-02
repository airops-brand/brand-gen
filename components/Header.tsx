import Image from 'next/image'

export default function Header() {
  return (
    <header
      style={{
        background: '#fff',
        borderBottom: '1px solid #d4e8da',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        position: 'sticky',
        top: 0,
        zIndex: 40,
      }}
    >
      {/* AirOps logo */}
      <Image
        src="/logo-airops.svg"
        alt="AirOps"
        width={80}
        height={26}
        priority
      />

      {/* Right side: Greenhouse OS + separator + tagline */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span
          style={{
            fontFamily: "'Saans Mono', monospace",
            fontWeight: 500,
            fontSize: '13px',
            color: '#001408',
            letterSpacing: '0.02em',
          }}
        >
          Greenhouse OS
        </span>
        <span style={{ width: '1px', height: '16px', background: '#d4e8da', display: 'block' }} />
        <span
          style={{
            fontFamily: "'Saans', sans-serif",
            fontSize: '12px',
            color: '#676c79',
          }}
        >
          Internal brand tools
        </span>
      </div>
    </header>
  )
}
