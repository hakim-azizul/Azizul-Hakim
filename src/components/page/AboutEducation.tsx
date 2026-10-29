import { GraduationCap, User } from "lucide-react";

const AboutEducation = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* EDUCATION CARD */}
        <div className="relative rounded-2xl bg-card p-8 border border-border shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
          {/* Decorative blob */}
          <div className="absolute right-0 bottom-0 w-40 h-40 bg-signature-muted/50 rounded-tl-full pointer-events-none z-0" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-signature-muted text-signature">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                Education
              </h2>
            </div>

            {/* Content */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-4">
              {/* University icon */}
              <div className="w-20 h-20 shrink-0 rounded-xl bg-signature-muted/60 flex items-center justify-center p-2 border border-signature-border">
                <svg
                  className="w-12 h-12 text-signature"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  />
                </svg>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-bold text-foreground text-base md:text-lg">
                  Al-Azhar University, Egypt
                </h3>
                <p className="text-sm font-medium text-signature">
                  Faculty of Sharia and Law
                </p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Currently pursuing undergraduate studies in the Arabic
                  section.
                </p>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="relative z-10 pt-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-signature-muted text-signature border border-signature-border">
              Undergraduate
            </span>
          </div>
        </div>

        {/* ABOUT ME CARD */}
        <div className="relative rounded-2xl bg-card p-8 border border-border shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-signature-muted text-signature">
                <User className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                About Me
              </h2>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                I&apos;m a Junior Full-Stack Web Developer with a strong
                interest in building practical and meaningful web
                applications. My journey started with HTML, CSS and
                JavaScript, and now I&apos;m working with React, Next.js,
                TypeScript, and MongoDB to grow into a well-rounded developer.
              </p>
              <p>
                Through personal projects and course assignments, I&apos;ve
                been developing my problem-solving skills and gaining hands-on
                experience with modern web technologies. I&apos;m eager to
                contribute to real-world projects, collaborate with other
                developers, and continue learning and growing in the field of
                web development.
              </p>
            </div>
          </div>

          {/* Accent text */}
          <div className="absolute right-1 top-1 text-signature text-xs md:text-sm rotate-[4deg] pointer-events-none select-none hidden sm:block font-mono">
            <p className="font-bold leading-tight">Better</p>
            <p className="font-bold leading-tight">Code</p>
            <p className="font-bold leading-tight">Bigger</p>
            <p className="font-bold leading-tight">Dreams</p>
            <div className="w-10 h-1 bg-signature rounded-full mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEducation;
