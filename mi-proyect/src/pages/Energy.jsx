import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/Energy.css';
import EnergyFooter from '../assets/EnergyFooter.jpg';
import EnergyHero from '../assets/EnergyHero.jpg';
import Generador from '../assets/Generador.jpg';
import Generador2 from '../assets/Generador2.jpg';
import Panel from '../assets/Panel.jpg';
import Paneles2 from '../assets/Paneles2.jpg';
import Planta from '../assets/Planta.jpg';

/* =========================================================
   ICONOS
========================================================= */

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="energy-check-icon"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l2.5 2.5L16 9" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="9" />
    <path d="M32 5v9M32 50v9M5 32h9M50 32h9" />
    <path d="M13 13l6 6M45 45l6 6M51 13l-6 6M19 45l-6 6" />
  </svg>
);

const GeneratorIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <rect x="9" y="17" width="46" height="30" rx="3" />
    <path d="M17 24h30v16H17z" />
    <circle cx="24" cy="32" r="4" />
    <path d="M39 27v10M44 27v10" />
  </svg>
);

const ManagementIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="9" />
    <path d="M32 7v8M32 49v8M7 32h8M49 32h8" />
    <path d="M14 14l6 6M44 44l6 6M50 14l-6 6M20 44l-6 6" />
    <path d="M26 32h12" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M51 10C28 10 14 21 14 38c0 9 6 15 15 15 17 0 28-14 22-43Z" />
    <path d="M13 54c8-14 18-24 32-32" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 7l21 8v15c0 14-9 23-21 28C20 53 11 44 11 30V15l21-8Z" />
    <path d="M23 32l6 6 12-13" />
  </svg>
);

const EfficiencyIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="11" />
    <path d="M32 7v7M32 50v7M7 32h7M50 32h7" />
    <path d="M14 14l5 5M45 45l5 5M50 14l-5 5M19 45l-5 5" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 57s18-18 18-31a18 18 0 1 0-36 0c0 13 18 31 18 31Z" />
    <circle cx="32" cy="26" r="6" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 40 20"
    aria-hidden="true"
    className="energy-arrow"
  >
    <path d="M1 10h34" />
    <path d="M28 3l7 7-7 7" />
  </svg>
);

/* =========================================================
   COMPONENTES REUTILIZABLES
========================================================= */

function SectionKicker({ children, light = false }) {
  return (
    <div className={`energy-kicker ${light ? 'energy-kicker--light' : ''}`}>
      <span />
      {children}
    </div>
  );
}

function MediaPlaceholder({
  label = 'IMAGEN',
  className = '',
}) {
  return (
    <div className={`energy-media-placeholder ${className}`}>
      <span>{label}</span>
    </div>
  );
}

