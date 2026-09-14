import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/Home.css';
import GranEventosVideo from '../assets/graneventos(2).mov';

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
        <div className="middle-section-wrapper">
        <div className="container">
            <section className="middle-section">
            <div className="middle-content">
                <span className="tag-clean">
                GRAN EVENTOS <span className="accent-x">×</span> SETIE
                </span>

                <h2 className="section-title-light">
                DOS HISTORIAS. <br />
                UNA MISMA ENERGÍA<span className="green-point">.</span>
                </h2>

                <div className="green-line"></div>

                <p className="description-light">
                La unión de nuestra pasión por crear experiencias y nuestra ingeniería
                energética nos permite ir más lejos, ser más eficientes y generar un impacto
                positivo en cada proyecto.
                </p>
            </div>

            <div className="image-placeholder middle-media">
                <p style={{ marginTop: '12px' }}>[ Imagen Panorámica Evento / Multitud ]</p>
            </div>
            </section>
        </div>
        </div>

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
                    {/* Aquí posteriormente puedes colocar la imagen */}
                  </div>

                  <div className="strength-card-gradient"></div>

                  <div className="strength-card-content">

                    <div className="strength-card-top">
                      <div className="strength-number">
                        <span>01</span>
                        <span className="strength-number-line"></span>
                      </div>

                      <span className="strength-card-tag">
                        EVENTOS
                        <br />
                        QUE CONECTAN
                      </span>
                    </div>

                    <div className="strength-card-bottom">

                      <h3>EXPERIENCIAS</h3>

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
                    {/* Imagen de energía */}
                  </div>

                  <div className="strength-card-gradient"></div>

                  <div className="strength-card-content">

                    <div className="strength-card-top">
                      <div className="strength-number">
                        <span>02</span>
                        <span className="strength-number-line"></span>
                      </div>

                      <span className="strength-card-tag">
                        ENERGÍA
                        <br />
                        SIN LÍMITES
                      </span>
                    </div>

                    <div className="strength-card-bottom">

                      <h3>ENERGÍA</h3>

                      <p>
                        Soluciones energéticas confiables y
                        escalables para todo tipo de proyecto.
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


                {/* CARD 03 */}
                <article className="strength-card strengths-card-green">

                  <div className="strength-card-media">
                    {/* Imagen de tecnología */}
                  </div>

                  <div className="strength-card-gradient"></div>

                  <div className="strength-card-content">

                    <div className="strength-card-top">
                      <div className="strength-number">
                        <span>03</span>
                        <span className="strength-number-line"></span>
                      </div>

                      <span className="strength-card-tag">
                        TECNOLOGÍA
                        <br />
                        QUE IMPULSA
                      </span>
                    </div>

                    <div className="strength-card-bottom">

                      <h3>TECNOLOGÍA</h3>

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