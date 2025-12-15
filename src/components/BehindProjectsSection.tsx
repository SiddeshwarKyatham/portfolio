import { motion } from "framer-motion";

const reflections = [
  {
    name: "Pay4Skill – Freelancing Web Platform",
    problem:
      "Around campus, I saw students looking for short-term work and employers looking for fresh talent, but there was no focused place that respected both sides.",
    constraint:
      "With limited time as a student, I narrowed the first version to auth, job discovery, applications, and a basic analytics view that could actually be maintained.",
    next:
      "Next, I want to improve matching logic, make feedback between students and employers more structured, and keep the UI as calm as it is today.",
  },
  {
    name: "Mana Nivas – Hotel Booking Application",
    problem:
      "Most small hotel booking experiences I saw felt either visually noisy or confusing on mobile, especially around choosing dates and room types.",
    constraint:
      "The UI needed to feel polished with glassmorphism and motion, but still perform well on lower-end devices, so every effect had to justify itself.",
    next:
      "I&apos;d like to strengthen error states, add offline-friendly behavior for flaky connections, and give admins more control without cluttering the guest journey.",
  },
];

const BehindProjectsSection = () => {
  return (
    <section className="relative py-28 md:py-44 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-left md:text-left"
          >
            <span className="text-primary text-sm uppercase tracking-widest mb-4 block">Behind the Projects</span>
            <h2 className="font-display text-4xl md:text-[3.5rem] leading-tight">
              What I was trying to fix,<br className="hidden md:block" /> and what I&apos;d do next.
            </h2>
          </motion.div>

          <div className="space-y-8 md:space-y-10">
            {reflections.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass p-6 md:p-8 rounded-3xl space-y-4 md:space-y-5"
              >
                <h3 className="font-display text-2xl md:text-3xl">{project.name}</h3>
                <div className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed">
                  <p>
                    <span className="font-medium text-foreground">Problem I noticed:&nbsp;</span>
                    {project.problem}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">One real constraint:&nbsp;</span>
                    {project.constraint}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">What I&apos;d improve next:&nbsp;</span>
                    {project.next}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindProjectsSection;


