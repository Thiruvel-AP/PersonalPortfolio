import type { PortfolioData } from '../types';

export const initialData: PortfolioData = {
  profile: {
    name: "Alex Doe",
    title: "Senior Frontend Engineer",
    location: "San Francisco, CA",
    email: "alex.doe@example.com",
    phone: "+1 (555) 123-4567",
    summary: "Creative and detail-oriented Senior Frontend Engineer with over 8 years of experience in building and maintaining responsive and user-friendly web applications. Proficient in React, TypeScript, and modern JavaScript frameworks. Passionate about clean code, performance optimization, and creating delightful user experiences.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/" },
      { name: "GitHub", url: "https://github.com/" }
    ]
  },
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "Tech Solutions Inc.",
      period: "Jan 2020 - Present",
      location: "San Francisco, CA",
      description: [
        "Lead the development of a new client-facing dashboard using React and Redux, resulting in a 30% increase in user engagement.",
        "Mentor junior developers and conduct code reviews to maintain high code quality standards.",
        "Collaborate with UX/UI designers to translate wireframes and mockups into functional components."
      ]
    },
    {
      role: "Frontend Developer",
      company: "Web Innovators",
      period: "Jun 2016 - Dec 2019",
      location: "Austin, TX",
      description: [
        "Developed and maintained responsive websites for various clients using HTML, CSS, and JavaScript.",
        "Implemented A/B tests to optimize user conversion rates.",
        "Worked in an Agile environment with weekly sprints and daily stand-ups."
      ]
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      institution: "University of Technology",
      period: "Sep 2012 - May 2016",
      details: "Graduated with Honors, GPA: 3.8/4.0"
    }
  ],
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Redux",
    "Next.js",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Webpack",
    "Jest",
    "Git",
    "CI/CD",
    "Agile Methodologies"
  ],
  projects: [
    {
      name: "Portfolio Builder",
      description: "An AI-powered web application to automatically generate a professional portfolio from a resume PDF. Built with React, TypeScript, and the Gemini API.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Gemini API"],
      features: ["AI-Powered Resume Parsing", "Dynamic Data Management", "Modern Glassmorphism UI"],
      imageUrl: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
      link: "https://github.com/example/portfolio-builder"
    },
    {
      name: "E-commerce Platform",
      description: "A full-stack e-commerce website with features like product search, shopping cart, and secure checkout. Developed using the MERN stack.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      features: ["Secure User Authentication", "Shopping Cart & Checkout", "Product Management Dashboard"],
      imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
      link: "https://github.com/example/ecommerce-platform"
    },
    {
      name: "Task Management App",
      description: "A collaborative task management tool that allows users to create, assign, and track tasks in real-time. Features a drag-and-drop interface.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      features: ["Real-time Collaboration", "Drag-and-Drop Kanban Board", "User Notifications"],
      imageUrl: "https://images.unsplash.com/photo-1529310399831-ed472b218579?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
      link: "https://github.com/example/task-app"
    }
  ]
};