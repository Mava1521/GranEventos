import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import timelineData from '../../data/timelineData';

export default function Timeline({ onOpenModal }) {
  const [activeId, setActiveId] = useState('1987');

  const activeEvent = timelineData.find(
    (event) => event.id === activeId
  ) || timelineData[0];

  const handleSelectEvent = (event) => {
    console.log("2. Timeline capturó clic en:", event.year);
    setActiveId(event.id);
    if (onOpenModal) {
      onOpenModal(event);
    } else {
      console.warn("ADVERTENCIA: onOpenModal no está definido como prop en Timeline");
    }
  };

  return (
    <section className="timeline-section">
      <div className="timeline-track">
        <div className="timeline-line" />

        {timelineData.map((item) => (
          <TimelineItem
            key={item.id}
            event={item}
            isActive={item.id === activeId}
            onSelect={handleSelectEvent}
          />
        ))}
      </div>

      <div 
        className="timeline-detail" 
        onClick={() => handleSelectEvent(activeEvent)}
        style={{ cursor: 'pointer' }}
      >
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