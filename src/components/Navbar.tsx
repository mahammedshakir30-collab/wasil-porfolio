import { Download, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5 transition-all duration-300 pt-[calc(1rem+env(safe-area-inset-top))] sm:pt-[calc(1.25rem+env(safe-area-inset-top))]">
      {/* Logo */}
      <a href="#home" className="flex items-baseline gap-1 text-xl sm:text-2xl font-serif font-bold text-[var(--text-primary)] z-[110]">
        WASIL
        <span className="text-[var(--accent)] text-2xl leading-none">.</span>
      </a>

      {/* Desktop Nav links */}
      <ul className="hidden md:flex items-center gap-8 text-[15px] text-[var(--text-primary)]">
        {links.map((link, i) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className={`pb-1 transition-colors hover:text-[var(--accent-strong)] min-tap-target flex items-center ${
                i === 0 ? "border-b-2 border-[var(--accent-strong)] font-medium" : "text-[var(--text-secondary)]"
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side: Download CV + theme toggle + mobile menu toggle */}
      <div className="flex items-center gap-2 sm:gap-4 z-[110]">
        <a
          href="/wasil-cv.pdf"
          download
          className="flex items-center gap-2 rounded-full bg-[var(--accent)] text-[var(--bg-start)] px-3 sm:px-5 py-2 sm:py-2.5 text-sm font-medium hover:opacity-90 transition-opacity min-tap-target justify-center"
        >
          <Download size={16} />
          <span className="hidden sm:inline-block">Download CV</span>
        </a>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="relative w-[52px] h-[28px] rounded-full flex items-center px-1 transition-colors duration-300 min-tap-target"
          style={{
            background: "var(--glass-fill-strong)",
            border: "1px solid var(--glass-border)",
          }}
        >
          <span
            className="absolute w-[22px] h-[22px] rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300"
            style={{ transform: theme === "dark" ? "translateX(24px)" : "translateX(0px)" }}
          >
            {theme === "dark" ? <Moon size={13} className="text-black" /> : <Sun size={13} className="text-black" />}
          </span>
        </button>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden flex items-center justify-center text-[var(--text-primary)] min-tap-target w-11 h-11"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[var(--bg-start)] z-[105] flex flex-col items-center justify-center md:hidden pt-[env(safe-area-inset-top)]">
          <ul className="flex flex-col items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-[var(--text-primary)] min-tap-target flex items-center justify-center p-2"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
