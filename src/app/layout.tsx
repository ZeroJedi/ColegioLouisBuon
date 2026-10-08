import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorEffect from '@/components/CursorEffect';
import { SCHOOL, CONTACT, MAPS } from '@/data/content';

export const metadata: Metadata = {
  metadataBase: new URL(SCHOOL.urlSitio),
  title: `${SCHOOL.nombre} | Secundaria`,
  description: SCHOOL.slogan,
  keywords: 'Colegio, Secundaria, Louis Buon Langlais, Educación, Trilingüe',
  openGraph: {
    title: `${SCHOOL.nombre} | Secundaria`,
    description: SCHOOL.slogan,
    url: SCHOOL.urlSitio,
    siteName: SCHOOL.nombre,
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: SCHOOL.ogImage,
        width: 1200,
        height: 630,
        alt: `Logo ${SCHOOL.nombre}`,
      },
      {
        url: SCHOOL.logoShare,
        width: 600,
        height: 600,
        alt: `Logo ${SCHOOL.nombre}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SCHOOL.nombre} | Secundaria`,
    description: SCHOOL.slogan,
    images: [SCHOOL.ogImage],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="image_src" href={`${SCHOOL.urlSitio}${SCHOOL.ogImage}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MiddleSchool',
              name: SCHOOL.nombre,
              description: SCHOOL.slogan,
              url: SCHOOL.urlSitio,
              logo: `${SCHOOL.urlSitio}${SCHOOL.logo}`,
              image: `${SCHOOL.urlSitio}${SCHOOL.ogImage}`,
              address: {
                '@type': 'PostalAddress',
                streetAddress: MAPS.streetAddress,
                addressLocality: MAPS.alcaldia,
                addressRegion: MAPS.ciudad,
                postalCode: MAPS.cp,
                addressCountry: 'MX'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: MAPS.latitud,
                longitude: MAPS.longitud
              },
              hasMap: MAPS.googleMapsUrl,
              telephone: CONTACT.telefonoTel,
              email: CONTACT.email
            })
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <CursorEffect />
          <Header />
          <main>{children}</main>

          {/* Floating Action Buttons */}
          <div className="fab-container">
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="fab fab-facebook" aria-label="Facebook" title="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
            <a href={`https://wa.me/${CONTACT.whatsappNumero}`} target="_blank" rel="noopener noreferrer" className="fab fab-whatsapp" aria-label="WhatsApp" title="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </a>
            <a href={`tel:${CONTACT.telefonoTel}`} className="fab fab-phone" aria-label="Llamar" title="Teléfono">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
            </a>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
