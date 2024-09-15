import { Client, ClientConfig, MessageEvent, TextMessage } from '@line/bot-sdk';
import { env } from '~/env.server';

// LINE Bot SDK のクライアント設定
const clientConfig: ClientConfig = {
  channelAccessToken: env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: env.LINE_CHANNEL_SECRET,
};

// LINE クライアントのインスタンスを作成
const client = new Client(clientConfig);

/**
 * メッセージイベントを処理する関数
 * @param event LINEのメッセージイベント
 */
export async function handleMessageEvent(event: MessageEvent): Promise<void> {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return;
  }

  const { replyToken } = event;
  const { text } = event.message;

  try {
    await replyToMessage(re