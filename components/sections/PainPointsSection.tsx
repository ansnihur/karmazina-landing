'use client';

import { useEffect } from 'react';
import MoonBullet from '@/components/ui/MoonBullet';
import SectionContainer from '@/components/ui/SectionContainer';

const painPoints = [
  'Ти <strong style="color:#fff">залежиш</strong> від чужої думки.',
  'Ти постійно <strong style="color:#fff">сумніваєшся</strong> в собі.',
  'Ти не вмієш <strong style="color:#fff">казати «ні»</strong>, бо боїшся образити інших.',
  'Ти постійно <strong style="color:#fff">критикуєш себе</strong> і легко <strong style="color:#fff">знецінюєш</strong>.',
  'Ти часто <strong style="color:#fff">підлаштовуєшся</strong> під інших.',
  'Ти багато віддаєш іншим і <strong style="color:#fff">вигораєш</strong>.',
  '<strong style="color:#fff">Внутрішній критик</strong> голосніший за твій власний голос.',
  'Ти не вмієш приймати компліменти й живеш у режимі <strong style="color:#fff">«я недостатня»</strong>.',
  'Ти розумієш, що «себе треба любити», але <strong style="color:#fff">не знаєш</strong> як це робити на практиці.',
];

const FingerprintIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF9ED8" strokeWidth="1.6" strokeLinecap="round">
    <path d="M4.8 9.4A8 8 0 0 1 12 5a8 8 0 0 1 5.5 2.2"/>
    <path d="M6.4 13c.2-3 2.4-5.3 5.6-5.3 1 0 1.9.2 2.7.7"/>
    <path d="M8.6 8.7A5 5 0 0 1 17 12c0 1.1 0 2.6-.3 3.8"/>
    <path d="M12 11a1.5 1.5 0 0 1 1.5 1.5c0 2-.4 3.6-1 4.7"/>
    <path d="M9.4 16.6c.5-1.2.7-2.5.6-3.9"/>
  </svg>
);

