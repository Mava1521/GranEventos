import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
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
 * =========================================================
 * DURACIÓN DE CADA FASE DEL "CANDADO"
 * =========================================================
 * Valores en % de la altura de pantalla (vh) de scroll.
 * Toda la escena queda fija mientras se recorre la suma.
 *
 *   text    → letras translúcidas → rellenas (barra 0 → 100%)
 *   hold    → pausa breve con el texto completo legible
 *   swap    → las letras desaparecen y entra el video
 *   preview → el video queda en pantalla (el "preview")
 */
const PHASE_VH = {
  text: 120,
  hold: 12,
  swap: 30,
  preview: 50,
};

const TOTAL_VH =
  PHASE_VH.text + PHASE_VH.hold + PHASE_VH.swap + PHASE_VH.preview;

/* El video empieza a reproducirse cuando ya se asoma (35% del swap) */
const VIDEO_START_PROGRESS =
  (PHASE_VH.text + PHASE_VH.hold + PHASE_VH.swap * 0.35) / TOTAL_VH;

/* El video se revela como una "card" que crece hasta pantalla completa */
const CLIP_HIDDEN = 'inset(22% 14% 22% 14% round 28px)';
const CLIP_FULL = 'inset(0% 0% 0% 0% round 0px)';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/* Compara palabras ignorando puntuación, acentos de apertura, etc. */
function normalizeWord(word) {
  return word.replace(/[^\p{L}\p{N}]/gu, '').toUpperCase();
}

