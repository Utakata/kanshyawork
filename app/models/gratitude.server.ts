import { db } from '../utils/db.server';
import { Gratitude } from '../types';

export class GratitudeModel {
  /**
   * 新しい感謝投稿を作成する
   * @param userId ユーザーID
   * @param content 感謝の内容
   * @returns 作成された感謝投稿
   */
  static async create(userId: string, content: string): Promise<Gratitude> {
    const gratitude = await db.gratitude.create({
      data: {
        userId,
        content,
        createdAt: new Date(),
      },
    });
    return gratitude;
  }

  /**
   * 特定のユーザーの感謝投稿を取得する
   * @param userId ユーザーID
   * @param limit 取得する投稿の最大数
   * @returns 感謝投稿の配列
   */
  static async getByUserId(userId: string, limit: number = 10): Promise