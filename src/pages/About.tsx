import React from 'react';
import { Cpu, Zap, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
          About BGround Remover
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
          Professional background removal powered by advanced AI technology
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Cpu className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">AI Powered</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Advanced AI algorithms for precise background removal
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Zap className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Lightning Fast</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Process images in seconds with high accuracy
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Secure</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your images are processed securely and never stored
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}