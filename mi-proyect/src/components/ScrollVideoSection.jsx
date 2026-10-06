import React, { useLayoutEffect, useRef, useState } from 'react';
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

const TEXT =
  '¿QUÉ ES GRAN EVENTOS? MÁS DE 30 AÑOS CREANDO EXPERIENCIAS INMENSAS BAJO LA ENERGÍA DE NUESTRO EQUIPO';

const WORDS = TEXT.split(' ');

/*
 * Palabra donde ocurre el cambio de color: todo lo anterior
 * sale amarillo, esta palabra lleva el degradado interno
 * amarillo→verde, y todo lo posterior sale verde.
 */
const SPLIT_WORD = 'EXPERIENCIAS';
const SPLIT_INDEX = WORDS.indexOf(SPLIT_WORD);

/*
 * Cuánta distancia extra de scroll (en % de la altura de
 * pantalla) dura el "candado" del texto. Súbelo para que la
 * animación se sienta más larga/lenta.
 */
const PIN_DISTANCE_VH = 140;

export default function ScrollVideoSection({ videoSrc }) {
  const textSectionRef = useRef(null);
  const progressFillRef = useRef(null);
  const wordRefs = useRef([]);

  const videoSectionRef = useRef(null);
  const videoCardRef = useRef(null);
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);

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
     * (esencial en una SPA con React Router: si no limpiamos,
     * quedan ScrollTriggers "fantasma" afectando otras páginas).
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
         normalidad a través de él. Así nunca se "corta" a
         medias ni se ve junto al footer.
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
  }, []);

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
          aria-label="Progreso de la animación"
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            ref={progressFillRef}
            className="scroll-progress-fill"
          />
        </div>

        <div className="scroll-text-content">
          <span className="scroll-eyebrow">EL IMPACTO</span>

          <h2 className="scroll-reveal-text">
            {WORDS.map((word, index) => {
              let colorClass = 'word-yellow';
              if (index === SPLIT_INDEX) colorClass = 'word-split';
              else if (index > SPLIT_INDEX) colorClass = 'word-green';

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
        aria-label="Video institucional de Gran Eventos"
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
            {isMuted ? '🔇 Activar sonido' : '🔊 Silenciar'}
          </button>

          <span className="scroll-video-label">
            GRAN EVENTOS
          </span>
        </div>
      </section>
    </>
  );
}