import {
  Code2, Palette, Layout, Database, FileCheck, Layers,
  GitBranch, Cpu
} from 'lucide-react';

export const skillCategories = [
  {
    id: 'core',
    name: 'Core Technologies',
    icon: Code2,
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 93 },
      { name: 'JavaScript (ES6+)', level: 92 },
    ],
  },
  {
    id: 'styling',
    name: 'Styling & UI & animations',
    icon: Palette,
    skills: [
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Framer Motion', level: 88 },
      { name: 'Gsap', level: 88 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Accessibility (WCAG)', level: 85 },
      { name: 'SEO Best Practices', level: 88 },
    ],
  },
  {
    id: 'frameworks',
    name: 'Front-End Frameworks',
    icon: Layout,
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
    ],
  },
  {
    id: 'state',
    name: 'State Management',
    icon: Layers,
    skills: [
      { name: 'Redux', level: 88 },
      { name: 'Redux Toolkit', level: 90 },
      { name: 'RTK Query', level: 87 },
      { name: 'TanStack Query', level: 88 },
    ],
  },
  {
    id: 'forms',
    name: 'Forms & Validation',
    icon: FileCheck,
    skills: [
      { name: 'React Hook Form', level: 92 },
      { name: 'Zod', level: 88 },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Knowledge',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'MongoDB', level: 75 },
      { name: 'Mongoose', level: 75 },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Workflow',
    icon: GitBranch,
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Vite', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT Authentication', level: 82 },
    ],
  },
  {
    id: 'engineering',
    name: 'Engineering & Architecture',
    icon: Cpu,
    skills: [
      { name: 'Performance Optimization', level: 90 },
      { name: 'Lazy Loading & Splitting', level: 88 },
      { name: 'System Design', level: 82 },
      { name: 'Scalable Architecture', level: 88 },
      { name: 'Clean Code & SOLID', level: 90 },
      { name: 'Reusable Components', level: 92 },
    ],
  },
];
