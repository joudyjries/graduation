import { SwanArtwork } from './SwanScene'

export default function FinalScene({ active }: { active: boolean }) {
  return (
    <section className="final-scene" aria-hidden={!active} aria-label="الخريجة علياء محمد الأخرش">
      <img className="graduation-backdrop" src="/images/graduation-lagoon.png" alt="" draggable={false} />
      <div className="graduation-water" aria-hidden="true"><img src="/images/graduation-lagoon.png" alt="" draggable={false} /></div>
      <div className="final-swimmer" aria-hidden="true">
        <div className="final-facing">
          <div className="swan-reflection"><SwanArtwork angled /></div>
          <div className="swan-wake"><i /><i /><i /></div>
          <SwanArtwork angled />
        </div>
      </div>
      <div className="final-haze" aria-hidden="true" />
      <div className="final-copy">
        <h1 className="final-name-ar" dir="rtl">الخريجة علياء محمد الأخرش</h1>
        <p className="final-name-en" dir="ltr" lang="en">Alai Mohammed Alakhrash</p>
      </div>
    </section>
  )
}
