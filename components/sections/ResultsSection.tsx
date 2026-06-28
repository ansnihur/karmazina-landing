'use client';

const results = [
  'Ти перестанеш оцінювати себе через чужу думку.',
  'Ти почнеш діяти впевнено і <strong style="color:#28201E">в напрямку до себе</strong>.',
  'Ти навчишся спокійно відмовляти без переживань.',
  'Ти почнеш діяти зі стану цінності до себе.',
  'Ти будеш знати свої межі і вміти тримати їх.',
  'Ти навчишся обирати себе, а не підлаштовуватись під інших.',
  'Ти будеш чути свої справжні бажання і йти за ними.',
  '<strong style="color:#28201E"><em>Ти відчуєш себе розкішною жінкою.</em></strong>',
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
  return (
    <section style={{ position: 'relative', zIndex: 2, background: '#FCFAFB', overflow: 'hidden' }}>

      {/* PNG блоби */}
      <img src="/images/blobs/blob-1.png" style={{ position: 'absolute', top: 40, left: -20, width: 220, height: 'auto', opacity: 0.7, animation: 'blobB 19s ease-in-out infinite', pointerEvents: 'none', zIndex: 0 }} />
      <img src="/images/blobs/blob-4.png" style={{ position: 'absolute', top: 120, left: 220, width: 130, height: 'auto', opacity: 0.6, animation: 'blobC 14s ease-in-out infinite', pointerEvents: 'none', zIndex: 0 }} />
      <img src="/images/blobs/blob-2.png" style={{ position: 'absolute', bottom: 60, right: -20, width: 200, height: 'auto', opacity: 0.65, animation: 'blobA 17s ease-in-out infinite', pointerEvents: 'none', zIndex: 0 }} />
      <img src="/images/blobs/blob-6.png" style={{ position: 'absolute', bottom: 160, left: -10, width: 180, height: 'auto', opacity: 0.6, animation: 'blobB 21s ease-in-out infinite', pointerEvents: 'none', zIndex: 0 }} />

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

          <div style={{ marginTop: 34 }}>
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
              Іду у напрямку до себе
            </a>
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
              <div className="result-bullet" style={{
                flexShrink: 0,
                width: 20,
                height: 20,
                borderRadius: '50%',
                boxShadow: 'inset 6px -2px 0 0 #FF66C4',
              }} />
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
        }
      `}</style>

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 900,
        margin: '0 auto',
        padding: '0 clamp(20px, 4vw, 48px) clamp(64px, 8vw, 110px)',
      }}>
        {/* PNG блоби */}
        <img src="/images/blobs/blob-3.png" style={{ position:'absolute', left:-14, bottom:150, width:190, height:'auto', opacity:0.7, animation:'blobB 17s ease-in-out infinite', pointerEvents:'none', zIndex:0 }} />
        <img src="/images/blobs/blob-5.png" style={{ position:'absolute', right:-20, top:150, width:170, height:'auto', opacity:0.65, animation:'blobA 19s ease-in-out infinite', pointerEvents:'none', zIndex:0 }} />
        <img src="/images/blobs/blob-7.png" style={{ position:'absolute', left:'46%', bottom:60, transform:'translateX(-50%)', width:240, height:'auto', opacity:0.6, animation:'blobC 21s ease-in-out infinite', pointerEvents:'none', zIndex:0 }} />

        {/* Темна цитата-картка */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 680,
          margin: '0 auto',
          background: 'linear-gradient(135deg, #6b2d4a 0%, #4a2038 35%, #2d1825 70%, #1a1018 100%)',
          border: '1px solid rgba(255,102,196,0.45)',
          borderRadius: 34,
          padding: 'clamp(32px, 4vw, 58px) clamp(24px, 4vw, 50px)',
          textAlign: 'center',
          boxShadow: '0 26px 80px rgba(40,15,28,0.6), 0 0 80px rgba(255,102,196,0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}>
          <p style={{
            fontFamily: 'var(--font-nyght)',
            fontSize: 'clamp(18px, 2vw, 24px)',
            lineHeight: 1.4,
            color: '#fff',
            fontStyle: 'italic',
          }}>
            <span style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(48px, 5vw, 64px)', lineHeight: 0, color: '#FF66C4', verticalAlign: '-0.3em', marginRight: 6 }}>"</span>
            Цінувати себе — це не про мене. Я звикла себе відкладати. Цей курс точно для мене?
            <span style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(48px, 5vw, 64px)', lineHeight: 0, color: '#FF66C4', verticalAlign: '-0.3em', marginLeft: 6 }}>"</span>
          </p>
          <p style={{
            marginTop: 24,
            marginBottom: 24,
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            lineHeight: 1.7,
            color: 'rgba(255,238,248,0.88)',
            maxWidth: 620,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <strong style={{ color: '#FF9ED8' }}>Так!</strong>{' '}
            Навіть якщо все життя ти ставила себе на останнє місце — все можна змінити. Любити себе, цінувати та обирати — це навичка, яка формується через повторюваний досвід. Ми створимо цей «новий» досвід разом за допомогою потужних практичних інструментів.
          </p>
        </div>

        {/* Біла картка що накладається */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          margin: '-32px auto 0',
          maxWidth: 860,
          background: '#fff',
          borderRadius: 22,
          boxShadow: '0 18px 44px rgba(40,15,28,0.28)',
          padding: 'clamp(18px, 2vw, 24px) clamp(20px, 3vw, 40px)',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            lineHeight: 1.6,
            color: '#28201E',
            fontWeight: 700,
          }}>Забудь те, як ти жила до цього! Попереду — новий досвід і любов до себе у кожному виборі.</p>
        </div>

        {/* CTA */}
        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', marginTop: 36 }}>
          <a href="#price" style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: '#28201E',
            color: '#fff',
            border: '1px solid rgba(255,102,196,0.5)',
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            fontWeight: 700,
            padding: 'clamp(14px, 1.5vw, 16px) clamp(28px, 3vw, 36px)',
            borderRadius: 100,
            animation: 'pulseGlow 3s ease-in-out infinite',
            fontWeight: 400,
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
