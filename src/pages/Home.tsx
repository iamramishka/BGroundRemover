import React from 'react';
import { ImageUploader } from '../components/ImageUploader';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 dark:text-white">
          Your Background,{' '}
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            Gone in Seconds
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Seamless • Fast • Effortless
        </p>
        <ImageUploader />
      </div>
    </div>
  );
}