import React, { useState } from 'react';
import '../styles/Contact.css';
import LogoGE from '../assets/LOGOGE.png';
import IconWhatsApp from '../assets/whatsapp.png';
import ImageHero from '../assets/HeroContact.jpg';
import instagram from '../assets/instagram.png';
import location from '../assets/location.png';
import youtube from '../assets/youtube.png';
import clock from '../assets/clock.png';
import FooterProyect from '../assets/FooterProyect.jpg';
import Foto4 from '../assets/FOTO3.jpg';
import ColombiaContact from '../assets/ColombiaContact.png';
import MundialMap from '../assets/MundialMap2.png';
import mapa from '../assets/mapa.png';
import mundo from '../assets/mundo.png';
import soluciones from '../assets/soluciones.png';
import hoja from '../assets/hoja.png';
import global from '../assets/global.png';

const initialForm = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  message: '',
  privacy: false,
};

const projectTypes = [
  'Festival',
  'Concierto',
  'Evento corporativo',
  'Soluciones energéticas',
  'Otro',
];

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.privacy) {
      setStatus('Debes aceptar el tratamiento de tus datos.');
      return;
    }

    setStatus('Mensaje preparado correctamente.');

    // Aquí posteriormente puedes conectar:
    // - una API
    // - EmailJS
    // - Formspree
    // - backend propio

    setFormData(initialForm);
  };

  return (
    <main className="contact-page">

      {/* =========================================
          HERO
      ========================================== */}
      <section className="contact-hero">

        <div className="contact-hero-content">

          <div className="contact-kicker">
            <span />
            CONTACTO
          </div>

          <h1>
            ENERGÍA PARA HACER
            <strong>IDEAS REALES.</strong>
          </h1>

          <div className="contact-yellow-line" />

          <p>
            En Gran Eventos y SETIE estamos listos para
            escuchar tus ideas y acompañarte en cada etapa
            de tu proyecto.
          </p>

        </div>

        <div className="contact-hero-image">
          <img
            src={ImageHero}
            alt="Producción de eventos y soluciones energéticas"
          />

          <div className="contact-lightning" />
        </div>

        <div className="contact-hero-side">
          <span>EVENTOS</span>
          <span>INDUSTRIA</span>
          <span>COMUNIDADES</span>
          <span>UN FUTURO REAL</span>

          <div />
        </div>

      </section>

      {/* =========================================
          CONTACT MAIN
      ========================================= */}
      <section className="contact-main">

        {/* =====================================
            CONTACT FORM
        ====================================== */}
        <div className="contact-form-column">

          <div className="contact-kicker dark">
            <span />
            ESCRÍBENOS
          </div>

          <h2>
            CUÉNTANOS
            <small>TU PROYECTO.</small>
          </h2>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <label htmlFor="name" className="sr-only">
              Nombre completo
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email" className="sr-only">
              Correo electrónico
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="company" className="sr-only">
              Empresa u organización
            </label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Empresa / Organización"
              value={formData.company}
              onChange={handleChange}
            />

            <label htmlFor="projectType" className="sr-only">
              Tipo de proyecto
            </label>

            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
            >
              <option value="">
                Tipo de proyecto
              </option>

              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <label htmlFor="message" className="sr-only">
              Descripción del proyecto
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Cuéntanos más sobre tu proyecto..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <label className="privacy-check">

              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
              />

              <span>
                Acepto el tratamiento de mis datos personales.
              </span>

            </label>

            <button
              type="submit"
              className="contact-submit"
            >
              <span>ENVIAR MENSAJE</span>

              <svg
                viewBox="0 0 40 20"
                aria-hidden="true"
              >
                <path d="M1 10h34" />
                <path d="M28 3l7 7-7 7" />
              </svg>
            </button>

            {status && (
              <p
                className="form-status"
                role="status"
              >
                {status}
              </p>
            )}

          </form>

        </div>


        {/* =====================================
            OTHER CHANNELS
        ====================================== */}
        <aside className="contact-info">

          <div className="contact-kicker dark">
            <span />
            OTROS CANALES
          </div>

          <div className="contact-channel whatsapp">

            <div className="channel-icon">
              <img
                src={IconWhatsApp}
                alt=""
                width={66}
                height={66}
              />
            </div>

            <div>
              <h3>Hablemos por WhatsApp</h3>
              <p>Respuestas más rápidas.</p>
            </div>

          </div>

          <div className="contact-channel">

            <div className="channel-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="1"
                />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>

            <div>
              <h3>Envíanos un correo</h3>

              <p>
                info@graneventos.com
                <br />
                Te responderemos lo antes posible.
              </p>
            </div>

          </div>

          <div className="contact-channel">

            <div className="channel-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 3h4l2 5-3 2a14 14 0 0 0 5 5l2-3 5 2v4c0 1-1 2-2 2C11 20 4 13 4 5c0-1 1-2 2-2Z" />
              </svg>
            </div>

            <div>
              <h3>Llámanos</h3>

              <p>
                +57 350 500 3388
              </p>
            </div>

          </div>

        </aside>

      </section>


      {/* =========================================
          LOCATION
      ========================================= */}
      <section className="contact-location-section">

        {/* =====================================
            LOCATION INTRO
        ====================================== */}
        <div className="location-main">

          <div className="location-copy">

            <div className="contact-kicker dark">
              NUESTRA UBICACIÓN
            </div>

            <div className="location-yellow-line" />

            <h2>
              BASE EN COLOMBIA,
              <br />
              EXPERIENCIAS
              <strong>SIN FRONTERAS.</strong>
            </h2>

            <p className="location-description">
              Desde nuestra sede en Cota, operamos en todo el país
              y llevamos la experiencia de Gran Eventos más allá
              de las fronteras, con soluciones energéticas de SETIE
              para eventos en la región.
            </p>

            <div className="location-headquarters">

              <div className="location-pin">
                <img
                  src={location}
                  alt=""
                  width="30"
                  height="30"
                />
              </div>

              <div>
                <h3>SEDE PRINCIPAL</h3>

                <p>
                  Autopista Medellín Km 2.5 Vía Parcelas
                  <br />
                  Ciem oiks occidente bodega 169-170,
                  <br />
                  Cota, Cundinamarca
                  <br />
                  <span>(Operamos en todo el país)</span>
                </p>
              </div>

              <article className="location-data-card">

                <div className="location-data-icon">
                  <img
                    src={clock}
                    alt=""
                    width="24"
                    height="24"
                  />
                </div>

                <div>

                  <h3>ESTAMOS PARA TI</h3>

                  <p>
                    Lunes a viernes
                    <br />
                    8:00 a.m. - 6:00 p.m.
                    <br />
                    Sábados 8:00 a.m. - 12:00 m.
                  </p>

                </div>

              </article>

            </div>

            

          </div>


          {/* MAP */}
          <div className="location-map">

            <div className="map-title">
              <span>COLOMBIA</span>
              <strong>COBERTURA NACIONAL</strong>
            </div>

            <div className="map-graphic">
              <img src={ColombiaContact} alt="" />

            </div>

          </div>

        </div>


        {/* =====================================
            COVERAGE FEATURES
        ====================================== */}
        <div className="location-features">

          <div className="location-feature">
            <div className="feature-symbol">
              <img src={mapa} alt="" />
            </div>

            <div>
              <strong>COBERTURA</strong>
              <span>NACIONAL</span>
              <small>EN TODAS<br />LAS REGIONES</small>
            </div>
          </div>

          <div className="location-feature">
            <div className="feature-symbol">
              <img src={mundo} alt="" width={60} height={60} />
            </div>

            <div>
              <strong>PRESENCIA</strong>
              <span>INTERNACIONAL</span>
              <small>LATAM Y<br />OTROS PAÍSES</small>
            </div>
          </div>

          <div className="location-feature">
            <div className="feature-symbol">
              <img src={soluciones} alt="" width={70} height={70}/>
            </div>

            <div>
              <strong>SOLUCIONES</strong>
              <span>MÓVILES</span>
              <small>NOS ADAPTAMOS<br />A CUALQUIER LUGAR</small>
            </div>
          </div>

          <div className="location-feature">
            <div className="feature-symbol">
              <img src={hoja} alt="" width={50} height={50}/>
            </div>

            <div>
              <strong>EVENTOS</strong>
              <span>MÁS SOSTENIBLES</span>
              <small>EN CUALQUIER<br />DESTINO</small>
            </div>
          </div>

        </div>


        {/* =====================================
            INTERNATIONAL REACH
        ====================================== */}
        <div className="location-international">

          <div className="international-copy">

            <div className="contact-kicker dark">
              <span />
              ALCANCE INTERNACIONAL
            </div>

            <h2>
              LLEVAMOS
              <br />
              NUESTRA ENERGÍA
              <br />
              MÁS LEJOS.
            </h2>

            <div className="location-yellow-line" />

            <p>
              Hoy operamos en toda Colombia y contamos con
              capacidad para desarrollar proyectos en
              Latinoamérica y otros países, acompañando
              eventos que conectan personas en todo el mundo.
            </p>

          </div>

          <div className="world-map">
            <img src={MundialMap} alt="" width={1100} height={650}/>

          </div>

        </div>


        {/* =====================================
            LOCATION CTA
        ====================================== */}
        <div className="location-cta">

          <div className="location-cta-icon">
            <img src={global} alt="" />
          </div>

          <div>
            <span>UN MUNDO DE POSIBILIDADES</span>

            <strong>
              TU EVENTO,
              <em> EN CUALQUIER LUGAR.</em>
            </strong>
          </div>

          <svg
            viewBox="0 0 40 20"
            aria-hidden="true"
          >
            <path d="M1 10h34" />
            <path d="M28 3l7 7-7 7" />
          </svg>

        </div>

      </section>

      {/* =========================================
          TALENT
      ========================================== */}
      <section className="contact-talent">

        <div className="talent-content">

          <div className="contact-kicker dark">
            <span />
            TALENTO
          </div>

          <h2>
            TRABAJA
            <strong>CON NOSOTROS.</strong>
          </h2>

          <p>
            Creemos en el talento que impulsa experiencias
            y un futuro más sostenible.
          </p>

          <button className="outline-button">
            ENVIAR MI HOJA DE VIDA

            <svg viewBox="0 0 40 20">
              <path d="M1 10h34" />
              <path d="M28 3l7 7-7 7" />
            </svg>
          </button>

        </div>

        <div className="talent-image">
          <img
            src={FooterProyect}
            alt="Equipo de Gran Eventos"
          />
        </div>

        <div className="talent-side">
          <span>TALENTO</span>
          <span>IDEAS</span>
          <span>ENERGÍA</span>
          <span>IMPACTO</span>

          <div />
        </div>

      </section>

      {/* =========================================
          FOOTER BANNER
      ========================================== */}
      <section className="contact-banner">

        <div className="banner-overlay" />

        <div className="banner-content">

          <div className="contact-yellow-line" />

          <h2>
            GRANDES EXPERIENCIAS
            <br />
            TAMBIÉN DEJAN
            <br />
            UN MUNDO MEJOR.
          </h2>

        </div>
        <div className="banner-content">
          <img src={Foto4} alt="" width={600} height={400}/>

        </div>

        <div className="banner-right">
          <span>ENERGÍA</span>
          <span>PERSONAS</span>
          <span>EXPERIENCIAS</span>
          <span>PLANETA</span>
        </div>

      </section>

     

    </main>
  );
}

export default Contact;