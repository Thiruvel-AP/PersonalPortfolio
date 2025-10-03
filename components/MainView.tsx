
import React, { useState } from 'react';
import type { PortfolioData, Experience, Education } from '../types';
import { BriefcaseIcon, GraduationCapIcon, LightbulbIcon, MapPinIcon, UserIcon } from './icons/ContentIcons';
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons';

// FIX: Specify the props for the icon element to resolve TypeScript errors with React.cloneElement.
const Section: React.FC<{ title: string; icon: React.ReactElement<{ className?: string }>; children: React.ReactNode, className?: string }> = ({ title, icon, children, className }) => (
    <section className={`bg-white/50 dark:bg-secondary/30 backdrop-blur-lg border border-gray-200/50 dark:border-border-color/50 rounded-xl p-8 animate-fade-in-up ${className}`}>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
            <div className="p-1 rounded-full transition-all duration-300 group-hover:bg-gradient-to-br from-sky-400 to-fuchsia-500 mr-3">
                {/* FIX: Correctly clone the icon element to add group-hover styles. This resolves the TypeScript error. */}
                {React.cloneElement(icon, { className: `${icon.props.className || ''} group-hover:text-white dark:group-hover:text-primary transition-colors duration-300` })}
            </div>
            <span className="text-gray-800 dark:text-accent">{title}</span>
        </h2>
        {children}
    </section>
);

