import React from 'react';

interface LiveProjectButtonProps {
  href?: string;
}

export const LiveProjectButton = ({ href }: LiveProjectButtonProps) => {
  return (
    <a 
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border-2 border-[var(--text-primary)] text-[var(--text-primary)] font-medium uppercase tracking-widest px-8 py-3 text-xs sm:text-sm hover:bg-[var(--text-primary)]/10 transition-colors whitespace-nowrap inline-block text-center"
    >
      View Project
    </a>
  );
};

