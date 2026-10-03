import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import MainView from './components/MainView';
import ProjectsView from './components/ProjectsView';
import ProjectPage from './components/ProjectPage';
import ContactView from './components/ContactView';
import { initialData } from './PortfolioData/Data';
import { paths, useRoute } from './router';
import type { Route } from './router';
import { GitHubIcon, LinkedInIcon, MailIcon } from './components/icons/SocialIcons';

const footerLink = 'inline-flex items-center justify-center p-2 rounded-full text-gray-600 dark:text-text-secondary hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-secondary transition-colors';

function titleFor(route: Route, name: string): string {
  const project = route.name === 'project' ? initialData.projects.find(p => p.slug === route.slug) : undefined;
  switch (route.name) {
    case 'projects': return `Projects | ${name}`;
    case 'project': return project ? `${project.name} | ${name}` : `Project not found | ${name}`;
    case 'contact': return `Contact | ${name}`;
    case 'not-found': return `Page not found | ${name}`;
    default: return `${name} | ${initialData.profile.title.split('|')[0].trim()}`;
  }
}

const App: React.FC = () => {
  const data = initialData;
  const route = useRoute();
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'dark'; } catch { return 'dark'; }
  });
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try { localStorage.setItem('theme', theme); } catch { /* storage unavailable */ }
  }, [theme]);

  // Title follows the route. Scroll-to-top and focus only run when the route actually changes, never on the initial
  // load (comparing against the previous key also survives StrictMode's double-invoked effects in dev).
  const routeKey = route.name === 'project' ? `project:${route.slug}` : route.name;
  const previousRouteKey = useRef(routeKey);
  useEffect(() => {
    document.title = titleFor(route, data.profile.name);
    if (previousRouteKey.current === routeKey) return;
    previousRouteKey.current = routeKey;
    window.scrollTo({ top: 0, behavior: 'instant' });
    mainRef.current?.focus({ preventScroll: true });
  }, [routeKey]);

  const link = (name: string) => data.profile.links.find(l => l.name.toLowerCase() === name)?.url;
  const github = link('github');
  const linkedin = link('linkedin');

  const renderContent = () => {
    switch (route.name) {
      case 'projects':
        return <ProjectsView projects={data.projects} />;
      case 'project': {
        const project = data.projects.find(p => p.slug === route.slug && p.featured);
        if (project) return <ProjectPage project={project} />;
        return <NotFound message="That project case study does not exist." />;
      }
      case 'contact':
        return <ContactView profile={data.profile} />;
      case 'not-found':
        return <NotFound message="That page does not exist." />;
      default:
        return <MainView data={data} />;
    }
  };

  return (
    <div className="min-h-screen text-gray-800 dark:text-text-primary font-sans bg-gray-50 dark:bg-primary">
      <a href="#main" onClick={e => { e.preventDefault(); mainRef.current?.focus(); }} className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-gray-900 focus:px-4 focus:py-2 focus:rounded-md">
        Skip to content
      </a>
      <Header route={route} name="Thiruvel A P" theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main id="main" ref={mainRef} tabIndex={-1} className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      <footer className="mt-12 py-8 border-t border-gray-200 dark:border-border-color">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-text-secondary">
          <div className="flex justify-center gap-4 mb-4">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className={footerLink} aria-label="GitHub (opens in a new tab)">
                <GitHubIcon className="w-6 h-6" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className={footerLink} aria-label="LinkedIn (opens in a new tab)">
                <LinkedInIcon className="w-6 h-6" />
              </a>
            )}
            <a href={`mailto:${data.profile.email}`} className={footerLink} aria-label="Email">
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} {data.profile.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const NotFound: React.FC<{ message: string }> = ({ message }) => (
  <div className="text-center py-20">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Not found</h1>
    <p className="text-gray-700 dark:text-text-secondary mb-6">{message}</p>
    <a href={paths.home} className="font-semibold text-sky-700 dark:text-sky-300 hover:underline">Back to the home page</a>
  </div>
);

export default App;
