'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { tools, allTags, type Tool, type ToolTag } from '@/lib/tools'
import ToolCard from '@/components/ToolCard'
import ToolModal from '@/components/ToolModal'
import SplashScreen from '@/components/SplashScreen'
import TerminalSplash from '@/components/TerminalSplash'
import HeroHeader from '@/components/HeroHeader'
import GateScreen from '@/components/GateScreen'
import ModeToggle from '@/components/ModeToggle'
import Header from '@/components/Header'

type Phase = 'gate' | 'lottie' | 'terminal' | 'main'

export default function Home() {
  return (
    <Suspense>
      <HomeInner />
    </Suspense>
  )
}

function HomeInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTag, setActiveTag] = useState<ToolTag | 'All'>('All')
  const [activeTool, setActiveTool] = useState<Tool | null>(null)
  const [phase, setPhase] = useState<Phase>(searchParams.get('skip') ? 'main' : 'gate')

  const filtered = activeTag === 'All' ? tools : tools.filter((t) => t.tag === activeTag)

  return (
    <>
      {/* Header — hidden in machine mode and gate */}
      {(phase === 'lottie' || phase === 'terminal' || phase === 'main') && <Header />}

      {/* Gate */}
      {phase === 'gate' && (
        <GateScreen
          onHuman={() => setPhase('lottie')}
          onMachine={() => router.push('/machine')}
        />
      )}

      {/* Human path splashes */}
      {phase === 'lottie' && <SplashScreen onDone={() => setPhase('terminal')} />}
      {phase === 'terminal' && <TerminalSplash onDone={() => setPhase('main')} />}

      {/* Hero (rendered early so it's ready; hidden until main) */}
      <HeroHeader animate={phase === 'main'} />

      {/* Main content */}
      {phase === 'main' && (
        <main style={{ padding: '32px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Filter pills */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
            {(['All', ...allTags] as const).map((tag) => {
              const active = activeTag === tag
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  style={{
                    fontFamily: "'Saans Mono', monospace",
                    fontSize: '11px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    padding: '5px 12px',
                    borderRadius: 0,
                    border: `1px solid ${active ? '#d4e8da' : '#d4e8da'}`,
                    background: active ? '#EEFF8C' : '#fff',
                    color: active ? '#000d05' : '#676c79',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {tag}
                </button>
              )
            })}
          </div>

          {/* Tool grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '16px',
            }}
          >
            {filtered.map((tool) => (
              <ToolCard key={tool.id} tool={tool} onClick={setActiveTool} />
            ))}
          </div>

          {/* Modal */}
          {activeTool && (
            <ToolModal tool={activeTool} onClose={() => setActiveTool(null)} />
          )}
        </main>
      )}

      {/* Sticky toggle — only visible once past splashes */}
      {phase === 'main' && (
        <ModeToggle mode="human" onToggle={() => router.push('/machine')} />
      )}
    </>
  )
}
