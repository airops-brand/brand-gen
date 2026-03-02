'use client'

import { useState, useEffect, useRef } from 'react'
import Lottie, { type LottieRefCurrentProps } from 'lottie-react'

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [animationData, setAnimationData] = useState<object | null>(null)
  const [visible, setVisible] = useState(true)
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    fetch('/loading-animation.json')
      .then((r) => r.json())
      .then(setAnimationData)
  }, [])

  const handleComplete = () => {
    setVisible(false)
    onDone()
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#F8FFFA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {animationData && (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={true}
          onComplete={handleComplete}
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </div>
  )
}
