'use client'

import { useEffect, useState } from 'react'

export default function MachineView() {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    fetch('/brand-skill.md')
      .then((r) => r.text())
      .then(setContent)
  }, [])

  return (
    <pre style={{ all: 'revert', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
      {content}
    </pre>
  )
}
