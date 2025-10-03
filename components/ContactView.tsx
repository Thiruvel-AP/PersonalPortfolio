
import React from 'react';
import type { Profile } from '../types';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons/SocialIcons';
import { PhoneIcon } from './icons/ContentIcons';

const ContactView: React.FC<{ profile: Profile }> = ({ profile }) => {
  const githubLink = profile.links.find(l => l.name.toLowerCase() === 'github');
  const linkedinLink = profile.links.find(l => l.name.toLowerCase() === 'linkedin');

  return (
    <div className="animate-fade-in-up max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">Get In Touch</h1>
      <p className="text-gray-600 dark:text-text-secondary mb-12 max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
      </p>
      <div className="bg-white/50 dark:bg-secondary/30 backdrop-blur-lg border border-gray-200/50 dark:border-border-color/50 rounded-xl p-8 sm:p-12 space-y-8 transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-gray-400/20 dark:hover:shadow-accent/20 hover:-translate-y-2 hover:border-gray-300 dark:hover:border-accent/70">
        <a href={`mailto:${profile.email}`} className="block p-4 -m-4 rounded-lg transition-colors duration-300 hover:bg-gray-500/10 dark:hover:bg-white/10 group">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <MailIcon className="w-8 h-8 text-gray-800 dark:text-accent transition-transform duration-300 group-hover:scale-110" />
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Me</h3>
              <span className="text-blue-600 dark:text-accent group-hover:underline text-lg group-hover:text-blue-800 dark:group-hover:text-highlight transition-colors">{profile.email}</span>
            </div>
          </div>
        </a>
        <hr className="border-gray-200 dark:border-border-color/50" />
        <a href={`tel:${profile.phone}`} className="block p-4 -m-4 rounded-lg transition-colors duration-300 hover:bg-gray-500/10 dark:hover:bg-white/10 group">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
               <PhoneIcon className="w-8 h-8 text-gray-800 dark:text-accent transition-transform duration-300 group-hover:scale-110" />
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Call Me</h3>
                <span className="text-blue-600 dark:text-accent group-hover:underline text-lg group-hover:text-blue-800 dark:group-hover:text-highlight transition-colors">{profile.phone}</span>
              </div>
            </div>
        </a>
        <hr className="border-gray-200 dark:border-border-color/50" />
         <div className="flex justify-center space-x-6 pt-4">
            {linkedinLink && (
                 <a href={linkedinLink.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer inline-flex items-center justify-center p-3 rounded-full transition-all duration-300 ease-in-out text-gray-600 dark:text-text-secondary hover:text-white dark:hover:text-primary hover:bg-gradient-to-br from-sky-400 to-fuchsia-500 hover:scale-110 hover:shadow-lg dark:hover:shadow-accent/20">
                    <LinkedInIcon className="w-8 h-8" />
                </a>
            )}
            {githubLink && (
                 <a href={githubLink.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer inline-flex items-center justify-center p-3 rounded-full transition-all duration-300 ease-in-out text-gray-600 dark:text-text-secondary hover:text-white dark:hover:text-primary hover:bg-gradient-to-br from-sky-400 to-fuchsia-500 hover:scale-110 hover:shadow-lg dark:hover:shadow-accent/20">
                    <GitHubIcon className="w-8 h-8" />
                </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default ContactView;
