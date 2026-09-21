import React, { useState } from 'react';
import '../styles/History.css';

import Navbar from '../components/Navbar';
import Timeline from '../components/line/Timeline';
import timelineData from '../data/timelineData';
import ScrollVideoSection from '../components/ScrollVideoSection';
import LetrasGE from '../assets/LetrasGE.png';
import SampleVideo from '../assets/History.mp4';

export default function History() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpenModal = (eventData) => {
    console.log("1. History recibió clic para abrir modal con el evento:", eventData);
    setSelectedEvent(eventData);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="history-page">
      <Navbar />

      <main>
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
        <section className="history-collage">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`collage-item collage-item-${index + 1}`}
              onClick={() => {
                console.log("Clic en collage:", item.year);
                handleOpenModal(item);
              }}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
            >
              <div 
                className="collage-image-bg" 
                style={{ backgroundImage: `url(${item.image})` }}
              />
            </div>
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

      {/* MODAL CON ALERTA Y ESTILOS EN LÍNEA DIRECTOS */}
      {selectedEvent && (
        <div 
          className="modal-overlay" 
          onClick={handleCloseModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999999,
            padding: '20px'
          }}
        >
          <div 
            className="modal-container" 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              color: '#000000',
              padding: '30px',
              borderRadius: '12px',
              maxWidth: '550px',
              width: '100%',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            <button 
              className="modal-close-btn" 
              onClick={handleCloseModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                border: 'none',
                background: 'none',
                fontSize: '28px',
                cursor: 'pointer',
                color: '#333'
              }}
            >
              &times;
            </button>

            <h2>{selectedEvent.year} — {selectedEvent.title}</h2>
            <p style={{ marginTop: '15px', lineHeight: '1.5', color: '#333' }}>
              {selectedEvent.fullDesc || selectedEvent.description}
            </p>

            {selectedEvent.highlights && (
              <ul style={{ marginTop: '15px', paddingLeft: '20px', color: '#333' }}>
                {selectedEvent.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}