import React from 'react';

export default function TimelineItem({
  event,
  isActive,
  onSelect,
}) {
  return (
    <div
      className={`timeline-item ${
        isActive ? 'timeline-item--active' : ''
      }`}
    >

      <button
        type="button"
        className="timeline-year-button"
        onClick={onSelect}
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

      <div className="timeline-card">

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