'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
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
            src="/LOGOBuonOFCTRASLUCIDO.png" 
            alt="Logo Colegio Louis Buon Langlais" 
            className="logo-img"
            style={{ width: 'auto', height: '50px' }}
          />
          <span className="logo-text">Colegio Louis Buon Langlais</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            href="/" 
            className={`nav-link ${isHomeActive ? 'nav-link-active' : ''}`} 
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>

          <div className="nav-dropdown">
            <span 
              className={`nav-link ${isAboutActive ? 'nav-link-active' : ''}`} 
              style={{ cursor: 'pointer' }}
            >
              Quiénes Somos ▾
            </span>
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
            onClick={() => { toggleTheme(); setIsMenuOpen(false); }} 
            className="theme-toggle" 
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
        
        <button className="mobile-menu-btn" aria-label="Open Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
}
