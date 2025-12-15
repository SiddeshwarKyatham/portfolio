import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay pt-24 md:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract digital art background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-[12%] w-32 h-32 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-36 right-[18%] w-48 h-48 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl md:ml-10 lg:ml-20">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Frontend &amp; Full-Stack Developer · Hyderabad, India · B.Tech ECE 2027
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.8rem,9.75vw,9.75rem)] leading-[0.85] tracking-tight mb-10"
          >
            <span className="block">CRAFTING</span>
            <span className="block text-gradient glow-text">SCALABLE</span>
            <span className="block md:inline-block md:pl-24">DIGITAL EXPERIENCES</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed mb-10 md:mb-14 md:ml-[3ch]"
          >
            I build modern web applications with React and Node.js, focusing on calm interfaces, clear flows, and
            scalable foundations for real products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 md:ml-[3ch]"
          >
            <motion.a
              href="#work"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-foreground"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              className="px-8 py-4 glass text-foreground font-medium rounded-full border border-border hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 glass text-foreground font-medium rounded-full border border-border hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 right-12 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>

      {/* Side Text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-border to-transparent" />
        <span className="text-xs uppercase tracking-widest text-muted-foreground [writing-mode:vertical-lr] rotate-180">
          Available for Projects
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
