'use client';

import MoonBullet from '@/components/ui/MoonBullet';

const FingerprintIcon = ({ stroke = '#FF9ED8' }: { stroke?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round">
    <path d="M4.8 9.4A8 8 0 0 1 12 5a8 8 0 0 1 5.5 2.2"/>
    <path d="M6.4 13c.2-3 2.4-5.3 5.6-5.3 1 0 1.9.2 2.7.7"/>
    <path d="M8.6 8.7A5 5 0 0 1 17 12c0 1.1 0 2.6-.3 3.8"/>
    <path d="M12 11a1.5 1.5 0 0 1 1.5 1.5c0 2-.4 3.6-1 4.7"/>
    <path d="M9.4 16.6c.5-1.2.7-2.5.6-3.9"/>
  </svg>
);

const basicFeatures = [
  'Лекції в закритому телеграм-каналі',
  'Домашні завдання у зручному PDF-форматі',
  'Потужні практичні інструменти на кожен день',
  'Авторська космічна медитація по роботі з внутрішнім критиком «Пошли внутрішнього критика на сині лани»',
];

const basicValues = [
  'Ти отримаєш готову систему роботи над собою, яка трансформує твоє мислення',
  'Щоденні практики допоможуть закріпити нове мислення та самоцінність',
  'Ти навчишся слухати себе та підтримувати себе в кожному виборі',
];

const cosmicFeatures = [
  'Лекції в закритому телеграм-каналі',
  'Домашні завдання у зручному PDF-форматі',
  'Потужні практичні інструменти на кожен день',
  'Авторська космічна медитація по роботі з внутрішнім критиком «Пошли внутрішнього критика на сині лани»',
  'Індивідуальна коуч-сесія зі мною, щоб закріпити результат.',
];

const cosmicValues = [
  'Ти не просто проходиш курс — ти отримуєш персональну підтримку від мене для максимальної ефективності',
  'Коуч-сесія допоможе закріпити зміни, щоб вони залишилися назавжди',
  'Ти отримаєш відповіді на свої запитання',
];

export default function PricingSection() {
  return (
    <section id="price" style={{ position: 'relative', zIndex: 2, background: '#FCFAFB', overflow: 'hidden' }}>

      {/* Місяць декор */}
      <img className="pricing-moon-desktop" src="/images/moon.png" alt="" loading="lazy" style={{ position: 'absolute', right: -280, top: '50%', transform: 'translateY(-50%)', zIndex: 0, width: 620, height: 620, objectFit: 'contain', opacity: 0.4, filter: 'drop-shadow(0 0 60px rgba(255,158,216,0.3))', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1080, margin: '0 auto', padding: 'clamp(64px, 8vw, 100px) clamp(20px, 4vw, 48px)' }}>

        {/* Заголовок */}
        <div style={{ position: 'relative', textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 54px)' }}>

          {/* Блоби, прикріплені до заголовка (позиція як на laptop 1024) */}
          <img className="pricing-blob-1" src="/images/blobs/blob-1.png" loading="lazy" style={{
            position: 'absolute', right: 0, top: -172,
            width: 320, height: 'auto', opacity: 0.7,
            animation: 'blobC 15s ease-in-out infinite',
            pointerEvents: 'none', zIndex: 0
          }} />

          <img className="pricing-blob-3" src="/images/blobs/blob-3.png" loading="lazy" style={{
            position: 'absolute', right: 159, top: -62,
            width: 260, height: 'auto', opacity: 0.65,
            animation: 'blobA 13s ease-in-out infinite',
            pointerEvents: 'none', zIndex: 0
          }} />

          <span style={{ display: 'inline-block', fontSize: 'clamp(11px, 1vw, 13px)', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#FF66C4', fontWeight: 700, marginBottom: 18 }}>обери свій <span style={{ fontFamily: 'var(--font-montserrat)' }}>ф</span>ормат</span>
          <h2 style={{ fontFamily: 'var(--font-nyght)', fontWeight: 400, fontSize: 'clamp(32px, 4vw, 46px)', lineHeight: 1.08, color: '#28201E' }}>Тарифи</h2>
        </div>

        {/* Грід тарифів */}
        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(16px, 2vw, 26px)', alignItems: 'stretch' }}>

          {/* Базовий */}
          <div style={{ position: 'relative' }}>

            {/* Блоб, прикріплений до базового тарифу */}
            <div style={{ position: 'absolute', left: -190, top: -190, width: 380, transform: 'rotate(55deg)', zIndex: 0, pointerEvents: 'none' }}>
              <img src="/images/blobs/blob-5.png" loading="lazy" style={{
                width: 380, height: 'auto', opacity: 0.7,
                animation: 'blobB 18s ease-in-out infinite',
                pointerEvents: 'none'
              }} />
            </div>

          <div className="pricing-card" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', border: '1px solid rgba(120,60,90,0.12)', borderRadius: 30, padding: 'clamp(32px, 4vw, 46px) clamp(24px, 3vw, 38px) clamp(28px, 3vw, 38px)', boxShadow: '0 20px 50px rgba(120,60,90,0.12)' }}>

            {/* Бейдж */}
            <div className="pricing-badge" style={{ position: 'absolute', top: -13, left: 30, zIndex: 3, transform: 'rotate(-5deg)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: '#FF66C4', padding: '8px 16px', borderRadius: 7, fontWeight: 700, boxShadow: '0 8px 18px rgba(255,102,196,0.4)', whiteSpace: 'nowrap' }}>обирають частіше</div>

            {/* Назва */}
            <div className="pricing-title" style={{ textAlign: 'center', margin: '34px 0 30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 8 }}>
                <MoonBullet size={22} />
                <h3 style={{ fontFamily: 'var(--font-nyght)', fontWeight: 400, fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: '0.04em', color: '#28201E' }}>Базовий</h3>
              </div>
              <div style={{ width: 64, height: 1, background: 'rgba(120,60,90,0.2)', margin: '0 auto' }} />
            </div>

            {/* Фічі */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13, flex: 1 }}>
              {basicFeatures.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <MoonBullet size={14} />
                  <span style={{ fontSize: 'clamp(13px, 1.1vw, 15px)', color: '#3a3338', lineHeight: 1.45 }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Цінність */}
            <div style={{ marginTop: 22, paddingTop: 20, borderTop: '1px solid rgba(255,102,196,0.25)' }}>
              <div style={{ fontSize: 'clamp(10px, 0.9vw, 13px)', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF66C4', fontWeight: 700, marginBottom: 12 }}>Цінність</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {basicValues.map((v, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <MoonBullet size={12} />
                    <span style={{ fontSize: 'clamp(12px, 1vw, 14.5px)', color: '#5a5258', lineHeight: 1.5 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ціна і кнопка */}
            <div className="pricing-price" style={{ marginTop: 'auto', paddingTop: 34, textAlign: 'center' }}>
              <div style={{ fontSize: 20, color: '#9a9298', textDecoration: 'line-through', lineHeight: 1 }}>999 грн</div>
              <div style={{ fontFamily: 'var(--font-nyght)', fontSize: 'clamp(44px, 5vw, 62px)', color: '#28201E', lineHeight: 1.05, marginTop: 4 }}>699 грн</div>
              <a href="http://secure.wayforpay.com/payment/s06ca75389fcd" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 22, background: '#28201E', color: '#fff', border: '1px solid #28201E', fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 400, padding: '16px', borderRadius: 100, boxShadow: '0 14px 34px rgba(40,32,30,0.25)', animation: 'pulseGlow 2s ease-in-out infinite' }}>
                <FingerprintIcon />
                Обрати базовий
              </a>
            </div>
          </div>
          </div>

          {/* Космічний+ */}
          <div style={{ position: 'relative' }}>

            {/* Місяць декор (лише в колонковому вигляді, позаду цієї картки) */}
            <img className="pricing-moon-mobile" src="/images/moon.png" alt="" loading="lazy" style={{ display: 'none', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, width: 780, height: 780, objectFit: 'contain', opacity: 0.4, filter: 'drop-shadow(0 0 60px rgba(255,158,216,0.3))', pointerEvents: 'none' }} />

          <div className="pricing-card" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg,#5a2a42 0%,#3a2030 45%,#241820 100%)', border: '1px solid rgba(255,102,196,0.45)', borderRadius: 30, padding: 'clamp(32px, 4vw, 46px) clamp(24px, 3vw, 38px) clamp(28px, 3vw, 38px)', boxShadow: '0 28px 64px rgba(0,0,0,0.35), 0 0 60px rgba(255,102,196,0.22)' }}>

            {/* Бейдж */}
            <div className="pricing-badge" style={{ position: 'absolute', top: -13, right: 30, zIndex: 3, transform: 'rotate(5deg)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: '#FF66C4', padding: '8px 16px', borderRadius: 7, fontWeight: 700, boxShadow: '0 8px 18px rgba(255,102,196,0.5)', whiteSpace: 'nowrap' }}>лише 30 місць, встигни!</div>

              {/* Назва */}
              <div className="pricing-title" style={{ textAlign: 'center', margin: '34px 0 30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 8 }}>
                  <MoonBullet size={22} />
                  <h3 style={{ fontFamily: 'var(--font-nyght)', fontWeight: 400, fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: '0.04em', color: '#FBEFF6' }}>Космічний+</h3>
                </div>
                <div style={{ width: 64, height: 1, background: 'rgba(255,102,196,0.35)', margin: '0 auto' }} />
              </div>

              {/* Фічі */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 13, flex: 1 }}>
                {cosmicFeatures.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <MoonBullet size={14} />
                    <span style={{ fontSize: 'clamp(13px, 1.1vw, 15px)', color: 'rgba(247,233,241,0.92)', lineHeight: 1.45 }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Цінність */}
              <div style={{ marginTop: 22, paddingTop: 20, borderTop: '1px solid rgba(255,102,196,0.3)' }}>
                <div style={{ fontSize: 'clamp(10px, 0.9vw, 13px)', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF66C4', fontWeight: 700, marginBottom: 12 }}>Цінність</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {cosmicValues.map((v, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <MoonBullet size={12} />
                      <span style={{ fontSize: 'clamp(12px, 1vw, 14.5px)', color: 'rgba(247,233,241,0.78)', lineHeight: 1.5 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ціна і кнопка */}
              <div className="pricing-price" style={{ marginTop: 'auto', paddingTop: 34, textAlign: 'center' }}>
                <div style={{ fontSize: 20, color: 'rgba(247,233,241,0.45)', textDecoration: 'line-through', lineHeight: 1 }}>1699 грн</div>
                <div style={{ fontFamily: 'var(--font-nyght)', fontSize: 'clamp(44px, 5vw, 62px)', color: '#fff', lineHeight: 1.05, marginTop: 4 }}>1299 грн</div>
                <a href="http://secure.wayforpay.com/payment/s06ca75389fcd" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 22, background: '#FF66C4', color: '#fff', border: '1px solid rgba(255,102,196,0.5)', fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 400, padding: '16px', borderRadius: 100, boxShadow: '0 14px 36px rgba(255,102,196,0.5)', animation: 'pulseGlow 2s ease-in-out infinite' }}>
                  <FingerprintIcon stroke="#fff" />
                  Обрати космічний+
                </a>
              </div>
          </div>
          </div>
        </div>
      </div>

      <style>{`
@media (min-width: 768px) and (max-width: 1024px) {
          .pricing-blob-1 {
            right: -40px !important;
          }
          .pricing-blob-3 {
            right: 100px !important;
          }
        }
@media (max-width: 767px) {
          .pricing-blob-1 {
            display: none !important;
          }
          .pricing-blob-3 {
            right: -60px !important;
          }
          .pricing-moon-desktop {
            display: none !important;
          }
          .pricing-moon-mobile {
            display: block !important;
          }
          .pricing-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: none !important;
            row-gap: 16px !important;
          }
          .pricing-card {
            display: flex !important;
            flex-direction: column !important;
            grid-row: auto !important;
            border-radius: 20px !important;
            padding: 20px 18px 18px !important;
          }
          .pricing-badge {
            top: -10px !important;
            left: 18px !important;
            right: auto !important;
            transform: rotate(-5deg) !important;
            font-size: 10px !important;
            padding: 6px 12px !important;
          }
          .pricing-card h3 {
            font-size: 26px !important;
          }
          .pricing-title {
            margin: 24px 0 18px !important;
          }
          .pricing-price {
            margin-top: auto !important;
            padding-top: 18px !important;
            text-align: center !important;
          }
          .pricing-price > div:first-child {
            font-size: 15px !important;
          }
          .pricing-price > div:nth-child(2) {
            font-size: 36px !important;
          }
          .pricing-price a {
            margin-top: 14px !important;
            padding: 13px 16px !important;
            font-size: 14px !important;
            display: flex !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
    </section>
  );
}
