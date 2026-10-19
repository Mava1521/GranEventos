import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Experiences.css';
import Video from '../assets/graneventos(2).mov';
import FooterExperience from '../assets/FooterProyect.jpg';
import Foto4 from '../assets/FOTO4.jpg';
import Foto6 from '../assets/FOTO6.jpg';
import montaje from '../assets/Logistica.jpg';
import Sesion2Home from '../assets/Sesion2Home.jpg';

function Experiences() {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const processSteps = [
    {
      number: '01',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb preview-icon">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>
        </svg>
      ),
      title: t('experiences.process.steps.step1.title'),
      description: t('experiences.process.steps.step1.description'),
    },
    {
      number: '02',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck-electric preview-icon">
          <path d="M14 19V7a2 2 0 0 0-2-2H9"/><path d="M15 19H9"/><path d="M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14"/><path d="M2 13v5a1 1 0 0 0 1 1h2"/><path d="M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02"/><circle cx="17" cy="19" r="2"/><circle cx="7" cy="19" r="2"/>
        </svg>
      ),
      title: t('experiences.process.steps.step2.title'),
      description: t('experiences.process.steps.step2.description'),
    },
    {
      number: '03',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check preview-icon">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>
        </svg>
      ),
      title: t('experiences.process.steps.step3.title'),
      description: t('experiences.process.steps.step3.description'),
    },
    {
      number: '04',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-group preview-icon">
          <path d="M17 21v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1"/><path d="M19 10h1a2 2 0 012 2v1"/><path d="M5 10H4a2 2 0 00-2 2v1"/><circle cx="12" cy="11" r="3"/><circle cx="18" cy="4" r="2"/><circle cx="6" cy="4" r="2"/>
        </svg>
      ),
      title: t('experiences.process.steps.step4.title'),
      description: t('experiences.process.steps.step4.description'),
    },
    {
      number: '05',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star preview-icon">
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
        </svg>
      ),
      title: t('experiences.process.steps.step5.title'),
      description: t('experiences.process.steps.step5.description'),
    },
  ];

  const experiences = [
    {
      image: montaje,
      duration: '02:24',
      title: t('experiences.gallery.items.item1'),
      location: 'Bogotá, 2024',
    },
    {
      image: Foto6,
      duration: '03:12',
      title: t('experiences.gallery.items.item2'),
      location: 'Bogotá, 2024',
    },
    {
      image: Sesion2Home,
      duration: '02:48',
      title: t('experiences.gallery.items.item3'),
      location: 'Bogotá, 2024',
    },
    {
      image: Foto4,
      duration: '03:36',
      title: t('experiences.gallery.items.item4'),
      location: 'Bogotá, 2024',
    },
  ];

  const handleVideoToggle = async () => {
    if (!videoRef.current) return;

    try {
      if (videoRef.current.paused) {
        await videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('No se pudo reproducir el video:', error);
    }
  };

  return (
    <main className="experiences-page">
      {/* HERO */}
      <section className="experiences-hero">
        <div className="experiences-hero-content">
          <div className="experiences-kicker">
            <span />
            {t('experiences.hero.kicker')}
          </div>

          <h1>
            {t('experiences.hero.title_line1')}
            <br />
            {t('experiences.hero.title_line2')}
            <br />
            <strong>
              {t('experiences.hero.title_line3')}
              <br />
              {t('experiences.hero.title_line4')}
            </strong>
          </h1>

          <div className="experiences-yellow-line" />

          <p>{t('experiences.hero.description')}</p>
        </div>

        <div className="experiences-hero-media">
          <div
            className="media-placeholder"
            aria-label="Video de experiencias de Gran Eventos"
          >
            <video
              ref={videoRef}
              className="experiences-video"
              src={Video}
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />

            <span className="placeholder-label">
              {t('experiences.hero.video_placeholder')}
            </span>

            <button
              type="button"
              className={`play-button ${isPlaying ? 'is-playing' : ''}`}
              onClick={handleVideoToggle}
              aria-label={
                isPlaying
                  ? t('experiences.hero.aria_pause')
                  : t('experiences.hero.aria_play')
              }
            >
              <span />
            </button>

            <div className="video-info">
              <strong>
                {isPlaying
                  ? t('experiences.hero.pause_video')
                  : t('experiences.hero.play_video')}
              </strong>
              <span>03:24</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="experiences-process">
        <div className="section-heading process-heading">
          <div className="heading-copy">
            <div className="experiences-kicker dark">
              <span />
              {t('experiences.process.kicker')}
            </div>

            <h2>
              {t('experiences.process.title_line1')}
              <br />
              <strong>{t('experiences.process.title_line2')}</strong>
            </h2>
          </div>

          <div className="heading-description">
            <p>{t('experiences.process.description')}</p>
          </div>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.number}>
              <div className="process-top">
                <span className="process-number">{step.number}</span>
                <div className="process-icon">
                  <span aria-hidden="true">{step.icon}</span>
                </div>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCES GALLERY */}
      <section className="experiences-gallery">
        <div className="section-heading gallery-heading">
          <div className="heading-copy">
            <div className="experiences-kicker dark">
              <span />
              {t('experiences.gallery.kicker')}
            </div>

            <h2>
              {t('experiences.gallery.title_line1')}
              <br />
              <strong>{t('experiences.gallery.title_line2')}</strong>
            </h2>
          </div>

          <div className="heading-description">
            <p>{t('experiences.gallery.description')}</p>
          </div>

          <div className="gallery-controls">
            <button
              type="button"
              aria-label={t('experiences.gallery.aria_prev')}
            >
              ←
            </button>

            <span>
              <strong>01</strong>
              {' / '}
              04
            </span>

            <button
              type="button"
              aria-label={t('experiences.gallery.aria_next')}
            >
              →
            </button>
          </div>
        </div>

        <div className="experiences-grid">
          {experiences.map((experience, idx) => (
            <article className="experience-card" key={idx}>
              <div className="experience-media">
                {experience.image ? (
                  <img src={experience.image} alt={experience.title} />
                ) : (
                  <div className="experience-placeholder">
                    <span>IMAGEN / VIDEO</span>
                  </div>
                )}
                <span className="experience-duration">{experience.duration}</span>
              </div>

              <div className="experience-card-content">
                <div>
                  <h3>{experience.title}</h3>
                  <p>{experience.location}</p>
                </div>

                <button
                  type="button"
                  aria-label={t('experiences.gallery.aria_view', {
                    title: experience.title,
                  })}
                  className="experience-arrow"
                >
                  →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="experiences-cta">
        <div className="cta-background">
          <img src={FooterExperience} alt="" className="cta-image" />
          <div className="cta-overlay" />
        </div>

        <div className="cta-content">
          <div className="experiences-kicker">
            <span />
            {t('experiences.cta.kicker')}
          </div>

          <h2>
            {t('experiences.cta.title')}
          </h2>
        </div>

        <div className="cta-action">
          <p>{t('experiences.cta.description')}</p>

          <button type="button">
            {t('experiences.cta.button')}
            <span aria-hidden="true"> →</span>
          </button>
        </div>

        <div className="cta-decoration" aria-hidden="true" />
      </section>
    </main>
  );
}

export default Experiences;