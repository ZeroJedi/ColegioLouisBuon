'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import Image from 'next/image';

import { useState } from 'react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo-container" onClick={() => setIsMenuOpen(false)}>
          <img 
            src="/ArchivosUsuario/LOGOBuonOFCTRASLUCIDO.png" 
            alt="Logo Colegio Louis Buon Langlais" 
            className="logo-img"
            style={{ width: 'auto', height: '50px' }}
          />
          <span className="logo-text">Colegio Louis Buon Langlais</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <div className="nav-dropdown">
            <span className="nav-link" style={{ cursor: 'pointer' }}>Quiénes Somos ▾</span>
            <div className="dropdown-content">
              <Link href="/quienes-somos" onClick={() => setIsMenuOpen(false)}>Historia</Link>
              <Link href="/mision-y-vision" onClick={() => setIsMenuOpen(false)}>Misión y Visión</Link>
              <Link href="/filosofia" onClick={() => setIsMenuOpen(false)}>Filosofía</Link>
            </div>
          </div>
          <Link href="/contacto" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
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
