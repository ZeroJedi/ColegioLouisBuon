'use client';

import { useEffect } from 'react';

export default function CursorEffect() {
  useEffect(() => {
    // Solo activar en dispositivos con mouse/trackpad, no en pantallas táctiles
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const container = document.getElementById('stars-container');
    if (!container) return;

    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;

    // Paleta de colores institucionales con resplandores potentes
    const institutionalColors = [
      // Rojo institucional vibrante (#e52720)
      { core: '#ffffff', glow: '#e52720', shadow: '0 0 20px #e52720, 0 0 35px rgba(229, 39, 32, 0.75)' },
      // Azul institucional profundo (#2c4c9c)
      { core: '#ffffff', glow: '#2c4c9c', shadow: '0 0 20px #3b65cb, 0 0 35px rgba(44, 76, 156, 0.75)' },
      // Blanco puro brillante
      { core: '#ffffff', glow: '#ffffff', shadow: '0 0 18px #ffffff, 0 0 30px rgba(255, 255, 255, 0.85)' },
      // Rojo cálido secundario
      { core: '#ffffff', glow: '#ff3b30', shadow: '0 0 22px #ff3b30, 0 0 38px rgba(255, 59, 48, 0.8)' },
    ];

    const createStar = (x: number, y: number) => {
      const star = document.createElement('div');
      star.className = 'cursor-star';
      
      const palette = institutionalColors[Math.floor(Math.random() * institutionalColors.length)];
      
      // Tamaño más grande: entre 16px y 30px
      const size = Math.floor(Math.random() * 14 + 16);
      const offsetX = (Math.random() - 0.5) * 18;
      const offsetY = (Math.random() - 0.5) * 18;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x + offsetX}px`;
      star.style.top = `${y + offsetY}px`;
      star.style.background = `radial-gradient(circle, ${palette.core} 15%, ${palette.glow} 65%, transparent 100%)`;
      star.style.boxShadow = palette.shadow;
      
      container.appendChild(star);

      // Eliminar después de 750ms
      setTimeout(() => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      }, 750);
    };

    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      
      // Crear destello si se mueve más de 10px o han pasado más de 25ms
      if (dist > 10 && now - lastTime > 25) {
        createStar(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
        lastTime = now;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div id="stars-container" className="stars-container" aria-hidden="true" />;
}
