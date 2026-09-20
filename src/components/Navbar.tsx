import { Download, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const links = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300">
      {/* Logo */}
      <a href="#home" className="flex items-baseline gap-1 text-2xl font-serif font-bold text-[var(--text-primary)]">
        WASIL
        <span className="text-[var(--accent)] text-2xl leading-none">.</span>
      </a>

      {/* Nav links */}
      <ul className="hidden md:flex items-center gap-8 text-[15px] text-[var(--text-primary)]">
        {links.map((link, i) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className={`pb-1 transition-colors hover:text-[var(--accent-strong)] ${
                i === 0 ? "border-b-2 border-[var(--accent-strong)] font-medium" : "text-[var(--text-secondary)]"
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side: Download CV + theme toggle */}
      <div className="flex items-center gap-4">
        <a
          href="/wasil-cv.pdf"
          download
          className="hidden sm:flex items-center gap-2 rounded-full bg-[var(--accent)] text-[var(--bg-start)] px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Download size={16} />
          Download CV
        </a>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="relative w-[52px] h-[28px] rounded-full flex items-center px-1 transition-colors duration-300"
          style={{
            background: "var(--glass-fill-strong)",
            border: "1px solid var(--glass-border)",
          }}
        >
          <span
            className="absolute w-[22px] h-[22px] rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300"
            style={{ transform: theme === "dark" ? "translateX(24px)" : "translateX(0px)" }}
          >
            {theme === "dark" ? <Moon size={13} /> : <Sun size={13} />}
          </span>
        </button>
      </div>
    </nav>
  );
}
