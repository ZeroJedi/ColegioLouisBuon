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
│   ├── og-image.png                      # 🌐 Imagen oficial para compartir link en redes (1200x630px: WhatsApp/FB/X)
│   ├── logo-share.png                    # 💬 Logo con fondo blanco para mensajería y vistas cuadradas (600x600px)
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
│   ├── components/                       # Componentes reutilizables de interfaz
│   │   ├── CursorEffect.tsx              # Estela interactiva del cursor del ratón
│   │   ├── Footer.tsx                    # Pie de página (datos, enlaces, mapa embebido)
│   │   ├── Gallery.tsx                   # Lector automático de fotos para la galería
│   │   ├── GalleryCarousel.tsx           # Carrusel interactivo y visor ampliado (Lightbox 4:3)
│   │   ├── Header.tsx                    # Barra de navegación superior con menú desplegable
│   │   └── ThemeProvider.tsx             # Manejador de Modo Claro / Modo Oscuro
│   │
│   └── data/
│       └── content.ts                    # 📝 ARCHIVO CENTRAL DE TEXTOS — edita aquí todos los datos del colegio
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

### A. Galería de Instalaciones (Resolución Estandarizada a 800 × 600 px)
* **Carpeta:** `frontend/public/recursos/galeria/`
* **Dimensión estándar de las imágenes:** **800 × 600 px** *(Proporción 4:3)*.
* **Visualización en la Web:**
  * **Marco en la página:** El carrusel muestra las imágenes en un elegante recuadro panorámico con proporción **16:9** y ancho máximo de **900px**, adaptando el encuadre con `object-fit: cover` para una estética limpia y moderna.
  * **Visor ampliado (Lightbox):** Al dar clic o tocar cualquier foto, se abre a pantalla completa mostrando la imagen en sus dimensiones originales sin recortes.
* **Comportamiento Interactivo y Avance Automático:**
  * **Pase automático:** Las fotografías avanzan automáticamente cada **3.5 segundos** con una suave transición de desvanecimiento (`fade`).
  * **Pausa por cursor:** Si el usuario coloca el cursor sobre el carrusel en computadora, el avance automático se pausa para permitir observar la imagen cómodamente.
  * **Pantalla completa (Lightbox):** Al pulsar sobre cualquier foto, se abre el visor maximizado y **el pase automático se detiene por completo**. En este modo la navegación es estrictamente manual mediante las flechas en pantalla, gestos táctiles (*swipe*) o las teclas de flecha del teclado (`←` y `→`). Al cerrar el visor (botón `×`, clic fuera o tecla `Esc`), el carrusel reanuda su avance automático.
* **Carga 100% Automática:** El componente `Gallery.tsx` detecta y carga al instante cualquier archivo `.webp`, `.png`, `.jpg` o `.jpeg` que agregues en esta carpeta al compilar.
* **Cómo actualizar:**
  * Reemplaza las fotos base (`01.webp`, `02.webp`, etc.).
  * O añade nuevas fotos con nombres secuenciales (`04.webp`, `05.webp`, `06.webp`, etc.). El carrusel detectará todas las fotos, mostrará el contador correspondiente (ej. *1 de 6*) y permitirá recorrerlas mediante flechas, deslizamiento táctil (swipe) o seleccionando directamente los puntos inferiores.

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

## ✍️ 4. Archivo Central de Textos (`content.ts`) — La forma más fácil de editar

> **¡La forma recomendada de modificar textos!** El archivo `src/data/content.ts` centraliza todos los datos reutilizables del colegio. Al cambiar un valor aquí, se actualiza **automáticamente en todas las páginas** donde aparece.

### Cómo usarlo:

Abre el archivo `src/data/content.ts` y edita el valor que necesites. Los datos están agrupados en cuatro secciones:

#### Grupo `SCHOOL` — Identidad del Colegio

| Variable | Ejemplo de Valor | Dónde aparece en el sitio |
| :--- | :--- | :--- |
| `SCHOOL.nombre` | `'Colegio Louis Buon Langlais'` | Header, Footer, layout.tsx (SEO), aviso de privacidad |
| `SCHOOL.cct` | `'CCT: 09PES0883-D'` | Footer (columna izquierda, debajo del logo) |
| `SCHOOL.slogan` | `'Educación integral...'` | Footer, SEO de layout.tsx |
| `SCHOOL.sloganHero` | `'Nivel Secundaria con...'` | **Portada → texto debajo del título principal** |
| `SCHOOL.urlSitio` | `'https://colegiolouisbuon...'` | Datos estructurados SEO (JSON-LD) |

#### Grupo `CONTACT` — Datos de Contacto

| Variable | Ejemplo de Valor | Dónde aparece en el sitio |
| :--- | :--- | :--- |
| `CONTACT.telefonoMostrar` | `'55 3332 3221'` | Footer, página Contacto, botón flotante |
| `CONTACT.telefonoTel` | `'+525533323221'` | Enlace `tel:` del botón flotante y botones de contacto |
| `CONTACT.whatsappNumero` | `'5215533323221'` | Botón flotante WhatsApp, página Contacto, aviso de privacidad |
| `CONTACT.email` | `'colegiobuon@gmail.com'` | Footer, página Contacto, JSON-LD SEO |
| `CONTACT.horarioDias` | `'Lunes a Viernes'` | Footer (columna Contacto), página Contacto |
| `CONTACT.horarioHoras` | `'7:00 a.m. – 3:00 p.m.'` | Footer (columna Contacto), página Contacto |
| `CONTACT.horarioFindeSemana` | `'Sábado y Domingo: Cerrado.'` | Footer (columna Contacto), página Contacto |
| `CONTACT.facebook` | `'https://www.facebook.com/...'` | Botón flotante Facebook |

