import React from "react";
import TecnologyHero from '../assets/TecnologyHero.jpg';
import PlantasY from '../assets/PlantasY.jpg';
import PanelSol from '../assets/PanleSol.jpg';
import Conectividad from '../assets/Conectividad.jpg';
import Distribucion from '../assets/Distribucion.jpg';
import Concert2 from '../assets/Concert2.jpg';

import {
  ArrowRight,
  BatteryCharging,
  Cable,
  CircleGauge,
  Clock3,
  Leaf,
  Lightbulb,
  Recycle,
  Settings,
  ShieldCheck,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";

import "../styles/Tecnology.css";

export default function Tecnology() {
  return (
    <main className="technology-page">

      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="technology-hero">

        <div className="technology-container technology-hero-grid">

          {/* CONTENIDO IZQUIERDO */}
          <div className="technology-hero-content">

            <div className="technology-eyebrow">
              <span className="technology-eyebrow-mark"></span>
              TECNOLOGÍA
            </div>

            <h1 className="technology-hero-title">
              TECNOLOGÍA QUE
              <br />
              <span>IMPULSA GRANDES</span>
              <br />
              <span>EVENTOS.</span>
            </h1>

            <p className="technology-hero-description">
              En Gran Eventos combinamos equipos de última generación
              con soluciones inteligentes de energía para garantizar
              un suministro confiable, seguro y eficiente en cada evento.
            </p>

            <span className="technology-yellow-line"></span>

            {/* BENEFICIOS */}
            <div className="technology-benefits">

              <div className="technology-benefit">
                <div className="technology-benefit-icon">
                  <ShieldCheck size={25} strokeWidth={1.6} />
                </div>

                <span>
                  Energía confiable
                  <br />
                  en todo momento
                </span>
              </div>

              <div className="technology-benefit">
                <div className="technology-benefit-icon">
                  <Settings size={25} strokeWidth={1.6} />
                </div>

                <span>
                  Equipos de
                  <br />
                  última generación
                </span>
              </div>

              <div className="technology-benefit">
                <div className="technology-benefit-icon">
                  <Settings size={25} strokeWidth={1.6} />
                </div>

                <span>
                  Soporte técnico
                  <br />
                  especializado
                </span>
              </div>

            </div>
          </div>

          {/* IMAGEN HERO */}
          <div className="technology-hero-media">

            <div className="technology-image technology-hero-image"
              role="img"
              aria-label="Planta eléctrica Gran Eventos durante un evento">

                <img src={TecnologyHero} alt="" width={900} height={520}/>

            </div>
            

            <div className="technology-hero-shape"></div>

            <div className="technology-hero-message">
              <span className="technology-message-line"></span>

              <p>
                TECNOLOGÍA
                <br />
                + EXPERIENCIA
                <br />
                = EVENTOS SIN LÍMITES.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PLANTAS Y GENERADORES
          ===================================================== */}
      <section className="technology-section technology-generation">

        <div className="technology-container technology-generation-grid">

          {/* TEXTO IZQUIERDO */}
          <div className="technology-info-block">

            <div className="technology-section-eyebrow">
              <span></span>
              NUESTRAS TECNOLOGÍAS
            </div>

            <h2 className="technology-section-title">
              PLANTAS Y GENERADORES
              <br />
              <strong>DE ÚLTIMA GENERACIÓN.</strong>
            </h2>

            <p>
              Contamos con plantas eléctricas y generadores diésel
              de alta capacidad, diseñados para ofrecer un rendimiento
              óptimo, bajo consumo y máxima seguridad, incluso en
              condiciones de alta demanda.
            </p>

            <div className="technology-feature-list">

              <TechnologyFeature
                icon={<Zap size={22} />}
                text={
                  <>
                    Alta potencia
                    <br />
                    y rendimiento
                  </>
                }
              />

              <TechnologyFeature
                icon={<ShieldCheck size={22} />}
                text={
                  <>
                    Sistemas de
                    <br />
                    monitoreo en tiempo real
                  </>
                }
              />

              <TechnologyFeature
                icon={<Settings size={22} />}
                text={
                  <>
                    Bajo consumo
                    <br />
                    de combustible
                  </>
                }
              />

            </div>

            <a href="#contacto" className="technology-button">
              CONOCE MÁS
              <ArrowRight size={17} />
            </a>

          </div>


          {/* IMAGEN CENTRAL */}
          <div className="technology-image-wrap">
            <div className="technology-image technology-generator-image"
              aria-label="Generador eléctrico Gran Eventos">
                <img src={PlantasY} alt=""  width={560} height={275}/>

            </div>
          </div>


          {/* ENERGÍA LIMPIA */}
          <div className="technology-info-block technology-clean-energy">

            <div className="technology-section-eyebrow">
              <span></span>
              ENERGÍA LIMPIA
            </div>

            <h2 className="technology-section-title">
              ENERGÍA LIMPIA
              <br />
              <strong>Y EFICIENTE</strong>
            </h2>

            <p>
              Nuestros equipos están diseñados para ser más eficientes
              y reducir el impacto ambiental, sin comprometer la potencia
              ni la seguridad.
            </p>

            <div className="technology-feature-list">

              <TechnologyFeature
                icon={<Leaf size={22} />}
                text={
                  <>
                    Menor
                    <br />
                    emisión de gases
                  </>
                }
              />

              <TechnologyFeature
                icon={<CircleGauge size={22} />}
                text={
                  <>
                    Uso responsable
                    <br />
                    del combustible
                  </>
                }
              />

              <TechnologyFeature
                icon={<Recycle size={22} />}
                text={
                  <>
                    Gestión adecuada
                    <br />
                    de residuos
                  </>
                }
              />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ENERGÍA SOLAR
          ===================================================== */}
      <section className="technology-section technology-solar">

        <div className="technology-container technology-solar-grid">

          {/* IMAGEN */}
          <div className="technology-solar-media">
            <div className="technology-image technology-solar-image"
              aria-label="Paneles solares junto a infraestructura de eventos">
                <img src={PanelSol} alt="" width={386} height={240} />

            </div>
          </div>


          {/* TEXTO */}
          <div className="technology-info-block">

            <div className="technology-section-eyebrow">
              <span></span>
              ENERGÍA SOLAR
            </div>

            <h2 className="technology-section-title">
              EL PODER DEL SOL
              <br />
              TAMBIÉN HACE PARTE
              <br />
              <strong>DEL ESPECTÁCULO.</strong>
            </h2>

            <p>
              Utilizamos paneles solares para complementar el suministro
              eléctrico en eventos, reduciendo el consumo de combustible
              y el impacto ambiental.
            </p>

            <div className="technology-feature-list">

              <TechnologyFeature
                icon={<Sun size={22} />}
                text="Energía renovable"
              />

              <TechnologyFeature
                icon={<Leaf size={22} />}
                text={
                  <>
                    Funcionamiento
                    <br />
                    silencioso
                  </>
                }
              />

              <TechnologyFeature
                icon={<Zap size={22} />}
                text={
                  <>
                    Ideal para eventos
                    <br />
                    en exteriores
                  </>
                }
              />

            </div>

          </div>


          {/* DIAGRAMA */}
          <div className="technology-system-card">

            <div className="technology-section-eyebrow">
              <span></span>
              ¿CÓMO TRABAJAN JUNTAS?
            </div>

            <p className="technology-system-description">
              La energía solar y los generadores diésel trabajan en
              conjunto para garantizar un suministro continuo,
              estable y eficiente.
            </p>

            <div className="technology-system-flow">

              <div className="technology-system-item">
                <div className="technology-system-icon">
                  <Sun size={34} strokeWidth={1.4} />
                </div>

                <strong>Paneles solares</strong>

                <span>Generación y carga</span>
              </div>

              <div className="technology-system-arrow">
                <ArrowRight size={27} />
              </div>

              <div className="technology-system-item">
                <div className="technology-system-icon">
                  <Settings size={34} strokeWidth={1.4} />
                </div>

                <strong>Sistema de gestión</strong>

                <span>Distribuye la energía
                  de forma automática</span>
              </div>

              <div className="technology-system-arrow">
                <ArrowRight size={27} />
              </div>

              <div className="technology-system-item">
                <div className="technology-system-icon">
                  <BatteryCharging size={34} strokeWidth={1.4} />
                </div>

                <strong>Plantas diésel</strong>

                <span>Respaldo y continuidad</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INFRAESTRUCTURA INTELIGENTE
          ===================================================== */}
      <section className="technology-section technology-infrastructure">

        <div className="technology-container technology-infrastructure-grid">

          {/* IMAGEN IZQUIERDA */}
          <div className="technology-infrastructure-image">
            <div className="technology-image technology-event-cables-image"
              aria-label="Cableado y distribución eléctrica en un evento">
                <img src={Conectividad} alt="" width={487} height={230}/>
            </div>
          </div>


          {/* TEXTO CENTRAL */}
          <div className="technology-info-block">

            <div className="technology-section-eyebrow">
              <span></span>
              INFRAESTRUCTURA INTELIGENTE
            </div>

            <h2 className="technology-section-title">
              CONECTIVIDAD Y DISTRIBUCIÓN
              <br />
              DE <strong>ENERGÍA</strong>
            </h2>

            <p>
              Instalamos y gestionamos todo el sistema de cableado
              eléctrico, asegurando una distribución segura y eficiente
              de la energía en cada punto del evento.
            </p>

            <div className="technology-feature-list">

              <TechnologyFeature
                icon={<ShieldCheck size={22} />}
                text={
                  <>
                    Seguridad
                    <br />
                    en la operación
                  </>
                }
              />

              <TechnologyFeature
                icon={<Cable size={22} />}
                text={
                  <>
                    Distribución
                    <br />
                    estratégica
                  </>
                }
              />

              <TechnologyFeature
                icon={<Clock3 size={22} />}
                text={
                  <>
                    Montaje rápido
                    <br />
                    y profesional
                  </>
                }
              />

            </div>

          </div>


          {/* IMAGEN DERECHA */}
          <div className="technology-infrastructure-image">
            <div className="technology-image technology-connections-image"
              aria-label="Conexiones eléctricas de un generador">
                <img src={Distribucion} alt="" width={390} height={230}/>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          CTA FINAL
          ===================================================== */}
      <section className="technology-cta">

        <div className="technology-cta-overlay">
            <img src={Concert2} alt=""  width={1900} height={400}/>
        </div>

        <div className="technology-container technology-cta-grid">

          <div className="technology-cta-title">

            <div className="technology-section-eyebrow">
              <span></span>
              TECNOLOGÍA QUE TE DA TRANQUILIDAD
            </div>

            <h2>
              TU EVENTO,
              <br />
              <strong>NUESTRA ENERGÍA.</strong>
            </h2>

          </div>

          <div className="technology-cta-description">

            <p>
              La tecnología es el motor que nos permite conectar
              grandes ideas con la energía que las hace realidad.
            </p>

            <a href="#contacto" className="technology-button">
              CONTÁCTANOS
              <ArrowRight size={17} />
            </a>

          </div>

          <div className="technology-cta-services">

            <div>
              <BatteryCharging size={30} />
              <span>PLANTAS DIÉSEL</span>
            </div>

            <div>
              <Sun size={30} />
              <span>ENERGÍA SOLAR</span>
            </div>

            <div>
              <Cable size={30} />
              <span>CABLEADO<br />Y DISTRIBUCIÓN</span>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}


/* ============================================================
   COMPONENTE REUTILIZABLE
   ============================================================ */

function TechnologyFeature({ icon, text }) {
  return (
    <div className="technology-feature">

      <div className="technology-feature-icon">
        {icon}
      </div>

      <span>{text}</span>

    </div>
  );
}