const TimelineItem: React.FC<{ item: Experience | Education; isLast: boolean }> = ({ item, isLast }) => {
    const isExperience = 'role' in item;
    return (
        <div className="flex group">
            <div className="flex flex-col items-center mr-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 dark:bg-accent inline-flex items-center justify-center text-white dark:text-primary relative z-10 ring-4 ring-white dark:ring-primary transition-colors duration-300 group-hover:bg-gradient-to-br from-sky-400 to-fuchsia-500">
                    {isExperience ? <BriefcaseIcon className="w-5 h-5" /> : <GraduationCapIcon className="w-5 h-5" />}
                </div>
                {!isLast && <div className="w-px h-full bg-gray-300 dark:bg-border-color/50"></div>}
            </div>
            <div className={`pb-12 flex-grow transform transition-all duration-500 ease-in-out group-hover:scale-105`}>
                <div className="p-6 bg-white/30 dark:bg-primary/30 border border-gray-200/80 dark:border-border-color/50 rounded-lg -mt-3 transition-all duration-500 ease-in-out group-hover:shadow-2xl group-hover:shadow-gray-400/20 dark:group-hover:shadow-accent/20 group-hover:border-gray-300 dark:group-hover:border-accent/70">
                    <div className="flex justify-between items-start flex-col sm:flex-row">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{isExperience ? (item as Experience).role : (item as Education).degree}</h3>
                            <p className="text-md font-semibold text-gray-700 dark:text-text-primary">{isExperience ? (item as Experience).company : (item as Education).institution}</p>
                        </div>
                        <div className="text-left sm:text-right flex-shrink-0 sm:ml-4 mt-2 sm:mt-0">
                            <p className="text-sm font-medium text-gray-600 dark:text-text-secondary">{item.period}</p>
                            {isExperience && <p className="text-sm text-gray-500 dark:text-text-secondary">{(item as Experience).location}</p>}
                        </div>
                    </div>
                    {isExperience ? (
                        <ul className="mt-4 list-disc list-outside ml-5 text-gray-600 dark:text-text-secondary space-y-2 text-sm">
                            {(item as Experience).description.map((desc, i) => <li key={i}>{desc}</li>)}
                        </ul>
                    ) : (
                        (item as Education).details && <p className="mt-3 text-sm text-gray-600 dark:text-text-secondary">{(item as Education).details}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

const MainView: React.FC<{ data: PortfolioData }> = ({ data }) => {
    const [hoverDirectionToggle, setHoverDirectionToggle] = useState(false);
    const githubLink = data.profile.links?.find(l => l.name.toLowerCase() === 'github');
    const linkedinLink = data.profile.links?.find(l => l.name.toLowerCase() === 'linkedin');

    const skillsWithDuplicates = [...data.skills, ...data.skills];

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <header className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-16 animate-fade-in-up">
                <div className="space-y-4 text-center md:text-left flex-grow">
                    <p className="text-xl text-gray-800 dark:text-text-primary font-medium">Hello, I'm</p>
                    <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">{data.profile.name}</h1>
                    <h2 className="text-3xl text-gray-800 dark:text-text-primary font-semibold">{data.profile.title}</h2>
                     <p className="text-gray-500 dark:text-text-secondary mt-4 flex items-center justify-center md:justify-start">
                        <MapPinIcon className="w-5 h-5 mr-2" />
                        {data.profile.location}
                    </p>
                    <p className="text-gray-600 dark:text-text-secondary leading-relaxed pt-4 max-w-xl mx-auto md:mx-0">{data.profile.summary}</p>
                     <div className="flex items-center justify-center md:justify-start space-x-4 pt-4">
                        {githubLink && (
                            <a href={githubLink.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out text-gray-500 dark:text-text-secondary hover:text-white dark:hover:text-primary hover:bg-gradient-to-br from-sky-400 to-fuchsia-500 hover:scale-110 hover:shadow-lg dark:hover:shadow-accent/20"><GitHubIcon className="w-7 h-7" /></a>
                        )}
                        {linkedinLink && (
                            <a href={linkedinLink.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out text-gray-500 dark:text-text-secondary hover:text-white dark:hover:text-primary hover:bg-gradient-to-br from-sky-400 to-fuchsia-500 hover:scale-110 hover:shadow-lg dark:hover:shadow-accent/20"><LinkedInIcon className="w-7 h-7" /></a>
                        )}
                         <a href={`mailto:${data.profile.email}`} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 dark:text-primary dark:bg-accent hover:bg-gray-700 dark:hover:bg-highlight transition-all">
                            Contact Me
                        </a>
                    </div>
                </div>
                 <div className="flex-shrink-0">
                    <div 
                        className="relative w-56 h-56 sm:w-64 sm:h-64 group cursor-pointer"
                        onMouseEnter={() => setHoverDirectionToggle(prev => !prev)}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br from-sky-400 to-fuchsia-500 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 ease-in-out animate-pulse ${hoverDirectionToggle ? 'group-hover:rounded-[40%_60%_70%_30%_/_40%_40%_60%_60%]' : 'group-hover:rounded-[70%_30%_40%_60%_/_60%_60%_40%_40%]'}`}></div>
                        <img 
                            src={data.profile.imageUrl} 
                            alt={data.profile.name} 
                            className={`relative w-full h-full rounded-full object-cover shadow-2xl border-4 border-white dark:border-secondary transition-all duration-500 ease-in-out group-hover:scale-110 ${hoverDirectionToggle ? 'group-hover:rotate-2 group-hover:rounded-[40%_60%_70%_30%_/_40%_40%_60%_60%]' : 'group-hover:-rotate-2 group-hover:rounded-[70%_30%_40%_60%_/_60%_60%_40%_40%]'}`}
                        />
                    </div>
                </div>
            </header>

            {/* Experience Section */}
            <Section title="Work Experience" icon={<BriefcaseIcon className="w-7 h-7 text-gray-800 dark:text-accent" />}>
                <div className="relative">
                    {data.experience.map((job, index) => (
                        <TimelineItem key={index} item={job} isLast={index === data.experience.length - 1} />
                    ))}
                </div>
            </Section>

            {/* Education Section */}
            <Section title="Education" icon={<GraduationCapIcon className="w-7 h-7 text-gray-800 dark:text-accent" />}>
                 <div className="relative">
                    {data.education.map((edu, index) => (
                         <TimelineItem key={index} item={edu} isLast={index === data.education.length - 1} />
                    ))}
                </div>
            </Section>

             {/* Skills Section */}
            <Section title="Skills" icon={<LightbulbIcon className="w-7 h-7 text-gray-800 dark:text-accent" />}>
                 <div className="relative flex overflow-x-hidden group">
                    <div className="py-4 flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
                        {skillsWithDuplicates.map((skill, index) => (
                           <span key={index} className="cursor-pointer mx-4 bg-gray-100 dark:bg-secondary/50 border border-gray-200 dark:border-border-color/50 text-gray-800 dark:text-text-primary px-6 py-3 rounded-full text-md font-semibold transition-all duration-300 ease-in-out hover:scale-125 hover:z-10 hover:shadow-lg dark:hover:shadow-accent/20 hover:text-white dark:hover:text-primary hover:bg-gradient-to-br from-sky-400 to-fuchsia-500 hover:border-transparent">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default MainView;
