
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TimelineItem({
  event,
  isActive,
  onActivate,
  onSelect,
}) {
  const { t } = useTranslation();

  const handleClick = (e) => {
    e.stopPropagation();
    onSelect?.(event);
  };

  const handleActivate = () => {
    onActivate?.(event);
  };

  return (
    <article
      className={[
        'timeline-item',
        isActive ? 'timeline-item--active' : '',
      ].filter(Boolean).join(' ')}
      onMouseEnter={handleActivate}
      onFocusCapture={handleActivate}
    >
      <button
        type="button"
        className="timeline-year-button"
        onClick={handleClick}
        aria-pressed={isActive}
        aria-label={t('history.timeline.aria.viewYear', {
          year: event.year,
        })}
      >
        <span className="timeline-dot" aria-hidden="true">
          <span />
        </span>

        <span className="timeline-year">
          {event.year}
        </span>
      </button>

      <button
        type="button"
        className="timeline-card"
        onClick={handleClick}
        aria-pressed={isActive}
        aria-label={t('history.timeline.aria.openTitle', {
          title: event.title,
        })}
      >
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

          <h3>{event.title}</h3>

          <p>{event.description}</p>
        </div>
      </button>
    </article>
  );
}
