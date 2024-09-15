import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'LINE感謝ワークbot' }) => {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h1>{title}</h1>
        {/* ここにナビゲーションなどのヘッダー要素を追加できます */}
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} LINE感謝ワークbot. All rights