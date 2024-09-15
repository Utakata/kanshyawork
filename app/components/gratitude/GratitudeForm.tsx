import React, { useState } from 'react';

interface GratitudeFormProps {
  onSubmit: (gratitude: string) => void;
}

const GratitudeForm: React.FC<GratitudeFormProps> = ({ onSubmit }) => {
  const [gratitude, setGratitude] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gratitude.trim()) {
      onSubmit(gratitude);
      setGratitude('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="gratitude-form">
      <textarea
        value={gratitude}
        onChange={(e) => setGratitude(e.target.value)}
        placeholder="今日感謝したことを書いてください..."
        rows={4}
        className="gratitude-textarea"
        maxLength={500} // 文字数制限を設定
      />
      <button type="submit" className="submit-button">
        感謝を投稿