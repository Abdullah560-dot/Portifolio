import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observers = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isMobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-x-hidden",
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/[0.04] shadow-lg shadow-black/10"
          : "bg-transparent",
      )}
    >
      <nav
        className="w-full max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-1 sm:gap-2 cursor-pointer flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-7 sm:w-9 h-7 sm:h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <span className="text-xs sm:text-sm font-bold text-white">
                AK
              </span>
            </div>
            <span className="text-sm sm:text-lg font-bold text-text hidden sm:block truncate">
              Abdullah<span className="text-primary">.</span>
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer",
                  activeSection === id
                    ? "text-text"
                    : "text-muted hover:text-text",
                )}
              >
                {activeSection === id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-surface-light"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-2 px-4 text-sm font-semibold text-white rounded-xl bg-linear-to-r from-primary to-primary-dark hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-shadow duration-300 cursor-pointer"
            >
              Let's Talk
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-1.5 ml-auto rounded-lg text-muted hover:text-text transition-colors cursor-pointer flex-shrink-0"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-border overflow-x-hidden overflow-y-auto max-h-[calc(100vh-4rem)]"
          >
            <div className="w-full px-3 py-3 sm:px-4 sm:py-4 space-y-1">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={cn(
                    "block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer",
                    activeSection === id
                      ? "bg-primary/10 text-primary"
                      : "text-muted hover:text-text hover:bg-surface-light/50",
                  )}
                >
                  {label}
                </button>
              ))}
              <div className="pt-1 sm:pt-2">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-primary to-primary-dark cursor-pointer"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
