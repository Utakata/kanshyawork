import React from 'react';
import { Link } from '@remix-run/react';
import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

// ダッシュボードで表示するデータの型定義
type DashboardData = {
  totalUsers: number;
  totalMessages: number;
  activeChats: number;
};

// ローダー関数: サーバーサイドでデータを取得
export const loader: LoaderFunction = async () => {
  // TODO: 実際のデータ取得ロジックを実装する
  const dashboardData: DashboardData = {
    totalUsers: 1000,
    totalMessages: 5000,
    activeChats: 50,
  };

  return json(dashboardData);
};

export default function Dashboard() {
  const data = useLoaderData<DashboardData>();

  return (
    