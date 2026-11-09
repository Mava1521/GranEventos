
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/Corporate.css';
import CorporativeHero from '../assets/CorporativeHero.jpg';
import ibero from '../assets/ibero.avif';
import circus from '../assets/Circus.jpeg';
import evento from '../assets/evento.webp'

/* ============================================================
   IMAGES
   Reemplaza las rutas cuando tengas tus fotografías.
   ============================================================ */

const CORPORATE_IMAGES = {
  hero: CorporativeHero,
  projects: [
    ibero,
    circus,
    evento,
  ],
  cta: CorporativeHero,
};

/* ============================================================
   REUSABLE ICONS
   ============================================================ */

const CorporateIcon = ({ type }) => {
  const common = {
    width: 38,
    height: 38,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const icons = {
    energy: (
      <path d="m13 2-9 12h7l-1 8 10-13h-7V2Z" />
    ),
    technology: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.8 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.8-1l-1.7.7-1.4-2.4 1.4-1.1a8 8 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.8-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.8 1l1.7-.7 1.4 2.4-1.4 1.1a8 8 0 0 1 0 2Z" />
      </>
    ),
    support: (
      <>
        <path d="M3 13v-2a9 9 0 0 1 18 0v2" />
        <rect x="3" y="12" width="4" height="7" rx="2" />
        <rect x="17" y="12" width="4" height="7" rx="2" />
        <path d="M17 19a5 5 0 0 1-5 3h-2" />
      </>
    ),
    sustainability: (
      <>
        <path d="M20 4C11 3 5 6 5 13a7 7 0 0 0 7 7c7 0 10-9 8-16Z" />
        <path d="M4 21c3-6 7-9 13-12" />
      </>
    ),
  };

  return <svg {...common}>{icons[type] || icons.energy}</svg>;
};

/* ============================================================
   PROJECT DATA
   ============================================================ */

const PROJECTS = [
  {
    id: 'congress',
    image: CORPORATE_IMAGES.projects[0],
    year: '2025',
  },
  {
    id: 'launch',
    image: CORPORATE_IMAGES.projects[1],
    year: '2024',
  },
  {
    id: 'outdoor',
    image: CORPORATE_IMAGES.projects[2],
    year: '2024',
  },
];

/* ============================================================
   CORPORATE PAGE
   ============================================================ */

