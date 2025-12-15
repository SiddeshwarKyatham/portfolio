import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (href: string) => {
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header initial={false} animate={{ opacity: 1, y: 0 }} className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-display text-2xl tracking-wider flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="uppercase">Siddeshwar</span>
            <span className="text-gradient">FOLIO</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.href);
                }}
                className="relative text-muted-foreground hover:text-foreground transition-colors group"
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#contact");
            }}
              className="px-6 py-3 glass rounded-full text-foreground font-medium hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-12 h-12 glass rounded-full flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="glass mt-4 rounded-2xl p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.href);
                setIsOpen(false);
              }}
                className="block text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#contact");
              setIsOpen(false);
            }}
              className="block text-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
