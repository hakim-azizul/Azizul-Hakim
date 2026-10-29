import { Heart, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm text-muted-foreground">
        {/* LEFT COPYRIGHT */}
        <p>
          © {new Date().getFullYear()} Azizul Hakim. Built with Next.js &
          Tailwind CSS.
        </p>

        {/* RIGHT DETAILS */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-medium text-foreground/70">
            <Code2 className="w-4 h-4 text-signature" />
            Full-Stack Developer
          </div>
          <span className="text-border">•</span>
          <div className="flex items-center text-signature">
            <Heart className="w-4 h-4 fill-current" aria-label="Made with love" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
