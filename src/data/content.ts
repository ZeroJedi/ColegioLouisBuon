/**
 * ============================================================
 *  CONTENT.TS — Archivo Central de Contenidos del Sitio Web
 *  Colegio Louis Buon Langlais
 * ============================================================
 *
 *  ¿Cómo usar este archivo?
 *  Edita aquí cualquier dato y se actualizará automáticamente
 *  en todas las páginas y secciones del sitio.
 *
 *  Importación en cualquier archivo:
 *    import { SCHOOL, CONTACT, HOME, MAPS } from '@/data/content';
 * ============================================================
 */

// ─── Identidad del Colegio ────────────────────────────────────────────────────
export const SCHOOL = {
  /** Nombre oficial. Aparece en: Header, Footer, layout.tsx (SEO), page.tsx (Hero) */
  nombre: 'Colegio Louis Buon Langlais',
  /** Clave de Centro de Trabajo. Aparece en: Footer */
  cct: 'CCT: 09PES0883-D',
  /** Eslogan principal corto. Aparece en: Footer, layout.tsx (SEO), aviso-de-privacidad */
  slogan: 'Educación integral, personalizada y trilingüe para los líderes del mañana.',
  /** Eslogan del Hero con nivel educativo. Aparece en: page.tsx (Hero) */
  sloganHero: 'Nivel Secundaria con educación integral, personalizada y trilingüe para los líderes del mañana.',
  /** URL pública del sitio. Aparece en: layout.tsx (JSON-LD SEO) */
  urlSitio: 'https://colegiolouisbuonlanglais.edu.mx',
  /** Ruta del logo oficial optimizado (WebP con transparencia, 149x200px, ~17KB) */
  logo: '/logocolegio.webp',
  /** Imagen para compartir en redes sociales (1200x630 px) */
  ogImage: '/og-image.png',
  /** Logo optimizado para compartir en mensajería cuadrada (600x600 px) */
  logoShare: '/logo-share.png',
};

// ─── Datos de Contacto ────────────────────────────────────────────────────────
export const CONTACT = {
  /** Número de teléfono en formato nacional. Aparece en: Footer, contacto/page.tsx, aviso-de-privacidad */
  telefonoMostrar: '55 3332 3221',
  /** Número para enlace tel:. Aparece en: Footer, contacto/page.tsx, aviso-de-privacidad, layout.tsx (FAB), layout.tsx (JSON-LD) */
  telefonoTel: '+525533323221',
  /** Número de WhatsApp (formato internacional sin +). Aparece en: contacto/page.tsx, aviso-de-privacidad, layout.tsx (FAB) */
  whatsappNumero: '5215533323221',
  /** Mensaje predeterminado para iniciar conversación en WhatsApp */
  whatsappMensaje: 'Hola, deseo información sobre la Secundaria Luis Boun Langlais',
  /** Enlace directo de WhatsApp con mensaje prellenado */
  whatsappUrl: 'https://wa.me/5215533323221?text=Hola%2C%20deseo%20informaci%C3%B3n%20sobre%20la%20Secundaria%20Luis%20Boun%20Langlais',
  /** Correo electrónico. Aparece en: Footer, contacto/page.tsx, layout.tsx (JSON-LD) */
  email: 'colegiobuon@gmail.com',
  /** Horario de atención — días. Aparece en: Footer, contacto/page.tsx */
  horarioDias: 'Lunes a Viernes',
  /** Horario de atención — horas. Aparece en: Footer, contacto/page.tsx */
  horarioHoras: '7:00 a.m. – 3:00 p.m.',
  /** Horario fin de semana. Aparece en: Footer, contacto/page.tsx */
  horarioFindeSemana: 'Sábado y Domingo: Cerrado.',
  /** URL de Facebook. Aparece en: layout.tsx (FAB) */
  facebook: 'https://www.facebook.com/ColegioLouisBuonLanglais/',
};

// ─── Textos de la Página de Contacto ──────────────────────────────────────────
export const CONTACT_PAGE = {
  titulo: 'Contacto y Ubicación',
  subtitulo: 'Estamos para atenderte. Para brindarte una atención personalizada, resolver dudas de inscripción o agendar un recorrido por nuestras instalaciones, comunícate por cualquiera de nuestros canales oficiales directos.',
};

