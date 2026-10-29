import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "BazarDor",
    badge: "Featured",
    description:
      "A market price tracking platform for daily essentials in Bangladesh. Compare prices across regions, track changes and manage your profile with secure authentication.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "BetterAuth"],
    liveLink: "https://bazar-dor-henna-iota.vercel.app/",
    githubLink: "https://github.com/hakim-azizul/bazar-dor",
  },
  {
    title: "FitLog",
    badge: "New",
    description:
      "A workout planner app to organize your daily exercises, save routines and track progress. Sort by duration, calories or alphabetical order.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    liveLink: "https://fit-log-teal-seven.vercel.app/",
    githubLink: "https://github.com/hakim-azizul/Fit-Log",
  },
  {
    title: "Book-Vibe",
    badge: "New",
    description:
      "A book discovery and reading tracker that helps users explore books, manage reading lists and track reading progress.",
    tags: ["Next.js", "React", "Tailwind"],
    liveLink: "https://book-vibe-five-dusky.vercel.app/",
    githubLink: "https://github.com/hakim-azizul/Book-Vibe",
  },
  {
    title: "DevStack",
    badge: "React",
    description:
      "DevStack is a dynamic, responsive web application designed to help developers seamlessly explore frontend, backend, database, and tooling options. ",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    liveLink: "https://dev-stack-sandy.vercel.app/",
    githubLink: "https://github.com/hakim-azizul/DevStack",
  },
  {
    title: "Dorm-Meal-management",
    badge: "Under Development",
    description:
      "A web application to manage dormitory meals and related information. Helps users view menus, track meals and manage daily records.",
    tags: ["Next", "Node.js", "MongoDB", "Express"],
    liveLink: "#",
    githubLink: "https://github.com/hakim-azizul/Dorm-Meal-management",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      {/* SECTION HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 text-signature font-medium tracking-wide text-sm md:text-base mb-1">
            <span className="w-6 h-0.5 bg-signature rounded-full" />
            Creative Projects
          </div>
          <p className="text-muted-foreground text-sm md:text-base">
            Some of the projects I&apos;ve built to practice and improve my
            skills.
          </p>
        </div>

        <a
          href="https://github.com/hakim-azizul?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-foreground hover:text-signature transition-colors self-start sm:self-auto"
        >
          View All Projects <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* PROJECTS LIST */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group rounded-2xl bg-card p-6 md:p-8 border border-slate-200/80 dark:border-slate-800/80 hover:border-emerald-500/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          >
            {/* IMAGE / PLACEHOLDER */}
            <div className="w-full lg:w-[28%] h-40 sm:h-44 rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground text-xs font-medium shrink-0 overflow-hidden">
              <div className="flex flex-col items-center gap-2 text-center px-4">
                <div className="w-10 h-10 rounded-lg bg-signature/10 flex items-center justify-center">
                  <span className="text-signature font-mono text-sm font-bold">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <span className="text-muted-foreground/60 text-[11px]">
                  Project Screenshot
                </span>
              </div>
            </div>

            {/* TITLE & DESCRIPTION */}
            <div className="w-full lg:w-[42%] space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg md:text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                {project.badge && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-signature-muted text-signature border border-signature-border">
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* SEPARATOR */}
            <div className="hidden lg:block w-px h-24 bg-border" />

            {/* TAGS & BUTTONS */}
            <div className="w-full lg:w-[26%] flex flex-col justify-between space-y-4">
              <div className="flex flex-wrap gap-1.5 justify-start lg:justify-end">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground/80 border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 justify-start lg:justify-end pt-1">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-signature transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-signature transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-signature" />
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
