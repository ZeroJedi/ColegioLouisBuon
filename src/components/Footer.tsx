import Link from 'next/link';
import { SCHOOL, CONTACT, MAPS } from '@/data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" className="logo-container" style={{ marginBottom: '1.5rem', display: 'flex' }}>
              <img
                src="/LOGOBuonOFCTRASLUCIDO.png"
                alt={`Logo ${SCHOOL.nombre}`}
                style={{ width: 'auto', height: '60px' }}
              />
            </Link>
            <p style={{ color: '#ccc', marginBottom: '1rem' }}>
              {SCHOOL.slogan}
            </p>
            {/* Espacio semántico para CCT o RVOE */}
            <p style={{ fontSize: '0.9rem', color: '#888' }}>
              {SCHOOL.cct}
            </p>
          </div>

          <div className="footer-col">
            <h3>Quiénes Somos</h3>
            <Link href="/quienes-somos" className="footer-link">Historia</Link>
            <Link href="/mision-y-vision" className="footer-link">Misión y Visión</Link>
            <Link href="/filosofia" className="footer-link">Filosofía</Link>
            <Link href="/aviso-de-privacidad" className="footer-link" style={{ marginTop: '1rem' }}>Aviso de Privacidad</Link>
          </div>

          <div className="footer-col">
            <h3>Contacto</h3>
            <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>
              Teléfono: <a href={`tel:${CONTACT.telefonoTel}`} style={{ color: 'white' }}>{CONTACT.telefonoMostrar}</a>
            </p>
            <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>
              Email: <a href={`mailto:${CONTACT.email}`} style={{ color: 'white' }}>{CONTACT.email}</a>
            </p>
            <p style={{ color: '#ccc', marginTop: '1rem' }}>
              <strong>Horarios de Atención:</strong><br />
              {CONTACT.horarioDias}: {CONTACT.horarioHoras}<br />
              {CONTACT.horarioFindeSemana}
            </p>
          </div>

          <div className="footer-col">
            <h3>Ubicación</h3>
            <p style={{ color: '#ccc', marginBottom: '0.8rem' }}>
              <a
                href={MAPS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}
                title="Abrir en Google Maps"
              >
                📍 {MAPS.direccionLinea1}<br />
                {MAPS.direccionLinea2}
              </a>
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <a
                href={MAPS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-red)', fontSize: '0.9rem', fontWeight: 'bold', textDecoration: 'underline' }}
              >
                Abrir ubicación en Google Maps ↗
              </a>
            </p>
            <iframe
              src={MAPS.googleMapsEmbed}
              width="100%"
              height="150"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de Ubicación del ${SCHOOL.nombre}`}
            ></iframe>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {SCHOOL.nombre}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
