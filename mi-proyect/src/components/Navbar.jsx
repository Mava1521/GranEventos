import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import LogoGE from '../assets/LOGOGE.png';
import LogoHistory from '../assets/GE.png';

import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isProjects = location.pathname === '/nuevas-tecnologias';
  const isHistory = location.pathname === '/historia';
  const isContact = location.pathname === '/contacto';

  let currentLogo = isHistory ? LogoHistory : LogoGE;

  let navbarVariant = 'navbar-inner';
  if (isHome) navbarVariant = 'navbar-home';
  else if (isProjects) navbarVariant = 'navbar-projects';
  else if (isHistory) navbarVariant = 'navbar-history';
  else if (isContact) navbarVariant = 'navbar-contact';

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${navbarVariant}`}>
      <div className="navbar-container">
        {/* LOGO */}
        <div className="brand-logos">
          <Link to="/" className="logo-placeholder" onClick={closeMenu}>
            <img
              src={currentLogo}
              alt="Gran Eventos - Pasión por el buen servicio"
              className="navbar-logo-img"
            />
          </Link>
        </div>

        {/* NAVEGACIÓN Y ACCIONES */}
        <div className={`nav-menu-wrapper ${menuOpen ? 'is-open' : ''}`}>
          <ul className="nav-links">
            <li className="nav-item-wrapper">
              <Link to="/historia" className="nav-item" onClick={closeMenu}>
                NOSOTROS
              </Link>
              {isHistory && <div className="active-indicator" />}
            </li>

            <li className="nav-item-wrapper">
              <Link to="/nuevas-tecnologias" className="nav-item" onClick={closeMenu}>
                PROYECTOS
              </Link>
              {isProjects && <div className="active-indicator" />}
            </li>

            <li className="nav-item-wrapper">
              <Link to="/servicios" className="nav-item" onClick={closeMenu}>
                SERVICIOS
              </Link>
            </li>

            <li className="nav-item-wrapper">
              <Link to="/sostenibilidad" className="nav-item" onClick={closeMenu}>
                SOSTENIBILIDAD
              </Link>
            </li>

            <li className="nav-item-wrapper">
              <Link to="/contacto" className="nav-item" onClick={closeMenu}>
                CONTACTO
              </Link>
              {isContact && <div className="active-indicator" />}
            </li>
          </ul>

          {/* IDIOMAS */}
          <div className="lang-selector">
            <span className="active">ES</span>
            <span className="separator">|</span>
            <span>EN</span>
          </div>
        </div>

        {/* BOTÓN HAMBURGUESA PARA MÓVIL */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} color="#ffffff" /> : <Menu size={26} color="#ffffff" />}
        </button>
      </div>
    </nav>
  );
}