function TechnologyCard({
  kicker,
  title,
  highlight,
  description,
  items,
  icon,
  imageLabel,
}) {
  return (
    <article className="technology-card">
      <div className="technology-copy">
        <SectionKicker>{kicker}</SectionKicker>

        <h3>
          {title}{' '}
          <strong>{highlight}</strong>
        </h3>

        <p>{description}</p>

        <ul className="technology-list">
          {items.map((item) => (
            <li key={item}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="technology-image">
        <div className="technology-icon">{icon}</div>
        <MediaPlaceholder label={imageLabel} />
      </div>
    </article>
  );
}

function Benefit({ icon, title, description }) {
  return (
    <article className="benefit">
      <div className="benefit-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Energy() {
  const { t } = useTranslation();

  const solarItems = t('energy.technologies.solar.items', { returnObjects: true }) || [];
  const dieselItems = t('energy.technologies.diesel.items', { returnObjects: true }) || [];

  return (
    <main className="energy-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="energy-hero">
        <div className="energy-hero-content">
          <SectionKicker>{t('energy.hero.kicker')}</SectionKicker>

          <h1>
            {t('energy.hero.title_line1')}
            <br />
            {t('energy.hero.title_line2')}
            <br />
            <strong>{t('energy.hero.title_line3')}</strong>
          </h1>

          <p>{t('energy.hero.description')}</p>

          <div className="energy-yellow-line" />
        </div>

        <div className="energy-hero-media">
          <img src={EnergyHero} alt="" />

          <div className="energy-hero-caption">
            {t('energy.hero.caption_line1')}
            <br />
            {t('energy.hero.caption_line2')}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECNOLOGÍAS
      ===================================================== */}
      <section className="energy-technologies">
        <TechnologyCard
          kicker={t('energy.technologies.solar.kicker')}
          title={t('energy.technologies.solar.title')}
          highlight={t('energy.technologies.solar.highlight')}
          description={t('energy.technologies.solar.description')}
          imageLabel={<img src={Panel} alt="" width={187} height={259} />}
          icon={<SunIcon />}
          items={solarItems}
        />

        <TechnologyCard
          kicker={t('energy.technologies.diesel.kicker')}
          title={t('energy.technologies.diesel.title')}
          highlight={t('energy.technologies.diesel.highlight')}
          description={t('energy.technologies.diesel.description')}
          imageLabel={<img src={Planta} alt="" width={187} height={259} />}
          icon={<GeneratorIcon />}
          items={dieselItems}
        />
      </section>

      {/* =====================================================
          SISTEMA HÍBRIDO
      ===================================================== */}
      <section className="energy-hybrid">
        <div className="energy-hybrid-copy">
          <SectionKicker>{t('energy.hybrid.kicker')}</SectionKicker>

          <h2>
            {t('energy.hybrid.title_line1')}{' '}
            <strong>{t('energy.hybrid.title_line2')}</strong>
          </h2>

          <p>{t('energy.hybrid.description')}</p>
        </div>

        <div className="energy-system">
          <div className="system-flow">
            <div className="system-node">
              <img src={Paneles2} alt="" width={120} height={80} />

              <div className="system-arrow system-arrow--right">→</div>

              <div className="system-label">
                <SunIcon />
                <strong>{t('energy.hybrid.solar_panels.title')}</strong>
                <span>{t('energy.hybrid.solar_panels.subtitle')}</span>
              </div>
            </div>

            <div className="system-node system-node--center">
              <img src={Generador} alt="" width={170} height={80} />

              <div className="system-arrow system-arrow--both">↔</div>

              <div className="system-label">
                <ManagementIcon />
                <strong>{t('energy.hybrid.management.title')}</strong>
                <span>{t('energy.hybrid.management.subtitle')}</span>
              </div>
            </div>

            <div className="system-node">
              <img src={Generador2} alt="" width={170} height={80} />

              <div className="system-label">
                <GeneratorIcon />
                <strong>{t('energy.hybrid.diesel_plants.title')}</strong>
                <span>{t('energy.hybrid.diesel_plants.subtitle')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFICIOS
      ===================================================== */}
      <section className="energy-benefits">
        <div className="benefits-title">
          <SectionKicker>{t('energy.benefits.kicker')}</SectionKicker>

          <h2>
            {t('energy.benefits.title_line1')}{' '}
            <strong>{t('energy.benefits.title_line2')}</strong>
          </h2>
        </div>

        <div className="benefits-grid">
          <Benefit
            icon={<LeafIcon />}
            title={t('energy.benefits.sustainability.title')}
            description={t('energy.benefits.sustainability.description')}
          />

          <Benefit
            icon={<ShieldIcon />}
            title={t('energy.benefits.reliability.title')}
            description={t('energy.benefits.reliability.description')}
          />

          <Benefit
            icon={<EfficiencyIcon />}
            title={t('energy.benefits.efficiency.title')}
            description={t('energy.benefits.efficiency.description')}
          />

          <Benefit
            icon={<LocationIcon />}
            title={t('energy.benefits.versatility.title')}
            description={t('energy.benefits.versatility.description')}
          />
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="energy-cta">
        <div className="energy-cta-overlay" />

        <div className="energy-cta-content">
          <SectionKicker light>
            {t('energy.cta.kicker')}
          </SectionKicker>

          <h2>
            {t('energy.cta.title_line1')}
            <br />
            {t('energy.cta.title_line2')}{' '}
            <strong>{t('energy.cta.title_line3')}</strong>
          </h2>

          <p>{t('energy.cta.description')}</p>

          <Link to="/contacto#cuentanos-tu-proyecto" className='energy-cta-button'>
            <span>{t('energy.cta.button')}</span>
              <ArrowIcon />
          </Link>
        </div>

        <div className="energy-cta-media">
          <img src={EnergyFooter} alt="" width={1080} height={350} />
        </div>
      </section>
    </main>
  );
}