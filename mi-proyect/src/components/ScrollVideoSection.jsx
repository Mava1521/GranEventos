import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../styles/ScrollVideoSection.css';

const TEXT =
  '¿QUÉ ES GRAN EVENTOS? MÁS DE 30 AÑOS CREANDO EXPERIENCIAS INMENSAS BAJO LA ENERGÍA DE NUESTRO EQUIPO';

const WORDS = TEXT.split(' ');

/*
 * Fases del "candado" de scroll.
 *
 * ABOVE   → el usuario está antes de la sección, scroll libre.
 * LOCKED  → el usuario está DENTRO de la sección, scroll nativo
 *           bloqueado; el wheel/touch/teclado controla `progress`.
 * BELOW   → el usuario ya pasó la sección (texto 100% blanco),
 *           scroll libre hacia el video y más abajo.
 */
const PHASE = {
  ABOVE: 'above',
  LOCKED: 'locked',
  BELOW: 'below',
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function ScrollVideoSection({ videoSrc }) {
  const sectionRef = useRef(null);
  const progressFillRef = useRef(null);
  const wordRefs = useRef([]);

  const videoSectionRef = useRef(null);
  const videoRef = useRef(null);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [videoInView, setVideoInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  /*
   * Usamos refs (no state) para la fase y el progreso porque
   * se leen/escriben en cada evento de wheel/touch — si
   * dependiéramos de state aquí, cada tick forzaría un
   * re-render de React innecesario (y closures obsoletas).
   */
  const phaseRef = useRef(PHASE.ABOVE);
  const progressRef = useRef(0);
  const touchStartYRef = useRef(null);

  /*
   * =====================================================
   * ACCESIBILIDAD: prefers-reduced-motion
   * =====================================================
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    setReducedMotion(mediaQuery.matches);

    const handleChange = (event) =>
      setReducedMotion(event.matches);

    mediaQuery.addEventListener('change', handleChange);

    return () =>
      mediaQuery.removeEventListener('change', handleChange);
  }, []);

  /*
   * =====================================================
   * APLICAR PROGRESO AL DOM
   * =====================================================
   * Sin setState por cada tick: escribimos directo en el
   * DOM para que sea instantáneo y fluido.
   */
  const applyProgress = useCallback((progress) => {
    if (progressFillRef.current) {
      progressFillRef.current.style.transform =
        `scaleX(${progress})`;
    }

    const total = wordRefs.current.length;

    wordRefs.current.forEach((el, index) => {
      if (!el) return;

      const wordThreshold =
        total > 1 ? index / (total - 1) : 0;

      const raw =
        (progress - wordThreshold * 0.7) / 0.3;

      const opacity =
        0.14 + clamp(raw, 0, 1) * 0.86;

      el.style.opacity = opacity.toFixed(3);
    });
  }, []);

  const step = useCallback(
    (delta) => {
      const next = clamp(progressRef.current + delta, 0, 1);
      progressRef.current = next;
      applyProgress(next);
    },
    [applyProgress]
  );

  /*
   * =====================================================
   * ENGANCHAR / DESENGANCHAR EL CANDADO
   * =====================================================
   * Al enganchar, alineamos el borde correspondiente de la
   * sección exactamente con el borde del viewport — así no
   * importa si el wheel/touch que disparó el enganche traía
   * más "impulso" del necesario, la sección siempre arranca
   * perfectamente encuadrada.
   */
  const engageFromAbove = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const targetY = window.scrollY + rect.top;

    window.scrollTo({ top: targetY, behavior: 'auto' });

    phaseRef.current = PHASE.LOCKED;
    progressRef.current = 0;
    applyProgress(0);
    setIsLocked(true);
  }, [applyProgress]);

  const engageFromBelow = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const targetY =
      window.scrollY + rect.bottom - window.innerHeight;

    window.scrollTo({ top: targetY, behavior: 'auto' });

    phaseRef.current = PHASE.LOCKED;
    progressRef.current = 1;
    applyProgress(1);
    setIsLocked(true);
  }, [applyProgress]);

  const releaseUpward = useCallback(() => {
    phaseRef.current = PHASE.ABOVE;
    setIsLocked(false);
  }, []);

  const releaseDownward = useCallback(() => {
    phaseRef.current = PHASE.BELOW;
    setIsLocked(false);
  }, []);

  /*
   * =====================================================
   * PROCESAR UNA "INTENCIÓN" DE SCROLL
   * =====================================================
   * Punto único compartido por wheel, touch y teclado.
   * `direction`: 1 = hacia abajo, -1 = hacia arriba.
   * `magnitude`: qué tan fuerte fue el gesto (para dosificar
   * la velocidad de la animación).
   * Devuelve true si el evento debe cancelarse
   * (preventDefault), false si debe dejarse pasar nativo.
   */
  const processIntent = useCallback(
    (direction, magnitude) => {
      const section = sectionRef.current;
      if (!section) return false;

      const phase = phaseRef.current;

      if (phase === PHASE.LOCKED) {
        if (progressRef.current <= 0 && direction < 0) {
          releaseUpward();
          return false; // deja que ESTE evento escape hacia arriba
        }

        if (progressRef.current >= 1 && direction > 0) {
          releaseDownward();
          return false; // deja que ESTE evento escape hacia abajo
        }

        step(direction * magnitude);
        return true;
      }

      if (phase === PHASE.ABOVE) {
        if (direction < 0) return false;

        const rect = section.getBoundingClientRect();
        if (rect.top > 1) return false; // aún no llega a la sección

        engageFromAbove();
        return true;
      }

      if (phase === PHASE.BELOW) {
        if (direction > 0) return false;

        const rect = section.getBoundingClientRect();
        if (rect.bottom < window.innerHeight - 1) return false;

        engageFromBelow();
        return true;
      }

      return false;
    },
    [step, engageFromAbove, engageFromBelow, releaseUpward, releaseDownward]
  );

  /*
   * =====================================================
   * WHEEL (mouse / trackpad)
   * =====================================================
   */
  const handleWheel = useCallback(
    (event) => {
      const direction = event.deltaY > 0 ? 1 : -1;
      const magnitude =
        Math.min(Math.abs(event.deltaY), 100) / 600;

      const shouldPreventDefault = processIntent(
        direction,
        magnitude
      );

      if (shouldPreventDefault) {
        event.preventDefault();
      }
    },
    [processIntent]
  );

  /*
   * =====================================================
   * TOUCH (móvil)
   * =====================================================
   */
  const handleTouchStart = useCallback((event) => {
    touchStartYRef.current = event.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback(
    (event) => {
      if (touchStartYRef.current === null) return;

      const currentY = event.touches[0].clientY;
      const diff = touchStartYRef.current - currentY;

      if (Math.abs(diff) < 4) return;

      const direction = diff > 0 ? 1 : -1;
      const magnitude = Math.min(Math.abs(diff), 60) / 500;

      const shouldPreventDefault = processIntent(
        direction,
        magnitude
      );

      if (shouldPreventDefault) {
        event.preventDefault();
      }

      touchStartYRef.current = currentY;
    },
    [processIntent]
  );

  /*
   * =====================================================
   * TECLADO (accesibilidad)
   * =====================================================
   * Solo interviene mientras ya está LOCKED, para no romper
   * la navegación normal por teclado en el resto de la página.
   */
  const handleKeyDown = useCallback(
    (event) => {
      if (phaseRef.current !== PHASE.LOCKED) return;

      const downKeys = ['ArrowDown', 'PageDown', ' '];
      const upKeys = ['ArrowUp', 'PageUp'];

      let direction = 0;
      if (downKeys.includes(event.key)) direction = 1;
      else if (upKeys.includes(event.key)) direction = -1;
      else return;

      const shouldPreventDefault = processIntent(
        direction,
        0.06
      );

      if (shouldPreventDefault) {
        event.preventDefault();
      }
    },
    [processIntent]
  );

  /*
   * =====================================================
   * REGISTRO DE EVENTOS
   * =====================================================
   */
  useEffect(() => {
    if (reducedMotion) {
      applyProgress(1);
      return undefined;
    }

    window.addEventListener('wheel', handleWheel, {
      passive: false,
      capture: true,
    });
    window.addEventListener('keydown', handleKeyDown, {
      capture: true,
    });
    window.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    });
    window.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });

    return () => {
      window.removeEventListener('wheel', handleWheel, {
        capture: true,
      });
      window.removeEventListener('keydown', handleKeyDown, {
        capture: true,
      });
      window.removeEventListener(
        'touchstart',
        handleTouchStart
      );
      window.removeEventListener(
        'touchmove',
        handleTouchMove
      );
    };
  }, [
    reducedMotion,
    handleWheel,
    handleKeyDown,
    handleTouchStart,
    handleTouchMove,
    applyProgress,
  ]);

  /*
   * =====================================================
   * VIDEO: aparece con fade al entrar en pantalla
   * =====================================================
   */
  useEffect(() => {
    const node = videoSectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVideoInView(entry.isIntersecting);

        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
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
          FASE 1 — TEXTO (scroll bloqueado)
      ========================================== */}

      <section
        ref={sectionRef}
        className={`scroll-reveal-section ${
          isLocked ? 'is-locked' : ''
        }`}
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
            {WORDS.map((word, index) => (
              <span
                key={`${word}-${index}`}
                ref={(el) => {
                  wordRefs.current[index] = el;
                }}
                className="word"
              >
                {word}{' '}
              </span>
            ))}
          </h2>
        </div>
      </section>

      {/* =========================================
          FASE 2 — VIDEO (scroll normal)
      ========================================== */}

      <section
        ref={videoSectionRef}
        className={`scroll-video-section ${
          videoInView ? 'is-visible' : ''
        }`}
        aria-label="Video institucional de Gran Eventos"
      >
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

        <span className="scroll-video-label">GRAN EVENTOS</span>
      </section>
    </>
  );
}