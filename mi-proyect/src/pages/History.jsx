import React from 'react';
import '../styles/History.css';

import Navbar from '../components/Navbar';
import Timeline from '../components/line/Timeline';
import LetrasGE from '../assets/LetrasGE.png';
import History1 from '../assets/History1.jpg';
import History2 from '../assets/History2.jpg';
import History3 from '../assets/History3.jpg';
import History7 from '../assets/History7.jpg';
import History5 from '../assets/History5.jpg';
import History6 from '../assets/History6.jpg';

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
              UNA <span className="text-yellow">HISTORIA</span> 
              <br />
              QUE IMPULSA
              <br />
              <span className="text-green">GRANDES</span>
              <br />
              MOMENTOS.
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
            <img src={LetrasGE} alt="" width={370} height={290} />
          </div>

        </section>


        {/* =========================================
            IMAGEN / COLLAGE
        ========================================== */}

        <section className="history-collage">

          <div className="collage-placeholder collage-one" style={{ backgroundImage: `url(${History1})`, backgroundSize: 200}}>
            <span>IMAGEN</span>
          </div>

          <div className="collage-placeholder collage-two" style={{ backgroundImage: `url(${History2})`, backgroundSize: 290}}>
            <span>EVENTO</span>
          </div>

          <div className="collage-placeholder collage-three" style={{ backgroundImage: `url(${History3})`, backgroundSize: 200}}>
            <span>EQUIPO</span>
          </div>

          <div className="collage-placeholder collage-four" style={{ backgroundImage: `url(${History5})`, backgroundSize: 190}}>
            <span>ENERGÍA</span>
          </div>

          <div className="collage-placeholder collage-five" style={{ backgroundImage: `url(${History6})`, backgroundSize: 550}}>
            <span>EVENTO</span>
          </div>

          <div className="collage-placeholder collage-six" style={{ backgroundImage: `url(${History7})`, backgroundSize: 168}}>
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