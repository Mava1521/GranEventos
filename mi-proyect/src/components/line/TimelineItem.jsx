import React from 'react';

export default function TimelineItem({
  event,
  isActive,
  onSelect,
}) {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log("3. Clic dentro de TimelineItem para el año:", event.year);
    if (onSelect) {
      onSelect(event);
    }
  };

  return (
    <div
      className={`timeline-item ${
        isActive ? 'timeline-item--active' : ''
      }`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <button
        type="button"
        className="timeline-year-button"
        onClick={handleClick}
        aria-selected={isActive}
        aria-label={`Ver información del año ${event.year}`}
      >
        <span className="timeline-dot">
          <span />
        </span>

        <span className="timeline-year">
          {event.year}
        </span>
      </button>

      <div className="timeline-card" onClick={handleClick}>
        <h3>
          {event.title}
        </h3>
        <p>
          {event.description}
        </p>
      </div>
    </div>
  );
}