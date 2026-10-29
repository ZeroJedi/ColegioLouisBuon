'use client';

/**
 * ====================================================================
 * COMPONENTE: Distinctions ("Lo que nos distingue")
 * Arquitectura: Clean Component / Atomic Design (Organism)
 * 
 * Propósito:
 * Presentar de forma moderna, accesible e interactiva las tres fortalezas
 * pedagógicas clave del Colegio Louis Buon Langlais:
 * 1. Excelencia en Matemáticas (materia con mejor promedio).
 * 2. Preparación rigurosa en idiomas (TOEFL Jr. y DELF).
 * 3. Contador animado para el 90% de asignación en 1ra opción COMIPEMS.
 * 
 * Rendimiento & UX:
 * - Utiliza IntersectionObserver para iniciar la animación únicamente
 *   cuando la sección entra al viewport del usuario (evita trabajo innecesario).
 * - Animación fluida con `requestAnimationFrame` y curva ease-out expo.
 * - Iconografía SVG inline de alta calidad (0 KB de peticiones de red adicionales).
 * - Soporta navegación por teclado y contraste adaptativo (Light / Dark mode).
 * ====================================================================
 */

import React, { useEffect, useRef, useState, memo } from 'react';
import { DISTINCTIONS } from '@/data/content';

/**
 * Hook personalizado para conteo progresivo paso a paso
 * Incrementa visiblemente número por número (0 -> 1 -> 2 ... -> 90)
 * para que el ojo humano aprecie con total claridad el incremento.
 * 
 * @param meta Valor numérico al que llegará la animación (90)
 * @param iniciar Booleano que activa la animación cuando la tarjeta está posicionada
 */
function useContadorAnimado(meta: number = 90, iniciar: boolean = false): number {
  const [valor, setValor] = useState<number>(0);

  useEffect(() => {
    // Si la tarjeta no está posicionada en el viewport, mantener o reiniciar en 0
    if (!iniciar) {
      setValor(0);
      return;
    }

    let actual = 0;
    let intervaloId: NodeJS.Timeout | null = null;

    // Pequeño retardo de 250ms tras posicionarse para que el usuario perciba el 0 inicial
    const retardoInicial = setTimeout(() => {
      // 90 incrementos a 22ms por paso = ~2.0 segundos de conteo claramente perceptible
      intervaloId = setInterval(() => {
        actual += 1;
        setValor(actual);
        if (actual >= meta) {
          if (intervaloId) clearInterval(intervaloId);
        }
      }, 22);
    }, 250);

    return () => {
      clearTimeout(retardoInicial);
      if (intervaloId) clearInterval(intervaloId);
    };
  }, [meta, iniciar]);

  return valor;
}

/**
 * Componente memorizado para renderizar iconos SVG temáticos
 * Diseñados a medida para cumplir con la identidad visual institucional
 */
const IconoDistincion = memo(function IconoDistincion({ tipo }: { tipo: string }) {
  if (tipo === 'matematicas') {
    return (
      <svg
        className="distinction-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Símbolo Sigma pedagógico y elementos de análisis */}
        <path d="M18 6V4H6l6 8-6 8h12v-2" />
        <circle cx="17.5" cy="12" r="1.5" fill="currentColor" />
        <path d="M11 4v3" />
        <path d="M11 17v3" />
      </svg>
    );
  }

  if (tipo === 'idiomas') {
    return (
      <svg
        className="distinction-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Globo terráqueo y certificación global trilingüe */}
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    );
  }

  // Por defecto: icono 'comipems' (Insignia de logro / Copa de éxito académico)
  return (
    <svg
      className="distinction-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1h10v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" />
      <path d="M6 4h12v5a6 6 0 0 1-12 0V4z" />
    </svg>
  );
});

export default function Distinctions() {
  const comipemsCardRef = useRef<HTMLElement>(null);
  const [esVisible, setEsVisible] = useState<boolean>(false);

  // IntersectionObserver anclado directamente a la tarjeta COMIPEMS
  // Requiere que la tarjeta esté al menos 35% dentro del campo visual para iniciar el conteo
  useEffect(() => {
    const elemento = comipemsCardRef.current;
    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          setEsVisible(true);
        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
          setEsVisible(false);
        }
      },
      {
        threshold: [0.1, 0.35]
      }
    );

    observer.observe(elemento);

    return () => observer.disconnect();
  }, []);

  // Animación del porcentaje para COMIPEMS (meta: 90% paso a paso)
  const contadorComipems = useContadorAnimado(90, esVisible);

  return (
    <section 
      className="section distinctions-section"
      id="lo-que-nos-distingue"
      aria-labelledby="distinctions-title"
    >
      <div className="container">
        {/* Encabezado semántico con Kicker institucional */}
        <div className="distinctions-header">
          <span className="distinctions-kicker">{DISTINCTIONS.kicker}</span>
          <h2 id="distinctions-title" className="section-title">
            {DISTINCTIONS.titulo}
          </h2>
          <p className="distinctions-subtitle">
            {DISTINCTIONS.subtitulo}
          </p>
        </div>

        {/* Tarjetas distribuidas en Grid responsivo */}
        <div className="distinctions-grid">
          {DISTINCTIONS.tarjetas.map((tarjeta) => {
            const esTarjetaComipems = tarjeta.id === 'comipems';

            return (
              <article 
                key={tarjeta.id}
                ref={esTarjetaComipems ? comipemsCardRef : undefined}
                className={`distinction-card distinction-card-${tarjeta.id}`}
                tabIndex={0}
                aria-label={`${tarjeta.titulo}: ${tarjeta.destacado || tarjeta.etiquetaContador}`}
              >
                {/* Cabecera de la tarjeta: Icono temático + Badge */}
                <div className="distinction-card-header">
                  <div 
                    className="distinction-icon-box"
                    style={{ color: tarjeta.colorAcento }}
                  >
                    <IconoDistincion tipo={tarjeta.icono} />
                  </div>
                  <span className="distinction-badge">
                    {tarjeta.badge}
                  </span>
                </div>

                {/* Zona de Métrica / Destacado visual */}
                <div className="distinction-metric-zone">
                  {esTarjetaComipems ? (
                    <div className="counter-wrapper">
                      <span className="counter-val">{contadorComipems}</span>
                      <span className="counter-pct">{tarjeta.sufijo}</span>
                      <span className="counter-tag">{tarjeta.etiquetaContador}</span>
                    </div>
                  ) : (
                    <div 
                      className="highlight-tag"
                      style={{ borderLeftColor: tarjeta.colorAcento }}
                    >
                      {tarjeta.destacado}
                    </div>
                  )}
                </div>

                {/* Título y Descripción pedagógica */}
                <h3 className="distinction-card-title">{tarjeta.titulo}</h3>
                <p className="distinction-card-desc">{tarjeta.descripcion}</p>

                {/* Línea de acento institucional en hover */}
                <div className="distinction-card-footer" aria-hidden="true">
                  <div 
                    className="distinction-accent-line"
                    style={{ backgroundColor: tarjeta.colorAcento }}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
