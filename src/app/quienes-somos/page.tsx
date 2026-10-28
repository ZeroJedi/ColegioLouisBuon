import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiénes Somos | Colegio Louis Buon Langlais',
  description: 'Historia y trayectoria del Colegio Louis Buon Langlais, con más de 25 años de excelencia académica.',
};

export default function QuienesSomos() {
  return (
    <div className="container section">
      <h1 className="section-title">Quiénes Somos</h1>

      <div className="content-block">
        <h2 style={{ color: 'var(--color-blue)' }}>Nuestra Historia</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Nuestra institución lleva con orgullo y honor el nombre del <strong>Sr. Louis Buon Langlais</strong>, quien debido a su trayectoria fue inspiración para nombrar a nuestro colegio en México.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          Con más de 40 años de trayectoria y excelencia académica, el colegio se ha distinguido por brindar un modelo de enseñanza personalizada y un programa trilingüe (español, francés e inglés), superando los estándares de la SEP.
        </p>
      </div>
    </div>
  );
}
