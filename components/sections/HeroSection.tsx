'use client';

import { useState, useEffect } from 'react';

const FingerprintIcon = ({ stroke = '#FF9ED8' }: { stroke?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 9.4A8 8 0 0 1 12 5a8 8 0 0 1 5.5 2.2" />
    <path d="M6.4 13c.2-3 2.4-5.3 5.6-5.3 1 0 1.9.2 2.7.7" />
    <path d="M8.6 8.7A5 5 0 0 1 17 12c0 1.1 0 2.6-.3 3.8" />
    <path d="M12 11a1.5 1.5 0 0 1 1.5 1.5c0 2-.4 3.6-1 4.7" />
    <path d="M9.4 16.6c.5-1.2.7-2.5.6-3.9" />
  </svg>
);

const MoonBullet = () => (
  <div style={{
    flexShrink: 0,
    width: 'clamp(10px, 1.2vw, 15px)',
    height: 'clamp(10px, 1.2vw, 15px)',
    borderRadius: '50%',
    background: 'transparent',
    boxShadow: 'inset 5px -2px 0 0 #FF66C4',
    marginTop: 3,
  }} />
);

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#28201E" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#28201E" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navLinks = [
  { href: '#program', label: 'Програма' },
  { href: '#price', label: 'Тарифи' },
  { href: '#about', label: 'Про авторку' },
  { href: '#reviews', label: 'Відгуки' },
];

