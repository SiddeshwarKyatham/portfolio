import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "Pay4Skill – Freelancing Web Platform",
    category: "Full-Stack Web Application",
    year: "2024",
    image: project1,
    description:
      "A student-focused freelancing platform connecting students with employers for short-term gigs, with secure auth, focused job flows, and simple analytics built on the MERN stack.",
  },
  {
    id: 2,
    title: "Mana Nivas – Hotel Booking Application",
    category: "Full-Stack Web Application",
    year: "2024",
    image: project2,
    description:
      "A modern, mobile-first hotel booking app with room management, real-time availability, and a clean glassmorphism UI, powered by React, Node.js, Express, MongoDB, and TailwindCSS.",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 90 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative ${index === 1 ? "lg:mt-16" : "lg:mt-0"}`}
    >
      <div className="project-card relative aspect-[4/5] overflow-hidden rounded-3xl cursor-pointer bg-surface-glass/70">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="project-overlay" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
          <div className="transform transition-transform duration-600 group-hover:-translate-y-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-widest text-primary font-medium">
                {project.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span className="text-xs text-muted-foreground">{project.year}</span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl mb-3">{project.title}</h3>
            <p className="text-muted-foreground text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
              {project.description}
            </p>
          </div>
        </div>

        {/* Hover Icon */}
        <motion.div
          className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          whileHover={{ scale: 1.05, rotate: 32 }}
        >
          <ArrowUpRight className="w-5 h-5 text-foreground" />
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/20 blur-3xl" />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="work" className="relative py-32 md:py-48 overflow-hidden">
      {/* Section Header */}
      <div ref={headerRef} className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
              Selected Works
            </span>
            <h2 className="font-display text-6xl md:text-8xl">
              FEATURED<br />
              <span className="text-gradient">PROJECTS</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-lg">
            Two focused builds that reflect how I think about student work, constraints, and clear booking and discovery
            flows.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 justify-items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* View All Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 mt-20 flex justify-center"
      >
        <motion.a
          href="#"
          className="group inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
          whileHover={{ x: 10 }}
        >
          View All Projects
          <ExternalLink className="w-5 h-5 transition-transform group-hover:rotate-12" />
        </motion.a>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
    </section>
  );
};

export default ProjectsSection;
