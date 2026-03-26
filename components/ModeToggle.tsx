'use client'

import { useState } from 'react'

type Props = {
  mode: 'human' | 'machine'
  onToggle: (mode: 'human' | 'machine') => void
}

export default function ModeToggle({ mode, onToggle }: Props) {
  const [hoveredHuman, setHoveredHuman] = useState(false)
  const [hoveredMachine, setHoveredMachine] = useState(false)

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(10,10,10,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 0,
        padding: '6px 8px',
        gap: '2px',
      }}
    >
      {/* Human option */}
      <button
        onClick={() => onToggle('human')}
        onMouseEnter={() => setHoveredHuman(true)}
        onMouseLeave={() => setHoveredHuman(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: mode === 'human' ? 'rgba(255,255,255,0.1)' : hoveredHuman ? 'rgba(255,255,255,0.05)' : 'transparent',
          border: 'none',
          borderRadius: 0,
          cursor: mode === 'human' ? 'default' : 'pointer',
          padding: '5px 12px',
          fontFamily: "'Saans Mono', 'DM Mono', monospace",
          fontSize: '11px',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: mode === 'human' ? '#ffffff' : 'rgba(255,255,255,0.4)',
          transition: 'all 0.15s ease',
          whiteSpace: 'nowrap',
        }}
      >
        {/* Radio indicator */}
        <span
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            border: mode === 'human' ? '3px solid #00ff64' : '1.5px solid rgba(255,255,255,0.3)',
            background: mode === 'human' ? '#00ff64' : 'transparent',
            flexShrink: 0,
            display: 'inline-block',
            transition: 'all 0.15s ease',
          }}
        />
        Human
      </button>

      {/* Machine option */}
      <button
        onClick={() => onToggle('machine')}
        onMouseEnter={() => setHoveredMachine(true)}
        onMouseLeave={() => setHoveredMachine(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: mode === 'machine' ? 'rgba(0,255,100,0.1)' : hoveredMachine ? 'rgba(255,255,255,0.05)' : 'transparent',
          border: 'none',
          borderRadius: 0,
          cursor: mode === 'machine' ? 'default' : 'pointer',
          padding: '5px 12px',
          fontFamily: "'Saans Mono', 'DM Mono', monospace",
          fontSize: '11px',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: mode === 'machine' ? '#00ff64' : 'rgba(255,255,255,0.4)',
          transition: 'all 0.15s ease',
          whiteSpace: 'nowrap',
        }}
      >
        {/* Radio indicator */}
        <span
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            border: mode === 'machine' ? '3px solid #00ff64' : '1.5px solid rgba(255,255,255,0.3)',
            background: mode === 'machine' ? '#00ff64' : 'transparent',
            flexShrink: 0,
            display: 'inline-block',
            transition: 'all 0.15s ease',
          }}
        />
        Machine
      </button>
    </div>
  )
}
