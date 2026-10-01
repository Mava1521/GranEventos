import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TimelineItem from './TimelineItem';
import timelineData from '../../data/timelineData';
import { useLocalizedTimeline } from '../../hooks/useLocalizedTimeline';

export default function Timeline({ onOpenModal }) {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState('1987');

  // Mapeamos los eventos para sobreescribir los títulos y descripciones desde i18n
  const localizedTimelineData = useLocalizedTimeline(timelineData);

  const activeEvent =
    localizedTimelineData.find(
      (event) => event.id === activeId
    ) || localizedTimelineData[0];

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
          {t('history.timeline.eyebrow')}
        </span>

        <h2 id="history-timeline-title">
          {t('history.timeline.title')}
        </h2>
      </div>

      <div className="timeline-track">
        <div
          className="timeline-line"
          aria-hidden="true"
        />

        {localizedTimelineData.map((item) => (
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