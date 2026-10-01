import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Projects.css';

import festivalImg from '../assets/Festival.png';
import conciertosImg from '../assets/Concert.png';
import corporativosImg from '../assets/Conferens.png';
import teamImg from '../assets/FooterProyect.jpg';
import HeroProyect from '../assets/HeroProyect.jpg';

export default function Proyects() {
  const { t } = useTranslation();

  return (
    <main className="projects-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="projects-hero">

        <div className="projects-hero-content">

          <div className="section-label">
            <span>{t('projects.hero.sectionLabel')}</span>
            <span className="gold-line"></span>
          </div>

          <h1>
            {t('projects.hero.titlePart1')}
            <br />
            {t('projects.hero.titlePart2')}
            <br />
            <span>{t('projects.hero.titlePart3')}</span>
          </h1>

          <p>
            {t('projects.hero.description')}
          </p>

        </div>

        <div className="hero-keywords">
          <span>{t('projects.hero.keywords.ideas')}</span>
          <span>{t('projects.hero.keywords.energy')}</span>
          <span>{t('projects.hero.keywords.people')}</span>
          <span>{t('projects.hero.keywords.experiences')}</span>
          <span>{t('projects.hero.keywords.real')}</span>

          <div className="hero-small-line"></div>
        </div>

        <div className="projects-hero-image">
          <img
            src={HeroProyect}
            alt="Gran Eventos Hero"
          />

          <div className="hero-image-overlay">
            <strong>{t('projects.hero.overlayTitle')}</strong>
            <span>{t('projects.hero.overlaySubtitle')}</span>
          </div>
        </div>

      </section>


      {/* =====================================================
          CATEGORIAS
          ===================================================== */}

      <section className="projects-categories">

        <ProjectCard
          number="01"
          title={t('projects.categories.festivals.title')}
          subtitle={t('projects.categories.festivals.subtitle')}
          description={t('projects.categories.festivals.description')}
          image={festivalImg}
          link="/nuevas-tecnologias/festivales" 
        />

        <ProjectCard
          number="02"
          title={t('projects.categories.concerts.title')}
          subtitle={t('projects.categories.concerts.subtitle')}
          description={t('projects.categories.concerts.description')}
          image={conciertosImg}
          link="/nuevas-tecnologias/conciertos" 
        />

        <ProjectCard
          number="03"
          title={t('projects.categories.corporate.title')}
          subtitle={t('projects.categories.corporate.subtitle')}
          description={t('projects.categories.corporate.description')}
          image={corporativosImg}
          link="/nuevas-tecnologias/corporativos"
        />

      </section>


      {/* =====================================================
          EQUIPO
          ===================================================== */}

      <section className="projects-team">

        <div className="team-image">
          <img
            src={teamImg}
            alt={t('projects.team.imgAlt')}
          />
        </div>

        <div className="team-content">

          <div className="section-label1">
            <span>{t('projects.team.label')}</span>
            <span className="gold-line"></span>
          </div>

          <h2>
            {t('projects.team.titlePart1')}
            <br />
            {t('projects.team.titlePart2')}
          </h2>

          <p>
            {t('projects.team.description')}
          </p>

          <Link to="/contacto" className="project-button">
            <span>{t('projects.team.ctaButton')}</span>
            <span className="button-arrow">→</span>
          </Link>

        </div>

      </section>


      {/* =====================================================
          ESTADISTICAS
          ===================================================== */}

      <section className="projects-stats">

        <div className="stats-intro">
          <span>{t('projects.stats.introLabel1')}</span>
          <span>{t('projects.stats.introLabel2')}</span>

          <div className="gold-line"></div>
        </div>

        <Stat
          number="+300"
          text={t('projects.stats.eventsDone')}
        />

        <Stat
          number="+4M"
          text={t('projects.stats.peopleConnected')}
        />

        <Stat
          number="+12"
          text={t('projects.stats.yearsExperience')}
        />

        <Stat
          number={t('projects.stats.purposeNumber')}
          text={t('projects.stats.purposeText')}
        />

      </section>

    </main>
  );
}


/* =========================================================
   CARD
   ========================================================= */

function ProjectCard({
  number,
  title,
  subtitle,
  description,
  image,
  link,
}) {
  const { t } = useTranslation();

  return (
    <article className="project-card">

      <div className="project-card-header">

        <div className="project-number">
          <span>{number}</span>
          <span className="gold-line"></span>
        </div>

        <Link to={link} className="circle-arrow" aria-label={title}>
          →
        </Link>

      </div>

      <h2>{title}</h2>

      <div className="project-card-image">
        <img
          src={image}
          alt={title}
        />
      </div>

      <h3>{subtitle}</h3>

      <p>{description}</p>

      <div className="card-bottom-line"></div>

      <Link to={link} className="view-project">
        <span>{t('projects.categories.viewProjects')}</span>
        <span>→</span>
      </Link>

    </article>
  );
}


/* =========================================================
   STAT
   ========================================================= */

function Stat({ number, text }) {
  return (
    <div className="project-stat">

      <strong>{number}</strong>

      <span>{text}</span>

    </div>
  );
}