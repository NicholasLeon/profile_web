import { Menu, Profile, Project, Skill, Experience } from '../type/portofolio';

export interface Social {
  id: number;
  name: string;
  label: string;
  value: string;
  link: string;
  icon: string;
}

export const profile: Profile = {
  id: 'p1',
  name: 'Nicholas Leonard Henanto',
  bio: 'Software Engineer',
  aboutMe: `I am a Fullstack Developer with a heavy focus on Frontend, specializing in building modern, high-performance web applications. My sweet spot is at the intersection of conceptualization and execution. I don't just write code; I like to refine idea into a polished, production-ready product.\n\nUsing Next.js and Tailwind CSS, I craft sleek, minimalist interfaces that prioritize speed and aesthetic clarity. My goal is to ensure your product isn't just functional, but also leaves a lasting impression through clean design and seamless user journeys.`,
  email: 'hello@jhondoe.com',
};

export const menus: Menu[] = [
  { id: 'm1', title: 'Home', slug: 'home', order: 0, isActive: true, isDefault: true },
  { id: 'm4', title: 'About Me', slug: 'about', order: 1, isActive: true, isDefault: true },
  { id: 'm2', title: 'Projects', slug: 'projects', order: 2, isActive: true, isDefault: true },
  { id: 'm3', title: 'Skills', slug: 'skills', order: 3, isActive: true, isDefault: true },
  { id: 'm5', title: 'Contact', slug: 'about', order: 4, isActive: true, isDefault: true }
];

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Portfolio Website',
    description: 'My portofolio website',
    techStack: ['Next.js', 'Tailwind', 'GSAP'],
    isFeatured: true,
    order: 0,
    repoUrl: 'https://github.com/NicholasLeon/profile_web'
  },
  {
    id: 'proj2',
    title: 'Transaction Manager',
    description: 'An ongoing semi-ERP system currently focused on financial tracking, with upcoming features for procurement',
    techStack: ['Next.js', 'Drizzle', 'Tailwind'],
    isFeatured: true,
    order: 1,
    repoUrl: 'https://github.com/NicholasLeon/transaksiku'
  }
];

export const skills: Skill[] = [
  { id: 's1', name: 'React', icon: 'Atom', level: 'Expert', category: 'Main Stack', order: 1 },
  { id: 's2', name: 'Next.js', icon: 'Globe', level: 'Expert', category: 'Main Stack', order: 2 },
  { id: 's3', name: 'TypeScript', icon: 'Code2', level: 'Expert', category: 'Main Stack', order: 3 },
  { id: 's4', name: 'Tailwind CSS', icon: 'Palette', level: 'Expert', category: 'Main Stack', order: 4 },
  { id: 's5', name: 'Bun', icon: 'Zap', level: 'Expert', category: 'Main Stack', order: 5 },
  { id: 's6', name: 'Python', icon: 'Terminal', level: 'Intermediate', category: 'Languages', order: 6 },
  { id: 's7', name: 'Java', icon: 'Coffee', level: 'Intermediate', category: 'Languages', order: 7 },
  { id: 's8', name: 'PHP', icon: 'FileCode', level: 'Intermediate', category: 'Languages', order: 8 },
  { id: 's9', name: 'AI Training (YOLO)', icon: 'Cpu', level: 'Beginner', category: 'Exploring', order: 9 },
  { id: 's10', name: 'Prisma', icon: 'Database', level: 'Expert', category: 'Tools', order: 6 },
  { id: 's11', name: 'Drizzle', icon: 'Database', level: 'Expert', category: 'Tools', order: 7 },
  { id: 's12', name: 'GSAP', icon: 'Move', level: 'Expert', category: 'Tools', order: 8 },
];

export const experiences: Experience[] = [
  {
    id: 'ex1',
    type: 'EXPERIENCE',
    title: 'Senior Developer',
    organization: 'Tech Corp',
    startDate: '2023-01-01',
    description: 'Membangun arsitektur frontend menggunakan Next.js.',
    isCurrent: true,
    order: 0,
  }
];

export const socials: Social[] = [
  { 
    id: 1,
    name: 'Email', 
    icon: 'Mail', 
    label: 'Send me a message', 
    value: 'nicholasleonard04@gmail.com',
    link: 'mailto:nicholasleonard04@gmail.com' 
  },
  { 
    id: 2,
    name: 'LinkedIn', 
    icon: 'Linkedin', 
    label: 'Professional network', 
    value: 'Connect with me',
    link: 'https://www.linkedin.com/in/nicholas-leonard-henanto-965329259/' 
  },
  { 
    id: 3,
    name: 'GitHub', 
    icon: 'Github', 
    label: 'Open source projects', 
    value: 'Follow my code',
    link: 'https://github.com/NicholasLeon' 
  },
  { 
    id: 4,
    name: 'Instagram', 
    icon: 'Instagram', 
    label: 'Creative & Life', 
    value: 'See my stories',
    link: 'https://instagram.com/ncholslh' 
  },
];