import React from 'react';
import { Form, useActionData, useTransition } from '@remix-run/react';
import { json, redirect } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';

// 感謝の投稿を処理するアクション
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const content = formData.get('content');

  // 入力値のバリデーション
  if (typeof content !== 'string' || content.length < 3) {
    return json({ error: '感謝の内容は3文字以上で入力してください。' }, { status: 400 });
  }

  try {
    // TODO: ここで実際のデータ保存処理を実装する
    // 例: await save