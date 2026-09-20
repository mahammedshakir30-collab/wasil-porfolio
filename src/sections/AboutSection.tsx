import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Decorative blurred blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[var(--accent)] opacity-10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        <SectionHeading title="About Me" subtitle="Professional Summary" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass rounded-[32px] p-10 md:p-16 border border-[var(--glass-border)] shadow-xl relative overflow-hidden"
        >
          {/* Subtle inner decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)] opacity-10 blur-[100px] rounded-full pointer-events-none" />

          <h3 className="text-3xl md:text-5xl font-light text-[var(--text-primary)] mb-10 leading-[1.2] max-w-4xl">
            A diligent and passionate professional poised to collaborate towards the attainment of <span className="text-[var(--accent)] italic">company objectives.</span>
          </h3>
          
          <div className="space-y-6 text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed font-light max-w-3xl">
            <p>
              Motivated and detail-oriented finance and accounting professional pursuing an MBA in Finance with effective leadership and strategic project management skills.
            </p>
            <p>
              I am equipped with adept organizational abilities, successfully coordinating diverse activities and improving operational efficiency across academic, extracurricular, and professional programs.
            </p>
            <p>
              Whether I am designing compelling brand identities or managing complex financial workflows, I bring a unique blend of creativity and analytical precision to every project.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="p-8 rounded-2xl bg-[var(--glass-fill)] border border-[var(--glass-border)] hover:border-[var(--accent)] hover:bg-[var(--glass-fill-strong)] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/20 flex items-center justify-center mb-6">
                <span className="text-[var(--accent-strong)] text-xl font-bold">01</span>
              </div>
              <h4 className="text-[var(--text-primary)] font-medium text-xl mb-3 tracking-wide">Strategic Thinker</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">Balancing creative vision with financial viability and operational efficiency.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-[var(--glass-fill)] border border-[var(--glass-border)] hover:border-[var(--accent)] hover:bg-[var(--glass-fill-strong)] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/20 flex items-center justify-center mb-6">
                <span className="text-[var(--accent-strong)] text-xl font-bold">02</span>
              </div>
              <h4 className="text-[var(--text-primary)] font-medium text-xl mb-3 tracking-wide">Effective Leader</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">Managed team responsibilities and delegated tasks to achieve institutional objectives.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
