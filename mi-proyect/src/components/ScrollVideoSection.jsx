import React, { useEffect, useRef, useState } from 'react';
import '../styles/ScrollVideoSection.css';

export default function ScrollVideoSection({ videoSrc }) {
  const textRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Cálculo del progreso de scroll dentro de la sección de texto (0 a 1)
      const totalDist = windowHeight + rect.height;
      const currentDist = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentDist / totalDist, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Inicializar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Texto de ejemplo segmentado en palabras para animación fluida
  const text = "¿QUÉ ES GRAN EVENTOS? MÁS DE 30 AÑOS CREANDO EXPERIENCIAS INMENSAS BAJO LA ENERGÍA DE NUESTRO EQUIPO";
  const words = text.split(" ");

  return (
    <section className="scroll-reveal-container">
      {/* SECCIÓN 1: Revelado de Texto con Scroll */}
      <div className="scroll-text-wrapper" ref={textRef}>
        <span className="scroll-eyebrow">EL IMPACTO</span>
        <h2 className="scroll-reveal-text">
          {words.map((word, index) => {
            // Calcula opacidad palabra por palabra
            const wordThreshold = index / words.length;
            const isHighlighted = scrollProgress > wordThreshold;
            
            return (
              <span
                key={index}
                className={`word ${isHighlighted ? 'active' : ''}`}
              >
                {word}{' '}
              </span>
            );
          })}
        </h2>
      </div>

      {/* SECCIÓN 2: Video Animado que aparece al continuar el scroll */}
      <div className="scroll-video-wrapper">
        <div className="video-card">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            aria-label="Video promocional de Gran Eventos"
          />
          <button 
            className="video-control-btn" 
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
          >
            {isPlaying ? '⏸ PAUSAR' : '▶ REPRODUCIR'}
          </button>
        </div>
      </div>
    </section>
  );
}