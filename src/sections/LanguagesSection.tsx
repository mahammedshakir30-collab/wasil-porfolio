import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';

const languages = [
  'Malayalam', 'English', 'Arabic', 'Hindi', 'Urdu'
];

export function LanguagesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <SectionHeading title="Languages" subtitle="Communication" align="center" />
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12 max-w-3xl mx-auto">
          {languages.map((lang, index) => (
            <motion.div
              key={lang}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, type: "spring", stiffness: 100 }}
              className="px-8 py-3 rounded-full glass-panel text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-[var(--bg-start)] hover:border-[var(--accent)] transition-all duration-300 font-medium tracking-wide cursor-default"
            >
              {lang}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
