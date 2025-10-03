import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import MainView from './components/MainView';
import ProjectsView from './components/ProjectsView';
import ContactView from './components/ContactView';
import DataManagerView from './components/DataManagerView';
import LoginModal from './components/LoginModal';
import { getPortfolioData, savePortfolioData } from './services/localStorageService';
import { initialData } from './services/initialData';
import type { PortfolioData, View } from './types';
import { GitHubIcon, LinkedInIcon, MailIcon } from './components/icons/SocialIcons';
import { PenIcon } from './components/icons/ContentIcons';

const App: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [currentView, setCurrentView] = useState<View>('main');
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      console.log("Applying dark theme");
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      console.log("Applying light theme");
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    // Load portfolio data
    let data = getPortfolioData();
    if (!data) {
      data = initialData;
      savePortfolioData(data);
    }
    setPortfolioData(data);
    setCurrentView('main');
    setIsDataLoaded(true);
  }, []);

  const handleDataUpdate = useCallback(() => {
    const data = getPortfolioData();
    setPortfolioData(data);
    if (data) {
      setCurrentView('main');
    } else {
      // If data is cleared, create a fresh set of initial data
      savePortfolioData(initialData);
      setPortfolioData(initialData);
      setCurrentView('manage');
    }
  }, []);

  const handleLoginAttempt = (email: string): boolean => {
    // Admin email is now securely retrieved from environment variables
    console.log('Admin Email:', process.env.ADMIN_EMAIL); // For debugging purposes only; remove in production
    const isSuccess = email.toLowerCase() === ('apthiruvel@gmail.com').toLowerCase();
    if (isSuccess) {
      setIsLoginModalOpen(false);
      setCurrentView('manage');
    }
    return isSuccess;
  };

  const renderContent = () => {
    if (!isDataLoaded || !portfolioData) {
      return <div className="text-center p-10 dark:text-white text-gray-800">Loading...</div>;
    }

    switch (currentView) {
      case 'manage':
        return <DataManagerView onDataUpdate={handleDataUpdate} />;
      case 'main':
        return <MainView data={portfolioData} />;
      case 'projects':
        return <ProjectsView projects={portfolioData.projects} />;
      case 'contact':
        return <ContactView profile={portfolioData.profile} />;
      default:
        return <MainView data={portfolioData} />;
    }
  };

  const hasData = portfolioData !== null;

  return (
    <div className="min-h-screen text-gray-800 dark:text-text-primary font-sans bg-gradient-to-br from-gray-50 to-blue-50 dark:from-primary dark:to-secondary/50">
      <div className="min-h-screen relative">
        <Header 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
          hasData={hasData}
          theme={theme}
          onToggleTheme={handleThemeToggle}
        />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </main>
        {hasData && currentView !== 'manage' && (
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
        )}

        {/* Floating Action Button for Editing */}
        {currentView !== 'manage' && (
            <button
                onClick={() => setIsLoginModalOpen(true)}
                className="fixed bottom-8 right-8 bg-gray-900 text-white dark:bg-accent dark:text-primary p-4 rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-highlight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-accent focus:ring-offset-white dark:focus:ring-offset-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Edit Portfolio Data"
            >
                <PenIcon className="w-6 h-6" />
            </button>
        )}
        {isLoginModalOpen && (
          <LoginModal 
            onClose={() => setIsLoginModalOpen(false)}
            onLoginAttempt={handleLoginAttempt}
          />
        )}
      </div>
    </div>
  );
};

export default App;