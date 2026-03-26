'use client'

import { useEffect, useState } from 'react'

export default function TerminalSplash({ onDone }: { onDone: () => void }) {
  const [textVisible, setTextVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setTextVisible(true), 200)
    const t2 = setTimeout(() => setFadeOut(true), 2800)
    const t3 = setTimeout(() => onDone(), 3300)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  const dismiss = () => {
    setFadeOut(true)
    setTimeout(onDone, 500)
  }

  return (
    <div
      onClick={dismiss}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        background: '#ddd5c8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
        cursor: 'pointer',
      }}
    >
      {/* Terminal window */}
      <div
        style={{
          width: '88vw',
          maxWidth: 1000,
          height: '62vh',
          maxHeight: 560,
          borderRadius: 0,
          overflow: 'hidden',
          boxShadow: '0 40px 100px rgba(0,0,0,0.45)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Title bar */}
        <div
          style={{
            background: '#3b3b3b',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 14px',
            gap: '8px',
            flexShrink: 0,
          }}
        >
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57', display: 'block' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E', display: 'block' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840', display: 'block' }} />
        </div>

        {/* Body */}
        <div
          style={{
            flex: 1,
            background: '#1c1c1c',
            display: 'flex',
            alignItems: 'center',
            padding: '40px 48px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-press-start), monospace",
              color: '#a8f0c6',
              lineHeight: 1.7,
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'none' : 'translateY(8px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              fontSize: 'clamp(28px, 5.5vw, 72px)',
            }}
          >
            <div>GREENHOUSE</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3em' }}>
              OS
              <span
                style={{
                  display: 'inline-block',
                  width: '0.55em',
                  height: '1em',
                  background: '#a8f0c6',
                  marginLeft: '0.15em',
                  verticalAlign: 'middle',
                  animation: 'blink 1s step-end infinite',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
