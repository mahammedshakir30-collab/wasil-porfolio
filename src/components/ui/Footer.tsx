import { motion } from 'motion/react';
import { ArrowUp, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="glass-panel rounded-none border-x-0 border-b-0 border-t border-[var(--glass-border)] py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-bold text-[var(--text-primary)] tracking-wider flex items-center gap-1">
              W<span className="text-[var(--accent)]">.</span>
            </span>
            <p className="text-[var(--text-secondary)] text-sm">
              © {new Date().getFullYear()} Wasil. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:wasilhassan654@gmail.com" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--accent)] hover:text-[var(--bg-start)] hover:border-[var(--accent)] transition-all duration-300 group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
