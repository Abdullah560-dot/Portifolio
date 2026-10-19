import { useState, useMemo } from "react";
import { Search, ExternalLink, Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import { projects, projectCategories } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeFilter === "All" || p.category === activeFilter;
      const matchesSearch =
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32"
      aria-label="Projects section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          subtitle="A selection of projects that showcase my technical skills and problem-solving abilities."
        />

        {/* Controls */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                    : "bg-surface-light/50 text-muted hover:text-text border border-border hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 pl-10 pr-4 py-2.5 text-sm rounded-xl bg-surface-light/50 border border-border text-text placeholder:text-muted/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              aria-label="Search projects"
            />
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
              <div key={project.id}>
                <Card
                  className="group h-full flex flex-col cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project image area */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/5 overflow-hidden rounded-t-[1.5rem] border-b border-white/[0.05]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl font-black text-white/[0.03] select-none">
                        {project.title[0]}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 rounded-xl bg-surface/80 backdrop-blur-sm text-text hover:text-primary transition-colors"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 rounded-xl bg-surface/80 backdrop-blur-sm text-text hover:text-primary transition-colors"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <Code2 className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <Badge variant="accent">{project.category}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t) => (
                        <Badge key={t} variant="muted">
                          {t}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="muted">
                          +{project.tech.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-muted text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <Modal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