export default function Corporate() {
  const { t } = useTranslation();

  const [activeProject, setActiveProject] = useState(0);

  const benefits = [
    { id: 'energy', icon: 'energy' },
    { id: 'technology', icon: 'technology' },
    { id: 'support', icon: 'support' },
    { id: 'environment', icon: 'sustainability' },
  ];

  const clients = [
    'Deloitte.',
    'SAMSUNG',
    'Coca-Cola',
    'Claro',
    'Bancolombia',
    'Google',
  ];

  const visibleProjects = PROJECTS.map(
    (_, index) => PROJECTS[(index + activeProject) % PROJECTS.length]
  );

  const changeProject = (direction) => {
    setActiveProject(
      (current) =>
        (current + direction + PROJECTS.length) % PROJECTS.length
    );
  };

  return (
    <main className="corporate-page">

      {/* ======================================================
          01. HERO
      ====================================================== */}

      <section className="corporate-hero">

        <div className="corporate-hero__image">
          <img
            src={CORPORATE_IMAGES.hero}
            alt={t('corporate.hero.imageAlt')}
            fetchPriority="high"
          />
        </div>

        <div className="corporate-hero__overlay" />

        <div className="corporate-container corporate-hero__content">

          <span className="corporate-eyebrow corporate-eyebrow--light">
            {t('corporate.hero.eyebrow')}
          </span>

          <h1>
            {t('corporate.hero.title')}
            <span>{t('corporate.hero.highlight')}</span>
          </h1>

          <p>{t('corporate.hero.description')}</p>

          <Link
            to="/proyectos"
            className="corporate-button"
          >
            {t('corporate.hero.button')}
            <span aria-hidden="true">→</span>
          </Link>

        </div>

        <div className="corporate-hero__decoration" aria-hidden="true" />

      </section>


      {/* ======================================================
          02. WHY CHOOSE US
      ====================================================== */}

      <section className="corporate-benefits">

        <div className="corporate-container corporate-benefits__layout">

          <div className="corporate-benefits__intro">

            <span className="corporate-eyebrow">
              {t('corporate.benefits.eyebrow')}
            </span>

            <h2>
              {t('corporate.benefits.title')}
              {' '}
              <span>{t('corporate.benefits.highlight')}</span>
            </h2>

            <p>{t('corporate.benefits.description')}</p>

          </div>

          <div className="corporate-benefits__grid">

            {benefits.map((benefit) => (
              <article
                className="corporate-benefit-card"
                key={benefit.id}
              >

                <div className="corporate-benefit-card__icon">
                  <CorporateIcon type={benefit.icon} />
                </div>

                <h3>
                  {t(`corporate.benefits.items.${benefit.id}`)}
                </h3>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* ======================================================
          03. PROJECTS
      ====================================================== */}

      <section className="corporate-projects">

        <div className="corporate-container">

          <div className="corporate-projects__heading">

            <div>
              <span className="corporate-eyebrow">
                {t('corporate.projects.eyebrow')}
              </span>

              <h2>
                {t('corporate.projects.title')}
                <br />
                {t('corporate.projects.subtitle')}
                {' '}
                <span>{t('corporate.projects.highlight')}</span>
              </h2>
            </div>

            <Link
              to="/proyectos"
              className="corporate-projects__more"
            >
              {t('corporate.projects.more')}
              <span aria-hidden="true">→</span>
            </Link>

          </div>


          <div className="corporate-projects__grid">

            {visibleProjects.map((project) => (
              <article
                className="corporate-project-card"
                key={project.id}
              >

                <img
                  src={project.image}
                  alt={t(`corporate.projects.items.${project.id}.imageAlt`)}
                  loading="lazy"
                />

                <div className="corporate-project-card__overlay" />

                <div className="corporate-project-card__content">

                  <span className="corporate-project-card__year">
                    <span aria-hidden="true">▣</span>
                    {project.year}
                  </span>

                  <h3>
                    {t(`corporate.projects.items.${project.id}.title`)}
                  </h3>

                  <p>
                    {t(`corporate.projects.items.${project.id}.client`)}
                  </p>

                </div>

                <span
                  className="corporate-project-card__arrow"
                  aria-hidden="true"
                >
                  →
                </span>

              </article>
            ))}

          </div>


          <div className="corporate-projects__controls">

            <button
              type="button"
              className="corporate-carousel-button"
              onClick={() => changeProject(-1)}
              aria-label={t('corporate.projects.previous')}
            >
              ←
            </button>

            <button
              type="button"
              className="corporate-carousel-button"
              onClick={() => changeProject(1)}
              aria-label={t('corporate.projects.next')}
            >
              →
            </button>

          </div>

        </div>

      </section>


      {/* ======================================================
          04. CLIENTS
      ====================================================== */}

      <section className="corporate-clients">

        <div className="corporate-container">

          <span className="corporate-eyebrow">
            {t('corporate.clients.eyebrow')}
          </span>

          <div className="corporate-clients__grid">

            {clients.map((client) => (
              <div
                className="corporate-client"
                key={client}
              >
                <span>{client}</span>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ======================================================
          05. CALL TO ACTION
      ====================================================== */}

      <section className="corporate-cta">

        <div className="corporate-cta__image">
          <img
            src={CORPORATE_IMAGES.cta}
            alt={t('corporate.cta.imageAlt')}
            loading="lazy"
          />
        </div>

        <div className="corporate-cta__overlay" />

        <div className="corporate-cta__content">

          <h2>{t('corporate.cta.title')}</h2>

          <p>
            {t('corporate.cta.description')}
            {' '}
            <strong>{t('corporate.cta.highlight')}</strong>
          </p>

          <Link
            to="/contacto"
            className="corporate-button"
          >
            {t('corporate.cta.button')}
            <span aria-hidden="true">→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}
