import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons/SocialIcons';

const base = 'inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-colors';
export const primaryBtn = `${base} text-white bg-gray-900 hover:bg-gray-700 dark:text-primary dark:bg-accent dark:hover:bg-highlight`;
export const secondaryBtn = `${base} border border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-border-color dark:text-text-primary dark:hover:bg-secondary`;

export const card = 'bg-white dark:bg-secondary/40 border border-gray-200 dark:border-border-color rounded-xl';

export const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-gray-100 dark:bg-primary border border-gray-200 dark:border-border-color text-gray-700 dark:text-text-primary text-xs font-medium px-2.5 py-1 rounded-full">
    {children}
  </span>
);

export const SectionHeading: React.FC<{ id: string; icon?: React.ReactNode; children: React.ReactNode }> = ({ id, icon, children }) => (
  <h2 id={id} className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
    {icon}
    {children}
  </h2>
);

interface ContactButtonsProps {
  email: string;
  linkedin?: string;
  github?: string;
}

/** Email, LinkedIn, GitHub. External links open in a new tab. */
export const ContactButtons: React.FC<ContactButtonsProps> = ({ email, linkedin, github }) => (
  <div className="flex flex-wrap gap-3">
    <a href={`mailto:${email}`} className={primaryBtn}>
      <MailIcon className="w-4 h-4" /> Email
    </a>
    {linkedin && (
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
        <LinkedInIcon className="w-4 h-4" /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
      </a>
    )}
    {github && (
      <a href={github} target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
        <GitHubIcon className="w-4 h-4" /> GitHub<span className="sr-only"> (opens in a new tab)</span>
      </a>
    )}
  </div>
);
