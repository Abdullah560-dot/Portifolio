import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { socialLinks } from '@/data/socialLinks';
import { navLinks } from '@/data/navigation';
import { fadeInUp, staggerContainer, viewportConfig } from '@/utils/animations';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border bg-surface/30">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-sm font-bold text-white">AK</span>
              </div>
              <span className="text-lg font-bold text-text">
                Abdullah<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Building modern, scalable, and high-performance web applications with clean architecture and exceptional user experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map(({ id, name, url, icon: Icon }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="p-2.5 rounded-xl bg-surface-light/50 border border-border text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted">
              abdullah@example.com
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted flex items-center gap-1.5">
            © {new Date().getFullYear()} Abdullah Kaaka. Crafted with
            <Heart className="w-3 h-3 text-error fill-error" />
            and React.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-xl bg-surface-light/50 border border-border text-muted hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
