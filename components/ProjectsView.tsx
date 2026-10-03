import React from 'react';
import type { Project } from '../types';
import { paths } from '../router';
import { GitHubIcon } from './icons/SocialIcons';
import { Chip, SectionHeading, card } from './ui';
import ProjectImage from './ProjectImage';

const ProjectsView: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <div className="animate-fade-in-up space-y-14">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Projects</h1>

      <section aria-labelledby="featured-projects">
        <SectionHeading id="featured-projects">Featured case studies</SectionHeading>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map(project => (
            <li key={project.slug} className={`${card} overflow-hidden flex flex-col`}>
              {project.image && <ProjectImage image={project.image} className="w-full h-48 object-cover" />}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                <p className="text-gray-700 dark:text-text-secondary mb-4 flex-grow">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-5" aria-label="Technologies">
                  {project.technologies.map(tech => <li key={tech}><Chip>{tech}</Chip></li>)}
                </ul>
                <a href={paths.project(project.slug)} className="font-semibold text-sky-700 dark:text-sky-300 hover:underline self-start">
                  Read the case study<span className="sr-only">: {project.name}</span> &rarr;
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="other-projects">
        <SectionHeading id="other-projects">Other projects</SectionHeading>
        <ul className="divide-y divide-gray-200 dark:divide-border-color border-y border-gray-200 dark:border-border-color">
          {others.map(project => (
            <li key={project.slug} className="py-5">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.name}</h3>
              <p className="mt-1 text-sm text-gray-700 dark:text-text-secondary">{project.description}</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-text-secondary">
                <span className="font-semibold text-gray-800 dark:text-text-primary">Tech: </span>
                {project.technologies.join(', ')}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 dark:text-sky-300 hover:underline"
                >
                  <GitHubIcon className="w-4 h-4" />
                  View on GitHub<span className="sr-only">: {project.name} (opens in a new tab)</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProjectsView;
