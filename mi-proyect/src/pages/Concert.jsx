import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Concert.css';

import HeroConcert from '../assets/HeroConcert.jpg';
import Concert2 from '../assets/Concert2.jpg';
import Concert3 from '../assets/Concert3.jpg';
import Card1 from '../assets/Card1.jpg';
import Concertt from '../assets/Concert.png';
import FOTO4 from '../assets/FOTO4.jpg';
import FOTO5 from '../assets/FOTO5.jpg';

/*
 * ============================================================
 * DATOS DE LA PÁGINA (ESTRUTURA BASE)
 * ============================================================
 */

const serviceKeys = [
  { id: 1, key: 's1', icon: 'stage' },
  { id: 2, key: 's2', icon: 'truck' },
  { id: 3, key: 's3', icon: 'shield' },
  { id: 4, key: 's4', icon: 'settings' },
  { id: 5, key: 's5', icon: 'people' },
];

const projects = [
  {
    id: 1,
    title: 'ELECTRO FEST 2024',
    location: 'Bogotá, 2024',
    image: Card1,
  },
  {
    id: 2,
    title: 'VIVE LATINO',
    location: 'Bogotá, 2023',
    image: Concertt,
  },
  {
    id: 3,
    title: 'COLOMBIA AL PARQUE',
    location: 'Bogotá, 2022',
    image: FOTO4,
  },
  {
    id: 4,
    title: 'ROCK AL PARQUE',
    location: 'Bogotá, 2021',
    image: FOTO5,
  },
];

/*
 * ============================================================
 * ICONOS REUTILIZABLES
 * ============================================================
 */

