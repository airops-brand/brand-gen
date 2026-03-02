'use client'

import { useState } from 'react'

export default function HeroHeader({ animate }: { animate: boolean }) {
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null)

  return (
    <>
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        style={{
          background: '#002910',
          padding: '52px 40px',
          width: '100%',
        }}
      >
        <p
          style={{
            margin: 0,
            color: '#fff',
            fontFamily: "'Saans', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(32px, 4vw, 64px)',
            lineHeight: 1.35,
            maxWidth: '900px',
            opacity: animate ? undefined : 0,
            animation: animate ? 'heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards' : 'none',
          }}
        >
          Greenhouse OS is a collection of tools the brand team built from{' '}
          <span
            onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setCursor(null)}
            style={{
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              cursor: cursor ? 'none' : 'default',
              whiteSpace: 'nowrap',
            }}
          >
            the ground up
          </span>
          {' '}using Claude Code, giving every team at AirOps the power to create on-brand assets independently.
        </p>
      </div>

      {cursor && (
        <span
          style={{
            position: 'fixed',
            left: cursor.x,
            top: cursor.y,
            fontSize: '26px',
            lineHeight: 1,
            pointerEvents: 'none',
            transform: 'translate(-4px, -20px)',
            zIndex: 9999,
            userSelect: 'none',
          }}
        >
          🌱
        </span>
      )}
    </>
  )
}
