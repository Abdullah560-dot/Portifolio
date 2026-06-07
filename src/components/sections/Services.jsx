import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { services } from '@/data/services';
import { fadeInUp, staggerContainer, viewportConfig } from '@/utils/animations';

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32" aria-label="Services section">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What I Offer"
          subtitle="Specialized services to help businesses build exceptional digital products."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <Card className="p-6 h-full group hover:border-primary/30 transition-all duration-500">
                {/* Icon */}
                <div className="mb-5 relative">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 inline-flex group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  {/* Glow */}
                  <div className="absolute -inset-2 rounded-xl bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-lg font-semibold text-text mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 text-xs rounded-lg bg-surface-light/60 text-muted border border-white/[0.04]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
