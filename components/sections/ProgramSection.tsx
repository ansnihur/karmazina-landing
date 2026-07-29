'use client';

import { useState } from 'react';
import MoonBullet from '@/components/ui/MoonBullet';
import SectionContainer from '@/components/ui/SectionContainer';

const lectures = [
  {
    num: '00',
    title: 'Знайомство та основа',
    desc: 'Почнемо зі знайомства і закладемо основу для внутрішніх змін. Розберемося, чому любов до себе — це не вроджена якість, а навичка, яку можна поступово сформувати.',
    results: [
      'Ти зрозумієш, від чого насправді залежить самоцінність.',
      'Ти сформуєш внутрішню опору (коли цінність не залежить від чужої думки і ти не втрачаєш себе через негативні обставини) для подальших змін.',
    ],
  },
  {
    num: '01',
    title: 'Як <span style="font-family:var(--font-montserrat)">ф</span>ормується ставлення до себе',
    desc: 'Дослідимо, як формується ставлення до себе та які внутрішні механізми можуть його послаблювати. Почнемо вибудовувати новий спосіб взаємодії із собою.',
    results: [
      'Ти помітиш патерни, які стримують твої зміни на краще.',
      'Ти почнеш формувати більш підтримуюче мислення.',
    ],
  },
  {
    num: '02',
    title: 'Внутрішнє сприйняття себе',
    desc: 'Працюємо з внутрішнім сприйняттям себе та тим, як воно впливає на рішення, вибір і якість життя.',
    results: [
      'Ти зрозумієш, що зараз формує твоє ставлення до себе.',
      'Ти отримаєш потужну практику для зміцнення внутрішньої опори.',
    ],
  },
  {
    num: '03',
    title: 'Внутрішній критик',
    desc: 'Навчимося помічати внутрішнього критика та переходити до більш підтримуючого контакту із собою через практичні інструменти.',
    results: [
      'Ти навчишся не слухати довбаного «внутрішнього критика» й робити свій внутрішній голос гучнішим.',
      'Ти отримаєш досвід (який інтегруєш в своє життя) більш м\'якого і підтримуючого ставлення до себе.',
    ],
  },
  {
    num: '04',
    title: 'Інтеграція змін у життя',
    desc: 'Інтегруємо зміни в реальне життя та створимо систему, яка допоможе підтримувати новий стан після завершення курсу.',
    results: [
      'Ти сформуєш власну основу для стабільної самоцінності.',
      'Ти зрозумієш, як діяти з опори на себе, а не зі страху.',
      'Ти почнеш жити з власного центру сили, де любов до себе і самоцінність — база.',
    ],
  },
];

