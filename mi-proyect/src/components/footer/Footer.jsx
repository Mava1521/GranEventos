import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LogoGE from '../../assets/LOGOGE.png';
import LogoSETIE from '../../assets/LOGOSGTIE.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import facebook from '../../assets/facebook.png';
import volver from '../../assets/volver.png';

import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-background-image" aria-hidden="true" />
      <div className="footer-overlay" aria-hidden="true" />

      <div className="footer-content">
        {/* COLUMNA 1 - MARCA */}
        <div className="footer-brand">
          <div className="footer-logos">
            <Link to="/" className="footer-logo-link" aria-label={t('footer.aria.goHome')}>
              <img
                src={LogoGE}
                alt={t('footer.alt.geLogo')}
                className="footer-logo footer-logo-ge"
              />
            </Link>

            <div className="footer-logo-divider" aria-hidden="true" />

            <img
              src={LogoSETIE}
              alt={t('footer.alt.setieLogo')}
              className="footer-logo footer-logo-setie"
            />
          </div>

          <p className="footer-description">
            {t('footer.descriptionPart1')}
            <br />
            {t('footer.descriptionPart2')}
          </p>
        </div>

        {/* COLUMNA 2 - NAVEGACIÓN */}
        <nav className="footer-navigation" aria-label={t('footer.aria.navigation')}>
          <Link to="/historia">{t('footer.nav.about')}</Link>
          <Link to="/nuevas-tecnologias">{t('footer.nav.projects')}</Link>
          <Link to="/servicios">{t('footer.nav.services')}</Link>
          <Link to="/sostenibilidad">{t('footer.nav.sustainability')}</Link>
          <Link to="/contacto" className="footer-link-active">
            {t('footer.nav.contact')}
          </Link>
        </nav>

        {/* COLUMNA 3 - REDES SOCIALES */}
        <div className="footer-social">
          <p className="footer-social-title">{t('footer.socialTitle')}</p>

          <div className="footer-social-links">
            <a
              href="#instagram"
              aria-label="Instagram"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" width={18} height={18} />
            </a>

            <a
              href="#facebook"
              aria-label="Facebook"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" width={18} height={18} />
            </a>

            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" width={16} height={16} />
            </a>
          </div>
        </div>
      </div>

      {/* PARTE INFERIOR */}
      <div className="footer-bottom">
        <div className="footer-legal">
          <span>© {currentYear} {t('footer.rights')}</span>
          <span className="footer-bottom-separator" aria-hidden="true">|</span>
          <span>{t('footer.location')}</span>
        </div>

        <button
          type="button"
          className="footer-back-top"
          onClick={handleScrollTop}
          aria-label={t('footer.aria.backToTop')}
        >
          <span>{t('footer.backTop')}</span>
          <span className="footer-arrow">
            <img src={volver} alt="" aria-hidden="true" />
          </span>
        </button>
      </div>
    </footer>
  );
}