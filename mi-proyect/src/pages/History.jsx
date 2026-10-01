import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { useLocalizedTimeline } from '../hooks/useLocalizedTimeline';
import '../styles/History.css';

import Navbar from '../components/Navbar';
import Timeline from '../components/line/Timeline';
import timelineData from '../data/timelineData';
import ScrollVideoSection from '../components/ScrollVideoSection';
import LetrasGE from '../assets/LetrasGE.png';
import SampleVideo from '../assets/History.mp4';


export default function History() {
  const { t } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const localizedTimelineData = useLocalizedTimeline(timelineData);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedEvent(null);
      }
    };

    if (selectedEvent) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedEvent]);

  const handleOpenModal = (eventData) => {
    console.log("1. History recibió clic para abrir modal con el evento:", eventData);
    setSelectedEvent(eventData);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="history-page">
      <main className="history-main">
        {/* HERO */}
        <section className="history-hero">
          <div className="history-hero-content">
            <span className="history-eyebrow">{t('history.hero.eyebrow')}</span>
            <h1>
              {t('history.hero.titlePart1')} <span className="text-yellow">{t('history.hero.titleYellow')}</span> <br />
              {t('history.hero.titlePart2')} <br />
              <span className="text-green">{t('history.hero.titleGreen')}</span> <br />
              {t('history.hero.titlePart3')}
            </h1>
            <div className="history-gold-line" />
            <p>
              {t('history.hero.subtextPart1')} <br />
              {t('history.hero.subtextPart2')} <br />
              {t('history.hero.subtextPart3')}
            </p>
          </div>

          <div className="history-top-message">
            <div className="history-gold-line" />
            <p>{t('history.topMessage.line1')}</p>
            <p>{t('history.topMessage.line2')}</p>
            <p>{t('history.topMessage.line3')}</p>
            <p>{t('history.topMessage.line4')}</p>
            <p>{t('history.topMessage.line5')}</p>
          </div>

          <div className="history-center-logo">
            <img src={LetrasGE} alt="" width={370} height={290} />
          </div>
        </section>

        {/* COLLAGE + TÍTULO DE LÍNEA DE TIEMPO */}
        <section className="history-collage-wrapper">

          {/* TÍTULO SOLO PARA ESCRITORIO */}
          <div className="history-timeline-title-desktop">
            <span className="timeline-eyebrow">
              {t('history.timeline.eyebrow')}
            </span>

            <h2>{t('history.timeline.title')}</h2>
          </div>

          {/* COLLAGE */}
          <section
            className="history-collage"
            aria-label={t('history.collage.ariaLabel')}
          >
            {timelineData.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`collage-item collage-item-${index + 1}`}
                onClick={() => handleOpenModal(item)}
                aria-label={t('history.collage.buttonAria', { year: item.year, title: item.title })}
              >
                <img
                  src={item.image}
                  alt={`${item.year} - ${item.title}`}
                  className="collage-image"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />

                <span className="collage-overlay">
                  <span className="collage-year">{item.year}</span>
                  <span className="collage-title">{item.title}</span>
                </span>
              </button>
            ))}
          </section>
        </section>

        {/* TIMELINE */}
        <section className="history-timeline-section">

          {/* TÍTULO SOLO PARA MÓVIL */}
          <div className="history-timeline-title-mobile">
            <span className="timeline-eyebrow">
              {t('history.timeline.eyebrow')}
            </span>

            <h2>{t('history.timeline.title')}</h2>
          </div>

          <Timeline onOpenModal={handleOpenModal} />

        </section>

        {/* VIDEO */}
        <ScrollVideoSection videoSrc={SampleVideo} />

        {/* FOOTER */}
        <section className="history-footer">
          <div className="history-footer-brand">
            <span className="footer-gold-line" />
            <span>{t('history.footer.brand')}</span>
          </div>
          <div className="history-footer-locations">
            <span>{t('history.footer.loc1')}</span>
            <span>|</span>
            <span>{t('history.footer.loc2')}</span>
            <span>|</span>
            <span>{t('history.footer.loc3')}</span>
          </div>
        </section>
      </main>

      {selectedEvent &&
        createPortal(
          <div
            className="ge-modal-overlay"
            onClick={handleCloseModal}
            role="presentation"
          >
            <article
              className="ge-modal-card"
              role="dialog"
              aria-modal="true"
              aria-labelledby="history-modal-title"
              onClick={(event) => event.stopPropagation()}
            >

              {/* BOTÓN CERRAR */}
              <button
                type="button"
                className="ge-modal-close"
                onClick={handleCloseModal}
                aria-label={t('history.modal.closeAria')}
              >
                ×
              </button>

              {/* HEADER */}
              <header className="ge-modal-header">
                <span className="ge-modal-badge">
                  {selectedEvent.tag}
                </span>

                <h2
                  id="history-modal-title"
                  className="ge-modal-year"
                >
                  {selectedEvent.year}
                </h2>

                <p className="ge-modal-subtitle">
                  {selectedEvent.title}
                </p>
              </header>

              {/* CONTENIDO */}
              <div className="ge-modal-grid">

                {/* IMAGEN */}
                <div className="ge-modal-media">
                  <img
                    src={selectedEvent.image}
                    alt={`${selectedEvent.title} - ${selectedEvent.year}`}
                    className="ge-modal-img"
                  />
                </div>

                {/* INFORMACIÓN */}
                <div className="ge-modal-info">
                  <span className="ge-modal-section-title">
                    {t('history.modal.sectionMilestone')}
                  </span>

                  <p className="ge-modal-description">
                    {selectedEvent.fullDesc || selectedEvent.description}
                  </p>

                  {/* ESTADÍSTICAS */}
                  {selectedEvent.stats?.length > 0 && (
                    <div className="ge-modal-stats-wrapper">
                      <span className="ge-modal-section-title">
                        {t('history.modal.sectionImpact')}
                      </span>

                      <div className="ge-modal-stats-grid">
                        {selectedEvent.stats.map(
                          (stat, index) => (
                            <div
                              className="ge-modal-stat-card"
                              key={`${selectedEvent.id}-stat-${index}`}
                            >
                              <span className="ge-modal-stat-value">
                                {stat.value}
                              </span>

                              <span className="ge-modal-stat-label">
                                {stat.label}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* FOOTER */}
              <footer className="ge-modal-footer">
                <span className="ge-modal-footer-icon">
                  ◌
                </span>

                <span>
                  {t('history.modal.footerTagline')}
                </span>
              </footer>

            </article>
          </div>,

          document.body
        )}
    </div>
  );
}