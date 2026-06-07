import {
  Monitor, LayoutDashboard, Plug, Zap, Search
} from 'lucide-react';

export const services = [
  {
    id: 1,
    title: 'Front-End Development',
    description: 'Building modern, responsive web applications using React, Next.js, and cutting-edge technologies with a focus on performance and user experience.',
    icon: Monitor,
    features: ['React & Next.js', 'Component Architecture', 'Responsive Design', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Dashboard Development',
    description: 'Creating interactive, data-rich dashboards with real-time analytics, complex data visualizations, and intuitive user interfaces.',
    icon: LayoutDashboard,
    features: ['Data Visualization', 'Real-time Updates', 'Custom Widgets', 'Report Generation'],
  },
  {
    id: 3,
    title: 'API Integration',
    description: 'Seamless integration of RESTful APIs and third-party services with efficient state management and error handling strategies.',
    icon: Plug,
    features: ['REST APIs', 'State Management', 'Error Handling', 'Data Caching'],
  },
  {
    id: 4,
    title: 'Performance Optimization',
    description: 'Analyzing and optimizing web application performance through code splitting, lazy loading, caching strategies, and bundle optimization.',
    icon: Zap,
    features: ['Code Splitting', 'Lazy Loading', 'Bundle Analysis', 'Core Web Vitals'],
  },
  {
    id: 5,
    title: 'SEO & Accessibility',
    description: 'Implementing SEO best practices and WCAG accessibility standards to ensure your application reaches and serves all users effectively.',
    icon: Search,
    features: ['WCAG Compliance', 'Semantic HTML', 'Meta Optimization', 'Screen Reader Support'],
  },
];
