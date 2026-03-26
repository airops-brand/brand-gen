'use client'

import { useState } from 'react'
import type { Tool } from '@/lib/tools'

// Scale factor: card preview area is ~336px wide, tools are 1200px wide
// 336/1200 ≈ 0.28
const SCALE = 0.28
const TOOL_WIDTH = 1200
const TOOL_HEIGHT = 900
const PREVIEW_WIDTH = Math.round(TOOL_WIDTH * SCALE)
const PREVIEW_HEIGHT = Math.round(TOOL_HEIGHT * SCALE)

type Props = {
  tool: Tool
  onClick: (tool: Tool) => void
}

export default function ToolCard({ tool, onClick }: Props) {
  const [hovered, setHovered] = useState(false)
  const isLive = tool.status === 'live'

  return (
    <div
      role={isLive ? 'button' : undefined}
      tabIndex={isLive ? 0 : undefined}
      onClick={() => isLive && onClick(tool)}
      onKeyDown={(e) => {
        if (isLive && (e.key === 'Enter' || e.key === ' ')) onClick(tool)
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered && isLive ? '#008c44' : '#d4e8da'}`,
        background: '#fff',
        cursor: isLive ? 'pointer' : 'default',
        transition: 'border-color 0.15s ease',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Iframe preview area */}
      <div
        style={{
          width: PREVIEW_WIDTH,
          height: PREVIEW_HEIGHT,
          overflow: 'hidden',
          position: 'relative',
          background: tool.bgColor,
          flexShrink: 0,
        }}
      >
        {isLive ? (
          <iframe
            src={tool.url}
            title={tool.name}
            tabIndex={-1}
            style={{
              width: TOOL_WIDTH,
              height: TOOL_HEIGHT,
              transform: `scale(${SCALE})`,
              transformOrigin: 'top left',
              pointerEvents: 'none',
              border: 'none',
            }}
          />
        ) : (
          /* Coming soon overlay */
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(248, 255, 250, 0.85)',
            }}
          >
            <span
              style={{
                fontFamily: "'Saans Mono', monospace",
                fontSize: '11px',
                fontWeight: 500,
                color: '#000d05',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                background: '#EEFF8C',
                border: '1px solid #d4e8da',
                borderRadius: 0,
                padding: '4px 10px',
              }}
            >
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Card footer */}
      <div style={{ padding: '12px 14px 14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {/* Tag pill */}
        <span
          style={{
            display: 'inline-block',
            fontFamily: "'Saans Mono', monospace",
            fontSize: '10px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: '#000d05',
            background: '#EEFF8C',
            borderRadius: 0,
            padding: '2px 7px',
            alignSelf: 'flex-start',
          }}
        >
          {tool.tag}
        </span>

        {/* Tool name */}
        <p
          style={{
            fontFamily: "'Saans', sans-serif",
            fontSize: '15px',
            fontWeight: 500,
            color: '#000d05',
            margin: 0,
          }}
        >
          {tool.name}
        </p>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Saans', sans-serif",
            fontSize: '13px',
            fontWeight: 400,
            color: '#676c79',
            margin: 0,
            lineHeight: '1.4',
          }}
        >
          {tool.description}
        </p>
      </div>
    </div>
  )
}
