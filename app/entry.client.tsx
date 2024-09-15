import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';

// クライアントサイドのエントリーポイント
function hydrate() {
  React.startTransition(() => {
    hydrateRoot(
      document,
      <React.StrictMode>
        <RemixBrowser />
      </React.StrictMode>
    );
  });
}

// ブラウザがページの読み込みを完了したら hydrate を実行
if (typeof requestIdleCallback === 'function') {
  requestIdleCallback(hydrate);
} else {
  // requestIdleCallback がサポートされていない場合は、setTimeout を使用
  setTimeout(hydrate, 1);
}

// エラーハンドリング
if (process.env.NODE_ENV === 'development') {
  window.addEventListener('error', (event) => {