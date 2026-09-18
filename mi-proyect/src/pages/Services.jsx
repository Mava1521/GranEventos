import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';
import HeroServices from '../assets/Services.jpg';
import logistica from '../assets/Logistica.jpg';
import produccion from '../assets/Produccion.png';
import sostenibilidad from '../assets/Sostenibilidad.png';
import talento from '../assets/Talento.png';
import audio from '../assets/Audio.jpg';
import escenografia from '../assets/Services1.jpg';
import ServiceContact from '../assets/ServiceContact.jpg';

const services = [
  {
    id: '01',
    title: (
      <>
        PRODUCCIÓN
        <br />
        DE EVENTOS
      </>
    ),
    description:
      'Gestionamos cada etapa del evento, desde la planificación hasta la ejecución, con un equipo experto y comprometido.',
    image: produccion, // Agregar imagen posteriormente
  },
  {
    id: '02',
    title: (
      <>
        AUDIO, ILUMINACIÓN
        <br />Y VIDEO
      </>
    ),
    description:
      'Creamos ambientes inmersivos con tecnología de última generación, para que cada momento se viva al máximo.',
    image: audio,
  },
  {
    id: '03',
    title: (
      <>
        ESCENOGRAFÍA
        <br />Y DISEÑO
      </>
    ),
    description:
      'Transformamos ideas en espacios únicos que conectan con el público y refuerzan la identidad de tu marca.',
    image: escenografia,
  },
  {
    id: '04',
    title: (
      <>
        TALENTO ARTÍSTICO
        <br />Y ENTRETENIMIENTO
      </>
    ),
    description:
      'Contamos con una amplia red de artistas, conferencistas y talentos que hacen de cada evento una experiencia inolvidable.',
    image: talento,
  },
  {
    id: '05',
    title: (
      <>
        LOGÍSTICA
        <br />Y PRODUCCIÓN TÉCNICA
      </>
    ),
    description:
      'Coordinamos todos los aspectos técnicos y operativos para garantizar el desarrollo fluido y seguro de tu evento.',
    image: logistica,
  },
  {
    id: '06',
    title: (
      <>
        SOSTENIBILIDAD
        <br />EN EVENTOS
      </>
    ),
    description:
      'Implementamos prácticas responsables para generar un impacto positivo en el medio ambiente y la sociedad.',
    image: sostenibilidad,
  },
];

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-number">{service.id}</div>

      <div className="service-card-image">
        {service.image ? (
          <img
            src={service.image}
            alt=""
            loading="lazy"
          />
        ) : (
          <div className="image-placeholder">
            <span>IMAGEN</span>
          </div>
        )}
      </div>

      <div className="service-card-content">
        <div className="service-icon" aria-hidden="true">
          <span></span>
        </div>

        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <button
          type="button"
          className="service-link"
          aria-label={`Ver más sobre ${service.id}`}
        >
          <span>VER MÁS</span>
          <span className="service-arrow" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <main className="services-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="services-hero">
        <div className="services-hero-content">

          <div className="section-label">
            <span className="section-marker"></span>
            <span>SERVICIOS</span>
          </div>

          <h1>
            SOLUCIONES
            <br />

            <span className="text-yellow">
              INTEGRALES
            </span>

            <br />

            <span className="text-light">
              PARA EVENTOS
            </span>

            <br />

            <span className="text-light">
              QUE INSPIRAN.
            </span>
          </h1>

          <div className="yellow-line"></div>

          <p className="services-hero-description">
            En Gran Eventos creamos experiencias únicas
            <br className="desktop-break" />
            a través de una producción integral, estratégica
            <br className="desktop-break" />
            y de alto impacto.
          </p>

        </div>

        {/* Espacio preparado para imagen */}
        <div className="services-hero-image">

          <div className="hero-image-placeholder">
            <span>
              <img src={HeroServices} alt="" width={1500} height={900} />
            </span>
          </div>

          <div className="hero-yellow-shape"></div>
          <div className="hero-green-shape"></div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCCIÓN
      ====================================================== */}

      <section className="services-intro">

        <div className="section-label">
          <span className="section-marker"></span>
          <span>NUESTROS SERVICIOS</span>
        </div>

        <div className="services-intro-grid">

          <div className="services-intro-title">
            <h2>
              CADA DETALLE
              <br />
              <span>
                SUMA EXPERIENCIA.
              </span>
            </h2>
          </div>

          <div className="services-intro-divider"></div>

          <div className="services-intro-text">
            <p>
              Desde la conceptualización hasta la ejecución,
              nos encargamos de cada aspecto para que tu evento
              sea memorable, seguro y sin contratiempos.
            </p>
          </div>

        </div>
      </section>


      {/* =====================================================
          GRID DE SERVICIOS
      ====================================================== */}

      <section className="services-grid-section">

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="services-cta">

        <div className="services-cta-background">
          <div className="cta-image-placeholder">
            <span>
              <img src={ServiceContact} alt="" />
            </span>
          </div>
        </div>

        <div className="services-cta-overlay"></div>

        <div className="services-cta-content">

          <div className="section-label">
            <span className="section-marker"></span>
            <span>TU EVENTO, EN BUENAS MANOS</span>
          </div>

          <h2>
            ¿LISTO PARA
            <br />
            CREAR ALGO{' '}
            <span>INCREÍBLE?</span>
          </h2>

          <p>
            Hablemos de tu próximo evento y llevémoslo
            <br className="desktop-break" />
            al siguiente nivel.
          </p>

          <Link
            to="/contacto"
            className="cta-button"
          >
            <span>CONTÁCTANOS</span>
            <span aria-hidden="true">→</span>
          </Link>

        </div>

        <div className="cta-decoration">
          <span></span>
          <span></span>
        </div>

      </section>

    </main>
  );
}