import React from 'react';
import { useNavigate } from '@remix-run/react';
import { json, LoaderFunction } from '@remix-run/node';
import { v4 as uuidv4 } from 'uuid';

// LINE認証に必要な環境変数
const LINE_CHANNEL_ID = process.env.LINE_CHANNEL_ID;
const LINE_REDIRECT_URI = process.env.LINE_REDIRECT_URI;

// ローダー関数
export const loader: LoaderFunction = async ({ request }) => {
  // 認証用のステートを生成
  const state = uuidv4();
  
  // LINEログインURLを構築
  const lineLoginUrl = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${LINE_CHANNEL_ID}&redirect_uri=${LINE_REDIRECT_URI}&state=${state}&scope=profile%20openid`;

  // ステートをセッションに保存する処理をここに追加
  // (セ