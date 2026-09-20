import React from 'react';

export const ContactButton = () => {
  return (
    <a 
      href="#contact"
      className="rounded-full font-medium uppercase tracking-widest text-[var(--bg-start)] px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-sm sm:text-base outline outline-2 outline-[var(--bg-start)] inline-block text-center hover:opacity-90 transition-opacity"
      style={{
        background: 'var(--accent-strong)',
        boxShadow: '0px 4px 12px var(--glass-shadow)',
        outlineOffset: '-3px'
      }}
    >
      Contact Me
    </a>
  );
};
