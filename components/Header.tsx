import React from 'react';
import type { View } from '../types';
import { MoonIcon, SunIcon } from './icons/ContentIcons';

interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  theme: string;
  onToggleTheme: () => void;
}

const NavLink: React.FC<{
  viewName: View;
  currentView: View;
  setCurrentView: (view: View) => void;
  children: React.ReactNode;
}> = ({ viewName, currentView, setCurrentView, children }) => {
  const isActive = currentView === viewName;
  return (
    <button
      onClick={() => setCurrentView(viewName)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative ${
        isActive
          ? 'text-gray-900 dark:text-accent'
          : 'text-gray-500 dark:text-text-secondary hover:text-gray-900 dark:hover:text-text-primary'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
      {isActive && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gray-900 dark:bg-accent rounded-full"></span>}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView, theme, onToggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/50 dark:bg-primary/50 backdrop-blur-lg border-b border-gray-200/50 dark:border-border-color/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentView('main')}
              className="font-extrabold text-xl text-gray-900 dark:text-white tracking-wider transition-opacity hover:opacity-80"
            >
              Hi, I'm Thiruvel, a Data Scientist - I build AI, Data & ML Projects.
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <NavLink viewName="main" currentView={currentView} setCurrentView={setCurrentView}>
              Home
            </NavLink>
            <NavLink viewName="projects" currentView={currentView} setCurrentView={setCurrentView}>
              Projects
            </NavLink>
            <NavLink viewName="contact" currentView={currentView} setCurrentView={setCurrentView}>
              Contact
            </NavLink>
             <button
              onClick={onToggleTheme}
              className="ml-4 p-2 rounded-full text-gray-500 dark:text-text-secondary hover:bg-gray-200 dark:hover:bg-secondary transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;