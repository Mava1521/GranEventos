import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import LogoGE from '../assets/LOGOGE.png';
import LogoHistory from '../assets/GE.png';

import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isHome = location.pathname === '/';
  const isProjects = location.pathname === '/nuevas-tecnologias';
  const isHistory = location.pathname === '/historia';
  const isContact = location.pathname === '/contacto';
  const isSustainability = location.pathname === '/sostenibilidad';
  const isServices = location.pathname === '/servicios';

  const currentLogo = (isHistory || isServices) ? LogoHistory : LogoGE;

  // Asignación de variantes de estilo
  let navbarVariant = 'navbar-inner';
  if (isHome || isSustainability) {
    navbarVariant = 'navbar-transparent';
  } else if (isProjects) {
    navbarVariant = 'navbar-projects';
  } else if (isHistory) {
    navbarVariant = 'navbar-history';
  } else if (isContact) {
    navbarVariant = 'navbar-contact';
  } else if (isServices) {
    navbarVariant = 'navbar-services';
  }

  // Determinar si la página tiene fondo claro en la cabecera
  const isLightBg = isHistory || isServices;

  // El color del icono será negro solo si la página es de fondo claro Y el menú móvil no está abierto
  const toggleIconColor = (isLightBg && !menuOpen) ? '#000000' : '#ffffff';

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Cambio de idioma controlado
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng; // Buena práctica WCAG / ISO para accesibilidad HTML
  };

  const currentLanguage = i18n.language ? i18n.language.split('-')[0] : 'es';

  return (
    <nav className={`navbar ${navbarVariant}`}>
      <div className="navbar-container">
        {/* LOGO */}
        <div className="brand-logos">
          <Link to="/" className="logo-placeholder" onClick={closeMenu}>
            <img
              src={currentLogo}
              alt={t('navbar.altLogo')}
              className="navbar-logo-img"
            />
          </Link>
        </div>

        {/* NAVEGACIÓN Y ACCIONES */}
        <div className={`nav-menu-wrapper ${menuOpen ? 'is-open' : ''}`}>
          <ul className="nav-links">
            <li className="nav-item-wrapper">
              <Link to="/historia" className="nav-item" onClick={closeMenu}>
                {t('navbar.nav.about')}
              </Link>
              {isHistory && <div className="active-indicator" />}
            </li>

            <li className="nav-item-wrapper">
              <Link to="/nuevas-tecnologias" className="nav-item" onClick={closeMenu}>
                {t('navbar.nav.projects')}
              </Link>
              {isProjects && <div className="active-indicator" />}
            </li>

            <li className="nav-item-wrapper">
              <Link to="/servicios" className="nav-item" onClick={closeMenu}>
                {t('navbar.nav.services')}
              </Link>
              {isServices && <div className="active-indicator" />}
            </li>

            <li className="nav-item-wrapper">
              <Link to="/sostenibilidad" className="nav-item nav-item-green" onClick={closeMenu}>
                {t('navbar.nav.sustainability')}
              </Link>
              {isSustainability && <div className="active-indicator-green active-indicator-green" />}
            </li>

            <li className="nav-item-wrapper">
              <Link to="/contacto" className="nav-item" onClick={closeMenu}>
                {t('navbar.nav.contact')}
              </Link>
              {isContact && <div className="active-indicator" />}
            </li>
          </ul>

          {/* SELECTOR DE IDIOMAS */}
          <div className="lang-selector">
            <button
              className={currentLanguage === 'es' ? 'active' : ''}
              type="button"
              onClick={() => changeLanguage('es')}
              aria-label={t('navbar.aria.switchToEs')}
            >
              ES
            </button>

            <button
              className={currentLanguage === 'en' ? 'active' : ''}
              type="button"
              onClick={() => changeLanguage('en')}
              aria-label={t('navbar.aria.switchToEn')}
            >
              EN
            </button>
          </div>
        </div>

        {/* BOTÓN HAMBURGUESA PARA MÓVIL */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? t('navbar.aria.closeMenu') : t('navbar.aria.openMenu')}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} color={toggleIconColor} /> : <Menu size={26} color={toggleIconColor} />}
        </button>
      </div>
    </nav>
  );
}