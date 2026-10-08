# Colegio Louis Buon Langlais - Sitio Web Oficial

Sitio web institucional de alto rendimiento, responsivo y optimizado para SEO desarrollado con **Next.js**, **TypeScript** y **Vanilla CSS**. Diseñado bajo estándares de Clean Architecture y preparado para despliegue automático en **Hostinger** mediante exportación estática (`output: 'export'`).

---

## 📁 1. Estructura de Directorios del Proyecto

```text
frontend/
├── public/                               # Archivos estáticos servidos directamente
│   ├── recursos/                         # 📂 Recursos multimedia del colegio
│   │   └── galeria/                      # 📷 Fotografías del carrusel de instalaciones (800x600px)
│   │       ├── 01.webp
│   │       ├── 02.webp
│   │       └── 03.webp
│   │
│   ├── LOGOBuonOFCTRASLUCIDO.png         # 🏫 Logotipo oficial transparente del colegio
│   ├── fondo-pc.webp                     # 🖥️ Fondo de pantalla para Computadoras (1920x1080px)
│   ├── fondo-movil.webp                  # 📱 Fondo de pantalla para Celulares (1080x1920px)
│   │
│   ├── favicon.ico                       # Ícono principal de pestaña del navegador
│   ├── favicon-16x16.png                 # Ícono pequeño para navegadores
│   ├── favicon-32x32.png                 # Ícono estándar para navegadores
│   ├── favicon-48x48.png                 # Ícono mediano para navegadores
│   ├── apple-touch-icon.png              # Ícono para dispositivos Apple (iOS)
│   ├── android-chrome-192x192.png        # Ícono para dispositivos Android (PWA)
│   ├── android-chrome-512x512.png        # Ícono en alta resolución para Android (PWA)
│   ├── site.webmanifest                  # Manifiesto para instalación como aplicación web
│   ├── robots.txt                        # Configuración para motores de búsqueda (Google)
│   ├── sitemap.xml                       # Mapa del sitio para indexación SEO
│   └── llms.txt                          # Resumen semántico para motores de búsqueda de IA
│
├── src/
│   ├── app/                              # Páginas y rutas del sitio web (App Router)
│   │   ├── aviso-de-privacidad/
│   │   │   └── page.tsx                  # 📄 Página: Aviso de Privacidad Legal
│   │   ├── contacto/
│   │   │   └── page.tsx                  # 📍 Página: Contacto, Horarios y Ubicación
│   │   ├── filosofia/
│   │   │   └── page.tsx                  # 🎓 Página: Filosofía Pedagógica
│   │   ├── mision-y-vision/
│   │   │   └── page.tsx                  # 🎯 Página: Misión, Visión y Valores
│   │   ├── quienes-somos/
│   │   │   └── page.tsx                  # 🏛️ Página: Historia y Quiénes Somos
│   │   ├── globals.css                   # 🎨 Hoja de estilos globales (colores, fondos, temas)
│   │   ├── layout.tsx                    # 📐 Maquetación global (SEO, Navbar, Footer, FABs)
│   │   └── page.tsx                      # 🏠 Página de Inicio (Hero, Bienvenida, Galería)
│   │
│   └── components/                       # Componentes reutilizables de interfaz
│       ├── CursorEffect.tsx              # Estela interactiva del cursor del ratón
│       ├── Footer.tsx                    # Pie de página (datos, enlaces, mapa embebido)
│       ├── Gallery.tsx                   # Lector automático de fotos para la galería
│       ├── GalleryCarousel.tsx           # Carrusel interactivo y visor ampliado (Lightbox 4:3)
│       ├── Header.tsx                    # Barra de navegación superior con menú desplegable
│       └── ThemeProvider.tsx             # Manejador de Modo Claro / Modo Oscuro
│
├── next.config.ts                        # Configuración de compilación y exportación SSG
├── package.json                          # Dependencias y scripts de Node.js
├── tsconfig.json                         # Configuración de TypeScript
└── README.md                             # Guía y documentación del proyecto
```

---

## 📐 2. Dimensiones y Guía de Fondos de Pantalla (PC y Celular)

La cabecera principal (**Hero**) cuenta con detección responsiva automática mediante CSS para cargar la imagen horizontal en computadoras y la imagen vertical en teléfonos móviles.

### Dimensiones Oficiales Requeridas:

| Dispositivo | Archivo en `frontend/public/` | Dimensiones Recomendadas | Proporción | Orientación |
| :--- | :--- | :--- | :--- | :--- |
| **PC / Laptop / Escritorio** | `fondo-pc.webp` | **1920 × 1080 px** | 16:9 | Horizontal (Panorámica) |
| **Celular / Móvil / Tablet** | `fondo-movil.webp` | **1080 × 1920 px** | 9:16 | Vertical (Retrato) |

