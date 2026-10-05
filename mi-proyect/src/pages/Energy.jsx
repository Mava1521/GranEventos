import React from 'react';
import '../styles/Energy.css';
import EnergyFooter from '../assets/EnergyFooter.jpg';
import EnergyHero from '../assets/EnergyHero.jpg';
import Generador from '../assets/Generador.jpg';
import Generador2 from '../assets/Generador2.jpg';
import Panel from '../assets/Panel.jpg';
import Paneles2 from '../assets/Paneles2.jpg';
import Planta from '../assets/Planta.jpg';

/* =========================================================
   ICONOS
========================================================= */

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="energy-check-icon"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l2.5 2.5L16 9" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="9" />
    <path d="M32 5v9M32 50v9M5 32h9M50 32h9" />
    <path d="M13 13l6 6M45 45l6 6M51 13l-6 6M19 45l-6 6" />
  </svg>
);

const GeneratorIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <rect x="9" y="17" width="46" height="30" rx="3" />
    <path d="M17 24h30v16H17z" />
    <circle cx="24" cy="32" r="4" />
    <path d="M39 27v10M44 27v10" />
  </svg>
);

const ManagementIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="9" />
    <path d="M32 7v8M32 49v8M7 32h8M49 32h8" />
    <path d="M14 14l6 6M44 44l6 6M50 14l-6 6M20 44l-6 6" />
    <path d="M26 32h12" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M51 10C28 10 14 21 14 38c0 9 6 15 15 15 17 0 28-14 22-43Z" />
    <path d="M13 54c8-14 18-24 32-32" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 7l21 8v15c0 14-9 23-21 28C20 53 11 44 11 30V15l21-8Z" />
    <path d="M23 32l6 6 12-13" />
  </svg>
);

const EfficiencyIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="11" />
    <path d="M32 7v7M32 50v7M7 32h7M50 32h7" />
    <path d="M14 14l5 5M45 45l5 5M50 14l-5 5M19 45l-5 5" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 57s18-18 18-31a18 18 0 1 0-36 0c0 13 18 31 18 31Z" />
    <circle cx="32" cy="26" r="6" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 40 20"
    aria-hidden="true"
    className="energy-arrow"
  >
    <path d="M1 10h34" />
    <path d="M28 3l7 7-7 7" />
  </svg>
);


/* =========================================================
   COMPONENTES REUTILIZABLES
========================================================= */

function SectionKicker({ children, light = false }) {
  return (
    <div className={`energy-kicker ${light ? 'energy-kicker--light' : ''}`}>
      <span />
      {children}
    </div>
  );
}


function MediaPlaceholder({
  label = 'IMAGEN',
  className = '',
}) {
  return (
    <div className={`energy-media-placeholder ${className}`}>
      <span>{label}</span>
    </div>
  );
}


