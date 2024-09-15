import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          感謝ワークbot
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-blue-200">
              ホーム
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-blue-200">
              概要
            </Link>
          </li>
          <li>
            <Link href="/work" className="text-white hover:text-blue-200">
              ワーク
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-blue-200