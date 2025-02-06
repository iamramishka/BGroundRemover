import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Samples } from './pages/Samples';
import { About } from './pages/About';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <BrowserRouter>
      <div className={`min-h-screen transition-colors duration-200 ${
        theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="flex flex-col min-h-screen">
          <header className="relative">
            <Navigation />
            <button
              onClick={toggleTheme}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? (
                <Moon className="w-6 h-6 dark:text-white" />
              ) : (
                <Sun className="w-6 h-6 text-white" />
              )}
            </button>
          </header>

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/samples" element={<Samples />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;