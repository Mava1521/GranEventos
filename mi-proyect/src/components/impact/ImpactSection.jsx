import React, { useEffect, useRef, useState } from 'react';
import './ImpactSection.css';

export default function ImpactSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  /*
   * Controlamos el progreso de la sección
   * mediante la posición del scroll.
   */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();

      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      /*
       * Distancia que realmente podemos recorrer
       * mientras la sección permanece activa.
       */
      const scrollDistance = sectionHeight - viewportHeight;

      if (scrollDistance <= 0) {
        setProgress(0);
        return;
      }

      /*
       * Convertimos la posición en un valor
       * entre 0 y 1.
       */
      const currentPosition = -rect.top;

      const percentage =
        currentPosition / scrollDistance;

      const normalizedProgress = Math.min(
        Math.max(percentage, 0),
        1
      );

      setProgress(normalizedProgress);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
   * Detectamos cuándo la sección está realmente
   * dentro de la pantalla.
   */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * Convertimos el progreso a porcentaje.
   */
  const progressPercentage = `${progress * 100}%`;

  /*
   * El cambio de color comienza progresivamente.
   *
   * 0 = amarillo
   * 1 = verde
   */
  const yellow = [239, 189, 0];
  const green = [0, 174, 150];

  const interpolate = (start, end, amount) =>
    Math.round(start + (end - start) * amount);

  const red = interpolate(yellow[0], green[0], progress);
  const g = interpolate(yellow[1], green[1], progress);
  const b = interpolate(yellow[2], green[2], progress);

  const textColor = `rgb(${red}, ${g}, ${b})`;

  return (
    <section
      ref={sectionRef}
      className="impact-section"
    >

      {/* =========================================
          BARRA DE PROGRESO
      ========================================= */}

      <div
        className={`scroll-progress ${
          isVisible ? 'scroll-progress--visible' : ''
        }`}
        aria-hidden="true"
      >
        <div
          className="scroll-progress__bar"
          style={{
            width: progressPercentage,
          }}
        />
      </div>

      {/* =========================================
          CONTENIDO STICKY
      ========================================= */}

      <div className="impact-sticky">

        {/* Fondo del video */}
        <video
          className="impact-video-background"
          src="/videos/entrevista.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        {/* Capa oscura para mejorar contraste */}
        <div className="impact-overlay" />

        {/* Video principal */}
        <div className="impact-video-wrapper">
          <video
            ref={videoRef}
            className="impact-video"
            src="/videos/entrevista.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>

        {/* =====================================
            TEXTO
        ===================================== */}

        <div className="impact-content">

          <p className="impact-eyebrow">
            WHAT IS GRAN EVENTOS?
          </p>

          <h2
            className="impact-title"
            style={{
              color: textColor,
            }}
          >
            <span>EXPERIENCIAS QUE</span>

            <span>
              MUEVEN AL MUNDO
            </span>
          </h2>

          <p className="impact-description">
            Grandes experiencias también dejan
            una huella positiva.
          </p>

        </div>

        {/* Indicador inferior */}
        <div className="impact-scroll-hint">
          <span>SCROLL</span>

          <span className="impact-scroll-arrow">
            ↓
          </span>
        </div>

      </div>
    </section>
  );
}