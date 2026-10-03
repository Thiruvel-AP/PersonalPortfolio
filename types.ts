export interface Link {
  name: string;
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  /** One-line summary shown in the hero. */
  tagline: string;
  /** Availability line shown under the tagline. */
  status: string;
  /** Longer introduction, one string per paragraph. */
  about: string[];
  links: Link[];
  imageUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

/** Skills grouped by row: { "Group name": ["Skill", ...] } */
export type Skills = Record<string, string[]>;

export interface ProjectImage {
  /** Path under public/, e.g. "projects/genetraceai.webp" (resolved against the site base). */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CaseStudy {
  problem: string;
  approach: string;
  decisions: string[];
  result: string;
  /** What I would improve next. Omitted until written; the section is hidden when absent. */
  improve?: string;
  links: {
    repo?: string;
    demo?: string;
    diagram?: string;
  };
}

export interface Project {
  /** URL slug used by #/projects/<slug>. */
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  /** Only set when I have supplied a real diagram or screenshot. */
  image?: ProjectImage;
  link?: string;
  /** Featured projects (max 4) get a case-study page; the rest are listed as text. */
  featured: boolean;
  caseStudy?: CaseStudy;
}

export interface PortfolioData {
  profile: Profile;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: Skills;
  projects: Project[];
}
