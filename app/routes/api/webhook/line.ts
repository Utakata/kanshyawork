import { Hono } from 'hono';
import { Client, middleware, WebhookEvent } from '@line/bot-sdk';

// LINE Bot SDK の設定
const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN!,
  channelSecret: process.env.LINE_CHANNEL_SECRET!,
};

// LINE クライアントの初期化
const client = new Client(config);

// Hono アプリケーションの作成
const app = new Hono();

// LINE Messaging API からのリクエストを検証するミドルウェア
app.use('/webhook', middleware(config));

// ウェブフックエンドポイント
app.post('/webhook', async (c) => {
  const events: WebhookEvent[] = c.req.json();

  // 受信したイベントを処理
  await Promise.all(events.map(handleEvent));

  return