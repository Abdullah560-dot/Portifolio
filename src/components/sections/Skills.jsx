import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { skillCategories } from '@/data/skills';
import { fadeInUp, staggerContainer, viewportConfig } from '@/utils/animations';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative py-24 md:py-32" aria-label="Skills section">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          subtitle="Technologies and tools I use to build exceptional web applications."
        />

        {/* Category Filters */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                : 'bg-surface-light/50 text-muted hover:text-text border border-border hover:border-primary/30'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                  : 'bg-surface-light/50 text-muted hover:text-text border border-border hover:border-primary/30'
              }`}
            >
              <cat.icon className="w-3.5 h-3.5" />
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-text tracking-wide">{category.name}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 + 0.1 }}
                        viewport={{ once: true }}
                        className="group relative px-3 py-1.5 bg-surface-light/30 border border-white/[0.05] rounded-lg hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 overflow-hidden cursor-default"
                      >
                        {/* Hover glow inside badge */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite] pointer-events-none" />
                        <span className="relative z-10 text-sm font-medium text-text-secondary group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
