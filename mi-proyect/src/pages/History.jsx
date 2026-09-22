import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import '../styles/History.css';

import Navbar from '../components/Navbar';
import Timeline from '../components/line/Timeline';
import timelineData from '../data/timelineData';
import ScrollVideoSection from '../components/ScrollVideoSection';
import LetrasGE from '../assets/LetrasGE.png';
import SampleVideo from '../assets/History.mp4';

export default function History() {
  const [selectedEvent, setSelectedEvent] = useState(null);

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
            <span className="history-eyebrow">NUESTRA HISTORIA</span>
            <h1>
              UNA <span className="text-yellow">HISTORIA</span> <br />
              QUE IMPULSA <br />
              <span className="text-green">GRANDES</span> <br />
              MOMENTOS.
            </h1>
            <div className="history-gold-line" />
            <p>
              Más de tres décadas generando <br />
              la energía que hace posible <br />
              experiencias inolvidables.
            </p>
          </div>

          <div className="history-top-message">
            <div className="history-gold-line" />
            <p>LA ENERGIA</p>
            <p>TAMBIEN</p>
            <p>DEJA</p>
            <p>HUELLA</p>
            <p>POSITIVA</p>
          </div>

          <div className="history-center-logo">
            <img src={LetrasGE} alt="" width={370} height={290} />
          </div>
        </section>

        {/* COLLAGE */}
          <section
            className="history-collage"
            aria-label="Momentos de nuestra historia"
          >
            {timelineData.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`collage-item collage-item-${index + 1}`}
                onClick={() => handleOpenModal(item)}
                aria-label={`Ver historia de ${item.year}: ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={`${item.year} - ${item.title}`}
                  className="collage-image"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />

                <span className="collage-overlay">
                  <span className="collage-year">
                    {item.year}
                  </span>

                  <span className="collage-title">
                    {item.title}
                  </span>
                </span>
              </button>
            ))}
          </section>

        {/* TIMELINE */}
        <Timeline onOpenModal={handleOpenModal} />

        {/* VIDEO */}
        <ScrollVideoSection videoSrc={SampleVideo} />

        {/* FOOTER */}
        <section className="history-footer">
          <div className="history-footer-brand">
            <span className="footer-gold-line" />
            <span>GRAN EVENTOS</span>
          </div>
          <div className="history-footer-locations">
            <span>COLOMBIA</span>
            <span>|</span>
            <span>LATINOAMÉRICA</span>
            <span>|</span>
            <span>EL MUNDO</span>
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

              {/* ==========================================
                  BOTÓN CERRAR
              ========================================== */}

              <button
                type="button"
                className="ge-modal-close"
                onClick={handleCloseModal}
                aria-label="Cerrar información del evento"
              >
                ×
              </button>


              {/* ==========================================
                  HEADER
              ========================================== */}

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


              {/* ==========================================
                  CONTENIDO
              ========================================== */}

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
                    HITO HISTÓRICO
                  </span>

                  <p className="ge-modal-description">
                    {selectedEvent.fullDesc ||
                      selectedEvent.description}
                  </p>


                  {/* ESTADÍSTICAS */}

                  {selectedEvent.stats?.length > 0 && (
                    <div className="ge-modal-stats-wrapper">

                      <span className="ge-modal-section-title">
                        IMPACTO Y CIFRAS
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


              {/* ==========================================
                  FOOTER
              ========================================== */}

              <footer className="ge-modal-footer">

                <span className="ge-modal-footer-icon">
                  ◌
                </span>

                <span>
                  Gran Eventos · Compromiso con la Calidad e Innovación
                </span>

              </footer>

            </article>
          </div>,

          document.body
        )}


    </div>
  );
}