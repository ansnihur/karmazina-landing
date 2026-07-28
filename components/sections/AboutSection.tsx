'use client';

import MoonBullet from '@/components/ui/MoonBullet';

const credentials = [
  'Сертифікований коуч за стандартами ECF',
  'Авторка методики трансформаційного мислення',
  'Блогерка',
];

export default function AboutSection() {
  return (
    <section id="about" style={{ position: 'relative', zIndex: 2, background: '#28201E' }}>
      <div className="about-grid" style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: 'clamp(64px, 8vw, 100px) clamp(20px, 4vw, 48px)',
        display: 'grid',
        gridTemplateColumns: '0.85fr 1.15fr',
        gridTemplateRows: 'auto 1fr',
        columnGap: 'clamp(32px, 4vw, 48px)',
        rowGap: 0,
      }}>

        {/* Фото — ліва колонка, займає обидва рядки */}
        <div className="about-photo-col" style={{ display: 'flex', justifyContent: 'center', gridColumn: 1, gridRow: '1 / 3', alignSelf: 'center' }}>
          <div style={{
            position: 'relative',
            width: 'clamp(220px, 22vw, 280px)',
            maxWidth: '100%',
            height: 'clamp(280px, 28vw, 350px)',
            borderRadius: '160px 160px 24px 24px',
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.22)',
            boxShadow: '0 24px 50px rgba(0,0,0,0.4)',
          }}>
            <img
              src="/images/kateryna.jpg"
              alt="Катерина Кармазіна"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
            />
          </div>
        </div>

        {/* Заголовок — права колонка, рядок 1 */}
        <div className="about-header" style={{ gridColumn: 2, gridRow: 1, paddingBottom: 22 }}>
          <span style={{
            display: 'inline-block',
            fontSize: 'clamp(11px, 1vw, 13px)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#FF66C4',
            fontWeight: 700,
            marginBottom: 18,
          }}>авторка курсу</span>

          <h2 style={{
            fontFamily: 'var(--font-nyght)',
            fontWeight: 400,
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            lineHeight: 1.06,
            color: '#FBEFF6',
          }}>Катерина Кармазіна</h2>

          <div style={{
            marginTop: 8,
            fontSize: 'clamp(13px, 1.1vw, 15px)',
            letterSpacing: '0.04em',
            color: '#FF66C4',
          }}>cosmic_coach</div>
        </div>

        {/* Опис — права колонка, рядок 2 */}
        <div className="about-body" style={{ gridColumn: 2, gridRow: 2 }}>
          {/* Credentials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {credentials.map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <MoonBullet />
                <span style={{ fontSize: 'clamp(13px, 1.2vw, 16px)', color: 'rgba(247,233,241,0.9)', lineHeight: 1.45 }}>{c}</span>
              </div>
            ))}
          </div>

          {/* Цитата */}
          <p style={{
            marginTop: 26,
            fontFamily: 'var(--font-nyght)',
            fontStyle: 'italic',
            fontSize: 'clamp(18px, 1.8vw, 23px)',
            lineHeight: 1.45,
            color: '#fff',
          }}>«Моя місія — допомагати жінкам усвідомлювати свою цінність і прокачувати її на максимум».</p>

          {/* Текст */}
          <p style={{
            marginTop: 22,
            fontSize: 'clamp(13px, 1.2vw, 16px)',
            lineHeight: 1.68,
            color: 'rgba(247,233,241,0.82)',
          }}>Мій підхід поєднує практичні коучингові інструменти і психологічні техніки, щоб зміни були глибокими і відчутними. Я створила безпечний простір, де кожна учасниця отримає підтримку, конкретні практики і кроки, які можна одразу застосувати в житті.</p>

          <p style={{
            marginTop: 16,
            fontSize: 'clamp(13px, 1.2vw, 16px)',
            lineHeight: 1.68,
            color: 'rgba(247,233,241,0.82)',
          }}>Цей курс — мої знання, досвід та енергія, вкладені в конкретну <strong style={{ color: '#FF66C4' }}>«космічну» систему</strong>, яка допоможе тобі не тільки усвідомити свою цінність, а й відчути її сповна, трансформувавши своє мислення.</p>

          <p style={{
            marginTop: 16,
            fontSize: 'clamp(13px, 1.2vw, 16px)',
            lineHeight: 1.68,
            color: '#fff',
          }}><span style={{ color: '#FF66C4' }}>Зміни гарантую, бо <strong>пройшла це все сама</strong> і випробувала на собі!</span></p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px),
        (max-width: 1024px) and (orientation: portrait) {
          .about-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: none !important;
            gap: 24px !important;
          }
          .about-header {
            grid-column: 1 !important;
            grid-row: auto !important;
            order: 1 !important;
            padding-bottom: 0 !important;
            text-align: center !important;
          }
          .about-photo-col {
            grid-column: 1 !important;
            grid-row: auto !important;
            order: 2 !important;
          }
          .about-body {
            grid-column: 1 !important;
            grid-row: auto !important;
            order: 3 !important;
          }
        }
      `}</style>
    </section>
  );
}
