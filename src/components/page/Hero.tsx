import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Code2, Database, Mail, ExternalLink } from "lucide-react";
import HeroImage from "../../../public/hero_profile.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* ================= LEFT SIDE: IMAGE AREA ================= */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          {/* Hand-drawn Note 1 */}
          <div className="absolute -left-2 sm:left-2 top-8 z-20 text-muted-foreground font-mono text-xs sm:text-sm rotate-[-10deg] pointer-events-none select-none hidden sm:block">
            <p className="font-semibold leading-snug">Turning</p>
            <p className="font-semibold leading-snug">ideas into</p>
            <p className="font-semibold leading-snug">web apps</p>
            <svg
              className="w-7 h-7 mt-1 text-muted-foreground/70 rotate-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          {/* MAIN IMAGE CONTAINER */}
          <div className="relative w-72 sm:w-80 md:w-95 h-90 sm:h-100 flex items-end justify-center">
            {/* Background Shape 1 */}
            <div className="absolute top-4 left-2 w-full h-[90%] bg-signature-muted rounded-[45%_55%_60%_40%/50%_50%_50%_50%] -z-20 transform -rotate-6 scale-105" />

            {/* Background Shape 2 */}
            <div className="absolute top-8 right-2 w-[85%] h-[85%] bg-signature rounded-[30%_70%_70%_30%/30%_30%_70%_70%] -z-10 transform rotate-12 opacity-80" />

            {/* Profile Image */}
            <div className="relative w-full h-full z-10 flex items-end">
              <Image
                src={HeroImage}
                alt="Portrait of Azizul Hakim"
                priority
                className="object-contain object-bottom max-h-full drop-shadow-md"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute left-0 bottom-4 z-30 bg-card/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-md border border-signature-border flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-signature animate-pulse" />
              <div className="text-[11px] leading-tight font-medium">
                <span className="block text-muted-foreground text-[10px]">
                  Ready To
                </span>
                <span className="font-bold text-foreground">
                  Make Wonder
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: CONTENT ================= */}
        <div className="relative w-full lg:w-1/2 space-y-5 text-left z-10">
          {/* Greeting */}
          <div className="flex items-center gap-2 text-muted-foreground font-semibold tracking-wide text-sm md:text-base">
            <span className="text-signature font-bold font-mono">{`</>`}</span>
            <span>Hello, I&apos;m</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground uppercase">
              AZIZUL{" "}
              <span className="text-signature">HAKIM</span>
            </h1>
            <p className="text-lg md:text-xl font-bold text-foreground/80">
              Junior Full-Stack Web Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg">
            I&apos;m a passionate developer focused on building modern,
            responsive, and user-friendly web applications. I work with React,
            Next.js, TypeScript and MongoDB to turn ideas into real solutions.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-signature-muted text-foreground text-xs sm:text-sm font-medium border border-signature-border">
              <Code2 className="w-4 h-4 text-signature" />
              Web Development
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-signature-muted text-foreground text-xs sm:text-sm font-medium border border-signature-border">
              <Database className="w-4 h-4 text-signature" />
              Backend Learning
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://github.com/hakim-azizul"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background hover:opacity-90 text-xs sm:text-sm font-semibold transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-signature focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a
              href="https://linkedin.com/in/azizul-hakim-4a2a30240/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-foreground hover:bg-muted text-xs sm:text-sm font-semibold border border-border transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-signature focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a
              href="mailto:hakimsanny898@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-foreground hover:bg-muted text-xs sm:text-sm font-semibold border border-border transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-signature focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="w-4 h-4" />
              Email
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Hand-drawn Note 2 */}
          <div className="absolute -right-4 md:-right-10 bottom-4 z-20 text-muted-foreground font-mono text-xs sm:text-sm rotate-[8deg] pointer-events-none select-none hidden lg:block">
            <p className="font-bold tracking-wide">Build</p>
            <p className="font-bold tracking-wide">Learn .</p>
            <p className="font-bold tracking-wide">Grow.</p>
            <div className="w-10 h-0.5 bg-muted-foreground mt-1" />
            <div className="w-6 h-0.5 bg-muted-foreground mt-0.5 ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
