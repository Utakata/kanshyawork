import React from 'react';
import { useLoaderData } from '@remix-run/react';
import { json, LoaderFunction } from '@remix-run/node';
import { getStats } from '~/services/statsService';

// 統計情報の型定義
interface Stats {
  totalUsers: number;
  totalMessages: number;
  activeUsers: number;
}

// ローダー関数：サーバーサイドでデータを取得
export const loader: LoaderFunction = async () => {
  try {
    const stats = await getStats();
    return json(stats);
  } catch (error) {
    console.error('Failed to fetch stats:', error);
    return json({ error: 'Failed to load statistics' }, { status: 500 });
  }
};

// 統計情報ページコンポーネント
export default function Stats() {
  const stats = useLoaderData<Stats>();

  return (
    <div className="stats-