function ConcertIcon({ type }) {
  const commonProps = {
    width: 48,
    height: 48,
    viewBox: '0 0 48 48',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
  };

  switch (type) {
    case 'stage':
      return (
        <svg {...commonProps}>
          <path d="M7 39H41" stroke="currentColor" strokeWidth="2" />
          <path d="M10 39V17H38V39" stroke="currentColor" strokeWidth="2" />
          <path d="M7 17L24 9L41 17" stroke="currentColor" strokeWidth="2" />
          <path d="M15 17V11" stroke="currentColor" strokeWidth="2" />
          <path d="M33 17V11" stroke="currentColor" strokeWidth="2" />
          <path d="M16 25H32" stroke="currentColor" strokeWidth="2" />
          <path d="M19 25V35" stroke="currentColor" strokeWidth="2" />
          <path d="M29 25V35" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case 'truck':
      return (
        <svg {...commonProps}>
          <path d="M6 12H30V34H6V12Z" stroke="currentColor" strokeWidth="2" />
          <path d="M30 19H37L42 25V34H30V19Z" stroke="currentColor" strokeWidth="2" />
          <circle cx="14" cy="36" r="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="35" cy="36" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M30 27H40" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case 'shield':
      return (
        <svg {...commonProps}>
          <path d="M24 6L39 12V22C39 32 32.5 38.5 24 42C15.5 38.5 9 32 9 22V12L24 6Z" stroke="currentColor" strokeWidth="2" />
          <path d="M17 24L22 29L32 18" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case 'settings':
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
          <path d="M24 5V10" stroke="currentColor" strokeWidth="2" />
          <path d="M24 38V43" stroke="currentColor" strokeWidth="2" />
          <path d="M5 24H10" stroke="currentColor" strokeWidth="2" />
          <path d="M38 24H43" stroke="currentColor" strokeWidth="2" />
          <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="2" />
          <path d="M34 34L37.5 37.5" stroke="currentColor" strokeWidth="2" />
          <path d="M37.5 10.5L34 14" stroke="currentColor" strokeWidth="2" />
          <path d="M14 34L10.5 37.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case 'people':
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
          <circle cx="10" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="38" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M13 38C13 30 17.5 26 24 26C30.5 26 35 30 35 38" stroke="currentColor" strokeWidth="2" />
          <path d="M3 36C3 30.5 6 27 11 27" stroke="currentColor" strokeWidth="2" />
          <path d="M45 36C45 30.5 42 27 37 27" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    default:
      return null;
  }
}

/*
 * ============================================================
 * COMPONENTE PRINCIPAL
 * ============================================================
 */

export default function Concert() {
  const { t } = useTranslation();
  const [projectOffset, setProjectOffset] = useState(0);

  const visibleProjects = projects.map((_, index) => {
    return projects[(index + projectOffset) % projects.length];
  });

  const handlePrevious = () => {
    setProjectOffset((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setProjectOffset((current) => (current + 1) % projects.length);
  };

  return (
    <main className="concert-page">
      {/* ======================================================
          HERO
      ====================================================== */}
      <section className="concert-hero">
        <div className="concert-hero__image" aria-hidden="true">
          <img src={HeroConcert} alt={t('concert.hero.bgAlt')} className="concert-hero__bg-img" />
        </div>

        <div className="concert-hero__gradient" aria-hidden="true" />

        <div className="concert-container concert-hero__content">
          <div className="concert-hero__text">
            <div className="concert-label">
              <span>/</span>
              {t('concert.hero.eyebrow')}
            </div>

            <h1 className="concert-hero__title">
              {t('concert.hero.title1')}{' '}
              <span>{t('concert.hero.title2')}</span>{' '}
              <strong>{t('concert.hero.title3')}</strong>
            </h1>

            <p className="concert-hero__description">
              {t('concert.hero.description')}
            </p>

            <span className="concert-yellow-line" aria-hidden="true" />

            <Link to="/nuevas-tecnologias" className="concert-main-link">
              {t('concert.hero.discoverBtn')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          SERVICIOS
      ====================================================== */}
      <section className="concert-services">
        <div className="concert-container">
          <header className="concert-section-header">
            <div className="concert-section-header__title">
              <div className="concert-label">
                <span>/</span>
                {t('concert.services.eyebrow')}
              </div>
              <h2>
                {t('concert.services.title')}<span>.</span>
              </h2>
            </div>

            <div className="concert-section-header__description">
              <p>
                {t('concert.services.description')}
              </p>
            </div>
          </header>

          <div className="concert-services-grid">
            {serviceKeys.map((item) => (
              <article className="concert-service-card" key={item.id}>
                <div className="concert-service-card__icon">
                  <ConcertIcon type={item.icon} />
                </div>
                <h3>{t(`concert.services.items.${item.key}.title`)}</h3>
                <p>{t(`concert.services.items.${item.key}.description`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          EXPERIENCIAS
      ====================================================== */}
      <section className="concert-experience">
        <div className="concert-experience__image">
          <img src={Concert2} alt="" className="concert-experience__bg-img" />
        </div>

        <div className="concert-container concert-experience__container">
          <div className="concert-experience__content">
            <div className="concert-label">
              <span>/</span>
              {t('concert.experience.eyebrow')}
            </div>
            <h2>
              {t('concert.experience.title1')} <span>{t('concert.experience.title2')}</span>
            </h2>
            <p>
              {t('concert.experience.description')}
            </p>
          </div>

          <div className="concert-stats">
            <div className="concert-stat">
              <strong>+100</strong>
              <span>
                {t('concert.experience.stats.concerts')} <br /> {t('concert.experience.stats.realized')}
              </span>
            </div>
            <div className="concert-stat">
              <strong>+500K</strong>
              <span>
                {t('concert.experience.stats.attendees')} <br /> {t('concert.experience.stats.totals')}
              </span>
            </div>
            <div className="concert-stat">
              <strong>+10 AÑOS</strong>
              <span>{t('concert.experience.stats.years')}</span>
            </div>
            <div className="concert-stat">
              <strong>100%</strong>
              <span>{t('concert.experience.stats.commitment')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROYECTOS
      ====================================================== */}
      <section className="concert-projects">
        <div className="concert-container">
          <header className="concert-projects__header">
            <div>
              <div className="concert-label">
                <span>/</span>
                {t('concert.projects.eyebrow')}
              </div>
              <h2>
                {t('concert.projects.title')}<span>.</span>
              </h2>
            </div>

            <div className="concert-projects__controls">
              <button type="button" onClick={handlePrevious} aria-label={t('concert.projects.prevAria')}>
                ←
              </button>
              <span>01 / 04</span>
              <button type="button" onClick={handleNext} aria-label={t('concert.projects.nextAria')}>
                →
              </button>
            </div>
          </header>

          <div className="concert-projects-grid">
            {visibleProjects.map((project) => (
              <article className="concert-project-card" key={project.id}>
                <div className="concert-project-card__image">
                  {project.image ? (
                    <img src={project.image} alt={t('concert.projects.imageAlt', { title: project.title })} />
                  ) : (
                    <div className="concert-project-placeholder">
                      <span>{t('concert.projects.placeholderText')}</span>
                    </div>
                  )}
                </div>

                <div className="concert-project-card__content">
                  <div>
                    <h3>{project.title}</h3>
                    <span>{project.location}</span>
                  </div>
                  <button type="button" className="concert-project-card__arrow" aria-label={t('concert.projects.viewProjectAria', { title: project.title })}>
                    →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA
      ====================================================== */}
      <section className="concert-cta">
        <div className="concert-cta__image">
          <img src={Concert3} alt="" className="concert-cta__bg-img" />
        </div>

        <div className="concert-cta__decoration" />

        <div className="concert-container concert-cta__container">
          <div className="concert-cta__title">
            <div className="concert-label">
              <span>/</span>
              {t('concert.cta.eyebrow')}
            </div>
            <h2>
              {t('concert.cta.title1')} <span>{t('concert.cta.title2')}</span>
            </h2>
          </div>

          <div className="concert-cta__content">
            <p>{t('concert.cta.description')}</p>
            <Link to="/contacto" className="concert-cta__button">
              {t('concert.cta.button')} <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}