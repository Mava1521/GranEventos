import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Festival.css';
import festival from '../assets/festival.jpg';
import camion from '../assets/camion.png';
import energia from '../assets/energia.png';
import volumen from '../assets/volumen.png';
import escenario from '../assets/escenario.png';
import stereo from '../assets/stereo.jpg';
import vive from '../assets/vive.jpg';
import colombia from '../assets/colombia.png';

const projects = [
  {
    title: 'ESTÉREO PICNIC',
    location: 'Bogotá, 2024',
    image: stereo,
  },
  {
    title: 'VIVE LATINO',
    location: 'Bogotá, 2023',
    image: vive,
  },
  {
    title: 'COLOMBIA AL PARQUE',
    location: 'Bogotá, 2022',
    image: colombia,
  },
];

export default function Festival() {
  const { t } = useTranslation();

  return (
    <main className="festival-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="festival-hero">

        <div className="festival-hero__background" aria-hidden="true">
          <img
            src={festival}
            alt=""
          />
        </div>

        <div className="festival-hero__overlay" aria-hidden="true" />

        <div className="festival-container festival-hero__content">

          <div className="festival-hero__text">

            <span className="festival-eyebrow">
              <span className="festival-slash">/</span>
              {t('festival.hero.eyebrow')}
            </span>

            <h1>
              {t('festival.hero.title1')}{' '}
              <span>{t('festival.hero.title2')}</span>{' '}
              {t('festival.hero.title3')}
            </h1>

            <p>
              {t('festival.hero.description')}
            </p>

            <span className="festival-line" />

            <Link
              to="/nuevas-tecnologias"
              className="festival-hero__link"
            >
              {t('festival.hero.discoverBtn')}
              <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          PROYECTOS
      ===================================================== */}
      <section className="festival-projects">

        <div className="festival-container">

          <div className="festival-projects__header">

            <div>

              <span className="festival-eyebrow">
                <span className="festival-slash">/</span>
                {t('festival.projects.eyebrow')}
              </span>

              <h2>
                {t('festival.projects.title1')}
                <strong>{t('festival.projects.title2')}</strong>
              </h2>

            </div>

            <div className="festival-projects__intro">
              <p>
                {t('festival.projects.intro')}
              </p>
            </div>

            <Link
              to="/nuevas-tecnologias"
              className="festival-projects__all"
            >
              {t('festival.projects.viewAll')}
              <span aria-hidden="true">→</span>
            </Link>

          </div>


          <div className="festival-projects__grid">

            {projects.map((project) => (
              <article
                className="festival-project-card"
                key={project.title}
              >

                <div className="festival-project-card__image">

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={t('festival.projects.imageAlt', { title: project.title })}
                    />
                  ) : (
                    <div
                      className="festival-image-placeholder"
                      role="img"
                      aria-label={t('festival.projects.imagePending', { title: project.title })}
                    >
                      <span>{t('festival.projects.placeholderText')}</span>
                    </div>
                  )}

                </div>

                <div className="festival-project-card__content">

                  <div>
                    <h3>{project.title}</h3>
                    <span>{project.location}</span>
                  </div>

                  <button
                    type="button"
                    className="festival-project-card__arrow"
                    aria-label={t('festival.projects.viewProjectAria', { title: project.title })}
                  >
                    →
                  </button>

                </div>

              </article>
            ))}

          </div>


          <div className="festival-projects__controls">

            <button
              type="button"
              aria-label={t('festival.projects.prevProjectAria')}
              className="festival-slider-button"
            >
              ←
            </button>

            <button
              type="button"
              aria-label={t('festival.projects.nextProjectAria')}
              className="festival-slider-button"
            >
              →
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}