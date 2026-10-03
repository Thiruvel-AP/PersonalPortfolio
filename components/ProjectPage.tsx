import React from 'react';
import type { Project } from '../types';
import { paths } from '../router';
import { GitHubIcon } from './icons/SocialIcons';
import { Chip, SectionHeading, card, secondaryBtn } from './ui';
import ProjectImage from './ProjectImage';

const Block: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <section aria-labelledby={id}>
    <SectionHeading id={id}>{title}</SectionHeading>
    {children}
  </section>
);

const Prose: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-gray-700 dark:text-text-secondary leading-relaxed max-w-3xl">{children}</p>
);

/** Case-study page for a featured project, reachable at #/projects/<slug>. */
const ProjectPage: React.FC<{ project: Project }> = ({ project }) => {
  const study = project.caseStudy;
  const links = study?.links ?? {};
  const linkItems = [
    links.repo && { label: 'Repository', url: links.repo },
    links.demo && { label: 'Live demo', url: links.demo },
    links.diagram && { label: 'Architecture diagram', url: links.diagram },
  ].filter((l): l is { label: string; url: string } => Boolean(l));

  return (
    <article className="animate-fade-in-up space-y-12 max-w-4xl mx-auto">
      <div>
        <a href={paths.projects} className="text-sm font-semibold text-sky-700 dark:text-sky-300 hover:underline">&larr; All projects</a>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{project.name}</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-text-secondary max-w-3xl">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map(tech => <li key={tech}><Chip>{tech}</Chip></li>)}
        </ul>
      </div>

      {project.image && (
        <ProjectImage image={project.image} className={`${card} w-full h-auto`} />
      )}

      {study && (
        <>
          <Block id="problem" title="Problem"><Prose>{study.problem}</Prose></Block>
          <Block id="approach" title="Approach"><Prose>{study.approach}</Prose></Block>
          <Block id="decisions" title="Key decisions">
            <ul className="list-disc ml-5 space-y-3 text-gray-700 dark:text-text-secondary leading-relaxed max-w-3xl">
              {study.decisions.map((decision, i) => <li key={i}>{decision}</li>)}
            </ul>
          </Block>
          <Block id="result" title="Result"><Prose>{study.result}</Prose></Block>
          {study.improve && <Block id="improve" title="What I would improve"><Prose>{study.improve}</Prose></Block>}
        </>
      )}

      {linkItems.length > 0 && (
        <Block id="links" title="Links">
          <ul className="flex flex-wrap gap-3">
            {linkItems.map(item => (
              <li key={item.url}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
                  <GitHubIcon className="w-4 h-4" />
                  {item.label}<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Block>
      )}
    </article>
  );
};

export default ProjectPage;
