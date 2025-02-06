import React from 'react';
import { NavLink } from 'react-router-dom';
import { Eraser } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-xl">
              <Eraser className="w-6 h-6 text-white transform -rotate-45" />
            </div>
            <div className="text-xl font-bold dark:text-white">
              <span className="text-blue-600">B</span>Ground
              <span className="text-blue-600 ml-1">Remover</span>
            </div>
          </NavLink>

          <div className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 ${
                  isActive ? 'text-blue-600 dark:text-blue-500' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/samples"
              className={({ isActive }) =>
                `text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 ${
                  isActive ? 'text-blue-600 dark:text-blue-500' : ''
                }`
              }
            >
              Samples
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 ${
                  isActive ? 'text-blue-600 dark:text-blue-500' : ''
                }`
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}