import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" className="logo-container" style={{ marginBottom: '1.5rem', display: 'flex' }}>
              <img 
                src="/ArchivosUsuario/LOGOBuonOFCTRASLUCIDO.png" 
                alt="Logo Colegio Louis Buon Langlais" 
                style={{ width: 'auto', height: '60px' }}
              />
            </Link>
            <p style={{ color: '#ccc', marginBottom: '1rem' }}>
              Educación integral, personalizada y trilingüe para los líderes del mañana.
            </p>
            {/* Espacio semántico para CCT o RVOE */}
            <p style={{ fontSize: '0.9rem', color: '#888' }}>
              CCT / RVOE: [Pendiente de Asignación]
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
              Teléfono: <a href="tel:+525533323221" style={{ color: 'white' }}>55 3332 3221</a>
            </p>
            <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>
              Email: <a href="mailto:colegiobuon@gmail.com" style={{ color: 'white' }}>colegiobuon@gmail.com</a>
            </p>
            <p style={{ color: '#ccc', marginTop: '1rem' }}>
              <strong>Horarios de Atención:</strong><br />
              Lunes a Viernes: 7:00 a.m. – 3:00 p.m.<br />
              Sábado y Domingo: Cerrado.
            </p>
          </div>
          
          <div className="footer-col">
            <h3>Ubicación</h3>
            <p style={{ color: '#ccc', marginBottom: '0.8rem' }}>
              <a 
                href="https://maps.app.goo.gl/hFdndL1WdZ5VWjcD7" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-block' }}
                title="Abrir en Google Maps"
              >
                📍 C. 11 87, Col. Olivar del Conde, Olivar del Conde 1ra Secc,<br />
                Álvaro Obregón, 01400 Ciudad de México, CDMX
              </a>
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <a 
                href="https://maps.app.goo.gl/hFdndL1WdZ5VWjcD7" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--color-red)', fontSize: '0.9rem', fontWeight: 'bold', textDecoration: 'underline' }}
              >
                Abrir ubicación en Google Maps ↗
              </a>
            </p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1209355181716!2d-99.21058712391217!3d19.373845887258327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20036e464d697%3A0xbf1aa2b7934311e1!2sColegio%20Louis%20Buon%20Langlais!5e0!3m2!1ses!2smx!4v1710000000000!5m2!1ses!2smx" 
              width="100%" 
              height="150" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación del Colegio Louis Buon Langlais"
            ></iframe>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Colegio Louis Buon Langlais. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
