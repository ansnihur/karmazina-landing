'use client';

export default function CtaFooterSection() {
  const year = new Date().getFullYear();

  return (
    <section style={{ position: 'relative', zIndex: 2, background: '#28201E' }}>
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(80px, 10vw, 120px) 0',
        background: 'radial-gradient(circle at 50% 0%, rgba(255,102,196,0.2), rgba(14,13,14,0) 55%)',
      }}>
        {/* Місяць фон */}
        <img src="/images/moon-footer.png" alt="" loading="lazy" style={{
          position: 'absolute',
          left: '50%',
          top: '62%',
          transform: 'translateX(-50%)',
          width: '172.5%',
          maxWidth: 'none',
          height: 'auto',
          objectFit: 'contain',
          opacity: 0.5,
          filter: 'drop-shadow(0 0 90px rgba(255,158,216,0.4))',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 760,
          margin: '0 auto',
          padding: 'clamp(20px, 3vw, 20px) clamp(20px, 4vw, 48px) 0',
          textAlign: 'center',
        }}>
          {/* Заголовок */}
          <h2 style={{
            fontFamily: 'var(--font-nyght)',
            fontWeight: 400,
            fontSize: 'clamp(32px, 4.5vw, 50px)',
            lineHeight: 1.08,
            color: '#FBEFF6',
          }}>Тепер вибір за тобою</h2>

          <p style={{
            marginTop: 24,
            fontSize: 'clamp(15px, 1.5vw, 19px)',
            lineHeight: 1.6,
            color: 'rgba(247,233,241,0.82)',
            maxWidth: 540,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>Залишити все, як є — чи подарувати собі шанс на нове життя?</p>

          <p style={{
            marginTop: 14,
            fontSize: 'clamp(14px, 1.3vw, 17px)',
            lineHeight: 1.6,
            color: 'rgba(247,233,241,0.62)',
            maxWidth: 520,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>Якщо ти готова — почнімо!</p>

          {/* CTA кнопка */}
          <span className="cta-scale-wrap" style={{ marginTop: 38 }}>
            <a href="#price" style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              background: '#28201E',
              color: '#fff',
              border: '1px solid rgba(255,102,196,0.5)',
              fontSize: 'clamp(15px, 1.3vw, 17px)',
              fontWeight: 400,
              padding: 'clamp(16px, 1.5vw, 19px) clamp(32px, 3vw, 46px)',
              borderRadius: 100,
              letterSpacing: '0.02em',
              boxShadow: '0 18px 50px rgba(255,102,196,0.55)',
              animation: 'vibrate 3.4s ease-in-out infinite, pulseGlow 2s ease-in-out infinite',
            }}>
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#FF9ED8" strokeWidth="1.6" strokeLinecap="round">
                <path d="M4.8 9.4A8 8 0 0 1 12 5a8 8 0 0 1 5.5 2.2"/>
                <path d="M6.4 13c.2-3 2.4-5.3 5.6-5.3 1 0 1.9.2 2.7.7"/>
                <path d="M8.6 8.7A5 5 0 0 1 17 12c0 1.1 0 2.6-.3 3.8"/>
                <path d="M12 11a1.5 1.5 0 0 1 1.5 1.5c0 2-.4 3.6-1 4.7"/>
                <path d="M9.4 16.6c.5-1.2.7-2.5.6-3.9"/>
              </svg>
              Почати зміни
            </a>
          </span>

          {/* Питання */}
          <p style={{
            marginTop: 42,
            fontSize: 'clamp(13px, 1.1vw, 15px)',
            lineHeight: 1.6,
            color: 'rgba(247,233,241,0.6)',
          }}>
            Є питання по курсу? Пиши в{' '}
            <a
              href="https://www.instagram.com/cosmic_coach"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#FF9ED8', textDecoration: 'none', borderBottom: '1px solid rgba(255,158,216,0.4)' }}
            >Інстаграм</a>
          </p>

          {/* Соцмережі */}
          <div style={{
            marginTop: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 18,
          }}>
            {/* Instagram */}
            <a href="https://www.instagram.com/cosmic_coach" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{
              textDecoration: 'none',
              width: 52, height: 52,
              borderRadius: '50%',
              background: '#1c161b',
              border: '1px solid rgba(255,102,196,0.4)',
              boxShadow: '0 8px 22px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF9ED8" strokeWidth="1.7">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="#FF9ED8" stroke="none"/>
              </svg>
            </a>

            {/* TikTok */}
            <a href="https://www.tiktok.com/@cosmic_coach" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{
              textDecoration: 'none',
              width: 52, height: 52,
              borderRadius: '50%',
              background: '#1c161b',
              border: '1px solid rgba(255,102,196,0.4)',
              boxShadow: '0 8px 22px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF9ED8" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.22 8.22 0 0 0 4.8 1.54V6.78a4.85 4.85 0 0 1-1.03-.09z"/>
              </svg>
            </a>

            {/* Telegram */}
            <a href="https://t.me/kkarmazina" target="_blank" rel="noopener noreferrer" aria-label="Telegram" style={{
              textDecoration: 'none',
              width: 52, height: 52,
              borderRadius: '50%',
              background: '#1c161b',
              border: '1px solid rgba(255,102,196,0.4)',
              boxShadow: '0 8px 22px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF9ED8">
                <path d="M21.9 4.3 18.6 20c-.2 1-.9 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.2.2-.5.5-.9.5l.3-4.6 8.3-7.5c.4-.3-.1-.5-.6-.2L7.3 12.9 2.8 11.5c-1-.3-1-1 .2-1.5L20.6 3c.8-.3 1.5.2 1.3 1.3z"/>
              </svg>
            </a>

            {/* Threads */}
            <a href="https://www.threads.com/@cosmic_coach?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" aria-label="Threads" style={{
              textDecoration: 'none',
              width: 52, height: 52,
              borderRadius: '50%',
              background: '#1c161b',
              border: '1px solid rgba(255,102,196,0.4)',
              boxShadow: '0 8px 22px rgba(0,0,0,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img
                src="/images/threads-icon.svg"
                alt="Threads"
                style={{ width: 20, height: 20 }}
              />
            </a>
          </div>

          {/* Логотип і рік */}
          <div style={{
            marginTop: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}>
            <a href="/" className="footer-logo" style={{ textDecoration: 'none' }}>
              <img src="/images/wordmark.png" alt="cosmic coach"
                style={{ height: 26, width: 'auto', objectFit: 'contain', opacity: 0.9 }} />
            </a>
            <span style={{ fontSize: 14, color: 'rgba(247,233,241,0.5)' }}>· Катерина · {year}</span>
          </div>

          {/* Лінки */}
          <div className="footer-links" style={{
            marginTop: 26,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '10px 26px',
            flexWrap: 'wrap',
          }}>
            <a href="https://docs.google.com/document/d/1un3uaiiCvGYmb3OEqLc3dmKj_8ERpwJy2iMbHNaBg-E/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontSize: 'clamp(12px, 1vw, 13.5px)', color: 'rgba(247,233,241,0.55)' }}>Політика конфіденційності</a>
            <span style={{ color: 'rgba(247,233,241,0.2)' }}>·</span>
            <a href="https://docs.google.com/document/d/1cAuZqxa4gUNmL3pbtOTcG0rEyCqVvg_5qseD3OIc708/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontSize: 'clamp(12px, 1vw, 13.5px)', color: 'rgba(247,233,241,0.55)' }}>Публічна оферта</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .footer-links {
            flex-direction: column;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
