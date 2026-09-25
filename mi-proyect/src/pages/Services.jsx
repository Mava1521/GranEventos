import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

import ServiceHero from '../assets/ServiceHero.jpg';
import plantas from '../assets/Plantas.jpg';
import diseño from '../assets/Diseño.jpg';
import transformadores from '../assets/Transformadores.jpg';
import distribucion from '../assets/Distribuicion.jpg';
import iluminacion from '../assets/Iluminacion.jpg';
import ventas from '../assets/Ventas.jpg';
import ServiceSeccion3 from '../assets/ServicesSeccion3.jpg';


const services = [
  {
    number: '01',
    title: 'PLANTAS DE ENERGÍA',
    subtitle: 'Confiabilidad en cualquier escala.',
    description:
      'Alquiler de plantas eléctricas de alta, media y baja capacidad, con soporte técnico especializado para eventos y proyectos temporales.',
    image: plantas,
    alt: 'Plantas de energía de Gran Eventos',
  },
  {
    number: '02',
    title: 'VENTA DE PLANTAS',
    subtitle: 'Energía para un futuro en expansión.',
    description:
      'Comercialización de plantas eléctricas con asesoría especializada, adaptadas a las necesidades de cada industria.',
    image: ventas,
    alt: 'Venta de plantas eléctricas',
  },
  {
    number: '03',
    title: 'DISEÑO DE PROYECTOS',
    subtitle: 'Ingeniería al servicio de grandes ideas.',
    description:
      'Desarrollamos soluciones personalizadas de energía e infraestructura, desde la planificación hasta la ejecución.',
    image: diseño,
    alt: 'Diseño de proyectos de energía',
  },
  {
    number: '04',
    title: 'TRANSFORMADORES',
    subtitle: 'Estabilidad y seguridad en cada conexión.',
    description:
      'Suministro, instalación y operación de transformadores para garantizar un desempeño seguro y eficiente.',
    image: transformadores,
    alt: 'Transformadores eléctricos',
  },
  {
    number: '05',
    title: 'DISTRIBUCIÓN Y CABLEADO',
    subtitle: 'Conexiones que lo hacen posible.',
    description:
      'Diseño e instalación de distritos eléctricos y cableado certificado, asegurando una distribución confiable y segura en todo tipo de eventos.',
    image: distribucion,
    alt: 'Distribución y cableado eléctrico',
  },
  {
    number: '06',
    title: 'TORRES DE ILUMINACIÓN',
    subtitle: 'Luz para experiencias sin límites.',
    description:
      'Torres de iluminación de alto rendimiento para áreas de producción, parqueaderos, backstage y zonas operativas.',
    image: iluminacion,
    alt: 'Torres de iluminación para eventos',
  },
];

function ServiceImage({ image, alt, number }) {
  if (image) {
    return (
      <img
        className="service-card__image"
        src={image}
        alt={alt}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="service-card__placeholder"
      role="img"
      aria-label={`${alt}. Imagen pendiente por agregar.`}
    >
      <span>IMAGEN {number}</span>
    </div>
  );
}

export default function Services() {
  return (
    <main className="services-page">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="services-hero" aria-labelledby="services-title">
        <div className="services-hero__content">
          <p className="services-eyebrow">SERVICIOS</p>

          <h1 id="services-title" className="services-hero__title">
            <span>ENERGÍA</span>
            <span>QUE HACE POSIBLE</span>
            <span className="services-hero__title-light">
              EXPERIENCIAS EXTRAORDINARIAS<span className="yellow-dot">.</span>
            </span>
          </h1>

          <p className="services-hero__description">
            Soluciones integrales de energía e infraestructura temporal
            <br className="desktop-only" />
            para eventos, producciones y proyectos de gran escala.
          </p>
        </div>

        <div className="services-hero__visual">
          <div className="services-hero__image-placeholder">
            <span>
              <img src={ServiceHero} alt=""  width={1700} height={625}/>
            </span>
          </div>

          <div className="services-hero__message">
            <p>
              IMPULSAMOS
              <br />
              IDEAS,
              <br />
              CONECTAMOS
              <br />
              EMOCIONES.
            </p>

            <span className="yellow-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICIOS
      ====================================================== */}
      <section
        className="services-grid-section"
        aria-labelledby="services-grid-title"
      >
        <h2 id="services-grid-title" className="sr-only">
          Nuestros servicios
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card__number">
                <span>{service.number}</span>
                <span className="service-card__number-line" aria-hidden="true" />
              </div>

              <ServiceImage
                image={service.image}
                alt={service.alt}
                number={service.number}
              />

              <div className="service-card__content">
                <h3>{service.title}</h3>

                <p className="service-card__subtitle">
                  {service.subtitle}
                </p>

                <p className="service-card__description">
                  {service.description}
                </p>

                <Link
                  to="/contacto"
                  className="service-card__link"
                  aria-label={`Ver más sobre ${service.title.toLowerCase()}`}
                >
                  <span>VER MÁS</span>

                  <span className="service-card__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          CTA FINAL
      ====================================================== */}
      <section className="services-cta" aria-labelledby="services-cta-title">
        <div className="services-cta__background">
          <span>
            <img src={ServiceSeccion3} alt="" width={1850} height={300}/>
          </span>
        </div>

        <div className="services-cta__overlay" />

        <div className="services-cta__content">
          <span className="services-cta__line" aria-hidden="true" />

          <h2 id="services-cta-title">
            SOLUCIONES QUE
            <br />
            SE ADAPTAN A TU EVENTO.
          </h2>

          <Link to="/contacto" className="services-cta__button">
            <span>HABLEMOS DE TU PROYECTO</span>

            <span className="services-cta__button-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className="services-cta__side-text">
          <span>MÁS</span>
          <span>ENERGÍA</span>
          <span>MÁS IDEAS</span>
          <span>MÁS EXPERIENCIAS</span>
        </div>
      </section>
    </main>
  );
}