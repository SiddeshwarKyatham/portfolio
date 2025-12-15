import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Zap, Award } from "lucide-react";

const skills = [
  { name: "React.js", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "HTML & CSS", level: 90 },
  { name: "Node.js & Express.js", level: 80 },
  { name: "MongoDB & MySQL", level: 75 },
  { name: "Git & GitHub", level: 85 },
];

const stats = [
  { icon: Code, value: "5+", label: "Projects Built" },
  { icon: Palette, value: "MERN", label: "Stack Focus" },
  { icon: Award, value: "2027", label: "B.Tech Graduate" },
  { icon: Zap, value: "Open", label: "To Opportunities" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Text */}
          <motion.div ref={ref} initial={false} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.7 }}>
            <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-5xl md:text-7xl mb-6 md:mb-8">
              BUILDING CALM<br />
              <span className="text-gradient">SCALABLE UI</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm Kyatham Sai Siddeshwar, a B.Tech ECE student at CMR College of Engineering and Technology in
                Hyderabad who enjoys working across the stack. I gravitate towards the MERN stack because it lets me
                move from idea to working product without losing context.
              </p>
              <p>
                In projects like Pay4Skill and Mana Nivas, I pay attention to small details: how a student finds a gig,
                how a guest books a room, where errors could quietly break trust. I try to keep interfaces quiet,
                flows predictable, and the codebase in a place I can keep improving over time.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-10 space-y-6">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} initial={false} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.4, delay: 0.1 * index }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div initial={false} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="grid grid-cols-2 gap-6 md:gap-7">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} initial={false} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.4, delay: 0.12 * index }} className="glass p-7 rounded-2xl group">
                  <stat.icon className="w-8 h-8 text-primary mb-4 transition-transform group-hover:scale-110" />
                  <div className="font-display text-5xl mb-2 text-gradient">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-32 overflow-hidden border-y border-border py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {["FOCUSED", "FRONTEND", "FULL-STACK", "PROBLEM SOLVER", "LEARNER", "BUILDER"].map((word, j) => (
                <span key={j} className="font-display text-5xl md:text-7xl text-muted/30 flex items-center gap-8">
                  {word}
                  <span className="w-3 h-3 rounded-full bg-primary/50" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
