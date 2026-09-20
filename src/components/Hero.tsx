import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const traits = [
  { title: "Multi-Skilled", subtitle: "Finance & Design" },
  { title: "Student Leader", subtitle: "Union President (2025 - 2026)" },
  { title: "Community Focused", subtitle: "Volunteer & Organizer (2023 - 2026)" },
];

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 px-8 max-w-7xl mx-auto">
      {/* Main hero card */}
      <div className="relative liquid-glass rounded-[32px] grid md:grid-cols-[1.4fr_1fr]">

        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 flex flex-col justify-center p-10 md:p-14 md:pr-0"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs tracking-[0.2em] text-[var(--text-secondary)] font-medium">
              HELLO, I'M WASIL
            </span>
            <span className="h-px w-16 bg-[var(--glass-border)]" />
          </div>

          <h1 className="font-serif leading-[1.05] mb-6">
            <span className="block text-5xl md:text-6xl text-[var(--text-primary)]">Accountant |</span>
            <span className="block text-5xl md:text-6xl text-[var(--accent-strong)]">Graphic Designer</span>
          </h1>

          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-md mb-8 leading-relaxed">
            A passionate learner, creative thinker, and team player, always ready to
            turn ideas into impact through strategic leadership and effective project management.
          </p>

          <div className="flex items-center gap-4 mb-10">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-[var(--accent)] text-[var(--bg-start)] px-6 py-3.5 font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--glass-border)] px-6 py-3.5 font-medium text-[var(--text-primary)] hover:bg-[var(--glass-fill)] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative min-h-[360px] md:min-h-full w-full rounded-br-[32px]"
        >
          {/* decorative accent blob, behind photo */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl"
            style={{ background: "var(--accent)", opacity: 0.18, zIndex: 0 }}
          />

          <img
            src="/assets/wasil-portrait.png"
            alt="Wasil Hassan"
            className="hidden md:block absolute bottom-0 right-0 w-[110%] max-w-none h-[120%] object-contain object-bottom z-10 pointer-events-none select-none drop-shadow-2xl"
            style={{ 
              clipPath: "inset(-50% 0% 0% -50% round 0 0 32px 0)" 
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
