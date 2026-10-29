import type { Metadata } from 'next';
import { CONTACT, MAPS, SCHOOL } from '@/data/content';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: `Contacto y Admisiones | ${SCHOOL.nombre}`,
  description: `Comunícate con nosotros para solicitar informes de inscripción, visitas guiadas y horarios de atención del ${SCHOOL.nombre}.`,
};

export default function Contacto() {
  return (
    <div className="container section">
      <h1 className="section-title">Contacto y Admisiones</h1>

      <div className="content-block" style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'var(--color-blue)', marginBottom: '1.25rem' }}>Estamos para atenderte</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          Para brindarte una atención personalizada, resolver dudas de inscripción o agendar un recorrido por nuestras instalaciones, utiliza cualquiera de nuestros canales oficiales.
        </p>

        {/* Canales Rápidos de Contacto */}
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <a href={`tel:${CONTACT.telefonoTel}`} className="btn-primary" style={{ backgroundColor: 'var(--color-blue)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            📞 Llamar: {CONTACT.telefonoMostrar}
          </a>
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ backgroundColor: '#128C7E', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '10px' }}>
            💬 WhatsApp Directo
          </a>
        </div>

        {/* Formulario Interactivo de Solicitud de Informes */}
        <ContactForm />

        {/* Tarjeta de Horarios y Correo */}
        <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto 3rem auto', background: 'var(--bg-primary)', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 4px var(--shadow-color)', border: '1px solid var(--border-color)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Horarios de Atención Escolar</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}><strong>{CONTACT.horarioDias}:</strong> {CONTACT.horarioHoras}</p>
          <p style={{ color: 'var(--text-secondary)' }}><strong>{CONTACT.horarioFindeSemana}</strong></p>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Correo Institucional</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            <a href={`mailto:${CONTACT.email}`} style={{ color: 'var(--color-blue)', textDecoration: 'underline' }}>
              {CONTACT.email}
            </a>
          </p>
        </div>

        <h3 style={{ color: 'var(--color-red)', marginBottom: '1rem' }}>Nuestra Ubicación</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.05rem' }}>
          <a
            href={MAPS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
            title="Abrir en Google Maps"
          >
            📍 {MAPS.direccionCompleta}
          </a>
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <a
            href={MAPS.googleMapsUrl}
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
          src={MAPS.googleMapsEmbed}
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '8px', maxWidth: '800px', margin: '0 auto', display: 'block' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa de Ubicación del ${SCHOOL.nombre}`}
        ></iframe>
      </div>
    </div>
  );
}
