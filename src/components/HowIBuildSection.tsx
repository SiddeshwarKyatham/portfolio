import { motion } from "framer-motion";

const lines = [
  "I start from constraints: who is using this, on what device, and what actually needs to ship.",
  "I keep the stack simple — React, Node.js, Express, MongoDB — so I can focus on product decisions, not tooling.",
  "I design flows first, then add motion only where it supports clarity or feedback.",
  "I prefer calm interfaces that make it obvious what happens next over clever UI that needs explaining.",
  "I write code for my future self, with structure and naming that survive late-night debugging.",
];

const HowIBuildSection = () => {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl md:ml-10 lg:ml-24">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm uppercase tracking-widest mb-4 block"
          >
            How I Build
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-[3.5rem] leading-tight mb-8"
          >
            A calm approach to shipping real interfaces.
          </motion.h2>

          <div className="space-y-3 text-muted-foreground text-base md:text-lg leading-relaxed">
            {lines.map((line, index) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIBuildSection;


