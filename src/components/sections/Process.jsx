import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Gauge, Rocket } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { fadeInUp, staggerContainer, viewportConfig } from '@/utils/animations';

const steps = [
  {
    id: 1,
    title: 'Discover',
    description: 'Understanding project requirements, user needs, and business goals through research and analysis.',
    icon: Search,
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Design',
    description: 'Planning architecture, component structure, and user flows for optimal experience and maintainability.',
    icon: PenTool,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Develop',
    description: 'Building with clean code, reusable components, and modern best practices for production-grade quality.',
    icon: Code2,
    color: 'from-primary to-indigo-500',
  },
  {
    id: 4,
    title: 'Optimize',
    description: 'Performance tuning, accessibility auditing, SEO optimization, and comprehensive testing.',
    icon: Gauge,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 5,
    title: 'Launch',
    description: 'Deploying with confidence, monitoring performance, and iterating based on real-world feedback.',
    icon: Rocket,
    color: 'from-accent to-cyan-400',
  },
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-32" aria-label="Development process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Process"
          title="How I Work"
          subtitle="A structured approach to delivering exceptional web applications from concept to launch."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative"
        >
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                custom={index}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface/40 backdrop-blur-sm border border-white/[0.04] hover:border-primary/20 transition-all duration-500 h-full">
                  {/* Step number */}
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-bold rounded-full bg-background border border-border text-muted">
                    0{step.id}
                  </span>

                  {/* Icon */}
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} mb-4 mt-2 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-base font-semibold text-text mb-2">{step.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
