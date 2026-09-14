import React from 'react';
import '../styles/History.css';

import Navbar from '../components/Navbar';
import Timeline from '../components/line/Timeline';

export default function History() {
  return (
    <div className="history-page">

      <Navbar />

      <main>

        {/* =========================================
            HERO
        ========================================== */}

        <section className="history-hero">

          <div className="history-hero-content">

            <span className="history-eyebrow">
              NUESTRA HISTORIA
            </span>

            <h1>
              UNA HISTORIA
              <br />
              QUE IMPULSA
              <br />
              GRANDES MOMENTOS.
            </h1>

            <div className="history-gold-line" />

            <p>
              Más de tres décadas generando
              <br />
              la energía que hace posible
              <br />
              experiencias inolvidables.
            </p>

          </div>


          {/* Texto superior derecho */}

          <div className="history-top-message">
            <div className="history-gold-line" />
            <p>LA ENERGIA</p>
            <p>TAMBIEN</p>
            <p>DEJA</p>
            <p>HUELLA</p>
            <p>POSITIVA</p>
            
          </div>


          {/* Logo central decorativo */}

          <div className="history-center-logo">
            GE
          </div>

        </section>


        {/* =========================================
            IMAGEN / COLLAGE
        ========================================== */}

        <section className="history-collage">

          <div className="collage-placeholder collage-one">
            <span>IMAGEN</span>
          </div>

          <div className="collage-placeholder collage-two">
            <span>EVENTO</span>
          </div>

          <div className="collage-placeholder collage-three">
            <span>EQUIPO</span>
          </div>

          <div className="collage-placeholder collage-four">
            <span>ENERGÍA</span>
          </div>

          <div className="collage-placeholder collage-five">
            <span>EVENTO</span>
          </div>

          <div className="collage-placeholder collage-six">
            <span>FUTURO</span>
          </div>

        </section>


        {/* =========================================
            TIMELINE
        ========================================== */}

        <Timeline />


        {/* =========================================
            FOOTER CONCEPTUAL
        ========================================== */}

        <section className="history-footer">

          <div className="history-footer-brand">

            <span className="footer-gold-line" />

            <span>
              GRAN EVENTOS
            </span>

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

    </div>
  );
}