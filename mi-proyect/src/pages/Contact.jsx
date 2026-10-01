import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

export default function Contact() {
  const { t } = useTranslation();
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
      setStatus(t('contact.form.privacyError'));
      return;
    }

    setStatus(t('contact.form.successMessage'));
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
            {t('contact.hero.kicker')}
          </div>

          <h1>
            {t('contact.hero.title1')}{' '}
            <strong>{t('contact.hero.title2')}</strong>
          </h1>

          <div className="contact-yellow-line" />

          <p>{t('contact.hero.description')}</p>
        </div>

        <div className="contact-hero-image">
          <img
            src={ImageHero}
            alt={t('contact.hero.alt')}
          />
          <div className="contact-lightning" />
        </div>

        <div className="contact-hero-side">
          <span>{t('contact.hero.side.events')}</span>
          <span>{t('contact.hero.side.industry')}</span>
          <span>{t('contact.hero.side.communities')}</span>
          <span>{t('contact.hero.side.future')}</span>
          <div />
        </div>
      </section>

      {/* =========================================
          CONTACT MAIN
      ========================================= */}
      <section className="contact-main">

        {/* FORMULARIO */}
        <div className="contact-form-column">
          <div className="contact-kicker dark">
            <span />
            {t('contact.form.kicker')}
          </div>

          <h2>
            {t('contact.form.title1')} <small>{t('contact.form.title2')}</small>
          </h2>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
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

            <button
              type="submit"
              className="contact-submit"
            >
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

        {/* CANALES DE CONTACTO */}
        <aside className="contact-info">
          <div className="contact-kicker dark">
            <span />
            {t('contact.channels.kicker')}
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
              <h3>{t('contact.channels.whatsappTitle')}</h3>
              <p>{t('contact.channels.whatsappDesc')}</p>
            </div>
          </div>

          <div className="contact-channel">
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
          </div>

          <div className="contact-channel">
            <div className="channel-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 3h4l2 5-3 2a14 14 0 0 0 5 5l2-3 5 2v4c0 1-1 2-2 2C11 20 4 13 4 5c0-1 1-2 2-2Z" />
              </svg>
            </div>
            <div>
              <h3>{t('contact.channels.callTitle')}</h3>
              <p>+57 350 500 3388</p>
            </div>
          </div>
        </aside>
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
              <img src={location} alt="" width={25} height={25} />
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

        {/* ALCANCE INTERNACIONAL */}
        <div className="location-international">
          <div className="international-copy">
            <div className="contact-kicker dark">
              <span />
              {t('contact.international.kicker')}
            </div>

            <h2>
              {t('contact.international.title1')}
              <br />
              {t('contact.international.title2')}
              <br />
              {t('contact.international.title3')}
            </h2>

            <div className="location-yellow-line" />

            <p>{t('contact.international.desc')}</p>
          </div>

          <div className="world-map">
            <img src={MundialMap} alt="" width={900} height={600}/>
          </div>
        </div>

        {/* CTA POSIBILIDADES */}
        <div className="possibilities-card">
          <div className="possibilities-icon">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="32" cy="32" r="27" />
              <ellipse cx="32" cy="32" rx="13" ry="27" />
              <path d="M5 32h54" />
              <path d="M9 20h46" />
              <path d="M9 44h46" />
            </svg>
          </div>

          <div className="possibilities-divider" aria-hidden="true" />

          <div className="possibilities-text">
            <span>{t('contact.possibilities.sub')}</span>
            <h3>
              {t('contact.possibilities.title1')}
              <strong>{t('contact.possibilities.title2')}</strong>
            </h3>
          </div>

          <div className="possibilities-arrow">
            <svg viewBox="0 0 40 20" aria-hidden="true">
              <path d="M1 10h34" />
              <path d="M28 3l7 7-7 7" />
            </svg>
          </div>
        </div>
      </section>

      {/* =========================================
          TALENT
      ========================================== */}
      <section className="contact-talent">
        <div className="talent-content">
          <div className="contact-kicker dark">
            <span />
            {t('contact.talent.kicker')}
          </div>

          <h2>
            {t('contact.talent.title1')}{' '}
            <strong>{t('contact.talent.title2')}</strong>
          </h2>

          <p>{t('contact.talent.desc')}</p>

          <button className="outline-button">
            {t('contact.talent.btn')}
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
          <span>{t('contact.talent.side.talent')}</span>
          <span>{t('contact.talent.side.ideas')}</span>
          <span>{t('contact.talent.side.energy')}</span>
          <span>{t('contact.talent.side.impact')}</span>
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
            {t('contact.banner.title1')}
            <br />
            {t('contact.banner.title2')}
            <br />
            {t('contact.banner.title3')}
          </h2>
        </div>

        <div className="banner-content">
          <img src={Foto4} alt="" width={600} height={400}/>
        </div>

        <div className="banner-right">
          <span>{t('contact.banner.right.energy')}</span>
          <span>{t('contact.banner.right.people')}</span>
          <span>{t('contact.banner.right.experiences')}</span>
          <span>{t('contact.banner.right.planet')}</span>
        </div>
      </section>
    </main>
  );
}