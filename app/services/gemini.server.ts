import { GoogleGenerativeAI } from '@google/generative-ai';

// 環境変数から API キーを取得
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('GEMINI_API_KEY is not set in environment variables');
}

// Gemini API クライアントの初期化
const genAI = new GoogleGenerativeAI(API_KEY);

export class GeminiService {
  private model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  /**
   * テキスト生成を行う
   * @param prompt 生成のためのプロンプト
   * @returns 生成されたテキスト
   */
  async generateText(prompt: string): Promise<string> {
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.