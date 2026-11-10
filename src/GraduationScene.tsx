import { SwanArtwork } from './SwanScene'

export default function GraduationScene({ active }: { active: boolean }) {
  return (
    <section className="graduation-scene" aria-hidden={!active} aria-label="بجعة وجهها واضح نحو اليسار وتتمايل باستمرار على سطح الماء مع عبارات التخرج">
      <div className="graduation-camera-drift">
      <div className="graduation-camera">
        <img className="graduation-backdrop" src="/images/graduation-lagoon.png" alt="" draggable={false} />
        <div className="graduation-water" aria-hidden="true">
          <img src="/images/graduation-lagoon.png" alt="" draggable={false} />
        </div>
        <div className="graduation-swimmer" aria-hidden="true">
          <div className="swan-wake"><i /><i /><i /></div>
          <div className="graduation-afloat">
            <div className="swan-reflection"><SwanArtwork angled /></div>
            <SwanArtwork angled />
          </div>
        </div>
        <div className="graduation-haze" aria-hidden="true" />
      </div>
      </div>
      <div className="graduation-copy" dir="rtl">
        <p className="graduation-line graduation-line--first">ومن قال أنا لها نالها</p>
        <p className="graduation-line graduation-line--second">وأنا لها وإن أبت رغمًا عنها أتيت بها</p>
        <p className="graduation-line graduation-line--year" dir="ltr">GRADUATE OF 2026</p>
      </div>
    </section>
  )
}
