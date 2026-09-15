import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// 1. Importa tus logos aquí
import LogoGE from '../assets/LOGOGE.png';
import LogoHistory from '../assets/GE.png';
import '../styles/Navbar.css';

export default function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isProjects = location.pathname === '/nuevas-tecnologias';
  const isHistory = location.pathname === '/historia';

  // 2. Definir qué logo mostrar según la ruta
  let currentLogo = LogoGE; // Logo por defecto (Home, Proyectos, Servicios, etc.)

  if (isHistory) {
    currentLogo = LogoHistory;
  }

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
          {/* 3. Pasar la variable dinámica a la propiedad src */}
          <img
            src={currentLogo}
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
          {isHistory && <div className="active-indicator" />}
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