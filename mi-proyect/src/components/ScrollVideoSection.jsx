import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../styles/ScrollVideoSection.css';

const TEXT =
  '¿QUÉ ES GRAN EVENTOS? MÁS DE 30 AÑOS CREANDO EXPERIENCIAS INMENSAS BAJO LA ENERGÍA DE NUESTRO EQUIPO';

const WORDS = TEXT.split(' ');

/*
 * Cuánta distancia de scroll (en múltiplos de la altura
 * de pantalla) dura la animación del texto.
 * 2.6 = el wrapper mide 260vh, así que el usuario tiene
 * 1.6 pantallas de "scroll congelado" para revelar el texto
 * (260vh de wrapper - 100vh que ya está ocupando el sticky).
 */
const WRAPPER_HEIGHT_VH = 260;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function ScrollVideoSection({ videoSrc }) {
  const wrapperRef = useRef(null);
  const progressFillRef = useRef(null);
  const wordRefs = useRef([]);

  const videoSectionRef = useRef(null);
  const videoRef = useRef(null);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [videoInView, setVideoInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const rafRef = useRef(null);

  /*
   * =====================================================
   * ACCESIBILIDAD: prefers-reduced-motion
   * =====================================================
   * Si el usuario pidió menos movimiento, no forzamos
   * ningún scroll-jacking ni animación: todo se muestra
   * directamente.
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
   * Escribimos directamente en el DOM (sin setState) para
   * que la animación corra a 60fps sin re-renderizar React
   * en cada pixel de scroll.
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

  /*
   * =====================================================
   * CALCULAR PROGRESO A PARTIR DEL SCROLL REAL
   * =====================================================
   * Nada de wheel/touch/keydown interceptados: solo leemos
   * dónde está el wrapper respecto al viewport. Como el
   * wrapper mide más que 100vh y su contenido es `sticky`,
   * el navegador "congela" visualmente la escena mientras
   * el usuario recorre esa distancia extra — ida y vuelta,
   * de forma completamente nativa.
   */
  const updateFromScroll = useCallback(() => {
    rafRef.current = null;

    if (!wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const scrollableDistance = rect.height - viewportHeight;

    if (scrollableDistance <= 0) {
      applyProgress(1);
      return;
    }

    const scrolled = clamp(
      -rect.top,
      0,
      scrollableDistance
    );

    applyProgress(scrolled / scrollableDistance);
  }, [applyProgress]);

  const requestUpdate = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(updateFromScroll);
  }, [updateFromScroll]);

  useEffect(() => {
    if (reducedMotion) {
      applyProgress(1);
      return undefined;
    }

    requestUpdate();

    /*
     * IMPORTANTE: usamos { capture: true } a propósito.
     *
     * El evento "scroll" NO hace bubbling, así que si por
     * alguna regla CSS del proyecto `body` (o cualquier
     * ancestro) termina siendo el elemento que realmente
     * scrollea (por tener `overflow: auto/scroll`), un
     * listener normal en `window` nunca se entera.
     *
     * Con `capture: true` el listener se ejecuta en la
     * fase de captura (de window hacia abajo), así que
     * detecta el scroll sin importar en qué elemento
     * del árbol esté ocurriendo realmente.
     */
    window.addEventListener('scroll', requestUpdate, {
      passive: true,
      capture: true,
    });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate, {
        capture: true,
      });
      window.removeEventListener('resize', requestUpdate);

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [reducedMotion, requestUpdate, applyProgress]);

  /*
   * =====================================================
   * VIDEO: aparece con fade al entrar en pantalla
   * =====================================================
   * Esta sección NO bloquea el scroll, solo reacciona
   * cuando entra/sale del viewport para reproducir/pausar
   * y aplicar el fade-in.
   */
  useEffect(() => {
    const node = videoSectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVideoInView(entry.isIntersecting);

        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current
            .play()
            .catch(() => {
              /* el navegador puede bloquear autoplay; se ignora */
            });
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  /*
   * El video empieza muteado (requisito de los navegadores
   * para autoplay). El usuario decide activar el sonido.
   */
  const toggleSound = () => {
    if (!videoRef.current) return;

    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <>
      {/* =========================================
          FASE 1 — TEXTO (scroll "congelado")
      ========================================== */}

      <section
        ref={wrapperRef}
        className="scroll-reveal-wrapper"
        style={
          reducedMotion
            ? { height: 'auto' }
            : { height: `${WRAPPER_HEIGHT_VH}vh` }
        }
      >
        <div className="scroll-reveal-sticky">

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

            <span className="scroll-eyebrow">
              EL IMPACTO
            </span>

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

        <span className="scroll-video-label">
          GRAN EVENTOS
        </span>
      </section>
    </>
  );
}