function TechnologyCard({
  kicker,
  title,
  highlight,
  description,
  items,
  icon,
  imageLabel,
}) {
  return (
    <article className="technology-card">

      <div className="technology-copy">

        <SectionKicker>
          {kicker}
        </SectionKicker>

        <h3>
          {title}
          <strong>{highlight}</strong>
        </h3>

        <p>
          {description}
        </p>

        <ul className="technology-list">
          {items.map((item) => (
            <li key={item}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>

      </div>

      <div className="technology-image">

        <div className="technology-icon">
          {icon}
        </div>

        <MediaPlaceholder label={imageLabel} />

      </div>

    </article>
  );
}


function Benefit({
  icon,
  title,
  description,
}) {
  return (
    <article className="benefit">

      <div className="benefit-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </article>
  );
}


/* =========================================================
   PAGE
========================================================= */

export default function Energy() {
  return (
    <main className="energy-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="energy-hero">

        <div className="energy-hero-content">

          <SectionKicker>
            ENERGÍA
          </SectionKicker>

          <h1>
            SOLUCIONES
            <br />
            ENERGÉTICAS PARA
            <br />
            <strong>GRANDES EVENTOS.</strong>
          </h1>

          <p>
            Combinamos energía solar y plantas generadoras
            diésel para ofrecer soluciones confiables,
            eficientes y sostenibles en cualquier lugar
            y momento.
          </p>

          <div className="energy-yellow-line" />

        </div>


        <div className="energy-hero-media">

          <img src={EnergyHero} alt="" />

          <div className="energy-hero-caption">
            ENERGÍA QUE IMPULSA
            <br />
            TUS EVENTOS.
          </div>

        </div>

      </section>


      {/* =====================================================
          TECNOLOGÍAS
      ===================================================== */}

      <section className="energy-technologies">

        <TechnologyCard
          kicker="TECNOLOGÍA SOLAR"
          title="ENERGÍA LIMPIA,"
          highlight="EFICIENTE Y SILENCIOSA."
          description="Utilizamos paneles solares de alta eficiencia para aprovechar la energía del sol y convertirla en electricidad, reduciendo el consumo de combustible y el impacto ambiental."
          imageLabel= {<img src={Panel} alt="" width={187} height={259}/>}
          icon={<SunIcon />}
          items={[
            'Energía renovable y sostenible.',
            'Bajo impacto ambiental.',
            'Funcionamiento silencioso.',
          ]}
        />

        <TechnologyCard
          kicker="PLANTAS GENERADORAS DIÉSEL"
          title="POTENCIA Y CONFIABILIDAD"
          highlight="CUANDO LA NECESITAS."
          description="Contamos con plantas generadoras diésel de última tecnología, que garantizan un suministro estable y continuo de energía, incluso en condiciones de alta demanda o en lugares remotos."
          imageLabel={<img src={Planta} alt="" width={187} height={259}/>}
          icon={<GeneratorIcon />}
          items={[
            'Alta capacidad de carga.',
            'Operación continua y segura.',
            'Equipos modernos y eficientes.',
          ]}
        />

      </section>


      {/* =====================================================
          SISTEMA HÍBRIDO
      ===================================================== */}

      <section className="energy-hybrid">

        <div className="energy-hybrid-copy">

          <SectionKicker>
            CÓMO TRABAJAN JUNTAS
          </SectionKicker>

          <h2>
            UNA COMBINACIÓN
            <strong>INTELIGENTE.</strong>
          </h2>

          <p>
            La energía solar genera electricidad durante
            el día, alimentando el evento y cargando el
            sistema. Cuando la demanda aumenta o la
            radiación solar es baja, las plantas diésel
            entran en funcionamiento de forma automática,
            garantizando un suministro continuo y estable.
          </p>

        </div>


        <div className="energy-system">

          <div className="system-flow">

            <div className="system-node">

              <img src={Paneles2} alt="" width={120} height={80}/>  

              <div className="system-arrow system-arrow--right">
                →
              </div>

              <div className="system-label">
                <SunIcon />
                <strong>PANELES SOLARES</strong>
                <span>Generación y carga</span>
              </div>

            </div>


            <div className="system-node system-node--center">

              <img src={Generador} alt="" width={170} height={80}/>

              <div className="system-arrow system-arrow--both">
                ↔
              </div>

              <div className="system-label">
                <ManagementIcon />
                <strong>SISTEMA DE GESTIÓN</strong>
                <span>Distribuye la energía de forma automática</span>
              </div>

            </div>


            <div className="system-node">

              <img src={Generador2} alt="" width={170} height={80}/>

              <div className="system-label">
                <GeneratorIcon />
                <strong>PLANTAS DIÉSEL</strong>
                <span>Respaldo y continuidad</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFICIOS
      ===================================================== */}

      <section className="energy-benefits">

        <div className="benefits-title">

          <SectionKicker>
            BENEFICIOS
          </SectionKicker>

          <h2>
            ENERGÍA EFICIENTE,
            <strong>EVENTOS MÁS GRANDES.</strong>
          </h2>

        </div>


        <div className="benefits-grid">

          <Benefit
            icon={<LeafIcon />}
            title="SOSTENIBILIDAD"
            description="Reducimos la huella de carbono de cada evento."
          />

          <Benefit
            icon={<ShieldIcon />}
            title="CONFIABILIDAD"
            description="Energía estable en todo momento."
          />

          <Benefit
            icon={<EfficiencyIcon />}
            title="EFICIENCIA"
            description="Uso inteligente de los recursos."
          />

          <Benefit
            icon={<LocationIcon />}
            title="VERSATILIDAD"
            description="Opera en cualquier lugar del país."
          />

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="energy-cta">

        <div className="energy-cta-overlay" />

        <div className="energy-cta-content">

          <SectionKicker light>
            TU EVENTO, NUESTRA ENERGÍA
          </SectionKicker>

          <h2>
            ¿LISTO PARA UN EVENTO
            <br />
            CON ENERGÍA <strong>SIN LÍMITES?</strong>
          </h2>

          <p>
            Hablemos de tu proyecto y diseñemos juntos
            la mejor solución energética.
          </p>

          <a
            href="/contacto"
            className="energy-cta-button"
          >
            <span>CONTÁCTANOS</span>
            <ArrowIcon />
          </a>

        </div>

        <div className="energy-cta-media">
          <img src={EnergyFooter} alt="" width={1080} height={350}/>
        </div>

      </section>


      {/* =====================================================
          NOTA:
          NO SE AGREGA FOOTER
      ===================================================== */}

    </main>
  );
}