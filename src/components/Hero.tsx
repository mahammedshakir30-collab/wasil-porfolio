import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const traits = [
  { title: "Multi-Skilled", subtitle: "Finance & Design" },
  { title: "Student Leader", subtitle: "Union President (2025 - 2026)" },
  { title: "Community Focused", subtitle: "Volunteer & Organizer (2023 - 2026)" },
];

export default function Hero() {
  return (
    <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Main hero card */}
      <div className="relative liquid-glass rounded-[32px] flex flex-col lg:grid lg:grid-cols-[1.4fr_1fr] overflow-hidden lg:overflow-visible">

        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 flex flex-col justify-center p-6 sm:p-10 lg:p-14 lg:pr-0"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs tracking-[0.2em] text-[var(--text-secondary)] font-medium">
              HELLO, I'M WASIL
            </span>
            <span className="h-px w-16 bg-[var(--glass-border)]" />
          </div>

          <h1 className="font-serif leading-[1.05] mb-6 text-4xl sm:text-5xl lg:text-6xl">
            <span className="block text-[var(--text-primary)]">Accountant |</span>
            <span className="block text-[var(--accent-strong)]">Graphic Designer</span>
          </h1>

          <p className="text-[var(--text-secondary)] text-sm sm:text-base lg:text-lg max-w-md mb-8 leading-relaxed">
            A passionate learner, creative thinker, and team player, always ready to
            turn ideas into impact through strategic leadership and effective project management.
          </p>

          <div className="flex flex-col min-[480px]:flex-row items-stretch min-[480px]:items-center gap-4 mb-10 w-full min-[480px]:w-auto">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] text-[var(--bg-start)] px-6 py-3.5 font-medium hover:opacity-90 transition-opacity min-tap-target w-full min-[480px]:w-auto text-center"
            >
              View My Work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center rounded-full border border-[var(--glass-border)] px-6 py-3.5 font-medium text-[var(--text-primary)] hover:bg-[var(--glass-fill)] transition-colors min-tap-target w-full min-[480px]:w-auto text-center"
            >
              Get in Touch
            </a>
          </div>

          {/* Trait Row */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-y-4 sm:gap-y-6 pt-6 border-t border-[var(--glass-border)] w-full">
            {traits.map((trait, idx) => (
              <div 
                key={trait.title} 
                className={`flex-1 min-w-[140px] flex flex-col ${idx !== traits.length - 1 ? 'sm:border-r border-b sm:border-b-0 border-[var(--glass-border)] pb-4 sm:pb-0 sm:pr-6 mb-2 sm:mb-0' : ''}`}
              >
                <span className="text-[var(--text-primary)] font-bold text-sm mb-1">{trait.title}</span>
                <span className="text-[var(--text-secondary)] text-xs">{trait.subtitle}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-full w-full rounded-br-[32px] rounded-bl-[32px] lg:rounded-bl-none flex items-end justify-center"
        >
          {/* decorative accent blob, behind photo */}
          <div
            className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 rounded-full blur-3xl"
            style={{ background: "var(--accent)", opacity: 0.18, zIndex: 0 }}
          />

          <img
            src="/assets/wasil-portrait.png"
            alt="Wasil Hassan"
            className="relative lg:absolute bottom-0 right-0 lg:w-[110%] w-full h-[120%] lg:max-w-none object-contain lg:object-contain object-bottom z-10 pointer-events-none select-none drop-shadow-2xl"
            style={{ 
              clipPath: "inset(-50% 0% 0% -50% round 0 0 32px 0)" 
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
