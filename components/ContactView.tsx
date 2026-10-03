import React from 'react';
import type { Profile } from '../types';
import { ContactButtons, card } from './ui';
import { MailIcon } from './icons/SocialIcons';

const ContactView: React.FC<{ profile: Profile }> = ({ profile }) => {
  const link = (name: string) => profile.links.find(l => l.name.toLowerCase() === name)?.url;

  return (
    <div className="animate-fade-in-up max-w-3xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h1>
      <p className="text-gray-700 dark:text-text-secondary mb-10 max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
      </p>
      <div className={`${card} p-8 sm:p-12 space-y-8`}>
        <div className="flex flex-col items-center gap-3">
          <MailIcon className="w-8 h-8 text-gray-800 dark:text-accent" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Email me</h2>
          <a href={`mailto:${profile.email}`} className="text-lg text-sky-700 dark:text-sky-300 hover:underline break-all">{profile.email}</a>
        </div>
        <div className="flex justify-center">
          <ContactButtons email={profile.email} linkedin={link('linkedin')} github={link('github')} />
        </div>
      </div>
    </div>
  );
};

export default ContactView;
