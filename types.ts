
export type View = 'main' | 'projects' | 'contact' | 'manage';

export interface Link {
  name: string;
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  links: Link[];
  imageUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location:string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  imageUrl: string;
  link?: string;
}

export interface PortfolioData {
  profile: Profile;
  experience: Experience[];
  education: Education[];
  skills: string[];
  projects: Project[];
}