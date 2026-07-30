'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const reviews = Array.from({ length: 30 }, (_, i) => ({
  id: `review-${i + 1}`,
  src: `/images/reviews/review-${i + 1}.png`,
}));

export default function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedReview, setSelectedReview] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollLeft = () => {
    trackRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    trackRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <section id="reviews" style={{
      position: 'relative', zIndex: 2,
      background: '#FCFAFB', overflow: 'hidden'
    }}>

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1180, margin: '0 auto',
        padding: 'clamp(64px, 8vw, 90px) clamp(20px, 4vw, 48px)'
      }}>

        {/* Заголовок */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4vw, 50px)' }}>
          <h2 style={{
            fontFamily: 'var(--font-nyght)',
            fontWeight: 400,
            fontSize: 'clamp(32px, 4vw, 46px)',
            lineHeight: 1.08,
            color: '#28201E',
          }}>Відгуки про мене</h2>
        </div>

        {/* Карусель */}
        <div style={{ position: 'relative' }}>

          {/* Кнопка ліво */}
          <button
            onClick={scrollLeft}
            aria-label="Назад"
            className="reviews-btn"
            style={{
              position: 'absolute', left: -8, top: '50%',
              transform: 'translateY(-50%)', zIndex: 3,
              width: 52, height: 52, borderRadius: '50%',
              border: '1px solid rgba(120,60,90,0.15)',
              background: '#fff', color: '#28201E',
              fontSize: 22, cursor: 'pointer',
              boxShadow: '0 10px 28px rgba(120,60,90,0.16)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >‹</button>

          {/* Кнопка право */}
          <button
            onClick={scrollRight}
            aria-label="Далі"
            className="reviews-btn"
            style={{
              position: 'absolute', right: -8, top: '50%',
              transform: 'translateY(-50%)', zIndex: 3,
              width: 52, height: 52, borderRadius: '50%',
              border: '1px solid rgba(120,60,90,0.15)',
              background: '#fff', color: '#28201E',
              fontSize: 22, cursor: 'pointer',
              boxShadow: '0 10px 28px rgba(120,60,90,0.16)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >›</button>

          {/* Трек */}
          <div style={{ position: 'relative' }}>

            {/* blob зверху по центру - великий */}
            <img className="reviews-blob-5" src="/images/blobs/blob-5.png" loading="lazy" style={{
              position: 'absolute',
              top: '-140px',
              left: '350px',
              transform: 'translateX(-50%)',
              width: 'clamp(320px, 15vw, 500px)',
              height: 'auto',
              opacity: 0.85,
              pointerEvents: 'none',
              zIndex: -2,
              animation: 'blobC 15s ease-in-out infinite',
            }} />

            {/* blob справа зверху - маленький круглий */}
            <img className="reviews-blob-3" src="/images/blobs/blob-3.png" loading="lazy" style={{
              position: 'absolute',
              top: '-165px',
              right: '-50px',
              width: 'clamp(240px, 4vw, 340px)',
              height: 'auto',
              opacity: 0.8,
              pointerEvents: 'none',
              zIndex: 2,
              animation: 'blobA 13s ease-in-out infinite',
            }} />

            {/* blob зліва знизу - маленький */}
            <img src="/images/blobs/blob-1.png" loading="lazy" style={{
              position: 'absolute',
              bottom: '-100px',
              left: '-90px',
              width: 'clamp(250px, 6vw, 350px)',
              height: 'auto',
              opacity: 0.8,
              pointerEvents: 'none',
              zIndex: 2,
              animation: 'blobB 17s ease-in-out infinite',
            }} />

            {/* існуючий trackRef div */}
            <div
              ref={trackRef}
              style={{
                display: 'flex',
                gap: 16,
                overflowX: 'auto',
                padding: '6px 44px 18px',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory',
              }}
            >
              {reviews.map((r) => (
                <div
                  key={r.id}
                  onClick={() => setSelectedReview(r.src)}
                  style={{
                    flexShrink: 0,
                    width: 'clamp(220px, 22vw, 300px)',
                    borderRadius: 18,
                    background: 'rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.7)',
                    boxShadow: '0 14px 36px rgba(120,60,90,0.08)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 8,
                    scrollSnapAlign: 'start',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={r.src}
                    alt="Відгук"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: 12,
                      display: 'block',
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement)
                        .parentElement!.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
        @media (max-width: 767px),
        (max-width: 1024px) and (orientation: portrait) {
          .reviews-btn { display: none !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .reviews-blob-5 {
            top: -140px !important;
            left: 200px !important;
          }
        }
        @media (max-width: 767px) {
          .reviews-blob-3 {
            top: -195px !important;
            right: -80px !important;
          }
          .reviews-blob-5 {
            top: -140px !important;
            left: -30px !important;
          }
        }
      `}</style>

      {mounted && selectedReview && createPortal(
        <div
          onClick={() => setSelectedReview(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={() => setSelectedReview(null)}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: '50%',
              width: 44,
              height: 44,
              color: '#fff',
              fontSize: 22,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >✕</button>
          <img
            src={selectedReview}
            alt="Відгук"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: 16,
              boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
              cursor: 'default',
            }}
          />
        </div>,
        document.body
      )}
    </section>
  );
}
