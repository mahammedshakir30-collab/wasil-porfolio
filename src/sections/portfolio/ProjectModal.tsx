import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  src: string;
  client: string;
  type?: string;
  tags: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function ProjectModal({ project, onClose, onNext, onPrev, hasNext, hasPrev }: ProjectModalProps) {
  
  // Keyboard navigation and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNext, onPrev, hasNext, hasPrev]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex flex-col md:flex-row overflow-hidden"
        >
          {/* Main Image Area */}
          <div className="flex-1 relative flex items-center justify-center p-4 md:p-12 order-2 md:order-1 h-[60vh] md:h-screen">
            <motion.img
              key={project.id} // Re-animate when project changes
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={project.src}
              alt={project.title}
              className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-sm"
            />
            
            {/* Image Navigation */}
            <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <button 
                onClick={onPrev}
                disabled={!hasPrev}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center pointer-events-auto transition-all ${
                  hasPrev ? 'text-white hover:bg-white hover:text-black hover:scale-110' : 'text-white/20 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              
              <button 
                onClick={onNext}
                disabled={!hasNext}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center pointer-events-auto transition-all ${
                  hasNext ? 'text-white hover:bg-white hover:text-black hover:scale-110' : 'text-white/20 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>
          </div>

          {/* Side Panel Metadata */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-[400px] lg:w-[500px] bg-[var(--glass-fill)] border-l border-[var(--glass-border)] h-[40vh] md:h-screen overflow-y-auto flex flex-col order-1 md:order-2"
          >
            <div className="p-8 md:p-12 flex-1 flex flex-col">
              <div className="flex justify-end mb-8 md:mb-16">
                <button 
                  onClick={onClose}
                  className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white/70 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <motion.div 
                key={`meta-${project.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-2 leading-tight">
                  {project.title}
                </h2>
                
                <div className="flex items-center gap-3 mb-10">
                  <span className="px-3 py-1 rounded-full bg-warm-gold/10 text-warm-gold text-xs font-semibold tracking-widest uppercase border border-warm-gold/20">
                    {project.category}
                  </span>
                  <span className="text-white/40 text-sm">{new Date().getFullYear()}</span>
                </div>

                <div className="space-y-6 md:space-y-8 mb-10">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Client</h4>
                    <p className="text-white/90 font-medium">{project.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Overview</h4>
                    <p className="text-white/60 text-sm leading-relaxed font-light">
                      A premium {project.category.toLowerCase()} design crafted to elevate the brand's visual identity and engage the target audience effectively.
                    </p>
                  </div>

                  {project.tags && project.tags.length > 0 && (
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white/40 mb-3">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs hover:bg-white/10 transition-colors cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
