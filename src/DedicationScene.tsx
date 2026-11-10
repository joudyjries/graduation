import type { CSSProperties } from 'react'
import { SwanArtwork } from './SwanScene'

const delayed = (seconds: number) => ({ '--line-delay': `${seconds}s` }) as CSSProperties

export default function DedicationScene({ active, onDeparture }: { active: boolean; onDeparture: () => void }) {
  return (
    <section className="dedication-scene" aria-hidden={!active} aria-label="مشهد التخرج من قسم الأشعة مع بجعة تتمايل برفق وتسبح ثم تبتعد">
      <img className="graduation-backdrop" src="/images/graduation-lagoon.png" alt="" draggable={false} />
      <div className="graduation-water" aria-hidden="true"><img src="/images/graduation-lagoon.png" alt="" draggable={false} /></div>
      <div className="dedication-swimmer" aria-hidden="true" onAnimationEnd={event => {
        if (event.target === event.currentTarget && event.animationName === 'dedication-voyage') onDeparture()
      }}>
        <div className="swan-wake"><i /><i /><i /></div>
        <div className="dedication-afloat">
          <div className="swan-reflection"><SwanArtwork angled /></div>
          <SwanArtwork angled />
        </div>
      </div>
      <div className="dedication-petals" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => <i key={i} style={{ '--i': i, left: `${12 + i * 14}%` } as CSSProperties} />)}
      </div>
      <div className="dedication-copy" dir="rtl">
        <div className="dedication-thanks">
          <p className="dedication-line" style={delayed(.5)}>الحمد لله الذي ما تم سعي ولا ختم جهد</p>
          <p className="dedication-line" style={delayed(1.8)}>إلا بفضله تم بحمد الله وكرمه</p>
        </div>
        <h2 className="dedication-line dedication-title" style={delayed(3.2)}>تخـرجي</h2>
        <div className="dedication-education">
          <p className="dedication-line" style={delayed(4.9)}>مـن قســم الأشعــة</p>
          <p className="dedication-line" style={delayed(6)}>كليـة التقنيـة الطبيـة</p>
          <p className="dedication-line" style={delayed(7.1)}>جامعــة صبراتــة</p>
        </div>
        <div className="dedication-prayer">
          <p className="dedication-line" style={delayed(9.1)}>فاللهم انفعني بما علمتني وعلمني</p>
          <p className="dedication-line" style={delayed(10.6)}>ما ينفعني وزدني علمًا</p>
        </div>
      </div>
    </section>
  )
}

