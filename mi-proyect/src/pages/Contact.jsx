import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';

import LogoGE from '../assets/LOGOGE.png';
import IconWhatsApp from '../assets/whatsapp.png';
import ImageHero from '../assets/HeroContact.jpg';
import instagram from '../assets/instagram.png';
import locationIcon from '../assets/location.png';
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

export default function Contact() {
  const { t } = useTranslation();
  const location = useLocation();
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('');

  // Efecto para desplazar suavemente al elemento con el ID especificado en el hash
  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        // Un leve retraso garantiza que el DOM esté completamente montado antes del scroll
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

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
      setStatus(t('contact.form.privacyError'));
      return;
    }

    setStatus(t('contact.form.successMessage'));
    setFormData(initialForm);
  };

  return (
    <main className="contact-page">

      {/* =========================================
          HERO INMERSIVO A PANTALLA COMPLETA
      ========================================== */}
      <section className="contact-hero">
        {/* IMAGEN DE FONDO QUE CUBRE TODO EL HERO */}
        <div className="contact-hero-bg-wrapper" aria-hidden="true">
          <img
            src={ImageHero}
            alt={t('contact.hero.alt')}
            className="contact-hero-bg-image"
          />
          <div className="contact-hero-overlay" />
        </div>
        <div className="contact-hero-content">
          <div className="contact-kicker">
            <span />
            {t('contact.hero.kicker')}
          </div>

          <h1>
            {t('contact.hero.title1')}{' '}
            <strong>{t('contact.hero.title2')}</strong>
          </h1>

          <div className="contact-yellow-line" />

          <p>{t('contact.hero.description')}</p>

          {/* SELLO DE MARCA REUBICADO DEBAJO DEL TEXTO IZQUIERDO */}
          <div className="contact-hero-side">
            <p style={{ margin: 0, lineHeight: '1.4'}}>
              {t('contact.hero.extraMessage.line1')}
              <br />
              {t('contact.hero.extraMessage.line2')}
              <br />
              {t('contact.hero.extraMessage.line3')}
              <br />
              {t('contact.hero.extraMessage.line4')}
              <br />
              {t('contact.hero.extraMessage.line5')}
            </p>
            <div />
          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT MAIN
      ========================================= */}
        <section className="contact-main">

          {/* 1. FORMULARIO */}
          <div id="cuentanos-tu-proyecto" className="contact-form-column">
            <div className="contact-kicker dark">
              <span />
              {t('contact.form.kicker')}
            </div>

            <h2>
              {t('contact.form.title1')} <small>{t('contact.form.title2')}</small>
            </h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name" className="sr-only">
                {t('contact.form.namePlaceholder')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={t('contact.form.namePlaceholder')}
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email" className="sr-only">
                {t('contact.form.emailPlaceholder')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={t('contact.form.emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="company" className="sr-only">
                {t('contact.form.companyPlaceholder')}
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder={t('contact.form.companyPlaceholder')}
                value={formData.company}
                onChange={handleChange}
              />

              <label htmlFor="projectType" className="sr-only">
                {t('contact.form.projectTypePlaceholder')}
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">
                  {t('contact.form.projectTypePlaceholder')}
                </option>
                <option value="festival">{t('contact.form.projectTypes.festival')}</option>
                <option value="concert">{t('contact.form.projectTypes.concert')}</option>
                <option value="corporate">{t('contact.form.projectTypes.corporate')}</option>
                <option value="energy">{t('contact.form.projectTypes.energy')}</option>
                <option value="other">{t('contact.form.projectTypes.other')}</option>
              </select>

              <label htmlFor="message" className="sr-only">
                {t('contact.form.messagePlaceholder')}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={t('contact.form.messagePlaceholder')}
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
                <span>{t('contact.form.privacyText')}</span>
              </label>

              <button type="submit" className="contact-submit">
                <span>{t('contact.form.submitBtn')}</span>
                <svg viewBox="0 0 40 20" aria-hidden="true">
                  <path d="M1 10h34" />
                  <path d="M28 3l7 7-7 7" />
                </svg>
              </button>

              {status && (
                <p className="form-status" role="status">
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* 2. OTROS CANALES */}
          <aside className="contact-info">
            <div className="contact-kicker dark">
              <span />
              {t('contact.channels.kicker')}
            </div>

            <a
              href="https://wa.me/573505003388?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel whatsapp interactive-channel"
              aria-label="Abrir chat de WhatsApp con Gran Eventos"
            >
              <div className="channel-icon">
                <img src={IconWhatsApp} alt="" width={66} height={66} />
              </div>
              <div>
                <h3>{t('contact.channels.whatsappTitle')}</h3>
                <p>{t('contact.channels.whatsappDesc')}</p>
              </div>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&to=info@graneventos.com&su=Consulta%20desde%20la%20Web&body=Hola,%20estoy%20interesado%20en%20sus%20servicios%20para%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel interactive-channel"
              aria-label="Enviar correo electrónico a Gran Eventos"
            >
              <div className="channel-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
              <div>
                <h3>{t('contact.channels.emailTitle')}</h3>
                <p>
                  info@graneventos.com
                  <br />
                  {t('contact.channels.emailDesc')}
                </p>
              </div>
            </a>

            <a
              href="tel:+573505003388"
              className="contact-channel interactive-channel"
              aria-label="Llamar al número telefónico +57 350 500 3388"
            >
              <div className="channel-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 3h4l2 5-3 2a14 14 0 0 0 5 5l2-3 5 2v4c0 1-1 2-2 2C11 20 4 13 4 5c0-1 1-2 2-2Z" />
                </svg>
              </div>
              <div>
                <h3>{t('contact.channels.callTitle')}</h3>
                <p>+57 350 500 3388</p>
              </div>
            </a>
          </aside>

          {/* 3. TRABAJA CON NOSOTROS */}
          <section className="contact-talent-column">

            <div className="contact-kicker dark">
              <span />
              {t('contact.talent.kicker')}
            </div>

            <div className="talent-column-image">
              <img
                src={FooterProyect}
                alt="Equipo de Gran Eventos"
              />

              <div className="talent-image-overlay" />
            </div>

            <div className="talent-column-content">

              <h2>
                {t('contact.talent.title1')}{' '}
                <strong>{t('contact.talent.title2')}</strong>
              </h2>

              <p>{t('contact.talent.desc')}</p>

              <Link className="outline-button" to="/Jobs">
                {t('contact.talent.btn')}

                <svg viewBox="0 0 40 20" aria-hidden="true">
                  <path d="M1 10h34" />
                  <path d="M28 3l7 7-7 7" />
                </svg>
              </Link>

            </div>

          </section>

        </section>


      {/* =========================================
          LOCATION
      ========================================= */}
      <section className="contact-location-section">
        <div className="location-header">
          <div className="contact-kicker dark">
            {t('contact.location.kicker')}
          </div>

          <div className="location-yellow-line" />

          <h2>
            {t('contact.location.title1')}
            <br />
            {t('contact.location.title2')}
            <br />
            <strong>{t('contact.location.title3')}</strong>
          </h2>

          <p>{t('contact.location.desc')}</p>
        </div>

        <div className="location-map-area">
          <div className="location-map-placeholder">
            <img src={ColombiaContact} alt="" />
          </div>
        </div>

        <div className="location-details">
          {/* SEDE PRINCIPAL */}
          <article className="location-detail">
            <div className="location-detail-icon">
              <img src={locationIcon} alt="" width={25} height={25} />
            </div>
            <div className="location-detail-content">
              <h3>{t('contact.location.mainHeadquarters')}</h3>
              <p>
                {t('contact.location.addressLine1')}
                <br />
                {t('contact.location.addressLine2')}
                <br />
                {t('contact.location.addressLine3')}
                <br />
                <strong>{t('contact.location.operatesNationwide')}</strong>
              </p>
            </div>
          </article>

          <div className="location-details-divider" aria-hidden="true" />

          {/* HORARIO */}
          <article className="location-detail">
            <div className="location-detail-icon">
              <img src={clock} alt="" width={22} height={22} />
            </div>
            <div className="location-detail-content">
              <h3>{t('contact.location.scheduleTitle')}</h3>
              <p>
                {t('contact.location.scheduleDays')}
                <br />
                {t('contact.location.scheduleHours')}
                <br />
                {t('contact.location.scheduleSaturday')}
              </p>
            </div>
          </article>
        </div>

        {/* COBERTURA */}
        <div className="location-features">
          <div className="location-feature">
            <div className="feature-symbol">
              <img src={mapa} alt="" />
            </div>
            <div>
              <strong>{t('contact.features.feat1.title')}</strong>
              <span>{t('contact.features.feat1.sub')}</span>
              <small>
                {t('contact.features.feat1.detailLine1')}<br />
                {t('contact.features.feat1.detailLine2')}
              </small>
            </div>
          </div>

          <div className="location-feature">
            <div className="feature-symbol">
              <img src={mundo} alt="" width={60} height={60} />
            </div>
            <div>
              <strong>{t('contact.features.feat2.title')}</strong>
              <span>{t('contact.features.feat2.sub')}</span>
              <small>
                {t('contact.features.feat2.detailLine1')}<br />
                {t('contact.features.feat2.detailLine2')}
              </small>
            </div>
          </div>

          <div className="location-feature">
            <div className="feature-symbol">
              <img src={soluciones} alt="" width={70} height={70}/>
            </div>
            <div>
              <strong>{t('contact.features.feat3.title')}</strong>
              <span>{t('contact.features.feat3.sub')}</span>
              <small>
                {t('contact.features.feat3.detailLine1')}<br />
                {t('contact.features.feat3.detailLine2')}
              </small>
            </div>
          </div>

          <div className="location-feature">
            <div className="feature-symbol">
              <img src={hoja} alt="" width={50} height={50}/>
            </div>
            <div>
              <strong>{t('contact.features.feat4.title')}</strong>
              <span>{t('contact.features.feat4.sub')}</span>
              <small>
                {t('contact.features.feat4.detailLine1')}<br />
                {t('contact.features.feat4.detailLine2')}
              </small>
            </div>
          </div>
        </div>        
      </section>
    </main>
  );
}