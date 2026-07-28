'use client';

import { useEffect, useRef } from 'react';
import MoonBullet from '@/components/ui/MoonBullet';

const results = [
  'Ти перестанеш оцінювати себе через чужу думку.',
  'Ти почнеш діяти впевнено і <strong style="color:#28201E">в напрямку до себе</strong>.',
  'Ти навчишся спокійно відмовляти без переживань.',
  'Ти почнеш діяти зі стану цінності до себе.',
  'Ти будеш знати свої межі і вміти їх відстоювати.',
  'Ти навчишся обирати себе, а не підлаштовуватись під інших.',
  'Ти будеш чути свої справжні бажання і йти за ними.',
  '<strong style="color:#28201E">Ти відчуєш себе розкішною жінкою.</strong>',
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

export default function ResultsSection() {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bubbles = chatRef.current?.querySelectorAll('.chat-bubble');
    if (!bubbles) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay || '0';
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateX(0)';
            }, parseInt(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    bubbles.forEach((bubble) => observer.observe(bubble));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ position: 'relative', zIndex: 2, background: '#FCFAFB', overflow: 'hidden' }}>

      <div className="results-grid" style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1100,
        margin: '0 auto',
        padding: 'clamp(64px, 8vw, 100px) clamp(20px, 4vw, 48px)',
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 'clamp(32px, 5vw, 64px)',
        alignItems: 'start',
      }}>

        {/* PNG блоби */}
        <div style={{
          position: 'absolute',
          top: -50,
          left: -90,
          animation: 'blobB 19s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: -1,
        }}>
          <img src="/images/blobs/blob-5.png" loading="lazy" style={{
            width: 340,
            height: 'auto',
            opacity: 0.7,
            transform: 'rotate(60deg)',
            display: 'block',
          }} />
        </div>
        <img src="/images/blobs/blob-1.png" loading="lazy" style={{ position: 'absolute', top: 120, left: 200, width: 160, height: 'auto', opacity: 0.6, animation: 'blobC 14s ease-in-out infinite', pointerEvents: 'none', zIndex: -1 }} />

        {/* Ліва колонка */}
        <div>
          <span style={{
            display: 'inline-block',
            fontSize: 'clamp(11px, 1vw, 13px)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#FF66C4',
            fontWeight: 700,
            marginBottom: 20,
          }}>що буде після?</span>

          <h2 style={{
            fontFamily: 'var(--font-nyght)',
            fontWeight: 400,
            fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: 1.05,
            color: '#28201E',
          }}>Жінка, якою ти станеш</h2>

          <p style={{
            marginTop: 24,
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            lineHeight: 1.7,
            color: '#28201E',
          }}>
            Твоя глибинна жіноча сутність прагне проявитись, сяяти, розквітати і не боятися бути собою.{' '}<br></br>
            <strong style={{ color: '#FF66C4' }}>Відчуй це…</strong>
          </p>

          <div className="results-cta-wrap" style={{ position: 'relative', marginTop: 34 }}>
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
              Іду в напрямку до себе
            </a>
            <img src="/images/blobs/blob-4.png" loading="lazy" style={{
              position: 'absolute',
              bottom: -120,
              right: -90,
              width: 250,
              height: 'auto',
              opacity: 0.7,
              pointerEvents: 'none',
              zIndex: -1,
              animation: 'blobA 17s ease-in-out infinite',
            }} />
          </div>
        </div>

        {/* Права колонка — список результатів */}
        <div className="results-list" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {results.map((text, i) => (
            <div key={i} className="result-card" style={{
              display: 'flex',
              gap: 16,
              alignItems: 'center',
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.7)',
              borderRadius: 16,
              padding: 'clamp(12px, 1.5vw, 16px) clamp(16px, 2vw, 22px)',
              boxShadow: '0 10px 30px rgba(120,60,90,0.08)',
            }}>
              <MoonBullet />
              <span
                style={{ fontSize: 'clamp(13px, 1.2vw, 16px)', color: '#3a3338', lineHeight: 1.5 }}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px),
        (max-width: 1024px) and (orientation: portrait) {
          .results-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .results-list {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
          }
          .result-card {
            display: block !important;
            padding: 12px 14px !important;
            border-radius: 14px !important;
          }
          .result-bullet {
            width: 14px !important;
            height: 14px !important;
            margin-bottom: 6px !important;
          }
          .result-card span {
            font-size: 12px !important;
            line-height: 1.4 !important;
          }
          .results-cta-wrap {
            text-align: center !important;
          }
        }

        @media (max-width: 767px) {
          .chat-bubble {
            width: 78%;
          }
          .bubble-wrap-left,
          .bubble-wrap-right {
            width: 100% !important;
            display: flex;
          }
          .bubble-wrap-left {
            justify-content: flex-start;
          }
          .bubble-wrap-right {
            justify-content: flex-end;
          }
          .bubble-blob3 {
            left: -120px !important;
          }
          .bubble-blob1 {
            bottom: -180px !important;
            right: -140px !important;
          }
          .bubble-blob5-msg2 {
            top: -120px !important;
            right: -50px !important;
          }
          .bubble-blob5-msg1 {
            right: calc(72.73vw - 192.73px) !important;
          }
        }
      `}</style>

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1180,
        margin: '0 auto',
        padding: '0 clamp(20px, 4vw, 48px)',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-nyght)',
          fontWeight: 400,
          fontSize: 'clamp(28px, 3.5vw, 40px)',
          lineHeight: 1.15,
          color: '#28201E',
          marginBottom: 'clamp(32px, 5vw, 48px)',
        }}>Цей курс точно для мене?…</h2>
      </div>

      <div ref={chatRef} style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1180,
        margin: '0 auto',
        padding: '0 clamp(20px, 4vw, 48px) clamp(64px, 8vw, 100px)',
      }}>


        {/* Рядок 1 */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 16 }}>
          {/* Ліва бульбашка */}
          <div className="bubble-wrap-left" style={{ position: 'relative', width: '48%' }}>
            <div className="chat-bubble" data-delay="0" style={{
              background: 'linear-gradient(135deg, #6b2d4a 0%, #3a2030 100%)',
              border: '1px solid rgba(255,102,196,0.3)',
              borderRadius: '18px 18px 18px 4px',
              padding: 'clamp(12px, 1.5vw, 20px) clamp(14px, 2vw, 24px)',
              color: '#fff',
              fontSize: 'clamp(13px, 1.2vw, 16px)',
              lineHeight: 1.6,
              fontStyle: 'normal',
              opacity: 0,
              transform: 'translateX(-30px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}>
              Цінувати себе — це не про мене. Я звикла себе відкладати. Цей курс точно для мене?
            </div>
            <div className="bubble-blob5-msg1" style={{
              position: 'absolute',
              bottom: '-260px',
              right: '-40px',
              width: 360,
              pointerEvents: 'none',
              zIndex: 2,
              animation: 'blobB 21s ease-in-out infinite',
            }}>
              <img src="/images/blobs/blob-5.png" loading="lazy" style={{
                width: '100%',
                height: 'auto',
                opacity: 0.6,
                transform: 'rotate(-65deg)',
                display: 'block',
              }} />
            </div>
          </div>
        </div>

        {/* Права бульбашка відповідь */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
          <div className="bubble-wrap-right" style={{ position: 'relative', width: '48%', zIndex: 3 }}>
            <div className="chat-bubble" data-delay="300" style={{
              background: 'linear-gradient(135deg, #6b2d4a 0%, #3a2030 100%)',
              border: '1px solid rgba(255,102,196,0.3)',
              borderRadius: '18px 18px 4px 18px',
              padding: 'clamp(12px, 1.5vw, 20px) clamp(14px, 2vw, 24px)',
              color: 'rgba(255,238,248,0.88)',
              fontSize: 'clamp(13px, 1.2vw, 16px)',
              lineHeight: 1.6,
              fontStyle: 'normal',
              opacity: 0,
              transform: 'translateX(30px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}>
              <strong style={{ color: '#FF9ED8' }}>Так!</strong>{' '}
              Навіть якщо все життя ти ставила себе на останнє місце — все можна змінити. Любити себе, цінувати та обирати — це навичка, яка формується через повторюваний досвід. Ми створимо цей «новий» досвід разом.
            </div>
            <img src="/images/blobs/blob-5.png" className="bubble-blob5-msg2" loading="lazy" style={{
              position: 'absolute',
              top: '-110px',
              right: '-40px',
              width: 160,
              height: 'auto',
              opacity: 0.85,
              pointerEvents: 'none',
              zIndex: 2,
              animation: 'blobB 19s ease-in-out infinite',
            }} />
          </div>
        </div>

        {/* Рядок 2 */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 16 }}>
          {/* Ліва бульбашка */}
          <div className="bubble-wrap-left" style={{ position: 'relative', width: '48%' }}>
            <div className="chat-bubble" data-delay="600" style={{
              background: 'linear-gradient(135deg, #6b2d4a 0%, #3a2030 100%)',
              border: '1px solid rgba(255,102,196,0.3)',
              borderRadius: '18px 18px 18px 4px',
              padding: 'clamp(12px, 1.5vw, 20px) clamp(14px, 2vw, 24px)',
              color: '#fff',
              fontSize: 'clamp(13px, 1.2vw, 16px)',
              lineHeight: 1.6,
              fontStyle: 'normal',
              opacity: 0,
              transform: 'translateX(-30px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}>
              Я хочу новий досвід, але мені страшно…
            </div>
            <img src="/images/blobs/blob-3.png" className="bubble-blob3" loading="lazy" style={{
              position: 'absolute',
              bottom: '-210px',
              left: '30px',
              width: 270,
              height: 'auto',
              opacity: 0.8,
              pointerEvents: 'none',
              zIndex: 2,
              animation: 'blobC 14s ease-in-out infinite',
            }} />
            <img src="/images/blobs/blob-1.png" className="bubble-blob1" loading="lazy" style={{
              position: 'absolute',
              bottom: '-190px',
              right: '-180px',
              width: 340,
              height: 'auto',
              opacity: 0.6,
              pointerEvents: 'none',
              zIndex: 2,
              animation: 'blobA 17s ease-in-out infinite',
            }} />
          </div>
        </div>

        {/* Права бульбашка відповідь 2 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
          <div className="bubble-wrap-right" style={{ position: 'relative', width: '48%' }}>
            <div className="chat-bubble" data-delay="900" style={{
              background: 'linear-gradient(135deg, #6b2d4a 0%, #3a2030 100%)',
              border: '1px solid rgba(255,102,196,0.3)',
              borderRadius: '18px 18px 4px 18px',
              padding: 'clamp(12px, 1.5vw, 20px) clamp(14px, 2vw, 24px)',
              color: 'rgba(255,238,248,0.88)',
              fontSize: 'clamp(13px, 1.2vw, 16px)',
              lineHeight: 1.6,
              fontStyle: 'normal',
              opacity: 0,
              transform: 'translateX(30px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}>
              Забудь, як ти жила до цього! Попереду — новий досвід і любов до себе у кожному виборі.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <a href="#price" style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 32,
            background: '#28201E',
            color: '#fff',
            border: '1px solid rgba(255,102,196,0.5)',
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            fontWeight: 400,
            padding: 'clamp(14px, 1.5vw, 16px) clamp(28px, 3vw, 36px)',
            borderRadius: 100,
            animation: 'pulseGlow 3s ease-in-out infinite',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF9ED8" strokeWidth="1.6" strokeLinecap="round">
              <path d="M4.8 9.4A8 8 0 0 1 12 5a8 8 0 0 1 5.5 2.2"/>
              <path d="M6.4 13c.2-3 2.4-5.3 5.6-5.3 1 0 1.9.2 2.7.7"/>
              <path d="M8.6 8.7A5 5 0 0 1 17 12c0 1.1 0 2.6-.3 3.8"/>
              <path d="M12 11a1.5 1.5 0 0 1 1.5 1.5c0 2-.4 3.6-1 4.7"/>
              <path d="M9.4 16.6c.5-1.2.7-2.5.6-3.9"/>
            </svg>
            Хочу новий досвід
          </a>
        </div>
      </div>
    </section>
  );
}
