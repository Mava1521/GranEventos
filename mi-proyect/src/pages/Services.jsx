import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Services.css';

import ServiceHero from '../assets/ServiceHero.jpg';
import plantas from '../assets/Plantas.jpg';
import diseño from '../assets/Diseño.jpg';
import transformadores from '../assets/Transformadores.jpg';
import distribucion from '../assets/Distribuicion.jpg';
import iluminacion from '../assets/Iluminacion.jpg';
import ventas from '../assets/Ventas.jpg';
import ServiceSeccion3 from '../assets/ServicesSeccion3.jpg';

function ServiceImage({ image, alt, number }) {
  const { t } = useTranslation();

  if (image) {
    return (
      <img
        className="service-card__image"
        src={image}
        alt={alt}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="service-card__placeholder"
      role="img"
      aria-label={`${alt}. ${t('services.imagePending')}`}
    >
      <span>{t('services.imageLabel')} {number}</span>
    </div>
  );
}

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      number: '01',
      title: t('services.items.powerPlants.title'),
      subtitle: t('services.items.powerPlants.subtitle'),
      description: t('services.items.powerPlants.description'),
      image: plantas,
      alt: t('services.items.powerPlants.alt'),
    },
    {
      number: '02',
      title: t('services.items.sales.title'),
      subtitle: t('services.items.sales.subtitle'),
      description: t('services.items.sales.description'),
      image: ventas,
      alt: t('services.items.sales.alt'),
    },
    {
      number: '03',
      title: t('services.items.design.title'),
      subtitle: t('services.items.design.subtitle'),
      description: t('services.items.design.description'),
      image: diseño,
      alt: t('services.items.design.alt'),
    },
    {
      number: '04',
      title: t('services.items.transformers.title'),
      subtitle: t('services.items.transformers.subtitle'),
      description: t('services.items.transformers.description'),
      image: transformadores,
      alt: t('services.items.transformers.alt'),
    },
    {
      number: '05',
      title: t('services.items.distribution.title'),
      subtitle: t('services.items.distribution.subtitle'),
      description: t('services.items.distribution.description'),
      image: distribucion,
      alt: t('services.items.distribution.alt'),
    },
    {
      number: '06',
      title: t('services.items.lighting.title'),
      subtitle: t('services.items.lighting.subtitle'),
      description: t('services.items.lighting.description'),
      image: iluminacion,
      alt: t('services.items.lighting.alt'),
    },
  ];

  return (
    <main className="services-page">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="services-hero" aria-labelledby="services-title">
        <div className="services-hero__content">
          <p className="services-eyebrow">{t('services.hero.eyebrow')}</p>

          <h1 id="services-title" className="services-hero__title">
            <span>{t('services.hero.titleLine1')}</span>
            <span>{t('services.hero.titleLine2')}</span>
            <span className="services-hero__title-light">
              {t('services.hero.titleLine3')}<span className="yellow-dot">.</span>
            </span>
          </h1>

          <p className="services-hero__description">
            {t('services.hero.description')}
          </p>
        </div>

        <div className="services-hero__visual">
          <div className="services-hero__image-placeholder">
            <span>
              <img src={ServiceHero} alt="" width={1700} height={625} />
            </span>
          </div>

          <div className="services-hero__message">
            <p>
              {t('services.hero.message.line1')}
              <br />
              {t('services.hero.message.line2')}
              <br />
              {t('services.hero.message.line3')}
              <br />
              {t('services.hero.message.line4')}
            </p>

            <span className="yellow-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICIOS
      ====================================================== */}
      <section
        className="services-grid-section"
        aria-labelledby="services-grid-title"
      >
        <h2 id="services-grid-title" className="sr-only">
          {t('services.gridTitle')}
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card__number">
                <span>{service.number}</span>
                <span className="service-card__number-line" aria-hidden="true" />
              </div>

              <ServiceImage
                image={service.image}
                alt={service.alt}
                number={service.number}
              />

              <div className="service-card__content">
                <h3>{service.title}</h3>

                <p className="service-card__subtitle">
                  {service.subtitle}
                </p>

                <p className="service-card__description">
                  {service.description}
                </p>

                <Link
                  to="/contacto"
                  className="service-card__link"
                  aria-label={`${t('services.seeMore')} ${service.title}`}
                >
                  <span>{t('services.seeMore')}</span>

                  <span className="service-card__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          CTA FINAL
      ====================================================== */}
      <section className="services-cta" aria-labelledby="services-cta-title">
        <div className="services-cta__background">
          <span>
            <img src={ServiceSeccion3} alt="" width={1850} height={300} />
          </span>
        </div>

        <div className="services-cta__overlay" />

        <div className="services-cta__content">
          <span className="services-cta__line" aria-hidden="true" />

          <h2 id="services-cta-title">
            {t('services.cta.titleLine1')}
            <br />
            {t('services.cta.titleLine2')}
          </h2>

          <Link to="/contacto" className="services-cta__button">
            <span>{t('services.cta.button')}</span>

            <span className="services-cta__button-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className="services-cta__side-text">
          <span>{t('services.cta.sideText.more')}</span>
          <span>{t('services.cta.sideText.energy')}</span>
          <span>{t('services.cta.sideText.ideas')}</span>
          <span>{t('services.cta.sideText.experiences')}</span>
        </div>
      </section>
    </main>
  );
}