export default function PainPointsSection() {
  useEffect(() => {
    const moon = document.getElementById('painMoon');
    if (!moon) return;
    const onScroll = () => {
      const deg = window.scrollY * 0.12;
      moon.style.transform = `translate(-50%, -50%) rotate(${deg}deg)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="pain-section" style={{ position: 'relative', zIndex: 2, background: '#28201E', marginTop: 0 }}>
      <SectionContainer className="pain-inner">

        {/* Заголовок */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 54px)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: 'clamp(11px, 1vw, 13px)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#FF66C4',
            fontWeight: 700,
            marginBottom: 18,
          }}>впізнаєш себе?</span>
          <h2 style={{
            fontFamily: 'var(--font-nyght)',
            fontWeight: 400,
            fontSize: 'clamp(32px, 4vw, 46px)',
            lineHeight: 1.08,
            color: '#FBEFF6',
          }}>Цей курс для тебе, якщо…</h2>
        </div>

        {/* Грід карток */}
        <div className="pain-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(10px, 1.5vw, 16px)',
        }}>
          {painPoints.map((text, i) => (
            <div key={i} className={`pain-card${i === 6 ? ' pain-card-hide-mobile' : ''}`} style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.16)',
              borderRadius: 18,
              padding: 'clamp(16px, 2vw, 22px)',
            }}>
              <MoonBullet />
              <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', lineHeight: 1.5, color: 'rgba(247,233,241,0.92)', marginTop: 6 }}
                dangerouslySetInnerHTML={{ __html: text }} />
            </div>
          ))}
        </div>

        {/* Цитата з місяцем */}
        <div className="pain-quote-wrap" style={{
          position: 'relative',
          width: '100%',
          marginTop: 'clamp(40px, 6vw, 80px)',
          minHeight: 'clamp(280px, 44vw, 580px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Місяць */}
          <img
            id="painMoon"
            src="/images/moon.png"
            alt=""
            loading="lazy"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 'clamp(280px, 44vw, 580px)',
              height: 'auto',
              zIndex: 0,
              pointerEvents: 'none',
              opacity: 0.9,
            }}
          />

          <div className="pain-quote-inner" style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            display: 'flex',
            gap: 'clamp(16px, 3vw, 28px)',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            padding: '0 16px',
          }}>
            {/* Ліва цитата */}
            <div style={{ position: 'relative', width: '50%', padding: '16px 10px' }}>
              <div style={{
                position: 'absolute', inset: '-26px -30px',
                background: 'radial-gradient(ellipse at 45% 50%,rgba(20,12,18,.88),rgba(20,12,18,.4) 62%,rgba(20,12,18,0) 82%)',
                filter: 'blur(10px)',
              }} />
              <span style={{ position: 'absolute', top: 22, left: 10, zIndex: 1, fontFamily: 'Georgia,serif', fontSize: 60, lineHeight: 0, color: '#FF66C4' }}>“</span>
              <p style={{ position: 'relative', zIndex: 1, marginTop: 10, fontSize: 'clamp(15px, 1.5vw, 19px)', lineHeight: 1.7, color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,.7)', textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-nyght)', fontWeight: 400, fontSize: 'clamp(22px, 2.5vw, 32px)', lineHeight: 1.1, display: 'inline' }}>Любити себе — <em style={{ color: '#FF66C4', fontStyle: 'italic' }}>база</em></span>{' '} <br></br> справді база для кожної жінки, яка втомилася бути для всіх, окрім себе: мовчати, погоджуватись на менше, терпіти, пояснювати, сумніватися, критикувати себе.
              </p>
            </div>

            {/* Права картка */}
            <div style={{
              position: 'relative',
              flex: '0 0 auto',
              width: 'calc((min(1180px, 100vw) - 2 * clamp(20px, 4vw, 48px) - 2 * clamp(10px, 1.5vw, 16px)) / 3)',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 24,
              padding: 'clamp(20px, 2.5vw, 30px) clamp(18px, 2vw, 28px) clamp(30px, 4vw, 42px)',
            }}>
              <p style={{ fontSize: 'clamp(14px, 1.3vw, 17px)', lineHeight: 1.65, color: '#fff', fontWeight: 700, textAlign: 'center' }}>
                Цей курс для жінки, яка прагне нарешті відчути себе{' '}
                <strong style={{ color: '#FF66C4' }}>цінною і впевненою</strong><span style={{ color: '#FF66C4' }}>.</span>
              </p>
              <span className="pain-quote-close" style={{ position: 'absolute', bottom: -22, right: 18, fontFamily: 'Georgia,serif', fontSize: 64, lineHeight: 1, color: '#FF66C4' }}>”</span>
            </div>
          </div>
        </div>

        {/* CTA кнопка */}
        <div style={{ textAlign: 'center', marginTop: 'clamp(48px, 6vw, 72px)' }}>
          <a href="#price" style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: '#28201E',
            color: '#fff',
            border: '1px solid rgba(255,102,196,0.5)',
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            fontWeight: 400,
            padding: 'clamp(14px, 1.5vw, 17px) clamp(28px, 3vw, 38px)',
            borderRadius: 100,
            animation: 'pulseGlow 3s ease-in-out infinite',
          }}>
            <FingerprintIcon />
            Забрати свою базу
          </a>
        </div>
      </SectionContainer>

      <style>{`
        @media (min-width: 768px) and (max-width: 1024px) {
          .pain-card-hide-mobile {
            display: none !important;
          }
          .pain-quote-close {
            bottom: -32px !important;
          }
        }
        @media (max-width: 767px),
        (max-width: 1024px) and (orientation: portrait) {
          .pain-section {
            padding-top: 64px !important;
          }
          .pain-inner {
            padding-top: 0 !important;
          }
          .pain-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
          }
          .pain-card {
            padding: 12px 14px !important;
            border-radius: 14px !important;
          }
          .pain-card .moon-bullet {
            width: 14px !important;
            height: 14px !important;
            margin-bottom: 6px !important;
          }
          .pain-card p {
            font-size: 12px !important;
            line-height: 1.4 !important;
          }
          .pain-quote-wrap {
            min-height: 320px !important;
            margin-top: 32px !important;
          }
          #painMoon {
            width: 320px !important;
          }
          .pain-quote-inner {
            flex-direction: column !important;
            align-items: center !important;
            gap: 20px !important;
            padding: 0 8px !important;
          }
          .pain-quote-inner > div {
            flex: none !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .pain-quote-inner > div:first-child {
            text-align: center !important;
          }
        }
        @media (max-width: 767px) {
          .pain-grid > .pain-card:last-child {
            grid-column: 1 / -1 !important;
            justify-self: stretch !important;
            width: 100% !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
          .pain-quote-inner > div:nth-child(2) {
            align-self: center !important;
            max-width: 360px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .pain-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .pain-quote-inner {
            justify-content: space-between !important;
            flex-direction: row !important;
          }
          .pain-quote-inner > div:last-child {
            margin-left: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
