'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomeActive = pathname === '/';
  const isAboutActive = pathname === '/quienes-somos' || pathname === '/mision-y-vision' || pathname === '/filosofia';
  const isContactActive = pathname === '/contacto';

  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo-container" onClick={() => setIsMenuOpen(false)}>
          <img 
            src="/logocolegio.webp" 
            alt="Logo Colegio Louis Buon Langlais" 
            className="logo-img"
            width={37}
            height={50}
            fetchPriority="high"
            decoding="async"
            style={{ width: 'auto', height: '50px' }}
          />
          <span className="logo-text">Colegio Louis Buon Langlais</span>
        </Link>

        <nav 
          id="main-navigation" 
          className={`nav ${isMenuOpen ? 'open' : ''}`}
          aria-label="Navegación principal"
        >
          <Link 
            href="/" 
            className={`nav-link ${isHomeActive ? 'nav-link-active' : ''}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>

          <Link 
            href="/#lo-que-nos-distingue" 
            className="nav-link" 
            onClick={() => setIsMenuOpen(false)}
          >
            Lo que nos distingue
          </Link>

          <div className="nav-dropdown">
            <button 
              type="button"
              className={`nav-link nav-dropdown-btn ${isAboutActive ? 'nav-link-active' : ''}`} 
              aria-haspopup="true"
              aria-expanded="false"
            >
              Quiénes Somos ▾
            </button>
            <div className="dropdown-content">
              <Link 
                href="/quienes-somos" 
                className={pathname === '/quienes-somos' ? 'nav-link-active' : ''} 
                onClick={() => setIsMenuOpen(false)}
              >
                Historia
              </Link>
              <Link 
                href="/mision-y-vision" 
                className={pathname === '/mision-y-vision' ? 'nav-link-active' : ''} 
                onClick={() => setIsMenuOpen(false)}
              >
                Misión y Visión
              </Link>
              <Link 
                href="/filosofia" 
                className={pathname === '/filosofia' ? 'nav-link-active' : ''} 
                onClick={() => setIsMenuOpen(false)}
              >
                Filosofía
              </Link>
            </div>
          </div>

          <Link 
            href="/contacto" 
            className={`nav-link ${isContactActive ? 'nav-link-active' : ''}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
          
          <button 
            type="button"
            onClick={() => { toggleTheme(); setIsMenuOpen(false); }} 
            className="theme-toggle" 
            aria-label="Cambiar tema claro / oscuro"
            title="Cambiar tema claro / oscuro"
          >
            <span className="theme-icon-moon" aria-hidden="true">🌙</span>
            <span className="theme-icon-sun" aria-hidden="true">☀️</span>
          </button>
        </nav>
        
        <button 
          id="mobile-menu-btn"
          type="button"
          className="mobile-menu-btn" 
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
