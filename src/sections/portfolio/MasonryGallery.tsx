import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  src: string;
  client: string;
  type?: string;
}

interface MasonryGalleryProps {
  projects: Project[];
  onProjectClick: (project: Project, index: number) => void;
}

export function MasonryGallery({ projects, onProjectClick }: MasonryGalleryProps) {
  
  if (projects.length === 0) {
    return (
      <div className="py-32 text-center">
        <p className="text-[var(--text-secondary)] text-lg">No projects found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <div className="masonry-grid">
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
              key={project.id}
              className="masonry-item liquid-glass group cursor-pointer"
              onClick={() => onProjectClick(project, index)}
            >
              {/* Blur-up placeholder background could go here */}
              <div className="absolute inset-0 bg-[var(--base-lightest)] opacity-10 animate-pulse" />

              <img 
                src={project.src} 
                alt={project.title} 
                loading="lazy"
                className="w-full h-auto block relative z-10 transform group-hover:scale-105 transition-transform duration-300 ease-out" 
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-start)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              
              {/* Hover Content */}
              <div className="absolute inset-0 z-30 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[var(--accent)] text-[10px] md:text-xs font-bold tracking-widest uppercase">
                      {project.category}
                    </span>
                    <div className="h-[1px] w-4 bg-[var(--glass-border)]" />
                    <span className="text-[var(--text-secondary)] text-[10px] md:text-xs tracking-widest uppercase">
                      {project.client}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2 leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Top Right Action */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--glass-fill)] border border-[var(--glass-border)] backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                <Maximize2 className="text-[var(--text-primary)] w-4 h-4 md:w-5 md:h-5" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
