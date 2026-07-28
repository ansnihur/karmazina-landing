'use client';

import { useState, useEffect } from 'react';
import MoonBullet from '@/components/ui/MoonBullet';

const FingerprintIcon = ({ stroke = '#FF9ED8' }: { stroke?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 9.4A8 8 0 0 1 12 5a8 8 0 0 1 5.5 2.2" />
    <path d="M6.4 13c.2-3 2.4-5.3 5.6-5.3 1 0 1.9.2 2.7.7" />
    <path d="M8.6 8.7A5 5 0 0 1 17 12c0 1.1 0 2.6-.3 3.8" />
    <path d="M12 11a1.5 1.5 0 0 1 1.5 1.5c0 2-.4 3.6-1 4.7" />
    <path d="M9.4 16.6c.5-1.2.7-2.5.6-3.9" />
  </svg>
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
  <><strong style={{ color: '#FF66C4', fontWeight: 800, textTransform: 'uppercase' }}>Авторська космічна медитація</strong> <br></br> «Пошли внутрішнього критика на сині лани».</>,
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
          overflow: 'hidden',
        }}
        className="hero-desktop"
      >
        {/* Two-half background */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
          {/* Dark left half */}
          <div style={{ flex: 1, background: '#28201E', position: 'relative' }}>
          </div>

          {/* Light right half */}
          <div className="hero-right-bg" style={{ flex: 1, background: '#FCFAFB', position: 'relative', overflow: 'hidden' }}>
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
              <a href="/" style={{ textDecoration: 'none' }}>
                <img src="/images/wordmark.png" alt="cosmic coach" className="hero-logo" height={isTablet ? 28 : 38} />
              </a>
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
                  className="hero-nav-cta"
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
          <button className="hero-menu-close" onClick={() => setMenuOpen(false)} style={{
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
          <img src="/images/wordmark.png" alt="cosmic coach" style={{ height: 32, marginBottom: 48, opacity: 0.9 }} />

          {/* Nav links */}
          <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="hero-nav-link" style={{
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
            animation: 'pulseGlow 3s ease-in-out infinite',
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
              whiteSpace: 'nowrap',
            }}>
              транс<span style={{ fontFamily: 'var(--font-montserrat)' }}>ф</span>ормаційний курс
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

            <span className="cta-scale-wrap hero-cta-wrap" style={{ alignSelf: 'flex-start' }}>
              <a
                href="#price"
                className="hero-cta-btn"
                style={{
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
            </span>
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
                src="/images/kateryna-moon.png"
                alt="Катерина Кармазіна"
                className="hero-moon-mobile"
                style={{
                  width: '100%',
                  maxWidth: '380px',
                  height: 'auto',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 2,
                }}
              />
            </>
          </div>

          {/* Right column */}
          <div className="hero-right-col" style={{ display: 'flex', alignItems: 'center', paddingLeft: 40, minWidth: 0 }}>

            <div style={{ position: 'relative', width: '100%', isolation: 'isolate', zIndex: 4 }}>

              {/* blob-1: верхній лівий кут, ЗА карткою */}
              <img src="/images/blobs/blob-1.png" className="hero-card-blob-1" style={{
                opacity: 0.85, pointerEvents: 'none',
                animation: 'blobA 13s ease-in-out infinite',
              }} />

              {/* blob-2: середина лівого боку, переполовинений, ЗА карткою */}
              <img src="/images/blobs/blob-2.png" className="hero-card-blob-2" style={{
                opacity: 0.8, pointerEvents: 'none',
                animation: 'blobB 17s ease-in-out infinite',
              }} />

              {/* blob-3: знизу зліва 25px від краю, ЗА карткою */}
              <img src="/images/blobs/blob-3.png" className="hero-card-blob-3" style={{
                opacity: 0.75, pointerEvents: 'none',
                animation: 'blobC 21s ease-in-out infinite',
              }} />

              {/* blob-5: правий верхній кут, центр на куті, ЗА карткою */}
              <img src="/images/blobs/blob-5.png" className="hero-card-blob-5" style={{
                opacity: 0.85, pointerEvents: 'none',
                animation: 'blobC 15s ease-in-out infinite',
              }} />

              {/* blob-4: правий нижній кут, центр на куті, НА картці */}
              <img src="/images/blobs/blob-4.png" className="hero-card-blob-4" style={{
                opacity: 0.9, pointerEvents: 'none',
                animation: 'blobA 19s ease-in-out infinite reverse',
              }} />

              {/* Картка */}
              <div className="hero-card glass-card" style={{
                position: 'relative',
                borderRadius: 26,
                padding: 'clamp(14px, 2vw, 30px)',
                maxWidth: '100%',
                boxShadow: '0 8px 28px rgba(255,102,196,0.52)',
                overflow: 'visible',
                zIndex: 1,
              }}>
                {/* background layer */}
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: 26,
                  background: 'rgba(220,215,225,0.4)',
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)',
                  pointerEvents: 'none',
                }} />

                {/* content layer */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <p className="hero-card-title" style={{ fontSize: 'clamp(11px, 1vw, 14px)', lineHeight: 1.4, marginBottom: 20, textAlign: 'center' }}>
                    <strong style={{ fontWeight: 700, color: '#28201E' }}><span style={{ fontFamily: 'var(--font-montserrat)' }}>Ф</span>ормат: науково обґрунтовані лекції в записі</strong>
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
          </div>
        </div>
      </section>

      {/* Responsive visibility */}
      <style>{`
        .hero-moon-mobile { display: none; }
        .hero-moon-desktop { display: block; }
        .mobile-hero-wave { display: none; }
        .hero-nav { min-width: 0; }

        .hero-hamburger, .hero-menu-close {
          transition: transform 0.2s ease;
        }
        .hero-hamburger:hover, .hero-menu-close:hover {
          transform: scale(1.15);
        }

        .hero-card-blob-1, .hero-card-blob-2, .hero-card-blob-3,
        .hero-card-blob-4, .hero-card-blob-5 { position: absolute !important; }

        /* blob-1: верхній лівий кут, ЗА карткою */
        @media (max-width: 767px),
        (max-width: 1024px) and (orientation: portrait) {
          .hero-card-blob-1 { width: 195px !important; top: -110px !important; left: -90px !important; z-index: -1 !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .hero-card-blob-1 { width: 189px !important; top: -105px !important; left: -63px !important; z-index: -1 !important; }
        }
        @media (min-width: 1025px) {
          .hero-card-blob-1 { width: 270px !important; top: -150px !important; left: -90px !important; z-index: -1 !important; }
        }

        /* blob-2: середина лівого боку, переполовинений, ЗА карткою */
        @media (max-width: 767px),
        (max-width: 1024px) and (orientation: portrait) {
          .hero-card-blob-2 { width: 150px !important; top: 50% !important; left: 0 !important; transform: translateY(-50%) translateX(-50%) !important; z-index: -1 !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .hero-card-blob-2 { width: 168px !important; top: 50% !important; left: 0 !important; transform: translateY(-50%) translateX(-50%) !important; z-index: -1 !important; }
        }
        @media (min-width: 1025px) {
          .hero-card-blob-2 { width: 240px !important; top: 50% !important; left: 0 !important; transform: translateY(-50%) translateX(-50%) !important; z-index: -1 !important; }
        }

        /* blob-3: знизу зліва 25px від краю, ЗА карткою */
        @media (max-width: 767px),
        (max-width: 1024px) and (orientation: portrait) {
          .hero-card-blob-3 { width: 240px !important; bottom: -135px !important; left: -25px !important; z-index: -1 !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .hero-card-blob-3 { width: 200px !important; bottom: -110px !important; left: -39px !important; z-index: -1 !important; }
        }
        @media (min-width: 1025px) {
          .hero-card-blob-3 { width: 285px !important; bottom: -157px !important; left: -55px !important; z-index: -1 !important; }
        }

        /* blob-4: правий нижній кут, центр на куті, НА картці */
        @media (max-width: 767px),
        (max-width: 1024px) and (orientation: portrait) {
          .hero-card-blob-4 { width: 240px !important; bottom: -126px !important; right: -89px !important; z-index: 2 !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .hero-card-blob-4 { width: 315px !important; bottom: -158px !important; right: -137px !important; z-index: 2 !important; }
        }
        @media (min-width: 1025px) {
          .hero-card-blob-4 { width: 450px !important; bottom: -225px !important; right: -195px !important; z-index: 2 !important; }
        }

        /* blob-5: правий верхній кут, центр на куті, ЗА карткою */
        @media (max-width: 767px),
        (max-width: 1024px) and (orientation: portrait) {
          .hero-card-blob-5 { width: 165px !important; top: -96px !important; right: -55px !important; z-index: -1 !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .hero-card-blob-5 { width: 189px !important; top: -95px !important; right: -74px !important; z-index: -1 !important; }
        }
        @media (min-width: 1025px) {
          .hero-card-blob-5 { width: 270px !important; top: -135px !important; right: -105px !important; z-index: -1 !important; }
        }

        @media (min-width: 1025px) {
          .hero-desktop { display: block !important; height: 100dvh !important; max-height: 100dvh !important; overflow: hidden !important; }
          .hero-nav-links { display: flex !important; }
          .hero-hamburger { display: none !important; }
        }
        @media (max-width: 1024px) and (orientation: landscape) {
          .hero-nav-link, .hero-nav-cta { font-size: 12px !important; }
          .hero-header-grid { padding: 14px 20px !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .hero-desktop { display: block !important; }
          .hero-nav-links { display: none !important; }
          .hero-hamburger { display: flex !important; }
          .hero-right-bg { overflow: hidden !important; }
          .hero-left-col { min-width: 260px !important; }
        }
        @media (max-width: 767px),
        (max-width: 1024px) and (orientation: portrait) {
          .hero-desktop { display: block !important; height: auto !important; max-height: none !important; overflow: visible !important; }
          .hero-grid { overflow: visible !important; }
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
          .hero-cta-wrap {
            align-self: center !important;
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
            padding: 204px 24px 64px !important;
            position: relative !important;
            border: none !important;
            box-shadow: none !important;
            overflow: visible !important;
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
          .hero-right-col .glass-card {
            position: relative !important;
            z-index: 1 !important;
          }
        }
      `}</style>
    </>
  );
}
