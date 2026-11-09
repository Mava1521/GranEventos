import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/Energy.css';
import EnergyHero from '../assets/EnergyHero.jpg';
import ConectionHero from '../assets/ConetionHero.jpeg';
import EnergyFooter from '../assets/EnergyFooter.jpg';
import Lush from '../assets/Lush.png';

const EnergyIcon = ({ type }) => {
  const common = {
    width: 34,
    height: 34,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const paths = {
    leaf: (
      <>
        <path d="M20 4C11 3 5 6 5 13a7 7 0 0 0 7 7c7 0 10-9 8-16Z" />
        <path d="M4 21c3-6 7-9 13-12" />
      </>
    ),
    lightning: (
      <path d="M13 2 5 13h6l-1 9 9-12h-6l1-8Z" />
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    hands: (
      <>
        <path d="m8 12-3-3-3 3 5 5h5l4-4" />
        <path d="m16 12 3-3 3 3-5 5h-5" />
        <path d="m8 12 4-4 4 4" />
        <path d="m12 8 2-2 4 4" />
      </>
    ),
    solar: (
      <>
        <rect x="3" y="7" width="18" height="11" rx="1" />
        <path d="M7 7v11m5-11v11m5-11v11M3 12h18M8 21h8" />
        <circle cx="12" cy="4" r="1" />
      </>
    ),
    generator: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 9h5v6H7zM15 10h3m-3 3h3M7 19v2m10-2v2" />
      </>
    ),
    power: (
      <path d="M13 2 4 14h7l-1 8 10-13h-7V2Z" />
    ),
  };

  return (
    <svg {...common}>
      {paths[type] || paths.leaf}
    </svg>
  );
};

const Energy = () => {
  const { t } = useTranslation();

  const benefits = [
    { icon: 'leaf', key: 'carbon' },
    { icon: 'lightning', key: 'efficiency' },
    { icon: 'shield', key: 'continuity' },
    { icon: 'hands', key: 'solutions' },
  ];

  return (
    <main className="energy-page">

      {/* 01. HERO */}
      <section className="energy-hero">
        <div className="energy-hero__image">
          <img
            src={ConectionHero}
            alt={t('energy.hero.imageAlt')}
            fetchPriority="high"
          />
        </div>
        

        <div className="energy-hero__overlay">
          <div className="energy-container energy-hero__content">
            <span className="energy-eyebrow">
              {t('energy.hero.eyebrow')}
            </span>

            <h1>
              {t('energy.hero.title')}
              <span>{t('energy.hero.highlight')}</span>
            </h1>

            <p>{t('energy.hero.description')}</p>

            <Link to="/contacto" className="energy-button">
              {t('energy.hero.button')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 02. DOS MUNDOS */}
      <section className="energy-worlds">
        <div className="energy-worlds__content">
          <div className="energy-container energy-worlds__inner">
            <div className="energy-worlds__text">
              <span className="energy-eyebrow">
                {t('energy.worlds.eyebrow')}
              </span>

              <h2>{t('energy.worlds.title')}</h2>

              <p>{t('energy.worlds.description')}</p>
            </div>

            <div className="energy-worlds__image">
              <img
                src={EnergyHero}
                alt={t('energy.worlds.imageAlt')}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03. SOLUCIÓN HÍBRIDA */}
      <section className="energy-hybrid">
        <div className="energy-container">
          <div className="energy-section-heading energy-section-heading--dark">
            <span>{t('energy.hybrid.eyebrow')}</span>
            <h2>
              {t('energy.hybrid.title')}
            </h2>
          </div>

          <div className="energy-hybrid__items">

            <div className="energy-hybrid__item">
              <div className="energy-hybrid__icon">
                <EnergyIcon type="solar" />
              </div>
              <h3>{t('energy.hybrid.solar.title')}</h3>
              <p>{t('energy.hybrid.solar.description')}</p>
            </div>

            <span className="energy-hybrid__operator" aria-hidden="true">
              +
            </span>

            <div className="energy-hybrid__item">
              <div className="energy-hybrid__icon energy-hybrid__icon--gold">
                <EnergyIcon type="generator" />
              </div>
              <h3>{t('energy.hybrid.generator.title')}</h3>
              <p>{t('energy.hybrid.generator.description')}</p>
            </div>

            <span className="energy-hybrid__operator" aria-hidden="true">
              =
            </span>

            <div className="energy-hybrid__item">
              <div className="energy-hybrid__icon energy-hybrid__icon--yellow">
                <EnergyIcon type="power" />
              </div>
              <h3>{t('energy.hybrid.result.title')}</h3>
              <p>{t('energy.hybrid.result.description')}</p>
            </div>

          </div>
        </div>
      </section>

      {/* 04. BENEFICIOS */}
      <section className="energy-benefits">
        <div className="energy-container">
          <div className="energy-section-heading">
            <h2>{t('energy.benefits.title')}</h2>
          </div>

          <div className="energy-benefits__grid">
            {benefits.map((benefit) => (
              <article
                className="energy-benefit-card"
                key={benefit.key}
              >
                <div className="energy-benefit-card__icon">
                  <EnergyIcon type={benefit.icon} />
                </div>

                <h3>
                  {t(`energy.benefits.items.${benefit.key}`)}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05. GRANDES ESCENARIOS */}
      <section className="energy-scenarios">
        <div className="energy-scenarios__content">
          <div className="energy-container">
            <div className="energy-scenarios__text">
              <span className="energy-eyebrow">
                {t('energy.scenarios.eyebrow')}
              </span>

              <h2>{t('energy.scenarios.title')}</h2>

              <p>{t('energy.scenarios.description')}</p>

              <Link to="/proyectos" className="energy-button">
                {t('energy.scenarios.button')}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="energy-scenarios__image">
          <img
            src={EnergyFooter}
            alt={t('energy.scenarios.imageAlt')}
            loading="lazy"
          />
        </div>
      </section>

      {/* 06. SOSTENIBILIDAD */}
      <section className="energy-sustainability">
        <div className="energy-sustainability__image">
          <img
            src={Lush}
            alt={t('energy.sustainability.imageAlt')}
            loading="lazy"
          />
        </div>

        <div className="energy-container energy-sustainability__content">
          <div className="energy-sustainability__symbol" aria-hidden="true">
            <EnergyIcon type="leaf" />
          </div>

          <div className="energy-sustainability__text">
            <h2>{t('energy.sustainability.title')}</h2>

            <p>{t('energy.sustainability.description')}</p>

            <Link to="/contacto" className="energy-button">
              {t('energy.sustainability.button')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Energy;
