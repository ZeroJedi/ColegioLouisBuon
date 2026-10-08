import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Misión y Visión | Colegio Louis Buon Langlais',
  description: 'Conoce nuestra misión y visión enfocada en la formación de líderes con pensamiento crítico y sólidas bases éticas.',
};

export default function MisionYVision() {
  return (
    <div className="container section">
      <h1 className="section-title">Misión y Visión</h1>
      
      <div className="content-block">
        <h2 style={{ color: 'var(--color-blue)' }}>Nuestra Misión</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          Ofrecer una educación integral y holística de excelencia a nivel secundaria, enfocada en el desarrollo de competencias académicas avanzadas y en la formación de seres humanos con espíritu emprendedor. A través de una enseñanza personalizada y trilingüe, preparamos a nuestros alumnos para enfrentar los retos del entorno global con liderazgo, pensamiento crítico y sólidas bases éticas.
        </p>
      </div>

      <div className="content-block">
        <h2 style={{ color: 'var(--color-red)' }}>Nuestra Visión</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          Consolidarnos como la institución educativa líder y de mayor prestigio en educación personalizada a nivel secundaria, reconocida por impulsar la evolución social a través del desarrollo humano. Aspiramos a formar jóvenes líderes, emprendedores y agentes transformadores de la sociedad, capacitados para influir de manera activa en la creación cultural y científica de su entorno.
        </p>
      </div>
    </div>
  );
}