> **Formatos recomendados:** `.webp` (máxima compresión y velocidad de carga), `.jpg` o `.png`.
> Si se cambia de formato (por ejemplo a `.jpg`), solo actualiza la extensión en `frontend/src/app/globals.css` (líneas ~197-206):
> ```css
> @media (min-width: 768px) {
>   .hero-bg {
>     background-image: url('/fondo-pc.jpg');
>   }
> }
> @media (max-width: 767px) {
>   .hero-bg {
>     background-image: url('/fondo-movil.jpg');
>   }
> }
> ```

---

## 🖼️ 3. Estandarización y Gestión de Imágenes

### A. Galería de Instalaciones (Estandarizada a 800 × 600 px)
* **Carpeta:** `frontend/public/recursos/galeria/`
* **Dimensión estándar oficial:** **800 × 600 px** *(Proporción 4:3)*.
* **Por qué 800x600 px:** Permite que las fotografías escolares (aulas, laboratorios, patios, talleres) se encuadren de manera impecable y consistente tanto en pantallas de computadora como en celulares, evitando recortes desproporcionados.
* **Carga 100% Automática:** El componente `Gallery.tsx` detecta y carga al instante cualquier archivo `.webp`, `.png`, `.jpg` o `.jpeg` que agregues en esta carpeta al compilar.
* **Cómo actualizar:**
  * Reemplaza las fotos base (`01.webp`, `02.webp`, `03.webp`).
  * O añade nuevas fotos con nombres secuenciales (`04.webp`, `05.webp`, etc.). El visor interactivo y el carrusel las ordenará automáticamente.

### B. Logotipo Oficial del Colegio
* **Ubicación:** `frontend/public/LOGOBuonOFCTRASLUCIDO.png`
* **Uso:** Barra superior de navegación ([Header.tsx](src/components/Header.tsx)) y pie de página ([Footer.tsx](src/components/Footer.tsx)).
* **Recomendación:** PNG con fondo transparente (transparencia alfa) para adaptarse automáticamente tanto al tema claro como al tema oscuro.

### C. Íconos del Sitio y Favicons (PWA)
Ubicados en la raíz de `frontend/public/`:
* `favicon.ico`: Ícono para navegadores de escritorio.
* `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`: Íconos de pestaña para navegadores modernos.
* `apple-touch-icon.png`: Ícono para pantalla de inicio en iPhone y iPad.
* `android-chrome-192x192.png` y `android-chrome-512x512.png`: Íconos para dispositivos Android.

---

## ✍️ 4. ¿Dónde se Encuentran los Textos para Modificarlos?

Todos los textos están organizados por página y componente de forma modular:

| Sección / Página | Archivo a Modificar | Contenido que incluye |
| :--- | :--- | :--- |
| **Inicio / Portada** | `src/app/page.tsx` | Título principal, eslogan institucional, botón de llamado a la acción ("Inscríbete Ahora"), bloque de "Bienvenido a la Excelencia" y título de la galería. |
| **Quiénes Somos** | `src/app/quienes-somos/page.tsx` | Reseña histórica de la fundación (1993), trayectoria, propuesta educativa y accesos a Misión y Filosofía. |
| **Misión y Visión** | `src/app/mision-y-vision/page.tsx` | Declaración de Misión, Visión de futuro y el desglose de los 7 valores institucionales (Respeto, Honestidad, Responsabilidad, etc.). |
| **Filosofía** | `src/app/filosofia/page.tsx` | Pilares pedagógicos del modelo humanista, enseñanza trilingüe y enfoque integral. |
| **Contacto y Ubicación** | `src/app/contacto/page.tsx` | Teléfono, enlace directo a WhatsApp, horarios de atención, correo electrónico, dirección física y mapa interactivo. |
| **Aviso de Privacidad** | `src/app/aviso-de-privacidad/page.tsx` | Texto legal en apego a la Ley Federal de Protección de Datos Personales en Posesión de Particulares. |
| **Encabezado (Menú)** | `src/components/Header.tsx` | Nombres de los enlaces de navegación, menú desplegable y botón de modo claro/oscuro. |
| **Pie de Página (Footer)** | `src/components/Footer.tsx` | Eslogan inferior, espacio para Clave CCT / RVOE, datos de contacto, enlaces rápidos, horarios, dirección física y mapa embebido. |
| **Metadatos y SEO** | `src/app/layout.tsx` | Título general de la pestaña en Google, meta descripción, coordenadas satelitales (Schema.org) y botones flotantes (WhatsApp, Facebook, Teléfono). |

---

## 🚀 5. Comandos de Trabajo

Para trabajar en el proyecto desde la terminal de la carpeta `frontend/`:

### Iniciar el servidor local de desarrollo:
```bash
npm run dev
```
Abre en tu navegador [http://localhost:3000](http://localhost:3000) para ver tus cambios en tiempo real.

### Probar la compilación para Hostinger:
```bash
npm run build
```
Este comando compilará el sitio y generará la carpeta `out/` lista para ser desplegada en Hostinger.

### Subir cambios a GitHub:
```bash
git add .
git commit -m "Actualización de contenidos"
git push origin master
```
Hostinger detectará automáticamente el push a la rama `master` y actualizará tu sitio web en vivo.
