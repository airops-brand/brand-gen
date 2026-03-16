'use client'

import { useRouter } from 'next/navigation'
import MachineView from '@/components/MachineView'
import ModeToggle from '@/components/ModeToggle'

export default function MachinePage() {
  const router = useRouter()

  return (
    <>
      <MachineView />
      <ModeToggle mode="machine" onToggle={() => router.push('/?skip=true')} />
    </>
  )
}
