import React from 'react';

export default function TimelineItem({
  event,
  isActive,
  onSelect,
}) {
  const handleClick = (e) => {
    e.stopPropagation();

    if (onSelect) {
      onSelect(event);
    }
  };

  return (
    <article
      className={`timeline-item ${
        isActive ? 'timeline-item--active' : ''
      }`}
    >

      {/* PUNTO + AÑO */}
      <button
        type="button"
        className="timeline-year-button"
        onClick={handleClick}
        aria-selected={isActive}
        aria-label={`Ver información del año ${event.year}`}
      >
        <span className="timeline-dot" aria-hidden="true">
          <span />
        </span>

        <span className="timeline-year">
          {event.year}
        </span>
      </button>


      {/* CONTENIDO */}
      <button
        type="button"
        className="timeline-card"
        onClick={handleClick}
        aria-label={`Abrir información de ${event.title}`}
      >

        {/* Imagen utilizada únicamente en el diseño responsive */}
        <div className="timeline-card__image">
          <img
            src={event.image}
            alt=""
            loading="lazy"
          />
        </div>

        <div className="timeline-card__content">

         <div className="timeline-card__year">
            {event.year}
          </div>

          <h3>
            {event.title}
          </h3>

          <p>
            {event.description}
          </p>

        </div>

      </button>

    </article>
  );
}