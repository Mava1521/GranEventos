import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/Home.css';
import GranEventosVideo from '../assets/graneventos(2).mov';
import Sesion2Home from '../assets/Sesion2Home2.jpg';
import Energia from '../assets/Sesion2Energia.jpg';
import Tecnologia from '../assets/Nature.png';
import Experiencias from '../assets/Experience.png'

export default function Home() {
  return (
    <div className="wrapper">
      <section className="hero-section">
        <video className="hero-video-bg" src={GranEventosVideo} autoPlay loop muted playsInline />
        <div className="hero-overlay"></div>

        <div className="container hero-container">
          <div className="hero-content-left">
            <h1 className="hero-title-oswald">
              EL <span className="text-gold">PODER</span> <br />
              DETRÁS DE <br />
              CADA EXPERIENCIA<span className="text-gold">.</span>
            </h1>
            <div className="gold-line"></div>
            <p className="hero-subtext-left">
              Integramos experiencia, producción, tecnología e ingeniería energética para crear eventos extraordinarios y sostenibles.
            </p>
            <a href="#proyectos" className="btn-cta-gold">
              CONOCE MÁS <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* MIDDLE SECTION */}
        {/* =========================================================
            SEGUNDA SECCIÓN — GRAN EVENTOS + SETIE
            ========================================================= */}
        <section
          className="ge-home-story"
          aria-labelledby="ge-home-story-title"
        >
          {/* IMAGEN DE FONDO */}
          <img
            className="ge-home-story-image"
            src={Sesion2Home}
            alt=""
            aria-hidden="true"
          />

          {/* CAPA OSCURA PARA MEJORAR CONTRASTE */}
          <div
            className="ge-home-story-overlay"
            aria-hidden="true"
          />

          {/* CONTENIDO PRINCIPAL */}
          <div className="ge-home-story-content">

            {/* IDENTIFICADOR */}
            <p className="ge-home-story-kicker">
              GRAN EVENTOS
              <span aria-hidden="true">×</span>
              SETIE
            </p>

            {/* TITULAR */}
            <h2
              id="ge-home-story-title"
              className="ge-home-story-title"
            >
              <span className="ge-home-story-title-light">
                DOS HISTORIAS,
              </span>

              <span className="ge-home-story-title-yellow">
                UNA{' '}
                <span className="ge-home-story-title-split">
                  MISMA
                </span>
              </span>

              <span className="ge-home-story-title-green">
                ENERGÍA
              </span>

              <span className="ge-home-story-title-light ge-home-story-title-last">
                QUE LO HACE TODO POSIBLE.
              </span>
            </h2>

            {/* LÍNEA DECORATIVA */}
            <span
              className="ge-home-story-line"
              aria-hidden="true"
            />

            {/* DESCRIPCIÓN */}
            <p className="ge-home-story-description">
              La unión de nuestra pasión por crear
              experiencias y nuestra ingeniería
              energética nos permite ir más lejos,
              ser más eficientes y generar un
              impacto positivo en cada proyecto.
            </p>

          </div>

          {/* MENSAJE LATERAL */}
          <aside
            className="ge-home-story-side"
            aria-label="Nuestro propósito"
          >
            <div className="ge-home-story-side-list">
              <span>EVENTOS</span>
              <span aria-hidden="true">+</span>
              <span>ENERGÍA</span>
              <span aria-hidden="true">+</span>
              <span>PERSONAS</span>
              <span aria-hidden="true">+</span>
              <span>PLANETA</span>
            </div>

            <span
              className="ge-home-story-side-line"
              aria-hidden="true"
            />

            <p className="ge-home-story-side-message">
              UN FUTURO
              <br />
              MÁS GRANDE
              <br />
              ES POSIBLE.
            </p>
          </aside>
        </section>

        {/* ==========================================
            NUESTRAS FORTALEZAS
            ========================================== */}
        <div className="strengths-section-wrapper">
          <section className="strengths-section">
            <div className="container">

              {/* HEADER DE LA SECCIÓN */}
              <div className="strengths-header">

                <div className="strengths-header-main">
                  <div className="strengths-label">
                    <span className="strengths-label-line"></span>
                    <span>NUESTRAS FORTALEZAS</span>
                  </div>

                  <h2 className="strengths-title">
                    SOLUCIONES
                    <br />
                    QUE HACEN LA <span>DIFERENCIA.</span>
                  </h2>
                </div>

                <div className="strengths-header-description">
                  <p>
                    Integramos experiencia, energía y tecnología para
                    diseñar eventos extraordinarios, más eficientes,
                    sostenibles y con un impacto real.
                  </p>
                </div>

              </div>

              {/* CARDS */}
              <div className="strengths-grid">

                {/* CARD 01 */}
                <article className="strength-card strengths-card-gold">

                  <div className="strength-card-media">
                    <img src={Experiencias} alt="" width={500} height={300}/>
                  </div>

                  <div className="strength-card-gradient"></div>

                  <div className="strength-card-content">

                    <div className="strength-card-top">
                      <div className="strength-number">
                        <span>01</span>
                        <span className="strength-number-line"></span>
                      </div>

                      <span className="strength-card-tag">
                        <span className="text-blue">EVENTOS</span>
                        <br />
                        QUE CONECTAN
                      </span>
                    </div>

                    <div className="strength-card-bottom">

                      <h3><span className="text-blue">EXPERIENCIAS</span></h3>

                      <p>
                        Producción integral de eventos que inspiran
                        y generan un impacto duradero.
                      </p>

                      <a href="#proyectos" className="strength-card-link">
                        <span>CONOCE MÁS</span>

                        <span className="strength-arrow">
                          <ArrowRight size={20} strokeWidth={1.8} />
                        </span>
                      </a>

                    </div>

                  </div>
                </article>


                {/* CARD 02 */}
                <article className="strength-card strengths-card-green">

                  <div className="strength-card-media">
                    <img src={Energia} alt="" width={500} height={300}/>
                  </div>

                  <div className="strength-card-gradient"></div>

                  <div className="strength-card-content">

                    <div className="strength-card-top">
                      <div className="strength-number">
                        <span>02</span>
                        <span className="strength-number-line2"></span>
                      </div>

                      <span className="strength-card-tag">
                        <span className="text-gold">ENERGÍA</span>
                        <br />
                        SIN LÍMITES
                      </span>
                    </div>

                    <div className="strength-card-bottom">

                      <h3><span className="text-gold">ENERGÍA</span></h3>

                      <p>
                        Soluciones energéticas confiables y
                        escalables para todo tipo de proyecto.
                      </p>

                      <a href="#proyectos" className="strength-card-link2">
                        <span>CONOCE MÁS</span>

                        <span className="strength-arrow">
                          <ArrowRight size={20} strokeWidth={1.8} />
                        </span>
                      </a>

                    </div>

                  </div>
                </article>


                {/* CARD 03 */}
                <article className="strength-card strengths-card-green">

                  <div className="strength-card-media">
                    <img src={Tecnologia} alt="" width={500} height={300}/>
                  </div>

                  <div className="strength-card-gradient"></div>

                  <div className="strength-card-content">

                    <div className="strength-card-top">
                      <div className="strength-number">
                        <span>03</span>
                        <span className="strength-number-line"></span>
                      </div>

                      <span className="strength-card-tag">
                        <span className="green-point">TECNOLOGÍA</span>
                        <br />
                        QUE IMPULSA
                      </span>
                    </div>

                    <div className="strength-card-bottom">

                      <h3><span className="green-point">TECNOLOGÍA</span></h3>

                      <p>
                        Innovación en soluciones temporales
                        para un futuro más sostenible.
                      </p>

                      <a href="#proyectos" className="strength-card-link">
                        <span>CONOCE MÁS</span>

                        <span className="strength-arrow">
                          <ArrowRight size={20} strokeWidth={1.8} />
                        </span>
                      </a>

                    </div>

                  </div>
                </article>

              </div>
            </div>
          </section>
        </div>
    </div>
  );
}