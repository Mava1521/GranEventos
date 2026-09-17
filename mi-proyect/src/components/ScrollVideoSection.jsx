import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../styles/ScrollVideoSection.css';

const TEXT =
  '¿QUÉ ES GRAN EVENTOS? MÁS DE 30 AÑOS CREANDO EXPERIENCIAS INMENSAS BAJO LA ENERGÍA DE NUESTRO EQUIPO';

const words = TEXT.split(' ');

export default function ScrollVideoSection({ videoSrc }) {
  const sectionRef = useRef(null);
  const touchStartY = useRef(null);

  const [progress, setProgress] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  /*
   * Evita que se ejecuten varias activaciones
   * al mismo tiempo.
   */
  const lockRef = useRef(false);

  /*
   * Posición exacta donde comienza la sección.
   */
  const sectionTopRef = useRef(0);

  /*
   * Detecta si la sección está entrando
   * en el viewport.
   */
  const isSectionInViewport = useCallback(() => {
    if (!sectionRef.current) return false;

    const rect = sectionRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    return (
      rect.top <= viewportHeight * 0.25 &&
      rect.bottom > viewportHeight * 0.5
    );
  }, []);

  /*
   * Bloquea el scroll normal.
   */
  const lockScroll = useCallback(() => {
    if (lockRef.current) return;

    lockRef.current = true;
    setIsLocked(true);

    /*
     * Guardamos la posición exacta de la sección.
     */
    if (sectionRef.current) {
      sectionTopRef.current =
        window.scrollY +
        sectionRef.current.getBoundingClientRect().top;
    }

    /*
     * Dejamos la página exactamente
     * en el comienzo de la sección.
     */
    window.scrollTo({
      top: sectionTopRef.current,
      behavior: 'auto',
    });

    /*
     * Bloqueamos el scroll nativo.
     */
    document.body.classList.add('scroll-animation-lock');
  }, []);

  /*
   * Libera el scroll.
   */
  const unlockScroll = useCallback(() => {
    lockRef.current = false;
    setIsLocked(false);

    document.body.classList.remove(
      'scroll-animation-lock'
    );
  }, []);

  /*
   * CONTROL PRINCIPAL DEL WHEEL
   */
  const handleWheel = useCallback(
    (event) => {
      /*
       * Si la sección todavía no está cerca,
       * dejamos que el navegador haga scroll normal.
       */
      if (
        !lockRef.current &&
        !isSectionInViewport()
      ) {
        return;
      }

      /*
       * Si acaba de entrar en la sección,
       * la bloqueamos inmediatamente.
       */
      if (!lockRef.current) {
        lockScroll();
      }

      const direction =
        event.deltaY > 0 ? 1 : -1;

      /*
       * Si estamos al principio y queremos subir,
       * permitimos salir hacia arriba.
       */
      if (
        progress <= 0 &&
        direction < 0
      ) {
        unlockScroll();
        return;
      }

      /*
       * Si terminamos todo y queremos seguir bajando,
       * liberamos el scroll.
       */
      if (
        progress >= 2 &&
        direction > 0
      ) {
        unlockScroll();
        return;
      }

      /*
       * IMPORTANTE:
       * aquí evitamos que el navegador avance.
       */
      event.preventDefault();

      /*
       * Controlamos la velocidad de la animación.
       */
      const delta =
        Math.min(Math.abs(event.deltaY), 100) / 650;

      setProgress((current) => {
        const next =
          current + delta * direction;

        return Math.min(
          Math.max(next, 0),
          2
        );
      });
    },
    [
      progress,
      isSectionInViewport,
      lockScroll,
      unlockScroll,
    ]
  );

  /*
   * =====================================================
   * TECLADO
   * =====================================================
   *
   * También bloqueamos:
   *
   * ArrowDown
   * ArrowUp
   * PageDown
   * PageUp
   * Space
   */
  const handleKeyDown = useCallback(
    (event) => {
      if (!lockRef.current) return;

      const scrollKeys = [
        'ArrowDown',
        'ArrowUp',
        'PageDown',
        'PageUp',
        ' ',
        'Spacebar',
      ];

      if (!scrollKeys.includes(event.key)) {
        return;
      }

      const direction =
        event.key === 'ArrowUp' ||
        event.key === 'PageUp'
          ? -1
          : 1;

      /*
       * Si intenta salir hacia arriba
       * desde el comienzo.
       */
      if (
        progress <= 0 &&
        direction < 0
      ) {
        unlockScroll();
        return;
      }

      /*
       * Si terminó y quiere continuar.
       */
      if (
        progress >= 2 &&
        direction > 0
      ) {
        unlockScroll();
        return;
      }

      event.preventDefault();

      setProgress((current) => {
        const next =
          current + 0.035 * direction;

        return Math.min(
          Math.max(next, 0),
          2
        );
      });
    },
    [
      progress,
      unlockScroll,
    ]
  );

  /*
   * =====================================================
   * TOUCH / MÓVIL
   * =====================================================
   */

  const handleTouchStart = useCallback(
    (event) => {
      touchStartY.current =
        event.touches[0].clientY;
    },
    []
  );

  const handleTouchMove = useCallback(
    (event) => {
      if (!isSectionInViewport()) {
        return;
      }

      if (!lockRef.current) {
        lockScroll();
      }

      if (
        touchStartY.current === null
      ) {
        return;
      }

      const currentY =
        event.touches[0].clientY;

      const difference =
        touchStartY.current -
        currentY;

      if (Math.abs(difference) < 2) {
        return;
      }

      const direction =
        difference > 0 ? 1 : -1;

      if (
        progress <= 0 &&
        direction < 0
      ) {
        unlockScroll();
        return;
      }

      if (
        progress >= 2 &&
        direction > 0
      ) {
        unlockScroll();
        return;
      }

      event.preventDefault();

      const delta =
        Math.min(
          Math.abs(difference),
          35
        ) / 700;

      setProgress((current) => {
        const next =
          current + delta * direction;

        return Math.min(
          Math.max(next, 0),
          2
        );
      });

      touchStartY.current = currentY;
    },
    [
      progress,
      isSectionInViewport,
      lockScroll,
      unlockScroll,
    ]
  );

  /*
   * =====================================================
   * EVENTOS
   * =====================================================
   */

  useEffect(() => {
    window.addEventListener(
      'wheel',
      handleWheel,
      {
        passive: false,
        capture: true,
      }
    );

    window.addEventListener(
      'keydown',
      handleKeyDown,
      {
        capture: true,
      }
    );

    window.addEventListener(
      'touchstart',
      handleTouchStart,
      {
        passive: true,
      }
    );

    window.addEventListener(
      'touchmove',
      handleTouchMove,
      {
        passive: false,
      }
    );

    return () => {
      window.removeEventListener(
        'wheel',
        handleWheel,
        {
          capture: true,
        }
      );

      window.removeEventListener(
        'keydown',
        handleKeyDown,
        {
          capture: true,
        }
      );

      window.removeEventListener(
        'touchstart',
        handleTouchStart
      );

      window.removeEventListener(
        'touchmove',
        handleTouchMove
      );

      document.body.classList.remove(
        'scroll-animation-lock'
      );
    };
  }, [
    handleWheel,
    handleKeyDown,
    handleTouchStart,
    handleTouchMove,
  ]);

  /*
   * =====================================================
   * PROGRESO DE LAS DOS FASES
   * =====================================================
   */

  /*
   * 0 → 1
   *
   * Animación del texto.
   */
  const textProgress =
    Math.min(progress, 1);

  /*
   * 1 → 2
   *
   * Animación del video.
   */
  const videoProgress =
    Math.max(
      0,
      progress - 1
    );

  /*
   * =====================================================
   * ANIMACIÓN DEL VIDEO
   * =====================================================
   */

  const videoStyle = {
    opacity: videoProgress,

    transform: `
      translateY(
        ${120 - videoProgress * 120}px
      )
      scale(
        ${0.92 + videoProgress * 0.08}
      )
    `,
  };

  return (
    <section
      ref={sectionRef}
      className={`scroll-reveal-section ${
        isLocked
          ? 'is-locked'
          : ''
      }`}
    >
      <div className="scroll-reveal-scene">

        {/* =========================================
            TEXTO
        ========================================== */}

        <div className="scroll-text-content">

          <span className="scroll-eyebrow">
            EL IMPACTO
          </span>

          <h2 className="scroll-reveal-text">

            {words.map(
              (word, index) => {

                /*
                 * Posición de la palabra
                 * dentro de la animación.
                 */
                const wordProgress =
                  index /
                  Math.max(
                    words.length - 1,
                    1
                  );

                /*
                 * Transición suave.
                 */
                const opacity =
                  Math.min(
                    Math.max(
                      (
                        textProgress -
                        wordProgress *
                        0.75
                      ) / 0.25,
                      0
                    ),
                    1
                  );

                return (
                  <span
                    key={`${word}-${index}`}
                    className="word"
                    style={{
                      opacity:
                        0.15 +
                        opacity * 0.85,
                    }}
                  >
                    {word}{' '}
                  </span>
                );
              }
            )}

          </h2>

        </div>


        {/* =========================================
            VIDEO
        ========================================== */}

        <div
          className="scroll-video-wrapper"
          style={{
            opacity:
              videoProgress,
            pointerEvents:
              videoProgress >= 1
                ? 'auto'
                : 'none',
          }}
        >
          <div
            className="video-card"
            style={videoStyle}
          >
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              aria-label="Video promocional de Gran Eventos"
            />

            <div className="video-overlay" />

            <span className="video-label">
              GRAN EVENTOS
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}