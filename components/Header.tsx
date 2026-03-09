import Image from 'next/image'
import Link from 'next/link'

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
      <Link href="/">
        <Image
          src="/logo-airops.svg"
          alt="AirOps"
          width={80}
          height={26}
          priority
        />
      </Link>

      {/* Nav + right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <a
          href="/creative-requests-rubric.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Saans Mono', monospace",
            fontSize: '11px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#008c44',
            textDecoration: 'none',
            padding: '4px 10px',
            border: '1px solid #d4e8da',
            transition: 'background 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#f0faf4')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          Brand Team Process
        </a>

        <a
          href="/claude-code-setup-guide.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Saans Mono', monospace",
            fontSize: '11px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#008c44',
            textDecoration: 'none',
            padding: '4px 10px',
            border: '1px solid #d4e8da',
            transition: 'background 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#f0faf4')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          Claude Code Setup Guide
        </a>

        <span style={{ width: '1px', height: '16px', background: '#d4e8da', display: 'block' }} />

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
      </div>
    </header>
  )
}
