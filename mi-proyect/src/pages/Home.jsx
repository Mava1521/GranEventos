import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../styles/Home.css';
import GranEventosVideo from '../assets/graneventos(2).mov';
import Sesion2Home from '../assets/Sesion2Home2.jpg';
import Energia from '../assets/Sesion2Energia.jpg';
import Tecnologia from '../assets/Nature.png';
import Experiencias from '../assets/Experience.png';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      {/* HERO SECTION */}
      <section className="hero-section">
        <video className="hero-video-bg" src={GranEventosVideo} autoPlay loop muted playsInline />
        <div className="hero-overlay"></div>

        <div className="container hero-container">
          <div className="hero-content-left">
            <h1 className="hero-title-oswald">
              {t('home.hero.titlePart1')} <span className="text-gold">{t('home.hero.titleGold1')}</span> <br />
              {t('home.hero.titlePart2')} <br />
              {t('home.hero.titlePart3')}<span className="text-gold">.</span>
            </h1>
            <div className="gold-line"></div>
            <p className="hero-subtext-left">
              {t('home.hero.subtext')}
            </p>
            <Link to="/servicios" className="btn-cta-gold">
              {t('home.hero.cta')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* MIDDLE SECTION: GRAN EVENTOS + SETIE */}
      <section
        className="ge-home-story"
        aria-labelledby="ge-home-story-title"
      >
        {/* IMAGEN DE FONDO */}
        <img
          className="ge-home-story-image"
          src={Sesion2Home}
          alt=""
          aria-hidden="true"
        />

        {/* CAPA OSCURA */}
        <div
          className="ge-home-story-overlay"
          aria-hidden="true"
        />

        {/* CONTENIDO PRINCIPAL */}
        <div className="ge-home-story-content">
          {/* IDENTIFICADOR */}
          <p className="ge-home-story-kicker">
            {t('home.story.kicker')}
          </p>

          {/* TITULAR */}
          <h2
            id="ge-home-story-title"
            className="ge-home-story-title"
          >
            <span className="ge-home-story-title-light">
              {t('home.story.titleLight1')}
            </span>{' '}

            <span className="ge-home-story-title-yellow">
              {t('home.story.titleYellow')}{' '}
              <span className="ge-home-story-title-split">
                {t('home.story.titleSplit')}
              </span>{' '}
            </span>

            <span className="ge-home-story-title-green">
              {t('home.story.titleGreen')}
            </span>{' '}

            <span className="ge-home-story-title-light ge-home-story-title-last">
              {t('home.story.titleLight2')}
            </span>
          </h2>

          {/* LÍNEA DECORATIVA */}
          <span
            className="ge-home-story-line"
            aria-hidden="true"
          />

          {/* DESCRIPCIÓN */}
          <p className="ge-home-story-description">
            {t('home.story.description')}
          </p>
        </div>

        {/* MENSAJE LATERAL */}
        <aside
          className="ge-home-story-side"
          aria-label={t('home.story.sideMessagePart1')}
        >
          <div className="ge-home-story-side-list">
            <span>{t('home.story.sideList.events')}</span>
            <span aria-hidden="true">+</span>
            <span>{t('home.story.sideList.energy')}</span>
            <span aria-hidden="true">+</span>
            <span>{t('home.story.sideList.people')}</span>
            <span aria-hidden="true">+</span>
            <span>{t('home.story.sideList.planet')}</span>
          </div>

          <span
            className="ge-home-story-side-line"
            aria-hidden="true"
          />

          <p className="ge-home-story-side-message">
            {t('home.story.sideMessagePart1')}
            <br />
            {t('home.story.sideMessagePart2')}
            <br />
            {t('home.story.sideMessagePart3')}
          </p>
        </aside>
      </section>

      {/* NUESTRAS FORTALEZAS */}
      <div className="strengths-section-wrapper">
        <section className="strengths-section">
          <div className="container">
            {/* HEADER DE LA SECCIÓN */}
            <div className="strengths-header">
              <div className="strengths-header-main">
                <div className="strengths-label">
                  <span className="strengths-label-line"></span>
                  <span>{t('home.strengths.label')}</span>
                </div>

                <h2 className="strengths-title">
                  {t('home.strengths.titleMain')}
                  <br />
                  {t('home.strengths.titlePreSpan')}<span>{t('home.strengths.titleSpan')}</span>
                </h2>
              </div>

              <div className="strengths-header-description">
                <p>
                  {t('home.strengths.description')}
                </p>
              </div>
            </div>

            {/* CARDS */}
            <div className="strengths-grid">

              {/* CARD 01 */}
              <article className="strength-card strengths-card-gold">
                <div className="strength-card-media">
                  <img src={Experiencias} alt="" width={500} height={300} />
                </div>

                <div className="strength-card-gradient"></div>

                <div className="strength-card-content">
                  <div className="strength-card-top">
                    <div className="strength-number">
                      <span>01</span>
                      <span className="strength-number-line"></span>
                    </div>

                    <span className="strength-card-tag">
                      <span className="text-blue">{t('home.strengths.cards.01.tagBlue')}</span>
                      <br />
                      {t('home.strengths.cards.01.tagText')}
                    </span>
                  </div>

                  <div className="strength-card-bottom">
                    <h3><span className="text-blue">{t('home.strengths.cards.01.title')}</span></h3>

                    <p>
                      {t('home.strengths.cards.01.description')}
                    </p>

                    <Link to="/experiencias" className="strength-card-link">
                      <span>{t('home.strengths.cards.01.cta')}</span>

                      <span className="strength-arrow">
                        <ArrowRight size={20} strokeWidth={1.8} />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>

              {/* CARD 02 */}
              <article className="strength-card strengths-card-green">
                <div className="strength-card-media">
                  <img src={Energia} alt="" width={500} height={300} />
                </div>

                <div className="strength-card-gradient"></div>

                <div className="strength-card-content">
                  <div className="strength-card-top">
                    <div className="strength-number">
                      <span>02</span>
                      <span className="strength-number-line2"></span>
                    </div>

                    <span className="strength-card-tag">
                      <span className="text-gold">{t('home.strengths.cards.02.tagGold')}</span>
                      <br />
                      {t('home.strengths.cards.02.tagText')}
                    </span>
                  </div>

                  <div className="strength-card-bottom">
                    <h3><span className="text-gold">{t('home.strengths.cards.02.title')}</span></h3>

                    <p>
                      {t('home.strengths.cards.02.description')}
                    </p>

                    <Link to="/energia" className="strength-card-link2">
                      <span>{t('home.strengths.cards.02.cta')}</span>

                      <span className="strength-arrow">
                        <ArrowRight size={20} strokeWidth={1.8} />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>

              {/* CARD 03 */}
              <article className="strength-card strengths-card-green">
                <div className="strength-card-media">
                  <img src={Tecnologia} alt="" width={500} height={300} />
                </div>

                <div className="strength-card-gradient"></div>

                <div className="strength-card-content">
                  <div className="strength-card-top">
                    <div className="strength-number">
                      <span>03</span>
                      <span className="strength-number-line"></span>
                    </div>

                    <span className="strength-card-tag">
                      <span className="green-point">{t('home.strengths.cards.03.tagGreen')}</span>
                      <br />
                      {t('home.strengths.cards.03.tagText')}
                    </span>
                  </div>

                  <div className="strength-card-bottom">
                    <h3><span className="green-point">{t('home.strengths.cards.03.title')}</span></h3>

                    <p>
                      {t('home.strengths.cards.03.description')}
                    </p>

                    <Link to="/tecnologia" className="strength-card-link">
                      <span>{t('home.strengths.cards.03.cta')}</span>

                      <span className="strength-arrow">
                        <ArrowRight size={20} strokeWidth={1.8} />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}