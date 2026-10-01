import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/ScrollVideoSection.css';

/*
 * Fases del "candado" de scroll.
 */
const PHASE = {
  ABOVE: 'above',
  LOCKED: 'locked',
  BELOW: 'below',
};

/*
 * `overallProgress` va de 0 a 2:
 *   0 → 1  = fase del TEXTO (letras translúcidas → blancas)
 *   1 → 2  = fase del VIDEO (aparece apilándose sobre el texto)
 */
const MAX_PROGRESS = 2;
const TEXT_PHASE_END = 1;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function ScrollVideoSection({ videoSrc }) {
  const { t } = useTranslation();

  // Obtenemos el texto traducido y lo dividimos en palabras dinámicamente
  const textContent = t(
    'history.scrollVideo.text',
    '¿QUÉ ES GRAN EVENTOS? MÁS DE 30 AÑOS CREANDO EXPERIENCIAS INMENSAS BAJO LA ENERGÍA DE NUESTRO EQUIPO'
  );
  const words = textContent.split(' ');

  const sectionRef = useRef(null);
  const progressFillRef = useRef(null);
  const wordRefs = useRef([]);
  const textContentRef = useRef(null);
  const videoCardRef = useRef(null);
  const videoRef = useRef(null);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const phaseRef = useRef(PHASE.ABOVE);
  const progressRef = useRef(0);
  const touchStartYRef = useRef(null);
  const videoIsPlayingRef = useRef(false);
  const pinnedScrollYRef = useRef(null);

  /* Reiniciamos la lista de referencias a las palabras si el texto cambia de idioma */
  useEffect(() => {
    wordRefs.current = wordRefs.current.slice(0, words.length);
  }, [words.length]);

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
   */
  const applyProgress = useCallback((overall) => {
    const textProgress = clamp(overall, 0, TEXT_PHASE_END);
    const videoProgress = clamp(overall - TEXT_PHASE_END, 0, 1);

    /* Barra de progreso — solo refleja la fase de texto */
    if (progressFillRef.current) {
      progressFillRef.current.style.transform = `scaleX(${textProgress})`;
    }

    /* Palabras */
    const total = wordRefs.current.length;
    wordRefs.current.forEach((el, index) => {
      if (!el) return;

      const wordThreshold = total > 1 ? index / (total - 1) : 0;
      const raw = (textProgress - wordThreshold * 0.7) / 0.3;
      const opacity = 0.14 + clamp(raw, 0, 1) * 0.86;

      el.style.opacity = opacity.toFixed(3);
    });

    /* El texto "retrocede" */
    if (textContentRef.current) {
      const scale = 1 - videoProgress * 0.08;
      const blur = videoProgress * 6;
      const fade = 1 - videoProgress * 0.75;

      textContentRef.current.style.transform = `scale(${scale})`;
      textContentRef.current.style.filter = `blur(${blur}px)`;
      textContentRef.current.style.opacity = fade.toFixed(3);
    }

    /* Video: entra como "card apilada" desde abajo */
    if (videoCardRef.current) {
      const translateY = (1 - videoProgress) * 55;
      const scale = 0.86 + videoProgress * 0.14;
      const blur = (1 - videoProgress) * 12;

      videoCardRef.current.style.transform = `translateY(${translateY}%) scale(${scale})`;
      videoCardRef.current.style.filter = `blur(${blur}px)`;
      videoCardRef.current.style.opacity = videoProgress.toFixed(3);
      videoCardRef.current.style.pointerEvents =
        videoProgress > 0.6 ? 'auto' : 'none';
    }

    /* Reproducir/pausar según si el video ya es visible */
    const shouldPlay = videoProgress > 0.02;
    if (videoRef.current && shouldPlay !== videoIsPlayingRef.current) {
      videoIsPlayingRef.current = shouldPlay;
      if (shouldPlay) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, []);

  const step = useCallback(
    (delta) => {
      const next = clamp(
        progressRef.current + delta,
        0,
        MAX_PROGRESS
      );
      progressRef.current = next;
      applyProgress(next);
    },
    [applyProgress]
  );

  const pinScrollTo = useCallback((targetY) => {
    pinnedScrollYRef.current = targetY;
    window.scrollTo({ top: targetY, behavior: 'auto' });
  }, []);

  const engageFromAbove = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const targetY = window.scrollY + rect.top;

    pinScrollTo(targetY);

    phaseRef.current = PHASE.LOCKED;
    progressRef.current = 0;
    applyProgress(0);
    setIsLocked(true);
  }, [applyProgress, pinScrollTo]);

  const engageFromBelow = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const targetY =
      window.scrollY + rect.bottom - window.innerHeight;

    pinScrollTo(targetY);

    phaseRef.current = PHASE.LOCKED;
    progressRef.current = MAX_PROGRESS;
    applyProgress(MAX_PROGRESS);
    setIsLocked(true);
  }, [applyProgress, pinScrollTo]);

  const releaseAndScroll = useCallback((direction, nextPhase) => {
    phaseRef.current = nextPhase;
    pinnedScrollYRef.current = null;
    setIsLocked(false);

    const targetY =
      window.scrollY + direction * window.innerHeight;

    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }, []);

  const releaseUpward = useCallback(
    () => releaseAndScroll(-1, PHASE.ABOVE),
    [releaseAndScroll]
  );

  const releaseDownward = useCallback(
    () => releaseAndScroll(1, PHASE.BELOW),
    [releaseAndScroll]
  );

  const processIntent = useCallback(
    (direction, magnitude) => {
      const section = sectionRef.current;
      if (!section) return false;

      const phase = phaseRef.current;

      if (phase === PHASE.LOCKED) {
        if (progressRef.current <= 0 && direction < 0) {
          releaseUpward();
          return true;
        }

        if (
          progressRef.current >= MAX_PROGRESS &&
          direction > 0
        ) {
          releaseDownward();
          return true;
        }

        step(direction * magnitude);
        return true;
      }

      if (phase === PHASE.ABOVE) {
        if (direction < 0) return false;

        const rect = section.getBoundingClientRect();
        if (rect.top > 1) return false;

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

  useEffect(() => {
    const handleNativeScroll = () => {
      if (phaseRef.current !== PHASE.LOCKED) return;
      if (pinnedScrollYRef.current === null) return;

      if (
        Math.abs(window.scrollY - pinnedScrollYRef.current) > 0.5
      ) {
        window.scrollTo({
          top: pinnedScrollYRef.current,
          behavior: 'auto',
        });
      }
    };

    window.addEventListener('scroll', handleNativeScroll, {
      passive: true,
      capture: true,
    });

    return () =>
      window.removeEventListener('scroll', handleNativeScroll, {
        capture: true,
      });
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      applyProgress(MAX_PROGRESS);
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

  const toggleSound = () => {
    if (!videoRef.current) return;

    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section
      ref={sectionRef}
      className={`scroll-reveal-section ${
        isLocked ? 'is-locked' : ''
      }`}
    >
      <div
        className="scroll-progress-track"
        role="progressbar"
        aria-label={t('history.scrollVideo.ariaProgress')}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          ref={progressFillRef}
          className="scroll-progress-fill"
        />
      </div>

      {/* TEXTO */}
      <div ref={textContentRef} className="scroll-text-content">
        <span className="scroll-eyebrow">
          {t('history.scrollVideo.eyebrow')}
        </span>

        <h2 className="scroll-reveal-text">
          {words.map((word, index) => (
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

      {/* VIDEO */}
      <div
        ref={videoCardRef}
        className="scroll-video-card"
        aria-hidden={isLocked ? undefined : 'true'}
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
          {isMuted
            ? `🔇 ${t('history.scrollVideo.soundActivate')}`
            : `🔊 ${t('history.scrollVideo.soundMute')}`}
        </button>

        <span className="scroll-video-label">
          {t('history.scrollVideo.brandLabel')}
        </span>
      </div>
    </section>
  );
}