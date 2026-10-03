import { useSyncExternalStore } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'projects' }
  | { name: 'project'; slug: string }
  | { name: 'contact' }
  | { name: 'not-found' };

export const paths = {
  home: '#/',
  projects: '#/projects',
  project: (slug: string) => `#/projects/${slug}`,
  contact: '#/contact',
};

export function parseHash(hash: string): Route {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (parts.length === 0) return { name: 'home' };
  if (parts[0] === 'projects') {
    if (parts.length === 1) return { name: 'projects' };
    if (parts.length === 2) return { name: 'project', slug: decodeURIComponent(parts[1]) };
  }
  if (parts[0] === 'contact' && parts.length === 1) return { name: 'contact' };
  return { name: 'not-found' };
}

function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
}

const getSnapshot = () => window.location.hash;

/** Current route, derived from location.hash. The browser's back button works because every link is a plain #/ anchor. */
export function useRoute(): Route {
  const hash = useSyncExternalStore(subscribe, getSnapshot, () => '');
  return parseHash(hash);
}