#### Grupo `MAPS` — Ubicación y Mapa

| Variable | Ejemplo de Valor | Dónde aparece en el sitio |
| :--- | :--- | :--- |
| `MAPS.streetAddress` | `'C. 11 87, Col. Olivar del Conde...'` | JSON-LD SEO en layout.tsx |
| `MAPS.alcaldia` | `'Álvaro Obregón'` | JSON-LD SEO en layout.tsx |
| `MAPS.ciudad` | `'Ciudad de México'` | JSON-LD SEO en layout.tsx |
| `MAPS.cp` | `'01400'` | JSON-LD SEO en layout.tsx |
| `MAPS.direccionCompleta` | `'C. 11 87, Col. Olivar...'` | Página Contacto, aviso de privacidad |
| `MAPS.direccionLinea1` | `'C. 11 87, Col. Olivar...'` | Footer (columna Ubicación, primera línea) |
| `MAPS.direccionLinea2` | `'Álvaro Obregón, 01400...'` | Footer (columna Ubicación, segunda línea) |
| `MAPS.googleMapsUrl` | `'https://maps.app.goo.gl/...'` | Enlace en Footer, botón en página Contacto |
| `MAPS.googleMapsEmbed` | `'https://www.google.com/maps/embed?...'` | Iframe del mapa en Footer y página Contacto |
| `MAPS.latitud` | `19.3738459` | Coordenadas GPS en JSON-LD SEO |
| `MAPS.longitud` | `-99.2080122` | Coordenadas GPS en JSON-LD SEO |

#### Grupo `HOME` — Textos de la Página de Inicio

| Variable | Ejemplo de Valor | Dónde aparece en el sitio |
| :--- | :--- | :--- |
| `HOME.heroTitulo` | `'Colegio Louis Buon Langlais'` | **Portada → título grande del Hero (H1)** |
| `HOME.heroCta` | `'Inscríbete Ahora'` | **Portada → botón principal del Hero** |
| `HOME.bienvenidaTitulo` | `'Bienvenido a la Excelencia'` | **Portada → título de la segunda sección** |
| `HOME.bienvenidaTexto` | `'Nuestra institución se ha distinguido...'` | **Portada → párrafo informativo de bienvenida** |
| `HOME.bienvenidaCta` | `'Conoce nuestra historia'` | **Portada → botón de la sección de bienvenida** |
| `HOME.galeriaTitulo` | `'Nuestras Instalaciones'` | **Portada → título de la sección de galería** |
| `HOME.galeriaSubtitulo` | `'Descubre los espacios...'` | **Portada → subtítulo de la galería** |

### Textos que NO están en `content.ts` (solo en su propia página)

Estos textos son únicos de cada página y no se repiten en ningún otro lugar, por lo que se editan directamente en su archivo:

| Sección / Página | Archivo a Modificar | Contenido que incluye |
| :--- | :--- | :--- |
| **Quiénes Somos** | `src/app/quienes-somos/page.tsx` | Reseña histórica (1993), trayectoria y propuesta educativa |
| **Misión y Visión** | `src/app/mision-y-vision/page.tsx` | Declaración de Misión, Visión y 7 valores institucionales |
| **Filosofía** | `src/app/filosofia/page.tsx` | Pilares pedagógicos, modelo humanista y enseñanza trilingüe |
| **Encabezado (Menú)** | `src/components/Header.tsx` | Nombres de los enlaces de navegación |

---

## 🔗 4.1 Vista Previa al Compartir el Enlace (WhatsApp, Facebook, Twitter, iMessage)

Cuando envías el enlace web `https://colegiolouisbuonlanglais.edu.mx` por WhatsApp o redes sociales, las plataformas generan automáticamente una tarjeta interactiva con:
- **Imagen del logotipo:** Toma la imagen `public/og-image.png` (1200x630px) y `public/logo-share.png` (600x600px). Ambas imágenes tienen fondo blanco sólido y pesan menos de 40 KB, cumpliendo con la restricción de WhatsApp (máximo 300 KB) para que nunca se descarte la imagen ni se vea un cuadro negro en modo oscuro.
- **Título de la tarjeta:** Definido centralizadamente en `SCHOOL.nombre` (`src/data/content.ts`).
- **Descripción de la tarjeta:** Definida en `SCHOOL.slogan` (`src/data/content.ts`).

> **Nota técnica:** Las etiquetas Open Graph (`og:image`, `og:title`, `og:description`, `twitter:card`, `twitter:image` y `<link rel="image_src">`) están configuradas en `src/app/layout.tsx` y se generan de forma estática en el HTML para máxima compatibilidad con todos los rastreadores.

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
