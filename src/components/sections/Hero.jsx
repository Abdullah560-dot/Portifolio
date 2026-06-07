import { motion } from "framer-motion";
import { ArrowDown, Download, Send, Eye } from "lucide-react";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import AuroraBackground from "@/components/effects/AuroraBackground";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  cardTilt,
} from "@/utils/animations";

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <AuroraBackground />

      {/* Floating decorative elements */}
      <motion.div
        className="hidden sm:block absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-primary/40"
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden sm:block absolute top-1/3 right-[15%] w-3 h-3 rounded-full bg-accent/30"
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-1/3 left-[20%] w-1.5 h-1.5 rounded-full bg-primary/50"
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          <motion.div
            variants={cardTilt}
            initial="initial"
            whileHover="hover"
            className="space-y-5 sm:space-y-8 cursor-default"
          >
            {/* Status badge */}
            {/* <motion.div variants={fadeInUp} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-surface/60 backdrop-blur-sm border border-white/[0.06] shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-text">
                  Available for opportunities
                </span>
              </div>
            </motion.div> */}

            {/* Name */}
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.2] sm:leading-[1.1]">
                <span className="text-text">Hi, I'm </span>
                <br className="hidden sm:block" />
                <GradientText animated>Abdullah Kaaka</GradientText>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center justify-center gap-2 sm:gap-4 text-sm sm:text-lg md:text-2xl text-text-secondary">
                <div className="hidden sm:block h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-primary/60" />
                <span className="font-light tracking-wide">
                  Front-End Developer
                </span>
                <div className="hidden sm:block h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-muted leading-relaxed sm:leading-relaxed font-sans px-2 sm:px-0"
          >
            I build modern, scalable, and high-performance web applications
            using
            <span className="text-text font-semibold"> React</span> and
            <span className="text-text font-semibold"> Next.js</span>. I focus
            on clean architecture, reusable components, accessibility, and
            exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4 px-2 sm:px-0"
          >
            <Button
              icon={Eye}
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="w-full sm:w-auto"
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              icon={Download}
              size="lg"
              className="w-full sm:w-auto"
            >
              Download CV
            </Button>
          </motion.div>

          {/* Tech Marquee */}
          <motion.div
            variants={fadeIn}
            className="hidden sm:block pt-8 sm:pt-12 overflow-hidden w-full relative"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap gap-6 sm:gap-8 w-max"
            >
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex gap-6 sm:gap-8 items-center text-xs sm:text-sm font-semibold text-muted/40 uppercase tracking-widest"
                >
                  <span>React</span> • <span>Next.js</span> •{" "}
                  <span>TypeScript</span> • <span>Tailwind CSS</span> •{" "}
                  <span>Framer Motion</span> • <span>Node.js</span> •{" "}
                  <span>WebGL</span> •
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="hidden md:block absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 sm:gap-2 text-muted/50 hover:text-muted transition-colors cursor-pointer"
            aria-label="Scroll to about section"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-3 sm:w-4 h-3 sm:h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