const bulletPoints = [
  <>без води і пустої балаканини про «любов до себе, жіночність чи дихання маткою».</>,
  <>домашні завдання у вигляді конкретних інструментів, які працюють і закріплюють теорію.</>,
  <><strong style={{ color: '#FF66C4', fontWeight: 800 }}>Авторська космічна медитація</strong> <br></br> «Пошли внутрішнього критика на сині лани».</>,
  <>секретний подарунок після проходження курсу.</>,
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setIsTablet(w >= 768 && w <= 1024);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <>
      {/* ─── DESKTOP ─── */}
      <section
        style={{
          display: 'none',
          position: 'relative',
          zIndex: 2,
          height: '100dvh',
          maxHeight: '100dvh',
          overflow: 'hidden',
        }}
        className="hero-desktop"
      >
        {/* Two-half background */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
          {/* Dark left half */}
          <div style={{ flex: 1, background: '#28201E', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.45,
              backgroundImage: `
                radial-gradient(1.8px 1.8px at 8% 12%,#fff,transparent),
                radial-gradient(1.2px 1.2px at 18% 35%,#fff,transparent),
                radial-gradient(2px 2px at 5% 55%,#fff,transparent),
                radial-gradient(1px 1px at 25% 20%,#fff,transparent),
                radial-gradient(1.5px 1.5px at 35% 70%,#fff,transparent),
                radial-gradient(0.8px 0.8px at 42% 15%,#fff,transparent),
                radial-gradient(1.3px 1.3px at 15% 80%,#fff,transparent),
                radial-gradient(1.6px 1.6px at 28% 90%,#fff,transparent),
                radial-gradient(1px 1px at 48% 45%,#fff,transparent),
                radial-gradient(1.4px 1.4px at 10% 95%,#fff,transparent),
                radial-gradient(0.9px 0.9px at 38% 50%,#fff,transparent),
                radial-gradient(1.7px 1.7px at 22% 62%,#fff,transparent),
                radial-gradient(1.1px 1.1px at 44% 78%,#fff,transparent),
                radial-gradient(2px 2px at 30% 8%,#fff,transparent),
                radial-gradient(0.8px 0.8px at 46% 30%,#fff,transparent)
              `,
            }} />
          </div>

          {/* Light right half */}
          <div className="hero-right-bg" style={{ flex: 1, background: '#FCFAFB', position: 'relative', overflow: 'hidden' }}>
            <img className="hero-blob-img" src="/images/blobs/blob-6.png" style={{ position: 'absolute', top: '5%', left: '5%', width: '25%', height: 'auto', opacity: 0.9, animation: 'blobA 13s ease-in-out infinite', pointerEvents: 'none' }} />
            <img className="hero-blob-img" src="/images/blobs/blob-2.png" style={{ position: 'absolute', bottom: '5%', right: '5%', width: '30%', height: 'auto', opacity: 0.9, animation: 'blobB 17s ease-in-out infinite', pointerEvents: 'none' }} />
            <img className="hero-blob-img" src="/images/blobs/blob-3.png" style={{ position: 'absolute', bottom: '5%', left: '10%', width: '25%', height: 'auto', opacity: 0.85, animation: 'blobC 15s ease-in-out infinite', pointerEvents: 'none' }} />
            <img className="hero-blob-img" src="/images/blobs/blob-4.png" style={{ position: 'absolute', top: '5%', right: '5%', width: '10%', height: 'auto', opacity: 0.8, animation: 'blobB 19s ease-in-out infinite reverse', pointerEvents: 'none' }} />
            <img className="hero-blob-img" src="/images/blobs/blob-5.png" style={{ position: 'absolute', top: '45%', left: '2%', width: '9%', height: 'auto', opacity: 0.75, animation: 'blobA 21s ease-in-out infinite reverse', pointerEvents: 'none' }} />
            <img className="hero-blob-img" src="/images/blobs/blob-1.png" style={{ position: 'absolute', top: '22%', right: '8%', width: '11%', height: 'auto', opacity: 0.8, animation: 'blobC 14s ease-in-out infinite', pointerEvents: 'none' }} />
            <img className="hero-blob-img" src="/images/blobs/blob-7.png" style={{ position: 'absolute', bottom: '18%', left: '4%', width: '8%', height: 'auto', opacity: 0.75, animation: 'blobA 16s ease-in-out infinite', pointerEvents: 'none' }} />
          </div>
        </div>

        {/* Header */}
        <header style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-header-grid" style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            padding: isTablet ? '16px 20px' : 'clamp(16px, 3vw, 48px) clamp(20px, 4vw, 48px)',
          }}>
            {/* Wordmark */}
            <div>
              <img src="/images/wordmark.PNG" alt="cosmic coach" className="hero-logo" height={isTablet ? 28 : 38} />
            </div>

            {/* Nav */}
            <nav className="hero-nav" style={{ display: 'flex', alignItems: 'center', gap: isTablet ? 12 : 32, justifyContent: 'flex-end' }}>
              <div className="hero-nav-links" style={{ alignItems: 'center', gap: 'clamp(12px, 2vw, 32px)' }}>
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="hero-nav-link"
                    style={{
                      color: '#28201E',
                      fontWeight: 400,
                      fontSize: 'clamp(11px, 1vw, 14px)',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#price"
                  className="hero-nav-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '10px 20px',
                    borderRadius: 50,
                    background: '#28201E',
                    border: '1.5px solid rgba(255,102,196,0.55)',
                    color: '#FBEFF6',
                    fontWeight: 400,
                    fontSize: 'clamp(11px, 1vw, 14px)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    animation: 'pulseGlow 3s ease-in-out infinite',
                  }}
                >
                  <FingerprintIcon />
                  Хочу цей курс
                </a>
              </div>

              {/* Hamburger (hidden on desktop via CSS) */}
              <button
                className="hero-hamburger"
                style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
                onClick={() => setMenuOpen(v => !v)}
                aria-label="Меню"
              >
                {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </nav>
          </div>
        </header>

        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          background: '#28201E',
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: menuOpen ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}>
          {/* Stars */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: `
              radial-gradient(1.5px 1.5px at 10% 15%,#fff,transparent),
              radial-gradient(1px 1px at 25% 40%,#fff,transparent),
              radial-gradient(2px 2px at 80% 20%,#fff,transparent),
              radial-gradient(1.2px 1.2px at 60% 70%,#fff,transparent),
              radial-gradient(0.8px 0.8px at 40% 85%,#fff,transparent),
              radial-gradient(1.5px 1.5px at 90% 60%,#fff,transparent),
              radial-gradient(1px 1px at 15% 75%,#fff,transparent),
              radial-gradient(1.8px 1.8px at 70% 45%,#fff,transparent),
              radial-gradient(0.9px 0.9px at 50% 25%,#fff,transparent),
              radial-gradient(1.3px 1.3px at 85% 85%,#fff,transparent)
            `,
            opacity: 0.4,
          }} />

          {/* Moon decoration */}
          <div style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: '280px', height: '280px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,179,224,0.15), transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-60px', left: '-60px',
            width: '220px', height: '220px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,102,196,0.12), transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Close button — matches hamburger position: header padding 14px top / 20px right + button padding 4px */}
          <button onClick={() => setMenuOpen(false)} style={{
            position: 'absolute', top: 14, right: 20,
            background: 'none', border: 'none', cursor: 'pointer', padding: 4,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FBEFF6" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Logo */}
          <img src="/images/wordmark.PNG" alt="cosmic coach" style={{ height: 32, marginBottom: 48, opacity: 0.9 }} />

          {/* Nav links */}
          <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{
                color: '#FBEFF6',
                fontSize: 16,
                fontWeight: 400,
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FF66C4')}
              onMouseLeave={e => (e.currentTarget.style.color = '#FBEFF6')}
              >{label}</a>
            ))}
          </nav>

          {/* CTA button */}
          <a href="#price" onClick={() => setMenuOpen(false)} style={{
            marginTop: 48,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'transparent',
            border: '1px solid rgba(255,102,196,0.6)',
            color: '#fff',
            fontSize: 16,
            fontWeight: 400,
            padding: '16px 36px',
            borderRadius: 100,
            textDecoration: 'none',
            boxShadow: '0 0 30px rgba(255,102,196,0.3)',
            animation: 'pulseGlow 2s ease-in-out infinite',
          }}>
            <FingerprintIcon stroke="#FF9ED8" />
            Хочу цей курс
          </a>
        </div>

        {/* Hero content grid */}
        <div className="hero-content-grid hero-grid" style={{
          position: 'relative',
          zIndex: 5,
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr clamp(200px, 25vw, 380px) 1fr',
          padding: isTablet ? '20px 24px 60px' : 'clamp(20px, 3vw, 48px) clamp(20px, 3vw, 48px) 80px',
          gap: 0,
        }}>
          {/* Left column */}
          <div className="hero-left-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 24, paddingRight: 40, textAlign: 'left' }}>
            <p style={{
              color: '#FF66C4',
              fontSize: 'clamp(13px, 1.2vw, 16px)',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              трансформаційний курс
            </p>

            <h1 style={{
              fontFamily: 'var(--font-nyght)',
              fontSize: 'clamp(28px, 4.5vw, 58px)',
              lineHeight: 1.1,
              color: '#FBEFF6',
              fontWeight: 400,
              whiteSpace: 'nowrap',
            }}>
              «Любити<br />себе — <em style={{ color: '#FF66C4', fontStyle: 'italic' }}>база</em>»
            </h1>

            <p style={{ color: 'rgba(247,233,241,0.72)', fontSize: 'clamp(13px, 1.2vw, 16px)', lineHeight: isTablet ? 1.5 : 1.62 }}>
              Навчись ставити себе в пріоритет і жити без постійної самокритики.
            </p>
            <p style={{ color: 'rgba(247,233,241,0.72)', fontSize: 'clamp(13px, 1.2vw, 16px)', lineHeight: isTablet ? 1.5 : 1.62 }}>
              Любов до себе перестане бути красивими словами і стане твоїм реальним станом: у рішеннях, діях і виборах кожного дня.
            </p>

            <a
              href="#price"
              className="hero-cta-btn"
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 28px',
                borderRadius: 50,
                background: '#28201E',
                border: '1.5px solid rgba(255,102,196,0.55)',
                color: '#FBEFF6',
                fontWeight: 400,
                fontSize: 15,
                textDecoration: 'none',
                animation: 'vibrate 6s ease-in-out infinite, pulseGlow 3s ease-in-out infinite',
              }}
            >
              <FingerprintIcon />
              Хочу цей курс
            </a>
          </div>

          {/* Center column */}
          <div className="hero-center-col" style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'floatY 9s ease-in-out infinite',
          }}>
            {/* Pink glow */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: isTablet ? '280px' : 'clamp(280px, calc(28vw + 20px), 440px)', height: isTablet ? '280px' : 'clamp(280px, calc(28vw + 20px), 440px)', borderRadius: '50%',
              background: 'radial-gradient(circle at center, rgba(255,158,216,0.6) 0%, rgba(255,102,196,0.4) 35%, rgba(255,102,196,0) 70%)',
              filter: 'blur(18px)',
              opacity: 0.85,
              zIndex: 0,
              pointerEvents: 'none',
              animation: 'glow 7s ease-in-out infinite',
            }} />

            <>
              <img
                src="/images/kateryna-moon.png"
                alt="Катерина Кармазіна"
                className="hero-moon-desktop"
                style={{
                  width: 'clamp(260px, 28vw, 420px)',
                  height: 'clamp(260px, 28vw, 420px)',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 1,
                  filter: 'drop-shadow(0 0 36px rgba(255,158,216,0.45))',
                }}
              />
              <img
                src="/images/kateryna-moon-mobile.png"
                alt="Катерина Кармазіна"
                className="hero-moon-mobile"
                style={{
                  width: '100%',
                  maxWidth: '380px',
                  height: 'auto',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </>
          </div>

          {/* Right column */}
          <div className="hero-right-col" style={{ display: 'flex', alignItems: 'center', paddingLeft: 40, minWidth: 0 }}>

            <svg
              className="mobile-hero-wave"
              style={{
                position: 'absolute',
                top: -80,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100vw',
                height: 80,
                display: 'none',
                pointerEvents: 'none',
                zIndex: 0,
              }}
              viewBox="0 0 390 80"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 80 L0 0 Q195 60 390 0 L390 80 Z"
                fill="#FCFAFB"
              />
            </svg>

            {/* Mobile blobs */}
            <img className="mobile-blob-img" src="/images/blobs/blob-6.png" style={{ position: 'absolute', top: '15px', left: '-10px', width: '90px', height: 'auto', opacity: 0.85, animation: 'blobA 13s ease-in-out infinite', pointerEvents: 'none', display: 'none' }} />
            <img className="mobile-blob-img" src="/images/blobs/blob-2.png" style={{ position: 'absolute', bottom: '15px', right: '-10px', width: '110px', height: 'auto', opacity: 0.85, animation: 'blobB 17s ease-in-out infinite', pointerEvents: 'none', display: 'none' }} />
            <img className="mobile-blob-img" src="/images/blobs/blob-4.png" style={{ position: 'absolute', top: '35px', right: '14px', width: '50px', height: 'auto', opacity: 0.75, animation: 'blobC 15s ease-in-out infinite', pointerEvents: 'none', display: 'none' }} />
            <img className="mobile-blob-img" src="/images/blobs/blob-7.png" style={{ position: 'absolute', top: '45%', left: '8px', width: '45px', height: 'auto', opacity: 0.7, animation: 'blobA 19s ease-in-out infinite reverse', pointerEvents: 'none', display: 'none' }} />

            <div className="hero-card glass-card" style={{
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              borderRadius: 26,
              padding: 'clamp(14px, 2vw, 30px)',
              overflow: 'hidden',
              maxWidth: '100%',
            }}>
              <p className="hero-card-title" style={{ fontSize: 'clamp(11px, 1vw, 14px)', lineHeight: 1.4, marginBottom: 20 }}>
                <strong style={{ fontWeight: 700, color: '#28201E' }}>Формат: науково обґрунтовані лекції в записі</strong>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {bulletPoints.map((text, i) => (
                  <li key={i} className="hero-card-li" style={{ display: 'flex', gap: 13, alignItems: 'flex-start', color: '#28201E', fontSize: 'clamp(11px, 1vw, 14px)', lineHeight: 1.55 }}>
                    <MoonBullet />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive visibility */}
      <style>{`
        .hero-moon-mobile { display: none; }
        .hero-moon-desktop { display: block; }
        .mobile-hero-wave { display: none; }
        .hero-nav { min-width: 0; }
        @media (min-width: 1025px) {
          .hero-desktop { display: block !important; }
          .hero-nav-links { display: flex !important; }
          .hero-hamburger { display: none !important; }
        }
        @media (max-width: 1024px) and (orientation: landscape) {
          .hero-nav-link { font-size: 12px !important; }
          .hero-header-grid { padding: 14px 20px !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .hero-desktop { display: block !important; }
          .hero-nav-links { display: none !important; }
          .hero-hamburger { display: flex !important; }
          .hero-right-bg { overflow: hidden !important; }
        }
        @media (max-width: 767px),
        (max-width: 1024px) and (orientation: portrait) {
          .hero-desktop { display: block !important; }
          .hero-right-bg { display: none !important; }
          .hero-moon-desktop { display: none !important; }
          .hero-nav-links { display: none !important; }
          .hero-hamburger { display: flex !important; }
          .hero-hamburger svg line { stroke: white !important; }
          .hero-header-grid { padding: 14px 20px !important; }
          .hero-logo { height: 24px !important; }

          .hero-moon-mobile {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 420px !important;
            height: auto !important;
            position: relative !important;
            animation: none !important;
            filter: drop-shadow(0 0 40px rgba(255,102,196,0.6)) !important;
          }

          .hero-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            padding: 16px 20px 0 !important;
            overflow: hidden !important;
            gap: 0 !important;
          }

          .hero-left-col {
            order: 1 !important;
            width: 100% !important;
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            padding: 0 !important;
            gap: 5px !important;
            position: relative !important;
            z-index: 3 !important;
          }
          .hero-left-col h1 {
            font-size: 38px !important;
            line-height: 1.1 !important;
            margin-bottom: 8px !important;
          }
          .hero-left-col p {
            font-size: 14px !important;
            line-height: 1.5 !important;
            margin-bottom: 4px !important;
          }
          .hero-left-col [style*="letter-spacing"] {
            font-size: 10px !important;
            margin-bottom: 8px !important;
          }

          .hero-cta-btn {
            align-self: center !important;
            width: auto !important;
            margin-top: 16px !important;
            margin-bottom: 24px !important;
          }

          .hero-center-col {
            order: 2 !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            position: relative !important;
            z-index: 2 !important;
            padding: 0 !important;
            margin: 0 !important;
            overflow: visible !important;
            animation: none !important;
            margin-bottom: -145px !important;
          }

          .hero-center-col img {
            object-fit: contain !important;
            min-width: 420px !important;
            min-height: 420px !important;

            max-width: 520px !important;
            max-height: 520px !important;
          }

          .hero-right-col {
            order: 3 !important;
            display: block !important;
            width: calc(100% + 40px) !important;
            margin-left: -20px !important;
            margin-right: -20px !important;
            background: #FCFAFB !important;
            border-radius: 0 !important;
            padding: 0 24px 40px !important;
            position: relative !important;
            z-index: 3 !important;
            border: none !important;
            box-shadow: none !important;
            overflow: visible !important;
          }
          .hero-right-col .glass-card {
            background: rgba(255,255,255,0.7) !important;
            backdrop-filter: blur(14px) !important;
            -webkit-backdrop-filter: blur(14px) !important;
            border-radius: 20px !important;
            padding: 15px !important;
            box-shadow: 0 4px 24px rgba(0,0,0,0.06) !important;
          }
          .hero-card-title {
            font-size: 15px !important;
            color: #28201E !important;
            margin-bottom: 16px !important;
            text-align: center !important;
          }
          .hero-card-li {
            font-size: 13px !important;
            color: #28201E !important;
          }
          .mobile-hero-wave {
            display: block !important;
            width: 100% !important;
            height: 100px !important;
          }
          .mobile-blob-img {
            display: block !important;
            z-index: 0 !important;
          }
          .hero-right-col .glass-card {
            position: relative !important;
            z-index: 1 !important;
          }
        }
      `}</style>
    </>
  );
}
