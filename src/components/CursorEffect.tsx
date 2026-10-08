'use client';

import { useEffect } from 'react';

export default function CursorEffect() {
  useEffect(() => {
    const container = document.getElementById('stars-container');
    if (!container) return;

    let isMouseMoving = false;
    let mouseTimeout: NodeJS.Timeout;

    const createStar = (x: number, y: number) => {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Randomize size and offset
      const size = Math.random() * 8 + 4; // 4px to 12px
      const offsetX = (Math.random() - 0.5) * 20;
      const offsetY = (Math.random() - 0.5) * 20;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x + offsetX}px`;
      star.style.top = `${y + offsetY}px`;
      
      container.appendChild(star);

      // Remove star after animation (1s)
      setTimeout(() => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      }, 1000);
    };

    const onMouseMove = (e: MouseEvent) => {
      isMouseMoving = true;
      // Throttling star creation
      if (Math.random() > 0.3) {
        createStar(e.clientX, e.clientY);
      }
      
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 100);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div id="stars-container" className="stars-container"></div>;
}
