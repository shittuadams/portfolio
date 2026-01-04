import { ReactNode } from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: ReactNode;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
}

export interface SkillCategory {
  id: number;
  category: string;
  skills: SkillItem[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  preview?: string;
  category: 'web' | 'data' | 'general';
  details: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface VideoItem {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  category: 'tutorial' | 'class';
  duration: string;
}