// ─── Ubicación ────────────────────────────────────────────────────────────────
export const MAPS = {
  /** Calle y colonia. Aparece en: Footer, contacto/page.tsx, aviso-de-privacidad, layout.tsx (JSON-LD) */
  streetAddress: 'Calle 11 Número 87, Col. Olivar del Conde, Olivar del Conde 1ra Secc',
  /** Delegación / Alcaldía. Aparece en: layout.tsx (JSON-LD) */
  alcaldia: 'Álvaro Obregón',
  /** Ciudad. Aparece en: layout.tsx (JSON-LD) */
  ciudad: 'Ciudad de México',
  /** Código Postal. Aparece en: layout.tsx (JSON-LD) */
  cp: '01400',
  /** Dirección completa en una línea. Aparece en: contacto/page.tsx, aviso-de-privacidad */
  direccionCompleta: 'Calle 11 Número 87, Col. Olivar del Conde, Olivar del Conde 1ra Secc, Álvaro Obregón, 01400 Ciudad de México, CDMX',
  /** Dirección en dos líneas (para el Footer). Aparece en: Footer */
  direccionLinea1: 'Calle 11 Num. 87, Col. Olivar del Conde, Olivar del Conde 1ra Secc,',
  direccionLinea2: 'Álvaro Obregón, 01400 Ciudad de México, CDMX',
  /** Enlace corto de Google Maps. Aparece en: Footer, contacto/page.tsx, layout.tsx (JSON-LD) */
  googleMapsUrl: 'https://maps.app.goo.gl/hFdndL1WdZ5VWjcD7',
  /** URL del iframe embebido de Google Maps. Aparece en: Footer, contacto/page.tsx */
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1209355181716!2d-99.21058712391217!3d19.373845887258327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20036e464d697%3A0xbf1aa2b7934311e1!2sColegio%20Louis%20Buon%20Langlais!5e0!3m2!1ses!2smx!4v1710000000000!5m2!1ses!2smx',
  /** Coordenadas GPS — Latitud. Aparece en: layout.tsx (JSON-LD) */
  latitud: 19.3738459,
  /** Coordenadas GPS — Longitud. Aparece en: layout.tsx (JSON-LD) */
  longitud: -99.2080122,
};

// ─── Textos de la Página de Inicio ───────────────────────────────────────────
export const HOME = {
  /** Título H1 del Hero. Aparece en: page.tsx */
  heroTitulo: 'Colegio Louis Buon Langlais',
  /** Texto del botón CTA del Hero. Aparece en: page.tsx */
  heroCta: 'Inscríbete Ahora',
  /** Título de la segunda sección. Aparece en: page.tsx */
  bienvenidaTitulo: 'Bienvenido a la Excelencia',
  /** Párrafo de la sección de bienvenida. Aparece en: page.tsx */
  bienvenidaTexto: 'Nuestra institución se ha distinguido por brindar un modelo de enseñanza personalizada y un programa trilingüe (español, francés e inglés), superando los estándares de la SEP.',
  /** Botón de la sección de bienvenida. Aparece en: page.tsx */
  bienvenidaCta: 'Conoce nuestra historia',
  /** Título de la sección de galería. Aparece en: page.tsx */
  galeriaTitulo: 'Nuestras Instalaciones',
  /** Subtítulo de la galería. Aparece en: page.tsx */
  galeriaSubtitulo: 'Descubre los espacios donde se forman los líderes del mañana.',
};

// ─── Sección: Lo Que Nos Distingue (Diferenciadores Clave) ────────────────────
export const DISTINCTIONS = {
  /** Título principal de la sección destacada */
  titulo: 'Lo que nos distingue',
  /** Subtítulo explicativo con valor pedagógico e institucional */
  subtitulo: 'Compromiso, rigor académico y resultados comprobables que impulsan el desarrollo integral de cada estudiante.',
  /** Etiqueta superior / Kicker */
  kicker: 'Pilares de Excelencia',
  /** Tarjetas de diferenciadores académicos */
  tarjetas: [
    {
      id: 'matematicas',
      titulo: 'Alto Nivel en Matemáticas',
      badge: 'Materia Líder',
      destacado: '#1 en Calificación y Promedio',
      descripcion: 'Nuestra metodología fomenta el razonamiento analítico y la resolución práctica de problemas. Matemáticas se posiciona como la materia con el mejor promedio general y rendimiento sobresaliente de nuestros alumnos.',
      colorAcento: 'var(--color-blue)', // #2c4c9c
      icono: 'matematicas'
    },
    {
      id: 'idiomas',
      titulo: 'Certificaciones Internacionales',
      badge: 'Trilingüe: Francés e Inglés',
      destacado: 'TOEFL Jr. & DELF',
      descripcion: 'Brindamos una preparación exhaustiva orientada a la acreditación de exámenes con validez internacional: TOEFL Junior para inglés y certificaciones DELF para francés, avalando un dominio real de idiomas.',
      colorAcento: 'var(--color-red)', // #e52720
      icono: 'idiomas'
    },
    {
      id: 'comipems',
      titulo: 'Efectividad en COMIPEMS',
      badge: 'Ingreso a Nivel Medio Superior',
      porcentajeMeta: 90,
      sufijo: '%',
      etiquetaContador: 'en su primera opción',
      descripcion: 'El 90% de nuestros egresados obtienen su primera opción en el examen de asignación COMIPEMS (UNAM, IPN y preparatorias oficiales de alta demanda), gracias a nuestro programa de asesoría y simuladores continuos.',
      colorAcento: 'var(--color-blue)', // #2c4c9c
      icono: 'comipems'
    }
  ]
};
