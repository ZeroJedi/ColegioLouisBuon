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
        <h2 className="content-block-heading">Nuestra Historia</h2>
        <p className="content-block-text" style={{ marginBottom: '1.5rem' }}>
          Nuestra institución lleva con orgullo y honor el nombre del <strong className="content-block-strong">Sr. Louis Buon Langlais</strong>, quien debido a su trayectoria fue inspiración para nombrar a nuestro colegio en México.
        </p>
        <p className="content-block-text">
          Con más de 40 años de trayectoria y excelencia académica, el colegio se ha distinguido por brindar un modelo de enseñanza personalizada y un programa trilingüe (español, francés e inglés), superando los estándares de la SEP.
        </p>
      </div>
    </div>
  );
}