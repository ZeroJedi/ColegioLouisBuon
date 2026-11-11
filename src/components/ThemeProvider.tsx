'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider — Arquitectura de Tema de Alta Velocidad (0 ms, sin FOWT)
 *
 * 1. Por defecto: CSS nativo (@media prefers-color-scheme: dark) aplica los colores
 *    del sistema operativo de inmediato (0 ms, sin ejecutar JS, sin scripts en head).
 * 2. Si el usuario elige manualmente un tema mediante el botón toggle (🌙 / ☀️),
 *    se guarda en localStorage ('theme-manual' = 'true') y se establece [data-theme],
 *    el cual tiene prioridad sobre las preferencias del sistema.
 */
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      const wasManual = localStorage.getItem('theme-manual') === 'true';

      if (wasManual && (savedTheme === 'dark' || savedTheme === 'light')) {
        // El usuario tiene una elección manual persistida: forzarla en el DOM
        document.documentElement.setAttribute('data-theme', savedTheme);
        setTheme(savedTheme);
      } else {
        // Sin elección manual: CSS nativo se encarga de la paleta.
        // Removemos data-theme para permitir que las media queries del sistema operen con total libertad
        document.documentElement.removeAttribute('data-theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(systemDark ? 'dark' : 'light');

        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
          if (localStorage.getItem('theme-manual') !== 'true') {
            setTheme(e.matches ? 'dark' : 'light');
          }
        };
        mq.addEventListener('change', handleChange);
        return () => mq.removeEventListener('change', handleChange);
      }
    } catch (_) {
      // Entorno restringido o cookies/localStorage deshabilitadas
    }
  }, []);

  const toggleTheme = () => {
    try {
      // Detectamos con precisión el estado visual activo en el navegador
      const isCurrentlyDark =
        document.documentElement.getAttribute('data-theme') === 'dark' ||
        (!document.documentElement.hasAttribute('data-theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches);

      const newTheme = isCurrentlyDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      localStorage.setItem('theme-manual', 'true');
      setTheme(newTheme);
    } catch (_) {
      setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
