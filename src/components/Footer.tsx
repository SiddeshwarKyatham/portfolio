import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <p className="text-foreground text-sm md:text-base flex items-center gap-2">
            © 2025 Kyatham Sai Siddeshwar
          </p>

          <div className="flex items-center gap-4 md:ml-auto text-foreground/70">
            <a
              href="https://www.linkedin.com/in/kyatham-sai-siddeshwar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
              title="linkedin"
              className="p-1 text-muted-foreground/70 hover:text-foreground/90 hover:opacity-90 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/kyathamsiddeshwar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
              title="github"
              className="p-1 text-muted-foreground/70 hover:text-foreground/90 hover:opacity-90 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:kyathamsiddeshwar@gmail.com"
              aria-label="email"
              title="email"
              className="p-1 text-muted-foreground/70 hover:text-foreground/90 hover:opacity-90 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
