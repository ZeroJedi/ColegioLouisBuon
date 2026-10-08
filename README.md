# Colegio Louis Buon Langlais - Sitio Web Oficial

Sitio web institucional de alto rendimiento, responsivo y optimizado para SEO desarrollado con **Next.js**, **TypeScript** y **Vanilla CSS**. Diseñado bajo estándares de Clean Architecture y preparado para despliegue automático en **Hostinger** mediante exportación estática.

---

## 📁 1. Estructura de Directorios del Proyecto

```text
frontend/
├── public/                               # Archivos estáticos servidos directamente
│   ├── ArchivosUsuario/
│   │   ├── Galeria/                      # 📷 Fotografías del carrusel de instalaciones
│   │   │   ├── 01.webp
│   │   │   ├── 02.webp
│   │   │   └── 03.webp
│   │   ├── LOGOBuonOFCTRASLUCIDO.png     # 🏫 Logotipo oficial transparente del colegio
│   │   └── MISION VISION VALORES...docx  # 📄 Documento de referencia institucional
│   │
│   ├── fondo-pc.webp                     # 🖥️ Fondo de pantalla para Computadoras (PC)
│   ├── fondo-movil.webp                  # 📱 Fondo de pantalla para Celulares / Móviles
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
│       ├── GalleryCarousel.tsx           # Carrusel interactivo y visor ampliado (Lightbox)
│       ├── Header.tsx                    # Barra de navegación superior con menú desplegable
│       └── ThemeProvider.tsx             # Manejador de Modo Claro / Modo Oscuro
│
├── next.config.ts                        # Configuración de compilación y exportación SSG
├── package.json                          # Dependencias y scripts de Node.js
├── tsconfig.json                         # Configuración de TypeScript
└── README.md                             # Guía y documentación del proyecto
```

---

## 🖼️ 2. ¿Cómo Cambiar el Fondo de Pantalla (PC y Celular)?

La cabecera principal (**Hero**) cuenta con detección responsiva automática mediante CSS para cargar una imagen horizontal optimizada para computadoras y una imagen vertical optimizada para teléfonos móviles.

### Archivos de Imagen a Reemplazar
Debes colocar tus archivos dentro de la carpeta `frontend/public/`:
* **Modo PC / Laptop:** Guarda tu imagen con el nombre exacto:
  `frontend/public/fondo-pc.webp` *(Resolución recomendada: 1920x1080 o superior)*
* **Modo Celular / Móvil:** Guarda tu imagen con el nombre exacto:
  `frontend/public/fondo-movil.webp` *(Resolución recomendada: 1080x1920 o formato vertical)*

> **Nota:** Puedes usar formatos `.webp`, `.jpg` o `.png`. Si usas otra extensión (por ejemplo `.jpg`), debes actualizar la ruta en el archivo de estilos:
> * Archivo: `frontend/src/app/globals.css` (Líneas ~197-206)
> ```css
> @media (min-width: 768px) {
>   .hero-bg {
>     background-image: url('/fondo-pc.jpg'); /* Tu imagen para PC */
>   }
> }
> @media (max-width: 767px) {
>   .hero-bg {
>     background-image: url('/fondo-movil.jpg'); /* Tu imagen para Celular */
>   }
> }
> ```

---

## 📸 3. ¿Cómo Actualizar el Resto de Imágenes?

### A. Logotipo Oficial del Colegio
* **Ubicación:** `frontend/public/ArchivosUsuario/LOGOBuonOFCTRASLUCIDO.png`
* **Uso:** Se muestra en la barra de navegación superior ([Header.tsx](src/components/Header.tsx)) y en el pie de página ([Footer.tsx](src/components/Footer.tsx)).
* **Recomendación:** Mantener formato PNG con fondo transparente para que se adapte perfectamente tanto al Modo Claro como al Modo Oscuro.

### B. Galería de Fotos de Instalaciones
* **Carpeta:** `frontend/public/ArchivosUsuario/Galeria/`
* **Cómo funciona:** El componente [Gallery.tsx](src/components/Gallery.tsx) lee **automáticamente** todos los archivos que estén dentro de esta carpeta al compilar el proyecto. No necesitas tocar código para añadir o quitar fotos.
* **Formatos soportados:** `.webp`, `.png`, `.jpg`, `.jpeg`.
* **Cómo actualizar:**
  1. Si deseas cambiar las fotos existentes, reemplaza `01.webp`, `02.webp`, `03.webp`.
  2. Si deseas agregar más fotos, simplemente añade `04.webp`, `05.webp`, `06.webp`, etc. El carrusel las ordenará alfabéticamente y creará los controles para recorrerlas y ampliarlas a pantalla completa.

### C. Íconos del Sitio (Favicons y PWA)
Están ubicados en la carpeta raíz `frontend/public/`:
* `favicon.ico`: Ícono estándar para pestañas en navegadores de escritorio.
* `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`: Variantes en diferentes densidades de píxeles.
* `apple-touch-icon.png`: Ícono que aparece cuando un usuario agrega el sitio a la pantalla de inicio en un iPhone o iPad.
* `android-chrome-192x192.png` y `android-chrome-512x512.png`: Íconos de alta resolución para dispositivos Android.

---

## ✍️ 4. ¿Dónde se Encuentran los Textos para Modificarlos?

Todos los textos están organizados por página y componente de forma modular:

| Sección / Página | Archivo a Modificar | Contenido que incluye |
| :--- | :--- | :--- |
| **Inicio / Portada** | `src/app/page.tsx` | Título principal, eslogan institucional, botón de llamado a la acción ("Inscríbete Ahora"), bloque de "Bienvenido a la Excelencia" y título de la galería. |
| **Quiénes Somos** | `src/app/quienes-somos/page.tsx` | Reseña histórica de la fundación (1993), trayectoria, propuesta educativa y accesos a Misión y Filosofía. |
| **Misión y Visión** | `src/app/mision-y-vision/page.tsx` | Declaración de Misión, Visión a futuro y el desglose de los 7 valores institucionales (Respeto, Honestidad, Responsabilidad, etc.). |
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
