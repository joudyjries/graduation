import type { CSSProperties } from 'react'

export function SwanArtwork({ angled = false }: { angled?: boolean }) {
  const source = angled ? '/images/diagonal-swan.png' : '/images/floral-swan.png'
  return (
    <div className={`swan-art${angled ? ' swan-art--angled' : ''}`}>
      <img className="swan-body" src={source} alt="" draggable={false} />
      <div className="swan-head">
        <img src={source} alt="" draggable={false} />
        <span className="hat-tassel"><span className="tassel-cord" /><span className="tassel-knot" /><span className="tassel-fringe" /></span>
      </div>
    </div>
  )
}

export default function SwanScene({ active }: { active: boolean }) {
  return (
    <section id="swan-scene" className="swan-scene" aria-hidden={!active}
      aria-label="بجعة مزينة بالزهور ترتدي قبعة تخرج وتسبح على مياه وردية متموجة">
      <svg className="scene-filters" aria-hidden="true">
        <defs>
          <filter id="water-flow" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.075" numOctaves="2" seed="8" result="noise">
              <animate attributeName="baseFrequency" values="0.012 0.075;0.016 0.09;0.012 0.075" dur="12s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="reflection-ripple" x="-15%" y="-10%" width="130%" height="120%">
            <feTurbulence type="turbulence" baseFrequency="0.008 0.12" numOctaves="1" seed="4" result="ripples">
              <animate attributeName="baseFrequency" values="0.008 0.12;0.012 0.16;0.008 0.12" dur="8s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="ripples" scale="15" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="0.4 0.7" />
          </filter>
        </defs>
      </svg>
      <div className="lagoon-content">
        <img className="lagoon-backdrop" src="/images/rose-lagoon.png" alt="" draggable={false} />
        <div className="water-surface" aria-hidden="true">
          <img src="/images/rose-lagoon.png" alt="" draggable={false} />
        </div>
        <div className="water-glints" aria-hidden="true" />
        <div className="swan-swim" aria-hidden="true">
          <div className="swan-heading">
            <div className="swan-reflection"><SwanArtwork /></div>
            <div className="swan-wake"><i /><i /><i /></div>
            <SwanArtwork />
          </div>
        </div>
        <div className="scene-sparkles" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => (
            <i key={i} style={{ '--i': i, left: `${8 + (i * 29) % 86}%`, top: `${12 + (i * 17) % 70}%` } as CSSProperties} />
          ))}
        </div>
      </div>
    </section>
  )
}
