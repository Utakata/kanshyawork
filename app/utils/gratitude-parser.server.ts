// gratitude-parser.server.ts

/**
 * 感謝メッセージを解析するためのユーティリティ関数を提供します。
 * このモジュールはサーバーサイドでのみ使用されることを想定しています。
 */

/**
 * 感謝メッセージの構造を定義するインターフェース
 */
interface GratitudeMessage {
  recipient: string;
  reason: string;
  sentiment: 'positive' | 'neutral' | 'negative';
}

/**
 * 感謝メッセージを解析し、構造化されたオブジェクトを返します。
 * @param message 解析する感謝メッセージ
 * @returns 構造化された感謝メッセージオブジェクト
 */
export function parseGratitudeMessage(message: string): Grat