import { Monitor, Server, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Monitor className="w-5 h-5" />,
    colorClass: "text-signature",
    cardBg: "bg-signature-muted/50 border-signature-border/60",
    iconBg: "bg-signature-muted",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Authentication",
    icon: <Server className="w-5 h-5" />,
    colorClass: "text-purple-600 dark:text-purple-400",
    cardBg:
      "bg-purple-50/50 dark:bg-purple-950/20 border-purple-200/50 dark:border-purple-800/30",
    iconBg: "bg-purple-100 dark:bg-purple-900/40",
    skills: ["Express.js", "Better Auth"],
  },
  {
    title: "Database & Deployment",
    icon: <Database className="w-5 h-5" />,
    colorClass: "text-blue-600 dark:text-blue-400",
    cardBg:
      "bg-blue-50/50 dark:bg-blue-950/20 border-blue-200/50 dark:border-blue-800/30",
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    skills: ["MongoDB Atlas", "Vercel"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
      {/* SECTION HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 text-signature font-medium tracking-wide text-sm md:text-base mb-1">
            <span className="w-6 h-0.5 bg-signature rounded-full" />
            Technical Skills
          </div>
          <p className="text-muted-foreground text-sm md:text-base">
            Technologies I work with and am continuously improving.
          </p>
        </div>
      </div>

      {/* THREE CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md ${category.cardBg}`}
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2.5 rounded-xl ${category.iconBg} ${category.colorClass}`}
                >
                  {category.icon}
                </div>
                <h3 className="font-semibold text-foreground text-base md:text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium bg-card text-foreground/80 border border-border shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
