import { useEffect, useState } from 'react'
import { useRef } from 'react'
import SwanScene from './SwanScene'
import GraduationScene from './GraduationScene'
import DedicationScene from './DedicationScene'
import FinalScene from './FinalScene'

type Scene = 'closed' | 'opening' | 'lagoon' | 'mist' | 'graduation' | 'dedication-mist' | 'dedication' | 'final'
const artwork = '/images/invitation-doors.png'

function WaxSeal({ opened, onOpen }: { opened: boolean; onOpen: () => void }) {
  return (
    <button className="wax-seal" data-scene-part="wax-seal" onClick={onOpen}
      disabled={opened} aria-label="افتحي الدعوة" aria-expanded={opened} aria-controls="swan-scene">
      <img src="/images/swan-wax-seal.png" alt="" draggable={false} />
    </button>
  )
}

export default function App() {
  const musicRef = useRef<HTMLAudioElement>(null)
  const [scene, setScene] = useState<Scene>('closed')
  const opened = scene !== 'closed'
  const dedication = scene === 'dedication-mist' || scene === 'dedication'

  useEffect(() => {
    const transitions: Partial<Record<Scene, { next: Scene; delay: number }>> = {
      lagoon: { next: 'mist', delay: 3000 },
      mist: { next: 'graduation', delay: 2700 },
      graduation: { next: 'dedication-mist', delay: 11000 },
      'dedication-mist': { next: 'dedication', delay: 2700 },
    }
    const transition = transitions[scene]
    if (!transition) return
    const timer = window.setTimeout(() => setScene(transition.next), transition.delay)
    return () => window.clearTimeout(timer)
  }, [scene])

  useEffect(() => {
    if (scene !== 'dedication') return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const started = performance.now()
    let timer: number | undefined
    const sync = () => {
      window.clearTimeout(timer)
      if (reduced.matches) timer = window.setTimeout(() => setScene('final'), Math.max(0, 18000 - (performance.now() - started)))
    }
    reduced.addEventListener('change', sync)
    sync()
    return () => { window.clearTimeout(timer); reduced.removeEventListener('change', sync) }
  }, [scene])

  return (
    <main className="invitation-scene" aria-label="دعوة تخرج وردية مزينة بالزهور واللؤلؤ">
      <audio ref={musicRef} src="/audio/invitation-music.m4a" preload="auto" />
      <div className="invitation" data-scene={scene} data-open={opened}>
        <SwanScene active={scene === 'opening' || scene === 'lagoon' || scene === 'mist'} />
        <GraduationScene active={scene === 'mist' || scene === 'graduation' || scene === 'dedication-mist'} />
        <DedicationScene active={dedication} onDeparture={() => {
          if (scene === 'dedication') setScene('final')
        }} />
        <FinalScene active={scene === 'final'} />
        <div key={dedication ? 'dedication' : 'graduation'} className="transition-mist"
          data-started={scene === 'mist' || scene === 'graduation' || dedication} aria-hidden="true">
          <i /><i /><i />
        </div>
        <div className="invitation-door invitation-door--left" data-scene-part="left-door" aria-hidden="true">
          <img src={artwork} alt="" draggable={false} fetchPriority="high" />
        </div>
        <div className="invitation-door invitation-door--right" data-scene-part="right-door" aria-hidden="true"
          onAnimationEnd={event => {
            if (event.animationName === 'door-right' && scene === 'opening') setScene('lagoon')
          }}>
          <img src={artwork} alt="" draggable={false} fetchPriority="high" />
        </div>
        <WaxSeal opened={opened} onOpen={() => {
          void musicRef.current?.play().catch(error => {
            console.warn('Unable to play invitation music:', error)
          })
          setScene('opening')
        }} />
      </div>
    </main>
  )
}