export default function ProgramSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="program" style={{ position: 'relative', zIndex: 2, background: '#28201E' }}>
      <SectionContainer>

        {/* Заголовок */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 58px)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: 'clamp(11px, 1vw, 13px)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#FF66C4',
            fontWeight: 700,
            marginBottom: 18,
          }}>програма курсу</span>
          <h2 style={{
            fontFamily: 'var(--font-nyght)',
            fontWeight: 400,
            fontSize: 'clamp(32px, 4vw, 46px)',
            lineHeight: 1.08,
            color: '#FBEFF6',
          }}>Шлях із 4 лекцій</h2>
        </div>

        {/* Акордеон */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {lectures.map((lec, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.16)',
                borderRadius: 22,
                padding: 'clamp(18px, 2vw, 26px) clamp(20px, 2.5vw, 32px)',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease',
                borderColor: openIndex === i || hoveredIndex === i ? 'rgba(255,102,196,0.4)' : 'rgba(255,255,255,0.16)',
              }}
            >
              {/* Заголовок лекції */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px, 2vw, 24px)' }}>
                <span style={{
                  fontFamily: 'var(--font-nyght)',
                  fontSize: 'clamp(32px, 3.5vw, 46px)',
                  color: '#FF66C4',
                  lineHeight: 1,
                  flexShrink: 0,
                }}>{lec.num}</span>
                <div style={{
                  flex: 1,
                  fontWeight: 700,
                  fontSize: 'clamp(15px, 1.5vw, 20px)',
                  color: '#fff',
                }} dangerouslySetInnerHTML={{ __html: lec.title }} />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (openIndex === i || hoveredIndex === i) {
                      setOpenIndex(null);
                      setHoveredIndex(null);
                    } else {
                      setOpenIndex(i);
                    }
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    minWidth: 44,
                    minHeight: 44,
                  }}
                >
                  <span style={{
                    fontSize: 'clamp(28px, 3vw, 38px)',
                    fontWeight: 300,
                    color: '#FF66C4',
                    lineHeight: 1,
                    transform: openIndex === i || hoveredIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.4s ease',
                    display: 'inline-block',
                  }}>+</span>
                </button>
              </div>

              {/* Тіло лекції */}
              <div style={{
                maxHeight: openIndex === i || hoveredIndex === i ? 400 : 0,
                overflow: 'hidden',
                opacity: openIndex === i || hoveredIndex === i ? 1 : 0,
                marginTop: openIndex === i || hoveredIndex === i ? 22 : 0,
                transition: 'max-height 0.55s ease, opacity 0.4s ease, margin-top 0.45s ease',
              }}>
                <p style={{
                  fontSize: 'clamp(13px, 1.2vw, 15px)',
                  lineHeight: 1.6,
                  color: 'rgba(247,233,241,0.78)',
                }}>{lec.desc}</p>

                <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,102,196,0.25)' }}>
                  <div style={{
                    fontSize: 'clamp(11px, 1vw, 13px)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#FF66C4',
                    fontWeight: 700,
                    marginBottom: 12,
                  }}>Результат</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {lec.results.map((r, j) => (
                      <div key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <div style={{
                          flexShrink: 0,
                          marginTop: 5,
                          width: 14,
                          height: 14,
                          borderRadius: '50%',
                          boxShadow: 'inset 5px -2px 0 0 #FF66C4',
                        }} />
                        <span style={{
                          fontSize: 'clamp(13px, 1.2vw, 15px)',
                          color: 'rgba(247,233,241,0.9)',
                          lineHeight: 1.5,
                        }}>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Бонус рядок */}
        <div className="bonus-row" style={{
          marginTop: 22,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 14,
          background: 'rgba(255,102,196,0.1)',
          border: '1px solid rgba(255,102,196,0.3)',
          borderRadius: 18,
          padding: 'clamp(14px, 2vw, 20px) clamp(16px, 2.5vw, 26px)',
          textAlign: 'center',
        }}>
          <div style={{
            flexShrink: 0,
            width: 20,
            height: 20,
            borderRadius: '50%',
            boxShadow: 'inset 6px -2px 0 0 #FF66C4',
          }} />
          <span style={{
            fontSize: 'clamp(13px, 1.2vw, 16px)',
            color: '#FBEFF6',
          }}>
            Після проходження курсу<br className="bonus-break" /> — отримаєш{' '}
            <strong style={{ color: '#FF66C4' }}>секретний подарунок</strong>
          </span>
        </div>

        {/* Серце курсу — медитація */}
        <div className="meditation-card" style={{
          marginTop: 16,
          background: 'linear-gradient(135deg,#5a2a42 0%,#3a2030 45%,#241820 100%)',
          border: '1px solid rgba(255,102,196,0.45)',
          borderRadius: 22,
          padding: 'clamp(24px, 3vw, 40px) clamp(24px, 3.5vw, 48px)',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(24px, 3vw, 48px)',
          boxShadow: '0 26px 60px rgba(40,15,28,0.4), 0 0 40px rgba(255,102,196,0.15)',
        }}>
          <img
            className="meditation-moon"
            src="/images/moon.png"
            alt=""
            loading="lazy"
            style={{
              flexShrink: 0,
              width: 'clamp(80px, 10vw, 140px)',
              height: 'clamp(80px, 10vw, 140px)',
              objectFit: 'contain',
              borderRadius: '50%',
              opacity: 0.95,
              filter: 'drop-shadow(0 0 20px rgba(255,102,196,0.5))',
              animation: 'floatY 9s ease-in-out infinite',
            }}
          />
          <div>
            <span style={{
              display: 'inline-block',
              fontSize: 'clamp(10px, 0.9vw, 13px)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#FF66C4',
              fontWeight: 700,
              marginBottom: 12,
            }}>серце курсу</span>
            <h3 style={{
              fontFamily: 'var(--font-nyght)',
              fontWeight: 400,
              fontSize: 'clamp(22px, 2.8vw, 38px)',
              lineHeight: 1.15,
              color: '#FBEFF6',
              marginBottom: 14,
            }}>Авторська космічна медитація</h3>
            <p style={{
              fontSize: 'clamp(13px, 1.1vw, 16px)',
              lineHeight: 1.65,
              color: 'rgba(247,233,241,0.78)',
              maxWidth: 600,
            }}>«Пошли внутрішнього критика на сині лани» — от саме це ти і будеш робити з критиком. Після медитації відчуєш спокій замість тривоги і критики.</p>
          </div>
        </div>
      </SectionContainer>

      <style>{`
        .bonus-break {
          display: none;
        }
        @media (max-width: 767px),
        (max-width: 1024px) and (orientation: portrait) {
          .bonus-break {
            display: inline;
          }
          .meditation-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
            padding: 24px 20px !important;
          }
          .meditation-moon {
            width: 80px !important;
            height: 80px !important;
          }
          .bonus-row {
            justify-content: flex-start !important;
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
