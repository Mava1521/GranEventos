import { useState } from 'react';
import { Leaf, Zap, Users, Globe, CalendarDays, ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../styles/Sustainability.css';

import SetieLogo from '../assets/LOGOSGTIE.png';
import HeroBg from '../assets/FondoSETIE.jpeg';

// Imágenes adicionales
import PurposeBg from '../assets/FOTO7.jpg';
import EventsBg from '../assets/Card1.jpg';
import IndustryBg from '../assets/card2.jpg';
import ScenarioBg from '../assets/card3.jpg';
import CommitmentBg from '../assets/Lush.png';
import PanelSolar from '../assets/Nature.png';
import Renobable from '../assets/Renobable.png';
import Carga from '../assets/Carga.jpg';

export default function Sustainability() {
  const { t } = useTranslation();
  const [activeNews, setActiveNews] = useState(0);

  
  const newsItems = [
      {
        id: 'solar-energy',
        category: t('sustainability.news.solar.category'),
        date: t('sustainability.news.solar.date'),
        title: t('sustainability.news.solar.title'),
        description: t('sustainability.news.solar.description'),
        image: PanelSolar,
        imageAlt: t('sustainability.news.solar.imageAlt'),
        href: '/sostenibilidad/noticias/energia-solar',
      },
      {
        id: 'battery-storage',
        category: t('sustainability.news.batteries.category'),
        date: t('sustainability.news.batteries.date'),
        title: t('sustainability.news.batteries.title'),
        description: t('sustainability.news.batteries.description'),
        image: Carga,
        imageAlt: t('sustainability.news.batteries.imageAlt'),
        href: '/sostenibilidad/noticias/almacenamiento-baterias',
      },
      {
        id: 'clean-energy-trends-2026',
        category: t('sustainability.news.trends.category'),
        date: t('sustainability.news.trends.date'),
        title: t('sustainability.news.trends.title'),
        description: t('sustainability.news.trends.description'),
        image: Renobable,
        imageAlt: t('sustainability.news.trends.imageAlt'),
        href: '/sostenibilidad/noticias/tendencias-energia-limpia-2026',
      },
    ];


  const currentNews = newsItems[activeNews];

  const showPreviousNews = () => {
    setActiveNews((current) =>
      (current - 1 + newsItems.length) % newsItems.length
    );
  };

  const showNextNews = () => {
    setActiveNews((current) =>
      (current + 1) % newsItems.length
    );
  };

  return (
    <main className="sustainability-page">

      {/* =========================
          HERO
      ========================== */}
      <section className="sust-hero" aria-label={t('sustainability.hero.ariaLabel')}>
        <img
          src={HeroBg}
          alt={t('sustainability.hero.altBg')}
          className="sust-hero-bg"
        />

        <div className="sust-hero-overlay"></div>

        <div className="sust-hero-content">
          <div className="hero-top-right">
            <span>{t('sustainability.hero.topRight.line1')}</span>
            <span>{t('sustainability.hero.topRight.line2')}</span>
            <span className="hero-green-line"></span>
          </div>

          <div className="hero-main-brand">
            <img
              src={SetieLogo}
              alt={t('sustainability.hero.altLogo')}
              className="setie-logo-img"
            />
          </div>

          <div className="hero-bottom-left">
            <span className="hero-green-line"></span>
            <h2>{t('sustainability.hero.bottomLeft.title')}</h2>
            <p>
              {t('sustainability.hero.bottomLeft.pLine1')}<br />
              {t('sustainability.hero.bottomLeft.pLine2')}
            </p>
          </div>
        </div>
      </section>


      {/* =========================
          ESTADÍSTICAS
      ========================== */}
      <section className="sust-stats-bar" aria-label={t('sustainability.stats.ariaLabel')}>
        <div className="sust-section-inner stats-grid">

          <div className="stat-item">
            <span className="stat-number">{t('sustainability.stats.projectsNumber')}</span>
            <span className="stat-label">
              {t('sustainability.stats.projectsLabel')}
            </span>
          </div>

          <div className="stat-item">
            <span className="stat-number">{t('sustainability.stats.co2Number')}</span>
            <span className="stat-label">
              {t('sustainability.stats.co2Label')}
            </span>
          </div>

          <div className="stat-item">
            <span className="stat-number">{t('sustainability.stats.committedNumber')}</span>
            <span className="stat-label">
              {t('sustainability.stats.committedLabelLine1')}<br />
              {t('sustainability.stats.committedLabelLine2')}
            </span>
          </div>

          <div className="stat-item">
            <span className="stat-number">{t('sustainability.stats.peopleNumber')}</span>
            <span className="stat-label">
              {t('sustainability.stats.peopleLabelLine1')}<br />
              {t('sustainability.stats.peopleLabelLine2')}
            </span>
          </div>

        </div>
      </section>


      {/* =========================
          PROPÓSITO
      ========================== */}
      <section className="sust-purpose-wrapper">
        <div className="sust-section-inner sust-purpose">

          <div className="purpose-text">
            <span className="section-subtitle">
              {t('sustainability.purpose.subtitle')}
            </span>

            <h2 className="section-title">
              {t('sustainability.purpose.titleLine1')}<br />
              <span>{t('sustainability.purpose.titleHighlight')}</span><br />
              {t('sustainability.purpose.titleLine2')}
            </h2>

            <p className="purpose-description">
              {t('sustainability.purpose.description', { brand: 'SETIE' })}
            </p>
          </div>

          <div
            className="purpose-card"
            style={{ backgroundImage: `url(${PurposeBg})` }}
          >
            <div className="image-overlay"></div>
            <div className="card-overlay-content">
              <h3>
                {t('sustainability.purpose.cardTitleLine1')}<br />
                {t('sustainability.purpose.cardTitleLine2')}<br />
                <span>
                  {t('sustainability.purpose.cardHighlightLine1')}<br />
                  {t('sustainability.purpose.cardHighlightLine2')}
                </span>
              </h3>
              <span className="yellow-line"></span>
            </div>
          </div>

        </div>
      </section>


      {/* =========================
          PILARES
      ========================== */}
      <section className="sust-features-wrapper">
        <div className="sust-section-inner sust-features">

          <div className="feature-item">
            <Leaf className="feature-icon" size={34} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <h4>{t('sustainability.pillars.emissions.title')}</h4>
              <p>
                {t('sustainability.pillars.emissions.description')}
              </p>
            </div>
          </div>

          <div className="feature-item">
            <Zap className="feature-icon1" size={34} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <h4>{t('sustainability.pillars.efficiency.title')}</h4>
              <p>
                {t('sustainability.pillars.efficiency.description')}
              </p>
            </div>
          </div>

          <div className="feature-item">
            <Users className="feature-icon1" size={34} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <h4>{t('sustainability.pillars.events.title')}</h4>
              <p>
                {t('sustainability.pillars.events.description')}
              </p>
            </div>
          </div>

          <div className="feature-item">
            <Globe className="feature-icon" size={34} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <h4>{t('sustainability.pillars.planet.title')}</h4>
              <p>
                {t('sustainability.pillars.planet.description')}
              </p>
            </div>
          </div>

        </div>
      </section>

      
      {/* =========================
          NOTICIAS DE SOSTENIBILIDAD
      ========================== */}
      <section
        className="sust-news-wrapper"
        aria-labelledby="sust-news-title"
      >
        <div className="sust-section-inner sust-news">

          <header className="sust-news-heading">
            <div className="sust-news-heading-main">
              <span className="sust-news-eyebrow">
                <span className="sust-news-slash" aria-hidden="true" />
                {t('sustainability.news.eyebrow')}
              </span>

              <h2 id="sust-news-title">
                {t('sustainability.news.headingLine1')}
                <span>
                  {t('sustainability.news.headingLine2')}
                </span>
              </h2>

              <p>
                {t('sustainability.news.intro')}
              </p>

              <span
                className="sust-news-green-line"
                aria-hidden="true"
              />
            </div>

            <p className="sust-news-side-note">
              {t('sustainability.news.sideNote')}
              <span aria-hidden="true" />
            </p>
          </header>

          <article
            className="sust-news-banner"
            aria-label={currentNews.title}
          >
            <div className="sust-news-info" key={currentNews.id}>
              <span className="sust-news-category">
                <Leaf size={19} aria-hidden="true" />
                {currentNews.category}
              </span>

              <span className="sust-news-date">
                <CalendarDays size={18} aria-hidden="true" />
                <time>{currentNews.date}</time>
              </span>

              <h3>{currentNews.title}</h3>

              <p className="sust-news-description">
                {currentNews.description}
              </p>

              <a
                className="sust-news-link"
                href={currentNews.href}
              >
                {t('sustainability.news.readMore')}
                <ArrowRight size={21} aria-hidden="true" />
              </a>
            </div>

            <div className="sust-news-visual">
              <img
                src={currentNews.image}
                alt={currentNews.imageAlt}
                loading="lazy"
                decoding="async"
              />

              <div
                className="sust-news-image-shade"
                aria-hidden="true"
              />

              <div
                className="sust-news-accent"
                aria-hidden="true"
              />
            </div>
          </article>

          <div className="sust-news-controls">
            <div
              className="sust-news-indicators"
              role="group"
              aria-label={t('sustainability.news.navigation')}
            >
              {newsItems.map((news, index) => (
                <button
                  key={news.id}
                  type="button"
                  className={`sust-news-indicator ${
                    index === activeNews ? 'is-active' : ''
                  }`}
                  aria-label={`${t('sustainability.news.goTo')} ${index + 1}`}
                  aria-current={
                    index === activeNews ? 'true' : undefined
                  }
                  onClick={() => setActiveNews(index)}
                />
              ))}
            </div>

            <div className="sust-news-arrows">
              <button
                type="button"
                onClick={showPreviousNews}
                disabled={newsItems.length < 2}
                aria-label={t('sustainability.news.previous')}
              >
                <ArrowLeft size={20} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={showNextNews}
                disabled={newsItems.length < 2}
                aria-label={t('sustainability.news.next')}
              >
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>

        </div>
      </section>



      {/* =========================
          CASOS DE USO
      ========================== */}
      <section className="sust-usecases-wrapper">
        <div className="sust-section-inner sust-usecases">

          <article
            className="usecase-card"
            style={{ backgroundImage: `url(${EventsBg})` }}
          >
            <div className="usecase-overlay"></div>
            <div className="usecase-content">
              <span className="tag-category">{t('sustainability.useCases.events.category')}</span>
              <span className="hero-green-line"></span>
              <p className="usecase-title">
                {t('sustainability.useCases.events.titleLine1')}<br />
                {t('sustainability.useCases.events.titleLine2')}
              </p>
            </div>
          </article>

          <article
            className="usecase-card"
            style={{ backgroundImage: `url(${IndustryBg})` }}
          >
            <div className="usecase-overlay"></div>
            <div className="usecase-content">
              <span className="tag-category">{t('sustainability.useCases.industry.category')}</span>
              <span className="hero-green-line"></span>
              <p className="usecase-title">
                {t('sustainability.useCases.industry.titleLine1')}<br />
                {t('sustainability.useCases.industry.titleLine2')}<br />
                {t('sustainability.useCases.industry.titleLine3')}
              </p>
            </div>
          </article>

          <article
            className="usecase-card"
            style={{ backgroundImage: `url(${ScenarioBg})` }}
          >
            <div className="usecase-overlay"></div>
            <div className="usecase-content">
              <span className="tag-category">{t('sustainability.useCases.scenarios.category')}</span>
              <span className="hero-green-line"></span>
              <p className="usecase-title">
                {t('sustainability.useCases.scenarios.titleLine1')}<br />
                {t('sustainability.useCases.scenarios.titleLine2')}
              </p>
            </div>
          </article>

        </div>
      </section>


      {/* =========================
          COMPROMISO
      ========================== */}
      <section
        className="sust-commitment"
        style={{ backgroundImage: `url(${CommitmentBg})` }}
      >
        <div className="commitment-overlay"></div>
        <div className="sust-section-inner commitment-content">

          <div className="commitment-left">
            <span className="section-subtitle">
              {t('sustainability.commitment.subtitle')}
            </span>
            <span className="hero-green-line"></span>

            <h2>
              {t('sustainability.commitment.titleLine1')}<br />
              <span>{t('sustainability.commitment.titleHighlight')}</span>
            </h2>
          </div>

          <div className="commitment-right">
            <p>
              {t('sustainability.commitment.description')}
            </p>

            <div className="commitment-keywords">
              <span>{t('sustainability.commitment.keywords.energy')}</span>
              <span className="dot">•</span>
              <span>{t('sustainability.commitment.keywords.people')}</span>
              <span className="dot">•</span>
              <span>{t('sustainability.commitment.keywords.experiences')}</span>
              <span className="dot">•</span>
              <span>{t('sustainability.commitment.keywords.planet')}</span>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}