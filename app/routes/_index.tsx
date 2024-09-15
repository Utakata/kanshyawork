import React from 'react';
import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">LINE感謝ワークボット</h1>
      
      <p className="mb-4">
        このアプリケーションは、LINEを通じて感謝の気持ちを表現し、ポジティブな職場環境を促進するためのボットです。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">特徴</h2>
          <ul className="list-disc list-inside