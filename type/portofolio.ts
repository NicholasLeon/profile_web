import { z } from 'zod';

export const ExpTypeEnum = z.enum(['EXPERIENCE', 'EDUCATION']);

export const SocialLinkSchema = z.object({
  id: z.cuid2(),
  platform: z.string().min(1),
  url: z.string().min(1),
});

export const ProfileSchema = z.object({
  id: z.cuid2(),
  name: z.string().min(1),
  bio: z.string(),
  aboutMe: z.string(),
  email: z.string().min(1),
  resumeUrl: z.string().nullable().optional(),
});

export const MenuSchema = z.object({
  id: z.cuid2(),
  title: z.string().min(1),
  slug: z.string().min(1),
  order: z.number().default(0),
  isActive: z.boolean().default(true),
  isDefault: z.boolean().default(false),
});

export const ProjectSchema = z.object({
  id: z.cuid2(),
  title: z.string().min(1),
  description: z.string(),
  imageUrl: z.string().nullable().optional(),
  repoUrl: z.string().nullable().optional(),
  demoUrl: z.string().nullable().optional(),
  techStack: z.array(z.string()),
  isFeatured: z.boolean().default(false),
  order: z.number().default(0),
});

export const SkillSchema = z.object({
  id: z.cuid2(),
  name: z.string().min(1),
  icon: z.string(),
  level: z.string(),
  category: z.string(),
  order: z.number().default(0),
});

export const ExperienceSchema = z.object({
  id: z.cuid2(),
  type: ExpTypeEnum,
  title: z.string().min(1),
  organization: z.string().min(1),
  location: z.string().nullable().optional(),
  startDate: z.date().or(z.string()),
  endDate: z.date().nullable().optional().or(z.string()),
  isCurrent: z.boolean().default(false),
  description: z.string(),
  order: z.number().default(0),
});

export type Menu = z.infer<typeof MenuSchema>;
export type Profile = z.infer<typeof ProfileSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Skill = z.infer<typeof SkillSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type SocialLink = z.infer<typeof SocialLinkSchema>;