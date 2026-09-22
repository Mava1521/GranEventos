import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Festival.css';
import festival from '../assets/festival.jpg';
import camion from '../assets/camion.png';
import energia from '../assets/energia.png';
import volumen from '../assets/volumen.png';
import escenario from '../assets/escenario.png';
import stereo from '../assets/stereo.jpg';
import vive from '../assets/vive.jpg';
import colombia from '../assets/colombia.png';

const services = [
  {
    icon: camion,
    title: 'PRODUCCIÓN\nLOGÍSTICA COMPLETA',
    description:
      'Transporte, montaje, desmontaje y operación de todo el escenario.',
  },
  {
    icon: energia,
    title: 'ENERGÍA TEMPORAL',
    description:
      'Plantas y generadores eléctricos para un suministro seguro y continuo.',
  },
  {
    icon: volumen,
    title: 'AUDIO E ILUMINACIÓN',
    description:
      'Equipos de última generación para un sonido y una experiencia sin igual.',
  },
  {
    icon: escenario,
    title: 'ESCENOGRAFÍA Y DISEÑO',
    description:
      'Creamos ambientes únicos que elevan cada presentación.',
  },
];

const projects = [
  {
    title: 'ESTÉREO PICNIC',
    location: 'Bogotá, 2024',
    image: stereo,
  },
  {
    title: 'VIVE LATINO',
    location: 'Bogotá, 2023',
    image: vive,
  },
  {
    title: 'COLOMBIA AL PARQUE',
    location: 'Bogotá, 2022',
    image: colombia,
  },
];

export default function Festival() {
  return (
    <main className="festival-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="festival-hero">

        <div className="festival-hero__background" aria-hidden="true">
            <img
              src={festival}
              alt=""
            />
          
        </div>

        <div className="festival-hero__overlay" aria-hidden="true" />

        <div className="festival-container festival-hero__content">

          <div className="festival-hero__text">

            <span className="festival-eyebrow">
              <span className="festival-slash">/</span>
              FESTIVALES
            </span>

            <h1>
              FESTIVALES
              <span>QUE HACEN</span>
              HISTORIA.
            </h1>

            <p>
              Creamos experiencias inolvidables a través
              de la producción logística y técnica de
              gran formato.
            </p>

            <span className="festival-line" />

            <Link
              to="/nuevas-tecnologias"
              className="festival-hero__link"
            >
              DESCUBRE NUESTROS PROYECTOS
              <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICIOS
      ===================================================== */}
      <section className="festival-services">

        <div className="festival-container">

          <div className="festival-section-heading">

            <div className="festival-section-heading__title">

              <span className="festival-eyebrow">
                <span className="festival-slash">/</span>
                LO QUE HACEMOS
              </span>

              <h2>
                EN <strong>FESTIVALES.</strong>
              </h2>

            </div>

            <div className="festival-section-heading__description">
              <p>
                Nos encargamos de cada detalle para que tu festival
                sea una experiencia única. Desde la producción logística
                hasta el alquiler de equipos y soluciones de energía temporal.
              </p>
            </div>

          </div>


          <div className="festival-services__grid">

            {services.map((service) => (
              <article
                className="festival-service-card"
                key={service.title}
              >

                <div className="festival-service-card__icon">
                  <img
                    src={service.icon}
                    alt=""
                    aria-hidden="true"
                  />
                </div>

                <h3>
                  {service.title.split('\n').map((line, index) => (
                    <React.Fragment key={line}>
                      {line}
                      {index === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h3>

                <p>{service.description}</p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROYECTOS
      ===================================================== */}
      <section className="festival-projects">

        <div className="festival-container">

          <div className="festival-projects__header">

            <div>

              <span className="festival-eyebrow">
                <span className="festival-slash">/</span>
                FESTIVALES EN ACCIÓN
              </span>

              <h2>
                NUESTROS
                <strong> PROYECTOS.</strong>
              </h2>

            </div>

            <div className="festival-projects__intro">
              <p>
                Hemos sido parte de los festivales más importantes
                del país, llevando nuestra experiencia y compromiso
                a cada escenario.
              </p>
            </div>

            <Link
              to="/nuevas-tecnologias"
              className="festival-projects__all"
            >
              VER TODOS
              <span aria-hidden="true">→</span>
            </Link>

          </div>


          <div className="festival-projects__grid">

            {projects.map((project) => (
              <article
                className="festival-project-card"
                key={project.title}
              >

                <div className="festival-project-card__image">

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Festival ${project.title}`}
                    />
                  ) : (
                    <div
                      className="festival-image-placeholder"
                      role="img"
                      aria-label={`Imagen pendiente de ${project.title}`}
                    >
                      <span>IMAGEN</span>
                    </div>
                  )}

                </div>

                <div className="festival-project-card__content">

                  <div>
                    <h3>{project.title}</h3>
                    <span>{project.location}</span>
                  </div>

                  <button
                    type="button"
                    className="festival-project-card__arrow"
                    aria-label={`Ver proyecto ${project.title}`}
                  >
                    →
                  </button>

                </div>

              </article>
            ))}

          </div>


          <div className="festival-projects__controls">

            <button
              type="button"
              aria-label="Proyecto anterior"
              className="festival-slider-button"
            >
              ←
            </button>

            <button
              type="button"
              aria-label="Siguiente proyecto"
              className="festival-slider-button"
            >
              →
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}