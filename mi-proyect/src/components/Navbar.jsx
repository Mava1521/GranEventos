import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import LogoGE from '../assets/LOGOGE.png';
import LogoHistory from '../assets/GE.png';

import '../styles/Navbar.css';

export default function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isProjects = location.pathname === '/nuevas-tecnologias';
  const isHistory = location.pathname === '/historia';
  const isContact = location.pathname === '/contacto';

  /*
   * Logo utilizado según la página.
   * Cada página puede tener su propia identidad visual
   * sin modificar las demás.
   */
  let currentLogo = LogoGE;

  if (isHistory) {
    currentLogo = LogoHistory;
  }

  /*
   * Clase visual específica para cada página.
   */
  let navbarVariant = 'navbar-inner';

  if (isHome) {
    navbarVariant = 'navbar-home';
  } else if (isProjects) {
    navbarVariant = 'navbar-projects';
  } else if (isHistory) {
    navbarVariant = 'navbar-history';
  } else if (isContact) {
    navbarVariant = 'navbar-contact';
  }

  return (
    <nav className={`navbar ${navbarVariant}`}>
      
      {/* LOGO */}
      <div className="brand-logos">
        <Link to="/" className="logo-placeholder">
          <img
            src={currentLogo}
            alt="Gran Eventos"
            width="210"
            height="62"
          />
        </Link>
      </div>

      {/* NAVEGACIÓN */}
      <ul className="nav-links">

        <li className="nav-item-wrapper">
          <Link to="/historia" className="nav-item">
            NOSOTROS
          </Link>

          {isHistory && (
            <div className="active-indicator" />
          )}
        </li>

        <li className="nav-item-wrapper">
          <Link to="/nuevas-tecnologias" className="nav-item">
            PROYECTOS
          </Link>

          {isProjects && (
            <div className="active-indicator" />
          )}
        </li>

        <li className="nav-item-wrapper">
          <Link to="/servicios" className="nav-item">
            SERVICIOS
          </Link>
        </li>

        <li className="nav-item-wrapper">
          <Link to="/sostenibilidad" className="nav-item">
            SOSTENIBILIDAD
          </Link>
        </li>

        <li className="nav-item-wrapper">
          <Link to="/contacto" className="nav-item">
            CONTACTO
          </Link>

          {isContact && (
            <div className="active-indicator" />
          )}
        </li>

      </ul>

      {/* IDIOMAS */}
      <div className="lang-selector">
        <span className="active">ES</span>

        <span className="separator">|</span>

        <span>EN</span>
      </div>

    </nav>
  );
}