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

    console.log(
      "Timeline seleccionó:",
      event.year
    );

    setActiveId(event.id);

    if (onOpenModal) {
      onOpenModal(event);
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