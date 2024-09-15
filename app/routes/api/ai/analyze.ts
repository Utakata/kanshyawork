import { Hono } from 'hono';
import { GoogleGenerativeAI } from '@google/generative-ai';

// 環境変数からGemini API Keyを取得
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not set in the environment variables');
}

// Gemini APIクライアントの初期化
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const app = new Hono();

app.post('/api/ai/analyze', async (c) => {
  try {
    const { message } = await c.req.json();

    if (!message || typeof message !== 'string') {
      return c.json({ error: 'Invalid message format' }, 400);
    }

    // Gemini APIを使用して感謝メッセージを分析
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });