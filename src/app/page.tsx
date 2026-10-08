import Link from 'next/link';
import Gallery from '@/components/Gallery';
import { HOME, SCHOOL } from '@/data/content';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{HOME.heroTitulo}</h1>
          <p className="hero-slogan">{SCHOOL.sloganHero}</p>
          <Link href="/contacto" className="btn-primary">
            {HOME.heroCta}
          </Link>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">{HOME.bienvenidaTitulo}</h2>
        <div className="content-block" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            {HOME.bienvenidaTexto}
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/quienes-somos" className="btn-primary" style={{ backgroundColor: 'var(--color-red)' }}>
              {HOME.bienvenidaCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section container" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', padding: '4rem 2rem' }}>
        <h2 className="section-title">{HOME.galeriaTitulo}</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          {HOME.galeriaSubtitulo}
        </p>
        <Gallery />
      </section>
    </>
  );
}
