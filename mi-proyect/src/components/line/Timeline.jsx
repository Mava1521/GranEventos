import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import timelineData from '../../data/timelineData';

export default function Timeline({ onOpenModal }) {
  const [activeId, setActiveId] = useState('1987');

  const activeEvent =
    timelineData.find(
      (event) => event.id === activeId
    ) || timelineData[0];

  const handleSelectEvent = (event) => {
    setActiveId(event.id);

    onOpenModal?.(event);
  };

  return (
    <section
      className="timeline-section"
      aria-labelledby="history-timeline-title"
    >

      <div className="timeline-heading">
        <span className="timeline-heading__eyebrow">
          NUESTRA HISTORIA
        </span>

        <h2 id="history-timeline-title">
          LÍNEA DE TIEMPO
        </h2>
      </div>


      <div className="timeline-track">

        <div
          className="timeline-line"
          aria-hidden="true"
        />

        {timelineData.map((item) => (
          <TimelineItem
            key={item.id}
            event={item}
            isActive={item.id === activeId}
            onSelect={handleSelectEvent}
          />
        ))}

      </div>


      <div className="timeline-detail">

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