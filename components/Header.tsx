import React from 'react';
import type { Route } from '../router';
import { paths } from '../router';
import { MoonIcon, SunIcon } from './icons/ContentIcons';

interface HeaderProps {
  route: Route;
  name: string;
  theme: string;
  onToggleTheme: () => void;
}

const NavLink: React.FC<{ href: string; active: boolean; children: React.ReactNode }> = ({ href, active, children }) => (
  <a
    href={href}
    aria-current={active ? 'page' : undefined}
    className={`relative px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      active
        ? 'text-gray-900 dark:text-accent'
        : 'text-gray-600 dark:text-text-secondary hover:text-gray-900 dark:hover:text-text-primary'
    }`}
  >
    {children}
    {active && <span aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gray-900 dark:bg-accent rounded-full"></span>}
  </a>
);

const Header: React.FC<HeaderProps> = ({ route, name, theme, onToggleTheme }) => (
  <header className="sticky top-0 z-50 bg-gray-50/95 dark:bg-primary/95 border-b border-gray-200 dark:border-border-color">
    <nav aria-label="Main" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <a href={paths.home} className="font-bold text-base sm:text-xl whitespace-nowrap text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
          {name}
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <NavLink href={paths.home} active={route.name === 'home'}>Home</NavLink>
          <NavLink href={paths.projects} active={route.name === 'projects' || route.name === 'project'}>Projects</NavLink>
          <NavLink href={paths.contact} active={route.name === 'contact'}>Contact</NavLink>
          <button
            type="button"
            onClick={onToggleTheme}
            className="ml-2 p-2 rounded-full text-gray-600 dark:text-text-secondary hover:bg-gray-200 dark:hover:bg-secondary transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
