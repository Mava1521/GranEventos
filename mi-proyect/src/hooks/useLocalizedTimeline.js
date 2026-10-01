import { useTranslation } from 'react-i18next';
import timelineData from '../data/timelineData';

export function useLocalizedTimeline() {
  const { t } = useTranslation();

  return timelineData.map((item) => {
    const basePath = `history.timeline.items.${item.id}`;
    return {
      ...item,
      tag: t(`${basePath}.tag`),
      title: t(`${basePath}.title`),
      description: t(`${basePath}.description`),
      fullDesc: t(`${basePath}.fullDesc`),
      stats: t(`${basePath}.stats`, { returnObjects: true }) || [],
      highlights: t(`${basePath}.highlights`, { returnObjects: true }) || []
    };
  });
}