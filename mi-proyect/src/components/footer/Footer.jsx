import React from 'react';
import { Link } from 'react-router-dom';

import LogoGE from '../../assets/LOGOGE.png';
import LogoSETIE from '../../assets/LOGOSGTIE.png';

import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-background-image" aria-hidden="true" />

      <div className="footer-overlay" aria-hidden="true" />

      <div className="footer-content">

        {/* =====================================================
            COLUMNA 1 - MARCA
           ===================================================== */}
        <div className="footer-brand">

          <div className="footer-logos">
            <Link to="/" className="footer-logo-link">
              <img
                src={LogoGE}
                alt="Gran Eventos"
                className="footer-logo footer-logo-ge"
              />
            </Link>

            {/* 
              Cuando tengas el logo de SETIE, este elemento
              ya está preparado para mostrarlo.
            */}
            <div className="footer-logo-divider" aria-hidden="true" />

            <img
              src={LogoSETIE}
              alt="SETIE"
              className="footer-logo footer-logo-setie"
            />
          </div>

          <p className="footer-description">
            Producción logística y energía temporal
            <br />
            para eventos que mueven al mundo.
          </p>
        </div>


        {/* =====================================================
            COLUMNA 2 - NAVEGACIÓN
           ===================================================== */}
        <nav className="footer-navigation" aria-label="Navegación del pie de página">

          <Link to="/historia">
            NOSOTROS
          </Link>

          <Link to="/nuevas-tecnologias">
            PROYECTOS
          </Link>

          <Link to="/servicios">
            SERVICIOS
          </Link>

          <Link to="/sostenibilidad">
            SOSTENIBILIDAD
          </Link>

          <Link to="/contacto" className="footer-link-active">
            CONTACTO
          </Link>

        </nav>


        {/* =====================================================
            COLUMNA 3 - REDES SOCIALES
           ===================================================== */}
        <div className="footer-social">

          <p className="footer-social-title">
            SÍGUENOS EN REDES
          </p>

          <div className="footer-social-links">

            <a
              href="#instagram"
              aria-label="Instagram"
              className="footer-social-link"
            >
              <span>◎</span>
            </a>

            <a
              href="#facebook"
              aria-label="Facebook"
              className="footer-social-link"
            >
              <span>f</span>
            </a>

            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <span>in</span>
            </a>

            <a
              href="#youtube"
              aria-label="YouTube"
              className="footer-social-link"
            >
              <span>▶</span>
            </a>

          </div>
        </div>

      </div>


      {/* =====================================================
          LÍNEA INFERIOR
         ===================================================== */}
      <div className="footer-bottom">

        <div className="footer-legal">
          <span>
            © {currentYear} Gran Eventos Producción S.A.S.
          </span>

          <span className="footer-bottom-separator">
            |
          </span>

          <span>
            Cota, Cundinamarca - Colombia
          </span>
        </div>

        <button
          type="button"
          className="footer-back-top"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
          aria-label="Volver al inicio de la página"
        >
          <span>VOLVER ARRIBA</span>
          <span className="footer-arrow">⌃</span>
        </button>

      </div>
    </footer>
  );
}