
import React from 'react';
import type { Project } from '../types';
import { GitHubIcon } from './icons/SocialIcons';
import { CheckCircleIcon } from './icons/ContentIcons';

const ProjectsView: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white/50 dark:bg-secondary/30 backdrop-blur-lg border border-gray-200/50 dark:border-border-color/50 rounded-xl flex flex-col group transition-all duration-300 hover:border-gray-400 dark:hover:border-accent hover:shadow-2xl hover:shadow-gray-400/20 dark:hover:shadow-accent/20 hover:-translate-y-2 overflow-hidden cursor-pointer"
          >
            <div className="overflow-hidden">
              <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"/>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-accent transition-colors">{project.name}</h2>
              <p className="text-gray-600 dark:text-text-secondary mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 dark:text-text-primary mb-3">Key Features:</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-text-secondary">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                       <div className="flex-shrink-0 mt-1 mr-2 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br from-sky-400 to-fuchsia-500">
                        <CheckCircleIcon className="w-3 h-3 text-blue-600 dark:text-accent group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-4">
                <h4 className="font-semibold text-gray-800 dark:text-text-primary mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-100 dark:bg-primary/50 border border-gray-200 dark:border-border-color text-gray-700 dark:text-text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 dark:text-accent font-semibold hover:text-blue-800 dark:hover:text-highlight hover:underline mt-auto flex items-center group"
                >
                  <GitHubIcon className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;