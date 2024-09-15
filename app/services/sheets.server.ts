import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

// Google Sheets APIのバージョン
const SHEETS_API_VERSION = 'v4';

// 環境変数から認証情報を取得
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !SPREADSHEET_ID) {
  throw new Error('必要な環境変数が設定されていません');
}

// JWTクライアントの作成
const jwtClient = new JWT({
  email: GOOGLE_CLIENT_EMAIL,
  key: GOOGLE_PRIVATE_KEY,
  scopes: ['https://www