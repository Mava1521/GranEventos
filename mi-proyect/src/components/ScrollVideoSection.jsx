import React, { useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next'; // O el hook de traducción que utilices en tu proyecto
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/ScrollVideoSection.css';

gsap.registerPlugin(ScrollTrigger);

/*
 * Evita que ScrollTrigger recalcule todo cuando el navegador
 * móvil muestra/oculta la barra de direcciones durante el
 * scroll (causa muy común de jank en móvil).
 */
ScrollTrigger.config({ ignoreMobileResize: true });

/*
 * Cuánta distancia extra de scroll (en % de la altura de
 * pantalla) dura el "candado" del texto. Súbelo para que la
 * animación se sienta más larga/lenta.
 */
const PIN_DISTANCE_VH = 140;

export default function ScrollVideoSection({ videoSrc }) {
  const { t } = useTranslation();

  const textSectionRef = useRef(null);
  const progressFillRef = useRef(null);
  const wordRefs = useRef([]);

  const videoSectionRef = useRef(null);
  const videoCardRef = useRef(null);
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);

  // Obtenemos el texto traducido desde el archivo JSON (ej: history.scrollVideo.text)
  const translatedText = t('history.scrollVideo.text', {
    defaultValue: 'WHAT IS GRAN EVENTOS? MORE THAN 30 YEARS CREATING IMMENSE EXPERIENCES DRIVEN BY THE ENERGY OF OUR TEAM'
  });

  const WORDS = translatedText.split(' ');

  /*
   * Palabra clave para el cambio de color adaptada al idioma:
   * En español busca 'EXPERIENCIAS', en inglés 'EXPERIENCES'.
   */
  const SPLIT_WORD = t('history.scrollVideo.splitWord', { defaultValue: 'EXPERIENCES' });
  const SPLIT_INDEX = WORDS.findIndex(
    (word) => word.replace(/[^a-zA-ZáéíóúÁÉÍÓÚ]/g, '').toUpperCase() === SPLIT_WORD
  );

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    /*
     * Con reduced-motion no creamos ningún ScrollTrigger: se
     * muestra todo listo desde el principio, sin pin ni
     * animación de scroll.
     */
    if (mediaQuery.matches) {
      wordRefs.current.forEach((el) => {
        if (el) el.style.opacity = '1';
      });
      if (progressFillRef.current) {
        progressFillRef.current.style.transform = 'scaleX(1)';
      }
      if (videoCardRef.current) {
        videoCardRef.current.style.width = '100%';
        videoCardRef.current.style.height = '100%';
        videoCardRef.current.style.borderRadius = '0px';
      }
      return undefined;
    }

    /*
     * gsap.context() agrupa todo lo creado dentro para poder
     * revertirlo de un solo golpe al desmontar el componente
     * (esencial en una SPA con React Router).
     */
    const ctx = gsap.context(() => {
      /* =====================================================
         TEXTO — se "clava" en pantalla mientras revela
         las palabras, sincronizado con la barra de progreso.
         ===================================================== */
      gsap.timeline({
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: 'top top',
          end: () =>
            '+=' + (PIN_DISTANCE_VH / 100) * window.innerHeight,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressFillRef.current) {
              progressFillRef.current.style.transform =
                `scaleX(${self.progress})`;
            }
          },
        },
      }).to(wordRefs.current.filter(Boolean), {
        opacity: 1,
        stagger: 0.06,
        ease: 'none',
      });

      /* =====================================================
         VIDEO — NO se bloquea: simplemente crece hasta
         ocupar toda la pantalla mientras scrolleas con
         normalidad a través de él.
         ===================================================== */
      gsap.set(videoCardRef.current, {
        width: '72%',
        height: '56%',
        borderRadius: '28px',
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: videoSectionRef.current,
          start: 'top 85%',
          end: 'top 10%',
          scrub: 0.6,
        },
      }).to(videoCardRef.current, {
        width: '100%',
        height: '100%',
        borderRadius: '0px',
        ease: 'none',
      });

      /* Reproducir/pausar el video solo cuando es visible */
      ScrollTrigger.create({
        trigger: videoSectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) => {
          if (!videoRef.current) return;
          if (self.isActive) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        },
      });
    });

    return () => ctx.revert();
  }, [translatedText]); // Se vuelve a recalcular si cambia el idioma

  const toggleSound = () => {
    if (!videoRef.current) return;

    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <>
      {/* =========================================
          TEXTO (se pinea mientras revela)
      ========================================== */}
      <section
        ref={textSectionRef}
        className="scroll-reveal-section"
      >
        <div
          className="scroll-progress-track"
          role="progressbar"
          aria-label={t('history.scrollVideo.ariaProgress', 'Progreso de la animación')}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            ref={progressFillRef}
            className="scroll-progress-fill"
          />
        </div>

        <div className="scroll-text-content">

          <h2 className="scroll-reveal-text">
            {WORDS.map((word, index) => {
              let colorClass = 'word-yellow';
              if (index === SPLIT_INDEX) colorClass = 'word-split';
              else if (index > SPLIT_INDEX && SPLIT_INDEX !== -1) colorClass = 'word-green';

              return (
                <span
                  key={`${word}-${index}`}
                  ref={(el) => {
                    wordRefs.current[index] = el;
                  }}
                  className={`word ${colorClass}`}
                >
                  {word}{' '}
                </span>
              );
            })}
          </h2>
        </div>
      </section>

      {/* =========================================
          VIDEO (crece hasta pantalla completa)
      ========================================== */}
      <section
        ref={videoSectionRef}
        className="scroll-video-section"
        aria-label={t('history.scrollVideo.ariaVideo', 'Video institucional de Gran Eventos')}
      >
        <div ref={videoCardRef} className="scroll-video-card">
          <video
            ref={videoRef}
            src={videoSrc}
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            className="scroll-video"
          />

          <div className="scroll-video-overlay" />

          <button
            type="button"
            className="scroll-video-sound-toggle"
            onClick={toggleSound}
            aria-pressed={!isMuted}
          >
            {isMuted 
              ? `🔇 ${t('history.scrollVideo.soundActivate', 'Activar sonido')}` 
              : `🔊 ${t('history.scrollVideo.soundMute', 'Silenciar')}`}
          </button>

          <span className="scroll-video-label">
            {t('history.scrollVideo.brandLabel', 'GRAN EVENTOS')}
          </span>
        </div>
      </section>
    </>
  );
}