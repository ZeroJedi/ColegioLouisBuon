import type { Metadata } from 'next';
import { SCHOOL, CONTACT, MAPS } from '@/data/content';

export const metadata: Metadata = {
  title: `Aviso de Privacidad | ${SCHOOL.nombre}`,
  description: `Aviso de privacidad del ${SCHOOL.nombre}. Conoce cómo protegemos tu información.`,
};

export default function AvisoDePrivacidad() {
  return (
    <div className="container section">
      <h1 className="section-title">Aviso de Privacidad</h1>

      <div className="content-block">
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          El <strong>{SCHOOL.nombre}</strong>, con domicilio en {MAPS.direccionCompleta}, emite el presente Aviso de Privacidad en estricto apego a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Naturaleza del Sitio Web</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          Este sitio web es puramente informativo. <strong>NO recopila datos personales</strong> a través de formularios en línea, no solicita registros de usuarios ni almacena cookies de rastreo publicitario o analíticas invasivas. Valoramos y protegemos la privacidad de nuestros visitantes y de toda la comunidad escolar.
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Contacto Directo</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          Toda comunicación, solicitud de información o proceso de inscripción se canaliza de forma directa, personal y segura. Invitamos a los padres de familia y tutores a comunicarse con nosotros exclusivamente mediante nuestros canales oficiales:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
          <li>Vía Telefónica: <a href={`tel:${CONTACT.telefonoTel}`} style={{ color: 'var(--color-blue)', textDecoration: 'underline' }}>{CONTACT.telefonoMostrar}</a></li>
          <li>Vía WhatsApp: <a href={`https://wa.me/${CONTACT.whatsappNumero}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-blue)', textDecoration: 'underline' }}>Mensaje Directo</a></li>
          <li>Atención presencial en nuestras instalaciones en los horarios establecidos.</li>
        </ul>

        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Modificaciones al Aviso</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas, políticas internas o nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios educativos.
        </p>
      </div>
    </div>
  );
}
