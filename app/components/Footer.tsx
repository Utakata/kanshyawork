import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Line感謝ワークbot. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="/privacy"
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              プライバシーポリシー
            </a>
            <a
              href="/terms"
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-