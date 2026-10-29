'use client';

/**
 * ====================================================================
 * COMPONENTE: ContactForm
 * Arquitectura: Clean Component / Form Organism
 * 
 * Propósito:
 * Permitir a los padres de familia solicitar informes específicos de admisión,
 * costos y visitas guiadas para nivel Secundaria, canalizando la información
 * de forma directa mediante WhatsApp o Correo Oficial.
 * 
 * Privacidad & Seguridad:
 * - Cero almacenamiento de datos personales en bases de datos o servicios externos.
 * - Cumple con la política de no cookies y privacidad estricta del colegio.
 * - Accesible para lectores de pantalla con etiquetas semánticas y aria-live.
 * ====================================================================
 */

import React, { useState } from 'react';
import { CONTACT, CONTACT_FORM, SCHOOL } from '@/data/content';

export default function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [grado, setGrado] = useState(CONTACT_FORM.gradosInteres[0]);
  const [mensaje, setMensaje] = useState('');
  const [errorValidacion, setErrorValidacion] = useState('');
  const [estadoEnvio, setEstadoEnvio] = useState<'idle' | 'success'>('idle');

  const validarFormulario = (): boolean => {
    if (!nombre.trim()) {
      setErrorValidacion('Por favor ingresa tu nombre completo.');
      return false;
    }
    if (!telefono.trim() || telefono.trim().length < 8) {
      setErrorValidacion('Por favor ingresa un número de teléfono válido (mínimo 8 dígitos).');
      return false;
    }
    setErrorValidacion('');
    return true;
  };

  /** Genera el mensaje formateado con todos los campos */
  const construirCuerpoMensaje = (): string => {
    return [
      'Hola, deseo información sobre la Secundaria Luis Boun Langlais.',
      `*Nombre:* ${nombre.trim()}`,
      `*Teléfono de contacto:* ${telefono.trim()}`,
      `*Motivo / Grado de interés:* ${grado}`,
      mensaje.trim() ? `*Mensaje adicional:* ${mensaje.trim()}` : '',
    ].filter(Boolean).join('\n');
  };

  /** Envío directo a WhatsApp oficial */
  const manejarEnvioWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    const texto = construirCuerpoMensaje();
    const url = `https://wa.me/${CONTACT.whatsappNumero}?text=${encodeURIComponent(texto)}`;
    
    setEstadoEnvio('success');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  /** Envío directo vía cliente de correo oficial */
  const manejarEnvioEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    const asunto = `Informes Web - ${grado} - ${nombre.trim()}`;
    const cuerpo = construirCuerpoMensaje().replace(/\*/g, '');
    const mailtoUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

    setEstadoEnvio('success');
    window.location.href = mailtoUrl;
  };

  return (
    <div className="contact-form-card" id="formulario-contacto">
      <div className="contact-form-header">
        <h3 className="contact-form-title">{CONTACT_FORM.titulo}</h3>
        <p className="contact-form-subtitle">{CONTACT_FORM.subtitulo}</p>
      </div>

      {errorValidacion && (
        <div className="contact-form-alert error" role="alert" aria-live="assertive">
          ⚠️ {errorValidacion}
        </div>
      )}

      {estadoEnvio === 'success' && (
        <div className="contact-form-alert success" role="status" aria-live="polite">
          ✅ ¡Mensaje preparado! Te redirigimos al canal seleccionado para enviarlo directamente a la dirección del colegio.
        </div>
      )}

      <form onSubmit={manejarEnvioWhatsApp} noValidate>
        <div className="form-grid">
          {/* Campo Nombre */}
          <div className="form-group">
            <label htmlFor="contacto-nombre" className="form-label">
              Nombre Completo <span className="required-star">*</span>
            </label>
            <input
              id="contacto-nombre"
              type="text"
              className="form-input"
              placeholder={CONTACT_FORM.placeholderNombre}
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
                if (errorValidacion) setErrorValidacion('');
              }}
              required
              autoComplete="name"
            />
          </div>

          {/* Campo Teléfono */}
          <div className="form-group">
            <label htmlFor="contacto-telefono" className="form-label">
              Teléfono o WhatsApp <span className="required-star">*</span>
            </label>
            <input
              id="contacto-telefono"
              type="tel"
              className="form-input"
              placeholder={CONTACT_FORM.placeholderTelefono}
              value={telefono}
              onChange={(e) => {
                setTelefono(e.target.value);
                if (errorValidacion) setErrorValidacion('');
              }}
              required
              autoComplete="tel"
            />
          </div>
        </div>

        {/* Selector de Grado de Interés */}
        <div className="form-group">
          <label htmlFor="contacto-grado" className="form-label">
            Motivo de tu Consulta o Grado de Interés
          </label>
          <select
            id="contacto-grado"
            className="form-select"
            value={grado}
            onChange={(e) => setGrado(e.target.value)}
          >
            {CONTACT_FORM.gradosInteres.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>

        {/* Mensaje Opcional */}
        <div className="form-group">
          <label htmlFor="contacto-mensaje" className="form-label">
            Mensaje o Preguntas Específicas (Opcional)
          </label>
          <textarea
            id="contacto-mensaje"
            className="form-textarea"
            rows={3}
            placeholder={CONTACT_FORM.placeholderMensaje}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>

        {/* Acciones de Envío por Canal */}
        <div className="form-actions-container">
          <button
            type="submit"
            className="btn-form-action btn-whatsapp"
            aria-label="Enviar solicitud por WhatsApp"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            Enviar por WhatsApp
          </button>

          <button
            type="button"
            onClick={manejarEnvioEmail}
            className="btn-form-action btn-email"
            aria-label="Enviar solicitud por Correo Electrónico"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
            Enviar por Correo
          </button>
        </div>

        {/* Nota de Privacidad y Confidencialidad */}
        <p className="contact-form-privacy">
          🔒 {CONTACT_FORM.textoPrivacidad}
        </p>
      </form>
    </div>
  );
}

