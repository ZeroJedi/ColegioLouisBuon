import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Filosofía | Colegio Louis Buon Langlais',
  description: 'Valores institucionales: Excelencia Académica, Innovación, Formación Holística y Humana.',
};

export default function Filosofia() {
  const values = [
    {
      title: '1. Excelencia Académica',
      description: 'Compromiso continuo con la superación de estándares educativos rigurosos y trilingües.'
    },
    {
      title: '2. Innovación y Espíritu Emprendedor',
      description: 'Fomento de la creatividad y resolución de problemas.'
    },
    {
      title: '3. Formación Holística y Humana',
      description: 'Atención integral al desarrollo emocional, ético y social.'
    },
    {
      title: '4. Responsabilidad y Compromiso Social',
      description: 'Sentido de pertenencia y civismo.'
    },
    {
      title: '5. Apertura e Identidad Cultural',
      description: 'Respeto a la diversidad mediante el dominio de idiomas.'
    }
  ];

  return (
    <div className="container section">
      <h1 className="section-title">Nuestra Filosofía y Valores</h1>
      
      <div className="values-list">
        {values.map((val, idx) => (
          <div key={idx} className="value-item">
            <h3>{val.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{val.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
