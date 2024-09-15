import React from 'react';
import { format } from 'date-fns';

interface GratitudeItemProps {
  id: string;
  content: string;
  createdAt: string;
  author: string;
}

const GratitudeItem: React.FC<GratitudeItemProps> = ({ id, content, createdAt, author }) => {
  // 日付をフォーマットする関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'yyyy年MM月dd日 HH:mm');
  };

  return (
    <div className="gratitude-item">
      <div className="gratitude-content">{content}</div>
      <div className="gratitude-meta">
        <span className="gratitude-author">{author}</span>
        <span className="gratitude-date">{formatDate(createdAt)}</span>
      </div>
    </div>
  );
};

export default GratitudeItem;