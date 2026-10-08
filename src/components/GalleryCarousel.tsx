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

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = () => {
    // Evitar que abra si se hizo swipe en pantalla táctil
    if (touchStart !== null && touchEnd !== null && Math.abs(touchStart - touchEnd) > 20) {
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
    if (touchStart !== null && touchEnd !== null) {
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 40;
      const isRightSwipe = distance < -40;

      if (isLeftSwipe) {
        nextImage();
      } else if (isRightSwipe) {
        prevImage();
      }
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
        style={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '900px', 
          margin: '0 auto', 
          aspectRatio: '16/9', 
          overflow: 'hidden', 
          borderRadius: '12px', 
          cursor: 'zoom-in', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)', 
          backgroundColor: 'var(--bg-secondary)', 
          touchAction: 'pan-y' 
        }}
      >
        {images.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt={`Galería Colegio ${idx + 1}`}
            fill
            style={{ 
              objectFit: 'cover', 
              opacity: idx === activeIndex ? 1 : 0, 
              transition: 'opacity 0.5s ease', 
              pointerEvents: 'none' 
            }}
            sizes="(max-width: 900px) 100vw, 900px"
            priority={idx === 0}
          />
        ))}

        {/* Indicador de número de foto */}
        <div style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'rgba(0,0,0,0.6)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: 600,
          zIndex: 10,
          pointerEvents: 'none'
        }}>
          {activeIndex + 1} / {images.length}
        </div>
        
        {images.length > 1 && (
          <>
            <button 
              type="button"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              style={navButtonStyle('left')} 
              aria-label="Anterior"
            >
              ❮
            </button>
            <button 
              type="button"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              style={navButtonStyle('right')} 
              aria-label="Siguiente"
            >
              ❯
            </button>
            
            {/* Puntos de navegación clicables */}
            <div style={{ position: 'absolute', bottom: '15px', left: '0', width: '100%', textAlign: 'center', zIndex: 10 }}>
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => e.stopPropagation()}
                  style={{ 
                    display: 'inline-block', 
                    width: '12px', 
                    height: '12px', 
                    margin: '0 5px', 
                    borderRadius: '50%', 
                    border: 'none',
                    padding: 0,
                    backgroundColor: idx === activeIndex ? 'white' : 'rgba(255,255,255,0.4)', 
                    cursor: 'pointer',
                    transition: 'background-color 0.3s, transform 0.2s',
                    transform: idx === activeIndex ? 'scale(1.2)' : 'scale(1)'
                  }} 
                  aria-label={`Ir a foto ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {isLightboxOpen && (
        <div 
          className="lightbox" 
          onClick={() => setIsLightboxOpen(false)}
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            backgroundColor: 'rgba(0,0,0,0.95)', 
            zIndex: 99999, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            cursor: 'zoom-out' 
          }}
        >
          {/* Contador en Lightbox */}
          <div style={{
            position: 'absolute',
            top: '25px',
            left: '30px',
            background: 'rgba(0,0,0,0.6)',
            color: 'white',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '1rem',
            fontWeight: 600,
            zIndex: 100,
            pointerEvents: 'none'
          }}>
            {activeIndex + 1} de {images.length}
          </div>

          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }} 
            onTouchStart={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
            style={{ 
              position: 'absolute', 
              top: '15px', 
              right: '25px', 
              background: 'none', 
              border: 'none', 
              color: 'white', 
              fontSize: '3.5rem', 
              cursor: 'pointer', 
              zIndex: 100,
              lineHeight: 1
            }}
            aria-label="Cerrar visor"
          >
            ×
          </button>
          
          {images.length > 1 && (
            <button 
              type="button"
              onClick={(e) => { e.stopPropagation(); prevImage(); }} 
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              style={{ ...navButtonStyle('left'), width: '60px', height: '60px', fontSize: '2rem' }}
              aria-label="Anterior"
            >
              ❮
            </button>
          )}
          
          <div 
            style={{ position: 'relative', width: '90%', height: '85%', maxWidth: '1200px', cursor: 'default' }} 
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
              priority
            />
          </div>

          {images.length > 1 && (
            <button 
              type="button"
              onClick={(e) => { e.stopPropagation(); nextImage(); }} 
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              style={{ ...navButtonStyle('right'), width: '60px', height: '60px', fontSize: '2rem' }}
              aria-label="Siguiente"
            >
              ❯
            </button>
          )}
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
