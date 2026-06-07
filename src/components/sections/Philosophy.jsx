import { motion } from 'framer-motion';
import {
  Layers, RefreshCw, Zap, Accessibility, Search,
  Shield, Scale, Boxes, BookOpen
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { fadeInUp, staggerContainer, viewportConfig } from '@/utils/animations';

const principles = [
  {
    id: 1,
    title: 'Clean Architecture',
    description: 'Structured, layered code that separates concerns and enables independent evolution of each layer.',
    icon: Layers,
  },
  {
    id: 2,
    title: 'Maintainable Code',
    description: 'Self-documenting, well-organized code that teams can understand, extend, and debug with confidence.',
    icon: BookOpen,
  },
  {
    id: 3,
    title: 'Reusable Components',
    description: 'Atomic, composable components that reduce duplication and accelerate feature development.',
    icon: Boxes,
  },
  {
    id: 4,
    title: 'Performance First',
    description: 'Optimized rendering, smart caching, lazy loading, and bundle analysis baked into every project.',
    icon: Zap,
  },
  {
    id: 5,
    title: 'Accessibility',
    description: 'WCAG-compliant interfaces that work for all users, with semantic HTML, ARIA, and keyboard navigation.',
    icon: Accessibility,
  },
  {
    id: 6,
    title: 'SEO Optimized',
    description: 'Server-side rendering, meta optimization, and structured data for maximum discoverability.',
    icon: Search,
  },
  {
    id: 7,
    title: 'Security Awareness',
    description: 'Input sanitization, CSRF protection, secure auth flows, and defense-in-depth thinking.',
    icon: Shield,
  },
  {
    id: 8,
    title: 'Scalable Systems',
    description: 'Architecture that grows gracefully — from MVP to enterprise-scale without rewrites.',
    icon: Scale,
  },
  {
    id: 9,
    title: 'SOLID Principles',
    description: 'Single responsibility, open-closed, and dependency inversion patterns applied consistently.',
    icon: RefreshCw,
  },
];

export default function Philosophy() {
  return (
    <section className="relative py-24 md:py-32" aria-label="Engineering philosophy">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Philosophy"
          title="Engineering Principles"
          subtitle="I write software like an engineer — with intention, structure, and a focus on long-term quality."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {principles.map((principle) => (
            <motion.div key={principle.id} variants={fadeInUp}>
              <Card className="p-5 h-full group hover:border-primary/20 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                    <principle.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text mb-1.5 group-hover:text-primary transition-colors duration-300">
                      {principle.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
