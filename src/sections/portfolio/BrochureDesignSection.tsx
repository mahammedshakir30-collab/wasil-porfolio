import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Layers, ExternalLink, Download, FileText } from 'lucide-react';
import { SectionHeading } from '../../components/ui/SectionHeading';

interface BrochureProject {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  basePath: string;
  prefix: string;
  extension: string;
  pageCount: number;
  pdfUrl: string;
  tags: string[];
}

const brochureProjects: BrochureProject[] = [
  {
    id: 'kron-company',
    title: 'KRON Company',
    subtitle: 'Corporate Profile (Aramco Approved)',
    client: 'KRON Company — Dammam, KSA',
    basePath: '/assets/brochures/kron-company',
    prefix: 'page',
    extension: '.jpg',
    pageCount: 34,
    pdfUrl: '/projects/brochures/kron-company-profile.pdf',
    tags: ['Corporate Profile', 'Aramco Approved', '34 Pages']
  },
  {
    id: 'cactus-clarity',
    title: 'Cactus Business Support',
    subtitle: 'Company Profile & Vision',
    client: 'Cactus — Dammam, KSA',
    basePath: '/assets/brochures/cactus-clarity',
    prefix: 'page',
    extension: '.jpg',
    pageCount: 12,
    pdfUrl: '/projects/brochures/cactus-business-clarity.pdf',
    tags: ['Business Profile', 'Clarity', '12 Pages']
  },
  {
    id: 'cactus-services',
    title: 'Cactus Services',
    subtitle: 'Service Catalog & Setup Guide',
    client: 'Cactus — Dammam, KSA',
    basePath: '/assets/brochures/cactus-services',
    prefix: 'page',
    extension: '.jpg',
    pageCount: 4,
    pdfUrl: '/projects/brochures/cactus-services-brochure.pdf',
    tags: ['Service Catalog', 'Brochure', '4 Pages']
  }
];

const formatPage = (num: number) => num.toString().padStart(2, '0');

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

