import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PdfViewerModalProps {
  isOpen: boolean;
  pdfUrl: string;
  title: string;
  onClose: () => void;
}

export function PdfViewerModal({ isOpen, pdfUrl, title, onClose }: PdfViewerModalProps) {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  // Handle overlay click to close
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0909]/80 backdrop-blur-sm"
          onClick={handleOverlayClick}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full sm:w-[90vw] sm:h-[90vh] bg-[#F7F7F7] rounded-xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#929AAB]/20 bg-[#F7F7F7]">
              <h2 className="text-[#0B0909] font-bold text-lg sm:text-xl truncate pr-4">
                {title}
              </h2>
              <div className="flex items-center gap-2">
                <a 
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs sm:text-sm text-[#929AAB] hover:text-[#0B0909] transition-colors px-3 py-1.5 rounded-full hover:bg-[#929AAB]/10"
                  title="Open in new tab (if preview fails)"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">Open in new tab</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-[#929AAB] hover:text-[#0B0909] hover:bg-[#929AAB]/10 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 w-full bg-[#E5E7EB]">
              <iframe
                src={pdfUrl}
                className="w-full h-full border-none"
                title={title}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
