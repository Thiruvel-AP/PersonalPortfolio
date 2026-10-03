import React from 'react';
import type { PortfolioData } from '../types';
import { paths } from '../router';
import { AwardIcon, BriefcaseIcon, GraduationCapIcon, LightbulbIcon, MapPinIcon } from './icons/ContentIcons';
import { Chip, ContactButtons, SectionHeading, card } from './ui';

const iconClass = 'w-7 h-7 text-gray-800 dark:text-accent';

const Timeline: React.FC<{
    icon: React.ReactNode;
    items: { key: string; title: string; subtitle: string; meta: string; metaSecondary?: string; body?: React.ReactNode }[];
}> = ({ icon, items }) => (
    <ol className="space-y-6">
        {items.map(item => (
            <li key={item.key} className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 dark:bg-accent text-white dark:text-primary inline-flex items-center justify-center" aria-hidden="true">
                    {icon}
                </div>
                <div className={`${card} p-5 sm:p-6 flex-grow min-w-0`}>
                    <div className="flex justify-between items-start flex-col sm:flex-row gap-1">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                            <p className="font-semibold text-gray-700 dark:text-text-primary">{item.subtitle}</p>
                        </div>
                        <div className="sm:text-right flex-shrink-0 sm:ml-4 text-sm">
                            <p className="font-medium text-gray-700 dark:text-text-secondary">{item.meta}</p>
                            {item.metaSecondary && <p className="text-gray-600 dark:text-text-secondary">{item.metaSecondary}</p>}
                        </div>
                    </div>
                    {item.body}
                </div>
            </li>
        ))}
    </ol>
);

const MainView: React.FC<{ data: PortfolioData }> = ({ data }) => {
    const { profile } = data;
    const link = (name: string) => profile.links.find(l => l.name.toLowerCase() === name)?.url;
    const featured = data.projects.filter(p => p.featured);

    return (
        <div className="space-y-16 sm:space-y-20">
            {/* Hero */}
            <section aria-labelledby="hero-name" className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 pt-8 sm:pt-12 animate-fade-in-up">
                <div className="min-w-0 space-y-4 text-center md:text-left">
                    <h1 id="hero-name" style={{ fontSize: 'clamp(2rem, 8vw, 3.75rem)' }} className="font-bold text-gray-900 dark:text-white tracking-tight">{profile.name}</h1>
                    <p className="text-xl sm:text-2xl text-gray-800 dark:text-text-primary font-semibold">{profile.title}</p>
                    <p className="text-gray-600 dark:text-text-secondary flex items-center justify-center md:justify-start gap-2">
                        <MapPinIcon className="w-5 h-5" />
                        {profile.location}
                    </p>
                    <p className="text-lg text-gray-700 dark:text-text-primary max-w-xl mx-auto md:mx-0 pt-2">{profile.tagline}</p>
                    <p className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-text-primary bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 rounded-full px-3 py-1">
                        <span aria-hidden="true" className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                        {profile.status}
                    </p>
                    <div className="flex justify-center md:justify-start pt-2">
                        <ContactButtons email={profile.email} linkedin={link('linkedin')} github={link('github')} />
                    </div>
                </div>
                <img
                    src={profile.imageUrl}
                    alt={`Portrait of ${profile.name}`}
                    width={224}
                    height={224}
                    fetchPriority="high"
                    className="flex-shrink-0 w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover shadow-xl border-4 border-white dark:border-secondary"
                />
            </section>

            {/* About */}
            <section aria-labelledby="about">
                <SectionHeading id="about">About</SectionHeading>
                <div className="space-y-4 max-w-3xl text-gray-700 dark:text-text-secondary leading-relaxed">
                    {profile.about.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                </div>
            </section>

            {/* Featured projects */}
            <section aria-labelledby="featured">
                <SectionHeading id="featured">Featured projects</SectionHeading>
                <ul className="grid gap-4 md:grid-cols-2">
                    {featured.map(project => (
                        <li key={project.slug} className={`${card} p-6 flex flex-col`}>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                            <p className="text-sm text-gray-700 dark:text-text-secondary mb-4 flex-grow">{project.description}</p>
                            <a href={paths.project(project.slug)} className="font-semibold text-sky-700 dark:text-sky-300 hover:underline self-start">
                                Read the case study<span className="sr-only">: {project.name}</span> &rarr;
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="mt-6">
                    <a href={paths.projects} className="font-semibold text-sky-700 dark:text-sky-300 hover:underline">All projects &rarr;</a>
                </p>
            </section>

            {/* Experience */}
            <section aria-labelledby="experience">
                <SectionHeading id="experience" icon={<BriefcaseIcon className={iconClass} />}>Work Experience</SectionHeading>
                <Timeline
                    icon={<BriefcaseIcon className="w-5 h-5" />}
                    items={data.experience.map((job, i) => ({
                        key: `${job.company}-${i}`,
                        title: job.role,
                        subtitle: job.company,
                        meta: job.period,
                        metaSecondary: job.location,
                        body: (
                            <ul className="mt-4 list-disc ml-5 text-gray-700 dark:text-text-secondary space-y-2 text-sm">
                                {job.description.map((desc, j) => <li key={j}>{desc}</li>)}
                            </ul>
                        ),
                    }))}
                />
            </section>

            {/* Education */}
            <section aria-labelledby="education">
                <SectionHeading id="education" icon={<GraduationCapIcon className={iconClass} />}>Education</SectionHeading>
                <Timeline
                    icon={<GraduationCapIcon className="w-5 h-5" />}
                    items={data.education.map((edu, i) => ({
                        key: `${edu.degree}-${i}`,
                        title: edu.degree,
                        subtitle: edu.institution,
                        meta: edu.period,
                        body: edu.details ? <p className="mt-3 text-sm text-gray-700 dark:text-text-secondary">{edu.details}</p> : undefined,
                    }))}
                />
            </section>

            {/* Certifications */}
            <section aria-labelledby="certifications">
                <SectionHeading id="certifications" icon={<AwardIcon className={iconClass} />}>Certifications &amp; Awards</SectionHeading>
                <ul className="grid gap-4 sm:grid-cols-2">
                    {data.certifications.map(cert => (
                        <li key={cert.name} className={`${card} p-5`}>
                            <h3 className="font-bold text-gray-900 dark:text-white">{cert.name}</h3>
                            <p className="text-sm font-medium text-gray-700 dark:text-text-primary">{cert.issuer}</p>
                            <p className="text-sm text-gray-600 dark:text-text-secondary">{cert.date}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Skills */}
            <section aria-labelledby="skills">
                <SectionHeading id="skills" icon={<LightbulbIcon className={iconClass} />}>Skills</SectionHeading>
                <dl className="space-y-6">
                    {Object.entries<string[]>(data.skills).map(([group, skills]) => (
                        <div key={group}>
                            <dt className="font-semibold text-gray-900 dark:text-white mb-3">{group}</dt>
                            <dd>
                                <ul className="flex flex-wrap gap-2">
                                    {skills.map(skill => <li key={skill}><Chip>{skill}</Chip></li>)}
                                </ul>
                            </dd>
                        </div>
                    ))}
                </dl>
            </section>
        </div>
    );
};

export default MainView;
