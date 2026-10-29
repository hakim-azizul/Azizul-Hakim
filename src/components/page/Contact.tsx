import { Send, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <div className="relative rounded-2xl bg-[oklch(0.20_0.04_160)] dark:bg-[oklch(0.16_0.04_160)] text-white p-8 md:p-10 border border-signature/20 shadow-xl overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-signature/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-signature/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 z-10 relative">
          {/* LEFT: KEEP IN TOUCH */}
          <div className="flex items-start gap-4 max-w-md w-full">
            <div className="p-3 rounded-xl bg-signature/20 text-signature shrink-0">
              <Send className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Keep In Touch
              </h2>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                I&apos;m currently open to new opportunities in back-end
                development. Feel free to reach out if you&apos;d like to
                collaborate or just say hello!
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden lg:block w-px h-20 bg-white/10" />

          {/* SOCIAL LINKS */}
          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <a
              href="https://github.com/hakim-azizul"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-xs md:text-sm font-medium group"
            >
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-signature/40 transition-colors">
                <FaGithub className="w-4 h-4 text-white" />
              </div>
              github.com/hakim-azizul
            </a>

            <a
              href="https://linkedin.com/in/azizul-hakim-4a2a30240/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-xs md:text-sm font-medium group"
            >
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-signature/40 transition-colors">
                <FaLinkedin className="w-4 h-4 text-white" />
              </div>
              linkedin.com/in/azizul-hakim-4a2a30240/
            </a>
          </div>

          {/* CTA BUTTON */}
          <div className="w-full lg:w-auto">
            <a
              href="mailto:your-email@example.com"
              className="group flex items-center justify-between gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-signature/40 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="text-xs md:text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                Let&apos;s build something great together
              </span>
              <div className="p-2.5 rounded-full bg-signature text-white group-hover:bg-signature/80 transition-colors shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
