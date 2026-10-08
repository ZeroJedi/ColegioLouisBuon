import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Colegio Louis Buon Langlais',
  description: 'Comunícate con nosotros. Horarios de atención y ubicación del Colegio Louis Buon Langlais.',
};

export default function Contacto() {
  return (
    <div className="container section">
      <h1 className="section-title">Contacto</h1>
      
      <div className="content-block" style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'var(--color-blue)', marginBottom: '2rem' }}>Estamos para atenderte</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Para brindarte una atención personalizada y directa, por favor comunícate a nuestros canales oficiales.
        </p>
        
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="tel:+525533323221" className="btn-primary" style={{ backgroundColor: 'var(--color-blue)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            Llamar: 55 3332 3221
          </a>
          <a href="https://wa.me/5215533323221" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ backgroundColor: '#25D366', display: 'flex', alignItems: 'center', gap: '10px' }}>
            WhatsApp Oficial
          </a>
        </div>

        <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto 3rem auto', background: 'var(--bg-primary)', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px var(--shadow-color)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Horarios de Atención</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>Lunes a Viernes:</strong> 7:00 a.m. – 3:00 p.m.</p>
          <p style={{ color: 'var(--text-secondary)' }}><strong>Sábado y Domingo:</strong> Cerrado.</p>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Correo Electrónico</h3>
          <p style={{ color: 'var(--text-secondary)' }}>colegiobuon@gmail.com</p>
        </div>

        <h3 style={{ color: 'var(--color-red)', marginBottom: '1rem' }}>Nuestra Ubicación</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.05rem' }}>
          <a 
            href="https://maps.app.goo.gl/hFdndL1WdZ5VWjcD7" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'inherit', textDecoration: 'none' }}
            title="Abrir en Google Maps"
          >
            📍 C. 11 87, Col. Olivar del Conde, Olivar del Conde 1ra Secc, Álvaro Obregón, 01400 Ciudad de México, CDMX
          </a>
        </p>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <a 
            href="https://maps.app.goo.gl/hFdndL1WdZ5VWjcD7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              backgroundColor: 'var(--color-blue)',
              textDecoration: 'none',
              padding: '0.6rem 1.2rem',
              fontSize: '0.95rem'
            }}
          >
            Abrir ubicación exacta en Google Maps ↗
          </a>
        </div>
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1209355181716!2d-99.21058712391217!3d19.373845887258327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20036e464d697%3A0xbf1aa2b7934311e1!2sColegio%20Louis%20Buon%20Langlais!5e0!3m2!1ses!2smx!4v1710000000000!5m2!1ses!2smx" 
          width="100%" 
          height="400" 
          style={{ border: 0, borderRadius: '8px', maxWidth: '800px', margin: '0 auto', display: 'block' }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de Ubicación del Colegio Louis Buon Langlais"
        ></iframe>
      </div>
    </div>
  );
}
