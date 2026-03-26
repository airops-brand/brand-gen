'use client'

import { useEffect } from 'react'
import type { Tool } from '@/lib/tools'

type Props = {
  tool: Tool
  onClose: () => void
}

export default function ToolModal({ tool, onClose }: Props) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        background: '#f8fffa',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          height: '46px',
          borderBottom: '1px solid #d4e8da',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          flexShrink: 0,
        }}
      >
        {/* Back button */}
        <button
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Saans', sans-serif",
            fontSize: '13px',
            color: '#676c79',
            padding: '4px 8px',
            borderRadius: 0,
          }}
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>

        {/* Tool name */}
        <span
          style={{
            fontFamily: "'Saans Mono', monospace",
            fontSize: '13px',
            fontWeight: 500,
            color: '#000d05',
            letterSpacing: '0.02em',
          }}
        >
          {tool.name}
        </span>

        {/* External link */}
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#676c79',
            padding: '4px 8px',
            borderRadius: 0,
          }}
          aria-label={`Open ${tool.name} in new tab`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M9 2h5v5M14 2L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Full iframe */}
      <iframe
        src={tool.url}
        title={tool.name}
        style={{
          flex: 1,
          border: 'none',
          width: '100%',
        }}
      />
    </div>
  )
}
