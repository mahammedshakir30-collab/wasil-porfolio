import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { SectionHeading } from '../../components/ui/SectionHeading';

// Define the projects based on the user's specs
const projects = [
  {
    id: 'dr-tea',
    title: 'Dr. Tea',
    basePath: '/assets/posters/dr-tea',
    prefix: 'page',
    extension: '.jpg',
    pageCount: 12,
    isSingle: false,
  },
  {
    id: 'cloud-cafe',
    title: 'Cloud Cafe',
    basePath: '/assets/posters/cloud-cafe',
    prefix: 'page',
    extension: '.jpg',
    pageCount: 14,
    isSingle: false,
  },
  {
    id: 'eden-garden-cafe',
    title: 'Eden Garden Cafe — Full Menu',
    basePath: '/assets/posters/eden-garden-cafe',
    prefix: 'page',
    extension: '.jpg',
    pageCount: 5,
    isSingle: false,
  },
  {
    id: 'eden-garden-poster',
    title: 'Eden Garden Cafe — Menu Poster',
    basePath: '/assets/posters/eden-garden-poster',
    prefix: 'page',
    extension: '.jpg',
    pageCount: 1,
    isSingle: true,
  }
];

// Helper to format page numbers like "01", "02"
const formatPage = (num: number) => num.toString().padStart(2, '0');

export function MenuDesignSection() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!activeProject) return;
    
    if (e.key === 'Escape') {
      setActiveProject(null);
    } else if (e.key === 'ArrowRight' && !activeProject.isSingle) {
      setCurrentIndex((prev) => (prev < activeProject.pageCount - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowLeft' && !activeProject.isSingle) {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  }, [activeProject]);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject, handleKeyDown]);

  const openGallery = (project: typeof projects[0]) => {
    setActiveProject(project);
    setCurrentIndex(0);
  };

  const closeGallery = () => {
    setActiveProject(null);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProject && currentIndex < activeProject.pageCount - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProject && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Preload next and prev images
  useEffect(() => {
    if (activeProject && !activeProject.isSingle) {
      const preloadImage = (index: number) => {
        if (index >= 0 && index < activeProject.pageCount) {
          const img = new Image();
          img.src = `${activeProject.basePath}/${activeProject.prefix}${formatPage(index + 1)}${activeProject.extension}`;
        }
      };
      preloadImage(currentIndex + 1);
      preloadImage(currentIndex - 1);
    }
  }, [currentIndex, activeProject]);

  // Framer Motion variants
  const slideVariants = {
    enter: (direction: number) => {
      if (prefersReducedMotion) return { opacity: 0 };
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      if (prefersReducedMotion) return { opacity: 0 };
      return {
        x: direction < 0 ? 100 : -100,
        opacity: 0
      };
    }
  };

  // State to track slide direction for animation
  const [tuple, setTuple] = useState([0, 0]); // [currentIndex, direction]
  
  // Keep tuple in sync with currentIndex
  useEffect(() => {
    setTuple((prev) => {
      const prevIndex = prev[0];
      const direction = currentIndex > prevIndex ? 1 : -1;
      return [currentIndex, direction];
    });
  }, [currentIndex]);

  const direction = tuple[1];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--glass-border)]">
      <SectionHeading title="Poster & Menu" subtitle="Design" align="center" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group cursor-pointer glass-panel border border-[var(--glass-border)] rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            onClick={() => openGallery(project)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[var(--glass-fill)] flex items-center justify-center">
              <img 
                src={`${project.basePath}/${project.prefix}01${project.extension}`}
                alt={`${project.title} Cover`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[var(--text-primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Page Count Badge */}
              {!project.isSingle && (
                <div className="absolute top-4 right-4 bg-[var(--bg-start)] text-[var(--text-primary)] px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md border border-[var(--glass-border)]">
                  <Layers size={14} />
                  {project.pageCount} pages
                </div>
              )}
            </div>
            
            {/* Info */}
            <div className="p-5 flex-1 flex flex-col justify-center border-t border-[var(--glass-border)]">
              <h3 className="text-[var(--text-primary)] font-semibold text-lg leading-tight group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Gallery Overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--bg-start)]/95 backdrop-blur-lg pt-[env(safe-area-inset-top)]"
            onClick={closeGallery}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-50 pointer-events-none">
              <div className="text-[var(--text-primary)] font-medium bg-[var(--bg-start)]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[var(--glass-border)] pointer-events-auto shadow-sm">
                {!activeProject.isSingle ? (
                  `${currentIndex + 1} / ${activeProject.pageCount}`
                ) : (
                  activeProject.title
                )}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeGallery();
                }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-start)] border border-[var(--glass-border)] text-[var(--text-primary)] hover:bg-[var(--glass-fill-strong)] transition-colors min-tap-target pointer-events-auto shadow-sm"
                aria-label="Close gallery"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Arrows */}
            {!activeProject.isSingle && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-start)] border border-[var(--glass-border)] text-[var(--text-primary)] transition-all min-tap-target shadow-md ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[var(--glass-fill-strong)] hover:scale-105'}`}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
                
                <button
                  onClick={nextSlide}
                  disabled={currentIndex === activeProject.pageCount - 1}
                  className={`absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-start)] border border-[var(--glass-border)] text-[var(--text-primary)] transition-all min-tap-target shadow-md ${currentIndex === activeProject.pageCount - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[var(--glass-fill-strong)] hover:scale-105'}`}
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            {/* Image Container */}
            <div 
              className="relative w-full h-full flex items-center justify-center p-0 sm:p-16 overflow-hidden touch-none"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={`${activeProject.id}-${currentIndex}`}
                  src={`${activeProject.basePath}/${activeProject.prefix}${formatPage(currentIndex + 1)}${activeProject.extension}`}
                  alt={`${activeProject.title} - Page ${currentIndex + 1}`}
                  loading="eager"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag={!activeProject.isSingle && !prefersReducedMotion ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold && currentIndex < activeProject.pageCount - 1) {
                      setCurrentIndex(currentIndex + 1);
                    } else if (swipe > swipeConfidenceThreshold && currentIndex > 0) {
                      setCurrentIndex(currentIndex - 1);
                    }
                  }}
                  className="absolute w-full h-full max-h-[100dvh] sm:max-h-[90vh] object-contain shadow-2xl"
                  style={{ maxWidth: '100%' }}
                />
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Swipe configuration for Framer Motion drag
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
