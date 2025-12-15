import { motion } from "framer-motion";

const decisions = [
  {
    title: "Staying with MERN for both projects",
    detail:
      "For Pay4Skill and Mana Nivas, I chose React, Node.js, Express, and MongoDB instead of chasing newer frameworks. Knowing the stack well let me spend energy on flows, data modeling, and edge cases.",
  },
  {
    title: "Designing from the primary user flow outward",
    detail:
      "In Pay4Skill, I mapped how a student discovers a gig and how an employer posts one. Routes, API endpoints, and components all follow those paths so the code mirrors how the product is used.",
  },
  {
    title: "Prioritizing clarity over visual tricks",
    detail:
      "Mana Nivas uses glassmorphism and subtle motion, but only after the booking path was simple on a slow, mobile connection. UI details come after the core experience is easy to follow.",
  },
  {
    title: "Keeping analytics useful, not overwhelming",
    detail:
      "For Pay4Skill, analytics started with a few essential views: active gigs, applications, and simple trends. This kept queries and UI fast while still giving enough signal to make decisions.",
  },
];

const DecisionsSection = () => {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl md:mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm uppercase tracking-widest mb-4 block"
          >
            Decisions Over Tools
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-[3.25rem] leading-tight mb-8"
          >
            The choices behind Pay4Skill and Mana Nivas.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {decisions.map((decision, index) => (
              <motion.div
                key={decision.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.08 * index }}
                className="glass p-6 md:p-7 rounded-2xl space-y-3 md:space-y-4"
              >
                <h3 className="font-display text-xl md:text-2xl">{decision.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{decision.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecisionsSection;


