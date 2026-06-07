import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2 } from "lucide-react";
import Badge from "./Badge";
import Button from "./Button";

export default function Modal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-surface border border-border"
            role="dialog"
            aria-modal="true"
            aria-label={`Project details: ${project.title}`}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-surface-light/80 backdrop-blur-sm text-muted hover:text-text transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project image */}
            <div className="relative h-48 md:h-64 bg-gradient-to-br from-primary/20 to-accent/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold text-white/5">
                  {project.title[0]}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-surface to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-text">
                  {project.title}
                </h3>
                <p className="mt-2 text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                  Challenges
                </h4>
                <ul className="space-y-2">
                  {project.challenges.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                  Solutions
                </h4>
                <ul className="space-y-2">
                  {project.solutions.map((s, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                  Results
                </h4>
                <ul className="space-y-2">
                  {project.results.map((r, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-success shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button icon={ExternalLink} size="sm">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <Button variant="secondary" icon={Code2} size="sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
