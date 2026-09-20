import { motion } from 'motion/react';
import { MagneticButton } from '../components/ui/MagneticButton';
import { Eye, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center md:items-start"
      >
        <div className="w-full max-w-4xl liquid-glass p-10 md:p-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 text-[var(--text-primary)]">
            Wasil Hassan.
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-10 font-light tracking-wide flex items-center flex-wrap gap-3">
            <span>MBA Student</span>
            <span className="text-[var(--accent)] font-bold">·</span>
            <span>Union President</span>
            <span className="text-[var(--accent)] font-bold">·</span>
            <span>Creative Designer</span>
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <MagneticButton as="a" href="#portfolio" className="bg-[var(--accent)] text-[var(--bg-start)] hover:bg-[var(--text-primary)]">
              <span className="flex items-center gap-2">
                <Eye size={18} />
                View Work
              </span>
            </MagneticButton>
            <MagneticButton as="a" href="#contact" className="border border-[var(--glass-border)] text-[var(--text-primary)] hover:bg-[var(--glass-fill)]">
              <span className="flex items-center gap-2">
                <Mail size={18} />
                Contact
              </span>
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
