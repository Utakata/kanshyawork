import React from 'react';

interface UserStatsProps {
  totalPosts: number;
  totalLikes: number;
  totalComments: number;
  joinDate: string;
}

const UserStats: React.FC<UserStatsProps> = ({
  totalPosts,
  totalLikes,
  totalComments,
  joinDate,
}) => {
  return (
    <div className="user-stats">
      <h2>ユーザー統計</h2>
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-label">投稿数:</span>
          <span className="stat-value">{totalPosts}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">いいね数:</span>
          <span className="stat-value">{totalLikes}</span>
        </div>
        <div className="stat-item">