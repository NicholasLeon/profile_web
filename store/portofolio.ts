import { create } from 'zustand';
import { Menu, Profile, Project, Skill, Experience } from '../type/portofolio';

interface PortfolioStore {
  profile: Profile;
  menus: Menu[];
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  activeSection: string;
  setActiveSection: (slug: string) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  activeSection: 'home',
  
  profile: {
    id: 'p1',
    name: 'Nicholas Leonard Henanto',
    bio: 'Software Engineer',
    aboutMe: 'Im Nicholas Leonard Henanto, a Frontend Developer with fullstack capabilities, focused on creating dynamic and efficient web solutions. With a strong command of Next.js, React, TypeScript. My journey began in UI/UX design, where I cultivated a deep understanding of user-centric principles and engaging interfaces. This background uniquely enables me to bridge the gap between aesthetics and functionality, ensuring every project delivers both intuitive user experiences and solid technical foundations.',
    email: 'hello@jhondoe.com',
    socialLinks: [
      { id: 's1', platform: 'Github', url: 'https://github.com' },
    ],
  },

  menus: [
    { id: 'm1', title: 'Home', slug: 'home', order: 0, isActive: true, isDefault: true },
    {id: 'm4', title: 'About Me', slug: 'about', order: 1, isActive: true, isDefault: true },
    { id: 'm2', title: 'Projects', slug: 'projects', order: 2, isActive: true, isDefault: true },
    { id: 'm3', title: 'Skills', slug: 'skills', order: 3, isActive: true, isDefault: true },
    {id: 'm5', title: 'Contact', slug: 'about', order: 4, isActive: true, isDefault: true }
  ],

  projects: [
    {
      id: 'proj1',
      title: 'E-Portfolio CMS',
      description: 'Dashboard admin untuk manajemen konten portofolio.',
      techStack: ['Next.js', 'Prisma', 'Zod'],
      isFeatured: true,
      order: 0,
    }
  ],

  skills: [
    { id: 'sk1', name: 'React', icon: 'Code', category: 'Frontend', order: 0 },
    { id: 'sk2', name: 'Bun', icon: 'Zap', category: 'Runtime', order: 1 },
  ],

  experiences: [
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
  ],

  setActiveSection: (slug) => set({ activeSection: slug }),
}));