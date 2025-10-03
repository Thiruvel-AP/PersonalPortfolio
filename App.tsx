import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainView from './components/MainView';
import ProjectsView from './components/ProjectsView';
import ContactView from './components/ContactView';
import { initialData } from './PortfolioData/Data';
import type { PortfolioData, View } from './types';
import { GitHubIcon, LinkedInIcon, MailIcon } from './components/icons/SocialIcons';



const App: React.FC = () => {
  const [portfolioData] = useState<PortfolioData>(initialData);
  const [currentView, setCurrentView] = useState<View>('main');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const renderContent = () => {
    if (!portfolioData) {
      return <div className="text-center p-10 dark:text-white text-gray-800">Loading...</div>;
    }

    switch (currentView) {
      case 'main':
        return <MainView data={portfolioData} setCurrentView={setCurrentView} />;
      case 'projects':
        return <ProjectsView projects={portfolioData.projects} />;
      case 'contact':
        return <ContactView profile={portfolioData.profile} />;
      default:
        return <MainView data={portfolioData} setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen text-gray-800 dark:text-text-primary font-sans bg-gradient-to-br from-gray-50 to-blue-50 dark:from-primary dark:to-secondary/50">
      <div className="min-h-screen relative">
        <Header 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
          theme={theme}
          onToggleTheme={handleThemeToggle}
        />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </main>
           <footer className="mt-12 py-6">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-text-secondary">
                  <div className="flex justify-center space-x-4 mb-4">
                    {portfolioData.profile.links?.find(l => l.name.toLowerCase() === 'github')?.url && (
                       <a href={portfolioData.profile.links.find(l => l.name.toLowerCase() === 'github')?.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out text-gray-500 dark:text-text-secondary hover:text-white dark:hover:text-primary hover:bg-gradient-to-br from-sky-400 to-fuchsia-500 hover:scale-110 hover:shadow-lg dark:hover:shadow-accent/20">
                        <GitHubIcon className="w-6 h-6" />
                      </a>
                    )}
                     {portfolioData.profile.links?.find(l => l.name.toLowerCase() === 'linkedin')?.url && (
                       <a href={portfolioData.profile.links.find(l => l.name.toLowerCase() === 'linkedin')?.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out text-gray-500 dark:text-text-secondary hover:text-white dark:hover:text-primary hover:bg-gradient-to-br from-sky-400 to-fuchsia-500 hover:scale-110 hover:shadow-lg dark:hover:shadow-accent/20">
                        <LinkedInIcon className="w-6 h-6" />
                      </a>
                    )}
                    <a href={`mailto:${portfolioData.profile.email}`} className="group cursor-pointer inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out text-gray-500 dark:text-text-secondary hover:text-white dark:hover:text-primary hover:bg-gradient-to-br from-sky-400 to-fuchsia-500 hover:scale-110 hover:shadow-lg dark:hover:shadow-accent/20">
                        <MailIcon className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-sm">&copy; {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.</p>
              </div>
          </footer>
      </div>
    </div>
  );
};

export default App;