export default function ScrollVideoSection({ videoSrc }) {
  const { t } = useTranslation();

  const stageRef = useRef(null);
  const textRef = useRef(null);
  const progressTrackRef = useRef(null);
  const progressFillRef = useRef(null);
  const wordRefs = useRef([]);
  const videoLayerRef = useRef(null);
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  /*
   * Estado de reproducción en un ref (no en state): se lee y
   * escribe desde callbacks de scroll / IntersectionObserver
   * y no debe provocar re-renders.
   */
  const playbackRef = useRef({
    inVideoPhase: false,
    stageVisible: false,
    userPaused: false,
  });

  /* ---------------------------------------------------------
     TEXTO TRADUCIDO
     --------------------------------------------------------- */
  const translatedText = t('history.scrollVideo.text', {
    defaultValue:
      'WHAT IS GRAN EVENTOS? MORE THAN 30 YEARS CREATING IMMENSE EXPERIENCES DRIVEN BY THE ENERGY OF OUR TEAM',
  });

  const words = translatedText.split(' ');

  /*
   * Palabra donde ocurre el cambio de color según el idioma
   * (ES: 'EXPERIENCIAS', EN: 'EXPERIENCES').
   */
  const splitWord = t('history.scrollVideo.splitWord', {
    defaultValue: 'EXPERIENCES',
  }).toUpperCase();

  const splitIndex = words.findIndex(
    (word) => normalizeWord(word) === splitWord
  );

  /* ---------------------------------------------------------
     ACCESIBILIDAD: escuchar cambios de prefers-reduced-motion
     --------------------------------------------------------- */
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const handleChange = (event) => setReducedMotion(event.matches);

    mediaQuery.addEventListener('change', handleChange);

    return () =>
      mediaQuery.removeEventListener('change', handleChange);
  }, []);

  /* ---------------------------------------------------------
     REPRODUCCIÓN: una sola función decide si el video suena
     o se pausa, combinando fase + visibilidad + preferencia.
     --------------------------------------------------------- */
  const syncPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const { inVideoPhase, stageVisible, userPaused } =
      playbackRef.current;

    const shouldPlay =
      !reducedMotion && inVideoPhase && stageVisible && !userPaused;

    if (shouldPlay && video.paused) {
      video.play().catch(() => {
        /* El navegador puede bloquear la reproducción; se ignora. */
      });
    } else if (!shouldPlay && !video.paused) {
      video.pause();
    }
  }, [reducedMotion]);

  /* Pausar el video cuando la escena sale de pantalla (ahorro) */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    if (!('IntersectionObserver' in window)) {
      playbackRef.current.stageVisible = true;
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        playbackRef.current.stageVisible = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.15 }
    );

    observer.observe(stage);

    return () => observer.disconnect();
  }, [syncPlayback]);

  /* ---------------------------------------------------------
     ANIMACIÓN PRINCIPAL (GSAP ScrollTrigger)
     --------------------------------------------------------- */
  useLayoutEffect(() => {
    /*
     * Con reduced-motion no se crea ningún ScrollTrigger: las
     * letras quedan completas y el video aparece debajo, sin
     * pin ni animaciones de scroll (ver CSS .is-reduced).
     */
    if (reducedMotion) return undefined;

    /*
     * gsap.context() agrupa todo lo creado para revertirlo de
     * un solo golpe al desmontar (esencial en una SPA).
     */
    const ctx = gsap.context(() => {
      const wordEls = wordRefs.current.filter(Boolean);

      /* Estado inicial del video: oculto y recortado como card */
      gsap.set(videoLayerRef.current, {
        autoAlpha: 0,
        scale: 1.08,
        clipPath: CLIP_HIDDEN,
      });

      const swapStart = PHASE_VH.text + PHASE_VH.hold;
      const swapEnd = swapStart + PHASE_VH.swap;

      /*
       * Línea de tiempo maestra. Sus duraciones están en "vh":
       * ScrollTrigger las reparte linealmente sobre la distancia
       * total de scroll (scrub), en ambos sentidos.
       */
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: stageRef.current,
          start: 'top top',
          end: () => '+=' + (TOTAL_VH / 100) * window.innerHeight,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            /* Barra: refleja solo la fase de letras (0 → 100%) */
            const textProgress = clamp(
              (self.progress * TOTAL_VH) / PHASE_VH.text,
              0,
              1
            );

            if (progressTrackRef.current) {
              progressTrackRef.current.setAttribute(
                'aria-valuenow',
                String(Math.round(textProgress * 100))
              );
            }

            /* Cambio de fase hacia/desde el video */
            const inPhase = self.progress >= VIDEO_START_PROGRESS;
            const state = playbackRef.current;

            if (inPhase !== state.inVideoPhase) {
              state.inVideoPhase = inPhase;

              if (inPhase) {
                /* Cada vez que aparece, el preview arranca de cero */
                try {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                  }
                } catch (error) {
                  /* Sin metadata todavía: se ignora. */
                }
              } else {
                /* Al salir del video se olvida la pausa manual */
                state.userPaused = false;
              }

              syncPlayback();
            }
          },
        },
      });

      /* 1) Barra de progreso: 0 → 100% durante las letras */
      tl.to(
        progressFillRef.current,
        { scaleX: 1, duration: PHASE_VH.text },
        0
      );

      /* 2) Letras: translúcidas → opacas, una tras otra */
      if (wordEls.length > 0) {
        const perWord = PHASE_VH.text * 0.3;
        const each =
          wordEls.length > 1
            ? (PHASE_VH.text - perWord) / (wordEls.length - 1)
            : 0;

        tl.to(
          wordEls,
          { opacity: 1, duration: perWord, stagger: { each } },
          0
        );
      }

      /* 3) Las letras desaparecen... */
      tl.to(
        textRef.current,
        {
          opacity: 0,
          scale: 0.94,
          duration: PHASE_VH.swap * 0.75,
          ease: 'power2.in',
        },
        swapStart
      );

      /* 4) ...y el video crece desde una card hasta pantalla completa */
      tl.to(
        videoLayerRef.current,
        {
          autoAlpha: 1,
          scale: 1,
          clipPath: CLIP_FULL,
          duration: PHASE_VH.swap,
          ease: 'power2.out',
        },
        swapStart
      );

      /* 5) Tramo final: el video permanece (preview) */
      tl.to({}, { duration: PHASE_VH.preview }, swapEnd);
    });

    return () => {
      ctx.revert();
      playbackRef.current.inVideoPhase = false;
    };
  }, [translatedText, reducedMotion, syncPlayback]);

  /* ---------------------------------------------------------
     CONTROLES DEL VIDEO
     --------------------------------------------------------- */
      const toggleSound = () => {
        const video = videoRef.current;
        if (!video) return;

        const nextMuted = !video.muted;
        video.muted = nextMuted;
        setIsMuted(nextMuted);
      };

      const togglePlayback = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
          playbackRef.current.userPaused = false;
          video.play().catch(() => {});
        } else {
          playbackRef.current.userPaused = true;
          video.pause();
        }
      };

      return (
        <section
          ref={stageRef}
          className={`scroll-reveal-section${
            reducedMotion ? ' is-reduced' : ''
          }`}
        >
      {/* =========================================
          BARRA DE PROGRESO (fase de letras)
      ========================================== */}
      <div
        ref={progressTrackRef}
        className="scroll-progress-track"
        role="progressbar"
        aria-label={t(
          'history.scrollVideo.ariaProgress',
          'Progreso de la animación'
        )}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
      >
        <div ref={progressFillRef} className="scroll-progress-fill" />
      </div>

      {/* =========================================
          LETRAS
      ========================================== */}
      <div ref={textRef} className="scroll-text-content">
        <h2 className="scroll-reveal-text">
          {words.map((word, index) => {
            let colorClass = 'word-yellow';

            if (index === splitIndex) {
              colorClass = 'word-split';
            } else if (splitIndex !== -1 && index > splitIndex) {
              colorClass = 'word-green';
            }

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

      {/* =========================================
          VIDEO (misma escena, aparece tras las letras)
      ========================================== */}
      <div
        ref={videoLayerRef}
        className="scroll-video-layer"
        role="group"
        aria-label={t(
          'history.scrollVideo.ariaVideo',
          'Video institucional de Gran Eventos'
        )}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          className="scroll-video"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        <div className="scroll-video-overlay" />

        <div className="scroll-video-controls">
          <button
            type="button"
            className="scroll-video-control"
            onClick={togglePlayback}
          >
            {isPlaying
              ? `⏸ ${t('history.scrollVideo.pause', 'Pausar')}`
              : `▶ ${t('history.scrollVideo.play', 'Reproducir')}`}
          </button>

          <button
            type="button"
            className="scroll-video-control"
            onClick={toggleSound}
          >
            {isMuted
              ? `🔇 ${t('history.scrollVideo.soundActivate', 'Activar sonido')}`
              : `🔊 ${t('history.scrollVideo.soundMute', 'Silenciar')}`}
          </button>
        </div>

        <span className="scroll-video-label">
          {t('history.scrollVideo.brandLabel', 'GRAN EVENTOS')}
        </span>
      </div>
    </section>
  );
}