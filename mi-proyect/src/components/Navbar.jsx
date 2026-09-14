import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoGE from '../assets/LOGOGE.png';
import '../styles/Navbar.css';

export default function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isProjects = location.pathname === '/nuevas-tecnologias';
  const isHistory = location.pathname === '/historia';

  return (
    <nav
       className={`navbar ${
    isHome
      ? 'navbar-home'
      : isProjects
        ? 'navbar-projects'
        : isHistory
          ? 'navbar-history'
          : 'navbar-inner'
  }`}
    >
      <div className="brand-logos">
        <Link to="/" className="logo-placeholder">
          <img
            src={LogoGE}
            alt="Gran Eventos Logo"
            width="210"
            height="62"
          />
        </Link>
      </div>

      <ul className="nav-links">
        <li className="nav-item-wrapper">
          <Link to="/historia" className="nav-item">
            NOSOTROS
          </Link>

          {location.pathname === '/historia' && (
            <div className="active-indicator" />
          )}
        </li>

        <li className="nav-item-wrapper">
          <Link to="/nuevas-tecnologias" className="nav-item">
            PROYECTOS
          </Link>

          {isProjects && <div className="active-indicator" />}
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
        </li>
      </ul>

      <div className="lang-selector">
        <span className="active">ES</span>
        <span className="separator">|</span>
        <span>EN</span>
      </div>
    </nav>
  );
}