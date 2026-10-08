'use client';

import { useState, TouchEvent } from 'react';
import Image from 'next/image';

interface GalleryCarouselProps {
  images: string[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const activeIndex = currentIndex;

  const nextImage = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (e: React.MouseEvent | React.TouchEvent) => {
    // Evitar que abra si se hizo swipe
    if (touchStart && touchEnd && Math.abs(touchStart - touchEnd) > 20) {
      return;
    }
    setIsLightboxOpen(true);
  };

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <>
      <div 
        className="carousel-container" 
        onClick={openLightbox}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ position: 'relative', width: '100%', maxWidth: '900px', margin: '0 auto', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '12px', cursor: 'zoom-in', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', backgroundColor: 'var(--bg-secondary)', touchAction: 'pan-y' }}
      >
        {images.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt={`Galería Colegio ${idx + 1}`}
            fill
            style={{ objectFit: 'cover', opacity: idx === activeIndex ? 1 : 0, transition: 'opacity 0.5s ease', pointerEvents: 'none' }}
            sizes="(max-width: 900px) 100vw, 900px"
            priority={idx === 0}
          />
        ))}
        
        {images.length > 1 && (
          <>
            <button onClick={prevImage} onTouchEnd={(e) => { e.stopPropagation(); prevImage(e); }} style={navButtonStyle('left')} aria-label="Anterior">❮</button>
            <button onClick={nextImage} onTouchEnd={(e) => { e.stopPropagation(); nextImage(e); }} style={navButtonStyle('right')} aria-label="Siguiente">❯</button>
            
            <div style={{ position: 'absolute', bottom: '15px', left: '0', width: '100%', textAlign: 'center', zIndex: 10 }}>
              {images.map((_, idx) => (
                <span key={idx} style={{ display: 'inline-block', width: '10px', height: '10px', margin: '0 4px', borderRadius: '50%', backgroundColor: idx === activeIndex ? 'white' : 'rgba(255,255,255,0.4)', transition: 'background-color 0.3s' }} />
              ))}
            </div>
          </>
        )}
      </div>

      {isLightboxOpen && (
        <div 
          className="lightbox" 
          onClick={() => setIsLightboxOpen(false)}
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}
        >
          <button onClick={() => setIsLightboxOpen(false)} onTouchEnd={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }} style={{ position: 'absolute', top: '20px', right: '30px', background: 'none', border: 'none', color: 'white', fontSize: '3.5rem', cursor: 'pointer', zIndex: 100 }}>×</button>
          
          {images.length > 1 && <button onClick={prevImage} onTouchEnd={(e) => { e.stopPropagation(); prevImage(e); }} style={{ ...navButtonStyle('left'), width: '60px', height: '60px', fontSize: '2rem' }}>❮</button>}
          
          <div 
            style={{ position: 'relative', width: '90%', height: '90%', maxWidth: '1200px', cursor: 'default' }} 
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <Image
              src={images[activeIndex]}
              alt={`Galería Colegio Ampliada ${activeIndex + 1}`}
              fill
              style={{ objectFit: 'contain', pointerEvents: 'none' }}
              sizes="100vw"
            />
          </div>

          {images.length > 1 && <button onClick={nextImage} onTouchEnd={(e) => { e.stopPropagation(); nextImage(e); }} style={{ ...navButtonStyle('right'), width: '60px', height: '60px', fontSize: '2rem' }}>❯</button>}
        </div>
      )}
    </>
  );
}

function navButtonStyle(side: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute',
    top: '50%',
    [side]: '15px',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.6)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    cursor: 'pointer',
    zIndex: 20,
    transition: 'background 0.2s ease, transform 0.2s ease'
  };
}
