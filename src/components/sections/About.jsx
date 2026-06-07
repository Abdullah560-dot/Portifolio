import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Card from "@/components/ui/Card";
import { stats } from "@/data/stats";
import { timeline } from "@/data/timeline";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportConfig,
} from "@/utils/animations";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32"
      aria-label="About section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Crafting Digital Experiences"
          subtitle="A Front-End Developer passionate about building performant, accessible, and beautifully engineered web applications."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          {/* Main Bio Card */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="md:col-span-12 lg:col-span-7"
          >
            <Card className="h-full p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-text mb-6">
                Architecting the Web
              </h3>
              <div className="space-y-4 text-muted leading-relaxed font-sans text-base">
                <p>
                  I'm{" "}
                  <span className="text-text font-semibold">
                    Abdullah Kaaka
                  </span>
                  , a Front-End Developer who approaches web development with an
                  engineering mindset. I don't just write code — I architect
                  solutions that are maintainable, scalable, and built to last.
                </p>
                <p>
                  My core stack revolves around{" "}
                  <span className="text-primary font-medium">React</span>,{" "}
                  <span className="text-primary font-medium">Next.js</span>, and
                  modern JavaScript, combined with a strong foundation in state
                  management, performance optimization, and clean architecture
                  patterns.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-4 text-sm font-medium text-text-secondary">
                <span className="flex items-center gap-2 bg-surface/50 px-4 py-2 rounded-xl">
                  <MapPin className="w-4 h-4 text-accent" />
                  Remote / Global
                </span>
                <span className="flex items-center gap-2 bg-surface/50 px-4 py-2 rounded-xl">
                  <Briefcase className="w-4 h-4 text-primary" />
                  Open to Work
                </span>
              </div>
            </Card>
          </motion.div>

          {/* Stats & Quick Facts Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="md:col-span-12 lg:col-span-5 flex flex-col gap-6"
          >
            {/* Top Row Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.slice(0, 2).map((stat, i) => (
                <motion.div
                  key={stat.id}
                  variants={fadeInUp}
                  className="h-full"
                >
                  <Card
                    className="h-full p-8 flex flex-col items-center justify-center text-center"
                    spotlight={false}
                  >
                    <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent mb-2">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="text-sm font-medium text-muted uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row Stats / Box */}
            <motion.div variants={fadeInUp} className="flex-1">
              <Card className="h-full p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap className="w-24 h-24 text-primary" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="text-4xl md:text-5xl font-black text-text mb-2">
                    <AnimatedCounter
                      value={stats[2]?.value || 100}
                      suffix={stats[2]?.suffix || "+"}
                    />
                  </div>
                  <p className="text-sm font-medium text-muted uppercase tracking-wider">
                    {stats[2]?.label || "Projects Completed"}
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h3 className="text-xl font-bold text-text mb-10 text-center">
            My <span className="gradient-text">Journey</span>
          </h3>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className={`relative flex items-start gap-6 mb-10 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 mt-1.5" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-24px)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}
                >
                  <Card className="p-5" spotlight={false}>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mb-2">
                      <Calendar className="w-3 h-3" />
                      {item.year}
                    </span>
                    <h4 className="text-base font-semibold text-text mb-1.5">
                      {item.title}
                    </h4>
                    {item.company && (
                      <p className="text-xs font-medium text-accent mb-2">
                        {item.company}
                      </p>
                    )}
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
