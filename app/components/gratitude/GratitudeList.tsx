import React from 'react';
import { Gratitude } from '../../types/gratitude';

interface GratitudeListProps {
  gratitudes: Gratitude[];
}

const GratitudeList: React.FC<GratitudeListProps> = ({ gratitudes }) => {
  if (gratitudes.length === 0) {
    return <p>まだ感謝の投稿がありません。</p>;
  }

  return (
    <div className="gratitude-list">
      <h2>感謝の投稿一覧</h2>
      <ul>
        {gratitudes.map((gratitude) => (
          <li key={gratitude.id} className="gratitude-item">
            <div className="gratitude-content">
              <p>{gratitude.content}</p>
            </div>
            <div className="gratitude-meta">
              <span className="gratitude-author">{gratitude.author}</span>
              <span className="gratitude-date">
                {new Date(grat