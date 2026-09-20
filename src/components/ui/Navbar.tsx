import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const ThemeToggle = ({ theme, toggleTheme }: { theme: 'light' | 'dark', toggleTheme: () => void }) => (
  <button
    onClick={toggleTheme}
    aria-label="Toggle theme"
    className="relative w-[52px] h-[28px] rounded-full bg-[var(--glass-fill)] border border-[var(--glass-border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-strong)] focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 flex items-center px-1 ml-4"
  >
    <div
      className={`absolute w-5 h-5 rounded-full bg-[var(--text-primary)] flex items-center justify-center transition-transform duration-400 ease-in-out ${
        theme === 'dark' ? 'translate-x-[22px]' : 'translate-x-0'
      }`}
    >
      <div className="relative w-3 h-3 flex items-center justify-center">
        <Sun size={12} className={`absolute text-[var(--bg-start)] transition-opacity duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`} />
        <Moon size={12} className={`absolute text-[var(--bg-start)] transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </div>
  </button>
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 liquid-glass rounded-none border-t-0 border-x-0' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-[var(--text-primary)] tracking-wider flex items-center gap-1 group">
          W<span className="text-[var(--accent)]">.</span>
          <span className="text-sm font-medium text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300 ml-2">Wasil</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-medium border border-[var(--glass-border)] rounded-full hover:bg-[var(--glass-fill)] transition-all duration-300 text-[var(--text-primary)]"
          >
            Let's Talk
          </a>
          
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          
          <button
            className="text-[var(--text-primary)] focus:outline-none z-50 relative ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full left-0 w-full overflow-hidden md:hidden glass-panel rounded-none border-x-0 border-t-0"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 text-sm font-medium border border-[var(--accent)] text-[var(--accent)] rounded-full hover:bg-[var(--accent)] hover:text-[var(--bg-start)] transition-all duration-300"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
