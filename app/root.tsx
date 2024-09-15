import React from 'react';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';

// スタイルシートのインポート（存在する場合）
import styles from './styles/global.css';

// リンク関数の定義
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
];

// メタ関数の定義
export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Line感謝ワークbot',
  viewport: 'width=device-width,initial-scale=1',
});

// ルートコンポーネント
export default function App() {
  return (
    <html lang="ja">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        