export function BrochureDesignSection() {
  const [activeProject, setActiveProject] = useState<BrochureProject | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tuple, setTuple] = useState([0, 0]); // [currentIndex, direction]
  const prefersReducedMotion = useReducedMotion();

  // Keep direction synchronized with currentIndex
  useEffect(() => {
    setTuple((prev) => {
      const prevIndex = prev[0];
      const direction = currentIndex > prevIndex ? 1 : -1;
      return [currentIndex, direction];
    });
  }, [currentIndex]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!activeProject) return;

    if (e.key === 'Escape') {
      setActiveProject(null);
    } else if (e.key === 'ArrowRight') {
      setCurrentIndex((prev) => (prev < activeProject.pageCount - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowLeft') {
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

  const openGallery = (project: BrochureProject) => {
    setActiveProject(project);
    setCurrentIndex(0);
  };

  const closeGallery = () => {
    setActiveProject(null);
  };

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeProject && currentIndex < activeProject.pageCount - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeProject && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Speed-loading: Preload previous, next, and next+1 pages
  useEffect(() => {
    if (activeProject) {
      const preload = (idx: number) => {
        if (idx >= 0 && idx < activeProject.pageCount) {
          const img = new Image();
          img.src = `${activeProject.basePath}/${activeProject.prefix}${formatPage(idx + 1)}${activeProject.extension}`;
        }
      };
      preload(currentIndex + 1);
      preload(currentIndex - 1);
      preload(currentIndex + 2);
    }
  }, [currentIndex, activeProject]);

  const slideVariants = {
    enter: (direction: number) => {
      if (prefersReducedMotion) return { opacity: 0 };
      return {
        x: direction > 0 ? 120 : -120,
        opacity: 0,
        scale: 0.98
      };
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => {
      if (prefersReducedMotion) return { opacity: 0 };
      return {
        x: direction < 0 ? 120 : -120,
        opacity: 0,
        scale: 0.98
      };
    }
  };

  const direction = tuple[1];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--glass-border)]">
      <SectionHeading title="Brochure & Profile" subtitle="Corporate Design" align="center" />

      <p className="text-center text-[var(--text-secondary)] text-sm sm:text-base max-w-2xl mx-auto mt-4 font-light">
        Corporate profiles, multi-page capability brochures, and brand catalogs crafted with precision, structured storytelling, and print-ready typography.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {brochureProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="group cursor-pointer glass-panel border border-[var(--glass-border)] rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col shadow-lg hover:shadow-2xl"
            onClick={() => openGallery(project)}
          >
            {/* Thumbnail Cover */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[var(--glass-fill)] flex items-center justify-center">
              <img
                src={`${project.basePath}/${project.prefix}01${project.extension}`}
                alt={`${project.title} Cover`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-5 py-2.5 rounded-full bg-[var(--accent)] text-[var(--bg-start)] font-medium text-sm shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <FileText size={16} />
                  Read Brochure
                </span>
              </div>

              {/* Page Count Badge */}
              <div className="absolute top-4 right-4 bg-[var(--bg-start)]/90 backdrop-blur-md text-[var(--text-primary)] px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md border border-[var(--glass-border)]">
                <Layers size={13} />
                {project.pageCount} pages
              </div>
            </div>

            {/* Info Footer */}
            <div className="p-6 flex-1 flex flex-col justify-between border-t border-[var(--glass-border)] bg-[var(--glass-fill)]">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[var(--text-primary)] font-bold text-lg leading-snug group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-xs mt-1">
                  {project.subtitle}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[var(--glass-border)]/60 flex items-center justify-between">
                <span className="text-xs text-[var(--text-secondary)]">
                  {project.client}
                </span>
                <span className="text-xs font-semibold text-[var(--accent)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Explore &rarr;
                </span>
              </div>
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-between bg-[var(--bg-start)]/95 backdrop-blur-xl pt-[env(safe-area-inset-top)] pb-4"
            onClick={closeGallery}
          >
            {/* Top Bar */}
            <div 
              className="w-full px-4 sm:px-8 py-4 flex items-center justify-between z-50 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <div className="text-[var(--text-primary)] font-medium bg-[var(--glass-fill)] backdrop-blur-md px-4 py-2 rounded-full border border-[var(--glass-border)] shadow-sm text-xs sm:text-sm">
                  {activeProject.title} &bull; Page {currentIndex + 1} of {activeProject.pageCount}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeProject.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center gap-1.5 text-xs text-[var(--text-primary)] hover:text-[var(--accent)] bg-[var(--glass-fill)] hover:bg-[var(--glass-fill-strong)] transition-all px-3.5 py-2 rounded-full border border-[var(--glass-border)]"
                  title="Download or view full PDF"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>

                <button
                  onClick={closeGallery}
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[var(--glass-fill)] border border-[var(--glass-border)] text-[var(--text-primary)] hover:bg-[var(--glass-fill-strong)] transition-colors min-tap-target shadow-sm"
                  aria-label="Close gallery"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Main Interactive Stage with Navigation Arrows */}
            <div 
              className="relative w-full flex-1 flex items-center justify-center px-4 sm:px-20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Arrow */}
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`absolute left-2 sm:left-6 z-50 w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center rounded-full bg-[var(--glass-fill)] backdrop-blur-md border border-[var(--glass-border)] text-[var(--text-primary)] transition-all shadow-xl ${
                  currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-[var(--glass-fill-strong)] hover:scale-105 active:scale-95'
                }`}
                aria-label="Previous page"
              >
                <ChevronLeft size={26} />
              </button>

              {/* Next Arrow */}
              <button
                onClick={nextSlide}
                disabled={currentIndex === activeProject.pageCount - 1}
                className={`absolute right-2 sm:right-6 z-50 w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center rounded-full bg-[var(--glass-fill)] backdrop-blur-md border border-[var(--glass-border)] text-[var(--text-primary)] transition-all shadow-xl ${
                  currentIndex === activeProject.pageCount - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-[var(--glass-fill-strong)] hover:scale-105 active:scale-95'
                }`}
                aria-label="Next page"
              >
                <ChevronRight size={26} />
              </button>

              {/* Current Page Image with Drag & Animation */}
              <div className="relative w-full h-full flex items-center justify-center">
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
                      x: { type: "spring", stiffness: 320, damping: 32 },
                      opacity: { duration: 0.2 }
                    }}
                    drag={!prefersReducedMotion ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.6}
                    onDragEnd={(_, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold && currentIndex < activeProject.pageCount - 1) {
                        setCurrentIndex(currentIndex + 1);
                      } else if (swipe > swipeConfidenceThreshold && currentIndex > 0) {
                        setCurrentIndex(currentIndex - 1);
                      }
                    }}
                    className="max-h-[75vh] sm:max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl select-none"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Quick Page Thumbnails / Jump Bar */}
            <div 
              className="w-full max-w-3xl px-4 py-2 flex items-center justify-center gap-1.5 overflow-x-auto no-scrollbar pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {Array.from({ length: activeProject.pageCount }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 min-tap-target ${
                    currentIndex === idx 
                      ? 'w-7 sm:w-9 bg-[var(--accent)] shadow-sm' 
                      : 'w-2 sm:w-2.5 bg-[var(--glass-border)] hover:bg-[var(--text-secondary)]'
                  }`}
                  aria-label={`Jump to page ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
