import Link from 'next/link';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Colegio Louis Buon Langlais</h1>
          <p className="hero-slogan">Educación integral, personalizada y trilingüe para los líderes del mañana.</p>
          <Link href="/contacto" className="btn-primary">
            Inscríbete Ahora
          </Link>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">Bienvenido a la Excelencia</h2>
        <div className="content-block" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Nuestra institución se ha distinguido por brindar un modelo de enseñanza personalizada y un programa trilingüe (español, francés e inglés), superando los estándares de la SEP.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/quienes-somos" className="btn-primary" style={{ backgroundColor: 'var(--color-red)' }}>
              Conoce nuestra historia
            </Link>
          </div>
        </div>
      </section>

      <section className="section container" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', padding: '4rem 2rem' }}>
        <h2 className="section-title">Nuestras Instalaciones</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          Descubre los espacios donde se forman los líderes del mañana.
        </p>
        <Gallery />
      </section>
    </>
  );
}
