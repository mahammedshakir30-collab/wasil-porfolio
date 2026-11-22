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
            Detail-oriented <span className="text-[var(--accent)] font-normal">Accounts Executive</span> and <span className="text-[var(--accent)] italic">Graphic Designer</span>.
          </h3>
          
          <div className="space-y-6 text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed font-light max-w-3xl">
            <p>
              I specialize in accounting operations, financial documentation, and high-impact creative design. Skilled at maintaining precision, managing structured financial records, and delivering professional visual content.
            </p>
            <p>
              With hands-on experience in IFRS financial reporting, bookkeeping (Tally, Zoho Books, QuickBooks), audit support, VAT compliance, and advanced analytics via Excel and Power BI, I ensure financial clarity and operational rigor.
            </p>
            <p>
              Simultaneously, as a seasoned graphic designer for clients across Saudi Arabia and India, I craft publication-grade corporate profiles, multi-page brochures, editorial magazines, and branding campaigns.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="p-8 rounded-2xl bg-[var(--glass-fill)] border border-[var(--glass-border)] hover:border-[var(--accent)] hover:bg-[var(--glass-fill-strong)] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/20 flex items-center justify-center mb-6">
                <span className="text-[var(--accent-strong)] text-xl font-bold">01</span>
              </div>
              <h4 className="text-[var(--text-primary)] font-medium text-xl mb-3 tracking-wide">Financial Precision</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">Expertise in IFRS reporting, audit documentation, reconciliations, and tax compliance.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-[var(--glass-fill)] border border-[var(--glass-border)] hover:border-[var(--accent)] hover:bg-[var(--glass-fill-strong)] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/20 flex items-center justify-center mb-6">
                <span className="text-[var(--accent-strong)] text-xl font-bold">02</span>
              </div>
              <h4 className="text-[var(--text-primary)] font-medium text-xl mb-3 tracking-wide">Creative Excellence</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">Delivering Aramco-approved corporate profiles, multi-page brochures, and premium editorial visuals.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
