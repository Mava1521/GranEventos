import React from 'react';
import { Leaf, Zap, Users, Globe, Clover, Container } from 'lucide-react';
import '../styles/Sustainability.css';

import SetieLogo from '../assets/LOGOSGTIE.png';
import HeroBg from '../assets/FondoSETIE.jpeg';

// Imágenes adicionales
import PurposeBg from '../assets/FOTO7.jpg';
import EventsBg from '../assets/Card1.jpg';
import IndustryBg from '../assets/card2.jpg';
import ScenarioBg from '../assets/card3.jpg';
import CommitmentBg from '../assets/Lush.png';

export default function Sustainability() {
  return (
    
    <main className="sustainability-page">

      {/* =========================
          HERO
      ========================== */}
      <section className="sust-hero">

        <img
          src={HeroBg}
          alt="Soluciones energéticas temporales SETIE"
          className="sust-hero-bg"
        />

        <div className="sust-hero-overlay"></div>

        <div className="sust-hero-content">

          <div className="hero-top-right">
          <span>MÁS QUE EVENTOS</span>
          <span>UN FUTURO MÁS LIMPIO</span>
          <span className="hero-green-line"></span> {/* <-- Nombre unificado */}
        </div>

          <div className="hero-main-brand">
            <img
              src={SetieLogo}
              alt="SETIE - Soluciones Energéticas Temporales"
              className="setie-logo-img"
            />
          </div>

          <div className="hero-bottom-left">
          <span className="hero-green-line"></span> {/* <-- Nombre unificado */}
          <h2>ENERGÍA</h2>
          <p>
            PARA UN MUNDO<br />
            DE EXPERIENCIAS
          </p>
        </div>

        </div>
      </section>


      {/* =========================
          ESTADÍSTICAS
      ========================== */}
      <section className="sust-stats-bar">
        <div className="sust-section-inner stats-grid">

          <div className="stat-item">
            <span className="stat-number">+300</span>
            <span className="stat-label">
              PROYECTOS SOSTENIBLES
            </span>
          </div>

          <div className="stat-item">
            <span className="stat-number">-1.200 t</span>
            <span className="stat-label">
              DE CO₂ EVITADAS
            </span>
          </div>

          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">
              COMPROMETIDOS<br />
              CON UN FUTURO MÁS LIMPIO
            </span>
          </div>

          <div className="stat-item">
            <span className="stat-number">+4M</span>
            <span className="stat-label">
              PERSONAS CON ENERGÍA<br />
              MÁS RESPONSABLE
            </span>
          </div>

        </div>
      </section>


      {/* =========================
          PROPÓSITO
      ========================== */}
      <section className="sust-purpose-wrapper">

        <div className="sust-section-inner sust-purpose">

          <div className="purpose-text">

            <span className="section-subtitle">
              / UN PROPÓSITO REAL
            </span>

            <h2 className="section-title">
              ENERGÍA QUE<br />
              <span>TRANSFORMA</span><br />
              EXPERIENCIAS.
            </h2>

            <p className="purpose-description">
              En  <span>SETIE</span>  creemos que la energía puede ser más limpia,
              eficiente y responsable en cualquier escenario. Llevamos
              soluciones energéticas temporales a eventos, industrias,
              proyectos y comunidades, reduciendo emisiones y generando
              un impacto positivo en las personas y en el planeta.
            </p>

          </div>

          <div
            className="purpose-card"
           style={{ backgroundImage: `url(${PurposeBg})` , backgroundSize: 670 }}
          >
            <div className="image-overlay"></div>

            <div className="card-overlay-content">




              
              <h3>
                GRANDES<br />
                EVENTOS.<br />
                <span>UN PLANETA<br />REAL.</span>
              </h3>

              <span className="yellow-line"></span>
            </div>
          </div>

        </div>
      </section>


      {/* =========================
          PILARES
      ========================== */}
      <section className="sust-features-wrapper">

        <div className="sust-section-inner sust-features">

          <div className="feature-item">
            <Leaf className="feature-icon" size={34} strokeWidth={1.5} />

            <div>
              <h4>MENOS EMISIONES</h4>
              <p>
                Reducimos la huella de carbono
                de cada proyecto.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <Zap className="feature-icon1" size={34} strokeWidth={1.5} />

            <div>
              <h4>MÁS EFICIENCIA</h4>
              <p>
                Soluciones inteligentes
                para un mejor rendimiento.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <Users className="feature-icon1" size={34} strokeWidth={1.5} />

            <div>
              <h4>EVENTOS RESPONSABLES</h4>
              <p>
                Impulsamos una industria
                del entretenimiento consciente.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <Globe className="feature-icon" size={34} strokeWidth={1.5} />

            <div>
              <h4>UN PLANETA REAL</h4>
              <p>
                Hoy hacemos posible un futuro
                más limpio para las próximas generaciones.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* =========================
          CASOS
      ========================== */}
      <section className="sust-usecases-wrapper">

        <div className="sust-usecases">

          <article
            className="usecase-card"
            style={{ backgroundImage: `url(${EventsBg})` , backgroundSize: 640 }}
          >
            <div className="usecase-overlay"></div>

            <div className="usecase-content">
              <span className="tag-category">
                / PARA EVENTOS
              </span>
              <span className="hero-green-line"></span>

              <span className="yellow-line"></span>

              <p className="usecase-title">
                La misma emoción,<br />
                con un menor impacto.
              </p>
            </div>
          </article>


          <article
            className="usecase-card"
            style={{ backgroundImage: `url(${IndustryBg})`, backgroundSize: 600}}
          >
            <div className="usecase-overlay"></div>

            <div className="usecase-content">
              <span className="tag-category">
                / PARA LA INDUSTRIA
              </span>
              <span className="hero-green-line"></span>

              <span className="yellow-line"></span>

              <p className="usecase-title">
                Productividad<br />
                y sostenibilidad<br />
                en movimiento.
              </p>
            </div>
          </article>


          <article
            className="usecase-card"
            style={{ backgroundImage: `url(${ScenarioBg})` , backgroundSize: 649 }}
          >
            <div className="usecase-overlay"></div>

            <div className="usecase-content">
              <span className="tag-category">
                / PARA CUALQUIER ESCENARIO
              </span>
              <span className="hero-green-line"></span>

              <span className="yellow-line"></span>

              <p className="usecase-title">
                Soluciones temporales<br />
                para un futuro permanente.
              </p>
            </div>
          </article>

        </div>
      </section>


      {/* =========================
          COMPROMISO
      ========================== */}
      <section
        className="sust-commitment"
        style={{ backgroundImage: `url(${CommitmentBg})` }}
      >

        <div className="commitment-overlay"></div>

        <div className="sust-section-inner commitment-content">

          <div className="commitment-left">

            <span className="section-subtitle">
              / NUESTRO COMPROMISO
            </span>
            <span className="hero-green-line"></span>

            <h2>
              UN FUTURO MÁS VERDE<br />
              <span>TAMBIÉN ES POSIBLE.</span>
            </h2>

          </div>


          <div className="commitment-right">

            <p>
              Trabajamos cada día para que la energía que mueve
              el entretenimiento, la industria y las comunidades
              sea más limpia, eficiente y consciente. Porque creemos
              que los grandes proyectos también pueden dejar
              una huella positiva.
            </p>

            <div className="commitment-keywords">
              <span>ENERGÍA</span>
              <span>PERSONAS</span>
              <span>EXPERIENCIAS</span>
              <span>PLANETA</span>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}