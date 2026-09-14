import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import timelineData from '../../data/timelineData';

export default function Timeline() {
  const [activeId, setActiveId] = useState('1987');

  const activeEvent = timelineData.find(
    (event) => event.id === activeId
  );

  return (
    <section className="timeline-section">

      {/* Línea horizontal */}
      <div className="timeline-track">
        <div className="timeline-line" />

        {timelineData.map((event) => (
          <TimelineItem
            key={event.id}
            event={event}
            isActive={event.id === activeId}
            onSelect={() => setActiveId(event.id)}
          />
        ))}
      </div>

      {/* Información del evento seleccionado */}
      <div className="timeline-detail" aria-live="polite">

        <div className="timeline-detail-year">
          {activeEvent.year}
        </div>

        <div className="timeline-detail-content">

          <span className="timeline-detail-label">
            {activeEvent.title}
          </span>

          <p>
            {activeEvent.description}
          </p>

        </div>

      </div>

    </section>
  );
}